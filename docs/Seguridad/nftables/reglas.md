---
title: Reglas
---

# 🚀 Nftables

## ⚙️ Reglas

1. **Editar el archivo de configuración**

    !!! note "Ubicación"
        El servicio lee la configuración desde `/etc/sysconfig/nftables.conf`.

    ```{.bash .copy linenums="1"}
    sudo nano /etc/sysconfig/nftables.conf
    ```

2. **Reemplazamos el contenido por el siguiente ruleset**

    !!! warning "Importante"
        Ajusta los valores de las variables (`admins`, `servidores`, `mgmt`) según tu infraestructura.

    ```{.bash .copy linenums="1"}
    #!/usr/sbin/nft -f

    flush ruleset

    # --- Variables ---
    define admins     = { 192.168.1.10 }
    define servidores = { 192.168.1.100, 192.168.1.105 }

    define ssh        = 22
    define web        = { 80, 443 }
    define mariadb    = 3306
    define postgresql = 5432

    define mgmt       = "ens18"

    table inet filter {

        chain input {
            type filter hook input priority 0; policy drop;

            # Tráfico local
            iif "lo" accept

            # Conexiones establecidas y relacionadas
            ct state established,related accept
            ct state invalid drop

            # Protección contra paquetes inválidos
            tcp flags & (fin|syn|rst|psh|ack|urg) == 0 drop
            tcp flags & (fin|syn) == fin|syn drop
            tcp flags & (syn|rst) == syn|rst drop

            # Ping controlado
            iifname $mgmt icmp type echo-request limit rate 2/second burst 5 packets accept

            # SSH solo administradores + límite de intentos
            iifname $mgmt ip saddr $admins tcp dport $ssh ct state new meter ssh_meter { ip saddr limit rate 3/minute burst 3 packets } accept
            tcp dport $ssh drop

            # Servidor Web (HTTP/HTTPS) con límite
            iifname $mgmt tcp dport $web ct state new meter web_meter { ip saddr limit rate 40/second burst 80 packets } accept

            # Bases de datos: Permitir solo a los servidores autorizados
            iifname $mgmt ip saddr $servidores tcp dport $mariadb accept
            iifname $mgmt ip saddr $servidores tcp dport $postgresql accept
        }

        chain forward {
            type filter hook forward priority 0; policy drop;
        }

        chain output {
            type filter hook output priority 0; policy accept;
        }
    }
    ```

3. **Cargar las reglas**

    ```{.bash .copy linenums="1"}
    sudo systemctl reload nftables
    ```

4. **Verificar las reglas activas**

    ```{.bash .copy linenums="1"}
    sudo nft list ruleset
    ```
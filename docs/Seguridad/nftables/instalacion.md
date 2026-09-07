---
title: Instalación
---

# 🚀 Nftables

## 📦 Instalación

1. **Instalamos nftables**

    ```{.bash .copy linenums="1"}
    sudo dnf install nftables -y
    ```

2. **Activamos e iniciamos el servicio**

    ```{.bash .copy linenums="1"}
    sudo systemctl enable nftables --now
    ```

## ⚙️ Configuraciones

1. **Editar el archivo de configuración**

    !!! note "Nota"
        El servicio lee la configuración desde `/etc/sysconfig/nftables.conf`.

    ```{.bash .copy linenums="1"}
    sudo nano /etc/sysconfig/nftables.conf
    ```

2. **Cargar la configuración sin reiniciar**

    ```{.bash .copy linenums="1"}
    sudo systemctl reload nftables
    ```

3. **Ver las reglas activas**

    ```{.bash .copy linenums="1"}
    sudo nft list ruleset
    ```

## 🔧 Comandos

1. **Validar el ruleset sin aplicarlo**

    ```{.bash .copy linenums="1"}
    sudo nft -c -f /etc/sysconfig/nftables.conf
    ```

2. **Estatus nftables**

    ```{.bash .copy linenums="1"}
    sudo systemctl status nftables
    ```

3. **Reiniciar nftables**

    ```{.bash .copy linenums="1"}
    sudo systemctl restart nftables
    ```

4. **Detener nftables**

    ```{.bash .copy linenums="1"}
    sudo systemctl stop nftables
    ```
---
title: Instalación
---

# 🚀 MariaDB

## 📦 Instalación

1. **Configurar el Repositorio Oficial**

    !!! note "Nota"
        Prepara el sistema para descargar la versión específica `12.3.2`

    ```{.bash .copy linenums="1"}
    curl -LsS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version=12.3.2
    ```

2. **Instalación de Paquetes**

    ```{.bash .copy linenums="1"}
    sudo dnf install mariadb-server mariadb -y
    ```

3. **Habilitar e Iniciar el Servicio**

    ```{.bash .copy linenums="1"}
    sudo systemctl enable mariadb --now
    ```

## ⚙️ Configuraciones

1. **Asegurar la Instalación**

    !!! tip "Recomendación"
        Ejecuta el asistente para borrar usuarios anónimos y definir la contraseña de `root`:

    ```{.bash .copy linenums="1"}
    sudo mariadb-secure-installation
    ```

2. **Configuración del Servidor (Red y UTF8)**

    Edita el archivo de configuración:

    ```{.bash .copy linenums="1"}
    sudo nano /etc/my.cnf
    ```

    ```{.bash .copy linenums="1"}
    [server]

    skip-external-locking
    bind-address = 0.0.0.0
    character-set-server=utf8mb4
    collation-server=utf8mb4_unicode_ci
    ```

3. **Configuración del Firewall Interno**

    !!! tip "Información"
        Si tu sistema tiene `firewalld`, este comando abrirá el puerto `3306` permanentemente:

    ```{.bash .copy linenums="1"}
    sudo firewall-cmd --zone=public --add-port=3306/tcp --permanent
    sudo firewall-cmd --reload
    ```

4. **Reiniciar MariaDB y Crear Usuario**

    Aplica los cambios de configuración y accede para crear tu administrador:

    ```{.bash .copy linenums="1"}
    sudo systemctl restart mariadb
    sudo mariadb -u root -p
    ```

    Dentro de la consola SQL:

    ```{.bash .copy linenums="1"}
    CREATE USER 'admindb'@'%' IDENTIFIED BY 'passwd';
    GRANT ALL PRIVILEGES ON *.* TO 'admindb'@'%' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
    EXIT;
    ```

## 🔧 Comandos

1. **Estatus MariaDB**

    ```{.bash .copy linenums="1"}
    sudo systemctl status mariadb
    ```

2. **Iniciar MariaDB**

    ```{.bash .copy linenums="1"}
    sudo systemctl start mariadb
    ```

3. **Detener MariaDB**

    ```{.bash .copy linenums="1"}
    sudo systemctl stop mariadb
    ```

4. **Recargar configuracion MariaDB**

    ```{.bash .copy linenums="1"}
    sudo systemctl reload mariadb
    ```

5. **Conexión Remota (admindb)**

    !!! tip "Cliente SQL"
        Recuerda cambiar `IP_DEL_SERVIDOR` por la dirección real de tu servidor.

    ```{.bash .copy linenums="1"}
    mariadb -u admindb -p -h IP_DEL_SERVIDOR
    ```

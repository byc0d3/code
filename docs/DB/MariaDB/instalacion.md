---
title: Instalación
---

# 🚀 MariaDB

## 📦 Instalación

1. **Configurar el Repositorio Oficial**

    Prepara el sistema para descargar la versión específica 11.8.6.

    ```{.bash .copy linenums="1"}
    curl -LsS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version=11.8.6
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

4. **Asegurar la Instalación**

    Ejecuta el asistente para borrar usuarios anónimos y definir la contraseña de root:

    ```{.bash .copy linenums="1"}
    sudo mariadb-secure-installation
    ```

5. **Configuración del Servidor (Red y UTF8)**

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

6. **Configuración del Firewall Interno**

    Si tu sistema tiene firewalld, este comando abrirá el puerto 3306 permanentemente:

    ```{.bash .copy linenums="1"}
    sudo firewall-cmd --zone=public --add-port=3306/tcp --permanent
    sudo firewall-cmd --reload
    ```

7. **Reiniciar MariaDB y Crear Usuario**

    Aplica los cambios de configuración y accede para crear tu administrador:

    ```{.bash .copy linenums="1"}
    sudo systemctl restart mariadb
    sudo mariadb -u root -p
    ```

    Dentro de la consola SQL:

    ```{.bash .copy linenums="1"}
    CREATE USER 'admindb'@'%' IDENTIFIED BY '3m7qxhdd';
    GRANT ALL PRIVILEGES ON *.* TO 'admindb'@'%' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
    EXIT;
    ```

## 🔧 Comandos

8. **Estatus MariaDB**

    ```{.bash .copy linenums="1"}
    systemctl status mariadb
    ```

9. **Iniciar MariaDB**

    ```{.bash .copy linenums="1"}
    systemctl start mariadb
    ```

10. **Detener nginx**

    ```{.bash .copy linenums="1"}
    sudo systemctl stop nginx
    ```

11. **Recargar configuracion MariaDB**

    ```{.bash .copy linenums="1"}
    systemctl reload mariadb
    ```

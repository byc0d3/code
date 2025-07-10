## 📦 Instalación y configuración de MariaDB

1. Para instalar MariaDB en REHEL, primero actualizaremos el sistema:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo dnf update && sudo dnf upgrade
    ```

2. Ejecutaremos este comando para instalar la MariaDB:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo dnf install mariadb-server mariadb
    ```

3. Luego de la instalacion ejecutamos la configuracion se seguridad de MariaDB:

    ```{.py .copy linenums="1" hl_lines="2"}
    mariadb-secure-installation
    ```

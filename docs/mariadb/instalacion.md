## 📦 Instalación y configuración de MariaDB

1. **Actualizaremos el sistema**

    Actualiza el sistema para obtener siempre los ultimos paquetes estables:

    ```{.py .copy linenums="1"}
    sudo dnf update && sudo dnf upgrade
    ```

2. **Usar el script oficial de MariaDB**

    Este script configura el repositorio con la versión más reciente de la rama que especifiques:

    ```{.py .copy linenums="1"}
    curl -LsS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version=11
    ```

    !!! info "Si quieres la version 10, cambia 11 por 10"

    !!! info "Este comando:"
        - Detecta tu sistema (Rocky Linux 9 en este caso)
        - Configura el repo con la última versión estable de la rama indicada
        - Añade la clave GPG y desactiva el módulo AppStream para evitar conflictos

3. **Instalar MariaDB**

    Una vez configurado el repo instalamos:

    ```{.py .copy linenums="1"}
    sudo dnf install MariaDB-server MariaDB-client
    ```

4. **Habilitar y arrancar el servicio**

    ```{.py .copy linenums="1"}
    sudo systemctl enable mariadb
    sudo systemctl start mariadb
    ```


5. **Asegurar la instalación**

    ```{.py .copy linenums="1"}
    sudo mariadb-secure-installation
    ```

    !!! info "Seguimos los pasos segun la necesidad del servidor"

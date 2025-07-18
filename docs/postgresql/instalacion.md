## 📦 Instalación y configuración de PostgreSQL

=== "Rocky Linux 9.x"

    1. Para instalar MariaDB en REHEL, primero actualizaremos el sistema:

        ```{.bash .copy linenums="1"}
        sudo dnf update && sudo dnf upgrade
        ```

    2. Habilitar repositorio PostgreSQL oficial:

        ```{.bash .copy linenums="1"}
        sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-9-x86_64/pgdg-redhat-repo-latest.noarch.rpm
        ```

    3. Desinstalar versiones conflictivas (si existen):

        ```{.bash .copy linenums="1"}
        sudo dnf module disable -y postgresql
        ```

    4. Instalar PostgreSQL 16 (última versión estable):

        ```{.bash .copy linenums="1"}
        sudo dnf install -y postgresql16-server postgresql16-contrib
        ```

    5. Inicializar base de datos

        ```{.bash .copy linenums="1"}
        # Example usage
        sudo /usr/pgsql-16/bin/postgresql-16-setup initdb
        ```

    6. Habilitar e iniciar servicio

        ```{.bash .copy linenums="1"}
        # Example usage
        sudo systemctl enable postgresql-16
        sudo systemctl start postgresql-16
        ```

=== "Rocky Linux 10.x"


    1. Para instalar MariaDB en REHEL, primero actualizaremos el sistema:

        ```{.bash .copy linenums="1"}
        sudo dnf update && sudo dnf upgrade
        ```

    2. Habilitar repositorio PostgreSQL oficial:

        ```{.bash .copy linenums="1"}
        sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-10-x86_64/pgdg-redhat-repo-latest.noarch.rpm
        ```

    3. Desinstalar versiones conflictivas (si existen):

        ```{.bash .copy linenums="1"}
        sudo dnf module disable -y postgresql
        ```

    4. Instalar PostgreSQL 17 (última versión estable):

        ```{.bash .copy linenums="1"}
        sudo dnf install -y postgresql17-server postgresql17-contrib
        ```

    5. Inicializar base de datos

        ```{.bash .copy linenums="1"}
        # Example usage
        sudo /usr/pgsql-17/bin/postgresql-17-setup initdb
        ```

    6. Habilitar e iniciar servicio

        ```{.bash .copy linenums="1"}
        # Example usage
        sudo systemctl enable postgresql-17
        sudo systemctl start postgresql-17
        ```

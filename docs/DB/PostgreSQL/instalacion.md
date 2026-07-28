---
title: Instalación
---

# 🚀 PostgreSQL

## 📦 Instalación

1. **Instalar el Repositorio Oficial**

    !!! note "Variables"
        Se utiliza `$(rpm -E %rhel)` para detectar automáticamente la versión de tu sistema (ej. Rocky Linux 9 o similar) en lugar de una variable manual.

    ```{.bash .copy linenums="1"}
    sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-$(rpm -E %rhel)-x86_64/pgdg-redhat-repo-latest.noarch.rpm
    ```

2. **Deshabilitar el módulo por defecto**

    ```{.bash .copy linenums="1"}
    sudo dnf module disable postgresql -y
    ```

3. **Instalación de Paquetes**

    ```{.bash .copy linenums="1"}
    sudo dnf install -y postgresql18 postgresql18-server
    ```

4. **Inicializar la Base de Datos**

    ```{.bash .copy linenums="1"}
    sudo /usr/pgsql-18/bin/postgresql-18-setup initdb
    ```

5. **Habilitar e Iniciar el Servicio**

    ```{.bash .copy linenums="1"}
    sudo systemctl enable postgresql-18 --now
    ```

## ⚙️ Configuraciones

1. **Permitir conexiones externas (Red)**

    Edita el archivo principal de configuración:

    ```{.bash .copy linenums="1"}
    sudo nano /var/lib/pgsql/18/data/postgresql.conf
    ```

    Busca `listen_addresses` y modifícalo para que escuche en todas las interfaces:

    ```{.bash .copy linenums="1"}
    listen_addresses = '*'
    ```

2. **Configurar Autenticación (pg_hba.conf)**

    Edita las reglas de acceso:

    ```{.bash .copy linenums="1"}
    sudo nano /var/lib/pgsql/18/data/pg_hba.conf
    ```

    Añade la siguiente línea al final para permitir conexiones por contraseña desde cualquier red:

    ```{.bash .copy linenums="1"}
    host    all             all             0.0.0.0/0               scram-sha-256
    ```

3. **Configuración del Firewall Interno**

    !!! tip "Información"
        Abre el puerto `5432` de forma permanente:

    ```{.bash .copy linenums="1"}
    sudo firewall-cmd --zone=public --add-port=5432/tcp --permanent
    sudo firewall-cmd --reload
    ```

4. **Reiniciar PostgreSQL y Crear Usuario**

    Aplica los cambios y accede a la consola de Postgres (como el usuario `postgres`):

    ```{.bash .copy linenums="1"}
    sudo systemctl restart postgresql-18
    sudo -u postgres psql
    ```

    Dentro de la consola SQL, cambia la contraseña del usuario `postgres` y crea el usuario `admindb` (similar al de MariaDB):

    ```{.bash .copy linenums="1"}
    ALTER USER postgres WITH PASSWORD 'tu_password_seguro';
    CREATE USER admindb WITH PASSWORD 'passwd';
    ALTER USER admindb WITH SUPERUSER;
    \q
    ```

## 🔧 Comandos

1. **Estatus PostgreSQL**

    ```{.bash .copy linenums="1"}
    sudo systemctl status postgresql-18
    ```

2. **Iniciar PostgreSQL**

    ```{.bash .copy linenums="1"}
    sudo systemctl start postgresql-18
    ```

3. **Detener PostgreSQL**

    ```{.bash .copy linenums="1"}
    sudo systemctl stop postgresql-18
    ```

4. **Recargar configuracion PostgreSQL**

    ```{.bash .copy linenums="1"}
    sudo systemctl reload postgresql-18
    ```

5. **Conexión Remota (admindb)**

    !!! tip "Cliente SQL"
        Recuerda cambiar `IP_DEL_SERVIDOR` por la dirección real de tu servidor.

    ```{.bash .copy linenums="1"}
    psql -U admindb -h IP_DEL_SERVIDOR -d postgres
    ```

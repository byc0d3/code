## ⚙️ Querys basicos para usuarios y bases de datos en MariaDB

1. **Para conectarnos a la base de datos localmente**

    Nos conectamos a la base de datos localmente:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo mariadb -u root -p
    ```

2. **Para crear un usuario administrador**

    Crearemos un usuario para administrar nuestra base de datos:

    ```{.py .copy linenums="1" hl_lines="2"}
    CREATE USER 'admindb'@'%' IDENTIFIED BY 'password';
    ```

    !!! info "Este usuario se usara para administrar nuestra base de datos de manera remota"

3. **Privilegios sobre las bases de datos**

    Le daremos a este usuario todos los privilegios sobre todas las bases de datos :

    ```{.py .copy linenums="1" hl_lines="2"}
    GRANT ALL PRIVILEGES ON *.* TO 'admindb'@'%' WITH GRANT OPTION;
    ```

4. **Recargamos los privilegios**
    ```{.py .copy linenums="1" hl_lines="2"}
    FLUSH PRIVILEGES;
    ```

    Salimos de la base de datos


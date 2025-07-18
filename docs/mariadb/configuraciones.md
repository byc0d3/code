## ⚙️ Configuraciones basicas del servicio de MariaDB

1. **Permitir acceso remoto**

    Edita el archivo de configuración del servidor:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo vi /etc/my.cnf.d/server.cnf
    ```

    Busca la línea:

    ```{.py .copy linenums="1" hl_lines="2"}
    bind-address = 127.0.0.1
    ```

    Y cámbiala por:

    ```{.py .copy linenums="1" hl_lines="2"}
    bind-address = 0.0.0.0
    ```

    !!! warning "Esto si desea que cualquier ip acceda a nuestra base de datos, de lo contrario establezca una red preferida."

2. **Guardamos y reiniciamor el servicio**

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl restart mariadb
    ```

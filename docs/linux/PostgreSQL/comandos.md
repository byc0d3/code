## 🔧 Comandos basicos para el manejo del servicio de MariaDB

1. Ver version:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo mariadb --version
    ```

2. Activa el servicio:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl enable postgresql
    ```

3. Inicia el servicio:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl start postgresql
    ```

4. Reinicia el servicio:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl restart postgresql
    ```

5. Detiene el servicio:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl stop postgresql
    ```

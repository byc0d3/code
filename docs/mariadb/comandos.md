## 🔧 Comandos basicos para el manejo del servicio de MariaDB

1. **Ver version**:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo mariadb --version
    ```

2. **Activa el servicio**:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl enable mariadb
    ```

3. **Inicia el servicio**:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl start mariadb
    ```

4. **Reinicia el servicio**:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl restart mariadb
    ```

5. **Detiene el servicio**:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl stop mariadb
    ```

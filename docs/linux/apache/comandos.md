## 🔧 Comandos basicos para el manejo del servicio de HTTPD

1. Ver version:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo httpd -v
    ```

2. Activa el servicio:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl enable httpd
    ```

3. Inicia el servicio:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl start httpd
    ```

4. Reinicia el servicio:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl restart httpd
    ```

5. Detiene el servicio:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl stop httpd
    ```

## ✒️ Autores

- **byc0d3**

Para más información visita la página oficial de [Apache](https://httpd.apache.org/).

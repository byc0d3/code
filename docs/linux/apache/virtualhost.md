## 📦 Virtualhost para HTTPD

# Ruta para acrivos de virtualhost

1. Por defecto la mejor ubicacion para los virtualhost es en conf.d:

    ```{.py .copy linenums="1" hl_lines="2"}
    cd /etc/httpd/conf.d
    ```

## HTTP ⚙️

**Sitios http**

1. Ejemplo de virtualhost para http:

    ```{.py .copy linenums="1" hl_lines="2"}
    <VirtualHost *:80>
        DocumentRoot "/var/www/sitio"
        ServerName sitio.local
        ServerAlias *.sitio.local

        ErrorLog /var/log/httpd/sitio.local-error_log
        CustomLog /var/log/httpd/sitio.local-access_log combined

        <Directory "/var/www/sitio">
            AllowOverride All
            Require all granted
        </Directory>

        # Redirigir todo el tráfico HTTP a HTTPS
        RewriteEngine On
        RewriteCond %{HTTPS} off
        RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
    </VirtualHost>
    ```

2. Reinicio del servicio para que tome los cambios:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl restart httpd
    ```
## HTTPS ⚙️

**Sitios https**

1. Ejemplo de virtualhost para https:

    ```{.py .copy linenums="1" hl_lines="2"}
    <VirtualHost *:443>
        DocumentRoot "/var/www/sitio"
        ServerName sitio.local
        ServerAlias *.sitio.local

        ErrorLog /var/log/httpd/sitio.local-ssl_error_log
        CustomLog /var/log/httpd/sitio.local-ssl_access_log combined

        SSLEngine on
        SSLCertificateFile /etc/pki/tls/certs/wildcard.local.crt
        SSLCertificateKeyFile /etc/pki/tls/private/wildcard.local.key

        <Directory "/var/www/sitio">
            AllowOverride All
            Require all granted
        </Directory>
    </VirtualHost>
    ```

2. Reinicio del servicio para que tome los cambios:

    ```{.py .copy linenums="1" hl_lines="2"}
    sudo systemctl restart httpd
    ```

## ✒️ Autores

- **byc0d3**

Para más información visita la página oficial de [Apache](https://httpd.apache.org/).

## 📦 Virtualhost para Apache

1. **Ruta para acrivos de virtualhost**

    Por defecto la mejor ubicacion para los virtualhost es en conf.d:

    ```{.py .copy linenums="1"}
    cd /etc/httpd/conf.d
    ```

2. **Sitios http**

    Ejemplo de virtualhost para http:

    ```{.py .copy linenums="1"}
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

3. **Sitios https**
    Ejemplo de virtualhost para https:

    ```{.py .copy linenums="1"}
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

4. Reinicio del servicio para que tome los cambios:

    ```{.py .copy linenums="1"}
    sudo systemctl restart httpd
    ```

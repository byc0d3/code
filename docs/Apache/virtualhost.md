---
title: Virtualhost
---

# 🚀 Apache

## ⚙️ Virtualhost

1. **Los virtualhost los creamos en /etc/httpd/config.d**

    ```{.bash .copy linenums="1"}
    sudo nano dominio.local.conf
    ```

2. **Configuramos segun el caso**

	### http

    ```{.bash .copy linenums="1"}
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

	### https

    ```{.bash .copy linenums="1"}
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

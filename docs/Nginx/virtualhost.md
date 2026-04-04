---
title: Virtualhost
---

# 🚀 Nginx

## ⚙️ Virtualhost

1. **Los virtualhost los creamos en /etc/nginx/config.d**

    ```{.bash .copy linenums="1"}
    sudo nano dominio.local.conf
    ```

2. **Configuramos segun el caso**

	### http

    ```{.bash .copy linenums="1"}
    server {
		listen 80;
		server_name authentication.local;

		root /var/www/authentication/public;
		index index.php index.html;

		access_log /var/log/authentication.local-access.log;
		error_log  /var/log/authentication.local-error.log;

		location / {
			try_files $uri $uri/ /index.php?$query_string;
		}

		location ~ \.php$ {
			include fastcgi_params;
			fastcgi_pass unix:/run/php-fpm/www.sock;  # Ajusta si usas otro socket
			fastcgi_index index.php;
			fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
		}
		location ~ /\.ht {
			deny all;
		}
	}
    ```

	### https

    ```{.bash .copy linenums="1"}
	server {
		listen 443 ssl;
		server_name dominio.local www.dominio.local;

		ssl_certificate     /etc/nginx/certs/dominio.local.crt;
		ssl_certificate_key /etc/nginx/certs/dominio.local.key;

		ssl_protocols       TLSv1.2 TLSv1.3;
		ssl_ciphers         HIGH:!aNULL:!MD5;

		root /var/www/dominio/public;
		index index.php index.html;

		location / {
			try_files $uri $uri/ /index.php?$query_string;
		}

		location ~ \.php$ {
			include fastcgi_params;
			fastcgi_pass unix:/run/php-fpm/www.sock;
			fastcgi_index index.php;
			fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
		}

		location ~ /\.ht {
			deny all;
		}

		access_log /var/log/nginx/dominio_access.log;
		error_log  /var/log/nginx/dominio_error.log;
	}
    ```

	### Proxy

    ```{.bash .copy linenums="1"}
	server {
		server_name http://dominio.com;
		access_log	/var/log/nginx/dominio.com_access.log;
		error_log	/var/log/nginx/dominio.com_error.log;

		location / {
			#La configuración del proxy.
			proxy_pass http://10.31.xxx.xxx:80/;
			proxy_redirect off;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_http_version 1.1;
			proxy_read_timeout 1800;
			proxy_connect_timeout 1800;
			proxy_send_timeout 1800;
			send_timeout 1800;
			client_max_body_size 200M;
		}

		error_page 500 502 503 504 /50x.html;
		location = /50x.html {
			root /usr/share/nginx/html;
		}
	}
	```

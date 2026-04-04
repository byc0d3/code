# 🚀 NGINX

## 📦 Instalación

1. **Instalamos nginx**

    ```{.bash .copy linenums="1"}
    sudo dnf install nginx
    ```

2. **Activamos e iniciamos el servicio**

    ```{.bash .copy linenums="1"}
    sudo systemctl enable nginx --now
    ```

## ⚙️ Configuraciones

1. **Los virtualhost los creamos en /etc/nginx/config.d**

    ```{.bash .copy linenums="1"}
    sudo nano dominio.local.conf
    ```

## 🔧 Comandos

1. **Validar configuracion de nginx**

    ```{.bash .copy linenums="1"}
    sudo nginx -t
    ```

2. **Reiniciar nginx**

    ```{.bash .copy linenums="1"}
	sudo systemctl restart nginx
    ```

3. **Recargar configuracion nginx**

    ```{.bash .copy linenums="1"}
	sudo systemctl reload nginx
    ```

4. **Detener nginx**

    ```{.bash .copy linenums="1"}
	sudo systemctl stop nginx
    ```

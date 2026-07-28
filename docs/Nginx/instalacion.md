---
title: Instalación
---

# 🚀 Nginx

## 📦 Instalación

1. **Instalamos Nginx**

    ```{.bash .copy linenums="1"}
    sudo dnf install nginx
    ```

2. **Activamos e iniciamos el servicio**

    ```{.bash .copy linenums="1"}
    sudo systemctl enable nginx --now
    ```

## ⚙️ Configuraciones

1. **Los virtualhost los creamos en `/etc/nginx/conf.d`**

    !!! note "Nota"
        Asegúrate de cambiar `dominio.local` por tu nombre de dominio.

    ```{.bash .copy linenums="1"}
    sudo nano /etc/nginx/conf.d/dominio.local.conf
    ```

## 🔧 Comandos

1. **Validar configuración de nginx**

    !!! tip "Buena Práctica"
        Siempre valida la configuración antes de recargar el servicio.

    ```{.bash .copy linenums="1"}
    sudo nginx -t
    ```

2. **Reiniciar nginx**

    ```{.bash .copy linenums="1"}
	sudo systemctl restart nginx
    ```

3. **Recargar configuración nginx**

    ```{.bash .copy linenums="1"}
	sudo systemctl reload nginx
    ```

4. **Detener nginx**

    ```{.bash .copy linenums="1"}
	sudo systemctl stop nginx
    ```

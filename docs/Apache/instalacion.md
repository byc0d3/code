---
title: Instalación
---

# 🚀 Apache

## 📦 Instalación

1. **Instalamos httpd**

    ```{.bash .copy linenums="1"}
    sudo dnf install httpd
    ```

2. **Activamos e iniciamos el servicio**

    ```{.bash .copy linenums="1"}
    sudo systemctl enable httpd --now
    ```

## ⚙️ Configuraciones

1. **Los virtualhost los creamos en `/etc/httpd/conf.d`**

    !!! note "Nota"
        Asegúrate de cambiar `dominio.local` por tu nombre de dominio.

    ```{.bash .copy linenums="1"}
    sudo nano /etc/httpd/conf.d/dominio.local.conf
    ```

## 🔧 Comandos

1. **Validar configuración de httpd**

    !!! tip "Buena Práctica"
        Siempre valida la configuración antes de recargar el servicio.

    ```{.bash .copy linenums="1"}
    sudo httpd -t
    ```

2. **Reiniciar httpd**

    ```{.bash .copy linenums="1"}
	sudo systemctl restart httpd
    ```

3. **Recargar configuracion httpd**

    ```{.bash .copy linenums="1"}
	sudo systemctl reload httpd
    ```

4. **Detener httpd**

    ```{.bash .copy linenums="1"}
	sudo systemctl stop httpd
    ```

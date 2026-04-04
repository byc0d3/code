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

1. **Los virtualhost los creamos en /etc/httpd/config.d**

    ```{.bash .copy linenums="1"}
    sudo nano dominio.local.conf
    ```

## 🔧 Comandos

1. **Reiniciar httpd**

    ```{.bash .copy linenums="1"}
	sudo systemctl restart httpd
    ```

2. **Recargar configuracion httpd**

    ```{.bash .copy linenums="1"}
	sudo systemctl reload httpd
    ```

3. **Detener httpd**

    ```{.bash .copy linenums="1"}
	sudo systemctl stop httpd
    ```

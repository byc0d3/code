## 📦 Instalación y configuración de Apache

1. **Actualizacion del S.O**

    Para instalar Apache en REHEL, primero actualizaremos el sistema:

    ```{.bash .copy linenums="1"}
    sudo dnf update && sudo dnf upgrade
    ```

2. **Instalacion de Apache**

    Para instalar la ultima version de apache usamos:

    ```{.bash .copy linenums="1"}
    sudo dnf install -y httpd
    ```

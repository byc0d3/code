# SSH (Secure Shell) protocolo de red que permite establecer conexiones remotas seguras entre dispositivos.

## 📦 Instalacion y configuracion de SSH

1. **Actualizamos el sistema**

    Se actualiza el listado de paquetes y se instalan las actualizaciones disponibles:

    ```{.bash .copy linenums="1"}
    sudo dnf update && dnf upgrade -y
    ```

2. **Instalamos**

    Despues de actualizar instalamos el paquete ssh:

    ```{.bash .copy linenums="1"}
    sudo dnf install openssh-server -y
    ```


## ⚙️ Configuración básica

3. **El archivo principal es**

    Editamos el archivo de configuracion de ssh:

    ```{.bash .copy linenums="1"}
    sudo nano /etc/ssh/sshd_config
    ```


4. **Ejemplo de ajustes recomendados:**

    Estos son algunos ajustes basicos que podemos modificar en este archivo de configuracion:

    ```{.bash .copy linenums="1"}
    # Puerto personalizado
    Port 2222

    # Solo permitir usuarios específicos
    AllowUsers johann

    # Deshabilitar acceso root directo
    PermitRootLogin no

    # Usar solo autenticación por clave
    PasswordAuthentication no
    PubkeyAuthentication yes
    ```

5. **Reiniamos para que se apliquen los cambios**

    Editamos el archivo de configuracion de ssh:

    ```{.bash .copy linenums="1"}
    sudo systemctl restart ssh
    ```

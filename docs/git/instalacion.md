# GIT Software de control de versiones.

## 📦 Instalacion y configuracion de Git

1. **Actualizamos el sistema**

    Se actualiza el listado de paquetes y se instalan las actualizaciones disponibles:

    ```{.bash .copy linenums="1"}
    sudo dnf update-y
    ```

2. **Instalamos**

    Despues de actualizar instalamos el paquete git:

    ```{.bash .copy linenums="1"}
    sudo dnf install git -y
    ```

3. **Version de git**

    Para saber la version de git usamos:

    ```{.bash .copy linenums="1"}
    git --version
    ```

## ⚙️ Configuración básica

4. **El archivo principal es**

    Si es tu primera vez usando Git, configura tu nombre y correo:

    ```{.bash .copy linenums="1"}
    git config --global user.name "Tu Nombre"
    ```

    ```{.bash .copy linenums="1"}
    git config --global user.email "tu@email.com"
    ```

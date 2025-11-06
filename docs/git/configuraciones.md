# GIT Software de control de versiones.

## 📦 Configuracion de Git

1. **LLaves de acceso**

    Generamos las llaves con ssh-keygen:

    ```{.bash .copy linenums="1"}
    ssh-keygen -t rsa -b 4096 -C "correo-electronico@gmail.com" -f ~/.ssh/nombre-de-la-llave
    ```

2. **Ver llave**

    Para comprobarlo la creacion de la llave escribimos el comando:

    ```{.bash .copy linenums="1"}
    ls -al ~/.ssh
    ```

3. **Agente SSH**

    Debemos evaluar si está corriendo el servidor de ssh:

    ```{.bash .copy linenums="1"}
    eval $(ssh-agent -s)
    ```

3. **Permisos de archivos**

    Permisos en directorio y archivos que contienen las llaves publicas y privadas:

    ```{.bash .copy linenums="1"}
    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/nombre-de-la-llave
    chmod 644 ~/.ssh/nombre-de-la-llave.pub
    ```

4. **Agregar llave a GIT**

    Agregar la llave privada a Git:

    ```{.bash .copy linenums="1"}
    ssh-add ~/.ssh/nombre-de-la-llave
    ```

5. **Archivo de seguridad para github**

    Creramos un archivo de configuracion con nuestra llave para q se identifique contra github:

    ```{.bash .copy linenums="1"}
    nano ~/.ssh/config
    ```

    Con el contenido:

    ```{.bash .copy linenums="1"}
    Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/nombre-de-la-llave
    IdentitiesOnly yes
    ```

6. **Verifica conexión SSH con GitHub**

    ```{.bash .copy linenums="1"}
    ssh -T git@github.com
    ```

7. **Copiar llave a github**

    Para copiar el contenido de nuestra llave SSH pública:

    ```{.bash .copy linenums="1"}
    nano ~/.ssh/nombre-de-la-llave.pub
    ```

---
title: Instalación
---

# 🚀 GIT

## 📦 Instalación

1. **Instalamos GIT**

    ```{.bash .copy linenums="1"}
    sudo dnf install git
    ```

## ⚙️ Configuraciones

1. **Agregamos username y email de manera global**

    ```{.bash .copy linenums="1"}
    git config --global user.name "usuario"
    git config --global user.email "correo@gmail.com"
    ```
2. **Generamos una llave SSH para GIT**

    ```{.bash .copy linenums="1"}
    ssh-keygen -t rsa -b 4096 -C "correo@gmail.com" -f ~/.ssh/nombre-llave
    ```

3. **Validamos el agente SSH**

    ```{.bash .copy linenums="1"}
    eval $(ssh-agent -s)
    ```

4. **Asignamos los permisos al directorio y llaves SSH**

    ```{.bash .copy linenums="1"}
    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/nombre-llave
    chmod 644 ~/.ssh/nombre-llave.pub
    ```

5. **Agregamos la llave ssh**

    Editamos el archivo de configuracion:

    ```{.bash .copy linenums="1"}
    nano ~/.ssh/config
    ```

    Y agregamos:

    ```{.bash .copy linenums="1"}
    Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/nombre-llave
    IdentitiesOnly yes
    ```


## 🔧 Comandos

1. **Probamos la configuracion**

    ```{.bash .copy linenums="1"}
    ssh -T git@github.com
    ```

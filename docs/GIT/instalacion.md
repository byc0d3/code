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

    !!! tip "Sugerencia"
        Usa tu correo institucional o personal asociado a GitHub/GitLab.

    ```{.bash .copy linenums="1"}
    ssh-keygen -t rsa -b 4096 -C "correo@gmail.com" -f ~/.ssh/nombre-llave
    ```

3. **Validamos el agente SSH**

    ```{.bash .copy linenums="1"}
    eval $(ssh-agent -s)
    ```

4. **Asignamos los permisos al directorio y llaves SSH**

    !!! warning "Importante"
        Los permisos son estrictamente requeridos para que SSH funcione correctamente.

    ```{.bash .copy linenums="1"}
    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/nombre-llave
    chmod 644 ~/.ssh/nombre-llave.pub
    ```

5. **Agregamos la llave SSH**

    Editamos el archivo de configuración:

    ```{.bash .copy linenums="1"}
    nano ~/.ssh/config
    ```

    Y agregamos:

    ```{.bash .copy linenums="1"}
    Host github.com
    Hostname ssh.github.com
    Port 443
    User git
    IdentityFile ~/.ssh/nombre-llave
    IdentitiesOnly yes
    PubkeyAcceptedKeyTypes +ssh-rsa
    HostkeyAlgorithms +ssh-rsa
    ```

## 🔧 Comandos

1. **Probamos la configuración**

    ```{.bash .copy linenums="1"}
    ssh -T git@github.com
    ```

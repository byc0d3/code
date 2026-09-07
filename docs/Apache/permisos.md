---
title: Permisos
---

# 🚀 Apache

## 🔧 Dueño y permisos base

1. **Aplicamos `775` a directorios y `664` a archivos para mayor seguridad**

    !!! tip "Recomendación"
        Estos permisos garantizan que el grupo `apache` pueda modificar los archivos creados por el usuario y viceversa.

    ```{.bash .copy linenums="1"}
    sudo chown -R usuario:apache /var/www
    find /var/www -type d -exec sudo chmod 775 {} +
    find /var/www -type f -exec sudo chmod 664 {} +
    ```

2. **Configurar `umask` en Bash o zsh (para futuros archivos)**

    !!! note "Nota"
        Esto asegura que los nuevos archivos creados en la terminal tengan los permisos correctos.

    BASH

    ```{.bash .copy linenums="1"}
    grep -qxF 'umask 002' ~/.bashrc || echo 'umask 002' >> ~/.bashrc
    source ~/.bashrc
    ```

    ZSH

    ```{.bash .copy linenums="1"}
    grep -qxF 'umask 002' ~/.zshrc || echo 'umask 002' >> ~/.zshrc
    source ~/.zshrc
    ```

3. **Configurar `umask` en PHP-FPM**

    Editamos el archivo:

    ```{.bash .copy linenums="1"}
    sudo systemctl edit php-fpm
    ```

    Y agregamos:

    ```{.bash .copy linenums="1"}
    [Service]
    UMask=0002
    ```

4. **Activar herencia de grupo (SGID) en directorios**

    !!! tip "Herencia de grupo"
        Esto hace que los archivos nuevos hereden el grupo `apache`.

    ```{.bash .copy linenums="1"}
    find /var/www -type d -exec sudo chmod g+s {} +
    ```

5. **ACLs para herencia persistente**

    !!! warning "Importante"
        Este es el "seguro de vida" de permisos. Garantiza de forma estricta los permisos para nuevos archivos y directorios.

    ```{.bash .copy linenums="1"}
    sudo setfacl -Rdm u:usuario:rwx,g:apache:rwx /var/www
    sudo setfacl -Rm u:usuario:rwx,g:apache:rwx /var/www
    ```

6. **Reiniciar servicios**

    ```{.bash .copy linenums="1"}
    sudo systemctl daemon-reload && sudo systemctl restart php-fpm && sudo systemctl restart httpd
    ```
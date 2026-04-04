---
title: Permisos
---

# 🚀 Nginx

## 🔧 Dueño y permisos base

1. **Aplicamos 775 a directorios y 664 a archivos para mayor seguridad**

    ```{.bash .copy linenums="1"}
    sudo chown -R usuario:nginx /var/www
    find /var/www -type d -exec sudo chmod 775 {} +
    find /var/www -type f -exec sudo chmod 664 {} +
    ```

2. **Configurar umask en Bash o zsh(para futuros archivos)**

    BASH

    ```{.bash .copy linenums="1"}
	grep -qxF 'umask 002' ~/.zshrc || echo 'umask 002' >> ~/.bashrc
    source ~/.bashrc
    ```

    ZSH

    ```{.bash .copy linenums="1"}
	grep -qxF 'umask 002' ~/.zshrc || echo 'umask 002' >> ~/.zshrc
    source ~/.zshrc
    ```

3. **Configurar umask en PHP-FPM**

    Editamos el archivo:

    ```{.bash .copy linenums="1"}
	sudo systemctl edit php-fpm
    ```

    Y agregamos:

    ```{.bash .copy linenums="1"}
	[Service]
    UMask=0002
    ```

4. **Activar herencia de grupo (SGID) en directorios, Esto hace que archivos nuevos hereden el grupo 'nginx'**

    ```{.bash .copy linenums="1"}
	find /var/www -type d -exec sudo chmod g+s {} +
    ```

5. **ACLs para herencia persistente (El "seguro de vida" de permisos)**

    ```{.bash .copy linenums="1"}
    sudo setfacl -Rdm u:usuario:rwx,g:nginx:rwx /var/www
    sudo setfacl -Rm u:usuario:rwx,g:nginx:rwx /var/www
    ```

6. **Reiniciar servicios**

    ```{.bash .copy linenums="1"}
	sudo systemctl daemon-reload && sudo systemctl restart php-fpm && sudo systemctl restart nginx
    ```

---
title: Composer
---

# 🚀 PHP

## 📦 Instalación

1. **Instalación de Composer**

    !!! tip "Recomendación"
        Asegúrate de ejecutar estos comandos con los privilegios adecuados o como usuario con permisos a **/usr/local/bin**.

    ```{.bash .copy linenums="1"}
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    php composer-setup.php
    php -r "unlink('composer-setup.php');"
    sudo mv composer.phar /usr/local/bin/composer
    ```

## 🔧 Comandos

1. **Ver versión de Composer**

    ```{.bash .copy linenums="1"}
    composer -V
    ```

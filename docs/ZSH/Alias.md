---
title: Alias
---

# 🚀 ALIAS ZSH

## ⚙️ Configuraciones

1. **Creamos un archivo para los alias**

    ```{.bash .copy linenums="1"}
    nano ~/.alias
    ```
2. **Agregamos los alias**

    ```{.bash .copy linenums="1"}
    alias cat='bat'
    alias ll='lsd -lh --group-dirs=first'
    alias la='lsd -a --group-dirs=first'
    alias l='lsd --group-dirs=first'
    alias lla='lsd -lha --group-dirs=first'
    alias ls='lsd --group-dirs=first'
    alias lst='lsd --tree --group-dirs=first'
    alias cls='clear'
    gitp() {
        git add .
        git commit -m "${1:-update: $(date +'%d-%m-%Y %H:%M')}"
        git push origin main
    }
    alias vpn="sudo openfortivpn -c /etc/openfortivpn/config --cipher-list 'DEFAULT:!DH'"
    ```

3. **Editamos el archivo zshrc**

    ```{.bash .copy linenums="1"}
    nano ~/.zshrc
    ```

4. **Al final del archivo agregamos**

    ```{.bash .copy linenums="1"}
    source ~/.alias
    ```

5. **Y recargamos la configuracion con**

    ```{.bash .copy linenums="1"}
    source ~/.zshrc
    ```

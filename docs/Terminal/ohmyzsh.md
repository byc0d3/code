# 🌐 ¡Oh, mi ZSH! (SHELL Avanzada)

Gestiona tu configuración de Zsh. Incluye miles de funciones útiles, helpers, plugins, temas y algunas características que te sorprenderán.

## 📦 Instalación

1. **Actualizamos el sistema**

    Se actualiza el listado de paquetes y se instalan las actualizaciones disponibles:

    ```{.bash .copy linenums="1"}
    sudo dnf update && dnf upgrade -y
    ```

2. **Instalamos zsh**

    ```{.bash .copy linenums="1"}
    sudo dnf install zsh -y
    ```

3. **Instalamos oh my zsh**


    curl

    ```{.bash .copy linenums="1"}
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

    wget

    ```{.bash .copy linenums="1"}
    sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
    ```

4. **Instalamos algunos complementos para zsh**

    Syntax highlighting

    ```{.bash .copy linenums="1"}
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
    ```

    Autosuggestions

    ```{.bash .copy linenums="1"}
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
    ```

    Completions

    ```{.bash .copy linenums="1"}
    git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions
    ```

5. **Instalamos powerlevel10k**

    Instalamos un tema para zsh, powerlevel10k

    ```{.bash .copy linenums="1"}
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
    ```

    !!! info "Info"
        Nos pedirá si queremos establecer la SHELL de zsh por defecto.

## ⚙️ Powerlevel10k

1. **Activar powerlevel10k**

    Una vez instalado powerlevel10k, debemos habilitarlo:

    ```{.bash .copy linenums="1"}
    nano ~/.zshrc
    ```

    Buscamos la linea "ZSH_THEME", y reemplazamos:

    ```{.bash .copy linenums="1"}
    ZSH_THEME="powerlevel10k/powerlevel10k"
    ```

    Buscamos la linea "plugins" y agregamos:

    ```{.bash .copy linenums="1"}
    plugins=(
        sudo
	    git
	    z
	    zsh-autosuggestions
	    zsh-syntax-highlighting
	    zsh-completions
	)
    ```

    Para recargar los cambios ejecutamos:

    ```{.bash .copy linenums="1"}
    source ~/.zshrc
    ```

    !!! info "Info"
        Si tenemos algun problema o nos equivocamos en elgun paso, podemos recargar la configuracion ejecutando:

    ```{.bash .copy linenums="1"}
    p10k configure
    ```

## ⚙️ BAT y BAT

1. **Instalamos BAT**

    BAT es un CAT pero mejorado:

    ```{.bash .copy linenums="1"}
    sudo dnf install bat
    ```

2. **Instalamos LSD**

    LSD es un LS pero mejorado:

    ```{.bash .copy linenums="1"}
    sudo dnf install lsd
    ```

3. **Alias**

    Creamos un archivo llamado alias para agregar los atajos de BAT y CAT:

    ```{.bash .copy linenums="1"}
    nano ~/.alias
    ```

    Lo abrimos y agregamos lo siguiente:

    ```{.bash .copy linenums="1"}
    alias cat='bat'
    alias ll='lsd -lh --group-dirs=first'
    alias la='lsd -a --group-dirs=first'
    alias l='lsd --group-dirs=first'
    alias lla='lsd -lha --group-dirs=first'
    alias ls='lsd --group-dirs=first'
    alias lst='lsd --tree --group-dirs=first'
    ```

    Luego editamos el archivo zshrc para cargar los alias:

    ```{.bash .copy linenums="1"}
    nano ~/.zshrc
    ```

    Al final del archivo agregamos:

    ```{.bash .copy linenums="1"}
    source ~/.alias
    ```

    Guardamos y recargamos los cambios ejecutando:

    ```{.bash .copy linenums="1"}
    source ~/.zshrc
    ```

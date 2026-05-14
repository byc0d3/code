---
title: Instalacion
---

# 🚀 ZSH

## 📦 Instalación

1. **Instalamos zsh**

    ```{.bash .copy linenums="1"}
    sudo dnf install zsh bat lsd -y
    ```
2. **Instalamos oh my zsh**

    curl

    ```{.bash .copy linenums="1"}
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

    wget

    ```{.bash .copy linenums="1"}
    sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
    ```

3. **Complementos para zsh**

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

4. **Powerlevel10k (Opcional)**

    Instalamos un tema para zsh, powerlevel10k

    ```{.bash .copy linenums="1"}
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
    ```

    Para activarlo

    ```{.bash .copy linenums="1"}
    nano ~/.zshrc
    ```

    Buscamos la linea "ZSH_THEME", y reemplazamos:

    ```{.bash .copy linenums="1"}
    ZSH_THEME="powerlevel10k/powerlevel10k"
    ```

    Recargamos

    ```{.bash .copy linenums="1"}
    source ~/.zshrc
    ```

5. **Reconfigurar p10k (Si esta instalado y activo)**

    ```{.bash .copy linenums="1"}
    p10k configure
    ```

## ⚙️ Configuraciones

1. **Activar los plugin**

    Editamos:

    ```{.bash .copy linenums="1"}
    nano ~/.zshrc
    ```
    Agregamos los plugin

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

## 🔧 Comandos

1. **Recargar configuracion**

    ```{.bash .copy linenums="1"}
    source ~/.zshrc
    ```

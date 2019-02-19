# Mac启用item2 + zsh + oh-my-zsh

## 安装item2

- 进入 https://www.iterm2.com
- 选择版本下载

## 修改 shell 为 zsh

- 进入 item2
- 查看是否有zsh，没有需要安装zsh

```bash
cat /etc/shells

执行结果：
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```

- 修改终端为zsh

```bash
chsh -s /bin/zsh
```

- 重启查看配置是否生效:

```bash
echo $SHELL

执行结果：
/bin/zsh
```

## 安装 oh-my-zsh

- github: https://github.com/robbyrussell/oh-my-zsh
- 安装

```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 修改 oh-my-zsh 主题

- 修改主题为ys

```bash
vi ~.zshrc

ZSH_THEME="ys"
```

## 安装插件

- zsh-autosuggestions 自动补全历史输入过的命令

```bash
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

启用
vi ~.zshrc

plugins=(
  ...
  zsh-autosuggestions
)
```

- syntax-highlighting 语法高亮插件

```bash

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

启用
vi ~.zshrc

plugins=(
  ...
  zsh-syntax-highlighting
)
```

- autojump 目录跳转

``` bash
brew install autojump

启用
vi ~.zshrc

plugins=(
  ...
  autojump
)

[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh

```
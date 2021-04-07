---
title: "[Linux] Setting up Django Project on Linux Machine"
date: 2020-03-03 16:04:05
category: django
thumbnail: { thumbnailSrc }
draft: false
---

Let's find out how to set up a Django project on your Linux machine.

## Prerequisites

Ubuntu 18.04 (tested and works on 3/3/20)

```bash
sudo apt-get update
```

```bash
sudo apt-get dist-upgrade
```

if you see something like below, just hit `enter`

this window might pop up several times, keep hitting `enter` 

![1](https://user-images.githubusercontent.com/45819975/113827708-938cf100-97be-11eb-932a-fe6231590363.png)

## Install Python

```bash
sudo apt-get install python-pip
```

install pyenv

```bash
curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash
```

set environment variable for pyenv

```bash
vi ~/.bashrc
```

if you use zsh, open ~/.zshrc

add below in the file

```bash
export PATH="~/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

```bash
source ~/.bashrc
```

again, if you use zsh, source ~/.zshrc

install pyenv dependencies

```bash
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev \
libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev \
xz-utils tk-dev
```

install Python

```bash
 pyenv install 3.6.9
```

install Python libraries

```bash
sudo apt-get install python-dev python-setuptools
```

upgrade pip

```bash
pip install --upgrade pip
```

## Create Virtualenv


```bash
pyenv virtualenv 3.6.9 <name of your choice>
```

`pyenv virtualenvs` : List all Python virtualenvs found in `$PYENV_ROOT/versions/*'

activate virtualenv

```bash
pyenv activate <name of virtualenv>
```

when you activate a virtualenv, you will see something like below in terminal

```bash
(name of virtualenv)->....
```

## Clone a Django Project

cd to where you want to put Django Project inside

```bash
cd /wherever/you/want
```

clone Django project

```bash
git clone <blabla.git>
```

Generate SSH key and add key to your Gitlab/Github account: 

[Getting permission denied (public key) on gitlab](https://stackoverflow.com/questions/40427498/getting-permission-denied-public-key-on-gitlab)



```bash
git branch -b <name of your choice>
```

## Install Requirements

```bash
pip install -r requirements.txt
```

## For Your Sake

```bash
vi ~/.bashrc
```

add `secret key`, `settings.module`, `database password` to .bashrc/.zshrc so you don't have to type `export SECRET_KEY='blabla'` everytime

```bash
export SECRET_KEY='<secret-key>'
export DJANGO_SETTINGS_MODULE=<settings-module>
export DATABASE_PASSWORD=<db-password>
```

```bash
source ~/.bashrc
```

source action with virtualenv activated will deactivate it

activate your virtualenv again

if it says `already activated`, try `pyenv deactivate` and then activate it

## Test Runserver

```bash
cd dir/your/manage.py/lives
```

```bash
python manage.py runserver
```

<br>

---

<br>

<U>Reference<U>

[https://stackoverflow.com/questions/40427498/getting-permission-denied-public-key-on-gitlab](https://stackoverflow.com/questions/40427498/getting-permission-denied-public-key-on-gitlab)

<br>

<br>
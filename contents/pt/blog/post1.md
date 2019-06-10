---
name: 'post1'
tipo: 'DevOps'
tempoleitura: '4 minutos'
tecnologia: 'Docker'
title: Como Instalar Docker no Ubuntu 18.04
year: 9 Junho 2019
color: '#81C784'
id: 'post1'
autor: 'LihDi'
noMainImage: true
description: |
  Neste tutorial vamos instalar o Docker no Ubuntu 18.04
---


# Como instalar Docker no Ubuntu

  * Primeiramente devemos atualizar o índice do pacote apt
  ``` bash
  $ sudo apt-get update
  ```
  * Instalar os pacotes necessários para permitir o apt usar o repositório via HTTPS
  ```sh
  sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
  ```
  * Adicionar a chave oficial GPG do Docker
  ```sh
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  ```
  * Verifique que você tem a chave com o fingerprint 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88
  ```sh
  sudo apt-key fingerprint 0EBFCD88
  ```
  * Adicione o repositório estável
  ```sh
  sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
  ```
  * Atualiza o índice do pacote apt
  ```sh
  sudo apt-get update
  ```
  * Instalação no Ubuntu
  ```sh
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io
  ```
  * Start no server
  ```sh
  sudo service docker start	
  ```
  * Verificar a versão
  ```sh
  docker -v
  ```




# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Instalação e Utilização](#2-instalação-e-utilização)
* [2.1 Instalação](#2-instalação)
* [2.1 Utilização](#2-utilização)
* [3. Como fazer uso da biblioteca](#3-como-fazer-uso-da-biblioteca)
* [4. Considerações técnicas](#4-considerações-técnicas)
* [5. Autores](#5-autores)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

Sendo assim, foi desenvolvida uma biblioteca que possibilita verificar quais links são válidos dentro de um arquivo de extenção md (*MarkDown*).

## 2. Instalação e Utilização

Para que a biblioteca possa ser utilizada, você deverá instalá-la em sua máquina e dar os comandos necessários para que a mesma funcione.

### 2.1 Instalação
Para a instalação, você deverá:

Em algum terminal, você irá digitar o comando abaixo e instala-la globalmente, podendo assim ser usada em qualquer pasta de seus projetos.

` npm install -g MarjorieSantos/SAP004-md-links `

### 2.2 Utilização

Para fazer uso da mesma, basta digitar (também no terminal) o nome do arquivo ou pasta que contenha um arquivo com extensão *markdown*  + o comando para executar a biblioteca:

`md-links <pasta ou arquivo desejado>`

Assim, a biblioteca está funcionando e lhe retornará os links contidos dentro do arquivo.

Caso queira verificar se os links dentro do seu arquivo estejam quebrados, funcionandos ou em 'manuteção', basta adicionar a opção `--validate` ao lado do comando. Por exemplo:

`md-links <pasta ou arquivo desejado> --validate`

Ao executar, o primeiro comando, você terá esta estrutura:

`Caminho do arquivo ➨ URL ➨ Título da URL`


Caso acrescente o `--validate` será assim:

`Caminho do arquivo ➨ URL ➨ Status do link ➨ Título da URL`

## Considerações Técnicas
* JavaScript ES6+
* Node JS
* Common JS
* JavaScript
* Git e Github

## Autores

Esse projeto foi desenvvolvido por Marjorie Santos, aluna da Laboratória BR.

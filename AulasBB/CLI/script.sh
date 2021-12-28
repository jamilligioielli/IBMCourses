#!/bin/bash

 
echo "Seja bem vindo a pasta de "${PWD##*/}" de "$(whoami)" "
USER="$(whoami)"
PSWRD="1234"

echo "Para acessar, insira suas credenciais"

read -p "usuário: " usuario

read -p "senha: " senha

if [[ ("$usuario" == "$USER") && ("$senha" == "$PSWRD") ]]; then
echo "Bem vindo, $usuario:$senha"
else 
 echo "Suas credenciais são inválidas, $USER:$PSWRD"
 echo "Ops, isso não deveria ter acontecido"
fi



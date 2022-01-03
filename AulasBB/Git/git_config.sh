#!/bin/bash

create_branch(){
	git checkout -b $branch_name
	echo "Você criou a branch $branch_name"
	echo "$branch_name branch" >> "$branch_name".txt
	git add .
	git commit -am "Adding "$branch_name".txt"
	git push -u origin "$branch_name"
	echo "Você está na branch $branch_name"
}

merge_branch(){
	echo "Merging branches"
	read -p "Para qual branch você quer voltar? " branch
	git checkout "$branch"
	echo "Você voltou para a branch $branch"
	read -p "De qual branch você quer fazer o merge? " branch_2

	git merge "$branch_2"
	git add .
	git commit -am "Merging $branch_2 to $branch"
	echo "Você fez merge da branch $branch_2 para a branch $branch"
	git push -u origin $branch
}

execute_command(){
	read -p "Por favor, cole  a chave https de origem do seu repositório remoto: " repo
	echo "origin foi definida para $repo"

	echo "# $diretorio " >> README.MD
	git add README.MD
	git commit -am "Initial commit"
	git remote add origin "$repo"
	git pull origin main
	git push -u origin main

	read -p "Quantas branches você quer criar? " qtd_branches
	echo "Quais branches você quer criar? "
	for ((i=0; i<$qtd_branches; i++)) do
		read -p "Nome da branch: " branch_name
		create_branch 
	done

	echo "Você tem as seguintes branches criadas: "
	git branch

	read -p "Deseja fazer merge?" resp
	if [[ ("$resp" == "S") || ("$resp" == "SIM")]]; then
		for ((i=0; i<$qtd_branches; i++)) do
			merge_branch
		done
	else 
		echo "Tudo atualizado por aqui. Olhe seu status: "
		git status 
	fi
}


read -p "Deseja criar um novo diretorio para seu projeto? (S/N) " opt 

if [[ ("$opt" == "S") || ("$opt" == "SIM") ]]; then
	read -p "Insira o nome do projeto: " diretorio
	mkdir "$diretorio"
	cd "$diretorio"
	echo "Bem vindo ao projeto $diretorio "
elif [[ ("$opt" == "N") || ("$opt" == "NAO")]]; then
	echo "Iniciando seu repositorio..." 
	diretorio=${PWD##*/}
else 
	echo "Ops, não entendi o que quis dizer"
	exit 1
fi

REPO=/.git/

if [[ ! -f "$REPO" ]]; then
	git init 
fi
	git branch -m master main	
	execute_command

exit 0
#!/bin/bash

echo "Conexão com o little-school-server"
qtd_usuarios=3

get_ids(){
    get_response=$(curl -sb -H GET 'http://localhost:3000/posts')
    for response in "${get_response[@]}"
    do
        echo "$response"
    done
    # pegar valores do json 
    # id_inicial
    # id_final
    # exportar os ids
}

create_user(){
    read -p " Nome de usuario: " author
    id=$i
    echo "Usuario $id = $author"
    curl -d '{ "id":"'$id'", "name":"'$author'" }' -H "Content-Type: application/json" -X POST http://localhost:3000/profiles
}

create_posts(){
    for (( j=1; j<=2; j++)) do
    read -p " Insira um titulo para sua postagem: " post
        id_post=$j
        curl -d '{ "id":"'$id_post'", "title":"'$post'" , "author":"'$author'" }' -H "Content-Type: application/json" -X POST http://localhost:3000/posts
    done
}
create_comments(){
    curl -sb -H GET 'http://localhost:3000/posts'
    read -p "Qual post você quer comentar? " postId
        for (( j=1; j<=5; j++)) do
            id_comment=$j
            read -p " Insira um corpo para seu comentario: " body
            curl -d '{ "id":"'$id_comment'", "body":"'$body'" , "postId":"'$postId'" }' -H "Content-Type: application/json" -X POST http://localhost:3000/posts 
        done
}

# edit_user(){}
# delete_user(){}

execute_command(){
    # Inicio - criar usuarios e posts
    for ((i=1; i<=$qtd_usuarios; i++)) do
        create_user
    # Dois posts para cada usuario
        create_posts
    done

    # Cinco comentarios a cada post, pelo menos 3 usuarios

    # Alterar nome e id do usuario

    # Deletar todos os usuarios e seus posts e comentarios 
}


execute_command


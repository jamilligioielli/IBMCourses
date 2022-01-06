#!/bin/bash

echo "Conexão com o little-school-server"


get_ids(){
    # get_response=$(curl -s GET http://localhost:3000/posts | jq  '.[].id')
    array_search=$(curl -s GET http://localhost:3000/"$1" | jq  'length') 
    init=1
    array_index="$((array_search-init))"
    # echo $array_index
    last_value=$(curl -s GET http://localhost:3000/"$1" | jq  '.['$array_index'].id')
    # echo $last_value
    id_inicial="$((last_value + init))"
    echo $id_inicial
    total=$2
    id_final="$((last_value + total))"
    echo $id_final
    
}

create_user(){
    read -p " Nome de usuario: " author
    id=$i
    echo "Usuario $id = $author"
    curl -d '{ "id":'$((id))', "name":"'$author'" }' -H "Content-Type: application/json" -X POST http://localhost:3000/profiles
}

create_posts(){
    get_ids posts 2  
    for (( j=$id_inicial; j<$id_final; j++)) do
    read -p " Insira um titulo para sua postagem: " post
        id_post=$j
        curl -d '{ "id":'$((id_post))', "title":"'$post'" , "author":"'$author'" }' -H "Content-Type: application/json" -X POST http://localhost:3000/posts
        curl -s GET http://localhost:3000/posts | jq -r '.id'
    done
}
create_comments(){
    curl -sb -H GET 'http://localhost:3000/posts'
    get_ids comments 5
    read -p "Qual post você quer comentar? " postId
        for (( j=$id_inicial; j<=$id_final; j++)) do
            id_comment=$j
            read -p " Insira um corpo para seu comentario: " body
            curl -d '{ "id":'$((id_comment))', "body":"'$body'" , "postId":"'$postId'" }' -H "Content-Type: application/json" -X POST http://localhost:3000/posts 
        done
}

# edit_user(){}
# delete_user(){}

execute_command(){
    # Inicio - criar usuarios e posts
    get_ids profiles 3

    for ((i=$id_inicial; i<=$id_final; i++)) do
        create_user
    # Dois posts para cada usuario
        create_posts
    done

    # Cinco comentarios a cada post, pelo menos 3 usuarios

    # Alterar nome e id do usuario

    # Deletar todos os usuarios e seus posts e comentarios 
}


execute_command


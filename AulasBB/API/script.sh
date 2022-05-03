#!/bin/bash

echo "Conexão com o little-school-server"


get_ids(){
    # get_response=$(curl -s GET http://localhost:3000/posts | jq  '.[].id')
    array_search=$(curl -s GET http://localhost:3000/"$1" | jq  'length') #retorna 4

    array_index="$(( array_search - 1))"
    
    echo $array_index
    last_value=$(curl -s GET http://localhost:3000/"$1" | jq  '.['$array_index'].id')
    # echo $last_value
    id_inicial="$((last_value + 1))"
    # echo $id_inicial
    total=$2
    id_final="$((last_value + total))"
    # echo $id_final
    
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
    curl -s -H GET 'http://localhost:3000/posts'
    get_ids comments 5
    read -p "Qual post você quer comentar? " postId
        for (( j=$id_inicial; j<=$id_final; j++)) do
            id_comment=$j
            read -p " Insira um texto para seu comentario: " body
            curl -d '{ "id":'$((id_comment))', "body":"'$body'" , "postId":"'$postId'" }' -H "Content-Type: application/json" -X POST http://localhost:3000/posts 
        done
}

edit_user(){
    read -p "Qual usuario você quer editar? " userId
    echo "Exibindo usuario $userId : "
    curl -d '{ "id":'$userId', "name":"'$author'" }' -H "Content-Type: application/json" -X GET http://localhost:3000/profiles/"$userId"

    read -p " Novo nome para $userId: " newAuthor

    curl -d '{ "name":"'$newAuthor'" }' -X PUT http://localhost:3000/profiles/"$userId" -H "Content-Type: application/json" 
}

delete_user(){
    read -p "Qual usuario você quer deletar? " userId
    echo "Deletando usuario $userId... seus posts e comentarios"

    delete_comments
    delete_posts
    curl -X DELETE http://localhost:3000/profiles/$userId
}

delete_posts(){
    postAuthor=$(curl -s GET http://localhost:3000/profiles/"$userId" | jq  '.name')
    curl -X DELETE http://localhost:3000/posts/?author=$postAuthor
}

delete_comments(){
    postIds=$(curl -s GET http://localhost:3000/posts | jq  '.[].id') 
    # postAuthor=$(curl -s GET http://localhost:3000/profiles/"$userId" | jq  '.name')
    for i in $postIds
    do
        # curl -X DELETE http://localhost:3000/comments/?postId=$postId
        echo $i
            # curl -s GET http://localhost:3000/comments/?postId=$i 
    done
}

execute_command(){
    # Inicio - criar usuarios e posts
    # get_ids profiles 3

    # for ((i=$id_inicial; i<$id_final; i++)) do
    #     create_user
    # Dois posts para cada usuario
    #     create_posts
    # done
    # Cinco comentarios a cada post, pelo menos 3 usuarios

    # Alterar nome e id do usuario
    delete_comments
    # Deletar todos os usuarios e seus posts e comentarios 
    # delete_user

}


execute_command


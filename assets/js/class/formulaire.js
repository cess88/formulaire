let object;
// vas contenir la liste de tout les utilisateurs
if (localStorage.getItem('users')) {
     object = JSON.parse(localStorage.getItem('users'))
}else{
     object = {
        users: []
    }
}

function subscribe() {
    let name = document.querySelector("#name").value
    let firstname = document.querySelector("#firstname").value
    let mail = document.querySelector("#mail").value
    let password = document.querySelector("#password").value
    let errorContainer = document.querySelector("#error")
    if (name == "" || firstname == "" || mail == "" || password == "") {
        errorContainer.innerText = "Le formulaire n'est pas valide"
    } else {

        errorContainer.innerText = ""
        let user = {
            id: object.users.length + 1,
            name: name,
            firstname: firstname,
            mail: mail,
            password: password,
        }
        object.users.push(user)
        localStorage.setItem('users', JSON.stringify(object))
    }
}

function getUsers() {
    let objectLocalStorage = localStorage.getItem('users')
    objectLocalStorage = JSON.parse(objectLocalStorage) // transforme en objet javascript
    return objectLocalStorage.users
}

function login() {
    let errorContainer = document.querySelector("#error")
    let succesContainer = document.querySelector("#succes")
    let user;
    let users = getUsers()
    for (let i = 0; i < users.length; i++) {
        user = users[i]
        if (user.mail == document.querySelector('#mail').value && user.password == document.querySelector('#password').value ) {
            succesContainer.innerText = "Vous etes connecté !"
            errorContainer.innerText = ""
            break
        }
        if (i == users.length) {
            succesContainer.innerText = ""
            errorContainer.innerText = "aucun utilisateur ne correspond"
        }        
    }

}

function userList(){
    for (let i = 0; i < users.length; i++) {
        getUsers[i]= document.querySelectorAll("#name" && "#firstname");
        
    }
}

 

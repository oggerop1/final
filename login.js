let username= document.getElementById("Username");
let password = document.getElementById("password");
let button = document.getElementById("btn");

button.addEventListener('click',(e)=>{
    e.preventDefault();
    let data = {
        username : username.value,
        password: password.value
    }
    //console.log(data);
    login(data);
});

const login = async (data)=>{
    try{

        const response = await fetch("https://fakestoreapi.com/users/");
        const users = await response.json();
        console.log("users from json: " , users);
        localStorage.setItem('users', JSON.stringify(users));
        let found = false;
        for (const user of users)
        {
            if((data.username.toLowerCase() === user.username && data.password === user.password))
            {
                console.log('login correcto');
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('userData', data.username);
                found = true;
                window.location.href = "carrito.html";
            } 
        }
        if((data.username.toLowerCase() ==='admin' && data.password ==='admin')){
            console.log('login Admin correcto');
            localStorage.setItem('userData', data.username);
            found = true;
            window.location.href = "index.html";
        }

        if(!found)
        {
            mostrarMensaje("usuario y/o contraseñas incorrectas","danger");
            //console.log('usuario y/o contraseñas incorrectas');
        }
    }catch(error)
    {
        mostrarMensaje("Error!!,","danger");
        //console.log(error);
    }
}


function mostrarMensaje(mensaje, claseBT){
    const div = document.createElement('div');              // creo el div
    div.className= 'alert alert-' +claseBT+ ' mt-2';        // le creo la clase BT 
    div.appendChild(document.createTextNode(mensaje));      // creo el nodo
    const container = document.querySelector('.container'); // obtengo el conteiner
    const row = document.querySelector('.row');             // obtengo el row
    container.insertBefore(div, row);                       // le indico que inserte el div entre el container y el row

    // seteo el tiempo que tiene que mostrarse el mensaje
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}
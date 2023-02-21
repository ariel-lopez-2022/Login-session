
let loginRegister = document.getElementById('loginRegister')
let nombre = document.getElementById('nombreRegister')
let apellido = document.getElementById('apellidoRegister')
let email = document.getElementById('emailRegister')
let password= document.getElementById('passwordRegister')

loginRegister.addEventListener('submit', (e)=>{
    e.preventDefault()
     console.log(nombre.value)
     console.log(apellido.value)
     console.log(email.value)
     console.log(password.value)
    fetch ('api/session/register',{
        method:'post', 
        headers:{
             'Content-Type':'aplication/json',
        },
        body: JSON.stringify({
            firstname:nombre.value, 
            lastname:apellido.value,
            userEmail:email.value,
            password:password.value
        }),
        
    }).then (res => res.json()).then(data=>{
        console.log(data)
        window.alert('usuario Creado')
        window.location.href = '/login'
    }).catch((error) =>{
        window.alert('error al iniciar Session')
    })
})


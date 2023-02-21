const formLogin = document.getElementById('login')
const inputemail = document.getElementById('email')
const inputpassword = document.getElementById('password')

formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch ('api/session/login',{
        method:'post', 
        headers:{
             'Content-Type':'aplication/json',
        },
        body: JSON.stringify({userEmail:inputemail.value, password:inputpassword.value}),
    }).then (res => res.json()).then(data=>{
        window.alert(`Bienvenido ${data.userEmail}`)
    }).catch((error) =>{
        window.alert('error al iniciar Session')
    })
})
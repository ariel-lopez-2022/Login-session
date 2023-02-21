const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(loginForm));
  fetch('/api/session/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  })
    .then((res) => res.json())
    .then((data) => {
      
       if (data){
        console.log("esta"+data)
       }else{
        console.log("no esta" +data)
       }




    //     if (data == null ) {
    //     Swal.fire('Usuario o Password Incorrecto')
    //     setTimeout(function () {
    //         location.replace('/login');
    //       }, 3000);
    //   } else {
    //     Swal.fire({
    //         icon: 'success',
    //         title: `Bienvenido ${data.firstName + '' + data.lastName}`,
    //         showConfirmButton: false,
    //       });
    // }

    });
  
});

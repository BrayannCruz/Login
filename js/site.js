var u = "Brayann";
var p = "12345";

function login() {
    var usr = document.querySelector('#usr').value;
    var psw = document.querySelector('#psw').value;
    if (u == usr && p == psw) {
        alert("Bienvenido " + usr);
        $('#msg').css({ 'display': 'flex' });
        $('.input-login').css({ 'display': 'none' });
        $('#u').text(usr);
    } else {
        alert("Usuario o contraseña Incorrectos, intente de nuevo");
        $('.ue').css({ 'display': 'flex' });
        $('#uerr').text("ERROR AL INICIAR SESION");
    }


};
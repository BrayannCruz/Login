var u = "Brayann";
var p = "12345";

function login() {
    var usr = document.querySelector('#usr').value;
    var psw = document.querySelector('#psw').value;
    if (u == usr && p == psw) {
        alert("Bienvenido " + usr);
        $('#msg').css({ 'display': 'flex' });
        $('#success').css({ 'display': 'flex' });
        $('#fail').css({ 'display': 'none' });
        $('.input-login').css({ 'display': 'none' });
        $('#u').text(usr);
    } else {
        $('#msg').css({ 'display': 'flex' });
        $('#fail').css({ 'display': 'flex' });
        $('#success').css({ 'display': 'none' });
        alert("Usuario o contraseña Incorrectos, intente de nuevo");
        $document.getElementById('#u').innerHTML = "Párrafo de texto";
        $('#u').text("ERROR AL INICIAR SESION");
    }


};
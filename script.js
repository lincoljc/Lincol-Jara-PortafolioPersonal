let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("sqlserver");
        habilidades[5].classList.add("oracle");
        habilidades[6].classList.add("c");
        habilidades[7].classList.add("java");
        habilidades[8].classList.add("ensamblaje");
        habilidades[9].classList.add("redes");
        habilidades[10].classList.add("ofimatica");
        habilidades[11].classList.add("arquitecto");
        habilidades[12].classList.add("trabajo");
        habilidades[13].classList.add("problema");
        habilidades[14].classList.add("decision");
        habilidades[15].classList.add("adaptacion");
        habilidades[16].classList.add("comunicar");
        habilidades[17].classList.add("proactividad");
        habilidades[18].classList.add("empatia");
        habilidades[19].classList.add("creatividad");
        habilidades[20].classList.add("tolerancia");
        habilidades[21].classList.add("orientacion");
        habilidades[22].classList.add("proyecto");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



var typed = new Typed(".typing",{
    strings:["Programador","Administrador de base de datos","Administrador de redes","Soporte Informatico","Arquitecto de software","Tecnico Telecomunicaciones"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

function mensaje(){
    Swal.fire(
        'Mensaje enviado',
        '',
        'success'
      )
    document.getElementById("nombre").value = "";
    document.getElementById("fono").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("tema").value = "";
    document.getElementById("mensaje").value = "";
}
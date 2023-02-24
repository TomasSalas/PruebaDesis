$(document).ready(function () {
  checkTwo()
  loadRegions()
  loadComunas()
  loadCandidatos()
  sendInformacion()
});

function checkTwo(){
  $('input[type="checkbox"]').click(function () {
    let count = 0
    if ($('#web').prop("checked") == true) {
      count = count + 1
    }
    if ($('#tv').prop("checked") == true) {
      count = count + 1
    }
    if ($('#redSocial').prop("checked") == true) {
      count = count + 1
    }
    if ($('#amigo').prop("checked") == true) {
      count = count + 1
    }
    if(count == 2){
      if ($('#web').prop("checked") == false){
        $("#web").attr("disabled", true);
      }
      if ($('#tv').prop("checked") == false){
        $("#tv").attr("disabled", true);
      }
      if ($('#redSocial').prop("checked") == false){
        $("#redSocial").attr("disabled", true);
      }
      if ($('#amigo').prop("checked") == false){
        $("#amigo").attr("disabled", true);
      }
    }else{
      $("#web").attr("disabled", false);
      $("#tv").attr("disabled", false);
      $("#redSocial").attr("disabled", false);
      $("#amigo").attr("disabled", false);
    }
  });
}

function loadRegions(){
  $.ajax({
    method: "GET",
    url: "./PHP/regiones.php",
    success: function(data){
      $("#region").html(data);
    }
  });
}

function loadComunas(){
  $('#region').change(function() {
    $.ajax({
      method: "POST",
      url: "./PHP/comunas.php",
      data: {
        region_id: $(this).val()
      },
      success: function(data){
        $("#comuna").html(data);
      }
    });
  });
}

function loadCandidatos(){
  $.ajax({
    method: "GET",
    url: "./PHP/candidatos.php",
    success: function(data){
      $("#candidato").html(data);
    }
  });
}

function sendInformacion(){
  $('#btn_enviar').click(function() {
    let rut = $('#rut').val();
    let nombre = $('#name').val();
    let alias = $('#alias').val();
    let email = $('#email').val();
    let region = $('#region').val();
    let comuna = $('#comuna').val();
    let candidato = $('#candidato').val();
    let web = 0
    let tv = 0
    let redSocial = 0
    let amigo = 0

    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    let validacionRut = validarut(rut)
    let validAliasNumero = new RegExp("^[0-9]+$")
    let validAliasLetras = new RegExp("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")


    if(nombre === ""){
      return alert("NOMBRE NO PUEDE IR VACIO")
    }

    if(alias.length < 5 ){
      return alert("ALIAS DEBE CONTENER MAS DE 5 CARACTERES")
    }

    if(validAliasLetras.test(alias) || validAliasNumero.test(alias)){
      return alert("ALIAS DEBE TENER NUMERO Y LETRAS")
    }

    if(validacionRut != "VALID"){
      return alert("RUT INVALIDO O INCOMPLETO")
    }

    if(!validEmail.test(email)){
      return alert("EMAIL NO VALIDO")
    }

    if ($('#web').prop("checked") == true) {
      web = 1
    }
    if ($('#tv').prop("checked") == true) {
      tv = 1
    }
    if ($('#redSocial').prop("checked") == true) {
      redSocial = 1
    }
    if ($('#amigo').prop("checked") == true) {
      amigo = 1

    }
    $.ajax({
      method: "POST",
      url: "./PHP/save.php",
      data: {
        nombre: nombre,
        alias: alias,
        rut: rut,
        email: email,
        region: region,
        comuna: comuna, 
        candidato: candidato,
        web: web,
        tv: tv,
        redSocial: redSocial,
        amigo: amigo
      },
      success: function(data){
        if(data == 1){
          alert("Información insertada")
          location.reload()
        }
      }
    });

  })
}

function validarut(rut) {

  let response = ""
  let valor = rut.replaceAll('.','');

  valor = valor.replaceAll('-','');


  cuerpo = valor.slice(0,-1);
  dv = valor.slice(-1).toUpperCase();
  rut.value = cuerpo + '-'+ dv
  if(cuerpo.length < 7) { 
    return response = "INCOMPLETO"
  }
  suma = 0;
  multiplo = 2;
  for(i=1;i<=cuerpo.length;i++) {
     
      index = multiplo * valor.charAt(cuerpo.length - i);
     
      suma = suma + index;
     
      if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

  }
  // Verifica Dígito V
  dvEsperado = 11 - (suma % 11);

  //  Especiales (0 y K)
  dv = (dv == 'K')?10:dv;
  dv = (dv == 0)?11:dv;
  
  // valida digito
  if(dvEsperado != dv) { 
    return response = "INVALID"
  }
  
  return response = "VALID"
}
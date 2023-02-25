<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
  <script type="text/javascript" src="main.js"></script>
  <title>Prueba Desis</title>
</head>
<body>
  <div>
    <h2>Formulario de votación</h2>
    <form>
      <div>
        <strong><label>Nombre y Apellido</label></strong>
        <input type="text" id="name" style="margin-left: 70px"/>
        <br>
        <br>
        <strong><label>Alias</label></strong>
        <input type="text" id="alias" style="margin-left: 160px"/>
        <br>
        <br>
        <strong><label>RUT</label></strong>
        <input type="text" id="rut" style="margin-left: 162px"/>
        <br>
        <br>
        <strong><label>Email</label></strong>
        <input type="email" id="email" style="margin-left: 155px"/>
        <br>
        <br>
        <strong><label>Region</label></strong>
        <select id="region" style="margin-left:148px; width: 155px;">

        </select>
        <br>
        <br>
        <strong><label>Comuna</label></strong>
        <select id="comuna"style="margin-left:140px; width: 145px;">

        </select>
        <br>
        <br>
        <strong><label>Candidato</label></strong>
        <select id="candidato" style="margin-left:128px; width: 145px;">

        </select>
        <br>
        <br>
        <strong><label>Como se entero de nosotros : </label></strong>
        
        <label> Web</label>
        <input type="checkbox" id="web"  value="Web">
        
        <label> TV</label>
        <input type="checkbox" id="tv"  value="TV">

        <label> Redes Sociales</label>
        <input type="checkbox" id="redSocial"  value="RedSocial">
        
        <label> Amigo </label>
        <input type="checkbox" id="amigo"  value="Amigo">
        <br>
        <br>
        <input type="button" id="btn_enviar" value="Enviar">
      </div>
    </form>
  </div>
</body>
</html>
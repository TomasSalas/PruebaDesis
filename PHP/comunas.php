<?php
  $region_id = $_POST['region_id'];

  require('conexion.php');
  
  $result = $conn->query("SELECT * FROM comunas where region_id ='$region_id'");
  $html = "<option value='0'>Seleccione:</option>";

  foreach ($result as $row){
      $html .=  "<option value='".$row['comuna_id']."'>".$row['comuna_nombre']."</option>";
  }
  
  echo $html;
?>
function _0x4ddb(){let x=["3tKzojE","test","#tv","EMAIL NO VALIDO","63522itwqYH","click","html","285733BGJHDx","NOMBRE NO PUEDE IR VACIO","GET","slice","#name","#candidato","#rut","#email","^[a-zA-Z\xf1\xd1\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda]+$","POST","Informaci\xf3n insertada","392406AhelHX","toUpperCase","160eQENbK","#web","ready","#alias","^[0-9]+$","#redSocial","#region","#amigo","prop","RUT INVALIDO O INCOMPLETO","length","value","#comuna",'input[type="checkbox"]',"861648imWncw","INCOMPLETO","45VSLmCx","ALIAS DEBE TENER NUMERO Y LETRAS","replaceAll","reload","#btn_enviar","ajax","attr","./PHP/comunas.php","disabled","INVALID","48qWRoGt","checked","./PHP/candidatos.php","162825QQMiOL","./PHP/regiones.php","426429hxyuui","val","190399gIXJxK","charAt"];return(_0x4ddb=function(){return x})()}const _0x4794c8=_0x284f;function checkTwo(){let x=_0x4794c8;$(x(487))[x(459)](function(){let _=x,e=0;!0==$(_(475))[_(482)]("checked")&&(e+=1),!0==$("#tv")[_(482)](_(446))&&(e+=1),!0==$("#redSocial")[_(482)]("checked")&&(e+=1),!0==$(_(481))[_(482)]("checked")&&(e+=1),2==e?(!1==$(_(475))[_(482)](_(446))&&$(_(475))[_(441)](_(443),!0),!1==$(_(456)).prop(_(446))&&$(_(456))[_(441)](_(443),!0),!1==$(_(479))[_(482)](_(446))&&$(_(479))[_(441)](_(443),!0),!1==$(_(481)).prop(_(446))&&$(_(481))[_(441)]("disabled",!0)):($(_(475))[_(441)](_(443),!1),$(_(456))[_(441)](_(443),!1),$(_(479))[_(441)]("disabled",!1),$(_(481)).attr(_(443),!1))})}function loadRegions(){let x=_0x4794c8;$.ajax({method:x(463),url:x(449),success:function(_){let e=x;$(e(480))[e(460)](_)}})}function loadComunas(){let x=_0x4794c8;$(x(480)).change(function(){let _=x;$.ajax({method:_(470),url:_(442),data:{region_id:$(this)[_(451)]()},success:function(x){$("#comuna")[_(460)](x)}})})}function loadCandidatos(){let x=_0x4794c8;$[x(440)]({method:"GET",url:x(447),success:function(_){let e=x;$(e(466))[e(460)](_)}})}function sendInformacion(){let x=_0x4794c8;$(x(439))[x(459)](function(){let _=x,e=$(_(467))[_(451)](),c=$(_(465))[_(451)](),t=$(_(477))[_(451)](),a=$(_(468))[_(451)](),n=$(_(480))[_(451)](),d=$(_(486))[_(451)](),o=$("#candidato").val(),b=0,l=0,r=0,u=0,s=validarut(e),f=RegExp(_(478)),h=RegExp(_(469));return""===c?alert(_(462)):t.length<5?alert("ALIAS DEBE CONTENER MAS DE 5 CARACTERES"):h[_(455)](t)||f.test(t)?alert(_(491)):"VALID"!=s?alert(_(483)):/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(a)?void(!0==$(_(475))[_(482)](_(446))&&(b=1),!0==$(_(456))[_(482)](_(446))&&(l=1),!0==$("#redSocial")[_(482)](_(446))&&(r=1),!0==$(_(481)).prop(_(446))&&(u=1),$[_(440)]({method:_(470),url:"./PHP/save.php",data:{nombre:c,alias:t,rut:e,email:a,region:n,comuna:d,candidato:o,web:b,tv:l,redSocial:r,amigo:u},success:function(x){let e=_;1==x&&(alert(e(471)),location[e(438)]())}})):alert(_(457))})}function _0x284f(x,_){let e=_0x4ddb();return(_0x284f=function(x,_){return e[x-=438]})(x,_)}function validarut(x){let _=_0x4794c8,e=x[_(492)](".","");if(cuerpo=(e=e[_(492)]("-","")).slice(0,-1),dv=e[_(464)](-1)[_(473)](),x[_(485)]=cuerpo+"-"+dv,cuerpo[_(484)]<7)return _(489);for(suma=0,multiplo=2,i=1;i<=cuerpo[_(484)];i++)index=multiplo*e[_(453)](cuerpo[_(484)]-i),suma+=index,multiplo<7?multiplo+=1:multiplo=2;return(dvEsperado=11-suma%11)!=(dv=0==(dv="K"==dv?10:dv)?11:dv)?_(444):"VALID"}(function(x,_){let e=_0x284f,c=x();for(;;)try{let t=-parseInt(e(448))/1+parseInt(e(472))/2*(parseInt(e(454))/3)+parseInt(e(488))/4+parseInt(e(490))/5*(-parseInt(e(458))/6)+parseInt(e(461))/7*(-parseInt(e(445))/8)+-parseInt(e(450))/9+parseInt(e(474))/10*(parseInt(e(452))/11);if(138156===t)break;c.push(c.shift())}catch(a){c.push(c.shift())}})(_0x4ddb,138156),$(document)[_0x4794c8(476)](function(){checkTwo(),loadRegions(),loadComunas(),loadCandidatos(),sendInformacion()});
window.addEventListener('load', function(event) {

  var topCharacter = 140;
  var buttonTweet = document.getElementById('btn-tweet');
  var textTweet = document.getElementById('text-tweet');
  var quantityCharacter = document.getElementById('quantity-character');
  var container = document.getElementById('container-tweet');

  quantityCharacter.textContent = topCharacter;

  //Funcion para deshabilitar un boton
  var disableButton = function(btn) {
    /*document.getElementById('btn-tweet').style.color='#000';*/
    return btn.setAttribute('disabled', true);
  }
  //Funcion para habilitar un boton
  /*
  var enableButton = function(btn){
    return btn.setAttribute('disabled',false);
  }*/
  disableButton(buttonTweet);


  //Incluyendo el top del numero de caracteres a ingresar

  //Función para obtener la hora
  var hora = function() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var hora;
    if(horas < 13){
       hora = horas + ":" + minutos +" AM ";
    }else {
      hora = horas + ":" + minutos +" PM ";
    }
    return hora;
  }

  //Funcion para agregar tweet
  var addTweet = function(event) {
    var pargraphTweet = document.createElement('p');
    var horaTweet = document.createElement('spam');

    pargraphTweet.textContent = textTweet.value;
    horaTweet.textContent = hora();
    pargraphTweet.appendChild(horaTweet);
    container.appendChild(pargraphTweet);
    document.getElementById('text-tweet').value='';
  }

  //contar los caracteres
  var quantityCharacter = function(event) {

    var textLength = textTweet.value.length;
      disableButton(buttonTweet);

    if (textLength !== 0) {
      //document.getElementById('btn-tweet').setAttribute('disabled',false);
      //console.log(textLength);
      buttonTweet.disabled = false;
      switch (true) {
        case textLength > 120 && textLength <= 130:
          document.getElementById('quantity-character').style.color = '#783a80';
          break;
        case textLength > 130 && textLength <= 140:
          document.getElementById('quantity-character').style.color = '#319d62';
          break;
        case textLength > 140:
          buttonTweet.disabled = true;
          break;
        default:
          document.getElementById('quantity-character').style.color = '#1F98C7';
          break;
      }
    } else {
      disableButton(buttonTweet);
    }
    newCharacter = topCharacter - textLength;
    document.getElementById('quantity-character').textContent = newCharacter;
  }

  var ajustarTextArea = function(event) {
    event.target.style.height = "1px";
    event.target.style.height = (25 + event.target.scrollHeight) + "px";
  }

  /*Creando evento para hacer click en el button*/
  buttonTweet.addEventListener('click', addTweet);
  textTweet.addEventListener('keyup', quantityCharacter);
  textTweet.addEventListener('keyup', ajustarTextArea);



})

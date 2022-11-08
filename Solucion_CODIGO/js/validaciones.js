  // Validaciones de Contacto
  var expresion = {
    correo: /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i,
    telefono: /^\d{10}$/,
  };

  function validar_correo() {
    var valor = document.getElementById("email").value;
    if (expresion.correo.test(valor)) {
      return true;
    } else {
      alert("Correo no valido");
      return false;
    }
  }

  function validar_telefono() {
    var valor = document.getElementById("telefono").value;
    if (valor.length == 10 && !isNaN(valor)) {
      return true;
    } else {
      alert("Telefono no valido");
      return false;
    }
  }

  function validar() {
    if (validar_correo() == true && validar_telefono() == true) {
      return true;
    } else {
      return false;
    }
  }

  // Deshabilitar boton de enviar
  function deshabilitar_btn() {
    if (validar() == true) {
      var button = document.getElementById("btnEnviar");
      button.disabled = true;
      button.value = "Enviando datos ..........";
      this.form.submit();
    }
  }

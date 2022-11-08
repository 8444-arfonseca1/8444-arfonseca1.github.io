// Mostrar y ocultar formulario

function showfrm(selected) {
  if (selected) {
    document.getElementById("FormConfidencial").style.display = "block";
  } else {
    document.getElementById("FormConfidencial").style.display = "none";
  }
}

function hidefrm(selected) {
  if (selected) {
    document.getElementById("FormConfidencial").style.display = "none";
    document.getElementById("SubmitDireccion").style.display = "block";
  }
  if (!selected) {
    document.getElementById("SubmitDireccion").style.display = "none";
  }
}

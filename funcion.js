
function encriptar() {
  let textarea = document.getElementById("message");
  let valor = textarea.value;
  let texto = valor.split("");

  var a = "ai";
  var e = "enter";
  var x = "imes";
  var o = "ober";
  var u = "ufat";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      texto[i] = a;
    } else if (texto[i] === "e") {
      texto[i] = e;
    } else if (texto[i] === "i") {
      texto[i] = x;
    } else if (texto[i] === "o") {
      texto[i] = o;
    } else if (texto[i] === "u") {
      texto[i] = u;
    }
  }
  valor = texto.join("");

  const textarea2 = (document.getElementById("resultado").value = valor);
}

function desencriptar() {
  let textarea = document.getElementById("message");
  let valor = textarea.value;
  let texto = valor.split("");
  const nuevaPalabra = [];

  var a = "ai";
  var e = "enter";
  var x = "imes";
  var o = "ober";
  var u = "ufat";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      i++;
      if (texto[i] === "i") {
        nuevaPalabra.push("a");
      }
    } else if (texto[i] === "e") {
      i++;
      if (texto[i] === "n") {
        i++;
        if (texto[i] === "t") {
          i++;
          if (texto[i] === "e") {
            i++;
            if (texto[i] === "r") {
              nuevaPalabra.push("e");
            }
          }
        }
      }
    } else if (texto[i] === "i") {
      i++;
      if (texto[i] === "m") {
        i++;
        if (texto[i] === "e") {
          i++;
          if (texto[i] === "s") {
            nuevaPalabra.push("i");
          }
        }
      }
    } else if (texto[i] === "o") {
      i++;
      if (texto[i] === "b") {
        i++;
        if (texto[i] === "e") {
          i++;
          if (texto[i] === "r") {
            nuevaPalabra.push("o");
          }
        }
      }
    } else if (texto[i] === "u") {
      i++;
      if (texto[i] === "f") {
        i++;
        if (texto[i] === "a") {
          i++;
          if (texto[i] === "t") {
            nuevaPalabra.push("u");
          }
        }
      }
    } else {
      nuevaPalabra.push(texto[i]);
    }
  }
  cadenaTexto = nuevaPalabra.join("");

  const textarea2 = (document.getElementById("resultado").value = cadenaTexto);
}

function copiar(){
  let textarea = document.getElementById("resultado");
  let textareaValor = textarea.value;
  navigator.clipboard.writeText(textareaValor);

}


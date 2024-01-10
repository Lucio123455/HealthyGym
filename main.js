const cantidadEjercicios = 50; // Actualiza esto según la cantidad real de ejercicios

// Cargar datos del localStorage al iniciar la página
let ejercicios = JSON.parse(localStorage.getItem('ejercicios')) || Array.from({ length: cantidadEjercicios }, () => ({
    peso: 0,
    repeticiones: 0,
    rir: 0
}));

function reiniciarEjercicios() {
  localStorage.removeItem('ejercicios');
  window.location.reload();  // Recargar la página para que el código se ejecute desde cero
}
  
  // Actualizar la interfaz gráfica con los valores iniciales o cargados
  actualizarInterfaz();
  
  // Función para actualizar la variable cuando cambia el valor del input
  function actualizarVariable(indice, propiedad) {
    // Verificar si el índice está dentro del rango del array
    if (indice >= 0 && indice < ejercicios.length) {
        // Obtener el valor del input
        let nuevoValor = document.getElementById("ejercicio" + indice).querySelector("." + propiedad).value;

        // Actualizar la variable específica del ejercicio
        ejercicios[indice][propiedad] = parseFloat(nuevoValor); // Convertir a número, ya que el valor del input es una cadena

        // Guardar los datos actualizados en el localStorage
        localStorage.setItem('ejercicios', JSON.stringify(ejercicios));

        // Puedes realizar otras acciones aquí con la nueva variable si es necesario
        console.log(`Nuevo ${propiedad} del ejercicio ${indice}: ${ejercicios[indice][propiedad]}`);
    } else {
        console.error(`Índice fuera de rango: ${indice}`);
    }
}

  

function actualizarInterfaz() {
    for (let i = 0; i < ejercicios.length; i++) {
      let ejercicioElement = document.getElementById("ejercicio" + i);
  
      if (ejercicioElement) {
        let pesoInput = ejercicioElement.querySelector(".peso");
        let repeticionesInput = ejercicioElement.querySelector(".repeticiones");
        let rirInput = ejercicioElement.querySelector(".rir");
  
        if (pesoInput && repeticionesInput && rirInput) {
          pesoInput.value = ejercicios[i].peso;
          repeticionesInput.value = ejercicios[i].repeticiones;
          rirInput.value = ejercicios[i].rir;
        } else {
          console.error(`Alguno de los inputs no se encontró para el ejercicio ${i}`);
        }
      } else {
        console.error(`El elemento con ID "ejercicio${i}" no se encontró en el documento`);
      }
    }
  }
  

  function mostrarGrupo(grupo) {
    // Oculta todos los grupos musculares
    let gruposMusculares = document.querySelectorAll('.grupo-muscular');
    gruposMusculares.forEach(function (elemento) {
      elemento.style.display = 'none';
    });

    // Muestra el grupo muscular seleccionado
    let grupoSeleccionado = document.getElementById(grupo);
    if (grupoSeleccionado) {
      grupoSeleccionado.style.display = 'block';
    }
  }

  function noMostrarNingunGrupo(){
    let gruposMusculares = document.querySelectorAll('.grupo-muscular');
    gruposMusculares.forEach(function (elemento) {
      elemento.style.display = 'none';
    });
  }

  noMostrarNingunGrupo()
  
  
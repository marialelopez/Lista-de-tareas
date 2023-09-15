// // Haz un script que permita crear una lista de tareas, cada tarea debe contener un indicador,
// descripción y estado (completada o no).

let readlineSync = require("readline-sync");

let tareas = [];

function agregarTarea() {
  return new Promise((resolve, reject)=>{
  let indicador = readlineSync.question("Ingrese el indicador de la tarea: ");
  let descripcion = readlineSync.question("Ingrese la descripcion de la tarea: ");

  tareas.push({
    indicador,
    descripcion,
    completed: false,
  });

  resolve("Se agrego la tarea exitosamente");
});
}

function eliminarTarea() {
  return new Promise((resolve, reject) =>{
  let indice = readlineSync.question("Ingrese el indice de la tarea a eliminar: "
  );

  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    resolve("Tarea eliminada exitosamente");
  } else {
    reject("Indice invalido!!");
  }
});
}
function completarTarea() {
  return new Promise((resolve,reject) =>{
  let indice = readlineSync.question(
    "Ingrese el indice de la tarea a completar: "
  );

  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].completed = true;
    resolve("Tarea completada exitosamente");
  } else {
    reject("Indice invalido!!");
  }
});
}

function imprimirTarea() {
  console.log("lista de tareas:");
  tareas.forEach((tareas, indice) => {
    let estado = tareas.completed ? "[✔]" : "[]";
    console.log(`${indice}. ${estado} ${tareas.indicador}: ${tareas.descripcion}`);
  });
}

// Usando el metodo then()
function correrPrograma() {
  while (true) {
    console.log("Elige una opcion");
    console.log("1. Agregar una tarea");
    console.log("2. Eliminar una tarea");
    console.log("3. Completar una tarea");
    console.log("4. Imprimir lista de tareas");
    console.log("5. Salir");

    let opcion = readlineSync.question("Ingrese la opcion que requiera: ");

    switch (opcion) {
      case "1":
        agregarTarea()
          .then((TareaAgregada) => {
            console.log(TareaAgregada);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        break;

      case "2":
        eliminarTarea()
          .then((TareaEliminada) => {
            console.log(TareaEliminada);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        break;

      case "3":
        completarTarea()
          .then((TareaCompletada) => {
            console.log(TareaCompletada);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        break;

      case "4":
        imprimirTarea();
        break;

      case "5":
        return;

      default:
        console.log("Opcion invalida!!");
    }
  }
}

correrPrograma();


//Usando async y await 
// async function correrPrograma() {
//   while (true) {
//     console.log("Elige una opcion");
//     console.log("                ");
//     console.log("1. Agregar una tarea");
//     console.log("2. Eliminar una tarea");
//     console.log("3. Completar una tarea");
//     console.log("4. Imprimir lista de tareas");
//     console.log("5. Salir");
//     console.log("                           ");
//     console.log("                           ");
//     console.log("Creada por Alejandra Lopez <3");
//     console.log("                           ");

//     let opcion = readlineSync.question("Ingrese la opcion que requiera: ");

//     switch (opcion) {
//       case "1":
//         await agregarTarea();
//         console.log("La tarea fue agregada exitosamente");
//         break;

//       case "2":
//         await eliminarTarea();
//         console.log("La tarea fue eliminada exitosamente");
//         break;

//       case "3":
//         await completarTarea();
//         console.log("La tarea se completo exitosamente");
//         break;

//       case "4":
//         imprimirTarea();
//         break;

//       case "5":
//         return;

//       default:
//         console.log("Opcion invalida!!");
//     }
//   }
// }

// correrPrograma();
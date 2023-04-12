/*En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar 
como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la lógica 
de la función closure llamada createTaskPlanner para que devuelva los siguientes métodos:

**addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. 
La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado 
completed se agrega automáticamente como falso al momento de agregar una tarea.
**removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
**getTasks(): Devuelve el array de tareas.
**getPendingTasks(): Devuelve solo las tareas pendientes.
**getCompletedTasks(): Devuelve solo las tareas completadas.

**markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
**getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 
  1: muy urgente), sin modificar la lista de tareas original.
**filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
**updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las 
especificadas en el objeto updates.*/

function createTaskPlanner() {
  // Tu código aquí 👈
  let tareas = [];
  return {
    addTask: function (task) {
      task["completed"] = false;
      tareas.push(task);
      return tareas;
    },
    removeTask: function (value) {
      let index;
      if (value === Number(value)) {
        index = tareas.findIndex((x) => x.id === value);
        tareas.splice(index, 1);
      } else if (value === String(value)) {
        index = tareas.findIndex((x) => x.name === value);
        tareas.splice(index, 1);
      }
      return tareas;
    },
    getTasks: function () {
      return tareas;
    },
    getPendingTasks: function () {
      let tareaspendientes = [];
      for (tarea of tareas) {
        if (tarea.completed === false) {
          tareaspendientes.push(tarea);
        }
      }
      return tareaspendientes;
    },
    getCompletedTasks: function () {
      let tareascompletadas = [];
      for (tarea of tareas) {
        if (tarea.completed === true) {
          tareascompletadas.push(tarea);
        }
      }
      return tareascompletadas;
    },
    markTaskAsCompleted: function (value) {
      let index;
      if (value === Number(value)) {
        index = tareas.findIndex((x) => x.id === value);
        tareas[index].completed = true;
      } else if (value === String(value)) {
        index = tareas.findIndex((x) => x.name === value);
        tareas[index].completed = true;
      }
      return tareas;
    },
    getSortedTasksByPriority: function () {
      let tareasOrdenadas = [...tareas];
      tareasOrdenadas.sort((a, b) => a.priority - b.priority);
      return tareasOrdenadas;
    },
    filterTasksByTag: function (tag) {
      let FiltradosPorEtiqueta = tareas.filter(function (tarea) {
        return tarea.tags == tag;
      });
      return FiltradosPorEtiqueta;
    },
    updateTask: function (taskId, updates) {
      let index;
      let actualizar = tareas.slice();
      index = actualizar.findIndex((x) => x.id === taskId);
      if (index == -1) {
        console.log("ingrese un id válido");
        return tareas;
      } else {
        Object.assign(tareas[index], updates);
      }
      return tareas;
    },
  };
}

let planner = createTaskPlanner();

//--- para ejecutarlo
planner.addTask({
  id: 0,
  name: "cero",
  priority: 1,
  tags: ["shopping", "home"],
});
planner.addTask({
  id: 10,
  name: "septimo",
  priority: 3,
  tags: ["personal"],
});

planner.addTask({
  id: 3,
  name: "tercero",
  priority: 2,
  tags: ["personal"],
});
planner.addTask({
  id: 4,
  name: "cuarto",
  priority: 1,
  tags: ["shopping", "home"],
});

planner.addTask({
  id: 5,
  name: "quinto",
  priority: 3,
  tags: ["shopping"],
});
planner.addTask({
  id: 6,
  name: "sexto",
  priority: 1,
  tags: ["home"],
});

planner.addTask({
  id: 7,
  name: "septimo",
  priority: 3,
  tags: ["personal"],
});

planner.markTaskAsCompleted(4);
planner.markTaskAsCompleted(7);

planner.updateTask(100, {
  id: 24,
  name: "Llamar a Juan",
  priority: 3,
  tags: ["personal"],
});

planner.getPendingTasks();
planner.getCompletedTasks();
planner.filterTasksByTag("personal");
planner.getSortedTasksByPriority();
planner.removeTask(5);
planner.getTasks();

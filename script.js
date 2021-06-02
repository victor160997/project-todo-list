let listaTarefas = document.querySelector('#lista-tarefas')

function addTarefa(){
    let tarefa = document.querySelector('#texto-tarefa').value;
    let task = document.createElement('li');
    task.innerText = tarefa;
    listaTarefas.appendChild(task);
    document.getElementById('texto-tarefa').value='';
}

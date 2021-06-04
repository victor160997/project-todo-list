let listaTarefas = document.querySelector('#lista-tarefas');

function addTarefa(){
    let tarefa = document.querySelector('#texto-tarefa').value;
    let task = document.createElement('li');
    task.innerText = tarefa;
    listaTarefas.appendChild(task);
    task.addEventListener('click', pintaCinza);
    function pintaCinza(aleatory){
        task.style.backgroundColor = 'rgb(128, 128, 128)'
    }
    document.getElementById('texto-tarefa').value='';
}

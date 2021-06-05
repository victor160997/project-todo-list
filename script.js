let listaTarefas = document.querySelector('#lista-tarefas');

function addTarefa(){
    let tarefa = document.querySelector('#texto-tarefa').value;
    let task = document.createElement('li');
    task.innerText = tarefa;
    listaTarefas.appendChild(task);
    task.addEventListener('click', pintaCinza);
    function pintaCinza(aleatory){
        if(document.querySelectorAll('.seleciona-tarefa').length === 0){
            task.classList.add('seleciona-tarefa');
        } else {
            document.querySelector('.seleciona-tarefa').classList.remove('seleciona-tarefa');
            task.classList.add('seleciona-tarefa');
        }
    }
    document.getElementById('texto-tarefa').value='';
}

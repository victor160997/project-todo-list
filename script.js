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
    task.addEventListener('dblclick', completaTarefa);
    function completaTarefa(aleatory){
        //se já possuir a classe, remove ela.
        //se não possuir, adiciona.
        if(task.classList.length === 2){
            task.classList.remove('completed');
        } else {
            task.classList.add('completed');
        }
    }
    document.getElementById('texto-tarefa').value='';
}

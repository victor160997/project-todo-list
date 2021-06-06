let listaTarefas = document.querySelector('#lista-tarefas');

function addTarefa(){

        let tarefa = document.querySelector('#texto-tarefa').value;
        let task = document.createElement('li');
        let clear = document.querySelector('#apaga-tudo');
        let limpaTela = document.querySelector('#limpar')

        task.innerText = tarefa;
        listaTarefas.appendChild(task);

        if(document.querySelectorAll('li').length >= 0 && document.querySelectorAll('li').length <= 1){
            
            clear.addEventListener('click', apagaTudo)
            function apagaTudo(aleatory){
                let listaCheia = document.querySelectorAll('li');
                for(let index = 0; index < listaCheia.length; index += 1){
                    document.querySelector('#lista-tarefas').removeChild(listaCheia[index]);
                }
            }
        } 

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

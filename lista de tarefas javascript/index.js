let botaoAdd = document.getElementById('botao');
let Input = document.getElementById('input-tarefa');
let Tarefas = document.getElementById('tarefas');
let marcado = false;

botaoAdd.addEventListener('click', function() {
 if (Input.value !== '') {
       let tarefa = document.createElement('p');
       Tarefas.appendChild(tarefa);
       tarefa.innerText = '- ' + Input.value;
       Input.value = '';
       tarefa.addEventListener('click', function() {
           if (marcado == false) {
           tarefa.style.textDecoration = 'line-through';
           marcado = true;
           }
           else {
            tarefa.style.textDecoration = '';
            marcado = false;

           }
       })
        tarefa.addEventListener('dblclick', function(){
             Tarefas.removeChild(tarefa);
        })
    }

 })
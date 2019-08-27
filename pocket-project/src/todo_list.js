const toDoList = [];

class ToDo {

  constructor() {
    this.clickHandler();
  }

  textCollector() {
    let textEl = document.getElementById('todo-text').value;
    return textEl;
  }
  
  listGen(input) {
    let li = document.createElement('li');
    
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    let label = document.createElement('label');
    label.innerHTML = input;

    li.appendChild(checkBox);
    li.appendChild(label);
    
    let ul = document.getElementsByClassName('todos')[0];
    ul.appendChild(li);
  }

  clickHandler() {
    let btn = document.getElementById("add-todo");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let inputText = this.textCollector();
      this.listGen(inputText);
      document.getElementById('todo-text').value = '';
    });
  }

}

export default ToDo;
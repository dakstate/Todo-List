document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
    addItem(value);
  }
});

function addItemTodo(text) {

  var list = document.getElementById('task');

  var item = document.createElement('h6');
  item.innerText = text;
}

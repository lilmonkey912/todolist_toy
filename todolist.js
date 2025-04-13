/* 每一个子行添加关闭(×)符号 */
// 获取数据
var savedTodoIdList = JSON.parse(localStorage.getItem('todolist'));
if (!Array.isArray(savedTodoIdList)) {
  savedTodoIdList = [];
}
var closeTodoIdList = JSON.parse(localStorage.getItem('closelist'));
if (!Array.isArray(closeTodoIdList)) {
  closeTodoIdList = [];
}
var NewTodoIdListItem = JSON.parse(localStorage.getItem('NewItem'));
if (!Array.isArray(NewTodoIdListItem)) {
  NewTodoIdListItem = [];
}
var todolist = [];
var closelist = [];
var NewItem = [];
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  let node = myNodelist[i];
  let id = node.id;
  if (savedTodoIdList.lastIndexOf(id) >= 0) {
    console.log("in array");
    node.classList.toggle('checked');
  }
  if (closeTodoIdList.lastIndexOf(id) >= 0) {
    console.log("in array");
    node.style.display = "none";
  }
  if (NewTodoIdListItem.includes(id)) {
    console.log("includes");
  }
  console.log(node.id);
}

// 点击叉号关闭子行列
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    console.log(div);
    div.style.display = "none";
    var id = div.id
    console.log(id)
    closeTodoIdList.push(id);
    localStorage.setItem('closelist', JSON.stringify(closeTodoIdList));
  }
}

// 当子行被点击，增加白色对勾
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    let id = ev.target.id;
    savedTodoIdList.push(id);
    // 存储数据
    localStorage.setItem('todolist', JSON.stringify(savedTodoIdList));
  }
}, false);

// 当点击添加事件时，添加新的子行
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      console.log ("hello");
      div.style.display = "none"; //单独出来的close,不属于之前的输入在html中的
    }
  }
  let id = li;
  console.log(id);
  NewTodoIdListItem.push(id);
    localStorage.setItem('NewItem', JSON.stringify(NewTodoIdListItem));
}






const inp = document.querySelector(".task-input");
const btn = document.querySelector(".add-button");
const ul = document.querySelector(".task-list");

function createTask(taskText) {
  const item = document.createElement("li");
  item.classList.add("todo-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    text.classList.toggle("completed", checkbox.checked);
  });

  const text = document.createElement("span");
  text.innerText = taskText;
  text.classList.add("task-text");

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete-btn");
  delBtn.addEventListener("click", () => item.remove());

  item.appendChild(checkbox);
  item.appendChild(text);
  item.appendChild(delBtn);
  ul.appendChild(item);
}

btn.addEventListener("click", () => {
  if (inp.value.trim() !== "") {
    createTask(inp.value.trim());
    inp.value = "";
  }
});

inp.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && inp.value.trim() !== "") {
    createTask(inp.value.trim());
    inp.value = "";
  }
});

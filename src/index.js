document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const ul = document.getElementById("tasks");

  form.addEventListener("submit", (a) => {
    e.preventDefault();
    const li = document.createElement("li");
    const p = document.createElement("p");
    const span = document.createElement("span");
    span.textContent = form.elements["new-task-description"].value + "   ";
    span.setAttribute("contenteditable", "true");
    const button = document.createElement("button");
    button.setAttribute("id", "button");
    button.style.height = "20px";
    button.style.widht = "20px";
    const labelOfButton = document.createElement("p");
    labelOfButton.textContent = "X";
    button.appendChild(labelOfButton);
    button.style.alignItems = "center";
    button.addEventListener("click", deleteItem);

    if (span.textContent.length !== 0) {
      p.appendChild(span);
      p.appendChild(button);
      li.appendChild(p);
      li.style.flexDirection = "row";
      li.style.alignItems = "center";
      li.style.justifyContent = "space-between";
      ul.appendChild(li);
      console.log("bos");
    }
    form.reset();
  });
});

function deleteItem(a) {
  e.target.parentNode.parentNode.remove();
}
function editItem(a) {
  e.target.value = " ";
  console.log(a.target.value);
}
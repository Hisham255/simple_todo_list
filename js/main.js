

var taskForm = document.querySelector('#taskForm');
var newTask = document.querySelector('#taskPlace');
var tasks = document.querySelector("#tasks");

newTask.addEventListener('input', () => {
    newTask.classList.remove("border-danger");
});

taskForm.addEventListener('submit', (event) => {

    if (newTask.value.trim() == "") {
        newTask.classList.add("border-danger");
    } else {

        var task = document.createElement("li");
        var delBtn = document.createElement("button");

        task.innerHTML = newTask.value.trim();
        delBtn.innerHTML = `&times`;

        task.append(delBtn);
        delBtn.addEventListener('click', (event) => {
            task.remove();

        });


        task.className = [
            "btn-bg-me",
            "m-1",
            "py-1",
            "pr-1",
            "pl-3",
            "d-flex",
            "justify-content-between",
            "align-items-center",
            "text-white",
            "rounded-pill"

        ].join(" ");
        task.style.fontSize = "20px";

        delBtn.className = [
            "ml-3",
            "btn",
            "bg-white",
            "py-0",
            "text-dark",
            "h-100",
            "px-3",
            "text-white",
            "rounded-pill"

        ].join(" ");
        delBtn.style.fontSize = "25px";

        tasks.append(task);
        newTask.value = "";
    }
    event.preventDefault();
})




var taskForm = document.querySelector('#taskForm');
var newTask = document.querySelector('#taskPlace');
var tasks = document.querySelector("#tasks");
var tasksTotal = document.querySelector("#tasksTotal");
var tasksDone = document.querySelector("#tasksDone");
var mseErorr = document.querySelector("#mseErorr");
var tasks_total = 0;
var tasks_done = 0;

tasksTotal.innerHTML = tasks_total;
tasksDone.innerHTML = tasks_done;

newTask.addEventListener('input', () => {
    newTask.classList.remove("border-danger");

});

taskForm.addEventListener('submit', (event) => {

    if (newTask.value.trim() == "" || newTask.value.trim().length > 20) {
        newTask.classList.add("border-danger");
        mseErorr.innerHTML = "Enter a task's length between 1 and 20";
        mseErorr.style.display = "block";
    } else if (tasks_total >= 9) {
        mseErorr.innerHTML = "you have reatch the highest number of tasks";
        mseErorr.style.display = "block";
        
    } else if (newTask.value.trim().indexOf("$") == 0) {
        
        mseErorr.innerHTML = "Don't use ( $ ) in the start, bro.";
        mseErorr.style.display = "block";


    } else {

        mseErorr.innerHTML = "";
        mseErorr.style.display = "none";
        var task = document.createElement("li");
        var checkBtn = document.createElement("input");
        checkBtn.setAttribute("type", "checkbox");
        var taskName = document.createElement("p");
        var delBtn = document.createElement("button");
        var taskHead = document.createElement("div");

        taskHead.append(checkBtn);
        taskName.innerHTML = newTask.value.trim();
        taskHead.append(taskName);
        task.append(taskHead);
        delBtn.innerHTML = `<iconify-icon icon="ant-design:delete-twotone"></iconify-icon>`;
        task.append(delBtn);

        task.className = [
            "task-me",
            
            "d-flex",
            "justify-content-between",
            "align-items-center",
            "py-2",
            "px-3",
            "mt-3",
            "rounded"
        ].join(" ");

        taskHead.className = [
            "d-flex",
            "justify-content-between",
            "align-items-center",

        ].join(" ");

        checkBtn.className = [
            "mr-2"
        ].join(" ");

        taskName.className = [
            "text-primary",
            "m-0"
        ].join(" ");

        delBtn.className = [
            "btn",
            "d-flex",
            "justify-content-center",
            "align-items-center",
            "rounded",
            "delete-btn"
        ].join(" ");

        checkBtn.addEventListener("click", () => {

            if (checkBtn.checked) {
                tasks_done = tasks_done + 1;
                tasksDone.innerHTML = tasks_done;
                taskName.classList.add("done");
            } else {
                tasks_done = tasks_done - 1;
                tasksDone.innerHTML = tasks_done;
                taskName.classList.remove("done");
            }

        });

        delBtn.addEventListener('click', () => {
            task.remove();
            tasks_total = tasks_total - 1;
            tasksTotal.innerHTML = tasks_total;
            if (checkBtn.checked) {
                tasks_done = tasks_done - 1;
                tasksDone.innerHTML = tasks_done;
            }
        });

        
        task.setAttribute("data-aos", "zoom-in");
        task.setAttribute("data-aos-duration", "800");
        task.setAttribute("data-aos-anchor-placement", "top-bottom");
        
        tasks.append(task);
        tasks_total = tasks_total + 1;
        tasksTotal.innerHTML = tasks_total;
        newTask.value = "";
    }
    event.preventDefault();
})


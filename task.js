function loadTasks() { 
    var p = document.querySelector(".para");

    var request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    request.send();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var tasks = JSON.parse(this.responseText);

            let output = `
                <div class="table-responsive">
                    <table class="table">
                        <thead class="table-dark">
                            <tr>
                                <th>Check</th>
                                <th>User ID</th>
                                <th>Task ID</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            tasks.forEach(task => {
                output += `
                    <tr>
                        <td><input type="checkbox" class="task-checkbox"></td>
                        <td>${task.userId}</td>
                        <td>${task.id}</td>
                        <td>${task.title}</td>
                    </tr>
                `;
            });

            output += `
                        </tbody>
                    </table>
                </div>
            `;

            p.innerHTML = output;

            // Attach event listener to checkboxes
            document.querySelectorAll(".task-checkbox").forEach((box) => {
                box.addEventListener("change", () => {
                    setTimeout(() => {
                        checkTaskLimit();
                    }, 0);
                });
            });
        }
    };
}

// Call the function on page load
loadTasks();

// Function to check selected task count using Promise
function checkTaskLimit() {
    let selectedCount = document.querySelectorAll(".task-checkbox:checked").length;

    new Promise((resolve, reject) => {
        if (selectedCount === 5) {
            resolve("Great job! You have picked exactly 5 tasks.");
        } else if (selectedCount > 5) {
            reject("You have selected more than 5 tasks. Please deselect some.");
        }
    })
    .then((msg) => {
        alert(msg);
    })
    .catch((msg) => {
        alert(msg);
    });
}


if(!sessionStorage.getItem("login")) {
  window.location.href = "login.html";
}


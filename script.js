document.getElementById("studentForm").onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value.trim();

    if (!name || !roll || !course) {
        alert("Please fill all fields");
        return;
    }

    let row = document.createElement("tr");

    [name, roll, course].forEach(function (value) {
        let cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    let action = document.createElement("td");
    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function () {
        row.remove();
    };

    action.appendChild(btn);
    row.appendChild(action);

    document.getElementById("studentList").appendChild(row);
    document.getElementById("studentForm").reset();
};
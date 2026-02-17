let reports = JSON.parse(localStorage.getItem("reports")) || [];

function saveData() {
    localStorage.setItem("reports", JSON.stringify(reports));
}

function addReport() {
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    if (location === "" || description === "") {
        alert("Please fill all fields");
        return;
    }

    const report = {
        id: Date.now(),
        location,
        description
    };

    reports.push(report);
    saveData();

    document.getElementById("location").value = "";
    document.getElementById("description").value = "";

    displayReports();
}

function deleteReport(id) {
    reports = reports.filter(r => r.id !== id);
    saveData();
    displayReports();
}

function displayReports() {
    const list = document.getElementById("reportList");
    list.innerHTML = "";

    reports.forEach(r => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${r.location}</strong><br>
            ${r.description}
            <br>
            <button onclick="deleteReport(${r.id})">Resolve</button>
        `;
        list.appendChild(li);
    });
}

displayReports();

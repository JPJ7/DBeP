var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombrec"] = document.getElementById("nombrec").value;
    formData["codigo"] = document.getElementById("codigo").value;
    formData["paga"] = document.getElementById("paga").value;
    formData["ciudad"] = document.getElementById("ciudad").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombrec;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.codigo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.paga;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ciudad;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nombrec").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("paga").value = "";
    document.getElementById("ciudad").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombrec").value = selectedRow.cells[0].innerHTML;
    document.getElementById("codigo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("paga").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ciudad").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombrec;
    selectedRow.cells[1].innerHTML = formData.codigo;
    selectedRow.cells[2].innerHTML = formData.paga;
    selectedRow.cells[3].innerHTML = formData.ciudad;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombrec").value == "") {
        isValid = false;
        document.getElementById("nombrecValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombrecValidationError").classList.contains("hide"))
            document.getElementById("nombrecValidationError").classList.add("hide");
    }
    return isValid;
}
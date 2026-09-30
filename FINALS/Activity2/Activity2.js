function submitForm() {
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var gradeSection = document.getElementById("gradeSection").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    document.getElementById("output").innerHTML = "Student Details <br>--------------------"
        + "</b><br>Name: <b>" + name + "</b>"
        + "<br>ID Number: <b>" + id + "</b>"
        + "<br>Grade and Section: <b>" + gradeSection + "</b>"
        + "<br>Age: <b>" + age + "</b>"
        + "<br>Email: <b>" + email + "</b>";
    console.log(name, id, gradeSection, age, email);

  }
function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var favoriteSubject = document.getElementById("favoriteSubject").value;
  
    document.getElementById("output").innerHTML = "Hello! My name is " + name + ". I am " + age + " years old. My favorite subject is " + favoriteSubject + ".";
    console.log(name, age, favoriteSubject);
  }
function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var favoriteSubject = document.getElementById("favoriteSubject").value;
  
    document.getElementById("output").innerHTML = "Hello! My name is <b>" + name + "</b>. I am <b>" + age + "</b> years old. My favorite subject is <b>" + favoriteSubject + "</b>";
    console.log(name, age, favoriteSubject);
  }
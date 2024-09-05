function handleSubmit(event){
    event.preventDefault(); 
    
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;

    let errors = [];

    if(name.trim() === ""){
        errors.push("Please enter a valid name.");
    }
    
    age = parseInt(age);
    if(isNaN(age) || age <= 0 || age > 90){
        errors.push("Please enter a valid age between 1 and 90.");
    }

    if(!gender) {
        errors.push("Please select a gender.");
    }

    if(errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert(`Name: ${name}\nAge: ${age}\nGender: ${gender}`);
    }
}
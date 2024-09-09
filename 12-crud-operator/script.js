let arr = [
    { name: 'Nayan Sukhadiya', email: 'ganebe7404@maxturns.com' },
    { name: 'Nayan Sukhadiya', email: 'ganebe7404@maxturns.com' },
    { name: 'Nayan Sukhadiya', email: 'ganebe7404@maxturns.com' },
  ];
  
  let currentIndex = -1;
  
  function formSubmit() {
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    arr.push({ name: name.value, email: email.value });
    FormArray(arr);
  }
  
  let tableView = document.querySelector(".tableView");
  
  function FormArray(arr) {
    console.log(arr);
    let tableRow = ``;
    for (let [index, item] of arr.entries()) {
      tableRow += `
        <tr>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td><button onclick="editBtn(${index})">Edit</button><button onclick="deleteBtn(${index})">Delete</button></td>
        </tr>`;
    }
    tableView.innerHTML = tableRow;
  }
  
  FormArray(arr);
  
  function editBtn(i) {
    let name = document.querySelector("#nameUpdate");
    let email = document.querySelector("#emailUpdate");
    document.querySelector(".editSection").style.display = "block";
    currentIndex = i;
    let updateItem = arr[i];
    name.value = updateItem.name;
    email.value = updateItem.email;
  }
  
  function formUpdate() {
    if (currentIndex !== -1) { 
      let name = document.querySelector("#nameUpdate");
      let email = document.querySelector("#emailUpdate");
      arr[currentIndex] = { name: name.value, email: email.value };
      currentIndex = -1;
      FormArray(arr);
      document.querySelector(".editSection").style.display = "none";
    }
  }
  
  function deleteBtn(index) {
    arr.splice(index, 1);
    FormArray(arr);
  }
  
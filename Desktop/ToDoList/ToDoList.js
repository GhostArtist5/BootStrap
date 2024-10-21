const input = doccument.querySelector(".todo-input");
const apply_btn = doccument.getElementById("apply-btn");
const todo_items = doccument.querySelector(".todo-items")
let tasks = []
apply_btn.addEventListner("click", () => {
    let note_value = input.value;
    tasks.push({name: note_value, id: Math.random(5,4)});
    ShowItem();
});


function ShowItem() {
    todo_items.innerHTML = "";
    tasks.forEach((item) => {
        let todo_item = doccument.createElement("div");
        todo_item.classList = "todo-item";
        let input = doccument.createElement("input");
        input.type = "checkbox";
        let p = document.createElement("p");
        p.classList = "my-text";
        p.textContent = item.name;
        let todo_text = document.createElement("div");
        todo_item.classList = "todo-text";
        todo_text.appendChild(input);
        todo_text.appendChild(p);
        todo_item.appendChild(todo_text);
        // create icons div with two icons inside it
        let icons_div = doccument.createElement("div");
        icons_div.classList = "icons";
        let trash_icon = doccument.createElement("img");
        trash_icon.src = "./trash.svg";
        let edit_icon = doccument.createElement("img");
        edit_icon.src = "./edit.svg";
        icons_div.appendChild(edit_icon);
        icons_div.appendChild(trash_icon);
        // add icons div to todo_items
        todo_item.appendChild(icons_div);
        todo_items.appendChild(todo_item);
    });
}

ShowItem()



let students = [
    {
      name: "Faris Talal",
      age: 16,
      mark: 85,
      school: "Greenwood High"
    },
    {
      name: "Ibrahim Taher",
      age: 17,
      mark: 90,
      school: "Blue Valley School"
    },
    {
      name: "Abdulla Talal",
      age: 16,
      mark: 88,
      school: "Sunrise Academy"
    },
    {
      name: "Shane White",
      age: 18,
      mark: 92,
      school: "Northview High"
    }
  ];
  
/////
  NewA = students.map((element) => {
    return students.name
  })

  console.log(NewA)
  //////

  SuriseA = students.map((element) => {
    return {...item,school:"Sunrise Academy"}
  });

  console.log(SuriseA)

  NewAge = students.map((element) => {
    if(age = 18);
    return (age = 21);
  })

  console.log(NewAge)
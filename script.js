const users = [
  "Jakub Kornafel",
  'Sebastian Kowalski',
  'Mateusz Nowak',
  'Barbara Gwózdka',
  'Agata Gwiazda',
  'Marysia Nowak',
];  

const input = document.getElementById('input');
const ul = document.getElementById('ul');
const addUserBtn = document.getElementById('addUserBtn');



const addUser = function(){
  addUserBtn.addEventListener('click', function(){
  name = prompt('Enter user\'s firstname and lastname: ');
  if (name!=='null'){
  users.push(name);
  console.log(name);
  const li = document.createElement('li');
      li.innerHTML = name ;
      ul.appendChild(li);
}})
};

const showUsers = function() {
  for (const elem of users){
    const li = document.createElement('li');
    li.innerHTML = elem;
    ul.appendChild(li)
 
  }
}

input.addEventListener('keyup', function (){
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  console.log(input.value);
  
  for (const elem of users){
    if (elem.toLocaleLowerCase().search(input.value.toLowerCase()) > -1){
      const li = document.createElement('li');
      li.innerHTML = elem ;
      ul.appendChild(li);
      
    }
  } 
}) 

showUsers();
addUser();

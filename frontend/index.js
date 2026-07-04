const users = [
  {
    name: "Jane Doe",
    gender: "Female",
    image: "./images/jane.png"
  },
  {
    name: "John Doe",
    gender: "Male",
    image: "./images/john.png"
  }
];

let togId = 0;

function toggle() {
    if (togId === 0) {
        togId = 1;
    } else {
        togId = 0;
    }
    //image
    document.getElementById("im").src = users[togId].image;
    //name
    document.getElementById("name").textContent = users[togId].name;
    //gender
    document.getElementById("gender").textContent = users[togId].gender;
}
function getRandom(){
  fetch("https://randomuser.me/api")
  .then(function (data){
    return data.json()
  })
  .then(function (parseData){
    //console.log(parseData)
    let first= parseData.results[0].name.first;
    let last = parseData.results[0].name.last;
    let name= first+" "+last;
    let gender= parseData.results[0].gender;
    let imageU= parseData.results[0].picture.large;

    document.getElementById("gender").innerText=gender
    document.getElementById("name").innerText=name
    document.getElementById("im").src=imageU
  })
}
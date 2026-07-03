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
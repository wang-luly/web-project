const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/章子怡.jpg") {
    myImage.setAttribute("src", "./images/章子怡2.jpg");
  } else {
    myImage.setAttribute("src", "./images/章子怡.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("请输入你的名字。");
  if(!myName){
    setUserName();
    return;
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = `章子怡喜欢你，${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `章子怡喜欢你, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
// Write your code here!
let newMain = document.getElementById("main");
newMain.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Ahmaud is the champion";
document.body.append(newHeader);



// let newHeader = `<h1 id="victory">${yourName} is the champion</h1>`;

// function addHeader(yourName){
//     let body = document.body
//     document.body.innerHTML = newHeader;
// }
//
// addHeader();
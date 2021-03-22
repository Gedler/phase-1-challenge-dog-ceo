console.log("%c HI", "color: firebrick");
let blankLi = document.createElement("li");
let img = document.createElement("img");
const divID = document.querySelector("div#dog-image-container");
divID.append(blankLi);
const blankUl = document.querySelector("#dog-breeds");

document.addEventListener(`DOMContentLoaded`, function () {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function (response) {
      return response.json();
    })
    .then(function (dogResponse) {
      console.log(dogResponse);

      dogResponse.message.forEach(function (getdogs) {
        img.src = getdogs;
        img.alt = "This is a dog";
        blankLi.appendChild(img);
        console.log(divID);
      });
    });
});
document.addEventListener(`DOMContentLoaded`, function () {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (preDog) {
      return preDog.json();
    })
    .then(function (dogBreed) {
      console.log(dogBreed);
      let arr1 = [];
      let keys = [];
      arr1.push(dogBreed);
      keys = Object.keys(dogBreed.message);
      //   dogBreed.forEach(function () {
      //   let recurringLi = document.createElement("li");
      //   blankUl.append(recurringLi);
      //   if i = 1; i < keys.length; i++) {
      const dogList = document.createElement("li");
      blankUl.append(blankLi);
      blankLi.innerText = keys;
    });
});
// });
// });

console.log('%c HI', 'color: firebrick')
let divID = document.querySelector('div#dog-image-container')
let blankLi = document.createElement('li')
let img = document.createElement('img')
divID.append(blankLi) 

divID.addEventListener("click", function(evt) {
fetch('https://dog.ceo/api/breeds/image/random/4') 
    .then(function(response) {
        return response.json()
    })
    .then(function(dogResponse) {
        console.log(dogResponse)
    })
img.src = dogResponse.message
img.alt = "This is a dog"
blankLi.appendChild(img)
console.log(divID)
})


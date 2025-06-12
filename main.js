// mess-with-me

const span = document.querySelector('.mess-with-me')
span.style.fontSize = "50px"
span.style.background = "blue"

// hide-me-area

const hide = document.querySelector('#hide-me-area')
hide.style.display = "none"

// resizes image
const img = document.querySelector('#triceratops')
img.style.width = "324px"

// Event listener click results color transitions to orange
document.querySelector('.mess-with-me').addEventListener('click', function() {
    this.style.color = 'orange'
});

// Event listener click results into red border
document.querySelector('.triceratops').addEventListener('click', function() {
     this.style.border = '5px solid red'
})


// Event listener click results 50% transparent
 const feathers = document.querySelector("#feathers")
document.querySelector("#feathers").addEventListener('click', function() {
    this.style.opacity = "50%"
})

// Event listener click "Switch Background color"
document.querySelector("#toggle").addEventListener("click", function() {

 document.querySelector("#row").style.backgroundColor = "orange";  
})

// Event listener click when hovered "image exspands"
const biggify = document.querySelector("#biggify")
biggify.addEventListener("mouseover", function() {
    biggify.style.width = "200px"
})



// Event listener clicking toggles between black and color of my choice


// Event listener clicking reverts the biggify back to it's original size when
//  it's no longer being hovered



// console.log("From Styling")
const sections = document.querySelectorAll('section');
// console.log(sections)
for(const section of sections){
    // console.log(section)
    section.style.border = '2px solid blue';
    section.style.marginBottom = '5px'
    section.style.borderRadius = '20px'
    section.style.padding = '10px'
    // section.style.textAlign = 'center'
}
const doc = document.getElementById('description-container')
doc.classList.add('font-size');
// doc.style.backgroundColor = 'skyblue';
const textContainer = document.getElementById('text-container')
const newHeading = document.createElement('h2');
newHeading.innerText = 'Hi! I am created from Dom';
textContainer.appendChild(newHeading)
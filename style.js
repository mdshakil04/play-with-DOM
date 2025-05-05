// console.log("From Styling")
const sections = document.querySelectorAll('section');
// console.log(sections)
for(const section of sections){
    // console.log(section)
    section.style.border = '2px solid blue';
    section.style.marginBottom = '5px'
    section.style.borderRadius = '20px'
    section.style.padding = '10px'
    section.style.textAlign = 'center'
}
const doc = document.getElementById('description-container')
doc.style.backgroundColor = 'skyblue';
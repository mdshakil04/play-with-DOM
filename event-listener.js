// console.log('Event listener')
// const bgBtn = document.getElementById('click-maro');
// console.log(bgBtn)
// Option 1
// bgBtn.onclick = function bgChange(){
//     document.body.style.backgroundColor = 'red';
// }
// Option 2
// bgBtn.addEventListener('click', function makeGreen(){
//     document.body.style.backgroundColor = 'green';
// })
// Option 3
document.getElementById('click-maro').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
})
// Other option 
function colorChange(){
    document.body.style.backgroundColor = 'red';
}
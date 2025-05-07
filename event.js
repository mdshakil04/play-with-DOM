// console.log('from event.html file')
document.getElementById('update-btn').addEventListener('click', function(){
    // console.log('btn clicked')
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;
    // console.log(inputText)
    const textContainer = document.getElementById('default-text');
    textContainer.innerText = inputText;
    inputField.value = '';
})

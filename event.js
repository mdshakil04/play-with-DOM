// console.log('from event.html file')
document.getElementById("update-btn").addEventListener("click", function () {
  // console.log('btn clicked')
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  // console.log(inputText)
  const textContainer = document.getElementById("default-text");
  textContainer.innerText = inputText;
  inputField.value = "";
});
document.getElementById("comment-btn").addEventListener("click", function () {
  // console.log('btn clicked')
  const commentsContainer = document.getElementById("comments-container");
  const commentsBox = document.getElementById("comment-box");
  const comments = commentsBox.value;
  // console.log(comments)
  const commentsText = document.createElement("li");
  commentsText.innerText = comments;
  commentsContainer.appendChild(commentsText);
  commentsBox.value = "";
});

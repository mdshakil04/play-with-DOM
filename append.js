const mainContainer = document.getElementById('main-container');
const newSection = document.createElement('section');
newSection.innerHTML = `
    <h1>I am from new Section</h1>
    <ul>
        <li>Biriyani</li>
        <li>Moglai</li>
        <li>Kabab</li>
        <li>Chiken Chap</li>
    </ul>
`
mainContainer.appendChild(newSection)
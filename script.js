const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
})

function addTask() {
    if (inputBox.value === '') {
        alert('You Must Write Something !');
    }
    else {
        let li = document.createElement('li');        
        li.style.paddingRight = "40px";
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // create cancel cross symbol
        const xSymbol = document.createElement("span");
        xSymbol.innerHTML = "\u00d7";
        li.appendChild(xSymbol);
        saveData(); // saing data when new element is added
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        // console.log('e.target.parentElement is : ', e.target.parentElement)
        // console.log('cross button clicked!')
        e.target.parentElement.remove();    // removing li which is parent of span
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function displaySavedData() {
    listContainer.innerHTML =  localStorage.getItem('data');
}
displaySavedData();
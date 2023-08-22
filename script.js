const input = document.querySelector('input[name="item"]');
const needBtn = document.querySelector('#addNeed');
const haveBtn = document.querySelector('#addHave');
const haveList = document.querySelector('.have-list');
const needList = document.querySelector('.need-list');


const list = [{ name: 'Milk', checked: false },
{ name: 'Steak', checked: true },
{ name: 'Eggs', checked: false },
{ name: 'Kitten Food', checked: false },
{ name: 'Bacon', checked: false },
{ name: 'Apples', checked: true },
{ name: 'Cream', checked: true },
{ name: 'Cheese', checked: true }]

let inputItem = '';
input.addEventListener('input', (ev) => {
    inputItem = ev.target.value
})

function renderItem(inputItem) {
    haveList.innerHTML = '';
    needList.innerHTML = '';
    list.forEach(el => {
        if (!el.checked) {
            needList.insertAdjacentHTML('afterbegin', `
            <li>
            <Label>
                <input type="checkbox" name="item" class="real-checkbox">
                <span class="custom-checkbox"></span>
               ${el.name}
            </Label>
            <a href="#">&#10006;</a>
        </li>
            `)
        } else {
            haveList.insertAdjacentHTML('afterbegin', `
            <li>
            <Label>
                <input type="checkbox" name="item" class="real-checkbox" checked>
                <span class="custom-checkbox"></span>
               ${el.name}
            </Label>
            <a href="#">&#10006;</a>
        </li>
            `)
        }

    })
}

needBtn.addEventListener('click', (ev) => {
    list.push({ name: inputItem, checked: false })
    renderItem();
    input.value = '';
})

haveBtn.addEventListener('click', (ev) => {
    list.push({ name: inputItem, checked: true })
    renderItem();
    input.value = '';
})
renderItem();

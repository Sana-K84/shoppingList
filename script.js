const input = document.querySelector('input[name="item"]');
const needBtn = document.querySelector('#addNeed');
const haveBtn = document.querySelector('#addHave');
const haveList = document.querySelector('.have-list');
const needList = document.querySelector('.need-list');
const listBody = document.querySelector('.list-body')





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
                <input type="checkbox" class="real-checkbox">
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
                <input type="checkbox" class="real-checkbox" checked>
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




listBody.addEventListener('click', (ev) => {
    if (ev.target.closest('Label')) {
        list.forEach(el => {
            if (el.name === ev.target.closest('Label').innerText.trim()) {
                el.checked = !el.checked;
            }
        })
    }
    if (ev.target.tagName === "A") {
        let indDel
        list.forEach((el, ind) => {
            if (el.name === ev.target.closest('li').firstElementChild.innerText.trim()) {
                indDel = ind
            }
        })
        list.splice(indDel, 1)
    }
    renderItem();
})

renderItem();

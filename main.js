const tableElem = document.querySelector('.js-list');
const buttonCreatingElem = document.querySelector('.js-create-button');
const buttonSortingElem = document.querySelector('.js-sort-button');
const tableBlockElem = document.querySelector('.js-table-block');
const headerElem = document.querySelector('.js-header');
const tableControleElem = document.querySelector('.js-table-control');
const footerElem = document.querySelector('.js-footer');

const windowHeight = document.documentElement.clientHeight;
const headerHeight = headerElem.offsetHeight;
const tableControleHeight = tableControleElem.offsetHeight;
const footerHeight = footerElem.offsetHeight;
const tableHeightCalculable = windowHeight - headerHeight - tableControleHeight - footerHeight;

const numberList = [];

buttonCreatingElem.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
        const number = Math.random();
        tableElem.insertAdjacentHTML('beforeend',`<li>${number}</li>`);
        numberList.push(number);
    }
});
buttonSortingElem.addEventListener('click',() => {
    numberList.sort( (a, b) => a - b );
    tableElem.innerHTML = '';
    for (const i of numberList) {
        tableElem.insertAdjacentHTML('beforeend',`<li>${i}</li>`);
    }
});
window.addEventListener('load', () => {
    tableBlockElem.style.height = tableHeightCalculable + 'px';
});
window.addEventListener('resize', () => {
    const windowHeight = document.documentElement.clientHeight;
    const headerHeight = headerElem.offsetHeight;
    const tableControleHeight = tableControleElem.offsetHeight;
    const footerHeight = footerElem.offsetHeight;
    const tableHeightCalculable = windowHeight - headerHeight - tableControleHeight - footerHeight;
    tableBlockElem.style.height = tableHeightCalculable + 'px';
}); 

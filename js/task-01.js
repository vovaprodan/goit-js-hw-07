
const item = document.querySelector(`#categories`)
const liItem = item.querySelectorAll(`.item`);
console.log(`
    Number of categories: ${liItem.length}`);

liItem.forEach(item => {
    const title = item.firstChild.textContent;
    const list = item.lastElementChild;
    console.log(`
    Category: ${title}`)
    console.log(`Elements: ${list.length}`)
})





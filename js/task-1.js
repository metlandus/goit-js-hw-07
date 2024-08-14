const numOfCat = document.querySelectorAll('#categories .item');

console.log(`Number of categories : ${numOfCat.length}`);

numOfCat.forEach((el) => {
    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
});

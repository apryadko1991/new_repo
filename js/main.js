const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 30},
    {id: 3, title: 'Keyboard', price: 55},
    {id: 4, title: 'Gamepad', price: 75},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>Цена ${price}$</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productsList.join('');
//    Так как метод "map" возвращает нам масив, между каждым элементом ставится разделитель(по умолчанию это запятая ' , ' ). Но мы можем добавить метод 'join'  метод join объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива)
};
//    На данный момент я даже  не представляю как можно сократить эту функцию.(
renderPage(products);
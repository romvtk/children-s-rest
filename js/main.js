//Переключение блоков с лагерями

let campBtn = document.querySelectorAll('.camp-btn'),
    campItems = document.querySelectorAll('.camp__items-old .camp__items');

campBtn.forEach((items, index) => items.addEventListener('click', () => {
    campBtn.forEach(function (item, i) {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            campItems[i].classList.remove('active');
            items.classList.add('active');
            campItems[index].classList.add('active');

        }
    })

}))
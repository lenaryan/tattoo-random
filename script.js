const objects = ['Череп', 'Цветы', 'Змея', 'Паук', 'Якорь', 'Корабль', 'Бриллиант', 'Стрела', 'Тигр', 'Птица', 'Пантера', 'Лицо девушки', 'Сердце', 'Персонаж аниме', 'Единорог', 'Волк', 'Мандала', 'Ангел', 'Дракон', 'Любой герой мультиков', 'Дерево', 'Призрак', 'Лиса', 'Грибы', 'Кристаллы', 'Рыба', 'Любой фрукт', 'Корона', 'Робот', 'Русалка'];
const ideas = ['Реализм', 'Япония', 'Ньюскул', 'Графика', 'Биомеханика', 'Геометрия', 'Олдскул', 'Чикано', 'Блэкворк', 'Лайнворк', 'Акварель', 'Минимализм', 'Скетч', 'Дотворк'];

const getRandomElement = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

const getIdea = () => {
    const object = getRandomElement(objects);
    const idea = getRandomElement(ideas);

    return `${object} в стиле ${idea}`
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    const title = document.querySelector(".title");
    button.addEventListener("click", () => {
        const idea = getIdea();
        title.textContent = idea;
    })
})
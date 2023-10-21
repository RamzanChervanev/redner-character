const URL = "https://rickandmortyapi.com/api/character"

const main = document.querySelector("main")

const renderBtn = document.querySelector("#renderBtn")

const showBtn = document.querySelector("#showBtn")


renderBtn.addEventListener("click", () => {

    // при нажатии на кнопку showBtn выполнять фильтрацию и отображать живых или же мертвых

    fetch(URL) // метод позволяющий сделать запрос на API
        .then(response => response.json()) // получаем Promise (pending)
        .then(data => renderCharacter(data.results))
       
        
    showBtn.style.display = "block"

    showBtn.addEventListener("click", () => {
        filter = "Dead"
    })

    let filter = "Alive"
    
    const renderCharacter = (characters) => {
        characters.filter(character => character.status === filter).map(character => {

            main.innerHTML +=
                `
            <div class="character">
                <div class="character__img">
                    <img src="${character.image}" alt="">
                </div>
                <div class="character__info">
                    <h2>${character.name}</h2>
                    <div class="character__round-wrapper">
                        <div class="round" style='${character.status === "Alive" ? "background: green;" : "background: red;"}'></div>
                        <p>${character.status}</p>
                    </div>
                    <p>${character.species}</p>
                </div>  
            </div>
            `
        })

        
        // отобразить данные в main
    }

})


const arr = [1, 2, 3, 4, 5, 6]

arr.map(num => {
    if (num > 4) {
        console.log(num);
    }
})

const arr2 = arr.filter(num => num > 4)

// задача: вывести лишь те числа которые больше 4

// map - метод перебора массивов, возвращает новый массив

// let arr = [1, 2, 3, 4, 5]

// const arr3 = arr.forEach(num => {
//     return num * 2;
// }) // undefined

// console.log(arr3);

// const arr2 = arr.map(num => {
//     return num * 2
// }) // new Array

// console.log(arr2);
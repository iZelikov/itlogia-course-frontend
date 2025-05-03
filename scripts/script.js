const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.querySelectorAll(".car");
const carsContent = document.getElementById("cars-content");

filterItems.forEach(item => {
    item.onclick = () => {
        filterItems.forEach(el => el.classList.remove("active"));
        item
            .classList
            .add("active");
        const filterText = item
            .textContent
            .toLocaleLowerCase();
        carItems.forEach(car => {
            if (
                filterText === "все марки" || 
                car.querySelector("h4").textContent.toLocaleLowerCase().includes(filterText)
            ) {
                car.style.display = "flex";
            } else {
                car.style.display = "none";
            }
        });
        carsContent.scrollIntoView({behavior: "instant"});
    }
})

const carField = document.getElementById("car");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");

document.getElementById("order-action").onclick = ()=> {
    const fields = [carField,nameField,phoneField];
    let hasError = false;
    fields.forEach((field) => {
        if(field.value.trim() == "") {
            field.style.borderColor = "red";
            hasError = true;
        } else {
            field.style.borderColor = "white";
        }
    });

    if(!isValidPhoneNumber(phoneField.value)) {
        hasError = true;
        phoneField.style.borderColor = "red";
    }

    if(!hasError) {
        alert(
            nameField.value + ", cпасибо за заказ.\n" + 
            "Мы позвоним вам по телефону " + phoneField.value + "\n" + 
            "Ваш " + carField.value + " уже заждался!"
        );
        fields.forEach((field)=>{field.value = ""}); 
    }
}

// Домашнее задание
// проверят, что телефонный номер содержит минимум 10 цифр (а не просто любых знаков)

function isValidPhoneNumber(phone) {
    // Удаляем все символы, кроме цифр
    const digits = phone.replace(/\D/g, '');
    // Проверяем, что цифр минимум 10
    return digits.length >= 10;
  }

// Дополнительно  
// Заполнение поля "Автомобиль" при нажатии на кнопку "Забронировать" в карточке

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.car .button.white-button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const carArticle = this.closest('.car');
            const carTitle = carArticle.querySelector('h4').textContent;
            carField.value = carTitle;
        });
    });
});
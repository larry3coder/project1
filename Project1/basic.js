// Мобильное меню (бургер)
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
        mobileToggle.classList.toggle('active');
    });

    // Закрывать меню при клике на пункт навигации
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-open');
            mobileToggle.classList.remove('active');
        });
    });
}

function changePhoto(thumb) {
    const mainPhoto = document.getElementById('mainPhoto');
    const newSrc = thumb.querySelector('img').src;
    mainPhoto.src = newSrc;

    // Убираем active у всех миниатюр
    document.querySelectorAll('.thumbnail-item').forEach(item => {
        item.classList.remove('active');
    });

    // Добавляем active к текущей
    thumb.classList.add('active');
}

// Счётчик количества (только на странице карточки товара)
const qtyValue = document.getElementById('qtyValue');
const qtyMinusBtn = document.getElementById('qtyMinus');
const qtyPlusBtn = document.getElementById('qtyPlus');

if (qtyValue && qtyMinusBtn) {
    qtyMinusBtn.addEventListener('click', () => {
        let val = parseInt(qtyValue.textContent);
        if (val > 1) qtyValue.textContent = val - 1;
    });
}

if (qtyValue && qtyPlusBtn) {
    qtyPlusBtn.addEventListener('click', () => {
        let val = parseInt(qtyValue.textContent);
        qtyValue.textContent = val + 1;
    });
}

// Выбор цвета
document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});

// Модалка подтверждения покупки (только на странице карточки товара)
const buyButton = document.querySelector(".buy-now-btn");
const modal = document.getElementById("buyModal");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");

if (buyButton && modal) {
    buyButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

if (cancelBtn && modal) {
    cancelBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

if (confirmBtn && modal) {
    confirmBtn.addEventListener("click", () => {
        alert("Покупка успешно оформлена!");
        modal.style.display = "none";
    });
}

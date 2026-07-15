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

        // Счётчик количества
        const qtyValue = document.getElementById('qtyValue');
        document.getElementById('qtyMinus').addEventListener('click', () => {
            let val = parseInt(qtyValue.textContent);
            if (val > 1) qtyValue.textContent = val - 1;
        });
        document.getElementById('qtyPlus').addEventListener('click', () => {
            let val = parseInt(qtyValue.textContent);
            qtyValue.textContent = val + 1;
        });

        // Выбор цвета
        document.querySelectorAll('.color-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });



const buyButton = document.querySelector(".buy-now-btn");

const modal = document.getElementById("buyModal");

const cancelBtn = document.getElementById("cancelBtn");

const confirmBtn = document.getElementById("confirmBtn");

buyButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

confirmBtn.addEventListener("click", () => {
    alert("Покупка успешно оформлена!");

    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
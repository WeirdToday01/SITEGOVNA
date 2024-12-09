// Функция для загрузки отзывов из localStorage
function loadReviews() {
    const reviewsList = document.getElementById('reviews-list');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Очищаем список перед добавлением новых данных
    reviewsList.innerHTML = '<h2>Отзывы:</h2>';

    // Если отзывы есть, добавляем их на страницу
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.textContent = review;
        reviewsList.appendChild(reviewElement);
    });
}

// Функция для добавления нового отзыва
function submitReview() {
    const reviewText = document.getElementById('review-text').value;

    // Если отзыв пустой, не сохраняем
    if (reviewText.trim() === '') {
        alert('Пожалуйста, напишите отзыв.');
        return;
    }

    // Загружаем текущие отзывы из localStorage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Добавляем новый отзыв
    reviews.push(reviewText);

    // Сохраняем обновленный список отзывов в localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Очищаем поле ввода и обновляем список
    document.getElementById('review-text').value = '';
    loadReviews();
}

// Загружаем отзывы при загрузке страницы
window.onload = loadReviews;

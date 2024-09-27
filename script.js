// Функция для плавного скролла
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    // Работаем с формой только если она существует на текущей странице
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const submission = {
                name: name,
                email: email,
                message: message,
                date: new Date().toLocaleString()
            };

            let submissions = JSON.parse(localStorage.getItem('submissions')) || [];

            submissions.push(submission);

            localStorage.setItem('submissions', JSON.stringify(submissions));

            alert(`Спасибо, ${name}! Ваше сообщение было отправлено.`);

            // Очистка формы
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        });
    }

    // Загружаем анкеты только если это страница с анкетами
    const submissionsList = document.getElementById('submissions-list');
    if (submissionsList) {
        loadSubmissions();
    }
});

function loadSubmissions() {
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    const submissionsList = document.getElementById('submissions-list');

    if (submissions.length > 0) {
        submissions.forEach(submission => {
            const submissionDiv = document.createElement('div');
            submissionDiv.innerHTML = `
                <p><strong>Имя:</strong> ${submission.name}</p>
                <p><strong>Email:</strong> ${submission.email}</p>
                <p><strong>Сообщение:</strong> ${submission.message}</p>
                <p><strong>Дата отправки:</strong> ${submission.date}</p>
                <hr>
            `;
            submissionsList.appendChild(submissionDiv);
        });
    } else {
        submissionsList.innerHTML = '<p>Анкет нет.</p>';
    }
    // Скролл до секции при клике на кнопку
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Дополнительный JS функционал можно добавить сюда

}

document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.getElementById('email');
    var subscribeBtn = document.getElementById('subscribeBtn');
    var errorContainer = document.getElementById('error-container');

    subscribeBtn.addEventListener('click', function () {

        
        var emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            displayErrorMessage('Valid email is required!');
            
        // Menampilkan pesan kesalahan dengan mengatur display: block
            errorContainer.style.display = 'block';
            // Mengubah warna tombol menjadi merah
            email.style.backgroundColor = '#FFB4B4';
            emailInput.value = '';
            
        } else {
            // Email valid, tampilkan pesan sukses
            displaySuccessMessage();
            emailInput.value = '';
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayErrorMessage(message) {
        errorContainer.textContent = message;
        errorContainer.style.color = '#FFB4B4';
    }

    function displaySuccessMessage(message) {
        errorContainer.textContent = message;
        setTimeout(function () {
            window.location.href = 'success.html';
        }, 0);
    }
});

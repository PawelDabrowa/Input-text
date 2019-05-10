const inputMsg = document.getElementById('input');
let message = document.querySelector('.message');


const passwords = ['winter', 'summer', 'spring', 'autumn'];
messages = ['A cold wind is blowing from the north, and it made the trees rustle like living things', 'The world being filled with bright colours!', 'The green haze that starts on the forest floor', 'Leaves falling from trees'];

inputMsg.addEventListener('input', (e) => {
    message.textContent = "";
    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (text.toLowerCase() === password.toLowerCase()) {
            message.textContent = messages[index];
        }
    })
});



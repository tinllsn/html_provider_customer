document.addEventListener('DOMContentLoaded', () => {
    const bufferList = document.getElementById('buffer-list');
    const produceButton = document.getElementById('produce');
    const consumeButton = document.getElementById('consume');

    const MAX_BUFFER_SIZE = 5;
    let buffer = [];

    function updateBuffer() {
        bufferList.innerHTML = '';
        buffer.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `Item ${item}`;
            bufferList.appendChild(li);
        });
    }

    produceButton.addEventListener('click', () => {
        if (buffer.length < MAX_BUFFER_SIZE) {
            const newItem = buffer.length + 1;
            buffer.push(newItem);
            updateBuffer();
        } else {
            alert('Buffer is full!');
        }
    });

    consumeButton.addEventListener('click', () => {
        if (buffer.length > 0) {
            buffer.shift();
            updateBuffer();
        } else {
            alert('Buffer is empty!');
        }
    });
});

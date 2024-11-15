const socket = io();

    const togglebutton = document.getElementById('toggle-relais')
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');

    togglebutton.addEventListener('onclick' ,(e) => {
        e.preventDefault();
        console.log('toggle');
        socket.emit('toggle');
    })

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
      }
    });

    socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
  
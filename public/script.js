const socket = io();

    const togglebuttonrelais1 = document.getElementById('toggle-relais1')
    const togglebuttonrelais2 = document.getElementById('toggle-relais2')
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');

    togglebuttonrelais1.addEventListener('click' ,(e) => {
        e.preventDefault();
        console.log('toggle-relais1');
        socket.emit('toggle-relais1');
    })

    togglebuttonrelais2.addEventListener('click' ,(e) => {
        e.preventDefault();
        console.log('toggle-relais2');
        socket.emit('toggle-relais2');
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
  
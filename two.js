var wrongButtons = document.querySelectorAll('#wrong');

for (var i = 0; i < wrongButtons.length; i++) {
  wrongButtons[i].onclick = function() {
    alert('Это не так просто, как ты думала. Будь внимательнее❤️');
  };
}




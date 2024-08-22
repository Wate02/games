//location.href = 'https://wate02.github.io/games/index2/index2.html';


console.log('Js');

function eytiapp2() {
  location.href = 'https://wate02.github.io/Mario64webgl/';
}

function sub() {
    location.href = 'https://wate02.github.io/Idk2/html5-games/games/subway-surfers-unity/';
}

function emu() {
    location.href = 'https://wate02.github.io/EmulatorJS//';
}


function imgtoclipboard() {
    location.href = 'https://wate02.github.io/Imgtoclipboard/';
}

function ctrtt() {
    location.href = 'https://wate02.github.io/Idk2/html5-games/games/ctr-TimeTravel/';
}
function gs() {
    location.href = 'https://wate02.github.io/Idk2/html5-games/games/GoogleSnake/index.html';
}

function esurf() {
  location.href = 'https://wate02.github.io/Idk2/html5-games/games/edge-surf/index.html';
}

function app1() {
  location.href = 'https://wate02.github.io/2048html';
}

function slowroads() {
  location.href = 'https://slowroads.io/';
  }

function sandboxels () {
 location.href = 'https://wate02.github.io/sandboxels' 
}
// Dark Mode

const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';


function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}


function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}


if (darkModeEnabled) {
    enableDarkMode();
}


document.getElementById('toggleBtn').addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

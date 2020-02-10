

const menuItemHrefs = Array.from(window.document.getElementsByClassName('menu-item')).map((htmlElement) => {
    return htmlElement.getAttribute('href');
});

const appElement = document.getElementById('app');

function setActive(menuItem) {
    for (const htmlElement of window.document.getElementsByClassName('menu-item')) {
        if (htmlElement.getAttribute('href').replace('#', '') === menuItem) {
            htmlElement.parentElement.classList.add('active');
        } else {
            htmlElement.parentElement.classList.remove('active');
        }
    }
}

function selectMenuItem(menuItem) {
    setActive(menuItem);
    const url = `views/${menuItem}.html`;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            appElement.innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}

function selectHashLocation() {
    if (menuItemHrefs.indexOf(location.hash) !== -1) {
        selectMenuItem(location.hash.replace('#', ''));
    } else {
        selectMenuItem('info');
    }
}

window.addEventListener('hashchange', () => {
    selectHashLocation();
});

selectHashLocation();

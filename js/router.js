

const menuItemHrefs = Array.from(window.document.getElementsByClassName('menu-item')).map((htmlElement) => {
    return htmlElement.getAttribute('href');
});

const appElement = document.getElementById('app');

function setActive(menuItem) {
    for (const htmlElement of window.document.getElementsByClassName('menu-item')) {
        if (htmlElement.getAttribute('href').replace('#', '') === menuItem) {
            htmlElement.classList.add('active');
        } else {
            htmlElement.classList.remove('active');
        }
    }
}

function selectMenuItem(menuItem, animate = true) {
    setActive(menuItem);
    const url = `views/${menuItem}.html`;
    const promises = [
        promisifiedGet(url),
    ];
    if (animate) {
        appElement.classList.add('transparent');
        promises.push(promisifiedWait(200));
    }
    Promise.all(promises).then(([contents, _]) => {
        appElement.innerHTML = contents;
        if (animate) {
            appElement.classList.remove('transparent');
        }
    })
}

function selectHashLocation(animate = true) {
    if (menuItemHrefs.indexOf(location.hash) !== -1) {
        selectMenuItem(location.hash.replace('#', ''), animate);
    } else {
        selectMenuItem('info', animate);
    }
}

window.addEventListener('hashchange', () => {
    selectHashLocation(true);
});

selectHashLocation(false);

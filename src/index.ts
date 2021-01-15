const helloTypescript = (): Element => {
    const element = document.createElement('div');
    element.innerHTML = 'you\'re just my type';
    
    return element;
}

document.body.appendChild(helloTypescript());
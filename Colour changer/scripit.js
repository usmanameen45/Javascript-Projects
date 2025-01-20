const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
    
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let color = e.target.id;
        switch (color) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
        }
    });
})
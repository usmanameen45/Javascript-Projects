const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const navBtn = document.querySelector('nav a button');
const canvas = document.querySelector('.canvas');

    
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let color = e.target.id;
        switch (color) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                navBtn.style.backgroundColor = 'white';
                canvas.style.color = 'white';
                navBtn.style.color = 'black';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                navBtn.style.backgroundColor = 'grey';
                canvas.style.color = 'black';
                navBtn.style.color = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                navBtn.style.backgroundColor = 'white';
                canvas.style.color = 'white';
                navBtn.style.color = 'black';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                navBtn.style.backgroundColor = 'white';
                canvas.style.color = 'black';
                navBtn.style.color = 'black';
                break;
        }
    });
})
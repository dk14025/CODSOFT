document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            
            if (value === 'C') {
                display.value = '';
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.buttons button'));
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Button click event handler
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerText;

            switch (value) {
                case '=':
                    try {
                        // Replace square root and power symbols
                        let expression = display.value
                            .replace(/√/g, 'Math.sqrt')
                            .replace(/\^/g, '**')
                            .replace(/÷/g, '/'); // Convert ÷ to /

                        // Evaluate the expression
                        display.value = eval(expression);
                    } catch {
                        display.value = 'Error';
                    }
                    break;
                case 'C':
                    // Clear the display
                    display.value = '';
                    break;
                case '√':
                    // Square root
                    display.value = `√(${display.value})`;
                    break;
                case '^':
                    // Power operation (a^b)
                    display.value += '**'; // Convert ^ to ** for exponentiation
                    break;
                case 'backspace':
                    // Backspace
                    display.value = display.value.slice(0, -1);
                    break;
                case '%':
                    // Percentage
                    try {
                        display.value = (parseFloat(display.value) / 100).toString();
                    } catch {
                        display.value = 'Error';
                    }
                    break;
                case '÷':
                case '*':
                case '-':
                case '+':
                    // Handle arithmetic operations
                    display.value += ` ${value} `;
                    break;
                default:
                    // Handle numbers and parentheses
                    display.value += value;
            }
        });
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
            document.getElementById('cal-body').classList.add('dark-mode');
            display.classList.add('dark-mode');
            buttons.forEach(button => button.classList.add('dark-mode'));
        } else {
            document.body.classList.remove('dark-mode');
            document.getElementById('cal-body').classList.remove('dark-mode');
            display.classList.remove('dark-mode');
            buttons.forEach(button => button.classList.remove('dark-mode'));
        }
    });
});

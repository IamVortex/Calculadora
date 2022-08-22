let buttons = Array.from(document.querySelectorAll('.btn'))

function insertbutton() {
    let resultado = document.querySelector('.result')
    buttons.map((btn) => {
        btn.addEventListener("click", (e) => {
            console.log(e.target.innerText)

            switch (e.target.innerText) {
                case '=':
                    resultado.value = eval(resultado.value)
                    break;

                case '<':
                    resultado.value = resultado.value.slice(0, -1)
                    break;

                case 'C':
                    resultado.value = ""
                    break;

                case 'x':
                    resultado.value = resultado.value + "*"
                    break;

                case '^':
                    resultado.value = resultado.value + "**"
                    break;

                case '÷':
                    resultado.value = resultado.value + '/'
                    break;

                default:
                    resultado.value += e.target.innerText
                    break;
            }
        })
    })
}

insertbutton()
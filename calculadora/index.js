var calculadora = {
    visor: document.getElementById('visorInfo'),
    handleOperacoes: function() {
        try {
            this.visor.innerText = eval(this.visor.innerText);
        } catch {
            this.visor.innerText = "Erro";
        }
    },
    apagaUltimoDigito: function() {
        if (this.visor.innerText.length > 1) {
            this.visor.innerText = this.visor.innerText.slice(0, -1);
        } else {
            this.visor.innerText = "0";
        }
    },
    limparVisor: function() {
        this.visor.innerText = "0";
    }
};

document.querySelectorAll('.numeros').forEach(function(button) {
    button.addEventListener('click', function() {
        if (calculadora.visor.innerText === "0") {
            calculadora.visor.innerText = this.value;
        } else {
            calculadora.visor.innerText += this.value;
        }
    });
});

document.querySelectorAll('.operadores').forEach(function(button) {
    button.addEventListener('click', function() {
        calculadora.visor.innerText += ` ${this.value} `;
    });
});

document.querySelector('.button-resultado').addEventListener('click', function() {
    calculadora.handleOperacoes();
});

document.querySelector('.button-ce').addEventListener('click', function() {
    calculadora.limparVisor();
});

document.querySelector('.button-del').addEventListener('click', function() {
    calculadora.apagaUltimoDigito();
});

window.addEventListener('keydown', function(e) {
    var key = e.key;
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        if (calculadora.visor.innerText === "0") {
            calculadora.visor.innerText = key;
        } else {
            calculadora.visor.innerText += key;
        }
    } else if (key === 'Enter') {
        calculadora.handleOperacoes();
    } else if (key === 'Backspace') {
        calculadora.apagaUltimoDigito();
    }
});

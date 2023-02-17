function MudarTema() {
  const html = document.documentElement
  html.classList.toggle('tema-escuro')

  const img = document.querySelector('#tema img')
  if (html.classList.contains('tema-escuro'))
    img.setAttribute('src', './assets/light.svg')
  else {
    img.setAttribute('src', './assets/dark.svg')
  }
}

const previuOperacaoText = document.querySelector('#operacao')
const previuResultadoText = document.querySelector('#resultado')
const botoes = document.querySelectorAll('#teclado button')

class Calculadora {
  constructor(previuOperacaoText, previuResultadoText) {
    this.previuOperacaoText = previuOperacaoText
    this.previuResultadoText = previuResultadoText
    this.OperacaoText = ''
  }

  addDigito(digito) {
    //CHegar se operação ja tem ,
    if (digito === ',' && this.previuResultadoText.innerText.includes(',')) {
      return
    }
    this.OperacaoText = digito
    this.atualizarTela()
  }

  // Processando metodo calculadora
  processoOperacao(operacao) {
    let operacaoValor
    const previu = +this.previuOperacaoText.innerText.split(" ")[0]
    const resultado = +this.previuResultadoText.innerText

    switch (operacao) {
      case '+':
        operacaoValor = previu + resultado
        this.atualizarTela(operacaoValor, operacao, resultado, previu)
        break
      case '-':
        operacaoValor = previu - resultado
        this.atualizarTela(operacaoValor, operacao, resultado, previu)
      case 'x':
        operacaoValor = previu * resultado
        this.atualizarTela(operacaoValor, operacao, resultado, previu)
        break
      case '/':
        operacaoValor = previu / resultado
        this.atualizarTela(operacaoValor, operacao, resultado, previu)
        break
        
      default:
        return
    }
  }

  atualizarTela(
    operacaoValor = null,
    operacao = null,
    previu = null,
    resultado = null
  ) {
    if (operacaoValor === null) {
      this.previuResultadoText.innerText += this.OperacaoText
    } else {
      //Chegar se valor e 0
      if (previu === 0) {
        operacaoValor = resultado
      }

      //Addd valor para resultado
      this.previuOperacaoText.innerText = `${operacaoValor} ${operacao}`
      this.previuResultadoText.innerText = ''
    }
  }
}

const calcular = new Calculadora(previuOperacaoText, previuResultadoText)

botoes.forEach(btn => {
  btn.addEventListener('click', e => {
    const valor = e.target.innerText

    if (+valor >= 0 || valor === ',') {
      calcular.addDigito(valor)
    } else {
      calcular.processoOperacao(valor)
    }
  })
})

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

const numeroBotoes = document.querySelectorAll('[data-numero]')
const operadorBotao = document.querySelectorAll('[data-operador]')
const igualBotao = document.querySelector('[data-igual]')
const deleteBotao = document.querySelector('[data-delete]')
const limparBotao = document.querySelector('[data-limpar]')
const previuOperacaoTexto = document.querySelector('[data-previu-operacao]')
const previuResultadoTexto = document.querySelector('[data-previu-resultado]')

class Calculadora {
  constructor(previuOperacaoTexto, previuResultadoTexto) {
    this.previuOperacaoTexto = previuOperacaoTexto
    this.previuResultadoTexto = previuResultadoTexto
  }

  imprimirNumero(numero) {
    this.previuResultado = `${this.previuResultado}${numero.toString()}`
  }

  limpar() {
    this.previuResultado = ''
    this.preivuOperacao = ''
    this.operacao = undefined
  }

  atualizarDisplay() {
    this.previuOperacaoTexto.innerText = this.preivuOperacao
    this.previuResultadoTexto.innerText = this.previuResultado
  }
}
const calculadora = new Calculadora(previuOperacaoTexto, previuResultadoTexto)

for (const numeroBotao of numeroBotoes) {
  numeroBotao.addEventListener('clcik', () => {
    calculadora.imprimirNumero(numeroBotao.innerText)
    calculadora.atualizarDisplay()
  })
}

limparBotao.addEventListener('click', () => {
  calculadora.limpar()
  calculadora.atualizarDisplay()
})

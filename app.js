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

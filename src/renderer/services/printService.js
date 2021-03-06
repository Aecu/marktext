class MarkdownPrint {
  renderMarkdown (html) {
    this.clearup()
    const printContainer = document.createElement('article')
    printContainer.classList.add('print-container')
    printContainer.classList.add('markdown-body')
    this.container = printContainer
    document.body.appendChild(printContainer)
    printContainer.innerHTML = html
  }

  clearup () {
    if (this.container) {
      this.container.remove()
    }
  }
}

export default MarkdownPrint

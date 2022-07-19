
class nTag {
  container = document.createElement('div')
  element = document.createElement('div')

  options = {
    element: {
      tagName: 'div',
    },
    container: {
      tagName: 'div',
    },
    component: {
      name: 'bug',
    }
  }

  constructor(options) {
    this.options = {
      ...this.options,
      ...options,
    }

    this.build()
  }

  build() {
    if (this.options.element.tagName) {
      this.element = document.createElement(this.options.element.tagName)
    }

    if (this.options.container.tagName) {
      this.container = document.createElement(this.options.container.tagName)
    }

    if (this.options.component.name) {
      this.element.classList.add(`el-${this.options.component.name}`)
      this.container.classList.add(`ct-${this.options.component.name}`)
    }

    this.setStyle('margin', '0')
    this.setStyle('padding', '0')
    this.setStyle('outline', 'none')
    this.setStyle('border', 'none')
  }

  static fromElement(el = document.createElement('')) {
    const bug = new nTag()
    bug.element = el
    return bug
  }

  static fromId(id) {
    return nTag.fromElement(document.getElementById(id))
  }

  setContainerStyle(name, value) {
    this.container.style[name] = value
    return this
  }

  getContainerStyle(name) {
    return this.container.style[name]
  }

  setStyle(name, value) {
    this.element.style[name] = value
    return this
  }

  getStyle(name) {
    return this.element.style[name]
  }

  setText(text) {
    this.element.innerText = text
    return this
  }

  getText() {
    return this.element.innerText
  }

  on(name, value) {
    this.element.addEventListener(name, value.bind(this))
    return this
  }

  once(name, value) {
    this.element.addEventListener(name, value.bind(this), { once: true })
    return this
  }

  setData(name, value) {
    this.element.dataset[name] = value
    return this
  }

  getData(name) {
    return this.element.dataset[name]
  }

  clear() {
    while(this.element.children.length > 0) {
      this.element.children.item(0).remove()
    }

    return this
  }

  append(ntag = new nTag()) {
    this.element.append(ntag.render())
    return this
  }

  render() {
    this.container.append(this.element)
    return this.container
  }
}

class nMarginAuto extends nTag {
  constructor() {
    super({
      component: { name: 'margin-auto' },
    })

    this.setStyle('width', '40rem')
    this.setStyle('margin', '0 auto')
  }
}

class nH1 extends nTag {
  constructor() {
    super({
      component: { name: 'h1' },
    })

    this.setStyle('font-weight', 'bold')
    this.setStyle('font-size', '3rem')
  }
}

class nText extends nTag {
  constructor() {
    super({
      element: { tagName: 'p' },
      component: { name: 'text' },
    })
  }
}

class nNumber extends nTag {
  num = 0

  constructor() {
    super({
      element: { tagName: 'p' },
      component: { name: 'number' },
    })

    this.setNumber(this.num)
  }

  setText() {
    throw new Error('Can not do this.')
  }

  setNumber(num) {
    this.num = num
    super.setText(this.num)
    return this
  }

  add(num = 1) {
    this.num += num
    super.setText(this.num)
    return this
  }

  sub(num = 1) {
    this.num -= num
    super.setText(this.num)
    return this
  }
}

class nButton extends nTag {
  constructor() {
    super({
      element: { tagName: 'button' },
      component: { name: 'button' },
    })
  }
}

class nFlex extends nTag {
  constructor() {
    super({
      component: { name: 'flex' },
    })

    this.setStyle('display', 'flex')
    this.setStyle('justify-content', 'space-between')
  }
}

/// components ////

class nCenter extends nTag {
  constructor() {
    super({ component: { name: 'margin-auto' } })

    this.setStyle('margin', '0 auto')
    this.setStyle('width', '42rem')

  }

}

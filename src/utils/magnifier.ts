type MagnifierType = {
  targit: HTMLImageElement,
  scale: number,
  magnifierSize:number
}

class Magnifier {
  targit: HTMLImageElement
  scale:number
  magnifierSize: number
  private magnifier:HTMLDivElement | null = null
  
  constructor({ targit,scale,magnifierSize}:MagnifierType) {
    // 初始化targit
    if (targit instanceof HTMLImageElement) {
      this.targit = targit
    } else {
      throw new Error('targit is not a HTMLImageElement')
    }

    // 初始化scale
    if (typeof scale === 'number' || scale > 1) {
      this.scale = scale
    } else {
      // default
      this.scale = 5
    }

    // 初始化magnifierSize
    if (typeof magnifierSize === 'number') {
      this.magnifierSize = magnifierSize
    } else {
      // default
      this.magnifierSize = 300
    }
    this.init()
  }

  private init = () => {
    this.createMagnifier()
    this.hanleEvent()
  }

  private createMagnifier = () => {
    const magnifier = document.createElement('div')
    magnifier.style.cssText = `
      position:fixed;
      top:50%;
      left:50%;
      width:${this.magnifierSize}px;
      height:${this.magnifierSize}px;
      border-radius:50%;
      overflow:hidden;
      box-shadow:inset 0 0 20px #000; 
      background:url(${this.targit.src}) no-repeat #ccc;
      background-size:${this.targit.clientWidth * this.scale}px auto; 
    `
    document.body.append(magnifier)
    this.magnifier = magnifier
  }

  private hanleEvent = () => {
    
  }

}

export {
  Magnifier
}
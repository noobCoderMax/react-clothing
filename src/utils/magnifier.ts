type MagnifierType = {
  target: HTMLImageElement,
  scale: number,
  magnifierSize:number
}

class Magnifier {
  target: HTMLImageElement
  scale:number
  magnifierSize: number
  private magnifier: HTMLDivElement | null = null
  private showMagnifier:boolean = false
  
  constructor({ target,scale,magnifierSize}:MagnifierType) {
    // 初始化target
    if (target instanceof HTMLImageElement) {
      this.target = target
    } else {
      throw new Error('target is not a HTMLImageElement')
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
    this.handleEvents()
  }

  private createMagnifier = () => {
    const magnifier = document.createElement('div')
    magnifier.style.cssText = `
      position:fixed;
      top:300px;
      left:400px;
      width:${this.magnifierSize}px;
      height:${this.magnifierSize}px;
      border-radius:50%;
      overflow:hidden;
      box-shadow:inset 0 0 20px #000; 
      background:url(${this.target.src}) no-repeat #ccc;
      background-size:${this.target.clientWidth * this.scale}px auto; 
    `
    document.body.append(magnifier)
    this.magnifier = magnifier
  }

  private handleEvents = () => {
    // toggle magnifier when click
    document.addEventListener('click', (e) => {
      const { clientX, clientY } = e;
      if (e.target === this.target) {
        // if click on target image, toggle
        this.showMagnifier = !this.showMagnifier;
      } else {
        // if click elsewhere, hide
        this.showMagnifier = false;
      }
      this.toggleMagnifier();
      if (this.showMagnifier) {
        this.updateMagnifier(clientX, clientY);
      }
    });

    // move magnifier
    document.addEventListener('mousemove', (e) => {
      if (!this.showMagnifier) return;
      const { clientX, clientY } = e;
      if (this.isInTarget(clientX, clientY)) {
        this.updateMagnifier(clientX, clientY);
      } else {
        // hide magnifier when move out of target image
        this.showMagnifier = false;
        this.toggleMagnifier();
      }
    });

    // reset magnifier's background-size after window resize
    window.addEventListener('resize', (e) => {
      this.magnifier!.style.backgroundSize = `${this.target.clientWidth * this.scale}px auto`;
    });
  }

  private toggleMagnifier = () => {
    this.magnifier!.style.display = this.showMagnifier ? 'block' : 'none';
    // set pointer to crosshair to better target zoom area
    this.target.style.cursor = this.showMagnifier ? 'crosshair' : 'unset';
  }

  /**
   * update magnifier's position and background image
   */
  private updateMagnifier = (x:number, y:number) => {
    if (x + this.magnifierSize > window.innerWidth) {
      // keep magnifier in viewport
      this.magnifier!.style.left = window.innerWidth - this.magnifierSize + 'px';
    } else {
      this.magnifier!.style.left = x + 'px';
    }
    if (y + this.magnifierSize > window.innerHeight) {
      // keep magnifier in viewport
      this.magnifier!.style.top = window.innerHeight - this.magnifierSize + 'px';
    } else {
      this.magnifier!.style.top = y + 'px';
    }
    const targetRect = this.target.getBoundingClientRect();
    const bgX = -(x - targetRect.x) * this.scale + this.magnifierSize / 2 + 'px';
    const bgY = -(y - targetRect.y) * this.scale + this.magnifierSize / 2 + 'px';
    this.magnifier!.style.backgroundPosition = `${bgX} ${bgY}`;
  }

  private isInTarget = (x:number, y:number) => {
    const targetRect = this.target.getBoundingClientRect();
    const { left, top, width, height } = targetRect;
    if (x < left || y < top || x > left + width || y > top + height) {
      return false;
    }
    return true;
  }
}

export {
  Magnifier
}
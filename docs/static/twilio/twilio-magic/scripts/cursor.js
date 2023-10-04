 
  // ================================
  // Custom cursor follow interaction
  // ================================

  document.addEventListener('DOMContentLoaded', function (event) {

    let customCursorFollow = new mouseFollow('.cursor', '.cursor-inner', '.cursor-shape');

    const loop = () => {
      let animation = window.requestAnimationFrame(loop);
      customCursorFollow.follow();
    }
    loop();
  });

  const calcEasing = (ex, current, easing) => {
    return ex + (current - ex) * easing;
  }

  const calcDis = (x, _x) => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(_x, 2));
  }

  class mouseFollow {
    constructor(cursorElem, cursorInner, cursorShape) {
      this.elem = document.querySelector(cursorElem);
      this.elemInner = document.querySelector(cursorInner);
      this.elemShape = document.querySelector(cursorShape);
      this.hoverEffectElems = document.querySelectorAll('.has-cursor-effect');
      this.init();
      this.event();
    }

    init() {
      let harlfWidth = { x: window.innerWidth >> 1, y: window.innerHeight >> 1 }
      this.mousePos = { x: harlfWidth.x, y: harlfWidth.y }
      this.exmousePos = { x: harlfWidth.x, y: harlfWidth.y }
      this.move = { x: harlfWidth.x, y: harlfWidth.y };
    }

    event() {
      window.addEventListener('mousemove', (e) => this.update(e));
      window.addEventListener('mouseout', (e) => { this.outmouse(e); }, false);

      // watch for mousedown
      // window.addEventListener('mousedown', (e) => this.whileMouseDown(e));
      // window.addEventListener('mouseup', (e) => this.whileMouseDown(e));

      // Make cursor bigger when hovering element with .has-cursor-effect class
      this.hoverEffectElems.forEach(elem => {
        elem.addEventListener('mouseenter', (e) => this.elem.classList.add('is-active'));
        elem.addEventListener('mouseleave', (e) => this.elem.classList.remove('is-active'));
      });
    }

    update(e) {
      this.mousePos = { x: e.clientX, y: e.clientY };
      this.elem.classList.remove('is-hidden');
    }

    outmouse(e) {
      this.elem.classList.add('is-hidden');

      // return cursor dot to center of viewport
      // this.mousePos = {x: window.innerWidth >> 1 , y: window.innerHeight >> 1}
    }

    // // Add class while mouse is being held down
    // whileMouseDown() {
    //   this.elemShape.classList.toggle('is-being-clicked');
    // }

    calcEasing(ex, current, easing) {
      return ex + (current - ex) * easing;
    }

    calc() {
      this.move.x = this.calcEasing(this.exmousePos.x, this.mousePos.x, 0.2);
      this.move.y = this.calcEasing(this.exmousePos.y, this.mousePos.y, 0.2);
      this.exmousePos.x = this.move.x;
      this.exmousePos.y = this.move.y;

      let distance = {
        x: Math.abs(this.mousePos.x - this.exmousePos.x),
        y: Math.abs(this.mousePos.y - this.exmousePos.y),
      }

      let dist = Math.sqrt(Math.pow(distance.x, 2) + Math.pow(distance.y, 2));

      let baseScale = Math.round(dist / (window.innerWidth / 6) * 100) / 100 + 1;
      baseScale = Math.min(baseScale, 1.5);

      this.scale = {
        x: baseScale,
        y: 1 - Math.abs(1 - baseScale)
      }

      if (Math.abs(this.mousePos.x - this.move.x) < 0.0005) {
        this.move.x = this.mousePos.x;
        this.move.y = this.mousePos.y;
      }

      // Rotate skewed dot in direction of the cursor
      let distanceCircleToMouse = {
        x: Math.round((this.mousePos.x - this.move.x) * 100) / 500,
        y: Math.round((this.mousePos.y - this.move.y) * 100) / 500
      }

      let radian = Math.atan2(distanceCircleToMouse.y, distanceCircleToMouse.x);
      this.angle = ~~(radian * (180 / Math.PI));
    }

    follow() {
      this.calc();
      this.elemInner.style.transform = `translate3d( ${this.move.x}px ,${this.move.y}px , 0)`;
      this.elemShape.style.transform = `rotate(${this.angle}deg) scale(${this.scale.x}, ${this.scale.y})`;
    }
  }
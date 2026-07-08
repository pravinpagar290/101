let ctx: any,
  f: any,
  e = 0,
  pos = { x: 0, y: 0 },
  lines: any[] = [],
  E = {
    debug: true,
    friction: 0.5,
    trails: 20, // Lightweight
    size: 20, // Lightweight
    dampening: 0.025,
    tension: 0.99,
  };

let renderId: number;
let boundMouseMove: any;
let boundTouchStart: any;
let isInitialized = false;
let containerEl: HTMLElement | null = null;

function Node(this: any) {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
}

function n(this: any, e: any) {
  this.init(e || {});
}
n.prototype = {
  init: function (e: any) {
    this.phase = e.phase || 0;
    this.offset = e.offset || 0;
    this.frequency = e.frequency || 0.001;
    this.amplitude = e.amplitude || 1;
  },
  update: function () {
    this.phase += this.frequency;
    e = this.offset + Math.sin(this.phase) * this.amplitude;
    return e;
  },
  value: function () {
    return e;
  },
};

function Line(this: any, e: any) {
  this.init(e || {});
}

Line.prototype = {
  init: function (e: any) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (var t, n = 0; n < E.size; n++) {
      t = new (Node as any)();
      t.x = pos.x;
      t.y = pos.y;
      this.nodes.push(t);
    }
  },
  update: function () {
    let e = this.spring,
      t = this.nodes[0];
    t.vx += (pos.x - t.x) * e;
    t.vy += (pos.y - t.y) * e;
    for (var n, i = 0, a = this.nodes.length; i < a; i++) {
      t = this.nodes[i];
      if (i > 0) {
        n = this.nodes[i - 1];
        t.vx += (n.x - t.x) * e;
        t.vy += (n.y - t.y) * e;
        t.vx += n.vx * E.dampening;
        t.vy += n.vy * E.dampening;
      }
      t.vx *= this.friction;
      t.vy *= this.friction;
      t.x += t.vx;
      t.y += t.vy;
      e *= E.tension;
    }
  },
  draw: function () {
    let e,
      t,
      n = this.nodes[0].x,
      i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);
    for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    e = this.nodes[a];
    t = this.nodes[a + 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  },
};

function initLines() {
  lines = [];
  for (let i = 0; i < E.trails; i++) {
    lines.push(new (Line as any)({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }
}

function handleMouseMove(e: any) {
  if (!containerEl) return;
  const rect = containerEl.getBoundingClientRect();
  if (e.touches) {
    pos.x = e.touches[0].clientX - rect.left;
    pos.y = e.touches[0].clientY - rect.top;
  } else {
    pos.x = e.clientX - rect.left;
    pos.y = e.clientY - rect.top;
  }
}

function handleTouchStart(e: any) {
  if (e.touches.length === 1 && containerEl) {
    const rect = containerEl.getBoundingClientRect();
    pos.x = e.touches[0].clientX - rect.left;
    pos.y = e.touches[0].clientY - rect.top;
  }
}

function onMousemoveOnce(e: any) {
  if (!containerEl) return;
  
  containerEl.removeEventListener("mousemove", onMousemoveOnce);
  containerEl.removeEventListener("touchstart", onMousemoveOnce);
  
  if (boundMouseMove) {
    containerEl.removeEventListener("mousemove", boundMouseMove);
    containerEl.removeEventListener("touchmove", boundMouseMove);
  }
  if (boundTouchStart) {
    containerEl.removeEventListener("touchstart", boundTouchStart);
  }
  
  boundMouseMove = handleMouseMove;
  boundTouchStart = handleTouchStart;
  
  containerEl.addEventListener("mousemove", boundMouseMove);
  containerEl.addEventListener("touchmove", boundMouseMove);
  containerEl.addEventListener("touchstart", boundTouchStart);
  
  handleMouseMove(e);
  initLines();
  
  if (!renderId) {
    render();
  }
}

function render() {
  if (ctx && ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.025)";
    ctx.lineWidth = 10;
    
    for (var i = 0; i < E.trails; i++) {
      if (lines[i]) {
        lines[i].update();
        lines[i].draw();
      }
    }
    ctx.frame++;
    renderId = window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  if (ctx && ctx.canvas && containerEl) {
    ctx.canvas.width = containerEl.clientWidth;
    ctx.canvas.height = containerEl.clientHeight;
  }
}

export const renderCanvas = function () {
  const canvasEl = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvasEl) return;
  
  containerEl = canvasEl.parentElement;
  if (!containerEl) return;
  
  ctx = canvasEl.getContext("2d");
  if (!ctx) return;
  
  // Prevent multiple instances on hot reloads
  if (isInitialized) {
      ctx.running = true;
      if (!renderId) render();
      return;
  }
  
  isInitialized = true;
  ctx.running = true;
  ctx.frame = 1;
  f = new (n as any)({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  
  containerEl.addEventListener("mousemove", onMousemoveOnce);
  containerEl.addEventListener("touchstart", onMousemoveOnce);
  window.addEventListener("resize", resizeCanvas);
  
  window.addEventListener("focus", () => {
    if (ctx && !ctx.running) {
      ctx.running = true;
      if (!renderId) render();
    }
  });
  
  window.addEventListener("blur", () => {
    if (ctx) ctx.running = true;
  });
  
  resizeCanvas();
};

export const stopCanvas = () => {
  if (ctx) ctx.running = false;
  if (renderId) {
    window.cancelAnimationFrame(renderId);
    renderId = 0;
  }
};

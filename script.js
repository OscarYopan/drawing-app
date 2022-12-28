const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const decreaseBtn = document.querySelector('#decrease')
const increaseBtn = document.querySelector('#increase')
const colorEl = document.querySelector('#color')
const sizeEl = document.querySelector('#size')
const clearEl = document.querySelector('#clear')

let size = 10
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', e => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', e => {
  isPressed = false

  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', e => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

function updateSizeOnScreen() {
  sizeEl.innerHTML = size
}

colorEl.addEventListener('change', e => (color = e.target.value))

clearEl.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
)

increaseBtn.addEventListener('click', () => {
  size += 1
  updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
  size -= 1
  if (size < 1) {
    size = 1
  }
  updateSizeOnScreen()
})

// Canvas Height and Width

function canvasWidth() {
  let canvasHeightWidth = ``
  const body = document.querySelector('body')
  const canvas = document.createElement('canvas')
  let widthHeight = []
  widthHeight = sectionHeight()
  console.log(widthHeight)
  let width = 0
  let height = 0
  if (widthHeight[2] <= 500) {
    width = widthHeight[2] - 10
    let height = widthHeight[1] - 150
    console.log(width, height)
  } else {
    width = 800
    height = 500
  }
  canvas.style.width(`${width}`)
  canvas.style.height(`${height}`)
}

function sectionHeight() {
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  console.log('H: ' + height, ', W: ' + width)

  return [height, width]
}

// canvasWidth()

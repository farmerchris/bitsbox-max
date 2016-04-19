fill('boardwalk')
size = 150

function drag(info) {
  ring = stamp('ring',x,y,10)
  ring.rotate(info.angle)
  ring.size(size)
}
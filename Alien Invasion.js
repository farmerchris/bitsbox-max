l = null
fill('space') 
function create() {
    x = random(768)
    y = random(-1000,0)
    size = random(50,250)
    distance = size * 40
    alien = stamp('alien10',x,y,size)
    alien.move(SOUTH,distance,30000)
    alien.tap = function() {
        this.pow();
      color('blue')
      if (l) l.hide()
      l = line(400,1022,x,y)
    }
}
repeat(create,40)


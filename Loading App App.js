fill('appscreen')

w = stamp('stampy').move()
  .rotate(-5000,50000)

bx = box(424,870,120,120)
t = text('hi','white')
function touching() {
  c = look(x,y)
  color(c)
  bx.hide()
  bx = box(424,870,120,120)
  //t.change(c)
}


i = 0
count = 10
repeat(function() {
	b=stamp('cube9',764/2,1022/2,128)
    b.rotate(360.0/count * i)
    i = i+1
    b.move(UP, 238)
}, count);

b = stamp('cube9',764/2,1022/2,158)
b.move(UP, 238)
b.tap = function() {
  b.explode()
  each = -1
}

each = 3
j = 0
function loop()
{
  each = each - 1
  if (each == 0) {
    each = 3;
    b.move(DOWN,238)
    b.rotate(360.0/count * j++)
    b.move(UP,238)
  }
}




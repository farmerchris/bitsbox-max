fill('maine')
chopped = 0
goal = 10
repeat(tree,goal)
paul= stamp('bunyan',200)
info = 'Try to chop down all ' + goal
note = text(info,175,150,'cornsilk')

function walk () {}

function tree(i) {
  x = random(700)
  y = 110 + i * 80
  size = 100 + i * 15
  pine = stamp('pine',x,y,size)
  pine.tap = chop
}

function chop() {
  if (distance(this, paul) > 340) {
   note.change('Too far away!')
   sound('fart2')
   return
  }
  sound('woodchop')
  //this.explode()
  this.move(x,-200,1000)
  this.rotate(1000,1000)
  this.size(0,1500)
  //this.change('hamster')
  this.tap = null
  walk()
}

function walk () {
  paul.move(x,y,500)
  paul.change('bunyan chop')
  chopped = chopped + 1
  note.change(chopped)
  //sound('walk')
}

function loop() {
  if (chopped >= goal) {
    note.change('You win! The Earth weeps.')
    paul.dance()
    chopped = 0
  }
}



































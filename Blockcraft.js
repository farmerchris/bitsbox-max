function drag() {
	ink = stamp(
      random(
      'cube',
      'cube2',
      'cube3',
      'cube4',
      'cube5'
      ), x - (x%75),y - (y%75), 75)
    ink.tap = pop
}
fill('grid2')








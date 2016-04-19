fill('green')
text('drag your finger')
function drag() {
  send('draw',x,y)
  draw(x,y)
}
function draw(x,y) {
    //text('😡', x+10, y-10, 20)
  //💩
    a = stamp('buttonred', x, y, 20)
    a.tap = function() {
      send('blow');
      doBlow();
    }
}
function get(cmd,x,y) {
  if (cmd == 'draw') {
    draw(x,y)
  } else if (cmd == 'blow') {
    doBlow();
  }
}

function doBlow() {
  a = 20
  b = 50
  find('buttonred').forEach(function(x) {
    c = b
    x.size(b,a)
    delay(function(){
      x.size(b * 2)
      x.explode()
    },a);
    a += 25;
    b += 1;
  })
}








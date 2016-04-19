fill('blackhole')

//fill('buttonwall')

//text('poo poo 200')

time = 2000
function makebear() {
    b = stamp('bear').size().move().rotate()
    b.move(368,604,time)
    b.size(0, time)
    b.rotate(1440*Math.random() - 720,time)
    b.tap = explode
    
    h = stamp('hat7')
    h.move(b.x,b.y)
    h.rotate(b.rotation)
    h.size(b.height/2)
    h.move(UP,b.height/2)
    h.move(368,604,time)
    h.size(0, time)
    h.rotate(1440*Math.random() - 720,time)
}

eachwait = 5
wait = eachwait
function loop() {
  wait = wait - 1;
  if (wait == 0) {
    makebear();
    wait = eachwait;
  }
}
repeat(makebear, 5)






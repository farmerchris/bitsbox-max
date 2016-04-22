fill('dark ocean')
width=10

function drag() {
  arm = stamp('tentacle',x,y,10)
  arm.size(width)
  width = width+1
}

function untouch() {
  width = 10
}
body = stamp('sea monster body',384,1100,700)
circle(320,820,20)
circle(508,824 ,20)

function tap() {

  circle(x,y,20,'cotton candy') 
}





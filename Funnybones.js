fill ('red wall')
box(75, 100, 625, 150, 'salmon')
text ('FUNNYBONES', 100, 210, 90, 'maroon')

function guitar() {
    g.dance()   
    sound('guitar')
}
g = stamp('skeleton4',200,700)
g.tap = guitar 

function violin() {
    v.rotate(RIGHT, 360,1000)
    sound('violin')
}
v = stamp('skeleton5',600,700)
v.tap = violin

function trumpet() {
    t.move(UP,300,500)
    delay(function(){
      t.move(378,674,500)
    },501)
    sound('trumpet')
}
t = stamp('skeleton6',378,674)
t.tap = trumpet



xoffset = 158/2
yoffset = (1022-800)/2

line(200+xoffset,100+yoffset,200+xoffset,700+yoffset)
line(400+xoffset,100+yoffset,400+xoffset,700+yoffset)

line(000+xoffset,300+yoffset,600+xoffset,300+yoffset)
line(000+xoffset,500+yoffset,600+xoffset,500+yoffset)

xturn = false

PIECE_SIZE = 160

function tap()
{
    if (xturn) {
      player = 'typex'
    } else {
      player = 'typeo'
    }
    st = stamp(player, x, y, PIECE_SIZE)
    if (st.hits('typex') || st.hits('typeo')) {
      st.pop()
      return
    }

    xturn = !xturn   

}












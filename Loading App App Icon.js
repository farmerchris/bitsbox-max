// This code creates your icon.
fill('silver')
i = 0
count = 10
repeat(function() {
	b=stamp('cube9',70,70,18)
    b.rotate(360.0/count * i)
    i = i+1
    b.move(UP, 38)
}, count);
stamp('icon reflection')



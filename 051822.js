//FC blend
//import all images
//cycle though images
//cycle modulation based on pi
 
 s0.initScreen()
 s1.initScreen()
 s2.initScreen()
 s3.initScreen()

src(s0).add(s1,0.8).add(s2,0.1).add(s3,0.1).out(o0)
src(s1).out(o1)
src(s2).out(o2)
src(s3).out(o3)
render()

//FC blend
//import all images
//cycle though images
//cycle modulation based on pi
 
 s0.initScreen()
 s1.initScreen()
 s2.initScreen()
 s3.initScreen()

src(s0).add(src(s1),0.2).add(src(s2),0.3).add(src(s3),0.25).out(o0)
src(s1)
.scrollY([0,0.25,0.5,0.75,1].smooth(4),0)
.scrollX([0,0.25,0.5,0.75,1].smooth(4),0)
.add(o1,0.6#)
  .out(o1)
src(s2).out(o2)
src(s3).out(o3)
render()

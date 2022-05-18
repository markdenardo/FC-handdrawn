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

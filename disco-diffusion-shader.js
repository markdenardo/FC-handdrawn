const pi=(()=>Math.random(Math.PI))
const arr=[]
for (let i = 0; i < 10; i++) {
	arr.push(i/100)
}
src(s0).out(o0)
s0.initImage("https://raw.githubusercontent.com/markdenardo/images/master/FC_JUNE_Interstitial_05(0)_0.png")
src(s0).modulate(o0,arr.fast()).out(o0)
src(s1).out(o1)
src(o1).modulate(o0,arr.smooth()).out(o2)
src(o0).modulate(o1,arr.smooth()*1/pi).out(o3)
render(o0)

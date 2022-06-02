//FC_hydra_synth
//MDN cc 2022
const pi=(()=>Math.random(Math.PI))
const arr=[]
for (let i = 0; i < 100; i++) {
	arr.push(i/100)
}
src(s0).out(o0)
s0.initImage("https://raw.githubusercontent.com/markdenardo/images/master/FC_JUNE_Interstitial_05(0)_12.png")
src(s0).modulate(o0,arr.smooth()).out(o0)
//src(s0).modulateRotate(o0,arr.smooth()).out(o0)
src(s0).modulateRepeatX(o0,arr.smooth()).out(o1)
//src(s0).modulateRepeatY(o0,arr.smooth()).out(o1)
src(s0).modulateScrollX(o0,arr.smooth()).out(o2)
src(s0).modulateKaleid(o0,arr.smooth()).out(o3)
render(o3)

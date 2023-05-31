import { proxy } from "valtio";

const state=proxy({
    intro:true,
    color:'#EFBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',
    mousePointer:{x:0,y:0}
});

export default state;
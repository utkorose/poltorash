gdjs.ViktoryCode = {};
gdjs.ViktoryCode.GDGameTitleObjects1= [];
gdjs.ViktoryCode.GDGameTitleObjects2= [];
gdjs.ViktoryCode.GDGameTitleObjects3= [];
gdjs.ViktoryCode.GDButtonStartObjects1= [];
gdjs.ViktoryCode.GDButtonStartObjects2= [];
gdjs.ViktoryCode.GDButtonStartObjects3= [];
gdjs.ViktoryCode.GDNewObjectObjects1= [];
gdjs.ViktoryCode.GDNewObjectObjects2= [];
gdjs.ViktoryCode.GDNewObjectObjects3= [];
gdjs.ViktoryCode.GDNewObject2Objects1= [];
gdjs.ViktoryCode.GDNewObject2Objects2= [];
gdjs.ViktoryCode.GDNewObject2Objects3= [];

gdjs.ViktoryCode.conditionTrue_0 = {val:false};
gdjs.ViktoryCode.condition0IsTrue_0 = {val:false};
gdjs.ViktoryCode.condition1IsTrue_0 = {val:false};


gdjs.ViktoryCode.mapOfGDgdjs_46ViktoryCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.ViktoryCode.GDButtonStartObjects1});gdjs.ViktoryCode.mapOfGDgdjs_46ViktoryCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.ViktoryCode.GDButtonStartObjects1});gdjs.ViktoryCode.eventsList0x693584 = function(runtimeScene) {

{


gdjs.ViktoryCode.condition0IsTrue_0.val = false;
{
gdjs.ViktoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ViktoryCode.condition0IsTrue_0.val) {
gdjs.ViktoryCode.GDButtonStartObjects2.createFrom(gdjs.ViktoryCode.GDButtonStartObjects1);

{for(var i = 0, len = gdjs.ViktoryCode.GDButtonStartObjects2.length ;i < len;++i) {
    gdjs.ViktoryCode.GDButtonStartObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


gdjs.ViktoryCode.condition0IsTrue_0.val = false;
{
gdjs.ViktoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ViktoryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


}; //End of gdjs.ViktoryCode.eventsList0x693584
gdjs.ViktoryCode.eventsList0x5b7a18 = function(runtimeScene) {

{

gdjs.ViktoryCode.GDButtonStartObjects1.createFrom(runtimeScene.getObjects("ButtonStart"));

gdjs.ViktoryCode.condition0IsTrue_0.val = false;
{
gdjs.ViktoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViktoryCode.mapOfGDgdjs_46ViktoryCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.ViktoryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ViktoryCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.ViktoryCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.ViktoryCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.ViktoryCode.GDButtonStartObjects1.createFrom(runtimeScene.getObjects("ButtonStart"));

gdjs.ViktoryCode.condition0IsTrue_0.val = false;
{
gdjs.ViktoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViktoryCode.mapOfGDgdjs_46ViktoryCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.ViktoryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ViktoryCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.ViktoryCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.ViktoryCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.ViktoryCode.eventsList0x693584(runtimeScene);} //End of subevents
}

}


{


gdjs.ViktoryCode.condition0IsTrue_0.val = false;
{
gdjs.ViktoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ViktoryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Birthday.wav", false, 100, 1);
}}

}


{


{
}

}


}; //End of gdjs.ViktoryCode.eventsList0x5b7a18


gdjs.ViktoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ViktoryCode.GDGameTitleObjects1.length = 0;
gdjs.ViktoryCode.GDGameTitleObjects2.length = 0;
gdjs.ViktoryCode.GDGameTitleObjects3.length = 0;
gdjs.ViktoryCode.GDButtonStartObjects1.length = 0;
gdjs.ViktoryCode.GDButtonStartObjects2.length = 0;
gdjs.ViktoryCode.GDButtonStartObjects3.length = 0;
gdjs.ViktoryCode.GDNewObjectObjects1.length = 0;
gdjs.ViktoryCode.GDNewObjectObjects2.length = 0;
gdjs.ViktoryCode.GDNewObjectObjects3.length = 0;
gdjs.ViktoryCode.GDNewObject2Objects1.length = 0;
gdjs.ViktoryCode.GDNewObject2Objects2.length = 0;
gdjs.ViktoryCode.GDNewObject2Objects3.length = 0;

gdjs.ViktoryCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['ViktoryCode'] = gdjs.ViktoryCode;

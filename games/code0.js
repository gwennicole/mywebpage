gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDPlatform_95953Objects1= [];
gdjs.Untitled_32sceneCode.GDPlatform_95953Objects2= [];
gdjs.Untitled_32sceneCode.GDPlatform_95951Objects1= [];
gdjs.Untitled_32sceneCode.GDPlatform_95951Objects2= [];
gdjs.Untitled_32sceneCode.GDPlatform_95954Objects1= [];
gdjs.Untitled_32sceneCode.GDPlatform_95954Objects2= [];
gdjs.Untitled_32sceneCode.GDHollyObjects1= [];
gdjs.Untitled_32sceneCode.GDHollyObjects2= [];
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects1= [];
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDCloudsObjects1= [];
gdjs.Untitled_32sceneCode.GDCloudsObjects2= [];
gdjs.Untitled_32sceneCode.GDFlyObjects1= [];
gdjs.Untitled_32sceneCode.GDFlyObjects2= [];
gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1= [];
gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects2= [];
gdjs.Untitled_32sceneCode.GDCoinObjects1= [];
gdjs.Untitled_32sceneCode.GDCoinObjects2= [];
gdjs.Untitled_32sceneCode.GDGraveyard_9595BackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGraveyard_9595BackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1= [];
gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects2= [];
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959Patch2Objects1= [];
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959Patch2Objects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Untitled_32sceneCode.GDCoinObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHollyObjects1Objects = Hashtable.newFrom({"Holly": gdjs.Untitled_32sceneCode.GDHollyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDZombie_95959595GirlObjects1Objects = Hashtable.newFrom({"Zombie_Girl": gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHollyObjects1Objects = Hashtable.newFrom({"Holly": gdjs.Untitled_32sceneCode.GDHollyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDZombie_95959595GirlObjects1Objects = Hashtable.newFrom({"Zombie_Girl": gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHollyObjects1Objects = Hashtable.newFrom({"Holly": gdjs.Untitled_32sceneCode.GDHollyObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDHollyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDHollyObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDHollyObjects1[k] = gdjs.Untitled_32sceneCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDHollyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHollyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDHollyObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDZombie_95959595GirlObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHollyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHollyObjects1[i].getBehavior("Health").Hit(20, true, true, null);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Untitled_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.Untitled_32sceneCode.GDHollyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCoinObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHollyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.Untitled_32sceneCode.GDHollyObjects1);
gdjs.copyArray(runtimeScene.getObjects("HollyHealthBar"), gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1[i].SetValue((( gdjs.Untitled_32sceneCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHollyObjects1[0].getBehavior("Health").Health(null)), null);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1[i].setX((( gdjs.Untitled_32sceneCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHollyObjects1[0].getPointX("")) - ((gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1[i].getWidth()) / 2) + ((( gdjs.Untitled_32sceneCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHollyObjects1[0].getWidth()) / 2));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1[i].setY((( gdjs.Untitled_32sceneCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHollyObjects1[0].getPointY("")) - (gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1[i].getHeight()) - 10);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.Untitled_32sceneCode.GDHollyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie_Girl"), gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDZombie_95959595GirlObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDHollyObjects1Objects, 300, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDHollyObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Untitled_32sceneCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHollyObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHollyObjects1[0].getPointY("")));
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.Untitled_32sceneCode.GDHollyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie_Girl"), gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Untitled_32sceneCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHollyObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHollyObjects1[0].getPointY("")));
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.Untitled_32sceneCode.GDHollyObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.Untitled_32sceneCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDHollyObjects1[0].getBehavior("Health").MaxHealth(null)));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ZombieJumpTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ZombieJumpTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ZombieJumpTimer") > gdjs.randomFloatInRange(1, 5);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Zombie_Girl"), gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ZombieJumpTimer");
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlatform_95953Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95953Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95951Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95951Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95954Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95954Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDHollyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHollyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloudsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloudsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959Patch2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959Patch2Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
gdjs.Untitled_32sceneCode.GDPlatform_95953Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95953Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95951Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95951Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95954Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform_95954Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDHollyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHollyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloudsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloudsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDZombie_9595GirlObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHollyHealthBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959Patch2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595Grass_95959Patch2Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;

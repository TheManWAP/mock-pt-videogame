scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(0, randint(2, 4)))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(0, randint(2, 4)))
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
function GiveAbilities () {
    num = 1
    if (num == 1) {
        Shot = sprites.createProjectileFromSide(assets.image`Bubble`, 50, 50)
    }
}
function Abilities () {
	
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    GiveAbilities()
})
let Shot: Sprite = null
let num = 0
num = 0
let Player_1 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
let Player_2 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
game.setDialogTextColor(12)
game.setDialogFrame(assets.image`DiaBackground`)
game.showLongText("In the future, Earth is a barren and inverted wasteland, with monsters which were once the villagers of this peaceful world roaming the grounds. But there is hope.", DialogLayout.Full)
game.showLongText("Two humans turned animal, Amy and Tannur, awaken from their cryogenic slumber, disoriented and shocked at their sight. Amy, remembering that there is a failsafe to save the planet, rushes to save the day.", DialogLayout.Full)
game.showLongText("And Tannur follows close behind, in trust and in confidence that they can save Earth. This is...", DialogLayout.Full)
game.setDialogTextColor(9)
game.showLongText("Reclaimed Realms: Aquatic Assault", DialogLayout.Center)
tiles.setCurrentTilemap(tilemap`Spawn`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`AmyIdle`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`TannurIdle`, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 70)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 70)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
if (num != 1) {
    Shot = sprites.createProjectileFromSide(assets.image`NULL`, 50, 50)
    if (controller.player2.isPressed(ControllerButton.A) == true) {
    	
    }
}

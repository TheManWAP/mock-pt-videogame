scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(0, randint(2, 4)))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(0, randint(2, 4)))
})
function Enemy5Death () {
	
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (num == 1) {
        Shot = sprites.createProjectileFromSprite(assets.image`Bubble`, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vx, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy)
    }
})
function YouWin () {
    if (monsterskilled == limit) {
        game.showLongText("Once the monsters were taken care of, Amy, and Tannur in tow, finally find the cure to save the Earth. Although, they'll never be the same.", DialogLayout.Center)
        game.setGameOverEffect(true, effects.confetti)
    }
}
function GiveAbilities () {
    game.showLongText("Abilities now unlocked! Amy now has a melee ability (Coral Club), and Tannur has a ranged ability (Bubble Blast).", DialogLayout.Full)
    game.showLongText("Using the (A) button, they can use their newfound powers to find the cure and save the Eeath!", DialogLayout.Full)
    num = 1
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (num == 1) {
        Shot2 = sprites.createProjectileFromSprite(assets.image`CoralClub`, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vx, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy)
    }
})
function FinalFight (battle: number) {
    limit = game.askForNumber("How many monsters do you wish to battle?")
    enemies = [
    sprites.create(assets.image`ENEMY1`, SpriteKind.Enemy),
    sprites.create(assets.image`ENEMY2`, SpriteKind.Enemy),
    sprites.create(assets.image`ENEMY3`, SpriteKind.Enemy),
    sprites.create(assets.image`ENEMY4`, SpriteKind.Enemy),
    sprites.create(assets.image`ENEMY5`, SpriteKind.Enemy)
    ]
    monsterskilled = 0
    for (let index = 0; index < limit + 10; index++) {
        tiles.placeOnTile(enemies[randint(0, 4)], tiles.getTileLocation(0, randint(5, 6)))
    }
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`TannurIdle`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 70)
    Player_2 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    monsterskilled += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`FinalLevel`)
    GiveAbilities()
    FinalFight(limit)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Shot)
    sprites.destroy(Shot2)
    sprites.destroy(null)
})
let Player_2: Sprite = null
let enemies: Sprite[] = []
let Shot2: Sprite = null
let limit = 0
let monsterskilled = 0
let Shot: Sprite = null
let Player_1: Sprite = null
let num = 0
mp.setPlayerIndicatorsVisible(true)
num = 0
Player_1 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
game.setDialogTextColor(12)
game.setDialogFrame(assets.image`DiaBackground`)
game.showLongText("In the future, Earth is a barren and inverted wasteland, with monsters which were once the villagers of this peaceful world roaming the grounds. But there is hope.", DialogLayout.Full)
game.showLongText("Two humans turned animal, Amy and Tannur, awaken from their cryogenic slumber, disoriented and shocked at their sight. Amy, remembering that there is a failsafe to save the planet, rushes to save the day.", DialogLayout.Full)
game.showLongText("And Tannur follows close behind, in trust and in confidence that they can save Earth. This is...", DialogLayout.Full)
game.setDialogTextColor(9)
game.showLongText("Reclaimed Realms: Aquatic Assault", DialogLayout.Center)
tiles.setCurrentTilemap(tilemap`Spawn`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`AmyIdle`, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 70)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)

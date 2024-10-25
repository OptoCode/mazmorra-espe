namespace SpriteKind {
    export const ataque1 = SpriteKind.create()
    export const ataque3 = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const ataque4 = SpriteKind.create()
    export const enemy5 = SpriteKind.create()
    export const ataque5 = SpriteKind.create()
    export const enemy6 = SpriteKind.create()
    export const final = SpriteKind.create()
}
namespace StatusBarKind {
    export const healt3 = StatusBarKind.create()
    export const healt4 = StatusBarKind.create()
    export const healt5 = StatusBarKind.create()
    export const healt6 = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f f 2 f e f . . . 
        . f f f 2 f e e 2 2 f f f . . . 
        . f e 2 f f e e 2 f e e f . . . 
        f f e f f e e e f e e e f f . . 
        f f e e e e e e e e e e f d f . 
        . . f e e e e e e e e f f b f . 
        . . e f f f f f f f f 4 f b f . 
        . . 4 f 2 2 2 2 2 e d d f c f . 
        . . e f f f f f f e e 4 f f . . 
        . . . f f f . . . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . f f f f f 2 2 f f f f f . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f 2 f 2 e f . . . 
        . f f f 2 2 e e 2 2 f f f . . . 
        f f e f 2 f e e f 2 f e f f . . 
        f e e f f e e e e f e e e f . . 
        . f e e e e e e e e e e f . . . 
        . . f e e e e e e e e f . . . . 
        . e 4 f f f f f f f f 4 e . . . 
        . 4 d f 2 2 2 2 2 2 f d 4 . . . 
        . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e f 2 f f f 2 f 2 e f . . . 
        . f f f 2 2 e e f 2 f f f . . . 
        . f e e f 2 e e f f 2 e f . . . 
        . f e e e f e e e f f e f f . . 
        . f e e e e e e e e e e f f . . 
        . f f e e e e e e e e f . . . . 
        . f 4 f f f f f f f f e . . . . 
        . f d d e 2 2 2 2 2 f 4 . . . . 
        . f 4 e e f f f f f f e . . . . 
        . . . . . . . . f f f . . . . . 
        `],
    200,
    false
    )
})
statusbars.onZero(StatusBarKind.healt6, function (status) {
    sprites.destroy(mySprite6)
    game.gameOver(true)
})
function initStatusBar () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 10
    statusbar.attachToSprite(mySprite)
}
statusbars.onZero(StatusBarKind.healt5, function (status) {
    sprites.destroy(mySprite5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y - mySprite2.y < 40 && mySprite.y - mySprite2.y > -40) {
        if (mySprite.x < mySprite2.x) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 50, 0)
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -50, 0)
        }
    } else {
        if (mySprite.y < mySprite2.y) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 50)
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -50)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ataque3, function (sprite, otherSprite) {
    statusbar.value += -50
    sprites.destroy(otherSprite)
})
statusbars.onZero(StatusBarKind.healt3, function (status) {
    sprites.destroy(mySprite3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    statusbar.value += -10
    pause(1000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy5, function (sprite, otherSprite) {
    statusbar5.value += -4
    sprites.destroy(sprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    false
    )
})
function inilmage2 () {
    inilmage = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 5 5 5 b . . . . . 
        . . . . . b b 5 5 5 b b . . . . 
        . . b b b b 5 5 5 1 1 b b b b . 
        . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b d d 5 5 5 5 5 d d b . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c 5 5 d d b d d 5 5 c . . 
        . . . c 5 d d c c c d d 5 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ......555...555.....
        .....5fff5.5ff25....
        ....5fffff5ffd225...
        ....5fffffffdd225...
        ....5ffffffdd2225...
        .....5ffffdd2225....
        ......55fdd2225.....
        .......5222225......
        ........52225.......
        .........525........
        ..........5.........
        ....................
        ....................
        ....................
        ....................
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(mySprite2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy6, function (sprite, otherSprite) {
    statusbar.value += -30
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ataque5, function (sprite, otherSprite) {
    statusbar.value += -30
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy6, function (sprite, otherSprite) {
    statusbar6.value += -2
    sprites.destroy(sprite)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    false
    )
})
statusbars.onZero(StatusBarKind.healt4, function (status) {
    sprites.destroy(mySprite4)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy3, function (sprite, otherSprite) {
    statusbar4.value += -4
    sprites.destroy(sprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . f f e 4 1 f d d f 1 4 e f . . 
        f d f f e 4 d d d d 4 e f e . . 
        f b f e f 2 2 2 2 e d d 4 e . . 
        f b f 4 f 2 2 2 2 e d d e . . . 
        f c f . f 4 4 5 5 f e e . . . . 
        . f f . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f f . 
        . . e f e 4 d d d d 4 e f f d f 
        . . e 4 d d e 2 2 2 2 f e f b f 
        . . . e d d e 2 2 2 2 f 4 f b f 
        . . . . e e f 5 5 4 4 f . f c f 
        . . . . . f f f f f f f . f f . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    statusbar3.value += -4
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ataque4, function (sprite, otherSprite) {
    statusbar.value += -30
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy5, function (sprite, otherSprite) {
    statusbar.value += -10
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 5 5 5 b . . . . . 
        . . . . . b b 5 5 5 b b . . . . 
        . . b b b b 5 5 5 1 1 b b b b . 
        . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b d d 5 5 5 5 5 d d b . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c 5 5 d d b d d 5 5 c . . 
        . . . c 5 d d c c c d d 5 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        sprites.destroy(otherSprite)
    }
    statusbar.value += 50
    if (otherSprite.image.equals(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ......555...555.....
        .....5fff5.5ff25....
        ....5fffff5ffd225...
        ....5fffffffdd225...
        ....5ffffffdd2225...
        .....5ffffdd2225....
        ......55fdd2225.....
        .......5222225......
        ........52225.......
        .........525........
        ..........5.........
        ....................
        ....................
        ....................
        ....................
        `)) {
        sprites.destroy(otherSprite)
        statusbar.value += 20
    }
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        sprites.destroy(otherSprite)
    }
    statusbar.value += 50
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.final, function (sprite, otherSprite) {
    statusbar.value += -30
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy3, function (sprite, otherSprite) {
    statusbar.value += -10
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ataque1, function (sprite, otherSprite) {
    statusbar.value += -30
    sprites.destroy(otherSprite)
})
function initHero () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    mySprite.setPosition(20, 121)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar2.value += -5
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
    pause(1000)
})
let final: Sprite = null
let ataque5: Sprite = null
let ataque4: Sprite = null
let ataque3: Sprite = null
let ataque1: Sprite = null
let projectile: Sprite = null
let inilmage: Image[] = []
let power_up: Sprite = null
let statusbar6: StatusBarSprite = null
let mySprite6: Sprite = null
let statusbar: StatusBarSprite = null
let statusbar5: StatusBarSprite = null
let mySprite5: Sprite = null
let statusbar4: StatusBarSprite = null
let mySprite4: Sprite = null
let statusbar3: StatusBarSprite = null
let mySprite3: Sprite = null
let statusbar2: StatusBarSprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
initHero()
initStatusBar()
mySprite2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite2.follow(mySprite, 20)
statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar2.attachToSprite(mySprite2)
statusbar2.value = 5000
mySprite2.setPosition(500, 160)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c c c c . . 
    . . . . . . c 5 5 5 5 5 5 c . . 
    . . c c . c 5 c c 5 5 5 5 5 c . 
    . b 2 2 c 5 c 2 2 c 5 5 5 5 5 c 
    . f f 2 c 5 c 2 f f 5 5 5 c 5 c 
    . f f 2 c 5 c 2 f f 5 c c 5 c c 
    . b 2 2 3 c 3 2 2 c c 5 5 5 c c 
    . . b 2 2 3 2 2 c c 5 5 5 5 5 c 
    . c c 2 2 2 2 2 2 c c 5 5 5 5 c 
    c 2 2 5 2 2 2 2 5 2 2 c 5 5 c . 
    b 2 5 b 5 5 5 5 5 5 2 c 5 5 . . 
    c 5 2 2 b 5 b 2 2 2 2 c 2 2 5 . 
    c 2 2 2 c 5 c 2 2 2 c 2 c 2 c . 
    c 2 2 2 2 c 2 2 2 2 c 2 c 2 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.enemy2)
statusbar3 = statusbars.create(20, 4, StatusBarKind.healt3)
statusbar3.attachToSprite(mySprite3)
statusbar3.value = 5000
mySprite3.setPosition(1200, 140)
mySprite4 = sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.enemy3)
statusbar4 = statusbars.create(20, 4, StatusBarKind.healt4)
mySprite4.setPosition(820, 140)
statusbar4.attachToSprite(mySprite4)
statusbar4.value = 5000
mySprite5 = sprites.create(img`
    . . . . . . e 2 2 2 2 2 . . . . 
    . . . . . e 2 2 f 2 2 2 2 . . . 
    . . . . . e 2 2 2 2 2 2 2 e . . 
    . . . . . e 2 2 2 2 2 2 2 e . . 
    . . . . . f f e 2 2 2 2 2 e . . 
    . . . . . f f f f e 2 2 e e . . 
    . . . . . f f f b 2 e f e e e . 
    . . . . . f f f f 2 f 1 f f e e 
    . . . . . . . . e e f 1 f f e e 
    . . . . . . . e e 2 2 1 1 1 1 b 
    . . . . . . . e 2 2 2 2 e f f . 
    . . . . d d f f 2 2 1 1 f f . . 
    . . . . d d f f e e 1 1 f f . . 
    . . . . . . . . . f f f f . . . 
    . . . . . . . . f f f f f f . . 
    . . . . . . . f f f f f f f . . 
    `, SpriteKind.enemy5)
statusbar5 = statusbars.create(20, 4, StatusBarKind.healt5)
mySprite5.setPosition(1550, 120)
statusbar5.attachToSprite(mySprite5)
statusbar.value = 5000
mySprite6 = sprites.create(img`
    ...2........222.2..2....
    ....2..22222222.......2.
    .2...225555552..22.2....
    ....25555555552222..2...
    .2.255555555555222....2.
    ..2555551ff555552..22...
    ..255f55ff55555552222...
    ..255555555f55555222..2.
    2.25555f5555f555552.....
    ..2ffff55555fff5552.22..
    ..2555f5555fffff55f222.2
    2..2555fffffffff5ff22...
    .2..222fffff555ffff2....
    ....2ffffff2555ffff222.2
    .2.2ffffff25552ffff22...
    ...2fffff25552fffff2..2.
    2.22fffff2552ffffff22...
    ..22ffffff2255fffff222..
    ...2ffffff5555ffffffff22
    .2..2fffff555ffffffffff2
    2...222ff255fffffffff22.
    ...22fff22fffff2ff222...
    .2.222222f555ff222...2..
    ........22222222........
    `, SpriteKind.enemy6)
statusbar6 = statusbars.create(40, 4, StatusBarKind.healt6)
mySprite6.setPosition(1850, 120)
statusbar6.attachToSprite(mySprite6)
statusbar6.value = 5000
music.play(music.stringPlayable("E D G F B A C5 B ", 55), music.PlaybackMode.LoopingInBackground)
inilmage2()
for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
    power_up = sprites.create(inilmage[randint(0, 2)], SpriteKind.Food)
    tiles.placeOnTile(power_up, value)
}
forever(function () {
    if (mySprite2.x - mySprite.x < 40 && mySprite.x - mySprite2.x < 40) {
        ataque1 = sprites.create(img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c b b b b b b c f b c b c c . 
            c c 2 b b b 2 b c b b c b b c . 
            c b b b b b b b b b c c c b c . 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . . 
            f f f f f f f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . . 
            . . f 2 2 2 b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ataque1)
        ataque1.setPosition(mySprite2.x, mySprite2.y)
        ataque1.follow(mySprite, 60)
        pause(1000)
        sprites.destroy(ataque1, effects.spray, 500)
    }
    pause(500)
})
forever(function () {
    if (mySprite3.x - mySprite.x < 80 && mySprite.x - mySprite3.x < 80) {
        ataque3 = sprites.create(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.ataque3)
        ataque3.setPosition(mySprite3.x, mySprite3.y)
        ataque3.follow(mySprite, 70)
        pause(1000)
        sprites.destroy(ataque3)
    }
    pause(200)
})
forever(function () {
    if (mySprite4.x - mySprite.x < 60 && mySprite.x - mySprite4.x < 60) {
        ataque4 = sprites.create(img`
            . . . . . 2 8 8 8 8 8 8 8 . . . 
            . . . . 2 8 . c c c c c 2 2 . 2 
            . . . 2 8 8 c 1 1 1 1 1 c 2 2 . 
            . . 2 8 . . c c c c c 1 c 2 2 2 
            . . 8 2 . c 2 2 2 2 1 c c . . 2 
            . 8 2 . c 1 2 2 2 2 2 1 c . . . 
            2 8 . c 2 2 1 2 2 2 2 2 1 c . 2 
            8 . c 2 2 2 2 1 2 2 2 2 1 c c c 
            2 c 2 2 2 2 2 1 c c 2 2 1 2 2 c 
            8 c 2 2 2 2 2 1 2 2 f 2 1 f 2 f 
            f 2 2 2 2 f 2 1 c 2 f 2 d f 2 f 
            f 2 2 2 2 2 2 1 2 f f 2 f f 2 f 
            8 f 2 2 2 2 1 2 2 2 2 c b c f f 
            2 8 f f f d 2 2 2 2 c d d c 2 . 
            . 2 8 2 8 f f f f f c c c 2 2 . 
            . 8 2 8 2 8 8 8 8 8 8 8 2 2 . . 
            `, SpriteKind.ataque4)
        ataque4.setPosition(mySprite4.x, mySprite4.y)
        ataque4.follow(mySprite, 75)
        pause(1000)
        sprites.destroy(ataque4)
    }
    pause(500)
})
forever(function () {
    if (mySprite5.x - mySprite.x < 70 && mySprite.x - mySprite5.x < 70) {
        ataque5 = sprites.create(img`
            .........5555...........
            .......55111155.........
            ......5511111155555.....
            ......51111111fff115....
            ......511111111f11115...
            ...555f11111111f11115...
            ..51111111111111111155..
            .511111111111111111f115.
            .5111f111111111111111115
            5ff1f1111111111111111115
            5ffff11111111111111111f5
            5ff2f11111f11111ff111f5.
            .522ff111ffff11ffffff55.
            .5522fffff2fffffff255...
            ...555fff222fffff55.....
            ......55555555555.......
            `, SpriteKind.ataque5)
        ataque5.setPosition(mySprite5.x, mySprite5.y)
        ataque5.follow(mySprite, 85)
        pause(1000)
        sprites.destroy(ataque5)
    }
    pause(500)
})
forever(function () {
    if (mySprite6.x - mySprite.x < 70 && mySprite.x - mySprite6.x < 70) {
        final = sprites.create(img`
            . 2 . . . . . . . . . . . 2 . . 
            . 2 2 . . . . . . . . . 2 2 . . 
            . 2 f 2 . . 2 2 . . 2 2 f 2 . . 
            . . 2 5 2 2 5 5 2 2 f f 2 2 . . 
            . . 2 f 5 f 2 2 f 5 5 f 2 2 . . 
            . . 2 5 5 2 2 2 2 5 2 2 5 2 . . 
            . 2 5 5 5 5 2 2 5 2 2 2 f 2 2 . 
            . 2 f 5 2 2 5 5 5 2 2 2 5 5 2 . 
            . 2 2 5 2 2 5 5 5 5 5 f 5 5 2 . 
            . . 2 f f 5 5 5 f 5 5 f f f 2 . 
            . 2 5 5 f 5 5 5 f f f 5 5 2 . . 
            . 2 5 5 f f 5 f f f f 5 5 2 . . 
            . 2 2 f f 2 f f f 2 f f f 2 . . 
            . . 2 5 2 2 2 2 2 2 2 2 2 . . . 
            . 2 5 2 . . 2 2 2 . . . 2 2 . . 
            . 2 2 . . . . . . . . . . 2 2 . 
            `, SpriteKind.final)
        final.setPosition(mySprite6.x, mySprite6.y)
        final.follow(mySprite, 100)
        pause(1500)
        sprites.destroy(final)
    }
    pause(200)
})

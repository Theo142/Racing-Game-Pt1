class Form
{
    constructor()
        {

        }
    display()
{
    var title = createElement("h2")
    title.html("Car Racing Game")
    title.position(550,125)

    var input = createInput("Enter Your Name")
    input.position(550,210)

    var button = createButton("Play")
    button.position(550,300)

    button.mousePressed(function()
    {
        input.hide()
        button.hide()
        var name = input.value()
        playerCount = playerCount + 1

        player.update(name)
        player.updateCount(playerCount)

        var greeting = createElement("h3")
        greeting.html("Hello "+ name)
        greeting.position(550,150)
    }
    )
}
}
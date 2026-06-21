using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class GameController : ControllerBase
{
    [HttpGet]
    public Game GetGame()
    {
        Game game = new Game();
        game.Title = "TestTitle";
        game.Id = 1;
        game.Developer = "mr dev";
        game.ReleaseDate = new DateOnly(2005, 9, 25);

        return game;
    }
}
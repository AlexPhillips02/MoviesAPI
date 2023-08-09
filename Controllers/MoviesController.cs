using Microsoft.AspNetCore.Mvc;

namespace reactnet.Controllers;

[ApiController]
[Route("[controller]")]
public class MoviesController : ControllerBase
{
    private readonly ILogger<MoviesController> _logger;

    public MoviesController(ILogger<MoviesController> logger)
    {
        _logger = logger;
        APIClient.IntitaliseClient();
    }

    [HttpGet]
    public async Task<Movie[]> GetAsync(string title)
    {
        /*
        return Enumerable.Range(1, 5).Select(index => new Movies
        {
            Name = ("Movie " + index),
            ReleaseDate = DateTime.Now.AddDays(index),
            Rating = Random.Shared.Next(0, 100)
        })
        .ToArray();

        */

        Movie[]? movie = await MovieProcessor.LoadMovie(title);
        return movie;
    }
}

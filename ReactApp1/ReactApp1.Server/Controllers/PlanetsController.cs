using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Data;
using ReactApp1.Server.Domain;
using ReactApp1.Server.ViewModel;

namespace ReactApp1.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class PlanetsController : ControllerBase
    {
        private readonly PlanetContext _planetContext;

        public PlanetsController(PlanetContext planetContext)
        {
            _planetContext = planetContext;
        }

        [HttpGet]
        public IActionResult SchoolIndex()
        {
            var result = _planetContext.Planets.Select(x => new PlanetsListViewModel
            {
                PlanetsId = x.PlanetsId,
                Name = x.Name,
                Description = x.Description,
                Type = x.Type,
                Mass = x.Mass
            });

            return Ok(result);
        }

        [HttpPost]
        public IActionResult Create([FromBody] PlanetsCreateViewModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Name))
            {
                return BadRequest("Name is required");
            }

            var planet = new Planets
            {
                PlanetsId = Guid.NewGuid(),
                Name = model.Name,
                Description = model.Description,
                Type = model.Type,
                Mass = model.Mass
            };

            _planetContext.Planets.Add(planet);
            _planetContext.SaveChanges();

            return Ok(new
            {
                planetsId = planet.PlanetsId,
                name = planet.Name,
                description = planet.Description,
                type = planet.Type,
                mass = planet.Mass
            });
        }
    }
}
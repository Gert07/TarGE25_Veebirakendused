using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Data;
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
    }
}

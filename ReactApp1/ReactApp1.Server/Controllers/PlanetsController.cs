using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class PlanetsController : ControllerBase
    {
        public IActionResult SchoolIndex()
        {
            return Ok();
        }
    }
}

using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers
{
    public class PlanetsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

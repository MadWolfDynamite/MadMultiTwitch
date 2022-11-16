using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using MultiTwitchMVC.Client.Models;

namespace MultiTwitchMVC.Client.Controllers
{
    public class StreamController : Controller
    {
        public IActionResult Index()
        {
            var url = Request.GetDisplayUrl().Split('/', StringSplitOptions.RemoveEmptyEntries);
            ViewData["DomainUrl"] = url[1].Split(":")[0];

            return View(new StreamViewModel());
        }

        [HttpPost]
        public IActionResult Index([FromForm] StreamDataFormModel data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var url = Request.GetDisplayUrl().Split('/', StringSplitOptions.RemoveEmptyEntries);
            ViewData["DomainUrl"] = url[1].Split(":")[0];

            ViewData["ParsedList"] = data.StreamList;

            return View(new StreamViewModel(data.StreamList.Split(',', StringSplitOptions.RemoveEmptyEntries), data.ShowChat, data.DarkMode));
        }
    }
}

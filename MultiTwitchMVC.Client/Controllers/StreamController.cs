using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using MultiTwitchMVC.Client.Models;

namespace MultiTwitchMVC.Client.Controllers
{
    public class StreamController : Controller
    {
        public IActionResult Index()
        {
            ViewData["DomainUrl"] = GetDomainUrl(Request.GetDisplayUrl());
            return View(new StreamViewModel());
        }

        [HttpPost]
        public IActionResult Index([FromForm] StreamDataFormModel data)
        {
            if (!ModelState.IsValid) { return BadRequest(ModelState); };

            ViewData["DomainUrl"] = GetDomainUrl(Request.GetDisplayUrl());
            ViewData["ParsedList"] = data.Channels;

            return View(new StreamViewModel(data.Channels.Split(',', StringSplitOptions.RemoveEmptyEntries), data.ShowChat, data.IsDarkMode));
        }

        public IActionResult Chat(StreamChatViewModel model)
        {
            if (!ModelState.IsValid) { return BadRequest(model); }

            ViewData["DomainUrl"] = GetDomainUrl(Request.GetDisplayUrl());
            return PartialView("_StreamChat", model);
        }

        private static string GetDomainUrl(string url)
        {
            var parsedUrl = url.Split('/', StringSplitOptions.RemoveEmptyEntries);
            return parsedUrl[1].Split(":")[0];
        }
    }
}

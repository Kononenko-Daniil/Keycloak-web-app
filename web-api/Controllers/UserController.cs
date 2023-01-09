using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace web_api.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        [Authorize]
        [HttpGet("me")]
        public string GetMe()
        {
            string userName = HttpContext.User.Identity.Name;   

            return userName;
        }
    }
}

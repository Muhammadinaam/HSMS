
namespace HSMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Blocks"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BlocksRow))]
    public class BlocksController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Blocks/BlocksIndex.cshtml");
        }
    }
}
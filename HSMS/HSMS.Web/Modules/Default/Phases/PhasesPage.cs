
namespace HSMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Phases"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PhasesRow))]
    public class PhasesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Phases/PhasesIndex.cshtml");
        }
    }
}
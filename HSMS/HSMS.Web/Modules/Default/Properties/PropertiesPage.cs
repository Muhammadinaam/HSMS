
namespace HSMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Properties"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PropertiesRow))]
    public class PropertiesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Properties/PropertiesIndex.cshtml");
        }
    }
}
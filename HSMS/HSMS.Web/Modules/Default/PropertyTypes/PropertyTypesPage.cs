
namespace HSMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/PropertyTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PropertyTypesRow))]
    public class PropertyTypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/PropertyTypes/PropertyTypesIndex.cshtml");
        }
    }
}
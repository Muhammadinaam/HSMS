
namespace HSMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Projects"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProjectsRow))]
    public class ProjectsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Projects/ProjectsIndex.cshtml");
        }
    }
}
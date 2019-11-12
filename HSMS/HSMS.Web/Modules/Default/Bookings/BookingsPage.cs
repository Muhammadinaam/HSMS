
namespace HSMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Bookings"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BookingsRow))]
    public class BookingsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Bookings/BookingsIndex.cshtml");
        }
    }
}
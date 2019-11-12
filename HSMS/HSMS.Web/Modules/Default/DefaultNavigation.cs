using Serenity.Navigation;
using MyPages = HSMS.Default.Pages;

[assembly: NavigationMenu(1000, "Setup", icon: "fa-briefcase")]
[assembly: NavigationLink(1000, "Setup/Projects", typeof(MyPages.ProjectsController), icon: "fa-plus")]
[assembly: NavigationLink(1001, "Setup/Phases", typeof(MyPages.PhasesController), icon: "fa-gear")]
[assembly: NavigationLink(1002, "Setup/Blocks", typeof(MyPages.BlocksController), icon: "fa-cubes")]
[assembly: NavigationLink(1003, "Setup/Property Types", typeof(MyPages.PropertyTypesController), icon: "fa-list")]
[assembly: NavigationLink(1004, "Properties", typeof(MyPages.PropertiesController), icon: "fa-home")]
[assembly: NavigationLink(1005, "Customers & Agents", typeof(MyPages.PersonsController), icon: "fa-user")]
[assembly: NavigationLink(1006, "Bookings", typeof(MyPages.BookingsController), icon: "fa-book")]
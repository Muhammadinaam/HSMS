using Serenity.Navigation;
using Administration = HSMS.Administration.Pages;

[assembly: NavigationMenu(500, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(500, "Administration/Exceptions Log", url: "~/errorlog.axd", permission: HSMS.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(500, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(500, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(500, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(500, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
using Microsoft.AspNetCore.Components;
using Treasure.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Treasure.Components.Pages
{
    public partial class Login : ComponentBase
    {
        public string Status { get; set; } = "";
        public string StatusMessage { get; set; } = "";

        [Inject]
        public AppShellContext AppShell { get; set; }

        [Inject]
        public NavigationManager Nav { get; set; }

        [Inject]
        public DatabaseContext DB { get; set; }

        public Models.User Model { get; set; } = new Models.User();

        private async Task LoginUser()
        {
            if (string.IsNullOrWhiteSpace(Model.Username) || string.IsNullOrWhiteSpace(Model.Password))
            {
                Status = "danger";
                StatusMessage = "Username/Password cannot be blank or only spaces!";
            }
            else
            {
                var users = await DB.Users();
                var targetUser = users.FirstOrDefault(row => row.Username == Model.Username && row.Password == Model.Password);

                if (targetUser != null)
                {
                    Status = "success";
                    StatusMessage = "Login successful!";
                    AppShell.CurrentUser = targetUser;
                    AppShell.IsUserLoggedIn = true;
                    AppShell.SetSessionUser(targetUser);
                    await InvokeAsync(StateHasChanged);
                    Nav.NavigateTo("/");
                }
                else
                {
                    Status = "danger";
                    StatusMessage = "Invalid Username or Password!";
                }
            }
            await InvokeAsync(StateHasChanged);
        }
    }
}

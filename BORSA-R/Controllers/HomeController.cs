    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.Web.Mvc;
    using Microsoft.AspNet.SignalR;
    using Microsoft.AspNet.SignalR.Hubs;
    using System.Threading.Tasks;
    using System.Net.Http;
    using System.Net.Http.Headers;

namespace SİGNAL_R.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }

    [HubName("borsaHub")]
    public class BorsaHub : Hub
    {
   
        public async Task GetBorsaVerileri()
        {
            while (true)
            {
              
                var borsaVerileri = await ApiHelper.GetBorsaVerileri();

                Clients.All.updateBorsaVerileri(borsaVerileri.Split('~'));

      
            }
        }
        
    }

    public static class ApiHelper
    {
        public static async Task<string> GetBorsaVerileri()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://www.sabah.com.tr/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await client.GetAsync("finans/pages/canliborsa_data?yil=%202023%20&ay=%202%20&gun=%203%20&saat=%2018%20&dakika=%2010%20&saniye=%200%20&rnd=8487746261");

                if (response.IsSuccessStatusCode)
                {
                    var veriler = await response.Content.ReadAsStringAsync();   
                    return veriler;
                }
                else
                {
                    throw new Exception("Maalesef borsa verilerini alamadım.");
                }
            }
        }
    }
}
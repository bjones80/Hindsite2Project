using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Hindsite2Project.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Hindsite2Project.Models;

namespace Hindsite2Project
{
    public class Program
    {
        public static void Main(string[] args)
        { 
            BuildWebHost(args).Run();
            //var host = BuildWebHost(args);

            //using (var scope = host.Services.CreateScope())
            //{
            //    var services = scope.ServiceProvider;

            //    try
            //    {
            //        //var context = services.GetRequiredService<Hindsite2ProjectContext>();
            //        //DbInitializer.Initialize(context);
            //    }
            //    catch (Exception ex)
            //    {
            //        //var logger = services.GetRequiredService<ILogger<Program>>();
            //        //logger.LogError(ex, "An error occurrred seeding the DB.");
            //    }
            //}
        }

    public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            .Build();

        //public static IWebHost BuildWebHost(string[] args) =>
        //    WebHost.CreateDefaultBuilder(args)
        //        .UseStartup<Startup>()
        //        .Build();
    }
}

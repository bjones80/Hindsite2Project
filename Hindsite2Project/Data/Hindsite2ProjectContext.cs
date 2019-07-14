using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Hindsite2Project.Model;

namespace Hindsite2Project.Models
{
    public class Hindsite2ProjectContext : DbContext
    {
        public Hindsite2ProjectContext (DbContextOptions<Hindsite2ProjectContext> options)
            : base(options)
        {
        }

        public DbSet<Hindsite2Project.Model.Client> Client { get; set; }

        public DbSet<Hindsite2Project.Model.ClientPassword> ClientPassword { get; set; }

        public DbSet<Hindsite2Project.Model.Employee> Employee { get; set; }

        public DbSet<Hindsite2Project.Model.EmployeePassword> EmployeePassword { get; set; }

        public DbSet<Hindsite2Project.Model.GpsInfo> GpsInfo { get; set; }
    }
}

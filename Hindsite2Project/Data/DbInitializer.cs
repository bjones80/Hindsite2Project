using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hindsite2Project.Models;
using Hindsite2Project.Data;
using Hindsite2Project.Model;

namespace Hindsite2Project.Data
{
    public class DbInitializer
    {
        public static void Initialize(Hindsite2ProjectContext context)
        {
            if (context.Client.Any())
            {
                return;
            }

            //Clients
            var clients = new Client[]
            {
                new Client
                {
                    CompanyName = "Jonah Energy",
                    Location = "Jonah Energy LLC, 83 Luman Road Pinedale, WY 82941, Boulder, WY 82923"
                },
                new Client
                {
                    CompanyName = "Linn Energy",
                    Location = "E Oklahoma Ave, Ulysses, KS 67880"
                }
            };

            foreach (Client c in clients)
            {
                context.Client.Add(c);
            }
            context.SaveChanges();

            // Client Password Table 
            var clientPasswords = new ClientPassword[]
            {
                new ClientPassword
                {
                    ClientUserName = "UserName",
                    ClientPasswords = "Password"
                }
            };

            foreach (ClientPassword p in clientPasswords)
            {
                context.ClientPassword.Add(p);
            }
            context.SaveChanges();

            // Employee's 
            var employees = new Employee[]
            {
                new Employee
                {
                    FirstName = "David",
                    LastName = "Jones"
                },
                new Employee
                {
                    FirstName = "Nolan",
                    LastName = "Jones"
                }
            };

            foreach (Employee e in employees)
            {
                context.Employee.Add(e);
            }
            context.SaveChanges();

            // Employee Passwords Table
            var employeePasswords = new EmployeePassword[]
            {
                new EmployeePassword
                {
                    EmployeeUserName = "UserName",
                    EmployeePasswords = "Password"
                }
            };

            foreach (EmployeePassword ep in employeePasswords)
            {
                context.EmployeePassword.Add(ep);
            }
            context.SaveChanges();

            // Gps Info table
            var gpsInfos = new GpsInfo[]
            {
                new GpsInfo
                {
                    GpsFile = "file address",
                    Locations = "SHB 101",
                    Date = DateTime.Parse("2019-07-10")
                }
            };

            foreach (GpsInfo g in gpsInfos)
            {
                context.GpsInfo.Add(g);
            }
            context.SaveChanges();



        }
    }
}

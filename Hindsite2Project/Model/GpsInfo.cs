using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hindsite2Project.Model
{
    public class GpsInfo
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
        public string GpsFile { get; set; }
        public string Locations { get; set; }
        public DateTime Date { get; set; }
    }
}

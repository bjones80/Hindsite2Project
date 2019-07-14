using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hindsite2Project.Model
{
    public class ClientPassword
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
        public string ClientUserName { get; set; }
        public string ClientPasswords { get; set; }
    }
}

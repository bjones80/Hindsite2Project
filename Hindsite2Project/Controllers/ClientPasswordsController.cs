using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hindsite2Project.Model;
using Hindsite2Project.Models;

namespace Hindsite2Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientPasswordsController : ControllerBase
    {
        private readonly Hindsite2ProjectContext _context;

        public ClientPasswordsController(Hindsite2ProjectContext context)
        {
            _context = context;
        }

        // GET: api/ClientPasswords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientPassword>>> GetClientPassword()
        {
            return await _context.ClientPassword.ToListAsync();
        }

        // GET: api/ClientPasswords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClientPassword>> GetClientPassword(int id)
        {
            var clientPassword = await _context.ClientPassword.FindAsync(id);

            if (clientPassword == null)
            {
                return NotFound();
            }

            return clientPassword;
        }

        // PUT: api/ClientPasswords/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClientPassword(int id, ClientPassword clientPassword)
        {
            if (id != clientPassword.Id)
            {
                return BadRequest();
            }

            _context.Entry(clientPassword).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientPasswordExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ClientPasswords
        [HttpPost]
        public async Task<ActionResult<ClientPassword>> PostClientPassword(ClientPassword clientPassword)
        {
            _context.ClientPassword.Add(clientPassword);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClientPassword", new { id = clientPassword.Id }, clientPassword);
        }

        // DELETE: api/ClientPasswords/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClientPassword>> DeleteClientPassword(int id)
        {
            var clientPassword = await _context.ClientPassword.FindAsync(id);
            if (clientPassword == null)
            {
                return NotFound();
            }

            _context.ClientPassword.Remove(clientPassword);
            await _context.SaveChangesAsync();

            return clientPassword;
        }

        private bool ClientPasswordExists(int id)
        {
            return _context.ClientPassword.Any(e => e.Id == id);
        }
    }
}

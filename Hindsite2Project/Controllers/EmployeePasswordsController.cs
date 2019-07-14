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
    public class EmployeePasswordsController : ControllerBase
    {
        private readonly Hindsite2ProjectContext _context;

        public EmployeePasswordsController(Hindsite2ProjectContext context)
        {
            _context = context;
        }

        // GET: api/EmployeePasswords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeePassword>>> GetEmployeePassword()
        {
            return await _context.EmployeePassword.ToListAsync();
        }

        // GET: api/EmployeePasswords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeePassword>> GetEmployeePassword(int id)
        {
            var employeePassword = await _context.EmployeePassword.FindAsync(id);

            if (employeePassword == null)
            {
                return NotFound();
            }

            return employeePassword;
        }

        // PUT: api/EmployeePasswords/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeePassword(int id, EmployeePassword employeePassword)
        {
            if (id != employeePassword.Id)
            {
                return BadRequest();
            }

            _context.Entry(employeePassword).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeePasswordExists(id))
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

        // POST: api/EmployeePasswords
        [HttpPost]
        public async Task<ActionResult<EmployeePassword>> PostEmployeePassword(EmployeePassword employeePassword)
        {
            _context.EmployeePassword.Add(employeePassword);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeePassword", new { id = employeePassword.Id }, employeePassword);
        }

        // DELETE: api/EmployeePasswords/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmployeePassword>> DeleteEmployeePassword(int id)
        {
            var employeePassword = await _context.EmployeePassword.FindAsync(id);
            if (employeePassword == null)
            {
                return NotFound();
            }

            _context.EmployeePassword.Remove(employeePassword);
            await _context.SaveChangesAsync();

            return employeePassword;
        }

        private bool EmployeePasswordExists(int id)
        {
            return _context.EmployeePassword.Any(e => e.Id == id);
        }
    }
}

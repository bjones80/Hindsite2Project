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
    public class GpsInfoesController : ControllerBase
    {
        private readonly Hindsite2ProjectContext _context;

        public GpsInfoesController(Hindsite2ProjectContext context)
        {
            _context = context;
        }

        // GET: api/GpsInfoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GpsInfo>>> GetGpsInfo()
        {
            return await _context.GpsInfo.ToListAsync();
        }

        // GET: api/GpsInfoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GpsInfo>> GetGpsInfo(int id)
        {
            var gpsInfo = await _context.GpsInfo.FindAsync(id);

            if (gpsInfo == null)
            {
                return NotFound();
            }

            return gpsInfo;
        }

        // PUT: api/GpsInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGpsInfo(int id, GpsInfo gpsInfo)
        {
            if (id != gpsInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(gpsInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GpsInfoExists(id))
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

        // POST: api/GpsInfoes
        [HttpPost]
        public async Task<ActionResult<GpsInfo>> PostGpsInfo(GpsInfo gpsInfo)
        {
            _context.GpsInfo.Add(gpsInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGpsInfo", new { id = gpsInfo.Id }, gpsInfo);
        }

        // DELETE: api/GpsInfoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GpsInfo>> DeleteGpsInfo(int id)
        {
            var gpsInfo = await _context.GpsInfo.FindAsync(id);
            if (gpsInfo == null)
            {
                return NotFound();
            }

            _context.GpsInfo.Remove(gpsInfo);
            await _context.SaveChangesAsync();

            return gpsInfo;
        }

        private bool GpsInfoExists(int id)
        {
            return _context.GpsInfo.Any(e => e.Id == id);
        }
    }
}

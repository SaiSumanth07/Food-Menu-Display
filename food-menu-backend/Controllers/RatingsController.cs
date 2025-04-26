
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodMenuAppBackend.Data;
using FoodMenuAppBackend.Models;
using System.Security.Claims;

namespace FoodMenuAppBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class RatingsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RatingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("{menuItemId}")]
        public async Task<IActionResult> RateItem(int menuItemId, RatingDto dto)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

            var item = await _context.MenuItems.FindAsync(menuItemId);
            if (item == null) return NotFound("Menu item not found");

            var rating = new Rating
            {
                UserId = userId,
                MenuItemId = menuItemId,
                Stars = dto.Stars,
                Comment = dto.Comment
            };

            _context.Ratings.Add(rating);
            await _context.SaveChangesAsync();
            return Ok(rating);
        }
    }

    public class RatingDto
    {
        public int Stars { get; set; }
        public string Comment { get; set; }
    }
}

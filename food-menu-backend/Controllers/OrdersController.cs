
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
    public class OrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            return await _context.Orders
                .Include(o => o.Items)
                .ThenInclude(i => i.MenuItem)
                .Where(o => o.UserId == userId)
                .ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Order>> PlaceOrder(List<OrderItemDto> items)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var order = new Order
            {
                UserId = userId,
                Items = new List<OrderItem>()
            };

            foreach (var item in items)
            {
                var menuItem = await _context.MenuItems.FindAsync(item.MenuItemId);
                if (menuItem == null)
                    return BadRequest($"Menu item with ID {item.MenuItemId} not found.");

                order.Items.Add(new OrderItem
                {
                    MenuItemId = item.MenuItemId,
                    Quantity = item.Quantity,
                    Price = menuItem.Price
                });
            }

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Ok(order);
        }
    }

    public class OrderItemDto
    {
        public int MenuItemId { get; set; }
        public int Quantity { get; set; }
    }
}

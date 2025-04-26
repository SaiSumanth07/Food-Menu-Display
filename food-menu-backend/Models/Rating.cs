
using System.ComponentModel.DataAnnotations;

namespace FoodMenuAppBackend.Models
{
    public class Rating
    {
        public int Id { get; set; }

        [Range(1, 5)]
        public int Stars { get; set; }

        public string Comment { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int MenuItemId { get; set; }
        public MenuItem MenuItem { get; set; }
    }
}

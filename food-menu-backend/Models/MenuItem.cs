using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodMenuAppBackend.Models
{

    public class MenuItem
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public double Rating { get; set; }
        public int Reviews { get; set; }
        public int Orders { get; set; }
        public string Badge { get; set; } = string.Empty;
        public bool IsVeg { get; set; }
        public bool IsFavorite { get; set; }
        public int SpiceLevel { get; set; }
        public string Allergens { get; set; } = string.Empty;

        // Relationship
    }
}

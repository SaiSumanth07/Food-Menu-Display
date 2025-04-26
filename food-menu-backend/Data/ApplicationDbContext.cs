using Microsoft.EntityFrameworkCore;
using FoodMenuAppBackend.Models;

namespace FoodMenuAppBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Rating> Ratings { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Fix decimal warning for OrderItem.Price
            modelBuilder.Entity<OrderItem>()
                .Property(o => o.Price)
                .HasPrecision(18, 2);

            // Optional: Add relationships/constraints if needed later
            // modelBuilder.Entity<OrderItem>()
            //     .HasOne(oi => oi.Order)
            //     .WithMany(o => o.OrderItems)
            //     .HasForeignKey(oi => oi.OrderId);
        }
    }
}

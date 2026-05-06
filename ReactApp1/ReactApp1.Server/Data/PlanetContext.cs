using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Domain;

namespace ReactApp1.Server.Data
{
    public class PlanetContext : DbContext
    {
        public PlanetContext(DbContextOptions<PlanetContext> options) : base(options)
        { }

        public DbSet<Planets> Planets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Planets>().ToTable("Planets");
        }
    }
}

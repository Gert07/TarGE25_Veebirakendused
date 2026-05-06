using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace ReactApp1.Server.Data
{
    public class PlanetContextFactory : IDesignTimeDbContextFactory<PlanetContext>
    {
        public PlanetContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<PlanetContext>();
            optionsBuilder.UseSqlServer("Server=localhost;Database=PlanetsDB;Trusted_Connection=True;TrustServerCertificate=True;");

            return new PlanetContext(optionsBuilder.Options);
        }
    }
}
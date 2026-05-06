
using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Data;

namespace ReactApp1.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            //see tehakse selleks, et saaks kasutada andmebaasi konteksti, mis on defineeritud PlanetContext klassis. See võimaldab meil suhelda andmebaasiga ja teha päringuid Planets tabelile.
            builder.Services.AddDbContext<PlanetContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            var app = builder.Build();

            app.UseDefaultFiles();
            app.MapStaticAssets();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();

            Console.WriteLine(builder.Configuration.GetConnectionString("DefaultConnection"));
        }
    }
}

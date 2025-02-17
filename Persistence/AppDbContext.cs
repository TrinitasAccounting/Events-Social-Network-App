using System;
using System.Diagnostics;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

//We are deriving from DbContext which is a class that we get from Microsoft.EntityFrameworkCore package
public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    // public DbSet<Activity> Activities { get; set; }
    public DbSet<Activitty> Activities { get; set; }

}

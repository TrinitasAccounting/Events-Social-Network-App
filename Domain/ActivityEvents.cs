using System;

namespace Domain;

public class Activitty
{
    public string Id { get; set; } = Guid.NewGuid().ToString();    //This doesn't allow on the database to create the id for us, we are specifying that we are going to create it ourselves each time
    public required string Title { get; set; }
    public DateTime Date { get; set; }
    public required string Description { get; set; }
    public required string Category { get; set; }
    public bool IsCancelled { get; set; }

    // Location Props
    public required string City { get; set; }
    public required string Venue { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}


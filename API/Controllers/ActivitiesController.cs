using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

//Route:  api/activities
public class ActivitiesController(AppDbContext context) : BaseApiController
{
    //The GetActivities() function is just one we created and named what we wanted I think
    [HttpGet]
    public async Task<ActionResult<List<Activitty>>> GetActivities()
    {
        return await context.Activities.ToListAsync();
    }


    //ActionResult gives us access to various server responses such as not found , BadRequest, and etc
    [HttpGet("{id}")]
    public async Task<ActionResult<Activitty>> GetActivityDetail(string id)
    {
        //FindAsync() will go search our database and store the queried line inside of our var activity
        var activity = await context.Activities.FindAsync(id);

        if (activity == null) return NotFound();

        return activity;
    }
}

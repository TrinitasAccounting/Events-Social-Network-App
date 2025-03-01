using System;
using Application.Activities.Commands;
using Application.Activities.DTOs;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Differencing;


namespace API.Controllers;

//Route:  api/activities
public class ActivitiesController : BaseApiController
{
    //The GetActivities() function is just one we created and named what we wanted I think
    [HttpGet]
    public async Task<ActionResult<List<Activitty>>> GetActivities()
    {
        // return await context.Activities.ToListAsync();     //Thist was the first and simple way that we started with before adding in the mediator. Also AppDbContext was passed in as a prop when using the first strategies
        return await Mediator.Send(new GetActivityList.Query());
    }


    //ActionResult gives us access to various server responses such as not found , BadRequest, and etc
    [HttpGet("{id}")]
    public async Task<ActionResult<Activitty>> GetActivityDetail(string id)
    {
        //FindAsync() will go search our database and store the queried line inside of our var activity___
        // var activity = await context.Activities.FindAsync(id);

        // if (activity == null) return NotFound();

        // return activity;
        //___________________________


        return HandleResult(await Mediator.Send(new GetActivityDetails.Query { Id = id }));

        //This was moved to the BaseApiController, but we could simply write this type of logic for each Http Request. And would not need the HandleResult portion above______
        // if (!result.IsSuccess && result.Code == 404) return NotFound();

        // if (result.IsSuccess && result.Value != null) return result.Value;

        // return BadRequest(result.Error);


    }


    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(CreateActivityDto activityDto)
    {
        return await Mediator.Send(new CreateActivity.Command { ActivityDto = activityDto });
    }


    [HttpPut]
    public async Task<ActionResult> EditActivity(Activitty activity)
    {
        await Mediator.Send(new EditActivity.Command { Activity = activity });

        return NoContent();
    }


    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeleteActivity.Command { Id = id });

        return Ok();
    }



}

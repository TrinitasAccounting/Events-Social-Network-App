using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest
    {
        public required Activitty Activity { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken)
                ?? throw new Exception("Cannot find activity");

            //The question marks do the same null check
            // if (activity == null) throw new Exception("Cannot find activity");

            //Could go through and do this for all fields in the object,  instead of using the automapper
            // activity.Title = request.Activity.Title;


            //This effectively says, any property that matches inside of the passed in Activity (from command), if it matches a property in the var activity we found in our database, then it will update that property
            mapper.Map(request.Activity, activity);



            await context.SaveChangesAsync(cancellationToken);


        }
    }
}

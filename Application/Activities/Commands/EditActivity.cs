using System;
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

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken)
                ?? throw new Exception("Cannot find activity");

            //The question marks do the same null check
            // if (activity == null) throw new Exception("Cannot find activity");

            //Could go through and do this for all fields in the object
            activity.Title = request.Activity.Title;

            await context.SaveChangesAsync(cancellationToken);


        }
    }
}

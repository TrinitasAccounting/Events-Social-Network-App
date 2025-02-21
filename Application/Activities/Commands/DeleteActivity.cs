using System;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken)
                ?? throw new Exception("Cannot find activity");

            //This is just tracking the removal in memory
            context.Remove(activity);

            //This actually saves the memory to our database
            await context.SaveChangesAsync(cancellationToken);


        }
    }
}

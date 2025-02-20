using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
    public class Query : IRequest<Activitty>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activitty>
    {
        public async Task<Activitty> Handle(Query request, CancellationToken cancellationToken)
        {
            //So the FindAsync() must be the fetch row by Id function in .Net
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken);

            if (activity == null) throw new Exception("Activity not Found");

            return activity;
        }
    }
}

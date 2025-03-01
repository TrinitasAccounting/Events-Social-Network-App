using System;
using System.Diagnostics;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
    //THe IRequest<Activity> is just telling it what kind of thing it is going to return, in this case it is going to return an Activitty
    public class Query : IRequest<Result<Activitty>>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Result<Activitty>>
    {
        public async Task<Result<Activitty>> Handle(Query request, CancellationToken cancellationToken)
        {
            //So the FindAsync() must be the fetch row by Id function in .Net
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken);

            if (activity == null) return Result<Activitty>.Failure("Activity not found", 404);

            return Result<Activitty>.Success(activity);
        }
    }
}

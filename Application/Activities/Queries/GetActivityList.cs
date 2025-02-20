using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<List<Activitty>> { }

    //As the business logic gets more elaborate, we can use this handler to filter or adjsut data before passing to the front end
    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activitty>>
    {
        public async Task<List<Activitty>> Handle(Query request, CancellationToken cancellationToken)
        {
            //Activities comes from our AppDbContext as we have a getter and setter there 
            return await context.Activities.ToListAsync(cancellationToken);
        }
    }
}

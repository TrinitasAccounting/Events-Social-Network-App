using System;
using Application.Activities.DTOs;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activitty, Activitty>();
        CreateMap<CreateActivityDto, Activitty>();
    }
}

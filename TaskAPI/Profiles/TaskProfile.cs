using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MovieFlix.Controllers;
using TaskAPI.Dtos;
using TaskAPI.Models;

namespace TaskAPI.Profilers
{
    public class TaskProfile : Profile
    {

        public TaskProfile()
        {
            CreateMap<CreateTasksDto, TaskModel>();
            CreateMap<UpdateTasksDto, TaskModel>();
           
        }
    }
}

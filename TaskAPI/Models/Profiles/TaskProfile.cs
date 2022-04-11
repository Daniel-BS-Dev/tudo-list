using AutoMapper;
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TaskAPI.Data;
using TaskAPI.Dtos;
using TaskAPI.Models;
using TaskAPI.Profilers;
namespace TaskAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {

        private TaskModelContext _context;
        private IMapper _mapper;
        public TaskController(TaskModelContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost]
        public IActionResult addTask([FromBody] CreateTasksDto taskDTO)
        {
            TaskModel task = _mapper.Map<TaskModel>(taskDTO);

            _context.Tasks.Add(task);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetMovieById), new { Id = task.Id }, task);
        }


        [HttpGet]
        public IActionResult GetMovies()
        {
           
            return Ok(_context.Tasks);
        }

        [HttpGet("{id}")]
        public IActionResult GetMovieById(int id)
        {

            TaskModel task = VerifyIsNull(id);
            if (task == null)
            {
                return NotFound();
              
            }

            return Ok(task);

        }

        [HttpPut("{id}")]
        public IActionResult UpdateMovie(int id, [FromBody] UpdateTasksDto taskDto)
        {
            TaskModel task = VerifyIsNull(id);
            if (task == null)
            {
                return NotFound();
            }

            _mapper.Map(taskDto, task);
            _context.SaveChanges();
            return NoContent();

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
             TaskModel task = VerifyIsNull(id);
            if (task == null)
            {
                return NotFound(task);
            }
            _context.Remove(task);
            _context.SaveChanges();
            return NoContent();
        }


        public TaskModel VerifyIsNull(int id)
        {
            TaskModel task = _context.Tasks.FirstOrDefault(m => m.Id == id);
            return task;
        }
    }
}
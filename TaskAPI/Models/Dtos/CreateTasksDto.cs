using System;
using System.ComponentModel.DataAnnotations;

namespace TaskAPI.Profilers
{
    public class CreateTasksDto
    {
        public string Title { get; set; }

        [Required]
        public string Text { get; set; }
        public bool IsMark { get; set; }
        public DateTime Date { get; set; }
    }
}
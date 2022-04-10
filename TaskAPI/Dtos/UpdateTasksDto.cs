using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskAPI.Dtos
{
    public class UpdateTasksDto
    {
        public string Title { get; set; }

        [Required]
        public string Text { get; set; }
        public bool IsMark { get; set; }
        public DateTime Date { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskAPI.Models
{
    public class TaskModel
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string Title { get; set; }

        [Required]
        public string Text { get; set; }
        public bool IsMark { get; set; }
        public DateTime Date { get; set; }
    }
}

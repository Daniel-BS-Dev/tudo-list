using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaskAPI.Models;

namespace TaskAPI.Data
{
    public class TaskModelContext : DbContext

    {
        public TaskModelContext(DbContextOptions<TaskModelContext> opt) : base(opt)
        {

        }

        public DbSet<TaskModel> Tasks { get; set; }

    }
}

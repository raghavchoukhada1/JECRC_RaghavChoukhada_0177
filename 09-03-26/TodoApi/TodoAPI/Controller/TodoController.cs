using Microsoft.AspNetCore.Mvc;
using TodoAPI.Data;
using TodoAPI.Models;

namespace TodoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TodoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAllTodos()
        {
            var todos = _context.Todos.ToList();
            return Ok(todos);
        }

        [HttpGet("{id}")]
        public IActionResult GetTodo(int id)
        {
            var todo = _context.Todos.Find(id);

            if (todo == null)
                return NotFound();

            return Ok(todo);
        }

        [HttpPost]
        public IActionResult AddTodo(Todo todo)
        {
            _context.Todos.Add(todo);
            _context.SaveChanges();

            return Ok(todo);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTodo(int id, Todo updatedTodo)
        {
            var todo = _context.Todos.Find(id);

            if (todo == null)
                return NotFound();

            todo.Title = updatedTodo.Title ?? todo.Title;
            todo.IsCompleted = updatedTodo.IsCompleted;
            todo.Priority = updatedTodo.Priority ?? todo.Priority;

            _context.SaveChanges();

            return Ok(todo);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTodo(int id)
        {
            var todo = _context.Todos.Find(id);

            if (todo == null)
                return NotFound();

            _context.Todos.Remove(todo);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
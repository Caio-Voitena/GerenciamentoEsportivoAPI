using GerenciamentoEsportivoAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace GerenciamentoEsportivoAPI.Endpoints.Time
{
    [ApiController]
    [Route("api/times")]

    public class PutTime : ControllerBase
    {
        private readonly TimeService _timeService;

        public PutTime(TimeService timeService)
        {
            _timeService = timeService;
        }

        [HttpPut("{id}")]

        public IActionResult UpdateTime(int id, [FromBody] GerenciamentoEsportivoAPI.Models.Time time)
        {
            if (time == null || time.Nome == null)
                return BadRequest("Dados inválidos.");
            time.Id = id;
            _timeService.Update(time);
            return Ok("Time atualizado com sucesso.");
        }
    }
}
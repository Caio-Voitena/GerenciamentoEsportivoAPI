using GerenciamentoEsportivoAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace GerenciamentoEsportivoAPI.Endpoints.Jogador
{
    [ApiController]
    [Route("api/jogadores")]

    public class PutJogador : ControllerBase
    {
        private readonly JogadorService _jogadorService;

        public PutJogador(JogadorService jogadorService)
        {
            _jogadorService = jogadorService;
        }

        [HttpPut("{id}")]

        public IActionResult UpdateTime(int id, [FromBody] GerenciamentoEsportivoAPI.Models.Jogador jogador)
        {
            if (jogador == null || jogador.Nome == null)
                return BadRequest("Dados inválidos.");
            jogador.Id = id;
            _jogadorService.Update(jogador);
            return Ok("Jogador atualizado com sucesso.");
        }
    }
}
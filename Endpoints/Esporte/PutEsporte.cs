using GerenciamentoEsportivoAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace GerenciamentoEsportivoAPI.Endpoints.Esporte
{
    [ApiController]
    [Route("api/esportes")]

    public class PutEsporte : ControllerBase
    {
        private readonly EsporteService _esporteService;

        public PutEsporte(EsporteService esporteService)
        {
            _esporteService = esporteService;
        }

        [HttpPut("{id}")]

        public IActionResult UpdateEsporte(int id, [FromBody] GerenciamentoEsportivoAPI.Models.Esporte esporte)
        {
            if (esporte == null || esporte.Nome == null)
                return BadRequest("Dados inválidos.");
            esporte.Id = id;
            _esporteService.Update(esporte);
            return Ok("Esporte atualizado com sucesso.");
        }
    }
}
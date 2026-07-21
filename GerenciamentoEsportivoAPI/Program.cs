using GerenciamentoEsportivoAPI.Repositories.Interfaces;
using GerenciamentoEsportivoAPI.Repositories.Implementations;
using GerenciamentoEsportivoAPI.Services;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Adiciona serviços ao contêiner.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Gerenciamento Esportivo API",
        Version = "v1",
        Description = "API para gerenciamento de esportes, times e jogadores.",
        Contact = new OpenApiContact
        {
            Name = "Seu Nome",
            Email = "seuemail@example.com"
        }
    });
});

// Registro dos repositórios
builder.Services.AddSingleton<IEsporteRepository, EsporteRepository>();
builder.Services.AddSingleton<ITimeRepository, TimeRepository>();
builder.Services.AddSingleton<IJogadorRepository, JogadorRepository>();

// Registro dos serviços
builder.Services.AddScoped<EsporteService>();
builder.Services.AddScoped<TimeService>();
builder.Services.AddScoped<JogadorService>();

var app = builder.Build();

// Configura o pipeline HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Gerenciamento Esportivo API v1");
        c.RoutePrefix = "swagger"; // Agora o Swagger estará disponível em /swagger
    });
}

// Remova ou comente se quiser evitar warnings ao usar HTTP
// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

# GerenciamentoEsportivoAPI - V2

API REST desenvolvida em ASP.NET Core 8 / C# para gerenciamento esportivo (esportes, times e jogadores), com documentação via Swagger e frontend em HTML/CSS/JS.

Todos os dados são armazenados em arquivos `.txt`, sem uso de banco de dados.

## 🚀 Funcionalidades

- 📋 CRUD completo de:
  - Esportes
  - Times
  - Jogadores
- 🧾 Armazenamento em arquivos de texto (`.txt`) na pasta `/Data`
- 🧪 Documentação interativa com **Swagger**
- 🌐 **Frontend web moderno** Para gerencamento visual

## 🔧 Tecnologias

- ASP.NET Core 8.0
- C#
- Swagger / Swashbuckle
- HTML, CSS, JavaScript

## 🧠 Endpoints

| Entidade | Endpoint Base    |
| -------- | ---------------- |
| Esporte  | `/api/esportes`  |
| Time     | `/api/times`     |
| Jogador  | `/api/jogadores` |

### Exemplos

- `GET /api/times` - Lista todos os times
- `POST /api/esportes` - Cria um novo esporte
- `PUT /api/jogadores/3` - Atualiza o jogador com ID 3

## ▶️ Executando o Projeto

### Pré-requisitos

- [.NET 8 SDK ou superior](https://dotnet.microsoft.com/download)
- Navegador Web (para o Frontend)

### Passos

```bash
# Restaura as dependências
dotnet restore

# Compila o projeto
dotnet build

# Executa a API
dotnet run
```

Abra o navegador em:  
👉 [http://localhost:5000/swagger](http://localhost:5000/swagger) (ou a porta configurada) para testar via Swagger.

## 🌐 Frontend Web

O Frontend esta localizado em `frontend/public/`.
Você pode abrir diretamente o arquivo `frontend/public/index.html` no navegador para acessar a interface visual.

- **index.html**: Página inicial com exibição para esporte, times e jogadores.

> **Atenção:**
> Para o funcionamento completo, a API deve estar rodando em `http://localhost:5000` (ou ajuste as URLs no JS do frontend conforme necessário).

## 📂 Arquivos gerados

Ao executar a aplicação, serão criados os seguintes arquivos automaticamente (caso não existam):

- `Data/esportes.txt`
- `Data/times.txt`
- `Data/jogadores.txt`

Esses arquivos armazenam os dados persistidos em formato `CSV` simples (`;` como separador).

> **Nota:** os arquivos `.txt` da pasta `Data/` estão no `.gitignore` e não são versionados no Git, pois são gerados/atualizados em tempo de execução.

## 📄 Documentação do projeto

O relatório/documentação acadêmica do trabalho está disponível em `docs/`:

- `docs/CaioVoitena_JoaoAlexandre_GerenciamentoEsportivo.docx`
- `docs/CaioVoitena_JoaoAlexandre_GerenciamentoEsportivo.pdf`

## ✅ Contribuição

Sinta-se à vontade para contribuir criando issues ou pull requests.

---

**Autor:** Caio Voitena Roupa, Silvio Gabriel Felix de Souza e João Alexandre Vilaruel dos Santos
📅 Projeto desenvolvido em 2025

const API = "http://localhost:5000/api";

async function carregarEsportes() {
    try {
        const res = await fetch(`${API}/esportes`);
        const esportes = await res.json();
        const lista = document.getElementById('lista-esportes');
        const selectEsporteTime = document.getElementById('esporte-id-time');
        const selectEsporteJogador = document.getElementById('esporte-id-jogador');

        lista.innerHTML = '';
        selectEsporteTime.innerHTML = '';
        selectEsporteJogador.innerHTML = '';

        esportes.forEach(e => {
            const li = document.createElement('li');
            li.textContent = e.nome;

            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.className = 'btn-excluir';
            btnExcluir.onclick = () => deletarEsporte(e.id);
            li.appendChild(btnExcluir);

            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.className = 'btn-editar';
            btnEditar.onclick = () => editarEsporte(e);
            li.appendChild(btnEditar);

            lista.appendChild(li);

            const opt1 = document.createElement('option');
            opt1.value = e.id;
            opt1.textContent = e.nome;
            selectEsporteTime.appendChild(opt1);

            const opt2 = document.createElement('option');
            opt2.value = e.id;
            opt2.textContent = e.nome;
            selectEsporteJogador.appendChild(opt2);
        });
    } catch (e) {
        alert('Erro ao carregar esportes!');
    }
}

async function adicionarEsporte(evt) {
    evt.preventDefault();
    const nome = document.getElementById('nome-esporte').value;
    try {
        await fetch(`${API}/esportes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome })
        });
        document.getElementById('form-esporte').reset();
        await carregarEsportes();
        await carregarTimes();
        await carregarJogadores();
    } catch (e) {
        alert('Erro ao adicionar esporte!');
    }
}

async function deletarEsporte(id) {
    try {
        await fetch(`${API}/esportes/${id}`, { method: 'DELETE' });
        await carregarEsportes();
        await carregarTimes();
        await carregarJogadores();
    } catch (e) {
        alert('Erro ao excluir esporte!');
    }
}

async function editarEsporte(esporte) {
    const novoNome = prompt('Digite o novo nome do esporte:', esporte.nome);
    if (novoNome) {
        try {
            await fetch(`${API}/esportes/${esporte.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: novoNome })
            });
            await carregarEsportes();
        } catch (e) {
            alert('Erro ao editar esporte!');
        }
    }
}

async function carregarTimes() {
    try {
        const res = await fetch(`${API}/times`);
        const times = await res.json();
        const lista = document.getElementById('lista-times');
        const selectTimeJogador = document.getElementById('time-id-jogador');

        lista.innerHTML = '';
        selectTimeJogador.innerHTML = '';

        times.forEach(t => {
            const li = document.createElement('li');
            li.textContent = `${t.nome} (${t.anoFundacao}) - Títulos: ${t.qtdTitulos} [${t.titulos?.join(', ') || ''}]`;

            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.className = 'btn-excluir';
            btnExcluir.onclick = () => deletarTime(t.id);
            li.appendChild(btnExcluir);

            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.className = 'btn-editar';
            btnEditar.onclick = () => editarTime(t);
            li.appendChild(btnEditar);

            lista.appendChild(li);

            const opt = document.createElement('option');
            opt.value = t.id;
            opt.textContent = t.nome;
            selectTimeJogador.appendChild(opt);
        });
    } catch (e) {
        alert('Erro ao carregar times!');
    }
}

async function adicionarTime(evt) {
    evt.preventDefault();
    const nome = document.getElementById('nome-time').value;
    const anoFundacao = parseInt(document.getElementById('ano-fundacao').value);
    const qtdTitulos = parseInt(document.getElementById('qtd-titulos').value);
    const titulos = document.getElementById('titulos').value.split(',').map(t => t.trim()).filter(t => t);
    const esporteId = parseInt(document.getElementById('esporte-id-time').value);

    try {
        await fetch(`${API}/times`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, anoFundacao, qtdTitulos, titulos, esporteId })
        });
        document.getElementById('form-time').reset();
        await carregarTimes();
        await carregarJogadores();
    } catch (e) {
        alert('Erro ao adicionar time!');
    }
}

async function deletarTime(id) {
    try {
        await fetch(`${API}/times/${id}`, { method: 'DELETE' });
        await carregarTimes();
        await carregarJogadores();
    } catch (e) {
        alert('Erro ao excluir time!');
    }
}

async function editarTime(time) {
    const novoNome = prompt('Digite o novo nome do time:', time.nome);
    const novoAnoFundacao = prompt('Digite o novo ano de fundação:', time.anoFundacao);
    const novaQtdTitulos = prompt('Digite a nova quantidade de títulos:', time.qtdTitulos);
    const novosTitulos = prompt('Digite os novos títulos separados por vírgula:', time.titulos.join(', '));

    if (novoNome && novoAnoFundacao && novaQtdTitulos && novosTitulos) {
        try {
            await fetch(`${API}/times/${time.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: novoNome,
                    anoFundacao: parseInt(novoAnoFundacao),
                    qtdTitulos: parseInt(novaQtdTitulos),
                    titulos: novosTitulos.split(',').map(t => t.trim())
                })
            });
            await carregarTimes();
        } catch (e) {
            alert('Erro ao editar time!');
        }
    }
}

async function carregarJogadores() {
    try {
        const res = await fetch(`${API}/jogadores`);
        const jogadores = await res.json();
        const lista = document.getElementById('lista-jogadores');
        lista.innerHTML = '';

        jogadores.forEach(j => {
            const li = document.createElement('li');
            li.textContent = `${j.nome} (${j.idade} anos) - Camisa ${j.camisa} - Salário R$${j.salario.toFixed(2)} - Time: ${j.timeId} - Esporte: ${j.esporteId}`;

            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.className = 'btn-excluir';
            btnExcluir.onclick = () => deletarJogador(j.id);
            li.appendChild(btnExcluir);

            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.className = 'btn-editar';
            btnEditar.onclick = () => editarJogador(j);
            li.appendChild(btnEditar);

            lista.appendChild(li);
        });
    } catch (e) {
        alert('Erro ao carregar jogadores!');
    }
}

async function adicionarJogador(evt) {
    evt.preventDefault();
    const nome = document.getElementById('nome-jogador').value;
    const idade = parseInt(document.getElementById('idade-jogador').value);
    const camisa = parseInt(document.getElementById('camisa-jogador').value);
    const salario = parseFloat(document.getElementById('salario-jogador').value);
    const timeId = parseInt(document.getElementById('time-id-jogador').value);
    const esporteId = parseInt(document.getElementById('esporte-id-jogador').value);

    try {
        await fetch(`${API}/jogadores`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, idade, camisa, salario, timeId, esporteId })
        });
        document.getElementById('form-jogador').reset();
        await carregarJogadores();
    } catch (e) {
        alert('Erro ao adicionar jogador!');
    }
}

async function deletarJogador(id) {
    try {
        await fetch(`${API}/jogadores/${id}`, { method: 'DELETE' });
        await carregarJogadores();
    } catch (e) {
        alert('Erro ao excluir jogador!');
    }
}

async function editarJogador(jogador) {
    const novoNome = prompt('Digite o novo nome do jogador:', jogador.nome);
    const novaIdade = prompt('Digite a nova idade do jogador:', jogador.idade);
    const novaCamisa = prompt('Digite o novo número da camisa:', jogador.camisa);
    const novoSalario = prompt('Digite o novo salário:', jogador.salario);
    const novoTimeId = prompt('Digite o novo ID do time:', jogador.timeId);
    const novoEsporteId = prompt('Digite o novo ID do esporte:', jogador.esporteId);

    if (novoNome && novaIdade && novaCamisa && novoSalario && novoTimeId && novoEsporteId) {
        try {
            await fetch(`${API}/jogadores/${jogador.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: novoNome,
                    idade: parseInt(novaIdade),
                    camisa: parseInt(novaCamisa),
                    salario: parseFloat(novoSalario),
                    timeId: parseInt(novoTimeId),
                    esporteId: parseInt(novoEsporteId)
                })
            });
            await carregarJogadores();
        } catch (e) {
            alert('Erro ao editar jogador!');
        }
    }
}

document.getElementById('form-esporte').onsubmit = adicionarEsporte;
document.getElementById('form-time').onsubmit = adicionarTime;
document.getElementById('form-jogador').onsubmit = adicionarJogador;

async function inicializar() {
    await carregarEsportes();
    await carregarTimes();
    await carregarJogadores();
}

window.onload = inicializar;
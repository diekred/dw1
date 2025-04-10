let pontosGame = { A: 0, B: 0 };
let games = { A: 0, B: 0 };
let sets = { A: 0, B: 0 };
const pontuacaoTexto = ['0', '15', '30', '40', 'A'];
let tieBreak = false;
let tieBreakPontos = { A: 0, B: 0 };

function atualizarPlacar() {
    document.getElementById("pontosA").innerText = tieBreak ? tieBreakPontos.A : pontuacaoTexto[pontosGame.A] || '0';
    document.getElementById("pontosB").innerText = tieBreak ? tieBreakPontos.B : pontuacaoTexto[pontosGame.B] || '0';
    document.getElementById("gamesA").innerText = games.A;
    document.getElementById("gamesB").innerText = games.B;
    document.getElementById("setsA").innerText = sets.A;
    document.getElementById("setsB").innerText = sets.B;
}

function adicionarPonto(jogador) {
    const adversario = jogador === 'A' ? 'B' : 'A';

    if (tieBreak) {
        tieBreakPontos[jogador]++;
        if ((tieBreakPontos[jogador] >= 7) && (tieBreakPontos[jogador] - tieBreakPontos[adversario] >= 2)) {
            vencerSet(jogador);
            tieBreak = false;
            tieBreakPontos = { A: 0, B: 0 };
        }
    } else {
        if (pontosGame[jogador] < 3) {
            pontosGame[jogador]++;
        } else if (pontosGame[jogador] === 3) {
            if (pontosGame[adversario] < 3) {
                vencerGame(jogador);
            } else if (pontosGame[adversario] === 3) {
                pontosGame[jogador] = 4;
            } else if (pontosGame[adversario] === 4) {
                pontosGame[adversario] = 3;
            }
        } else if (pontosGame[jogador] === 4) {
            vencerGame(jogador);
        }
    }

    registrarHistorico(jogador, '+1 ponto');
    atualizarPlacar();
}

function removerPonto(jogador) {
    if (tieBreak) {
        if (tieBreakPontos[jogador] > 0) tieBreakPontos[jogador]--;
    } else {
        if (pontosGame[jogador] > 0) pontosGame[jogador]--;
    }
    registrarHistorico(jogador, '-1 ponto');
    atualizarPlacar();
}

function vencerGame(jogador) {
    games[jogador]++;
    pontosGame = { A: 0, B: 0 };

    const adversario = jogador === 'A' ? 'B' : 'A';
    if (games[jogador] >= 6 && (games[jogador] - games[adversario]) >= 2) {
        vencerSet(jogador);
    } else if (games[jogador] === 6 && games[adversario] === 6) {
        tieBreak = true;
    }
}

function vencerSet(jogador) {
    sets[jogador]++;
    games = { A: 0, B: 0 };
    pontosGame = { A: 0, B: 0 };
}

function alterarSetManual(jogador, valor) {
    if (sets[jogador] + valor >= 0) {
        sets[jogador] += valor;
        registrarHistorico(jogador, `${valor > 0 ? '+' : ''}${valor} set(s)`);
        atualizarPlacar();
    }
}

function resetPlacar() {
    pontosGame = { A: 0, B: 0 };
    games = { A: 0, B: 0 };
    sets = { A: 0, B: 0 };
    tieBreak = false;
    tieBreakPontos = { A: 0, B: 0 };
    document.getElementById('historicoLista').innerHTML = '';
    atualizarPlacar();
}

function registrarHistorico(jogador, acao) {
    const tabela = document.getElementById("historicoLista");
    const linha = document.createElement("tr");
    const dataHora = new Date().toLocaleString();
    const nome = document.getElementById(`nomeTime${jogador}`).value || `Jogador ${jogador}`;
    linha.innerHTML = `<td>${dataHora}</td><td>${nome}</td><td>${acao}</td>`;
    tabela.prepend(linha);
}

document.addEventListener('DOMContentLoaded', atualizarPlacar);

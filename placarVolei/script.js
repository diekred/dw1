let pontos = { A: 0, B: 0 };
let sets = { A: 0, B: 0 };
const pontosParaVencer = 25;
const diferencaMinima = 2;

function atualizarPlacar() {
    document.getElementById("pontosA").innerText = pontos.A.toString().padStart(2, '0');
    document.getElementById("pontosB").innerText = pontos.B.toString().padStart(2, '0');
    document.getElementById("setsA").innerText = sets.A;
    document.getElementById("setsB").innerText = sets.B;
}

function alterarPontos(time, valor) {
    if (pontos[time] + valor >= 0) {
        pontos[time] += valor;
        verificarVencedorSet();
        registrarHistorico(time, valor);
        atualizarPlacar();
    }
}

function alterarSets(time, valor) {
    if (sets[time] + valor >= 0) {
        sets[time] += valor;
        registrarHistoricoSet(time, valor);
        atualizarPlacar();
    }
}

function verificarVencedorSet() {
    if ((pontos.A >= pontosParaVencer || pontos.B >= pontosParaVencer) && Math.abs(pontos.A - pontos.B) >= diferencaMinima) {
        if (pontos.A > pontos.B) {
            sets.A++;
        } else {
            sets.B++;
        }
        pontos.A = 0;
        pontos.B = 0;
    }
}

function resetPlacar() {
    pontos = { A: 0, B: 0 };
    sets = { A: 0, B: 0 };
    document.getElementById('historicoLista').innerHTML = '';
    atualizarPlacar();
}

function registrarHistorico(time, valor) {
    const tabela = document.getElementById("historicoLista");
    const linha = document.createElement("tr");
    const dataHora = new Date().toLocaleString();
    const nomeTime = document.getElementById(`nomeTime${time}`).value || `Time ${time}`;
    linha.innerHTML = `<td>${dataHora}</td><td>${nomeTime}</td><td>${valor > 0 ? '+' : ''}${valor} ponto(s)</td>`;
    tabela.prepend(linha);
}

function registrarHistoricoSet(time, valor) {
    const tabela = document.getElementById("historicoLista");
    const linha = document.createElement("tr");
    const dataHora = new Date().toLocaleString();
    const nomeTime = document.getElementById(`nomeTime${time}`).value || `Time ${time}`;
    linha.innerHTML = `<td>${dataHora}</td><td>${nomeTime}</td><td>${valor > 0 ? '+' : ''}${valor} set(s)</td>`;
    tabela.prepend(linha);
}

document.getElementById('btn-cep').addEventListener('click', function() {
    const cep = document.getElementById('cep-input').value.replace(/\D/g, '');
    const resultadoDiv = document.getElementById('resultado-cep');
    
    if (cep.length !== 8) {
        resultadoDiv.innerHTML = "<p style='color: red;'>CEP inválido. Digite 8 números.</p>";
        return;
    }

    resultadoDiv.innerHTML = "<p>Buscando...</p>";

    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then(response => {
            if (!response.ok) throw new Error('CEP não encontrado');
            return response.json();
        })
        .then(data => {
            resultadoDiv.innerHTML = `
                <p><strong>Cidade:</strong> ${data.city} - ${data.state}</p>
                <p><strong>Bairro:</strong> ${data.neighborhood || 'N/A'}</p>
                <p><strong>Rua:</strong> ${data.street || 'N/A'}</p>
            `;
        })
        .catch(err => {
            resultadoDiv.innerHTML = `<p style='color: red;'>Erro: ${err.message}</p>`;
        });
});


document.getElementById('btn-cnpj').addEventListener('click', function() {
    const cnpj = document.getElementById('cnpj-input').value.replace(/\D/g, '');
    const resultadoDiv = document.getElementById('resultado-cnpj');

    if (cnpj.length !== 14) {
        resultadoDiv.innerHTML = "<p style='color: red;'>CNPJ inválido. Digite 14 números.</p>";
        return;
    }

    resultadoDiv.innerHTML = "<p>Buscando...</p>";

    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
        .then(response => {
            if (!response.ok) throw new Error('CNPJ não encontrado');
            return response.json();
        })
        .then(data => {
            resultadoDiv.innerHTML = `
                <p><strong>Razão Social:</strong> ${data.razao_social}</p>
                <p><strong>Nome Fantasia:</strong> ${data.nome_fantasia || 'N/A'}</p>
                <p><strong>Situação Cadastral:</strong> ${data.descricao_situacao_cadastral}</p>
            `;
        })
        .catch(err => {
            resultadoDiv.innerHTML = `<p style='color: red;'>Erro: ${err.message}</p>`;
        });
});


document.getElementById('btn-ddd').addEventListener('click', function() {
    const ddd = document.getElementById('ddd-input').value.replace(/\D/g, '');
    const resultadoDiv = document.getElementById('resultado-ddd');

    if (ddd.length !== 2) {
        resultadoDiv.innerHTML = "<p style='color: red;'>DDD inválido. Digite apenas os 2 números.</p>";
        return;
    }

    resultadoDiv.innerHTML = "<p>Buscando...</p>";

    fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
        .then(response => {
            if (!response.ok) throw new Error('DDD não encontrado');
            return response.json();
        })
        .then(data => {
            resultadoDiv.innerHTML = `
                <p><strong>Estado:</strong> ${data.state}</p>
                <p><strong>Cidades atendidas:</strong> ${data.cities.slice(0, 10).join(', ')}...</p>
            `;
        })
        .catch(err => {
            resultadoDiv.innerHTML = `<p style='color: red;'>Erro: ${err.message}</p>`;
        });
});
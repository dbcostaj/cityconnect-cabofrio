// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  // 1. IDENTIFICAR HOTEL VIA URL (ex: ?hotel=paradiso)
  const urlParams = new URLSearchParams(window.location.search);
  const hotel = urlParams.get('hotel');
  if (hotel) {
    let hotelNome = '';
    if (hotel === 'paradiso') hotelNome = 'Hotel Paradiso';
    else if (hotel === 'sao francisco') hotelNome = 'Hotel São Francisco';
    else hotelNome = hotel.replace(/-/g, ' ');
    document.getElementById('nome-hotel').innerText = hotelNome;
  }

  // 2. CAPTURA OS BOTÕES DE PERFIL
  const botoes = document.querySelectorAll('[data-perfil]');
  const telaPerfis = document.getElementById('tela-perfis');
  const dashboardDiv = document.getElementById('dashboard');

  // Se já havia perfil salvo (localStorage), renderiza direto
  const perfilSalvo = localStorage.getItem('cityconnect_perfil');
  if (perfilSalvo && cidadeData[perfilSalvo]) {
    telaPerfis.classList.add('hidden');
    renderizarDashboard(perfilSalvo);
  }

  // Evento para cada botão
  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const perfil = btn.getAttribute('data-perfil');
      if (cidadeData[perfil]) {
        localStorage.setItem('cityconnect_perfil', perfil);
        telaPerfis.classList.add('hidden');
        renderizarDashboard(perfil);
      } else {
        alert('Perfil ainda em construção, em breve!');
      }
    });
  });

  // 3. FUNÇÃO QUE MONTA O DASHBOARD
  function renderizarDashboard(perfil) {
    const dados = cidadeData[perfil];
    if (!dados) return;

    // Busca clima em tempo real (opcional, usa API gratuita)
    buscarClimaCaboFrio().then(climaTexto => {
      const html = `
        <div class="card">
          <h2>${dados.titulo}</h2>
          <p><strong>Clima agora:</strong> ${climaTexto}</p>
        </div>

        <div class="card">
          <h3>🏖️ Praias recomendadas</h3>
          <ul>${dados.praias.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>

        <div class="card">
          <h3>🍽️ Restaurantes</h3>
          <ul>${dados.restaurantes.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>

        <div class="card">
          <h3>🎪 Eventos do dia</h3>
          <p>${dados.eventos}</p>
        </div>

        <div class="card">
          <h3>💡 Dicas de segurança e transporte</h3>
          <p>${dados.dicas}</p>
        </div>

        <button id="voltar-perfis" class="btn-voltar">◀ Escolher outro perfil</button>
      `;
      dashboardDiv.innerHTML = html;
      dashboardDiv.classList.remove('hidden');

      document.getElementById('voltar-perfis')?.addEventListener('click', () => {
        dashboardDiv.classList.add('hidden');
        telaPerfis.classList.remove('hidden');
        localStorage.removeItem('cityconnect_perfil');
      });
    }).catch(() => {
      // Fallback sem clima
      // ... (mesmo html sem clima)
    });
  }

  // 4. FUNÇÃO DE CLIMA (API gratuita OpenWeatherMap)
  async function buscarClimaCaboFrio() {
    // Você precisa cadastrar uma chave gratuita em openweathermap.org
    const chave = '71f9ff578a69eb136dcf5e0d2f85509c';  // Substitua depois
    const cidade = 'Cabo Frio,BR';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${chave}`;
    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();
      if (dados.main) {
        return `${dados.main.temp}°C, ${dados.weather[0].description}`;
      } else {
        return 'não disponível agora';
      }
    } catch (erro) {
      console.warn('Erro ao buscar clima:', erro);
      return '28°C, sol (estimado)';
    }
  }
});

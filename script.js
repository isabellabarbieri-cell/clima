
const botaoBuscar = document.getElementById("buscar");
const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const CLIMA_URL = "https://api.open-meteo.com/v1/forecast";
botaoBuscar.addEventListener("click", BuscarClima);
function BuscarClima() {
  console.log("O botão foi clicado!");

  
  const campoCidade = document.getElementById("cidade");

  const cidade = campoCidade.value.trim();

  console.log("Cidade digitada:", cidade);


if (cidade === "") {
  alert("Digite o nome de uma cidade.");
  return;
}

const urlBusca =
  `${GEO_URL}?name=${encodeURIComponent(cidade)}` +
  `&count=1&language=pt&format=json`;

fetch(urlBusca)
  .then(resposta => resposta.json())
  .then(dadosCidade => {
    const { latitude, longitude } = dadosCidade.results[0];

    // 2) Usa a latitude e a longitude para consultar o clima
    const urlClima =
      `${CLIMA_URL}?latitude=${latitude}` +
      `&longitude=${longitude}` +
      `&current=temperature_2m,relative_humidity_2m` +
      `,wind_speed_10m,weather_code`;

    return fetch(urlClima);
  })
  .then(resposta => resposta.json())
  .then(dadosClima => {
    console.log(dadosClima);

const temperatura = dados.temperatura;
const umidade = dados.umidade;
const vento = dados.vento;


  });
}
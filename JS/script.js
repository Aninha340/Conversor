async function converter() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const resultado = document.getElementById("resultado");

  if (!amount || amount <= 0) {
    resultado.textContent = "⚠️ Por favor, insira um valor válido.";
    return;
  }

  const apiKey = "f649210f0b3d72aae09658d1"; // Sua chave da API
  const url = `https://v6.exchangerate-api.com/v6/ ${apiKey}/pair/${from}/${to}/${amount}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result === "success") {
      const convertido = data.conversion_result.toFixed(2);
      resultado.textContent = `✅ ${amount} ${from} = ${convertido} ${to}`;
    } else {
      resultado.textContent = "❌ Erro ao obter a taxa de câmbio.";
    }
  } catch (error) {
    console.error(error);
    resultado.textContent = "🌐 Erro na conexão. Verifique sua internet.";
  }
}
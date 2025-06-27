
async function enviarMensagem() {
  const msg = document.getElementById("mensagem").value;
  const personagem = document.getElementById("personagem").value;
  const respostaDiv = document.getElementById("resposta");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer SUA_API_KEY_AQUI"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${personagem}: ${msg}` }]
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Erro ao responder.";
  respostaDiv.innerText = reply;
}

function login() {
  alert("Login com Google será integrado em breve!");
}

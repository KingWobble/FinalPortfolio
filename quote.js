fetch("https://zenquotes.io/api/random")
  .then(res => res.json())
  .then(data => {
    const quote = `"${data[0].q}" — ${data[0].a}`;
    document.getElementById("quote").textContent = quote;
  })
  .catch(() => {
    document.getElementById("quote").textContent = "Could not load quote.";
  });

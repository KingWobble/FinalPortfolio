const quoteElement = document.getElementById("quote");

async function getQuote() {
  quoteElement.textContent = "Loading quote...";

  try {
    const res = await fetch("https://zenquotes.io/");
    if (!res.ok) throw new Error("Network response not ok");
    
    const data = await res.json();
    quoteElement.textContent = `"${data.content}" — ${data.author}`;
  } catch (err) {
    quoteElement.textContent = "Could not load quote.";
  }
}

getQuote();

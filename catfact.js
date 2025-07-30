const catFact = document.getElementById("catFact");

async function getCatFact() {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    catFact.textContent = data.fact;
  } catch (err) {
    catFact.textContent = "Couldn't load cat fact 🐱";
  }
}

getCatFact();

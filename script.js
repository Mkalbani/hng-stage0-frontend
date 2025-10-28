function updateTimestamp() {
  const timestampEl = document.getElementById("timestamp");
  if (timestampEl) {
    timestampEl.textContent = Date.now();
  }
}

updateTimestamp();

const API = "/api";

async function loadDashboard() {
  try {
    const res = await fetch(`${API}/dashboard`);
    if (!res.ok) throw new Error("API unavailable");
    const data = await res.json();

    document.getElementById("total").textContent = data.totalServices;
    document.getElementById("healthy").textContent = data.healthyServices;
    document.getElementById("healthyText").textContent =
      `${((data.healthyServices / data.totalServices) * 100).toFixed(1)}% healthy`;

    document.getElementById("statusList").innerHTML = data.services.map(s => `
      <div class="status">
        <i class="dot"></i>
        <span>${s.name}</span>
        <span>${s.status} &nbsp; Port ${s.port}</span>
      </div>
    `).join("");
  } catch (err) {
    document.getElementById("statusList").innerHTML =
      `<div class="status"><span>⚠</span><span>Backend unavailable</span><span>Offline</span></div>`;
  }
}
loadDashboard();
setInterval(loadDashboard, 10000);
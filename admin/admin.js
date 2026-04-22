const listingCount = document.getElementById("listingCount");
const leadCount = document.getElementById("leadCount");
const output = document.querySelector("[data-admin-output]");

const dashboardState = {
  listingCount: 24,
  leadCount: 7,
  topDistrict: "Kadikoy",
};

if (listingCount && leadCount && output) {
  listingCount.textContent = String(dashboardState.listingCount);
  leadCount.textContent = String(dashboardState.leadCount);
  output.textContent = `En aktif bolge: ${dashboardState.topDistrict}`;
}
//Soder Modal
function openSoderModal() {
  document.getElementById("backdropSoder").style.display = "block";
  document.getElementById("soderModal").style.display = "block";
  document.getElementById("soderModal").classList.add("show");
}
function closeSoderModal() {
  document.getElementById("backdropSoder").style.display = "none";
  document.getElementById("soderModal").style.display = "none";
  document.getElementById("soderModal").classList.remove("show");
}
// Get the modal
var soderModal = document.getElementById("soderModal");
//Soder Modal
function openTuneModal() {
  document.getElementById("backdropTune").style.display = "block";
  document.getElementById("tuneModal").style.display = "block";
  document.getElementById("tuneModal").classList.add("show");
}
function closeTuneModal() {
  document.getElementById("backdropTune").style.display = "none";
  document.getElementById("tuneModal").style.display = "none";
  document.getElementById("tuneModal").classList.remove("show");
}
// Get the modal
var tuneModal = document.getElementById("tuneModal");

function openBuildModal() {
  document.getElementById("backdropBuild").style.display = "block";
  document.getElementById("buildModal").style.display = "block";
  document.getElementById("buildModal").classList.add("show");
}
function closeBuildModal() {
  document.getElementById("backdropBuild").style.display = "none";
  document.getElementById("buildModal").style.display = "none";
  document.getElementById("BuildModal").classList.remove("show");
}
// Get the modal
var buildModal = document.getElementById("buildModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (
    event.target == soderModal ||
    event.target == tuneModal ||
    event.target == buildModal
  ) {
    closeSoderModal();
    closeTuneModal();
    closeBuildModal();
  }
};

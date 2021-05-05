const footerTextEl = document.getElementById("footerText")
const applicantFotoEl = document.getElementById("applicantFoto")
let refreshAnimationTimer = null

footerTextEl.addEventListener("click", event => {
	event.target.classList.add("active")
	clearTimeout(refreshAnimationTimer)
	refreshAnimationTimer = setTimeout(
		() => footerTextEl.classList.remove("active"),
		5000
	)
})
applicantFotoEl.addEventListener("click", event => {
	const fotoEl = event.target.closest(".header__applicant-foto")
	if (fotoEl) {
		applicantFotoEl.classList.toggle("active")
	}
})

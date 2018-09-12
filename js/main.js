let home = document.getElementById("home");
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let achieve = document.getElementById("achieve");
let contact = document.getElementById("contact");

let showcase = document.getElementById("showcase");
let details = document.getElementById("details");
let skillset = document.getElementById("skillset");
let certify = document.getElementById("certify");
let reach = document.getElementById("reach");

home.addEventListener("click", e => {
  e.target.classList.add("active");

  about.classList.remove("active");
  skills.classList.remove("active");
  achieve.classList.remove("active");
  contact.classList.remove("active");

  showcase.classList.add("show");
  skillset.classList.remove("show");
  details.classList.remove("show");
  certify.classList.remove("show");
  reach.classList.remove("show");
});

about.addEventListener("click", e => {
  e.target.classList.add("active");

  home.classList.remove("active");
  skills.classList.remove("active");
  achieve.classList.remove("active");
  contact.classList.remove("active");

  showcase.classList.remove("show");
  skillset.classList.remove("show");
  details.classList.add("show");
  certify.classList.remove("show");
  reach.classList.remove("show");
});

skills.addEventListener("click", e => {
  e.target.classList.add("active");

  about.classList.remove("active");
  home.classList.remove("active");
  achieve.classList.remove("active");
  contact.classList.remove("active");

  showcase.classList.remove("show");
  skillset.classList.add("show");
  details.classList.remove("show");
  certify.classList.remove("show");
  reach.classList.remove("show");
});
achieve.addEventListener("click", e => {
  e.target.classList.add("active");

  about.classList.remove("active");
  skills.classList.remove("active");
  home.classList.remove("active");
  contact.classList.remove("active");

  showcase.classList.remove("show");
  skillset.classList.remove("show");
  details.classList.remove("show");
  certify.classList.add("show");
  reach.classList.remove("show");
});

contact.addEventListener("click", e => {
  e.target.classList.add("active");

  about.classList.remove("active");
  skills.classList.remove("active");
  achieve.classList.remove("active");
  home.classList.remove("active");

  showcase.classList.remove("show");
  skillset.classList.remove("show");
  details.classList.remove("show");
  certify.classList.remove("show");
  reach.classList.add("show");
});

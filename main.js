const navbarContainer = document.querySelector(".navbar-container");
const mainContainer = document.querySelector( ".main-container");

//Add to Start
const startLink = document.querySelector(".start-link");
startLink.addEventListener("click", scrollToStart);
function scrollToStart(e) {
  e.preventDefault();
  const startSection = document.querySelector(".start-page");
  const topOffset =
    startSection.offsetTop -
    navbarContainer.offsetHeight -
    mainContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}
//Add to Offer
const offerLink = document.querySelector(".offer-link");
offerLink.addEventListener("click", scrollToOffer);
function scrollToOffer(event) {
  event.preventDefault();
  const offerSection = document.querySelector(".offer-page");
  const topOffset =
    offerSection.offsetTop -
    navbarContainer.offsetHeight -
    mainContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}
//Addvto AboutUs
const aboutUsLink = document.querySelector(".aboutus-link");
aboutUsLink.addEventListener("click", scrollToAboutUs);
function scrollToAboutUs(event) {
  event.preventDefault();
  const aboutSection = document.querySelector(".about-piece");
  const topOffset =
    aboutSection.offsetTop -
    navbarContainer.offsetHeight -
    mainContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}
//Add to Testimonials
const testimonialsLink = document.querySelector(".testimonial-link");
testimonialsLink.addEventListener("click", scrollToTestimonials);
function scrollToTestimonials(event) {
  event.preventDefault();
  const testimonialsSection = document.querySelector(".carousel");
  const topOffset =
    testimonialsSection.offsetTop -
    navbarContainer.offsetHeight -
    mainContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}
//Add to Clients
const clientsLink = document.querySelector(".clients-link");
clientsLink.addEventListener("click", scrollToClients);
function scrollToClients(event) {
  event.preventDefault();
  const clientsSection = document.querySelector(".clients-container");
  const topOffset =
    clientsSection.offsetTop -
    navbarContainer.offsetHeight -
    mainContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}
//Add to Contact
const contactsLink = document.querySelector(".contacts-link");
contactsLink.addEventListener("click", scrollToContacts);
function scrollToContacts(event) {
  event.preventDefault();
  const contactsSection = document.querySelector(".contact-page");
  const topOffset =
    contactsSection.offsetTop -
    navbarContainer.offsetHeight -
    mainContainer.offsetHeight;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("advertising-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const business = document.getElementById("ad-business").value.trim();
    const contact = document.getElementById("ad-contact").value.trim();
    const type = document.getElementById("ad-type").value;
    const budget = document.getElementById("ad-budget").value;
    const details = document.getElementById("ad-contact-details").value.trim();

    const message = [
      "Hello Benson, I am interested in advertising with Benson Ambani Golf & Tourism.",
      "",
      "Business: " + business,
      "Contact person: " + contact,
      "Advertisement type: " + type,
      "Advertising budget: " + budget,
      "Phone number or email: " + details
    ].join("\n");

    const whatsappUrl = "https://wa.me/254768971515?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
});
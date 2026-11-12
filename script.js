document.addEventListener("DOMContentLoaded", () => {
  const whatsappNumber = "254768971515";
  function sendWhatsApp(message) {
    window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  }

  const advertisingForm = document.getElementById("advertising-form");
  if (advertisingForm) {
    advertisingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!advertisingForm.reportValidity()) return;
      const business = document.getElementById("ad-business").value.trim();
      const contact = document.getElementById("ad-contact").value.trim();
      const type = document.getElementById("ad-type").value;
      const budget = document.getElementById("ad-budget").value;
      const details = document.getElementById("ad-contact-details").value.trim();
      sendWhatsApp(["Hello Benson, I am interested in advertising with Benson Ambani Golf & Tourism.","","Business: " + business,"Contact person: " + contact,"Advertisement type: " + type,"Advertising budget: " + budget,"Phone number or email: " + details].join("\n"));
    });
  }

  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    const dateInput = document.getElementById("book-date");
    if (dateInput) {
      const now = new Date();
      dateInput.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0,10);
    }
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!bookingForm.reportValidity()) return;
      const name = document.getElementById("book-name").value.trim();
      const contact = document.getElementById("book-contact").value.trim();
      const service = document.getElementById("book-service").value;
      const date = document.getElementById("book-date").value || "Not specified";
      const location = document.getElementById("book-location").value.trim() || "Not specified";
      const details = document.getElementById("book-message").value.trim() || "None";
      sendWhatsApp(["Hello Benson, I would like to enquire about a golf experience.","","Name: " + name,"Phone or email: " + contact,"Service: " + service,"Preferred date: " + date,"Golf course / destination: " + location,"Additional details: " + details,"","I understand this is an enquiry and is not yet a confirmed booking."].join("\n"));
    });
  }
});
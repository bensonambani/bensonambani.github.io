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
  const marketplaceForm = document.getElementById("marketplace-form");
  if (marketplaceForm) {
    const categorySelect = document.getElementById("market-type");
    const filterButtons = document.querySelectorAll(".market-filter");
    const tiles = document.querySelectorAll(".market-tile");
    function applyMarketFilter(category) {
      tiles.forEach((tile) => { tile.hidden = category !== "all" && tile.dataset.category !== category; });
      filterButtons.forEach((button) => {
        const active = button.dataset.filter === category;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }
    filterButtons.forEach((button) => button.addEventListener("click", () => applyMarketFilter(button.dataset.filter)));
    document.querySelectorAll("[data-select]").forEach((button) => button.addEventListener("click", () => {
      categorySelect.value = button.dataset.select;
      applyMarketFilter(button.dataset.select);
      document.getElementById("market-title").focus();
      document.getElementById("marketplace-form").scrollIntoView({behavior:"smooth",block:"center"});
    }));
    marketplaceForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!marketplaceForm.reportValidity()) return;
      const values = {
        name: document.getElementById("market-name").value.trim(),
        contact: document.getElementById("market-contact").value.trim(),
        type: categorySelect.options[categorySelect.selectedIndex].text,
        title: document.getElementById("market-title").value.trim(),
        location: document.getElementById("market-location").value.trim() || "Not specified",
        price: document.getElementById("market-price").value.trim() || "Not specified",
        description: document.getElementById("market-description").value.trim()
      };
      sendWhatsApp(["Hello Benson, please review my Golf Marketplace listing.","","Name: "+values.name,"Contact: "+values.contact,"Category: "+values.type,"Title: "+values.title,"Location: "+values.location,"Price / budget: "+values.price,"Description: "+values.description,"","Please let me know if this can be shared with the golf community."].join("\n"));
    });
  }

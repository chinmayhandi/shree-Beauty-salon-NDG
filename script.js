document.addEventListener('DOMContentLoaded', () => {
  // --- STICKY HEADER ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  }

  // --- MOBILE MENU ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navActions = document.querySelector('.nav-actions');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      if (navActions) navActions.classList.toggle('active');
    });
  }

  // --- SERVICE DATA (CATEGORY-BASED) ---
  const categoriesData = [
    {
      id: "makeup-services",
      categoryName: "1. MAKEUP SERVICES",
      services: [
        { name: "Party Makeup", price: "₹3000", desc: "Glamorous makeup look tailored for parties and events.", includes: "Makeup base, eye makeup, basic hairstyling", location: "At Parlour, On-site" },
        { name: "Simple Makeup", price: "₹1500", desc: "Elegant and subtle makeup for regular occasions.", includes: "Light base, subtle eye makeup", location: "At Parlour, On-site" },
        { name: "Bridal Makeup", price: "₹5000", desc: "Look stunning on your special day with our premium bridal makeup.", includes: "HD/Airbrush makeup, advanced hairstyling, draping", location: "At Parlour, On-site" }
      ]
    },
    {
      id: "mehendi-bridal",
      categoryName: "2. MEHENDI & BRIDAL DESIGN",
      services: [
        { name: "Mehendi Design", price: "₹2000", desc: "Beautiful and intricate henna designs.", includes: "Both hands intricate design", location: "At Parlour, On-site" },
        { name: "Bridal Mehendi", price: "₹4000 to ₹5000", desc: "Elaborate bridal henna for full hands and feet.", includes: "Full hands and feet intricate traditional designs", location: "At Parlour, On-site" }
      ]
    },
    {
      id: "threading-eyebrow",
      categoryName: "3. THREADING SERVICES",
      services: [
        { name: "Eyebrows", price: "₹50", desc: "Precise eyebrow shaping.", includes: "Eyebrow threading and soothing gel", location: "At Parlour" },
        { name: "Full Face Threading", price: "₹100", desc: "Complete facial hair removal.", includes: "Full face threading and massage", location: "At Parlour" }
      ]
    },
    {
      id: "hair-cuts",
      categoryName: "4. HAIR CUTS",
      services: [
        { name: "Hair Cutting", price: "₹100", desc: "Basic haircut to trim and shape your hair.", includes: "Customized haircut", location: "At Parlour" },
        { name: "Baby Cut", price: "₹100", desc: "Gentle and stylish haircut for kids.", includes: "Kids haircut", location: "At Parlour" },
        { name: "Step Cut", price: "₹550", desc: "Classic step cut for volume and bounce.", includes: "Step haircut and styling", location: "At Parlour" },
        { name: "U-Cut", price: "₹200", desc: "Elegant U-shaped haircut.", includes: "U-shaped haircut", location: "At Parlour" },
        { name: "V-Cut", price: "₹200", desc: "Stylish V-shaped haircut.", includes: "V-shaped haircut", location: "At Parlour" },
        { name: "Layer Cut", price: "₹400", desc: "Trendy layers for a modern look.", includes: "Layered haircut", location: "At Parlour" },
        { name: "Butterfly Cut", price: "₹650", desc: "Voluminous butterfly layers.", includes: "Butterfly haircut and blowdry", location: "At Parlour" }
      ]
    },
    {
      id: "hair-treatments",
      categoryName: "5. HAIR TREATMENTS",
      services: [
        { name: "Hair Spa", price: "₹1500 to ₹2500", desc: "Deep conditioning and relaxing hair spa.", includes: "Cream application, massage, steam", location: "At Parlour" },
        { name: "Smoothing / Straightening", price: "₹6000+", desc: "Long-lasting hair smoothing treatment.", includes: "Deep cleansing, chemical treatment, flat iron", location: "At Parlour" }
      ]
    },
    {
      id: "hair-coloring",
      categoryName: "6. HAIR COLORING",
      services: [
        { name: "Root Touch-Up", price: "₹1000", desc: "Perfect coverage for grey roots.", includes: "Root color application and wash", location: "At Parlour" },
        { name: "Global Color", price: "₹1500", desc: "Complete hair coloring for a fresh look.", includes: "Full hair color application and wash", location: "At Parlour" },
        { name: "Highlights", price: "₹2500", desc: "Trendy highlights to elevate your style.", includes: "Foil highlights and wash", location: "At Parlour" }
      ]
    },
    {
      id: "skin-care",
      categoryName: "7. SKIN CARE",
      services: [
        { name: "Facial", price: "₹500 to ₹2500", desc: "Rejuvenating facial treatments.", includes: "Cleansing, scrub, massage, face pack", location: "At Parlour" },
        { name: "Clean Up", price: "₹300", desc: "Quick and effective skin cleanup.", includes: "Cleansing, exfoliation, mask", location: "At Parlour" },
        { name: "Bleach", price: "₹250", desc: "Skin brightening bleach treatment.", includes: "Bleach application and soothing lotion", location: "At Parlour" }
      ]
    },
    {
      id: "waxing",
      categoryName: "8. WAXING",
      services: [
        { name: "Body Waxing", price: "₹250 to ₹550", desc: "Smooth and hygienic body waxing.", includes: "Wax application and soothing gel", location: "At Parlour" }
      ]
    },
    {
      id: "manicure-pedicure",
      categoryName: "9. MANICURE & PEDICURE",
      services: [
        { name: "Manicure & Pedicure", price: "₹700 to ₹1500", desc: "Complete care for your hands and feet.", includes: "Nail shaping, cuticle care, scrub, massage, polish", location: "At Parlour" }
      ]
    },
    {
      id: "saree-draping",
      categoryName: "10. SAREE DRAPING",
      services: [
        { name: "Basic Draping", price: "₹350", desc: "Neat and classic saree draping.", includes: "Professional pinning and pleating", location: "At Parlour, On-site" },
        { name: "Bridal Draping", price: "₹600", desc: "Elaborate draping for brides.", includes: "Secure pinning and perfect pleats for bridal wear", location: "At Parlour, On-site" },
        { name: "Party Draping", price: "₹350", desc: "Stylish draping for parties.", includes: "Modern style draping and pinning", location: "At Parlour, On-site" },
        { name: "Silk Draping", price: "₹350", desc: "Specialized draping for silk sarees.", includes: "Careful pleating to maintain silk texture", location: "At Parlour, On-site" },
        { name: "Designer Draping", price: "₹350", desc: "Unique draping styles for designer sarees.", includes: "Custom draping according to saree design", location: "At Parlour, On-site" }
      ]
    }
  ];

  window.categoriesData = categoriesData;

  // Services are now statically rendered in services.html for instant load times.
  // We keep categoriesData for the Contact Page dynamic dropdowns.

  // --- CONTACT PAGE DYNAMIC DROPDOWNS ---
  const contactServiceSelect = document.getElementById('b-service');
  const contactTypeSelect = document.getElementById('b-type');
  
  if (contactServiceSelect && contactTypeSelect) {
    // Populate Service Category Dropdown
    categoriesData.forEach(category => {
      const option = document.createElement('option');
      option.value = category.categoryName;
      option.text = category.categoryName;
      contactServiceSelect.appendChild(option);
    });

    // Handle Category Change
    contactServiceSelect.addEventListener('change', (e) => {
      const selectedCategoryName = e.target.value;
      
      // Clear Service Type Dropdown
      contactTypeSelect.innerHTML = '<option value="">Select a Service Type</option>';
      
      if (selectedCategoryName) {
        const category = categoriesData.find(c => c.categoryName === selectedCategoryName);
        if (category && category.services) {
          category.services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.name;
            option.text = service.name;
            contactTypeSelect.appendChild(option);
          });
        }
      }
    });
  }

  // --- MODALS OUTSIDE CLICK LISTENER ---
  const bookingModal = document.getElementById('booking-modal');
  if (bookingModal) {
    bookingModal.addEventListener('click', function (e) {
      if (e.target === this) {
        closeBookingModal();
      }
    });
  }

  const detailsModal = document.getElementById('service-details-modal');
  if (detailsModal) {
    detailsModal.addEventListener('click', function (e) {
      if (e.target === this) {
        closeServiceDetailsModal();
      }
    });
  }

  // --- LOCATION AND ADDRESS LOGIC ---
  function setupLocationLogic(locationSelectId, addressGroupId, addressInputId, paymentNoteId) {
    const locationSelect = document.getElementById(locationSelectId);
    const addressGroup = document.getElementById(addressGroupId);
    const addressInput = document.getElementById(addressInputId);
    const paymentNote = document.getElementById(paymentNoteId);

    if (locationSelect && addressGroup && addressInput && paymentNote) {
      locationSelect.addEventListener('change', (e) => {
        if (e.target.value === 'On-Site') {
          // Show Popup for On-Site
          const isConfirmed = window.confirm(
            "⚠️ On-Site Service - Advance Payment Required\n\n" +
            "For On-Site / Customer Location service, 50% advance payment is required to confirm your booking.\n\n" +
            "After you submit this booking request via WhatsApp, the admin will send you a payment scanner (QR code) on WhatsApp.\n\n" +
            "Your appointment will be confirmed ONLY after the advance payment is received.\n\n" +
            "Click OK if you understand, or Cancel to go back."
          );
          
          if (isConfirmed) {
            addressGroup.style.display = 'block';
            addressInput.required = true;
            paymentNote.innerHTML = '<strong>📱 On-Site Payment:</strong> 50% advance payment required. After booking, admin will send you a payment scanner (QR code) on WhatsApp. Your booking will be confirmed only after payment.';
          } else {
            // Revert to At Parlour
            locationSelect.value = 'At Parlour';
            addressGroup.style.display = 'none';
            addressInput.required = false;
            addressInput.value = '';
            paymentNote.innerHTML = '<strong>🏪 At Parlour:</strong> Payment can be made directly at the parlour. No advance payment needed.';
          }
        } else {
          addressGroup.style.display = 'none';
          addressInput.required = false;
          addressInput.value = '';
          paymentNote.innerHTML = '<strong>🏪 At Parlour:</strong> Payment can be made directly at the parlour. No advance payment needed.';
        }
      });
    }
  }

  setupLocationLogic('m-location', 'm-address-group', 'm-address', 'm-payment-note');
  setupLocationLogic('b-location', 'b-address-group', 'b-address', 'b-payment-note');

  // --- BOOKING SUBMIT LOGIC ---
  const modalBookingForm = document.getElementById('modal-booking-form');
  if (modalBookingForm) {
    setupDateTimeRestrictions(document.getElementById('m-date'), document.getElementById('m-time'));

    modalBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('m-name').value;
      const phone = document.getElementById('m-phone').value;
      const category = document.getElementById('m-service').value;
      const serviceType = document.getElementById('m-type').value;
      const location = document.getElementById('m-location').value;
      const address = document.getElementById('m-address').value;
      const date = document.getElementById('m-date').value;
      const time = document.getElementById('m-time').value;
      const msg = document.getElementById('m-msg').value;
      const paymentNote = document.getElementById('m-payment-note').innerText;

      const whatsappNumber = '917338097296';

      let text = `Hello, I want to book an appointment at Shree Beauty Salon & Shree Herbal Beauty Parlour 💄✨\n\n`;
      text += `Name: ${name}\n`;
      text += `Phone Number: ${phone}\n`;
      text += `Service: ${category}\n`;
      text += `Service Type: ${serviceType}\n`;
      text += `Service Location: ${location}\n`;
      if (location === 'On-Site' && address) {
        text += `Address: ${address}\n`;
      }
      text += `Preferred Date: ${date}\n`;
      text += `Preferred Time: ${time}\n`;
      text += `Payment Note: ${paymentNote}\n`;
      if (msg) {
        text += `Message: ${msg}\n`;
      }
      text += `\nPlease confirm my booking. Thank you 🙏`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  function setupDateTimeRestrictions(dateInput, timeSelect) {
    if (dateInput && timeSelect) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      const todayStr = `${yyyy}-${mm}-${dd}`;

      dateInput.setAttribute('min', todayStr);

      dateInput.addEventListener('change', () => {
        if (dateInput.value === todayStr) {
          const currentHour = today.getHours();
          const currentMinute = today.getMinutes();
          
          Array.from(timeSelect.options).forEach(option => {
            if (!option.value) return; // Skip "Select Time"
            
            // Parse "10:30 AM" into 24h format for comparison
            const timeParts = option.value.split(' ');
            const timeArr = timeParts[0].split(':');
            let hour = parseInt(timeArr[0], 10);
            const minute = parseInt(timeArr[1], 10);
            
            if (timeParts[1] === 'PM' && hour !== 12) hour += 12;
            if (timeParts[1] === 'AM' && hour === 12) hour = 0;
            
            if (hour < currentHour || (hour === currentHour && minute <= currentMinute)) {
              option.disabled = true;
            } else {
              option.disabled = false;
            }
          });
        } else {
          Array.from(timeSelect.options).forEach(option => option.disabled = false);
        }
      });
    }
  }

  // --- CONTACT FORM SUBMIT LOGIC ---
  const contactBookingForm = document.getElementById('booking-form');
  if (contactBookingForm) {
    setupDateTimeRestrictions(document.getElementById('b-date'), document.getElementById('b-time'));

    contactBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('b-name').value;
      const phone = document.getElementById('b-phone').value;
      const category = document.getElementById('b-service').value;
      const serviceType = document.getElementById('b-type').value;
      const location = document.getElementById('b-location').value;
      const address = document.getElementById('b-address').value;
      const date = document.getElementById('b-date').value;
      const time = document.getElementById('b-time').value;
      const msg = document.getElementById('b-msg').value;
      const paymentNote = document.getElementById('b-payment-note').innerText;

      const whatsappNumber = '917338097296';

      let text = `Hello, I want to book an appointment at Shree Beauty Salon & Shree Herbal Beauty Parlour 💄✨\n\n`;
      text += `Name: ${name}\n`;
      text += `Phone Number: ${phone}\n`;
      text += `Service: ${category}\n`;
      text += `Service Type: ${serviceType}\n`;
      text += `Service Location: ${location}\n`;
      if (location === 'On-Site' && address) {
        text += `Address: ${address}\n`;
      }
      text += `Preferred Date: ${date}\n`;
      text += `Preferred Time: ${time}\n`;
      text += `Payment Note: ${paymentNote}\n`;
      if (msg) {
        text += `Message: ${msg}\n`;
      }
      text += `\nPlease confirm my booking. Thank you 🙏`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // --- HOME REVIEWS SLIDER ---
  const reviews = [
    { name: "Customer 1", rating: 5, text: "Best bridal makeup service, very professional." },
    { name: "Customer 2", rating: 5, text: "Very clean parlour and friendly staff." },
    { name: "Customer 3", rating: 5, text: "Hair styling was perfect for my function." },
    { name: "Customer 4", rating: 4, text: "Facial result was very good and relaxing." },
    { name: "Customer 5", rating: 5, text: "Mehendi design was neat and beautiful." },
    { name: "Customer 6", rating: 5, text: "Affordable price and good service." },
    { name: "Customer 7", rating: 5, text: "Threading was perfect and painless." },
    { name: "Customer 8", rating: 5, text: "Very hygienic and peaceful environment." },
    { name: "Customer 9", rating: 5, text: "On-time bridal service, highly recommended." },
    { name: "Customer 10", rating: 5, text: "Best beauty parlour experience in Nidagundi." }
  ];

  const reviewsSlider = document.getElementById('reviews-slider');
  if (reviewsSlider) {
    // Enable native smooth scrolling and snap
    reviewsSlider.style.overflowX = 'auto';
    reviewsSlider.style.scrollSnapType = 'x mandatory';
    reviewsSlider.style.scrollBehavior = 'smooth';
    reviewsSlider.style.scrollbarWidth = 'none'; // For Firefox
    reviewsSlider.style.msOverflowStyle = 'none'; // For IE/Edge
    
    // Hide scrollbar for Webkit is in CSS
    
    reviews.forEach((review) => {
      const card = document.createElement('div');
      card.className = 'review-card responsive-review-card';
      card.style.background = 'var(--color-bg-white)';
      card.style.padding = '30px';
      card.style.borderRadius = 'var(--border-radius-lg)';
      card.style.boxShadow = 'var(--shadow-sm)';
      card.style.border = '1px solid rgba(233, 30, 99, 0.05)';
      
      let starsHtml = '';
      for(let i=0; i<review.rating; i++) {
        starsHtml += '<span style="color: var(--color-accent-gold); font-size: 1.2rem; margin-right: 2px;">★</span>';
      }
      for(let i=review.rating; i<5; i++) {
        starsHtml += '<span style="color: #ddd; font-size: 1.2rem; margin-right: 2px;">★</span>';
      }

      card.innerHTML = `
        <div style="margin-bottom: 15px;">${starsHtml}</div>
        <p style="color: var(--color-text-main); font-size: 1.05rem; line-height: 1.6; font-style: italic; margin-bottom: 20px;">"${review.text}"</p>
        <h4 style="color: var(--color-primary-dark); font-family: var(--font-heading); font-size: 1.2rem;">- ${review.name}</h4>
      `;
      reviewsSlider.appendChild(card);
    });

    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');
    
    function scrollNext() {
      if (!reviewsSlider) return;
      const cardWidth = reviewsSlider.querySelector('.responsive-review-card').offsetWidth + 30; // 30 is gap
      reviewsSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });
      
      // If at end, loop back
      if (reviewsSlider.scrollLeft + reviewsSlider.clientWidth >= reviewsSlider.scrollWidth - 10) {
        setTimeout(() => { reviewsSlider.scrollTo({ left: 0, behavior: 'smooth' }); }, 1500);
      }
    }

    function scrollPrev() {
      if (!reviewsSlider) return;
      const cardWidth = reviewsSlider.querySelector('.responsive-review-card').offsetWidth + 30;
      reviewsSlider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }

    if(nextBtn) nextBtn.addEventListener('click', scrollNext);
    if(prevBtn) prevBtn.addEventListener('click', scrollPrev);

    let slideInterval = setInterval(scrollNext, 3000);

    reviewsSlider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    reviewsSlider.addEventListener('mouseleave', () => slideInterval = setInterval(scrollNext, 3000));
    reviewsSlider.addEventListener('touchstart', () => clearInterval(slideInterval));
    reviewsSlider.addEventListener('touchend', () => slideInterval = setInterval(scrollNext, 3000));
  }

  // --- HOME GALLERY PREVIEW ---
  const instagramVideos = [
    { title: "Bridal Makeup Look", thumbnail: "https://images.unsplash.com/photo-1516975080661-46dcbfcac2bd?auto=format&fit=crop&w=400", link: "PASTE_INSTAGRAM_LINK_1" },
    { title: "Hair Styling Look", thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400", link: "PASTE_INSTAGRAM_LINK_2" },
    { title: "Mehendi Design", thumbnail: "https://images.unsplash.com/photo-1563200762-11a54b3ea3c6?auto=format&fit=crop&w=400", link: "PASTE_INSTAGRAM_LINK_3" },
    { title: "Party Makeup", thumbnail: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=400", link: "PASTE_INSTAGRAM_LINK_4" },
    { title: "Facial Treatment", thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400", link: "PASTE_INSTAGRAM_LINK_5" },
    { title: "Nail Art", thumbnail: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=400", link: "PASTE_INSTAGRAM_LINK_6" }
  ];

  const youtubeVideos = [
    { title: "Salon Work Video", thumbnail: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400", link: "PASTE_YOUTUBE_LINK_1" },
    { title: "Bridal Behind The Scenes", thumbnail: "https://images.unsplash.com/photo-1555820598-c8015200bb6b?auto=format&fit=crop&w=400", link: "PASTE_YOUTUBE_LINK_2" }
  ];

  function renderGallery(containerId, videos, platform) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Add comments as requested
    container.innerHTML = `<!-- Add ${platform} video links here -->`;

    videos.forEach(video => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.style.position = 'relative';
      item.style.borderRadius = 'var(--border-radius-md)';
      item.style.overflow = 'hidden';
      item.style.boxShadow = 'var(--shadow-sm)';
      item.style.background = '#000';
      item.style.aspectRatio = '9/16';
      
      const btnText = platform === 'Instagram' ? 'Watch on Instagram' : 'Watch on YouTube';
      const btnBg = platform === 'Instagram' ? 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' : '#FF0000';

      item.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: var(--transition);">
        <div style="position: absolute; bottom: 0; left: 0; width: 100%; padding: 20px; background: linear-gradient(transparent, rgba(0,0,0,0.8));">
          <h4 style="color: white; margin-bottom: 15px; font-size: 1.1rem; font-family: var(--font-heading); text-align: center;">${video.title}</h4>
          <a href="${video.link}" target="_blank" style="display: block; width: 100%; text-align: center; background: ${btnBg}; color: white; padding: 10px; border-radius: 50px; font-weight: 500; font-size: 0.9rem; text-decoration: none; transition: opacity 0.3s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">${btnText}</a>
        </div>
      `;
      
      container.appendChild(item);
    });
  }

  renderGallery('insta-videos', instagramVideos, 'Instagram');
  renderGallery('youtube-videos', youtubeVideos, 'YouTube');

});

// --- GLOBAL FUNCTIONS ---

window.openServiceDetailsModal = function (title, price, includes, location, categoryName) {
  const modal = document.getElementById('service-details-modal');
  if (!modal) return;

  document.getElementById('sdm-title').innerText = title;
  document.getElementById('sdm-price').innerText = price;
  document.getElementById('sdm-includes').innerText = includes;
  document.getElementById('sdm-location').innerText = location;

  const safeTitle = title.replace(/'/g, "\\'");
  const safeCat = categoryName.replace(/'/g, "\\'");
  const safeLoc = location.replace(/'/g, "\\'");

  const bookBtn = document.getElementById('sdm-book-btn');
  bookBtn.setAttribute('onclick', `closeServiceDetailsModal(); openBookingModal('${safeCat}', '${safeTitle}', '${safeLoc}')`);

  modal.style.display = 'flex';
};

window.closeServiceDetailsModal = function () {
  const modal = document.getElementById('service-details-modal');
  if (modal) {
    modal.style.display = 'none';
  }
};

window.openBookingModal = function (categoryName, serviceName, locationsString) {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  document.getElementById('m-service').value = categoryName;
  document.getElementById('m-type').value = serviceName;

  // Initialize location dropdown based on availability
  const locationSelect = document.getElementById('m-location');
  if (locationSelect) {
    locationSelect.innerHTML = '';

    if (locationsString.toLowerCase().includes('parlour')) {
      locationSelect.add(new Option('At Parlour', 'At Parlour'));
    }
    if (locationsString.toLowerCase().includes('on-site')) {
      locationSelect.add(new Option('On-Site / Customer Location', 'On-Site'));
    }

    // Trigger change event to set address field visibility correctly initially
    const event = new Event('change');
    locationSelect.dispatchEvent(event);
  }

  // Clear previous values but keep the auto-filled ones
  document.getElementById('m-name').value = '';
  document.getElementById('m-phone').value = '';
  document.getElementById('m-address').value = '';
  document.getElementById('m-date').value = '';
  document.getElementById('m-time').value = '';
  document.getElementById('m-msg').value = '';

  // Reset address and payment note
  const addressGroup = document.getElementById('m-address-group');
  if (addressGroup) addressGroup.style.display = 'none';
  const paymentNote = document.getElementById('m-payment-note');
  if (paymentNote) paymentNote.innerHTML = '<strong>🏪 At Parlour:</strong> Payment can be made directly at the parlour. No advance payment needed.';

  modal.style.display = 'flex';
};

window.closeBookingModal = function () {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.style.display = 'none';
  }
};

window.switchHomeGalleryTab = function(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  const buttons = document.querySelectorAll('.gallery-tabs .tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  const activeTab = document.getElementById(tabId);
  if (activeTab) activeTab.classList.add('active');
  
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
};

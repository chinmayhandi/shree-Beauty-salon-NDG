const categoriesData = [
  { id: 'makeup-services', categoryName: '1. MAKEUP SERVICES', services: [ { name: 'Party Makeup', price: '₹3000', desc: 'Glamorous makeup look tailored for parties and events.', includes: 'Makeup base, eye makeup, basic hairstyling', location: 'At Parlour, On-site' }, { name: 'Simple Makeup', price: '₹1500', desc: 'Elegant and subtle makeup for regular occasions.', includes: 'Light base, subtle eye makeup', location: 'At Parlour, On-site' }, { name: 'Bridal Makeup', price: '₹5000', desc: 'Look stunning on your special day with our premium bridal makeup.', includes: 'HD/Airbrush makeup, advanced hairstyling, draping', location: 'At Parlour, On-site' } ] },
  { id: 'mehendi-bridal', categoryName: '2. MEHENDI & BRIDAL DESIGN', services: [ { name: 'Mehendi Design', price: '₹2000', desc: 'Beautiful and intricate henna designs.', includes: 'Both hands intricate design', location: 'At Parlour, On-site' }, { name: 'Bridal Mehendi', price: '₹4000 to ₹5000', desc: 'Elaborate bridal henna for full hands and feet.', includes: 'Full hands and feet intricate traditional designs', location: 'At Parlour, On-site' } ] },
  { id: 'threading-eyebrow', categoryName: '3. THREADING SERVICES', services: [ { name: 'Eyebrows', price: '₹50', desc: 'Precise eyebrow shaping.', includes: 'Eyebrow threading and soothing gel', location: 'At Parlour' }, { name: 'Full Face Threading', price: '₹100', desc: 'Complete facial hair removal.', includes: 'Full face threading and massage', location: 'At Parlour' } ] },
  { id: 'hair-cuts', categoryName: '4. HAIR CUTS', services: [ { name: 'Hair Cutting', price: '₹100', desc: 'Basic haircut to trim and shape your hair.', includes: 'Customized haircut', location: 'At Parlour' }, { name: 'Baby Cut', price: '₹100', desc: 'Gentle and stylish haircut for kids.', includes: 'Kids haircut', location: 'At Parlour' }, { name: 'Step Cut', price: '₹550', desc: 'Classic step cut for volume and bounce.', includes: 'Step haircut and styling', location: 'At Parlour' }, { name: 'U-Cut', price: '₹200', desc: 'Elegant U-shaped haircut.', includes: 'U-shaped haircut', location: 'At Parlour' }, { name: 'V-Cut', price: '₹200', desc: 'Stylish V-shaped haircut.', includes: 'V-shaped haircut', location: 'At Parlour' }, { name: 'Layer Cut', price: '₹400', desc: 'Trendy layers for a modern look.', includes: 'Layered haircut', location: 'At Parlour' }, { name: 'Butterfly Cut', price: '₹650', desc: 'Voluminous butterfly layers.', includes: 'Butterfly haircut and blowdry', location: 'At Parlour' } ] },
  { id: 'hair-treatments', categoryName: '5. HAIR TREATMENTS', services: [ { name: 'Hair Spa', price: '₹1500 to ₹2500', desc: 'Deep conditioning and relaxing hair spa.', includes: 'Cream application, massage, steam', location: 'At Parlour' }, { name: 'Smoothing / Straightening', price: '₹6000+', desc: 'Long-lasting hair smoothing treatment.', includes: 'Deep cleansing, chemical treatment, flat iron', location: 'At Parlour' } ] },
  { id: 'hair-coloring', categoryName: '6. HAIR COLORING', services: [ { name: 'Root Touch-Up', price: '₹1000', desc: 'Perfect coverage for grey roots.', includes: 'Root color application and wash', location: 'At Parlour' }, { name: 'Global Color', price: '₹1500', desc: 'Complete hair coloring for a fresh look.', includes: 'Full hair color application and wash', location: 'At Parlour' }, { name: 'Highlights', price: '₹2500', desc: 'Trendy highlights to elevate your style.', includes: 'Foil highlights and wash', location: 'At Parlour' } ] },
  { id: 'skin-care', categoryName: '7. SKIN CARE', services: [ { name: 'Facial', price: '₹500 to ₹2500', desc: 'Rejuvenating facial treatments.', includes: 'Cleansing, scrub, massage, face pack', location: 'At Parlour' }, { name: 'Clean Up', price: '₹300', desc: 'Quick and effective skin cleanup.', includes: 'Cleansing, exfoliation, mask', location: 'At Parlour' }, { name: 'Bleach', price: '₹250', desc: 'Skin brightening bleach treatment.', includes: 'Bleach application and soothing lotion', location: 'At Parlour' } ] },
  { id: 'waxing', categoryName: '8. WAXING', services: [ { name: 'Body Waxing', price: '₹250 to ₹550', desc: 'Smooth and hygienic body waxing.', includes: 'Wax application and soothing gel', location: 'At Parlour' } ] },
  { id: 'manicure-pedicure', categoryName: '9. MANICURE & PEDICURE', services: [ { name: 'Manicure & Pedicure', price: '₹700 to ₹1500', desc: 'Complete care for your hands and feet.', includes: 'Nail shaping, cuticle care, scrub, massage, polish', location: 'At Parlour' } ] },
  { id: 'saree-draping', categoryName: '10. SAREE DRAPING', services: [ { name: 'Basic Draping', price: '₹350', desc: 'Neat and classic saree draping.', includes: 'Professional pinning and pleating', location: 'At Parlour, On-site' }, { name: 'Bridal Draping', price: '₹600', desc: 'Elaborate draping for brides.', includes: 'Secure pinning and perfect pleats for bridal wear', location: 'At Parlour, On-site' }, { name: 'Party Draping', price: '₹350', desc: 'Stylish draping for parties.', includes: 'Modern style draping and pinning', location: 'At Parlour, On-site' }, { name: 'Silk Draping', price: '₹350', desc: 'Specialized draping for silk sarees.', includes: 'Careful pleating to maintain silk texture', location: 'At Parlour, On-site' }, { name: 'Designer Draping', price: '₹350', desc: 'Unique draping styles for designer sarees.', includes: 'Custom draping according to saree design', location: 'At Parlour, On-site' } ] }
];

let html = '';
categoriesData.forEach(c => {
  html += `<section id="${c.id}" class="service-category" style="margin-bottom: 60px; scroll-margin-top: 100px;">\n`;
  html += `  <h2 class="category-heading" style="font-size: 2rem; color: var(--color-primary-dark); margin-bottom: 25px; border-bottom: 2px solid var(--color-primary-light); padding-bottom: 10px; font-family: var(--font-heading);">${c.categoryName}</h2>\n`;
  html += `  <div class="services-grid">\n`;
  
  c.services.forEach(s => {
    let nameSafe = s.name.replace(/"/g, "&quot;").replace(/'/g, "\\'");
    let priceSafe = s.price.replace(/"/g, "&quot;").replace(/'/g, "\\'");
    let includesSafe = s.includes.replace(/"/g, "&quot;").replace(/'/g, "\\'");
    let locationSafe = s.location.replace(/"/g, "&quot;").replace(/'/g, "\\'");
    
    html += `    <div class="service-card" style="box-shadow: var(--shadow-sm); border: 1px solid rgba(233, 30, 99, 0.08); display: flex; flex-direction: column;">\n`;
    html += `      <div class="service-content" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between; padding: 25px;">\n`;
    html += `        <div>\n`;
    html += `          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">\n`;
    html += `            <h3 class="service-type-title">${s.name}</h3>\n`;
    html += `            <span class="service-type-price">${s.price}</span>\n`;
    html += `          </div>\n`;
    html += `          <p class="service-desc" style="margin-bottom: 15px;">${s.desc}</p>\n`;
    html += `          <p class="service-type-includes">Includes: ${s.includes}</p>\n`;
    html += `        </div>\n`;
    html += `        <div class="service-type-action">\n`;
    html += `          <button class="btn btn-primary" style="width: 100%; padding: 10px;" onclick="window.openBookingModal('${c.categoryName}', '${nameSafe}', '${locationSafe}')">Book Now</button>\n`;
    html += `        </div>\n`;
    html += `      </div>\n`;
    html += `    </div>\n`;
  });
  
  html += `  </div>\n`;
  html += `</section>\n`;
});
require('fs').writeFileSync('generated_services.html', html);
console.log('HTML written to generated_services.html');

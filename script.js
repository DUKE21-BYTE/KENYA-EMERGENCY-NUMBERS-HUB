/* === DARK MODE === */
// Immediate execution to prevent FOUC
(function() {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
      if (event.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  } catch(e) { console.error('Dark mode init error:', e); }
})();

/* === EMERGENCY DATA === */
/* Robust data structure */
var CONTACTS = [
  /* ─── NATIONAL POLICE ─── */
  {cat:"police",name:"Kenya Police",phone:"999",area:"Nationwide",county:"all",icon:"🚓",color:"var(--accent-police)"},
  {cat:"police",name:"Universal Emergency",phone:"112",area:"Nationwide (all networks)",county:"all",icon:"📞",color:"var(--accent-police)"},
  {cat:"police",name:"National Police Service",phone:"0800 720 553",area:"Nationwide – Toll Free",county:"all",icon:"🚓",color:"var(--accent-police)"},
  {cat:"police",name:"DCI (Directorate of Criminal Investigations)",phone:"0800 722 203",area:"Nationwide",county:"all",icon:"🔍",color:"var(--accent-police)"},
  {cat:"police",name:"Anti-Terror Police Unit",phone:"0800 723 108",area:"Nationwide",county:"all",icon:"🛡️",color:"var(--accent-police)"},
  {cat:"police",name:"Nairobi Central Police",phone:"020 2222222",area:"Nairobi",county:"nairobi",icon:"🚓",color:"var(--accent-police)"},
  {cat:"police",name:"Mombasa Central Police",phone:"041 2225501",area:"Mombasa",county:"mombasa",icon:"🚓",color:"var(--accent-police)"},
  {cat:"police",name:"Kisumu Central Police",phone:"057 2020550",area:"Kisumu",county:"kisumu",icon:"🚓",color:"var(--accent-police)"},
  {cat:"police",name:"Nakuru Central Police",phone:"051 2211444",area:"Nakuru",county:"nakuru",icon:"🚓",color:"var(--accent-police)"},
  {cat:"police",name:"Eldoret Central Police",phone:"053 2033500",area:"Uasin Gishu",county:"uasin_gishu",icon:"🚓",color:"var(--accent-police)"},
  {cat:"police",name:"Nyeri Central Police",phone:"061 2030399",area:"Nyeri",county:"nyeri",icon:"🚓",color:"var(--accent-police)"},
  {cat:"police",name:"Thika Police Station",phone:"067 2022222",area:"Kiambu",county:"kiambu",icon:"🚓",color:"var(--accent-police)"},
  {cat:"police",name:"Machakos Police Station",phone:"044 2021222",area:"Machakos",county:"machakos",icon:"🚓",color:"var(--accent-police)"},

  /* ─── AMBULANCE / RED CROSS ─── */
  {cat:"ambulance",name:"Kenya Red Cross",phone:"1199",area:"Nationwide",county:"all",icon:"🚑",color:"var(--accent-ambulance)"},
  {cat:"ambulance",name:"St John Ambulance",phone:"0721 225 285",area:"Nationwide",county:"all",icon:"🚑",color:"var(--accent-ambulance)"},
  {cat:"ambulance",name:"AMREF Flying Doctors",phone:"020 6992000",area:"Nationwide – Air Rescue",county:"all",icon:"🚁",color:"var(--accent-ambulance)"},
  {cat:"ambulance",name:"E-Plus Ambulance (AAR)",phone:"0700 395 395",area:"Nairobi & Major Cities",county:"all",icon:"🚑",color:"var(--accent-ambulance)"},
  {cat:"ambulance",name:"Rescue.co",phone:"0800 723 253",area:"Nairobi",county:"nairobi",icon:"🚑",color:"var(--accent-ambulance)"},
  {cat:"ambulance",name:"KNH Emergency",phone:"020 2726300",area:"Nairobi – Kenyatta National Hospital",county:"nairobi",icon:"🏥",color:"var(--accent-ambulance)"},
  {cat:"ambulance",name:"Aga Khan Hospital Emergency",phone:"020 3662000",area:"Nairobi",county:"nairobi",icon:"🏥",color:"var(--accent-ambulance)"},
  {cat:"ambulance",name:"Mombasa Hospital Emergency",phone:"041 2312191",area:"Mombasa",county:"mombasa",icon:"🏥",color:"var(--accent-ambulance)"},
  {cat:"ambulance",name:"Nakuru Level 5 Hospital",phone:"051 2212761",area:"Nakuru",county:"nakuru",icon:"🏥",color:"var(--accent-ambulance)"},
  {cat:"ambulance",name:"Kisumu County Hospital",phone:"057 2020508",area:"Kisumu",county:"kisumu",icon:"🏥",color:"var(--accent-ambulance)"},

  /* ─── FIRE BRIGADE ─── */
  {cat:"fire",name:"Kenya Fire & Rescue (National)",phone:"999",area:"Nationwide",county:"all",icon:"🚒",color:"var(--accent-fire)"},
  {cat:"fire",name:"Nairobi Fire Station",phone:"020 2222181",area:"Nairobi",county:"nairobi",icon:"🚒",color:"var(--accent-fire)"},
  {cat:"fire",name:"Mombasa Fire Station",phone:"041 2230453",area:"Mombasa",county:"mombasa",icon:"🚒",color:"var(--accent-fire)"},
  {cat:"fire",name:"Kisumu Fire Station",phone:"057 2023999",area:"Kisumu",county:"kisumu",icon:"🚒",color:"var(--accent-fire)"},
  {cat:"fire",name:"Nakuru Fire Station",phone:"051 2217665",area:"Nakuru",county:"nakuru",icon:"🚒",color:"var(--accent-fire)"},
  {cat:"fire",name:"Eldoret Fire Station",phone:"053 2062222",area:"Uasin Gishu",county:"uasin_gishu",icon:"🚒",color:"var(--accent-fire)"},

  /* ─── KPLC / POWER ─── */
  {cat:"power",name:"KPLC Emergency",phone:"0703 070 707",area:"Nationwide",county:"all",icon:"⚡",color:"var(--accent-power)"},
  {cat:"power",name:"KPLC Toll Free",phone:"0800 723 253",area:"Nationwide",county:"all",icon:"⚡",color:"var(--accent-power)"},
  {cat:"power",name:"Kenya Power (SMS Reporting)",phone:"0703 070 707",area:"SMS KPLC to 95551",county:"all",icon:"📱",color:"var(--accent-power)"},
  {cat:"power",name:"KPLC Nairobi Region",phone:"020 3201000",area:"Nairobi",county:"nairobi",icon:"⚡",color:"var(--accent-power)"},
  {cat:"power",name:"KPLC Coast Region",phone:"041 2315188",area:"Mombasa & Coast",county:"mombasa",icon:"⚡",color:"var(--accent-power)"},

  /* ─── WATER ─── */
  {cat:"water",name:"Nairobi Water & Sewerage",phone:"020 3984000",area:"Nairobi",county:"nairobi",icon:"💧",color:"var(--accent-water)"},
  {cat:"water",name:"Nairobi Water Emergency",phone:"0800 721 543",area:"Nairobi – Toll Free",county:"nairobi",icon:"💧",color:"var(--accent-water)"},
  {cat:"water",name:"Mombasa Water Supply",phone:"041 2222973",area:"Mombasa",county:"mombasa",icon:"💧",color:"var(--accent-water)"},
  {cat:"water",name:"Kisumu Water & Sanitation",phone:"057 2023972",area:"Kisumu",county:"kisumu",icon:"💧",color:"var(--accent-water)"},
  {cat:"water",name:"Nakuru Water & Sanitation",phone:"051 2215751",area:"Nakuru",county:"nakuru",icon:"💧",color:"var(--accent-water)"},
  {cat:"water",name:"Eldoret Water & Sanitation",phone:"053 2033541",area:"Uasin Gishu",county:"uasin_gishu",icon:"💧",color:"var(--accent-water)"},
  {cat:"water",name:"WASREB (Regulator)",phone:"020 2733561",area:"Nationwide",county:"all",icon:"💧",color:"var(--accent-water)"},

  /* ─── DISASTER RESPONSE ─── */
  {cat:"disaster",name:"National Disaster Operations Centre",phone:"0800 723 253",area:"Nationwide – Toll Free",county:"all",icon:"🌍",color:"var(--accent-disaster)"},
  {cat:"disaster",name:"National Disaster Management Unit",phone:"020 2211263",area:"Nationwide",county:"all",icon:"🌍",color:"var(--accent-disaster)"},
  {cat:"disaster",name:"Kenya Meteorological Dept",phone:"020 3867880",area:"Nationwide – Weather Alerts",county:"all",icon:"🌦️",color:"var(--accent-disaster)"},
  {cat:"disaster",name:"NEMA (Environment Authority)",phone:"0800 720 543",area:"Nationwide – Environmental",county:"all",icon:"🌿",color:"var(--accent-disaster)"},

  /* ─── CHILD HELPLINE ─── */
  {cat:"child",name:"Childline Kenya",phone:"116",area:"Nationwide – Free Call",county:"all",icon:"👶",color:"var(--accent-child)"},
  {cat:"child",name:"Child Welfare Society of Kenya",phone:"020 2727497",area:"Nationwide",county:"all",icon:"🧒",color:"var(--accent-child)"},
  {cat:"child",name:"UNICEF Kenya",phone:"020 7622034",area:"Nationwide",county:"all",icon:"🌐",color:"var(--accent-child)"},

  /* ─── GBV HOTLINE ─── */
  {cat:"gbv",name:"GBV National Hotline",phone:"1195",area:"Nationwide – Free Call",county:"all",icon:"🛡️",color:"var(--accent-gbv)"},
  {cat:"gbv",name:"FIDA Kenya (Women's Rights)",phone:"0722 509 760",area:"Nationwide",county:"all",icon:"⚖️",color:"var(--accent-gbv)"},
  {cat:"gbv",name:"Gender Violence Recovery Centre",phone:"020 2726300",area:"Nairobi – KNH",county:"nairobi",icon:"🏥",color:"var(--accent-gbv)"},
  {cat:"gbv",name:"Coalition on Violence Against Women",phone:"020 3874296",area:"Nationwide",county:"all",icon:"🤝",color:"var(--accent-gbv)"}
];

var CATEGORIES = {
  police:{label:"National Police",dot:"var(--accent-police)"},
  ambulance:{label:"Ambulance / Red Cross",dot:"var(--accent-ambulance)"},
  fire:{label:"Fire Brigade",dot:"var(--accent-fire)"},
  power:{label:"KPLC / Power",dot:"var(--accent-power)"},
  water:{label:"Water Companies",dot:"var(--accent-water)"},
  disaster:{label:"Disaster Response",dot:"var(--accent-disaster)"},
  child:{label:"Child Helpline",dot:"var(--accent-child)"},
  gbv:{label:"GBV Hotline",dot:"var(--accent-gbv)"}
};

var COUNTIES = [
  {value:"all",label:"All Counties"},
  {value:"nairobi",label:"Nairobi"},
  {value:"mombasa",label:"Mombasa"},
  {value:"kisumu",label:"Kisumu"},
  {value:"nakuru",label:"Nakuru"},
  {value:"uasin_gishu",label:"Uasin Gishu (Eldoret)"},
  {value:"kiambu",label:"Kiambu"},
  {value:"machakos",label:"Machakos"},
  {value:"nyeri",label:"Nyeri"}
];

/* === HELPERS === */
function sanitize(str) {
  // Basic sanitization to prevent XSS in innerHTML
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

function phoneToTel(p) {
  return p ? p.replace(/[\s\-()]/g, '') : '';
}

/* === POPULATE COUNTY SELECTOR === */
var countySelect = document.getElementById('countySelect');
if (countySelect) {
  countySelect.innerHTML = '';
  COUNTIES.forEach(function(c) {
    var opt = document.createElement('option');
    opt.value = c.value;
    opt.textContent = c.label; // textContent is safe
    countySelect.appendChild(opt);
  });
}

/* === RENDER CONTACTS (Robust) === */
function renderContacts() {
  try {
    var countySelect = document.getElementById('countySelect');
    var searchInput = document.getElementById('searchInput');
    var container = document.getElementById('contactList');
    var noResults = document.getElementById('noResults');

    if (!countySelect || !searchInput || !container || !noResults) return;

    var county = countySelect.value;
    var query = searchInput.value.toLowerCase().trim();
    
    // Clear via innerHTML is fine here as we rebuild
    container.innerHTML = '';
    var totalVisible = 0;

    var catKeys = Object.keys(CATEGORIES);
    catKeys.forEach(function(catKey) {
      var catInfo = CATEGORIES[catKey];
      var items = CONTACTS.filter(function(c) {
        if (c.cat !== catKey) return false;
        if (county !== 'all' && c.county !== 'all' && c.county !== county) return false;
        if (query) {
          var haystack = (c.name + ' ' + c.phone + ' ' + c.area).toLowerCase();
          return haystack.indexOf(query) !== -1;
        }
        return true;
      });

      if (items.length === 0) return;
      totalVisible += items.length;

      var section = document.createElement('section');
      section.className = 'cat-section';

      var header = document.createElement('div');
      header.className = 'cat-header';
      // Use proper DOM creation or trusted string
      header.innerHTML =
        '<span class="cat-dot" style="background:' + sanitize(catInfo.dot) + '"></span>' +
        '<h3>' + sanitize(catInfo.label) + '</h3>' +
        '<span class="count">' + items.length + '</span>';
      section.appendChild(header);

      items.forEach(function(c) {
        var tel = phoneToTel(c.phone);
        var a = document.createElement('a');
        a.href = 'tel:' + tel;
        a.className = 'card';
        a.setAttribute('aria-label', 'Call ' + c.name + ' at ' + c.phone);
        // Using sanitize to ensure robustness even with our own data
        a.innerHTML =
          '<span class="card-icon" style="background:' + sanitize(c.color) + '">' + c.icon + '</span>' +
          '<span class="card-body">' +
            '<span class="card-name">' + sanitize(c.name) + '</span>' +
            '<span class="card-area">' + sanitize(c.area) + '</span>' +
          '</span>' +
          '<span class="card-call">' +
            '<span class="card-phone">' + sanitize(c.phone) + '</span>' +
            '<span class="card-call-btn"><svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></span>' +
          '</span>';
        section.appendChild(a);
      });

      container.appendChild(section);
    });

    if (totalVisible === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  } catch (err) {
    console.error("Rendering error:", err);
  }
}

/* === DEBOUNCE FUNCTION (Optimization) === */
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

/* === EVENT LISTENERS === */
if (countySelect) countySelect.addEventListener('change', renderContacts);
var searchInput = document.getElementById('searchInput');
// Debounce search input for performance (wait 15ms or instant is usually fine for this size, but good practice)
if (searchInput) searchInput.addEventListener('input', debounce(renderContacts, 50));

/* === SHARE / COPY === */
function showToast(msg) {
  var toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 2500);
  }
}

var shareBtn = document.getElementById('shareWhatsApp');
if (shareBtn) {
  shareBtn.addEventListener('click', function() {
    var text = encodeURIComponent('🆘 Kenya Emergency Contacts – Save this link!\n\n🚓 Police: 999\n🚑 Red Cross: 1199\n🚒 Fire: 999\n📞 Universal: 112\n⚡ KPLC: 0703 070 707\n👶 Childline: 116\n🛡️ GBV: 1195\n\nFull list: ' + window.location.href);
    window.open('https://wa.me/?text=' + text, '_blank');
  });
}

var copyBtn = document.getElementById('copyLink');
if (copyBtn) {
  copyBtn.addEventListener('click', function() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href).then(function() {
        showToast('Link saved to clipboard!');
      });
    } else {
      showToast('Could not copy link');
    }
  });
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', renderContacts);

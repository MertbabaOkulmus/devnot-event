const teamData = [
  {
    name: "Joshua Henry",
    title: "Chief AI Scientist, OpenAI",
    image: "images/speakers/alper-hankendi.jpg",
    linkedin: "https://www.linkedin.com/in/joshua-henry",
    caption: "Keynote Speaker"
  },
  {
    name: "Leila Zhang",
    title: "VP of Machine Learning, Google",
    image: "images/speakers/emre-toptanci.jpg",
    linkedin: "https://www.linkedin.com/in/leila-zhang"
  },
  {
    name: "Uğur Rivera",
    title: "Founder & CEO, Devnot",
    image: "images/speakers/lemi-orhan-ergin.jpg",
    linkedin: "https://www.linkedin.com/in/ugur-rivera"
  },
  {
    name: "Sofia Kim",
    title: "CTO, QuantumLeap",
    image: "images/speakers/ugur-umutluoglu.jpg"
  }
];

const scheduleData = [
  {
    day: "Salon 1",
    sessions: [
      {
        time: "08:00",
        name: [
          { label: "Joshua Henry", img: "images/speakers/alper-hankendi.jpg" },
          { label: "Joshua Henry", img: "images/speakers/alper-hankendi.jpg" },
          { label: "Joshua Henry", img: "images/speakers/alper-hankendi.jpg" },
        ],
        sessionTitle: "Session: Opening Keynote – The State of AI 2025"
      },
      {
        time: "12:00",
        name: [
          { label: "Leila Zhang", img: "images/speakers/emre-toptanci.jpg" }
        ],
        sessionTitle: "Session: Building Human-Centered AI Products"
      },
      {
        time: "16:00",
        name: [
          { label: "Carlos Rivera", img: "images/speakers/lemi-orhan-ergin.jpg" }
        ],
        sessionTitle: "Session: AI Policy & Regulation – A Global Overview"
      }
    ]
  },
  {
    day: "Salon 2",
    sessions: [
      {
        time: "09:00",
        name: [
          { label: "Leila Zhang", img: "images/speakers/emre-toptanci.jpg" }
        ],
        sessionTitle: "Session: Ethical AI — From Theory to Practice"
      }
    ]
  },
  {
    day: "Salon 3",
    sessions: [
      {
        time: "08:00",
        name: [
          { label: "Joshua Henry", img: "images/speakers/alper-hankendi.jpg" }
        ],
        sessionTitle: "Session: Opening Keynote – The State of AI 2025"
      },
      {
        time: "12:00",
        name: [
          { label: "Leila Zhang", img: "images/speakers/emre-toptanci.jpg" }
        ],
        sessionTitle: "Session: Building Human-Centered AI Products"
      },
      {
        time: "16:00",
        name: [
          { label: "Carlos Rivera", img: "images/speakers/lemi-orhan-ergin.jpg" }
        ],
        sessionTitle: "Session: AI Policy & Regulation – A Global Overview"
      }
    ]
  },
  {
    day: "Salon 4",
    sessions: [
      {
        time: "09:00",
        name: [
          { label: "Leila Zhang", img: "images/speakers/emre-toptanci.jpg" }
        ],
        sessionTitle: "Session: Ethical AI — From Theory to Practice"
      }
    ]
  }
];

const tickets = [
  {
    name: "Early Bird Ticket",
    price: "15.000 ₺",
    date: "Limited Tickets & Until December 22, 2025",
    className: "s2",
    benefits: ["Access to sessions and panels", "Networking opportunities", "All-day snacks and buffet lunch"]
  },
  {
    name: "Standart Ticket",
    price: "17.500 ₺",
    date: "Until March 31, 2026",
    className: "",
    benefits: ["Access to sessions and panels", "Networking opportunities", "All-day snacks and buffet lunch"]
  },
  {
    name: "Last Tickets",
    price: "19.500 ₺",
    date: "Starting from April 1, 2026",
    className: "",
    benefits: ["Access to sessions and panels", "Networking opportunities", "All-day snacks and buffet lunch"]
  }
];

const sliderImages = [
  { src: "images/slider/tls2025-1.jpg" },
  { src: "images/slider/tls2025-2.jpg" },
  { src: "images/slider/tls2025-3.jpg" },
  { src: "images/slider/tls2025-4.jpg" },
  { src: "images/slider/tls2025-5.jpg" },
  { src: "images/slider/tls2025-6.jpg" }
];

const sponsorData = [
  {
    key: "main",
    title: "Main Sponsor",
    items: [
      { name: "Sponsor 1", logo: "images/logo-light/1.webp", url: "https://example.com" },
      { name: "Sponsor 1", logo: "images/logo-light/1.webp", url: "https://example.com" },
      { name: "Sponsor 1", logo: "images/logo-light/1.webp", url: "https://example.com" },
      { name: "Sponsor 1", logo: "images/logo-light/1.webp", url: "https://example.com" }
    ]
  },
  {
    key: "platinum",
    title: "Platinum Sponsors",
    items: [
      { name: "Sponsor 2", logo: "images/logo-light/2.webp", url: "https://example.com" },
      { name: "Sponsor 3", logo: "images/logo-light/3.webp" }
    ]
  },
  {
    key: "gold",
    title: "Gold Sponsors",
    items: [
      { name: "Sponsor 4", logo: "images/logo-light/4.webp", url: "https://example.com" },
      { name: "Sponsor 4", logo: "images/logo-light/4.webp", url: "https://example.com" },
      { name: "Sponsor 4", logo: "images/logo-light/4.webp", url: "https://example.com" },
      { name: "Sponsor 4", logo: "images/logo-light/4.webp", url: "https://example.com" },
      { name: "Sponsor 4", logo: "images/logo-light/4.webp", url: "https://example.com" }
    ]
  }
];

/* ---------------------------
   My Schedule (LocalStorage)
---------------------------- */
const MY_SCHEDULE_STORAGE_KEY = "devnot_my_schedule_tls2026_v1";

function safeJsonParse(str, fallback) {
  try { return JSON.parse(str); } catch (e) { return fallback; }
}

function getMySchedule() {
  const raw = localStorage.getItem(MY_SCHEDULE_STORAGE_KEY);
  const data = safeJsonParse(raw, []);
  return Array.isArray(data) ? data : [];
}

function setMySchedule(list) {
  localStorage.setItem(MY_SCHEDULE_STORAGE_KEY, JSON.stringify(list));
}

function makeId(input) {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .slice(0, 120);
}

function buildSessionId(dayLabel, session) {
  const nameStr = Array.isArray(session.name)
    ? session.name.map(s => s.label).join("-")
    : session.name;
  const base = `${dayLabel}__${session.time}__${session.sessionTitle}__${nameStr}`;
  return makeId(base);
}

function isInMySchedule(sessionId) {
  const list = getMySchedule();
  return list.some(x => x && x.id === sessionId);
}

function addToMySchedule(item) {
  const list = getMySchedule();
  if (list.some(x => x && x.id === item.id)) return;
  list.push(item);
  setMySchedule(list);
}

function removeFromMySchedule(sessionId) {
  const list = getMySchedule().filter(x => x && x.id !== sessionId);
  setMySchedule(list);
}

let __msScrollY = 0;

function lockBodyScroll() {
  if (document.body.classList.contains("ms-modal-open")) return;

  __msScrollY = window.scrollY || window.pageYOffset || 0;

  document.documentElement.classList.add("ms-modal-open");
  document.body.classList.add("ms-modal-open");

  document.body.style.position = "fixed";
  document.body.style.top = `-${__msScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";

  const modal = document.getElementById("my-schedule-modal");
  const content = document.getElementById("my-schedule-content");
  if (modal) {
    modal.style.overscrollBehavior = "contain";
  }
  if (content) {
    content.style.overflowY = "auto";
    content.style.webkitOverflowScrolling = "touch";
    content.style.overscrollBehavior = "contain";
  }
}

function unlockBodyScroll() {
  document.documentElement.classList.remove("ms-modal-open");
  document.body.classList.remove("ms-modal-open");

  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";

  const html = document.documentElement;
  const prevScrollBehavior = html.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  window.scrollTo({ top: __msScrollY, left: 0, behavior: "auto" });

  requestAnimationFrame(() => {
    html.style.scrollBehavior = prevScrollBehavior || "";
  });

  const modal = document.getElementById("my-schedule-modal");
  const content = document.getElementById("my-schedule-content");
  if (modal) modal.style.overscrollBehavior = "";
  if (content) {
    content.style.overflowY = "";
    content.style.webkitOverflowScrolling = "";
    content.style.overscrollBehavior = "";
  }
}

/* ---------------------------
   My Schedule UI
---------------------------- */
function ensureMyScheduleUI() {
  let fab = document.getElementById("my-schedule-fab");
  if (!fab) {
    fab = document.createElement("div");
    fab.id = "my-schedule-fab";
    fab.className = "my-schedule-fab";
    fab.innerHTML = `
      <button id="my-schedule-open-btn" class="btn-main fx-slide" type="button">
        <span>My Schedule</span>
      </button>
    `;
    document.body.appendChild(fab);
  }

  let backdrop = document.getElementById("my-schedule-backdrop");
  let modal = document.getElementById("my-schedule-modal");

  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "my-schedule-backdrop";
    backdrop.className = "my-schedule-modal-backdrop";
    document.body.appendChild(backdrop);
  }

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "my-schedule-modal";
    modal.className = "my-schedule-modal";
    modal.innerHTML = `
      <div class="ms-header">
        <h3 class="ms-title">My Schedule</h3>
        <div class="ms-header-actions">
          <button class="ms-download" id="my-schedule-download-btn" type="button">Planı indir</button>
          <button class="ms-openpng" id="my-schedule-openpng-btn" type="button">PNG'yi aç</button>
          <button class="ms-close" id="my-schedule-close-btn" type="button">✕</button>
        </div>
      </div>
      <div id="my-schedule-export-area">
        <div id="my-schedule-content" class="my-schedule-list"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  if (!backdrop.__initialized) {
    backdrop.style.display = "none";
    backdrop.__initialized = true;
  }
  if (!modal.__initialized) {
    modal.style.display = "none";
    modal.__initialized = true;
  }

  function openModal() {
    renderMyScheduleModalContent();
    backdrop.style.display = "block";
    modal.style.display = "block";
    lockBodyScroll();
  }

  function closeModal() {
    requestAnimationFrame(() => {
      backdrop.style.display = "none";
      modal.style.display = "none";
      unlockBodyScroll();
    });
  }

  async function exportMyScheduleAsPng({ openInNewTab = false } = {}) {
    const m = document.getElementById("my-schedule-modal");
    const area = document.getElementById("my-schedule-export-area");

    if (!m || !area) return;

    renderMyScheduleModalContent();

    if (typeof window.html2canvas !== "function") {
      alert("PNG export için html2canvas yüklenemedi.");
      return;
    }

    const prevMaxH = m.style.maxHeight;
    const prevOverflow = m.style.overflow;
    const prevScrollTop = m.scrollTop;

    try {
      m.classList.add("ms-exporting");
      m.style.maxHeight = "none";
      m.style.overflow = "visible";
      m.scrollTop = 0;

      const scale = Math.max(2, Math.min(3, window.devicePixelRatio || 2));

      const canvas = await window.html2canvas(area, {
        backgroundColor: "#0f1115",
        scale,
        useCORS: true
      });

      const dataUrl = canvas.toDataURL("image/png");

      if (openInNewTab) {
        const w = window.open("", "_blank");
        if (w) {
          w.document.open();
          w.document.write(`
            <!doctype html>
            <html>
              <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Schedule</title>
                <style>
                  body{margin:0;background:#0f1115;color:#fff;font-family:Arial, sans-serif}
                  .wrap{max-width:980px;margin:0 auto;padding:16px}
                  img{width:100%;height:auto;border-radius:14px;border:1px solid rgba(255,255,255,.12)}
                </style>
              </head>
              <body>
                <div class="wrap">
                  <img src="${dataUrl}" alt="My Schedule PNG"/>
                </div>
              </body>
            </html>
          `);
          w.document.close();
        }
        return;
      }

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "my-schedule.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      console.error(e);
      alert("PNG oluşturulurken hata oluştu.");
    } finally {
      m.classList.remove("ms-exporting");
      m.style.maxHeight = prevMaxH;
      m.style.overflow = prevOverflow;
      m.scrollTop = prevScrollTop;
    }
  }

  const openBtn = document.getElementById("my-schedule-open-btn");
  const closeBtn = document.getElementById("my-schedule-close-btn");
  const downloadBtn = document.getElementById("my-schedule-download-btn");
  const openPngBtn = document.getElementById("my-schedule-openpng-btn");

  if (openBtn && !openBtn.__bound) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    });
    openBtn.__bound = true;
  }

  if (closeBtn && !closeBtn.__bound) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
    closeBtn.__bound = true;
  }

  if (downloadBtn && !downloadBtn.__bound) {
    downloadBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      await exportMyScheduleAsPng({ openInNewTab: false });
    });
    downloadBtn.__bound = true;
  }

  if (openPngBtn && !openPngBtn.__bound) {
    openPngBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      await exportMyScheduleAsPng({ openInNewTab: true });
    });
    openPngBtn.__bound = true;
  }

  if (backdrop && !backdrop.__bound) {
    backdrop.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
    backdrop.__bound = true;
  }

  if (!document.__myScheduleEscBound) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
    document.__myScheduleEscBound = true;
  }
}

function updateMyScheduleFabVisibility() {
  ensureMyScheduleUI();
  const fab = document.getElementById("my-schedule-fab");
  const btn = document.getElementById("my-schedule-open-btn");
  const list = getMySchedule();

  if (!fab || !btn) return;

  if (list.length > 0) {
    fab.style.display = "block";
    btn.querySelector("span").textContent = `My Schedule (${list.length})`;
  } else {
    fab.style.display = "none";
  }
}

function triggerMyScheduleAttention() {
  const fab = document.getElementById("my-schedule-fab");
  if (!fab) return;

  fab.classList.remove("attention");
  void fab.offsetWidth;
  fab.classList.add("attention");

  clearTimeout(fab.__attentionTimer);
  fab.__attentionTimer = setTimeout(() => {
    fab.classList.remove("attention");
  }, 1500);
}

function renderMyScheduleModalContent() {
  const content = document.getElementById("my-schedule-content");
  if (!content) return;
  const selected = getMySchedule();
  if (selected.length === 0) {
    content.innerHTML = `<div style="opacity:.85;">You haven't added any sessions yet.</div>`;
    return;
  }
  const items = selected.slice().sort((a, b) => {
    const ta = String(a.time || "");
    const tb = String(b.time || "");
    const tcmp = ta.localeCompare(tb);
    if (tcmp !== 0) return tcmp;
    const da = String(a.day || "");
    const db = String(b.day || "");
    const dcmp = da.localeCompare(db);
    if (dcmp !== 0) return dcmp;
    return String(a.sessionTitle || "").localeCompare(String(b.sessionTitle || ""));
  });

  const timeColorPalette = [
    "#5b8af5",
    "#f59e3a",
    "#3acf8f",
    "#c97af5",
    "#f56b6b",
    "#4dcfea",
    "#f5c842",
    "#f57ab5",
  ];
  const timeColorMap = {};
  let colorIdx = 0;
  items.forEach(item => {
    const t = String(item.time || "");
    if (!(t in timeColorMap)) {
      timeColorMap[t] = timeColorPalette[colorIdx % timeColorPalette.length];
      colorIdx++;
    }
  });

  const groups = {};
  const groupOrder = [];
  items.forEach(item => {
    const t = String(item.time || "");
    if (!groups[t]) { groups[t] = []; groupOrder.push(t); }
    groups[t].push(item);
  });

  let html = "";
  groupOrder.forEach(time => {
    const color = timeColorMap[time] || "rgba(255,255,255,.3)";
    html += `<div class="ms-time-group">`;
    html += `
      <div class="ms-time-group-header">
        <div class="ms-time-group-dot" style="background:${color};"></div>
        <div class="ms-time-group-time">${time}</div>
        <div class="ms-time-group-line"></div>
      </div>
    `;

    groups[time].forEach(item => {
      let speakerHTML = "";
      if (item.speakers && item.speakers.length > 0) {
        speakerHTML = item.speakers.map(sp => `
          <span style="display:inline-flex; align-items:center; gap:5px; background: rgba(255,255,255,0.05); padding: 3px 8px; border-radius: 20px; font-size: 12px;">
            <img src="${sp.img}" style="width:20px; height:20px; border-radius:50%; object-fit:cover;" onerror="this.style.display='none'" />
            <span style="white-space:nowrap;">${sp.label}</span>
          </span>
        `).join("");
      } else if (item.image) {
        const speakerNames = Array.isArray(item.name) ? item.name.join(", ") : item.name;
        speakerHTML = `
          <span style="display:inline-flex; align-items:center; gap:5px; background: rgba(255,255,255,0.05); padding: 3px 8px; border-radius: 20px; font-size: 12px;">
            <img src="${item.image}" style="width:20px; height:20px; border-radius:50%; object-fit:cover;" onerror="this.style.display='none'" />
            <span style="white-space:nowrap;">${speakerNames}</span>
          </span>`;
      } else {
        const speakerNames = Array.isArray(item.name) ? item.name.join(", ") : item.name;
        speakerHTML = `<span style="font-size: 12px; opacity:.8;">${speakerNames}</span>`;
      }

      const dayLabel = String(item.day || "");

      html += `
        <div class="my-schedule-item" data-session-id="${item.id}" style="--ms-bar-color:${color};">
          <div class="ms-item-inner">
            <div class="meta">
              <div class="line1">
                <div class="time" style="font-size:12px; opacity:.55; font-weight:700;">${dayLabel}</div>
                <div class="session">${item.sessionTitle}</div>
              </div>
              <div class="speaker" style="display:flex; flex-wrap:wrap; gap:6px; margin-top:6px;">
                ${speakerHTML}
              </div>
            </div>
            <button class="remove-btn" type="button" data-remove-id="${item.id}">✕</button>
          </div>
        </div>
      `;
    });

    html += `</div>`;
  });

  content.innerHTML = html;

  const removeButtons = content.querySelectorAll("[data-remove-id]");
  removeButtons.forEach(btn => {
    if (btn.__bound) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = e.currentTarget.getAttribute("data-remove-id");
      if (!id) return;
      removeFromMySchedule(id);
      syncScheduleButtonsWithStorage();
      const remaining = getMySchedule();
      if (remaining.length === 0) {
        const modalEl = document.getElementById("my-schedule-modal");
        const backdropEl = document.getElementById("my-schedule-backdrop");
        if (modalEl) modalEl.style.display = "none";
        if (backdropEl) backdropEl.style.display = "none";
        unlockBodyScroll();
        updateMyScheduleFabVisibility();
      } else {
        renderMyScheduleModalContent();
        updateMyScheduleFabVisibility();
      }
    });
    btn.__bound = true;
  });
}

function syncScheduleButtonsWithStorage() {
  const buttons = document.querySelectorAll(".session-add-btn[data-session-id]");

  buttons.forEach(btn => {
    const id = btn.getAttribute("data-session-id");
    if (!id) return;

    const added = isInMySchedule(id);

    if (added) {
      btn.textContent = "Remove";
      btn.classList.add("is-remove");
    } else {
      btn.textContent = "Add";
      btn.classList.remove("is-remove");
    }
  });
}

/* ---------------------------
   Team Cards
---------------------------- */
try {
  const container = document.getElementById('team-container');

  teamData.forEach(member => {
    const cardHTML = `
      <div class="team-card">
        <div class="card-image">
          <img src="${member.image}" alt="${member.name}">
          ${member.caption ? `
            <div class="caption-badge">
              ${member.caption}
            </div>
          ` : ``}
        </div>
        <div class="card-info">
          <h3>${member.name}</h3>
          <span>${member.title}</span>
          ${member.linkedin ? `
            <a class="linkedin" href="${member.linkedin}" target="_blank" rel="noopener">
              <i class="fab fa-linkedin-in"></i>
            </a>
          ` : ``}
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });

} catch (error) { }

/* ---------------------------
   Schedule: responsive render + mobile tabs fully dynamic
---------------------------- */

function isDesktopNow() {
  return window.matchMedia("(min-width: 992px)").matches;
}

function clearScheduleRenders() {
  const scheduleContainer = document.getElementById("schedule-container");
  if (scheduleContainer) scheduleContainer.innerHTML = "";

  const scheduleColumns = document.getElementById("schedule-columns");
  if (scheduleColumns) scheduleColumns.innerHTML = "";
}

function rebuildMobileTabNav() {
  const nav = document.querySelector("#section-schedule .d-tab-nav");
  if (!nav) return;

  nav.innerHTML = scheduleData.map((d, i) => {
    return `
      <li class="${i === 0 ? "active-tab" : ""}">
        <h3>${d.day}</h3>
      </li>
    `;
  }).join("");
}

function applyMobileTabActive(activeIndex) {
  const nav = document.querySelector("#section-schedule .d-tab-nav");
  const scheduleContainer = document.getElementById("schedule-container");
  if (!nav || !scheduleContainer) return;

  const navItems = Array.from(nav.querySelectorAll("li"));
  navItems.forEach((li, i) => {
    if (i === activeIndex) li.classList.add("active-tab");
    else li.classList.remove("active-tab");
  });

  const contentLis = Array.from(scheduleContainer.querySelectorAll(":scope > li"));
  contentLis.forEach((li, i) => {
    li.style.display = (i === activeIndex) ? "block" : "none";
  });
}

function bindMobileTabClicks() {
  const nav = document.querySelector("#section-schedule .d-tab-nav");
  if (!nav) return;

  const items = Array.from(nav.querySelectorAll("li"));
  items.forEach((li, index) => {
    if (li.__bound) return;
    li.addEventListener("click", () => {
      applyMobileTabActive(index);
    });
    li.__bound = true;
  });
}

function renderSchedule() {
  const scheduleContainer = document.getElementById("schedule-container");
  if (!scheduleContainer) return;

  const isDesktop = isDesktopNow();
  let scheduleColumns = document.getElementById("schedule-columns");

  if (!scheduleColumns) {
    scheduleColumns = document.createElement("div");
    scheduleColumns.id = "schedule-columns";
    scheduleContainer.parentNode.insertBefore(scheduleColumns, scheduleContainer);
  }

  if (scheduleContainer.innerHTML === "" && scheduleColumns.innerHTML === "") {
    clearScheduleRenders();
  } else {
    syncScheduleButtonsWithStorage();
    return;
  }

  function renderSpeakers(nameArr) {
    return nameArr.map(speaker => `
      <span style="display:inline-flex; align-items:center; gap:5px; margin-right:6px;">
        <img
          src="${speaker.img}"
          alt="${speaker.label}"
          style="width:24px; height:24px; border-radius:50%; object-fit:cover; flex-shrink:0;"
          onerror="this.src='images/default-avatar.png'; this.onerror=null;" 
        />
        <span>${speaker.label}</span>
      </span>
    `).join("");
  }

  function buildSessionHTML(day, session, sessionId) {
    const isAdded = isInMySchedule(sessionId);
    const speakersData = encodeURIComponent(JSON.stringify(session.name));

    return `
      <div class="schedule-session" data-session-wrap="${sessionId}" style="height: auto; min-height: 80px;">
        <div class="ss-time">${session.time}</div>
        <div class="ss-right" style="height: auto; display: flex; flex-direction: column; justify-content: center;">
          <div>
            <h5 class="ss-title">${session.sessionTitle}</h5>
            <div class="ss-name" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">${renderSpeakers(session.name)}</div>
          </div>
          <div class="ss-actions" style="margin-top: 10px;">
            <button
              class="session-add-btn ${isAdded ? "is-remove" : ""}"
              type="button"
              data-session-id="${sessionId}"
              data-day="${day.day}"
              data-time="${session.time}"
              data-speakers="${speakersData}"
              data-session-title="${session.sessionTitle}"
            >${isAdded ? "Remove" : "Add"}</button>
          </div>
        </div>
      </div>
    `;
  }

  if (!isDesktop) {
    rebuildMobileTabNav();
  }

  scheduleData.forEach((day, dayIndex) => {
    if (!isDesktop) {
      let dayHTML = `<li data-day-index="${dayIndex}">`;
      day.sessions.forEach(session => {
        const sessionId = buildSessionId(day.day, session);
        dayHTML += buildSessionHTML(day, session, sessionId);
      });
      dayHTML += `</li>`;
      scheduleContainer.insertAdjacentHTML("beforeend", dayHTML);
    } else {
      let colHTML = `<div class="schedule-col"><h3 class="schedule-col-title">${day.day}</h3>`;
      day.sessions.forEach(session => {
        const sessionId = buildSessionId(day.day, session);
        colHTML += buildSessionHTML(day, session, sessionId);
      });
      colHTML += `</div>`;
      scheduleColumns.insertAdjacentHTML("beforeend", colHTML);
    }
  });

  if (!isDesktop) {
    bindMobileTabClicks();
    applyMobileTabActive(0);
  }

  const addButtons = document.querySelectorAll(".session-add-btn");
  addButtons.forEach(btn => {
    if (btn.__bound) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const b = e.currentTarget;
      const id = b.getAttribute("data-session-id");

      if (isInMySchedule(id)) {
        removeFromMySchedule(id);
      } else {
        const spData = b.getAttribute("data-speakers");
        const parsedSpeakers = JSON.parse(decodeURIComponent(spData));

        const item = {
          id,
          day: b.getAttribute("data-day"),
          time: b.getAttribute("data-time"),
          speakers: parsedSpeakers,
          sessionTitle: b.getAttribute("data-session-title")
        };
        addToMySchedule(item);
      }

      syncScheduleButtonsWithStorage();
      updateMyScheduleFabVisibility();
      if (!b.classList.contains("is-remove")) triggerMyScheduleAttention();
    });
    btn.__bound = true;
  });

  updateMyScheduleFabVisibility();
}

function initScheduleResponsiveRerender() {
  let prev = isDesktopNow();
  if (document.__scheduleResizeBound) return;

  window.addEventListener("resize", () => {
    const now = isDesktopNow();
    if (now !== prev) {
      prev = now;
      renderSchedule();
    }
  });

  document.__scheduleResizeBound = true;
}

try {
  renderSchedule();
  initScheduleResponsiveRerender();
} catch (error) { }

/* ---------------------------
   Tickets + Slider (varsa)
---------------------------- */
try {
  const ticketContainer = document.getElementById("ticket-container");

  tickets.forEach(ticket => {
    const benefitsHTML = ticket.benefits
      .map(item => `<li>${item}</li>`)
      .join("");

    const ticketHTML = `
    <div class="item">
      <div class="d-ticket ${ticket.className}">
        <img src="images/devnot-logo-2.png" class="w-90px mb-4" alt="">
        <h2>${ticket.name}</h2>
        <h4 class="mb-4">${ticket.price}</h4>
        <div class="fs-14">${ticket.date}</div>
      </div>

      <div class="relative overflow-hidden">
        <div class="py-4 z-2">
          <ul class="ul-check mb-4">
            ${benefitsHTML}
          </ul>
        </div>
        <a class="btn-main fx-slide w-100" href="https://kommunity.com/devnot/events/tech-leaders-summit-2026-3d56d761/tickets/" target="_blank"><span>Buy Ticket</span></a>
      </div>
    </div>
  `;

    ticketContainer.insertAdjacentHTML("beforeend", ticketHTML);
  });

  const sliderContainer = document.getElementById("sliderx");
  if (sliderContainer) {
    sliderImages.forEach((item, index) => {
      const img = document.createElement("img");
      img.src = item.src;
      img.classList.add("slidex");
      if (index === 0) img.classList.add("active");
      sliderContainer.appendChild(img);
    });

    const slides = document.querySelectorAll(".slidex");
    let current = 0;

    function changeSlide() {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }

    setInterval(changeSlide, 3000);
  }

} catch (error) { }

/* ---------------------------
   Sponsors render
---------------------------- */
try {
  const sponsorContainer = document.getElementById("sponsors-container");
  if (sponsorContainer && Array.isArray(sponsorData)) {
    const cats = sponsorData
      .filter(c => c && Array.isArray(c.items) && c.items.length > 0);

    sponsorContainer.innerHTML = `
      <div class="sponsors-header">
        <div class="sponsors-kicker">Sponsors</div>
        <div class="sponsors-title">Partners & Supporters</div>
        <div class="sponsors-desc">
          Our sponsors help make Tech Leaders Summit possible. Explore the brands supporting the community.
        </div>
      </div>
    ` + cats.map(cat => {
      const itemsHTML = cat.items.map(it => {
        const name = it?.name || "Sponsor";
        const logo = it?.logo || "";
        const url = it?.url || "";

        if (!logo) return "";

        if (url) {
          return `
            <a class="sponsor-item is-link" href="${url}" target="_blank" rel="noopener" aria-label="${name}" title="${name}">
              <img src="${logo}" alt="${name}">
            </a>
          `;
        }

        return `
          <div class="sponsor-item" aria-label="${name}" title="${name}">
            <img src="${logo}" alt="${name}">
          </div>
        `;
      }).join("");

      if (!itemsHTML.trim()) return "";

      return `
        <div class="sponsor-cat" data-tier="${cat.key || ""}">
          <div class="sponsor-cat-head">
            <h3 class="sponsor-cat-title">${cat.title || ""}</h3>
          </div>
          <div class="sponsor-grid">
            ${itemsHTML}
          </div>
        </div>
      `;
    }).join("");
  }
} catch (error) { }

(function initHeaderNav() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const toggleBtn = document.getElementById("nav-toggle");
  const closeBtn = document.getElementById("mobile-nav-close");
  const backdrop = document.getElementById("mobile-nav-backdrop");
  const mobileNav = document.getElementById("mobile-nav");

  const desktopLinks = Array.from(document.querySelectorAll(".site-nav .nav-link"));
  const mobileLinks = Array.from(document.querySelectorAll(".mobile-nav .mnav-link"));
  const allLinks = [...desktopLinks, ...mobileLinks].filter(Boolean);

  const sections = [
    "section-about",
    "section-speakers",
    "section-sponsors",
    "section-schedule",
    "section-tickets",
    "section-venue",
    "section-faq",
  ].map(id => document.getElementById(id)).filter(Boolean);

  function setSolidHeader() {
    const y = window.scrollY || 0;
    if (y > 6) header.classList.add("is-solid");
    else header.classList.remove("is-solid");
  }

  function openNav() {
    document.body.classList.add("nav-open");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
    if (mobileNav) mobileNav.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.setAttribute("aria-hidden", "false");
  }

  function closeNav() {
    document.body.classList.remove("nav-open");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
    if (mobileNav) mobileNav.setAttribute("aria-hidden", "true");
    if (backdrop) backdrop.setAttribute("aria-hidden", "true");
  }

  function getHeaderOffset() {
    const h = header.getBoundingClientRect().height || 80;
    return Math.round(h + 10);
  }

  function smoothScrollToHash(hash) {
    if (!hash || hash[0] !== "#") return;
    const el = document.querySelector(hash);
    if (!el) return;

    const top = el.getBoundingClientRect().top + (window.scrollY || 0) - getHeaderOffset();
    window.scrollTo({ top, left: 0, behavior: "smooth" });
  }

  function clearActive() {
    desktopLinks.forEach(a => a.classList.remove("is-active"));
  }

  function setActiveById(id) {
    clearActive();
    const hash = `#${id}`;
    desktopLinks.forEach(a => {
      if ((a.getAttribute("href") || "") === hash) a.classList.add("is-active");
    });
  }

  function updateActiveOnScroll() {
    const y = (window.scrollY || 0) + getHeaderOffset() + 6;

    const nearBottom = (window.innerHeight + (window.scrollY || 0)) >= (document.documentElement.scrollHeight - 4);
    if (nearBottom) {
      const last = sections[sections.length - 1];
      if (last) setActiveById(last.id);
      return;
    }

    let current = null;
    for (const s of sections) {
      if (s.offsetTop <= y) current = s;
    }
    if (current) setActiveById(current.id);
  }

  if (toggleBtn && !toggleBtn.__bound) {
    toggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (document.body.classList.contains("nav-open")) closeNav();
      else openNav();
    });
    toggleBtn.__bound = true;
  }

  if (closeBtn && !closeBtn.__bound) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeNav();
    });
    closeBtn.__bound = true;
  }

  if (backdrop && !backdrop.__bound) {
    backdrop.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeNav();
    });
    backdrop.__bound = true;
  }

  if (!document.__headerEscBound) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
    document.__headerEscBound = true;
  }

  allLinks.forEach(a => {
    if (a.__bound) return;
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#")) {
        e.preventDefault();
        e.stopPropagation();
        closeNav();
        smoothScrollToHash(href);
      }
    });
    a.__bound = true;
  });

  window.addEventListener("scroll", () => {
    setSolidHeader();
    updateActiveOnScroll();
  }, { passive: true });

  setSolidHeader();
  updateActiveOnScroll();
})();
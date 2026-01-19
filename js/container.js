const teamData = [
  {
    "name": "Joshua Henry",
    "title": "Chief AI Scientist, OpenAI",
    "image": "images/speakers/alper-hankendi.jpg"
  },
  {
    "name": "Leila Zhang",
    "title": "VP of Machine Learning, Google",
    "image": "images/speakers/emre-toptanci.jpg"
  },
  {
    "name": "Uğur Rivera",
    "title": "Founder & CEO, Devnot",
    "image": "images/speakers/lemi-orhan-ergin.jpg"
  },
  {
    "name": "Sofia Kim",
    "title": "CTO, QuantumLeap",
    "image": "images/speakers/ugur-umutluoglu.jpg"
  }
];

const scheduleData = [
  {
    day: "Day 1",
    sessions: [
      {
        time: "08:00",
        image: "images/team/1.webp",
        name: "Joshua Henry",
        title: "AI Research Lead, DeepTech Labs",
        sessionTitle: "Session: Opening Keynote – The State of AI 2025",
        description:
          "Kick off the event with an insightful overview of where artificial intelligence is headed. Ava will explore breakthroughs, global shifts, and what’s next in deep learning, generative models, and AI ethics."
      },
      {
        time: "12:00",
        image: "images/team/2.webp",
        name: "Leila Zhang",
        title: "VP of Machine Learning, Google",
        sessionTitle: "Session: Building Human-Centered AI Products",
        description:
          "This session covers how to design AI solutions that prioritize usability, fairness, and real-world impact. Bring your laptop—hands-on UX exercises included."
      },
      {
        time: "16:00",
        image: "images/team/3.webp",
        name: "Carlos Rivera",
        title: "Founder & CEO, NeuralCore",
        sessionTitle: "Session: AI Policy & Regulation – A Global Overview",
        description:
          "Learn how nations and organizations are approaching AI governance, including frameworks for data privacy, bias mitigation, and accountability in model deployment."
      }
    ]
  },
  {
    day: "Day 2",
    sessions: [
      {
        time: "09:00",
        image: "images/team/5.webp",
        name: "Leila Zhang",
        title: "Head of AI Strategy, VisionFlow",
        sessionTitle: "Session: Ethical AI — From Theory to Practice",
        description:
          "Explore how leading companies are implementing fairness, accountability, and transparency in real-world AI systems across healthcare and finance."
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
    benefits: [
      "Access to sessions and panels",
      "Networking opportunities",
      "All-day snacks and buffet lunch"
    ]
  },
  {
    name: "Standart Ticket",
    price: "17.500 ₺",
    date: "Until March 31, 2026",
    className: "",
    benefits: [
      "Access to sessions and panels",
      "Networking opportunities",
      "All-day snacks and buffet lunch"
    ]
  },
  {
    name: "Last Tickets",
    price: "19.500 ₺",
    date: "Starting from April 1, 2026",
    className: "",
    benefits: [
      "Access to sessions and panels",
      "Networking opportunities",
      "All-day snacks and buffet lunch"
    ]
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
  const base = `${dayLabel}__${session.time}__${session.sessionTitle}__${session.name}`;
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

function ensureMyScheduleUI() {
  // Floating Button
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

  // Backdrop + Modal
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
        <button class="ms-close" id="my-schedule-close-btn" type="button">✕</button>
      </div>
      <div id="my-schedule-content" class="my-schedule-list"></div>
    `;
    document.body.appendChild(modal);
  }

  function openModal() {
    renderMyScheduleModalContent();
    backdrop.style.display = "block";
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  const openBtn = document.getElementById("my-schedule-open-btn");
  const closeBtn = document.getElementById("my-schedule-close-btn");

  if (openBtn && !openBtn.__bound) {
    openBtn.addEventListener("click", openModal);
    openBtn.__bound = true;
  }

  if (closeBtn && !closeBtn.__bound) {
    closeBtn.addEventListener("click", closeModal);
    closeBtn.__bound = true;
  }

  if (backdrop && !backdrop.__bound) {
    backdrop.addEventListener("click", closeModal);
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

  // tekrar tekrar tıklanınca animasyonu yeniden başlatmak için:
  fab.classList.remove("attention");
  // reflow trick
  void fab.offsetWidth;
  fab.classList.add("attention");

  // animasyon bitince class'ı kaldır
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
    updateMyScheduleFabVisibility();
    return;
  }

  const dayOrder = scheduleData.map(d => d.day);
  const grouped = selected.reduce((acc, item) => {
    const key = item.day || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  const days = Object.keys(grouped).sort((a, b) => {
    const ia = dayOrder.indexOf(a);
    const ib = dayOrder.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  days.forEach(day => {
    grouped[day].sort((x, y) => String(x.time).localeCompare(String(y.time)));
  });

  let html = "";
  days.forEach(day => {
    html += `<div class="my-schedule-day"><h4>${day}</h4>`;

    grouped[day].forEach(item => {
      html += `
        <div class="my-schedule-item" data-session-id="${item.id}">
          <img src="${item.image}" alt="${item.name}">
          <div class="meta">
            <div class="line1">
              <div class="time">${item.time}</div>
              <div class="session">${item.sessionTitle}</div>
            </div>
            <div class="speaker">${item.name} — ${item.title}</div>
          </div>
          <button class="remove-btn" type="button" data-remove-id="${item.id}">Remove</button>
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
      const id = e.currentTarget.getAttribute("data-remove-id");
      if (!id) return;

      removeFromMySchedule(id);
      syncScheduleButtonsWithStorage();
      renderMyScheduleModalContent();
      updateMyScheduleFabVisibility();
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
        <div class="card-inner">
          <img src="${member.image}" alt="${member.name}">
          <div class="card-info">
            <h3>${member.name}</h3>
            <span>${member.title}</span>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });

} catch (error) {

}

/* ---------------------------
   Event Schedule + Add Buttons
---------------------------- */
try {
  const scheduleContainer = document.getElementById("schedule-container");

  scheduleData.forEach(day => {
    let dayHTML = `<li>`;

    day.sessions.forEach(session => {
      const sessionId = buildSessionId(day.day, session);
      const isAdded = isInMySchedule(sessionId);

      dayHTML += `
      <div class="border-white-bottom-op-2 pb-5 mb-5" data-session-wrap="${sessionId}">
        <div class="row g-4 align-items-center">
          <div class="col-md-1">
            ${session.time}
          </div>
          <div class="col-md-4">
            <div class="d-flex align-items-center">
              <img src="${session.image}" class="w-60px h-60px rounded-1 me-4" alt="${session.name}">
              <div>
                <div class="mb-0">${session.name}</div>
                ${session.title}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h3>${session.sessionTitle}</h3>
            <p class="fs-15 mb-0">${session.description}</p>

            <button
              class="session-add-btn"
              type="button"
              data-session-id="${sessionId}"
              data-day="${day.day}"
              data-time="${session.time}"
              data-image="${session.image}"
              data-name="${session.name}"
              data-title="${session.title}"
              data-session-title="${session.sessionTitle}"
              data-description="${String(session.description).replace(/"/g, "&quot;")}"
              ${isAdded ? 'disabled aria-disabled="true"' : ''}
            >${isAdded ? "Added" : "Add"}</button>
          </div>
        </div>
      </div>
    `;
    });

    dayHTML += `</li>`;
    scheduleContainer.insertAdjacentHTML("beforeend", dayHTML);
  });

  const addButtons = document.querySelectorAll(".session-add-btn[data-session-id]");
  addButtons.forEach(btn => {
    if (btn.__bound) return;

    btn.addEventListener("click", (e) => {
      const b = e.currentTarget;
      const id = b.getAttribute("data-session-id");
      if (!id) return;

      // REMOVE
      if (isInMySchedule(id)) {
        removeFromMySchedule(id);

        syncScheduleButtonsWithStorage();
        updateMyScheduleFabVisibility();
        return;
      }

      // ADD
      const item = {
        id,
        day: b.getAttribute("data-day") || "",
        time: b.getAttribute("data-time") || "",
        image: b.getAttribute("data-image") || "",
        name: b.getAttribute("data-name") || "",
        title: b.getAttribute("data-title") || "",
        sessionTitle: b.getAttribute("data-session-title") || "",
        description: b.getAttribute("data-description") || ""
      };

      addToMySchedule(item);

      syncScheduleButtonsWithStorage();
      updateMyScheduleFabVisibility();
      triggerMyScheduleAttention(); // önce eklediğimiz animasyon
    });

    btn.__bound = true;
  });

  ensureMyScheduleUI();
  updateMyScheduleFabVisibility();
  syncScheduleButtonsWithStorage();

} catch (error) {

}

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

} catch (error) {

}
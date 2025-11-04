
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
        date: "Until December 31, 2025",
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

const file = 'video/4.mp4'; // burada tek dosyanın adını yaz (örn. background.jpg)
const section = document.getElementById('section-hero');

if (file.endsWith('.mp4') || file.endsWith('.webm')) {
    section.setAttribute('data-video-src', `mp4:${file}`);
}
else {
    section.style.backgroundImage = `url('${file}')`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';
}


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


try {
  const scheduleContainer = document.getElementById("schedule-container");

  scheduleData.forEach(day => {
    let dayHTML = `<li>`;

    day.sessions.forEach(session => {
        dayHTML += `
      <div class="border-white-bottom-op-2 pb-5 mb-5">
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
          </div>
        </div>
      </div>
    `;
    });

    dayHTML += `</li>`;
    scheduleContainer.insertAdjacentHTML("beforeend", dayHTML);
});
} catch (error) {
  
}


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
        <a class="btn-main fx-slide w-100" href="tickets.html"><span>Buy Ticket</span></a>
      </div>
    </div>
  `;

    ticketContainer.insertAdjacentHTML("beforeend", ticketHTML);
});
} catch (error) {
  
}




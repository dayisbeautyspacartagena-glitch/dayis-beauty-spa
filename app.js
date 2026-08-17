// ============================================================
// DAYI'S BEAUTY SPA
// Servicios + Carta de precios + Reservas
// ============================================================

const phone = "573244022228";


// ========================================
// SERVICIOS
// ========================================

const services = [

  // MASAJES
  {
    id: 1,
    name: "Masaje Relajante Cuerpo Completo",
    category: "Masajes",
    duration: 60,
    price: 120000,
    description: "Libera el estrés, relaja la tensión muscular y renueva tu energía."
  },

  {
    id: 2,
    name: "Masaje de Espalda y Cuello",
    category: "Masajes",
    duration: 30,
    price: 70000,
    description: "Alivio localizado para reducir la tensión y el cansancio."
  },

  {
    id: 3,
    name: "Masaje de Piernas",
    category: "Masajes",
    duration: 30,
    price: 70000,
    description: "Relaja y revitaliza tus piernas después de un día agotador."
  },

  {
    id: 4,
    name: "Masaje de Pies",
    category: "Masajes",
    duration: 20,
    price: 45000,
    description: "Un momento de descanso y bienestar para tus pies."
  },

  {
    id: 5,
    name: "Masaje Descontracturante",
    category: "Masajes",
    duration: 60,
    price: 135000,
    description: "Técnica enfocada en liberar tensión y relajar zonas musculares cargadas."
  },


  // FACIALES
  {
    id: 6,
    name: "Limpieza Facial Profunda",
    category: "Faciales",
    duration: 60,
    price: 90000,
    description: "Limpia, purifica e hidrata la piel para recuperar su luminosidad."
  },

  {
    id: 7,
    name: "Hidratación Facial",
    category: "Faciales",
    duration: 50,
    price: 80000,
    description: "Devuelve hidratación, frescura y suavidad natural a tu piel."
  },

  {
    id: 8,
    name: "Facial Personalizado",
    category: "Faciales",
    duration: 75,
    price: 110000,
    description: "Tratamiento adaptado especialmente a las necesidades de tu piel."
  },

  {
    id: 9,
    name: "Limpieza Facial Express",
    category: "Faciales",
    duration: 30,
    price: 55000,
    description: "Una limpieza rápida para refrescar y revitalizar tu rostro."
  },


  // CORPORALES
  {
    id: 10,
    name: "Exfoliación Corporal",
    category: "Corporales",
    duration: 50,
    price: 95000,
    description: "Renueva la piel eliminando células muertas y dejándola suave y sedosa."
  },

  {
    id: 11,
    name: "Ritual Corporal Relajante",
    category: "Corporales",
    duration: 90,
    price: 160000,
    description: "Una experiencia completa de relajación, cuidado y bienestar."
  },

  {
    id: 12,
    name: "Hidratación Corporal",
    category: "Corporales",
    duration: 45,
    price: 85000,
    description: "Nutre e hidrata profundamente la piel para dejarla suave y luminosa."
  },


  // CEJAS Y PESTAÑAS
  {
    id: 13,
    name: "Diseño de Cejas",
    category: "Cejas y Pestañas",
    duration: 30,
    price: 35000,
    description: "Diseño personalizado para lograr una forma armoniosa con tu rostro."
  },

  {
    id: 14,
    name: "Cejas Semipermanentes",
    category: "Cejas y Pestañas",
    duration: 40,
    price: 85000,
    description: "Diseño y definición para realzar la belleza natural de tu mirada."
  },

  {
    id: 15,
    name: "Pestañas Pelo a Pelo",
    category: "Cejas y Pestañas",
    duration: 90,
    price: 110000,
    description: "Una mirada definida, elegante y natural."
  },

  {
    id: 16,
    name: "Lifting de Pestañas",
    category: "Cejas y Pestañas",
    duration: 60,
    price: 80000,
    description: "Realza y curva tus pestañas naturales para una mirada más abierta."
  },


  // DEPILACIÓN
  {
    id: 17,
    name: "Depilación de Cejas",
    category: "Depilación",
    duration: 25,
    price: 25000,
    description: "Diseño limpio y armonioso para resaltar tu mirada."
  },

  {
    id: 18,
    name: "Depilación de Axilas",
    category: "Depilación",
    duration: 25,
    price: 30000,
    description: "Depilación con cera para una piel suave y cuidada."
  },

  {
    id: 19,
    name: "Depilación de Piernas",
    category: "Depilación",
    duration: 40,
    price: 60000,
    description: "Disfruta de unas piernas suaves, lisas y cuidadas."
  },

  {
    id: 20,
    name: "Depilación de Brazos",
    category: "Depilación",
    duration: 30,
    price: 45000,
    description: "Elimina el vello y disfruta de una piel suave y uniforme."
  }

];


// ========================================
// FORMATO DE DINERO
// ========================================

const money = value => {

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);

};


// ========================================
// ELEMENTOS
// ========================================

const byId = id => document.getElementById(id);


// ========================================
// HORARIOS
// ========================================

const schedule = {

  weekday: {
    open: 420,
    lunchStart: 720,
    lunchEnd: 780,
    close: 1020
  },

  weekend: {
    open: 480,
    lunchStart: 720,
    lunchEnd: 780,
    close: 900
  }

};


// ========================================
// CONFIGURACIÓN DEL DÍA
// ========================================

function getCfg(date) {

  if (!date) return null;

  const d = new Date('${date}T12:00:00').getDay();

  return d === 0 || d === 6
    ? schedule.weekend
    : schedule.weekday;

}


// ========================================
// VALIDAR HORARIO
// ========================================

function fits(start, duration, cfg) {

  const end = start + duration;

  return (
    start >= cfg.open &&
    end <= cfg.close &&
    !(start < cfg.lunchEnd && end > cfg.lunchStart) &&
    !(start >= cfg.lunchStart && start < cfg.lunchEnd)
  );

}


// ========================================
// MOSTRAR SERVICIOS
// ========================================

function renderServices(category = "todos") {

  const grid = byId("serviceGrid");

  if (!grid) return;

  grid.innerHTML = "";

  // Normalizar texto para evitar problemas con
  // tildes, mayúsculas y espacios
  const normalizeCategory = text => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
  };

  const selectedCategory = normalizeCategory(category);

  const filtered = services.filter(service => {

    if (selectedCategory === "todos") {
      return true;
    }

    const serviceCategory =
      normalizeCategory(service.category);

    return serviceCategory === selectedCategory;
  });


  filtered.forEach(service => {

    const card =
      document.createElement("article");

    card.className = "serviceCard";

    card.innerHTML = `

      <div class="serviceBody">

        <h3>${service.name}</h3>

        <p>
          ${service.description}
        </p>

        <div class="meta">

          <span>
            ◷ ${service.duration} min
          </span>

          <strong class="price">
            ${money(service.price)}
          </strong>

        </div>

        <button
          class="reserveCard"
          data-service="${service.name}"
        >
          ◉ Reservar
        </button>

      </div>

    `;

    grid.appendChild(card);

  });


  // Botones de reservar
  document
    .querySelectorAll(".reserveCard")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          byId("bookingService").value =
            button.dataset.service;

          updateBooking();

          document
            .querySelector("#reserva")
            .scrollIntoView({
              behavior: "smooth"
            });

        }
      );

    });

}
// ========================================
// LLENAR SELECT DE SERVICIOS
// ========================================

function fillServiceSelect() {
  const select = byId("bookingService");
  if (!select) return;
  select.innerHTML = '<option value="">Selecciona un servicio</option>';
  services.forEach(s => {
    const o = document.createElement("option");
    o.value = s.name; o.textContent = s.name;
    select.appendChild(o);
  });
}


// ========================================
// ACTUALIZAR INFORMACIÓN DEL SERVICIO
// ========================================

function updateBooking() {

  const service =
    services.find(
      s =>
        s.name ===
        byId("bookingService").value
    );


  byId("bookingDuration").textContent =
    service
      ? `${service.duration} minutos`
      : "—";


  byId("bookingPrice").textContent =
    service
      ? money(service.price)
      : "$0";


  populateTimes();

}


// ========================================
// HORAS DISPONIBLES
// ========================================

function populateTimes() {

  const select =
    byId("bookingTime");

  const date =
    byId("bookingDate").value;

  const service =
    services.find(
      s =>
        s.name ===
        byId("bookingService").value
    );


  select.innerHTML =
    '<option value="">Selecciona una hora</option>';


  if (!date || !service) {

    select.innerHTML =
      '<option value="">Selecciona fecha y servicio</option>';

    return;

  }


  const cfg =
    getCfg(date);


  for (
    let t = cfg.open;
    t < cfg.close;
    t += 30
  ) {

    if (
      fits(
        t,
        service.duration,
        cfg
      )
    ) {

      const option =
        document.createElement("option");


      option.value =
        `${String(
          Math.floor(t / 60)
        ).padStart(2, "0")}:${String(
          t % 60
        ).padStart(2, "0")}`;


      option.textContent =
        option.value;


      select.appendChild(option);

    }

  }

}


// ========================================
// ERRORES
// ========================================

function showError(message) {

  const error =
    byId("formError");

  error.textContent =
    message;

  error.style.display =
    "block";

}


function clearError() {

  const error =
    byId("formError");

  error.textContent = "";

  error.style.display =
    "none";

}


// ========================================
// DOM
// ========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderServices();

    fillServiceSelect();


    // ============================
    // CATEGORÍAS
    // ============================

    document
      .querySelectorAll(".tab")
      .forEach(tab => {

        tab.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(".tab")
              .forEach(x =>
                x.classList.remove("active")
              );


            tab.classList.add("active");

            renderServices(
              tab.dataset.cat
            );

          }
        );

      });


    // ============================
    // SERVICIO
    // ============================

    byId("bookingService")
      .addEventListener(
        "change",
        updateBooking
      );


    // ============================
    // FECHA
    // ============================

    byId("bookingDate")
      .addEventListener(
        "change",
        () => {

          clearError();

          populateTimes();

        }
      );


    // ============================
    // FECHA MÍNIMA
    // ============================

    const today =
      new Date();


    byId("bookingDate").min =
      `${today.getFullYear()}-${String(
        today.getMonth() + 1
      ).padStart(2, "0")}-${String(
        today.getDate()
      ).padStart(2, "0")}`;


    // ============================
    // DOMICILIO
    // ============================

    const domicilioBox =
      byId("domicilioBox");

    const address =
      byId("bookingAddress");


    document
      .querySelectorAll(
        'input[name="bookingMode"]'
      )
      .forEach(radio => {

        radio.addEventListener(
          "change",
          () => {

            if (
              radio.value ===
              "domicilio" &&
              radio.checked
            ) {

              domicilioBox.style.display =
                "block";

              address.required =
                true;

            } else if (
              radio.value ===
              "spa" &&
              radio.checked
            ) {

              domicilioBox.style.display =
                "none";

              address.required =
                false;

              address.value = "";

            }

          }
        );

      });


    // ============================
    // MENÚ MÓVIL
    // ============================

    const menu =
      document.querySelector(".menu");

    const links =
      document.querySelector(".links");


    if (menu && links) {

      menu.addEventListener(
        "click",
        () =>
          links.classList.toggle("open")
      );


      links
        .querySelectorAll("a")
        .forEach(a => {

          a.addEventListener(
            "click",
            () =>
              links.classList.remove("open")
          );

        });

    }


// ============================
// RESERVA
// ============================

byId("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  clearError();

  const service = services.find(
    s => s.name === byId("bookingService").value
  );

  const date = byId("bookingDate").value;
  const time = byId("bookingTime").value;
  const name = byId("bookingName").value.trim();
  const phoneClient = byId("bookingPhone").value.trim();
  const note = byId("bookingNote").value.trim();

  // NUEVO: modalidad y dirección
  const bookingMode =
    document.querySelector('input[name="bookingMode"]:checked')?.value;

  const bookingAddress =
    byId("bookingAddress").value.trim();

  // Validar datos obligatorios
  if (!service || !date || !time || !name) {
    showError("Completa servicio, fecha, hora y nombre.");
    return;
  }

  // Validar domicilio
  if (bookingMode === "domicilio" && !bookingAddress) {
    showError("Ingresa la dirección donde deseas recibir el servicio.");
    return;
  }

  // Validar horario
  const [h, m] = time.split(":").map(Number);
  const start = h * 60 + m;
  const cfg = getCfg(date);

  if (!fits(start, service.duration, cfg)) {
    showError(
      "Esa hora no está disponible para la duración del servicio."
    );
    populateTimes();
    return;
  }

  // Formato de fecha
  const [y, mo, d] = date.split("-");
  const dateText = `${d}/${mo}/${y}`;

  // Crear mensaje
  let msg =
    `Hola, Dayi's Beauty Spa 💚

Quiero solicitar una reserva:

• Servicio: ${service.name}
• Duración: ${service.duration} minutos
• Fecha: ${dateText}
• Hora: ${time}
• Nombre: ${name}`;

  if (phoneClient) {
    msg += `\n• Mi WhatsApp: ${phoneClient}`;
  }

  if (note) {
    msg += `\n• Nota: ${note}`;
  }

  // MODALIDAD
  if (bookingMode === "domicilio") {

    msg += `\n• Modalidad: 🏠 A domicilio`;

    msg += `\n• Dirección: ${bookingAddress}`;

  } else {

    msg += `\n• Modalidad: 🏢 En el spa`;

    msg += `\n• Ubicación: La Boquilla, KR 13, Cartagena, Colombia`;

  }

  msg += `\n\nQuedo pendiente de la confirmación. ¡Gracias! 💚`;

  // Abrir WhatsApp
  const whatsappURL =
    `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  window.open(whatsappURL, "_blank");
});

  }
);
// =====================================================
// ACORDEÓN DE COMBOS, EXPERIENCIAS Y TARJETAS
// Solo una sección puede estar abierta a la vez
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".toggleOffer");
  const contents = document.querySelectorAll(".offerContent");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const targetId = button.dataset.target;
      const target = document.getElementById(targetId);

      if (!target) return;

      const isOpen = target.classList.contains("open");

      // Cerrar todas las secciones
      contents.forEach(content => {
        content.classList.remove("open");
      });

      // Si estaba cerrada, abrirla
      if (!isOpen) {
        target.classList.add("open");

        // Llevar suavemente al contenido
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }, 50);
      }

    });

  });

});


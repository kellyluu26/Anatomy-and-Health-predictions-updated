const anatomyData = {
  skull: {
    name: "Skull",
    system: "Skeletal system",
    desc: "The skull is a complex group of bones that protects the brain and supports the structures of the face.",
    conditions: ["Skull fracture", "Concussion and head trauma", "Temporomandibular joint disorder"]
  },
  spine: {
    name: "Vertebral Column",
    system: "Skeletal system",
    desc: "The vertebral column is a series of vertebrae that supports the body and surrounds the spinal cord.",
    conditions: ["Scoliosis", "Herniated disc", "Spinal stenosis"]
  },
  ribcage: {
    name: "Rib Cage",
    system: "Skeletal system",
    desc: "The ribs and sternum form a protective cage around important organs including the heart and lungs.",
    conditions: ["Rib fracture", "Costochondritis", "Chest wall deformities"]
  },
  pelvis: {
    name: "Pelvis",
    system: "Skeletal system",
    desc: "The pelvis connects the axial skeleton with the lower limbs and helps transfer body weight during movement.",
    conditions: ["Pelvic fracture", "Hip osteoarthritis", "Sacroiliac joint dysfunction"]
  },
  "arm-bones": {
    name: "Upper Limb Bones",
    system: "Skeletal system",
    desc: "The upper limb includes the humerus, radius, ulna, wrist bones, hand bones, and their associated joints.",
    conditions: ["Fracture", "Dislocation", "Osteoporosis-related injury"]
  },
  "leg-bones": {
    name: "Lower Limb Bones",
    system: "Skeletal system",
    desc: "The lower limbs include the femur, tibia, fibula, ankle, and foot bones that support standing and walking.",
    conditions: ["Stress fracture", "Knee osteoarthritis", "Ankle fracture"]
  },

  "facial-muscles": {
    name: "Facial Muscles",
    system: "Muscular system",
    desc: "Facial muscles create expressions and control movements around the eyes, nose, cheeks, lips, and jaw.",
    conditions: ["Bell's palsy", "Facial muscle weakness", "Jaw-related pain"]
  },
  "chest-muscles": {
    name: "Chest Muscles",
    system: "Muscular system",
    desc: "The pectoral muscles and nearby structures contribute to movement of the upper limbs and stabilization of the shoulder region.",
    conditions: ["Muscle strain", "Pectoralis tear", "Myofascial pain"]
  },
  abdominals: {
    name: "Abdominal Muscles",
    system: "Muscular system",
    desc: "The abdominal wall helps stabilize the trunk, maintain posture, and contribute to breathing and movement.",
    conditions: ["Abdominal strain", "Hernia", "Core weakness"]
  },
  "arm-muscles": {
    name: "Arm Muscles",
    system: "Muscular system",
    desc: "The muscles of the arm and forearm help control movements of the elbow, wrist, and hand.",
    conditions: ["Tendinopathy", "Muscle strain", "Overuse injuries"]
  },
  "leg-muscles": {
    name: "Leg Muscles",
    system: "Muscular system",
    desc: "Major leg muscles help extend and flex the hip and knee and contribute to balance, posture, and locomotion.",
    conditions: ["Hamstring strain", "Muscle cramp", "Achilles tendon injury"]
  },

  lungs: {
    name: "Lungs",
    system: "Respiratory system",
    desc: "The lungs exchange gases between the air and the blood, allowing oxygen to enter the circulation and carbon dioxide to leave it.",
    conditions: ["Asthma", "Pneumonia", "Chronic obstructive pulmonary disease"]
  },
  heart: {
    name: "Heart",
    system: "Cardiovascular system",
    desc: "The heart is a muscular pump that moves blood through the pulmonary and systemic circulations.",
    conditions: ["Coronary artery disease", "Arrhythmia", "Heart failure"]
  },
  liver: {
    name: "Liver",
    system: "Digestive system",
    desc: "The liver performs many functions including metabolism, bile production, nutrient storage, and processing of substances carried in the blood.",
    conditions: ["Fatty liver disease", "Hepatitis", "Cirrhosis"]
  },
  kidneys: {
    name: "Kidneys",
    system: "Urinary system",
    desc: "The kidneys filter blood, produce urine, and help regulate fluid, electrolyte, and acid-base balance.",
    conditions: ["Kidney stones", "Chronic kidney disease", "Urinary tract infection"]
  },
  intestines: {
    name: "Intestines",
    system: "Digestive system",
    desc: "The small and large intestines absorb nutrients and water and help move digestive contents through the gastrointestinal tract.",
    conditions: ["Inflammatory bowel disease", "Irritable bowel syndrome", "Bowel obstruction"]
  }
};

const conditions = [
  {name:"Osteoporosis", system:"skeletal", organ:"Bones", text:"Reduced bone strength that increases the risk of fractures."},
  {name:"Scoliosis", system:"skeletal", organ:"Spine", text:"A condition involving an abnormal sideways curvature of the spine."},
  {name:"Osteoarthritis", system:"skeletal", organ:"Joints", text:"A common joint disorder involving changes to cartilage and other joint tissues."},
  {name:"Muscle Strain", system:"muscular", organ:"Muscles", text:"Overstretching or tearing of muscle fibres."},
  {name:"Tendinopathy", system:"muscular", organ:"Tendons", text:"A broad term for pain and structural changes involving a tendon."},
  {name:"Muscular Dystrophy", system:"muscular", organ:"Muscles", text:"A group of genetic disorders associated with progressive muscle weakness."},
  {name:"Asthma", system:"organ", organ:"Lungs", text:"A chronic respiratory condition involving variable airway narrowing and inflammation."},
  {name:"Pneumonia", system:"organ", organ:"Lungs", text:"An infection involving lung tissue and the air sacs."},
  {name:"Coronary Artery Disease", system:"organ", organ:"Heart", text:"Disease affecting the arteries that supply blood to the heart muscle."},
  {name:"Arrhythmia", system:"organ", organ:"Heart", text:"An abnormal heart rhythm that may be fast, slow, or irregular."},
  {name:"Fatty Liver Disease", system:"organ", organ:"Liver", text:"A condition involving excess fat accumulation in the liver."},
  {name:"Kidney Stones", system:"organ", organ:"Kidneys", text:"Hard mineral deposits that can form within the urinary tract."}
];

let filter = "all";

const $ = (id) => document.getElementById(id);

function go(page) {
  const target = $(`${page}Page`);
  if (!target) return;

  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  target.classList.add("active");

  document.querySelectorAll(".nav").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  window.scrollTo({top: 0, behavior: "smooth"});
}

function selectLayer(layerName) {
  document.querySelectorAll(".layer").forEach((button) => {
    button.classList.toggle("active", button.dataset.layer === layerName);
  });

  document.querySelectorAll(".body-layer").forEach((layer) => {
    layer.classList.remove("active-layer");
  });

  const target = $(`${layerName}Layer`);
  if (target) target.classList.add("active-layer");

  const titles = {
    skeleton: "Skeletal System",
    muscles: "Muscular System",
    organs: "Internal Organs"
  };

  $("layerTitle").textContent = titles[layerName] || "Anatomy";
}

function clearSelections() {
  document.querySelectorAll(".hotspot, .image-hotspot").forEach((element) => {
    element.classList.remove("selected");
  });
}

function showStructure(key) {
  const data = anatomyData[key];
  if (!data) return;

  clearSelections();

  document.querySelectorAll(`[data-key="${key}"]`).forEach((element) => {
    element.classList.add("selected");
  });

  $("infoBox").innerHTML = `
    <p class="eyebrow">${data.system}</p>
    <h3>${data.name}</h3>
    <p>${data.desc}</p>
    <h4>Associated health topics</h4>
    <ul>
      ${data.conditions.map((condition) => `<li>${condition}</li>`).join("")}
    </ul>
  `;
}

function renderConditions() {
  const query = $("search").value.trim().toLowerCase();

  const filtered = conditions.filter((item) => {
    const matchesFilter = filter === "all" || item.system === filter;
    const searchable = `${item.name} ${item.organ} ${item.text}`.toLowerCase();
    return matchesFilter && searchable.includes(query);
  });

  $("conditionGrid").innerHTML = filtered.length
    ? filtered.map((item) => `
        <article class="condition-card">
          <span class="tag">${item.system} · ${item.organ}</span>
          <h3>${item.name}</h3>
          <p>${item.text}</p>
        </article>
      `).join("")
    : `<div class="no-results">No matching conditions found. Try another search term.</div>`;
}

document.querySelectorAll(".nav").forEach((button) => {
  button.addEventListener("click", () => go(button.dataset.page));
});

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => go(button.dataset.go));
});

document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  go("home");
});

document.querySelectorAll(".layer").forEach((button) => {
  button.addEventListener("click", () => selectLayer(button.dataset.layer));
});

document.querySelectorAll(".hotspot, .image-hotspot").forEach((element) => {
  element.addEventListener("click", () => showStructure(element.dataset.key));
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    filter = button.dataset.filter;
    renderConditions();
  });
});

$("search").addEventListener("input", renderConditions);

renderConditions();

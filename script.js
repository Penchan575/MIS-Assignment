const questions = [
  {
    q: "1. How do you prefer to spend a long holiday or weekend?",
    options: [
      { text: "Cozying up in my room, reading novels, or creating artwork.", type: "A" },
      { text: "Planning trips to exciting places or engaging in energetic activities.", type: "B" },
      { text: "Hanging out at cute cafes, chatting, and sharing warm laughs.", type: "C" },
      { text: "Organizing my space, setting life goals, or studying new concepts.", type: "D" },
      { text: "Stargazing, listening to ambient music, and enjoying night solitude.", type: "E" }
    ]
  },
  {
    q: "2. When facing stressful situations or sudden challenges, you usually...",
    options: [
      { text: "Step back into my creative sanctuary to clear my thoughts silently.", type: "A" },
      { text: "Attack the issue directly with instant action and fierce energy.", type: "B" },
      { text: "Reach out to close friends for emotional comfort and gentle advice.", type: "C" },
      { text: "Methodically analyze the root cause with logical step-by-step planning.", type: "D" },
      { text: "Trust my intuitive gut feelings and quietly navigate behind the scenes.", type: "E" }
    ]
  },
  {
    q: "3. What is your favorite aesthetic or style element?",
    options: [
      { text: "Soft pastel pinks, floral motifs, and dreamy artistic touches.", type: "A" },
      { text: "Bold colors, sporty gear, and statement items that exude power.", type: "B" },
      { text: "Ultra-cute, cozy, fluffy, and heartwarming aesthetic.", type: "C" },
      { text: "Sleek, minimalist, elegant, and polished classic attire.", type: "D" },
      { text: "Cosmic, silver, dark starry night, and mysterious dragon energy.", type: "E" }
    ]
  },
  {
    q: "4. When working in a group, what role do you naturally step into?",
    options: [
      { text: "The artistic visioner crafting creative and delicate ideas.", type: "A" },
      { text: "The bold leader taking charge and driving the team forward.", type: "B" },
      { text: "The harmony keeper making sure everyone feels included and happy.", type: "C" },
      { text: "The strategist ensuring accuracy, structure, and flawless execution.", type: "D" },
      { text: "The silent observer bringing unexpected, profound insights.", type: "E" }
    ]
  },
  {
    q: "5. Which description best reflects your core identity?",
    options: [
      { text: "Gentle, artistic, and imaginative with a deep appreciation for beauty.", type: "A" },
      { text: "Passionate, brave, and driven by challenges and high energy.", type: "B" },
      { text: "Sweet, comforting, and joyful, making others feel warm and loved.", type: "C" },
      { text: "Wise, logical, and structured, approaching life with cool composure.", type: "D" },
      { text: "Mysterious, intuitive, and soulful, drawn to quiet depth and truth.", type: "E" }
    ]
  },
  {
    q: "6. At a big social gathering or party, where can you usually be found?",
    options: [
      { text: "In a quiet, cozy corner sharing artistic ideas with a friend.", type: "A" },
      { text: "Center stage, hyping up the crowd or organizing party games.", type: "B" },
      { text: "Making sure everyone has snacks and feels warmly welcomed.", type: "C" },
      { text: "Chatting about interesting facts, news, or deep topics.", type: "D" },
      { text: "On the balcony or garden, gazing at the night sky peacefully.", type: "E" }
    ]
  },
  {
    q: "7. What gives you the deepest sense of fulfillment?",
    options: [
      { text: "Bringing imaginative art and aesthetic beauty into the world.", type: "A" },
      { text: "Conquering tough challenges and reaching ambitious goals.", type: "B" },
      { text: "Seeing loved ones smile and feeling pure, cozy affection.", type: "C" },
      { text: "Solving complex problems and building a well-ordered life.", type: "D" },
      { text: "Uncovering deep truths and understanding the universe's secrets.", type: "E" }
    ]
  },
  {
    q: "8. How do you express intense frustration or anger?",
    options: [
      { text: "Quietly withdraw inward and channel feelings into creative outlets.", type: "A" },
      { text: "Speak out fiercely and directly without holding back.", type: "B" },
      { text: "Feel deeply hurt or tearful, seeking comfort from close ones.", type: "C" },
      { text: "Deliver sharp, cold logic with composed precision.", type: "D" },
      { text: "Become ultra-distant, mysterious, and completely unreadable.", type: "E" }
    ]
  },
  {
    q: "9. If you possessed a magical dragon power, which would you pick?",
    options: [
      { text: "Conjuring illusions of flowers, pastel winds, and art magic.", type: "A" },
      { text: "Unleashing radiant fire breath that clears all obstacles.", type: "B" },
      { text: "Generating a soothing aura that instant-heals tired hearts.", type: "C" },
      { text: "Telepathic wisdom and controlling time's structured flow.", type: "D" },
      { text: "Manipulating moonlight, shadows, and cosmic stardust.", type: "E" }
    ]
  },
  {
    q: "10. How do you offer help when a friend comes to you with a problem?",
    options: [
      { text: "Listen deeply and offer creative, empathetic perspectives.", type: "A" },
      { text: "Give an energetic pep talk: 'Let’s go solve this right now!'", type: "B" },
      { text: "Offer warm hugs, sweet treats, and a safe shoulder to lean on.", type: "C" },
      { text: "Provide a clear pros-and-cons analysis to find the logical path.", type: "D" },
      { text: "Share quiet, profound intuition that cuts straight to the truth.", type: "E" }
    ]
  },
  {
    q: "11. What kind of sanctuary makes your spirit feel at home?",
    options: [
      { text: "A pastel bedroom decorated with fairy lights, art, and novels.", type: "A" },
      { text: "A sunlit mountain peak with breathtaking, endless horizons.", type: "B" },
      { text: "A cozy tea shop overflowing with sweet pastries and warmth.", type: "C" },
      { text: "A quiet, organized private study filled with books and order.", type: "D" },
      { text: "An observatory deck under a clear, starry midnight sky.", type: "E" }
    ]
  },
  {
    q: "12. Which compliment makes your heart flutter most?",
    options: [
      { text: "'Your creativity and aesthetic vision are truly enchanting!'", type: "A" },
      { text: "'You are so brave, energetic, and powerful!'", type: "B" },
      { text: "'Being near you makes my whole day feel sweet and happy!'", type: "C" },
      { text: "'You are exceptionally smart, structured, and dependable!'", type: "D" },
      { text: "'You have such a fascinating, deep, and soulful vibe!'", type: "E" }
    ]
  },
  {
    q: "13. How do you respond to sudden life transitions?",
    options: [
      { text: "Process emotions quietly and express them through personal art.", type: "A" },
      { text: "Charge into the new chapter with excitement and passion.", type: "B" },
      { text: "Seek warmth and companionship to step forward together.", type: "C" },
      { text: "Create a structured roadmap to master the new situation.", type: "D" },
      { text: "Reflect in quiet solitude to align with my inner truth.", type: "E" }
    ]
  },
  {
    q: "14. What trait do you value most in a true companion?",
    options: [
      { text: "Mutual aesthetic appreciation and delicate emotional depth.", type: "A" },
      { text: "Fierce loyalty, honesty, and readiness for adventure.", type: "B" },
      { text: "Sweet kindness, affection, and constant supportive warmth.", type: "C" },
      { text: "Integrity, intellect, and clear rational communication.", type: "D" },
      { text: "Soulful understanding without needing endless words.", type: "E" }
    ]
  },
  {
    q: "15. Which wisdom quote speaks most to your soul?",
    options: [
      { text: "'Beauty, imagination, and art make life truly magical.'", type: "A" },
      { text: "'Courage is the spark that turns dreams into reality.'", type: "B" },
      { text: "'Gentleness and love are the strongest powers on earth.'", type: "C" },
      { text: "'Knowledge, clarity, and reason pave the path to greatness.'", type: "D" },
      { text: "'In silence and starlight, the deepest truths are revealed.'", type: "E" }
    ]
  }
];

const dragonResults = {
  A: {
    title: "🌸 Pastel Breeze Dragon 🐉✨",
    icon: "🌸🐉✨",
    desc: "You are an artistic, dream-weaving dragon with a soul full of poetry and charm! You value peacefulness, aesthetics, floral beauty, and gentle imagination. Your magical aura brings soft elegance and creative light wherever you wander. 🐉💖"
  },
  B: {
    title: "🔥 Sunfire Radiant Dragon 🐉👑",
    icon: "🔥🐉👑",
    desc: "You are a bold, fiery, and fearless dragon hero! Packed with passion and unstoppable drive, you lead with confidence and tackle every challenge head-on. Your blazing spirit brightens the world and inspires everyone to be brave! 🐉💥"
  },
  C: {
    title: "🎀 Soft Fluffy Heart Dragon 🐉🧸",
    icon: "🎀🐉💖",
    desc: "You are an adorable, warmhearted dragon beloved by everyone! Blessed with the power of emotional healing, your sweet presence brings comfort, cozy smiles, and joy to tired hearts. You make the world infinitely sweeter! 🐉🍬"
  },
  D: {
    title: "📜 Crystal Scholar Dragon 🐉💎",
    icon: "💎🐉📜",
    desc: "You are a brilliant, serene crystal dragon of immense wisdom! Cool under pressure with a sharp mind, you value order, logic, and deep understanding. Friends constantly look to your dependable guidance and clear perspective. 🐉✨"
  },
  E: {
    title: "🌙 Midnight Starlight Dragon 🐉🌌",
    icon: "🌌🐉🌙",
    desc: "You are a mysterious, soulful dragon attuned to the cosmic universe! You possess profound intuition, a love for quiet night solitude, and an enchanting depth that captivates others. You see truths that others overlook. 🐉⭐"
  }
};

// Render Questions into Container
function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  questions.forEach((item, index) => {
    const qBlock = document.createElement("div");
    qBlock.classList.add("question-block");

    let optionsHTML = "";
    item.options.forEach((opt) => {
      optionsHTML += `
        <label class="option-label">
          <input type="radio" name="q-${index}" value="${opt.type}">
          ${opt.text}
        </label>
      `;
    });

    qBlock.innerHTML = `
      <div class="question-number">🎀 Question ${index + 1} / ${questions.length}</div>
      <div class="question-text">${item.q}</div>
      <div class="options-group">
        ${optionsHTML}
      </div>
    `;

    container.appendChild(qBlock);
  });
}

// Submit Quiz & Calculate Outcome
function submitQuiz() {
  const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  let answeredCount = 0;

  questions.forEach((_, index) => {
    const selected = document.querySelector(`input[name="q-${index}"]:checked`);
    if (selected) {
      counts[selected.value]++;
      answeredCount++;
    }
  });

  if (answeredCount < questions.length) {
    alert(`Please answer all 15 questions before submitting! (${answeredCount}/${questions.length} answered) 🎀`);
    return;
  }

  // Find dominant dragon type
  let maxType = "A";
  let maxCount = -1;
  for (const type in counts) {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      maxType = type;
    }
  }

  // Render Result Modal
  const resultModal = document.getElementById("result-modal");
  document.getElementById("result-icon").innerText = dragonResults[maxType].icon;
  document.getElementById("result-title").innerText = dragonResults[maxType].title;
  document.getElementById("result-desc").innerText = dragonResults[maxType].desc;

  resultModal.classList.remove("hidden");
  resultModal.scrollIntoView({ behavior: 'smooth' });
}

// Reset Quiz
function resetQuiz() {
  renderQuiz();
  const resultModal = document.getElementById("result-modal");
  resultModal.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", renderQuiz);
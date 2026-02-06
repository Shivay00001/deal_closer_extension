const frameworks = {
    assumptive: [
        "Great, so should we get the setup started for this Monday or would Tuesday work better for your team?",
        "Sounds like a plan. I'll send over the agreement now so we can hit the ground running.",
        "Perfect. Based on what you said, Option B is the best fit. Shall I finalize that for you?"
    ],
    scarcity: [
        "I'd love to lock this in for you today, as our current onboarding slots for this month are almost full.",
        "Just a heads up, the current pricing is only guaranteed until Friday due to high demand.",
        "We only have 2 spots left for the VIP implementation track. Do you want one of them?"
    ],
    social: [
        "Actually, [Competitor/Similar Company] just saw a 30% boost using this exact setup. Want to see their results?",
        "Most of our clients in the [Industry] sector start with this package to ensure quick ROI.",
        "I just helped a client with a similar challenge, and they closed their first deal in 48 hours."
    ],
    objection: [
        "I hear you on the price. If we could spread the cost over 6 months, would that solve the concern?",
        "That's a valid point. However, most users find that the time saved actually covers the cost within 3 months.",
        "What specifically about the [Feature] is making you hesitant? Maybe I can clarify."
    ]
};

document.querySelectorAll('.framework-card').forEach(card => {
    card.addEventListener('click', () => {
        const type = card.getAttribute('data-framework');
        const suggestions = frameworks[type];
        const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];

        displaySuggestion(randomSuggestion);
    });
});

function displaySuggestion(text) {
    const container = document.getElementById('suggestion-container');
    container.innerHTML = `
        <div class="suggestion-text animate-text">
            ${text}
        </div>
        <button class="copy-btn" id="copy-suggestion">Copy to Clipboard</button>
    `;

    document.getElementById('copy-suggestion').addEventListener('click', () => {
        navigator.clipboard.writeText(text);
        const btn = document.getElementById('copy-suggestion');
        btn.innerText = "Copied! ✅";
        setTimeout(() => { btn.innerText = "Copy to Clipboard"; }, 2000);
    });
}

function generateIdea() {
    const ideas = [
        "Start a subscription box service.",
        "Open a coworking space.",
        "Create an online course platform.",
        "Develop a niche market e-commerce store.",
        "Launch a meal prep delivery service.",
        "Offer virtual assistant services.",
        "Create a mobile car wash service.",
        "Start a podcast focused on entrepreneurship.",
        "Develop an app for remote team management.",
        "Create eco-friendly products.",
        "Offer digital marketing consultancy.",
        "Start a blog monetization service.",
        "Develop a personal finance app.",
        "Launch a local tourism guide app.",
        "Create home automation services."
    ];

    const randomIndex = Math.floor(Math.random() * ideas.length);
    const ideaElement = document.getElementById('idea');
    ideaElement.textContent = ideas[randomIndex];
}
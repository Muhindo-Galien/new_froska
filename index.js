function myMenuFunction(){
	let menuBtn = document.getElementById("myNavMenu");
	
	if (menuBtn.className ==="nav-menu"){
		menuBtn.className += " responsive"
	}
	
	else{
		menuBtn.className = "nav-menu";
	}
}

window.onscroll = function() {headerShadow()};

function headerShadow() {
	const navHeader = document.getElementById("header");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
		navHeader.style.height = "70px";
		navHeader.style.lineHeight = "70px";
	}
	
	else {
		navHeader.style.boxShadow = "none";
		navHeader.style.height = "90px";
		navHeader.style.lineHeight = "90px";
	}
}

// ScrollReveal configuration
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true, // Reset animations on scroll
});

// ScrollReveal animations
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100, afterReveal: () => applyGlitchEffect('.featured-name') });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social-icons', { delay: 200 });
sr.reveal('.project-box', { interval: 200 });
sr.reveal('top-header', {});

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true,
});

srLeft.reveal('.featured-image', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true,
});

srRight.reveal('.skills-box', { delay: 100 });

// Glitch effect function
function applyGlitchEffect(selector) {
    const $elements = $(selector);

    $elements.each(function () {
        const $element = $(this);

        // Wrap each word in a span with the 'word' class
        const textContent = $element.text();
        const words = textContent.split(' ');
        const wrappedWords = words.map(word => `<span class="word">${word}</span>`).join(' ');
        $element.html(wrappedWords);

        // Apply the glitch effect to each word
        const $words = $element.find('.word');
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@'.split('');
        const glitchCycles = 5;
        const glitchDuration = 100;

        $words.each(function () {
            const $word = $(this);
            const originalText = $word.text();
            let cycles = glitchCycles;

            function glitchWord() {
                const glitchText = originalText
                    .split('')
                    .map(char => (Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char))
                    .join('');
                $word.text(glitchText);

                if (cycles > 0) {
                    cycles--;
                    setTimeout(glitchWord, glitchDuration);
                } else {
                    $word.text(originalText);
                }
            }

            glitchWord();
        });
    });
}
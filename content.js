/* content.js */
console.log("DealCloser AI Active");

// Add a floating bubble to any chat page
function injectBubble() {
    const bubble = document.createElement('div');
    bubble.id = 'deal-closer-bubble';
    bubble.innerHTML = '🎯';
    bubble.title = 'Open DealCloser AI';

    Object.assign(bubble.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        backgroundColor: '#d4af37',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        zIndex: '999999',
        transition: 'transform 0.2s'
    });

    bubble.addEventListener('mouseenter', () => bubble.style.transform = 'scale(1.1)');
    bubble.addEventListener('mouseleave', () => bubble.style.transform = 'scale(1)');

    bubble.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: "open_panel" });
    });

    document.body.appendChild(bubble);
}

// Inject only if we suspect it's a chat or important page
if (window.location.hostname.includes('whatsapp') ||
    window.location.hostname.includes('linkedin') ||
    window.location.hostname.includes('facebook') ||
    window.location.hostname.includes('telegram')) {
    injectBubble();
}

// Simple Cookie Consent Manager
(function() {
    'use strict';
    
    const COOKIE_NAME = 'daddyfreud_cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;
    
    // Check if consent already given
    function hasConsent() {
        return document.cookie.split(';').some(item => item.trim().startsWith(COOKIE_NAME + '='));
    }
    
    // Set cookie consent
    function setConsent(accepted) {
        const date = new Date();
        date.setTime(date.getTime() + (COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = COOKIE_NAME + "=" + (accepted ? "accepted" : "rejected") + ";" + expires + ";path=/;SameSite=Strict";
        hideBanner();
    }
    
    // Hide banner
    function hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }
    
    // Show banner
    function showBanner() {
        if (hasConsent()) {
            return;
        }
        
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-banner-content">
                <p class="cookie-banner-text">
                    We use cookies and similar technologies to deliver, maintain, and improve our services and for security purposes. 
                    Check our <a href="/legal/privacy.html" class="cookie-link">Privacy Policy</a> for details.
                </p>
                <div class="cookie-banner-actions">
                    <button id="cookie-reject" class="cookie-btn cookie-btn-secondary">Reject All</button>
                    <button id="cookie-accept" class="cookie-btn cookie-btn-primary">Accept All</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        // Event listeners
        document.getElementById('cookie-accept').addEventListener('click', () => setConsent(true));
        document.getElementById('cookie-reject').addEventListener('click', () => setConsent(false));
    }
    
    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showBanner);
    } else {
        showBanner();
    }
})();


// Central configuration for Resume Tailor website
// Update CHROME_EXTENSION_ID once the extension is published

export const CHROME_EXTENSION_ID = "kkhnoaahdlhhgeklkgnfgnffeflmlhai";

// Full Chrome Web Store URL
export const CHROME_STORE_URL = `https://chromewebstore.google.com/detail/resume-tailor/${CHROME_EXTENSION_ID}`;

// API URL for backend (if needed for website features)
export const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.resumetailor.xyz";

// Payment processing handled via DodoPayments in the Chrome extension

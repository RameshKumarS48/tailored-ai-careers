// Central configuration for Resume Tailor website
// Update CHROME_EXTENSION_ID once the extension is published

export const CHROME_EXTENSION_ID = "kkhnoaahdlhhgeklkgnfgnffeflmlhai";

// Full Chrome Web Store URL
export const CHROME_STORE_URL = `https://chromewebstore.google.com/detail/resume-tailor/${CHROME_EXTENSION_ID}`;

// API URL for backend
export const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api-production-c0f4.up.railway.app";

// Payment processing handled via DodoPayments through the backend API

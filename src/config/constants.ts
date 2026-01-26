// Central configuration for Resume Tailor website
// Update CHROME_EXTENSION_ID once the extension is published

export const CHROME_EXTENSION_ID = ""; // Add your extension ID after publishing

// This will be the full Chrome Web Store URL
export const CHROME_STORE_URL = CHROME_EXTENSION_ID
  ? `https://chrome.google.com/webstore/detail/resume-tailor/${CHROME_EXTENSION_ID}`
  : "https://chrome.google.com/webstore"; // Fallback before publishing

// API URL for backend (if needed for website features)
export const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.resumetailor.xyz";

// Paddle configuration (for future use)
export const PADDLE_CLIENT_TOKEN = import.meta.env.VITE_PADDLE_CLIENT_TOKEN || "";
export const PADDLE_ENVIRONMENT = import.meta.env.VITE_PADDLE_ENV || "sandbox";

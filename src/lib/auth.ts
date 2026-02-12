import { apiRequest } from "./api";

const TOKEN_KEY = "rt_token";
const USER_KEY = "rt_user";

export interface User {
  id: string;
  email: string;
  full_name?: string | null;
  credits_remaining?: number | null;
}

interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser(): User | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveAuth(data: AuthResponse) {
  localStorage.setItem(TOKEN_KEY, data.access_token);
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export async function login(email: string, password: string): Promise<User> {
  const data = await apiRequest<AuthResponse>("/auth/login", "POST", {
    email,
    password,
  });
  saveAuth(data);
  return data.user;
}

export async function signup(
  email: string,
  password: string,
  fullName?: string
): Promise<User> {
  const data = await apiRequest<AuthResponse>("/auth/register", "POST", {
    email,
    password,
    full_name: fullName || undefined,
  });
  saveAuth(data);
  return data.user;
}

export async function fetchCurrentUser(): Promise<User | null> {
  const token = getToken();
  if (!token) return null;
  try {
    const user = await apiRequest<User>("/auth/me", "GET", undefined, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  } catch {
    clearAuth();
    return null;
  }
}

export function isLoggedIn(): boolean {
  return !!getToken();
}

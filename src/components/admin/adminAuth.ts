const ADMIN_SESSION_KEY = "rwh_admin_session";

export function isAdminLoggedIn() {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
}

export function setAdminLoggedIn(value: boolean) {
  if (typeof window === "undefined") return;
  if (value) {
    window.sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
  } else {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, LogIn, LogOut, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHROME_STORE_URL } from "@/config/constants";
import { isLoggedIn, getStoredUser, clearAuth, getToken } from "@/lib/auth";
import { apiRequest } from "@/lib/api";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [credits, setCredits] = useState<number | null>(null);
  const user = loggedIn ? getStoredUser() : null;

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, [location]);

  useEffect(() => {
    if (!loggedIn) {
      setCredits(null);
      return;
    }

    const fetchCredits = async () => {
      try {
        const token = getToken();
        const data = await apiRequest<{ credits_remaining: number }>(
          "/credits/balance",
          "GET",
          undefined,
          token
        );
        setCredits(data.credits_remaining);
      } catch {
        // Non-critical
      }
    };

    fetchCredits();
  }, [loggedIn]);

  const handleLogout = () => {
    clearAuth();
    setLoggedIn(false);
    setCredits(null);
    setIsOpen(false);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Resume<span className="gradient-text">Tailor</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {loggedIn ? (
              <>
                {credits !== null && (
                  <Link
                    to="/pricing"
                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <CreditCard className="w-4 h-4" />
                    {credits} credits
                  </Link>
                )}
                <span className="text-sm text-muted-foreground truncate max-w-[160px]">
                  {user?.email}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/login" className="text-muted-foreground hover:text-foreground">
                    <LogIn className="w-4 h-4 mr-1" />
                    Sign In
                  </Link>
                </Button>
                <Button variant="gradient" size="default" asChild>
                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Chrome — Free
                  </a>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <nav className="container-wide mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors hover:text-primary ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {loggedIn ? (
                <>
                  {credits !== null && (
                    <Link
                      to="/pricing"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-base font-medium text-primary py-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      {credits} credits
                    </Link>
                  )}
                  <div className="text-sm text-muted-foreground py-1 truncate">
                    {user?.email}
                  </div>
                  <Button
                    variant="heroOutline"
                    size="lg"
                    className="mt-2"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium py-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sign In
                  </Link>
                  <Button variant="gradient" size="lg" className="mt-2" asChild>
                    <a
                      href={CHROME_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Add to Chrome — Free
                    </a>
                  </Button>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

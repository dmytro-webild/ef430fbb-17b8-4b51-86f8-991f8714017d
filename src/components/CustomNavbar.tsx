import { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";

interface CustomNavbarProps {
  navItems: { name: string; href: string }[];
}

export default function CustomNavbar({ navItems }: CustomNavbarProps) {
  const [activeTab, setActiveTab] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    setActiveTab(name);
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header data-section="navbar" className="fixed top-0 left-0 right-0 z-50 bg-[#050714]/90 backdrop-blur-md border-b border-blue-500/20 px-4 lg:px-8 py-3">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative flex items-center justify-center size-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-700 p-[1px] shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <div className="size-full bg-[#080d21] rounded-[7px] flex items-center justify-center">
              <svg className="size-5 text-blue-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10a6 6 0 1 0-6 6h6" />
                <path d="M12 4v12" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-white font-sans italic leading-none">
              COMPUSTER
            </span>
            <span className="text-[8px] font-semibold tracking-[0.25em] text-blue-400 font-mono mt-0.5">
              BUILT FOR BETTER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.name || (item.name === "Home" && activeTab === "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={`relative py-1 transition-colors ${
                  isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side Actions: Search Bar & Icons */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search products, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#0b1022] border border-blue-500/25 rounded-full pl-4 pr-9 py-1.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/50 w-44 lg:w-60 transition-all"
            />
            <Search className="absolute right-3 size-3.5 text-gray-400 pointer-events-none" />
          </div>

          {/* User Icon */}
          <button className="p-2 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-full transition-colors" aria-label="User account">
            <User className="size-4.5" />
          </button>

          {/* Wishlist Icon */}
          <button className="p-2 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-full transition-colors relative" aria-label="Wishlist">
            <Heart className="size-4.5" />
          </button>

          {/* Cart Icon with badge */}
          <button className="p-2 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-full transition-colors relative" aria-label="Shopping Cart">
            <ShoppingBag className="size-4.5" />
            <span className="absolute top-0 right-0 size-4 bg-blue-600 rounded-full text-[10px] font-bold text-white flex items-center justify-center shadow-[0_0_8px_#2563eb]">
              0
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-3 pt-3 border-t border-blue-500/20 flex flex-col gap-3">
          <div className="relative flex items-center my-1">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0b1022] border border-blue-500/25 rounded-full pl-4 pr-9 py-2 text-xs text-white placeholder-gray-400 focus:outline-none"
            />
            <Search className="absolute right-3 size-4 text-gray-400 pointer-events-none" />
          </div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.name)}
              className="py-2 text-sm text-gray-200 hover:text-white hover:bg-blue-500/10 px-3 rounded-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

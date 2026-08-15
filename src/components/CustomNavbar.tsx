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
    <header data-section="navbar" className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/95 backdrop-blur-md border-b border-[#182238] px-4 lg:px-8 py-2.5">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative flex items-center justify-center size-10 rounded-xl bg-[#09152e] border border-blue-500/40 p-1 shadow-[0_0_20px_rgba(37,99,235,0.35)]">
            <svg className="size-5 text-blue-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10" />
              <path d="M12 6a6 6 0 1 0 6 6" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider text-white font-sans italic leading-none">
              COMPUSTER
            </span>
            <span className="text-[8px] font-semibold tracking-[0.2em] text-blue-400 font-mono mt-0.5">
              BUILT FOR BETTER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.name || (item.name === "Home" && activeTab === "");
            
            // Format name if "Build PC" to display nicely
            const isBuildPc = item.name === "Build PC";

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={`relative py-1 transition-colors flex items-center text-center ${
                  isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                {isBuildPc ? (
                  <span className="leading-tight text-xs text-left">
                    Build<br />PC
                  </span>
                ) : (
                  <span>{item.name}</span>
                )}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side Actions: Search Bar & Icons */}
        <div className="hidden sm:flex items-center gap-5">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search products, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#0f172a]/80 border border-[#23314d] rounded-full pl-4 pr-9 py-1.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/50 w-48 lg:w-64 transition-all"
            />
            <Search className="absolute right-3 size-3.5 text-gray-400 pointer-events-none" />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 text-gray-300">
            <button className="hover:text-white transition-colors p-1" aria-label="Account">
              <User className="size-5" />
            </button>
            <button className="hover:text-white transition-colors p-1" aria-label="Wishlist">
              <Heart className="size-5" />
            </button>
            <button className="relative hover:text-white transition-colors p-1" aria-label="Shopping Cart">
              <ShoppingBag className="size-5" />
              <span className="absolute -top-1 -right-1 size-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-[#080d1a]">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-gray-800 flex flex-col gap-3 pb-2">
          {/* Search in mobile */}
          <div className="relative flex items-center mb-2">
            <input
              type="text"
              placeholder="Search products, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0f172a] border border-[#23314d] rounded-full pl-4 pr-9 py-2 text-xs text-white placeholder-gray-400 focus:outline-none"
            />
            <Search className="absolute right-3 size-4 text-gray-400 pointer-events-none" />
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={`py-1.5 px-2 rounded-md text-sm font-medium ${
                  activeTab === item.name ? "bg-blue-600/20 text-blue-400 font-semibold" : "text-gray-300 hover:bg-gray-800/50"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2 border-t border-gray-800/60 text-gray-300">
            <button className="flex items-center gap-2 text-xs font-medium hover:text-white p-1">
              <User className="size-4" /> Account
            </button>
            <button className="flex items-center gap-2 text-xs font-medium hover:text-white p-1">
              <Heart className="size-4" /> Saved
            </button>
            <button className="flex items-center gap-2 text-xs font-medium hover:text-white p-1">
              <ShoppingBag className="size-4" /> Cart (0)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

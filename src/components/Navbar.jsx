import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";
import { navigation } from "../data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6">
      {/* =========================
          MAIN NAVBAR
      ========================== */}
      <nav
        className={`
          mx-auto flex max-w-7xl items-center justify-between
          rounded-[24px] border
          px-4 py-3
          transition-all duration-500
          sm:px-5
          ${
            scrolled
              ? `
                border-white/10
                bg-[#090909]/90
                shadow-[0_15px_50px_rgba(0,0,0,0.35)]
                backdrop-blur-2xl
              `
              : `
                border-white/[0.08]
                bg-black/30
                backdrop-blur-xl
              `
          }
        `}
      >
        {/* =========================
            BRAND
        ========================== */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          {/* Logo */}
          <div
            className="
              relative flex
              h-11 w-11
              items-center justify-center
              overflow-hidden
              rounded-2xl
              border border-white/10
             
              transition-all duration-300
              group-hover:scale-105
              group-hover:border-[#d6a85f]/50
              sm:h-12 sm:w-12
            "
          >
            <img
              src="/logo.png"
              alt="Starlit Civilians"
              className="
                h-full
                w-full
                object-contain
                
              "
            />

            {/* subtle shine */}
            <span
              className="
                pointer-events-none
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </div>

          {/* Brand text */}
          <div className="leading-none">
            <div className="flex items-center gap-2">
              <span
                className="
                  font-serif
                  text-[17px]
                  font-semibold
                  tracking-[0.14em]
                  text-white
                  sm:text-lg
                "
              >
                STARLIT
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#d6a85f] sm:block" />
            </div>

            <div className="mt-1 flex items-center gap-2">
              <span
                className="
                  text-[8px]
                  font-medium
                  tracking-[0.3em]
                  text-[#d6a85f]
                  sm:text-[9px]
                "
              >
                CIVILIANS
              </span>

              <span
                className="
                  hidden
                  text-[7px]
                  tracking-[0.15em]
                  text-stone-500
                  sm:inline
                "
              >
                • BHUBANESWAR
              </span>
            </div>
          </div>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                group relative
                rounded-full
                px-4
                py-2.5
                text-[13px]
                font-medium
                transition-all
                duration-300

                ${
                  isActive
                    ? "text-[#f0c982]"
                    : "text-stone-400 hover:bg-white/[0.05] hover:text-white"
                }
              `}
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {/* Active indicator */}
                  <span
                    className={`
                      absolute
                      bottom-1
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#d6a85f]
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-4 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* =========================
            DESKTOP RESERVE BUTTON
        ========================== */}
        <div className="hidden lg:block">
          <a
            href="tel:+919040487979"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-[#d6a85f]/40
              bg-[#d6a85f]
              px-5
              py-2.5
              text-[13px]
              font-semibold
              text-black
              shadow-[0_5px_25px_rgba(214,168,95,0.15)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#f0c982]
              hover:shadow-[0_8px_30px_rgba(214,168,95,0.25)]
            "
          >
            <FiPhone
              size={14}
              className="transition-transform duration-300 group-hover:rotate-12"
            />

            <span>Reserve</span>

            <FiArrowUpRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            text-white
            transition-all
            duration-300
            hover:border-[#d6a85f]/40
            hover:bg-[#d6a85f]/10
            lg:hidden
          "
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`
          mx-1
          overflow-hidden
          transition-all
          duration-500
          lg:hidden
          ${
            open
              ? "mt-2 max-h-[600px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            rounded-[26px]
            border
            border-white/10
            bg-[#0b0b0b]/95
            p-3
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            backdrop-blur-2xl
          "
        >
          {/* Mobile menu heading */}
          <div
            className="
              mb-2
              flex
              items-center
              justify-between
              rounded-2xl
              bg-white/[0.035]
              px-4
              py-3
            "
          >
            <div>
              <p className="text-[10px] font-medium tracking-[0.25em] text-[#d6a85f]">
                EXPLORE
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Starlit Civilians
              </p>
            </div>

            <span className="text-[10px] tracking-wider text-stone-600">
              BBSR
            </span>
          </div>

          {/* Links */}
          <div className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-4
                  py-3.5
                  text-sm
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-[#d6a85f]/10 text-[#f0c982]"
                      : "text-stone-300 hover:bg-white/[0.05] hover:text-white"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>

                    <FiArrowUpRight
                      size={15}
                      className={`
                        transition-all duration-300
                        ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-1 opacity-0"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile reservation */}
          <a
            href="tel:+919040487979"
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-[#d6a85f]
              px-4
              py-3.5
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:bg-[#f0c982]
            "
          >
            <FiPhone size={15} />

            <span>Reserve a Table</span>

            <FiArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
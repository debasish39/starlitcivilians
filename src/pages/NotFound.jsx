import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiHome,
  FiArrowUpRight,
} from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] px-6 py-32 text-white">

      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d6a85f]/[0.06] blur-[120px]" />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <section className="relative z-10 mx-auto max-w-2xl text-center">

        {/* Small Label */}
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d6a85f]" />

          <span className="text-[10px] font-medium tracking-[0.3em] text-stone-400">
            STARLIT CIVILIANS
          </span>
        </div>

        {/* 404 */}
        <h1
          className="
            font-serif
            text-[120px]
            font-medium
            leading-none
            tracking-[-0.05em]
            text-white
            sm:text-[170px]
          "
        >
          404
        </h1>

        {/* Gold line */}
        <div className="mx-auto mt-5 h-px w-16 bg-[#d6a85f]" />

        {/* Heading */}
        <h2 className="mt-7 font-serif text-3xl font-medium sm:text-4xl">
          This table is unavailable.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-stone-400 sm:text-base">
          Looks like you've wandered somewhere that isn't on our menu.
          Let's get you back to the main dining experience.
        </p>

        {/* =========================
            BUTTONS
        ========================== */}

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

          {/* Home */}
          <Link
            to="/"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#d6a85f]
              px-6
              py-3
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#f0c982]
              hover:shadow-[0_10px_35px_rgba(214,168,95,0.2)]
            "
          >
            <FiHome size={15} />

            <span>Back Home</span>

            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.035]
              px-6
              py-3
              text-sm
              font-medium
              text-stone-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.07]
              hover:text-white
            "
          >
            <FiArrowLeft size={15} />

            <span>Go Back</span>
          </button>
        </div>

        {/* Footer text */}
        <p className="mt-12 text-[10px] uppercase tracking-[0.25em] text-stone-600">
          Elevated dining · Vibrant nights · Bhubaneswar
        </p>
      </section>
    </main>
  );
}
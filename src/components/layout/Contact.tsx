"use client";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="w-full bg-krut-dark text-krut-bg pt-32 pb-12 overflow-hidden relative"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 flex flex-col min-h-[60vh] justify-between">
        {/* Main Header */}
        <div>
          <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-display font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            LET&apos;S
            <br />
            BUILD
            <br />
            SOMETHING.
          </h2>
          <p className="font-mono text-sm md:text-base uppercase tracking-widest text-krut-muted max-w-md">
            HAVE AN IDEA? LET&apos;S TURN IT INTO A PRODUCT.
          </p>
        </div>

        {/* Interaction Area */}
        <div className="mt-24 mb-32 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-center">
          <button className="bg-krut-bg text-krut-dark px-12 py-6 font-body text-sm font-bold uppercase tracking-[0.2em] hover:bg-krut-accent hover:text-white transition-colors relative group">
            <span className="relative z-10">START A CONVERSATION &rarr;</span>
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-krut-bg group-hover:border-krut-accent transition-colors"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-krut-bg group-hover:border-krut-accent transition-colors"></div>
          </button>

          <div className="flex flex-col md:flex-row gap-8 font-mono text-sm uppercase tracking-widest text-krut-bg/80">
            <a
              href="mailto:hello@example.com"
              className="hover:text-krut-accent transition-colors pb-1 border-b border-transparent hover:border-krut-accent"
            >
              EMAIL
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-krut-accent transition-colors pb-1 border-b border-transparent hover:border-krut-accent"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/KITTU223"
              target="_blank"
              rel="noreferrer"
              className="hover:text-krut-accent transition-colors pb-1 border-b border-transparent hover:border-krut-accent"
            >
              GITHUB
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer border-t border-krut-lines/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-mono text-xs uppercase tracking-widest text-krut-muted">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="font-bold text-krut-bg">KRUTARTH CHAUHAN</div>
            <div>FULL STACK DEVELOPER</div>
            <div>FOUNDER / KRUTONIC</div>
            <div>GUJARAT, INDIA</div>
          </div>

          <div className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-8">
            <div className="flex gap-4">
              <a href="#work" className="hover:text-krut-bg transition-colors">
                WORK
              </a>
              <a href="#about" className="hover:text-krut-bg transition-colors">
                ABOUT
              </a>
            </div>
            <div>
              &copy; {currentYear} KRUTARTH CHAUHAN. BUILD / MOVE / REPEAT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

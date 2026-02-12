export function Hero() {
  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/registration");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(65, 109, 25, 0.7), rgba(65, 109, 25, 0.7)), url('https://images.unsplash.com/photo-1658227665335-9cc3da774f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2QlMjBzdW5zZXR8ZW58MXx8fHwxNzcwNTA1ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center max-w-5xl mx-auto">
        <h1
          className="mb-6 text-white"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(42px, 8vw, 64px)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          Сонцестояння
        </h1>

        <p
          className="mb-10 text-white max-w-2xl mx-auto"
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: "clamp(18px, 2.5vw, 24px)",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Унікальний літній фестиваль етнічної музики та культури серед природи.
          Відчуй магію української традиції під зоряним небом.
        </p>
        <a href="/registration" onClick={handleRegisterClick}>
          <button
            className="px-12 py-5 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: "#FFF67E",
              color: "#416D19",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(16px, 2vw, 20px)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Купити квиток
          </button>
        </a>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white">
          <div className="text-center">
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1,
              }}
            >
              25-27
            </div>
            <div style={{ fontSize: "16px", marginTop: "8px", opacity: 0.9 }}>
              Червня 2026
            </div>
          </div>

          <div className="h-16 w-px bg-white opacity-30 hidden sm:block"></div>

          <div className="text-center">
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1,
              }}
            >
              50+
            </div>
            <div style={{ fontSize: "16px", marginTop: "8px", opacity: 0.9 }}>
              Артистів
            </div>
          </div>

          <div className="h-16 w-px bg-white opacity-30 hidden sm:block"></div>

          <div className="text-center">
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1,
              }}
            >
              3
            </div>
            <div style={{ fontSize: "16px", marginTop: "8px", opacity: 0.9 }}>
              Сцени
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

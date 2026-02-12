export function Header() {
  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/registration");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
      style={{
        backgroundColor: "rgba(65, 109, 25, 0.85)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side - Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/Midsommar.png"
            alt="Midsommar Festival"
            className="h-12 w-auto"
            style={{ objectFit: "contain" }}
          />
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#FFFFFF",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            MIDSOMMAR FESTIVAL
          </h1>
        </div>

        {/* Right Side - Navigation & CTA */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {["Про фестиваль", "Лайн-ап", "Контакти"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "16px",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          <a href="/registration" onClick={handleRegisterClick}>
            <button
              className="px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#FFF67E",
                color: "#416D19",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Реєстрація
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

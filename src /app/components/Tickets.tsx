import { Check } from "lucide-react";

export function Tickets() {
  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/registration");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  const ticketTypes = [
    {
      name: "Стандарт",
      price: "1 500",
      description: "Базовий квиток на всі три дні",
      features: [
        "Доступ до всіх сцен",
        "Базовий кемпінг",
        "Вода та душ",
        "Зона фуд-кортів",
      ],
      popular: false,
    },
    {
      name: "Комфорт",
      price: "2 500",
      description: "Підвищений комфорт та додаткові переваги",
      features: [
        "Усі переваги Стандарт",
        "Комфортний кемпінг",
        "VIP зона",
        "Доступ до майстер-класів",
        "Фірмовий мерч",
      ],
      popular: true,
    },
    {
      name: "Преміум",
      price: "4 200",
      description: "Максимальний комфорт та ексклюзив",
      features: [
        "Усі переваги Комфорт",
        "Окремі душові та туалети",
        "Backstage тури",
        "Зустріч з артистами",
        "Персональний координатор",
        "Паркінг біля входу",
      ],
      popular: false,
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center mb-6"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 48px)",
            color: "#416D19",
            lineHeight: 1.2,
          }}
        >
          Квитки
        </h2>

        <p
          className="text-center mb-16 max-w-2xl mx-auto"
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: "18px",
            color: "#416D19",
            opacity: 0.8,
          }}
        >
          Оберіть свій рівень комфорту та купуйте квитки за спеціальною раннью
          ціною
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ticketTypes.map((ticket, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 relative"
              style={{
                backgroundColor: "#FFFFFF",
                border: ticket.popular
                  ? "3px solid #9BCF53"
                  : "1px solid #E5E7EB",
                boxShadow: ticket.popular
                  ? "0 10px 40px rgba(155, 207, 83, 0.3)"
                  : "none",
              }}
            >
              {ticket.popular && (
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full"
                  style={{
                    backgroundColor: "#9BCF53",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#416D19",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Популярний
                </div>
              )}

              <h3
                className="mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  color: "#416D19",
                  lineHeight: 1.2,
                }}
              >
                {ticket.name}
              </h3>

              <div className="mb-4">
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "48px",
                    color: "#416D19",
                    lineHeight: 1,
                  }}
                >
                  {ticket.price}
                </span>
                <span
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "18px",
                    color: "#416D19",
                    opacity: 0.6,
                    marginLeft: "8px",
                  }}
                >
                  грн
                </span>
              </div>

              <p
                className="mb-8"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "16px",
                  color: "#416D19",
                  opacity: 0.7,
                  lineHeight: 1.5,
                }}
              >
                {ticket.description}
              </p>

              <ul className="mb-8 space-y-4">
                {ticket.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#9BCF53" }}
                    >
                      <Check size={14} style={{ color: "#416D19" }} />
                    </div>
                    <span
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        fontSize: "16px",
                        color: "#416D19",
                        lineHeight: 1.5,
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="/registration" onClick={handleRegisterClick}>
                <button
                  className="w-full py-4 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: ticket.popular ? "#FFF67E" : "#9BCF53",
                    color: "#416D19",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Купити квиток
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

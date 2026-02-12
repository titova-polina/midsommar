import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#416D19' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                color: '#FFF67E',
                lineHeight: 1.2
              }}
            >
              Сонцестояння
            </h3>
            <p 
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '16px',
                color: '#FFFFFF',
                lineHeight: 1.6,
                opacity: 0.9
              }}
            >
              Літній фестиваль етнічної музики та культури. Відкрийте для себе магію української традиції.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                color: '#FFF67E',
                lineHeight: 1.2
              }}
            >
              Швидкі посилання
            </h4>
            <ul className="space-y-3">
              {['Про фестиваль', 'Line-up', 'Квитки', 'Локація', 'FAQ', 'Контакти'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="transition-opacity hover:opacity-70"
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '16px',
                      color: '#FFFFFF',
                      opacity: 0.9,
                      textDecoration: 'none'
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                color: '#FFF67E',
                lineHeight: 1.2
              }}
            >
              Контакти
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} style={{ color: '#FFF67E', flexShrink: 0, marginTop: '2px' }} />
                <a 
                  href="mailto:info@soncestoyanna.ua"
                  className="transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '16px',
                    color: '#FFFFFF',
                    opacity: 0.9,
                    textDecoration: 'none'
                  }}
                >
                  info@soncestoyanna.ua
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} style={{ color: '#FFF67E', flexShrink: 0, marginTop: '2px' }} />
                <a 
                  href="tel:+380501234567"
                  className="transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '16px',
                    color: '#FFFFFF',
                    opacity: 0.9,
                    textDecoration: 'none'
                  }}
                >
                  +38 (050) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} style={{ color: '#FFF67E', flexShrink: 0, marginTop: '2px' }} />
                <span 
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '16px',
                    color: '#FFFFFF',
                    opacity: 0.9
                  }}
                >
                  Карпати, Івано-Франківська обл.
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 
              className="mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                color: '#FFF67E',
                lineHeight: 1.2
              }}
            >
              Соціальні мережі
            </h4>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index}
                  href={href}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#9BCF53' }}
                >
                  <Icon size={24} style={{ color: '#416D19' }} />
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <p 
                className="mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#FFF67E'
                }}
              >
                Підпишіться на новини
              </p>
              <div className="flex gap-2">
                <input 
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-lg"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '14px'
                  }}
                />
                <button
                  className="px-6 py-3 rounded-lg transition-all hover:scale-105"
                  style={{
                    backgroundColor: '#FFF67E',
                    color: '#416D19',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 text-center"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}
        >
          <p 
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '14px',
              color: '#FFFFFF',
              opacity: 0.7
            }}
          >
            © 2026 Сонцестояння. Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}

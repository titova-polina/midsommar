import { Music2, Hammer, ShoppingBag, Tent } from 'lucide-react';

export function FestivalMap() {
  const locations = [
    {
      icon: Music2,
      name: 'Main Stage',
      nameUa: 'Головна Сцена',
      description: 'Виступи топових артистів'
    },
    {
      icon: Hammer,
      name: 'Ethno Workshop Zone',
      nameUa: 'Зона Майстер-класів',
      description: 'Традиційні ремесла та навички'
    },
    {
      icon: ShoppingBag,
      name: 'Food Court & Eco-Market',
      nameUa: 'Фуд-корт та Еко-маркет',
      description: 'Органічна їжа та крафтові товари'
    },
    {
      icon: Tent,
      name: 'Camping City',
      nameUa: 'Кемпінг-містечко',
      description: 'Комфортне розміщення серед природи'
    }
  ];

  return (
    <section 
      className="py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#BFEA7C' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-center mb-6"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#416D19',
            lineHeight: 1.2
          }}
        >
          Карта фестивалю
        </h2>
        
        <p 
          className="text-center mb-16 max-w-2xl mx-auto"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '18px',
            color: '#416D19',
            opacity: 0.8
          }}
        >
          Дослідіть всі локації фестивалю та сплануйте свій ідеальний день
        </p>
        
        {/* Map Placeholder */}
        <div 
          className="rounded-3xl mb-12 flex items-center justify-center relative overflow-hidden"
          style={{
            height: '500px',
            backgroundColor: '#FFFFFF',
            backgroundImage: `linear-gradient(rgba(191, 234, 124, 0.3), rgba(191, 234, 124, 0.3)), url('https://images.unsplash.com/photo-1628963084150-2b41d8425a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMG1hcCUyMGlsbHVzdHJhdGlvbiUyMGFlcmlhbHxlbnwxfHx8fDE3NzA1MDg0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 20px 60px rgba(65, 109, 25, 0.2)'
          }}
        >
          <div 
            className="text-center p-8 rounded-2xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#416D19'
              }}
            >
              Інтерактивна карта
            </p>
            <p 
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '16px',
                color: '#416D19',
                opacity: 0.7,
                marginTop: '8px'
              }}
            >
              Буде доступна найближчим часом
            </p>
          </div>
        </div>
        
        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#9BCF53' }}
              >
                <location.icon size={28} style={{ color: '#416D19' }} />
              </div>
              
              <h3 
                className="mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#416D19',
                  lineHeight: 1.3
                }}
              >
                {location.nameUa}
              </h3>
              
              <p 
                className="mb-3"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '14px',
                  color: '#416D19',
                  opacity: 0.5,
                  fontStyle: 'italic'
                }}
              >
                {location.name}
              </p>
              
              <p 
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#416D19',
                  opacity: 0.8,
                  lineHeight: 1.6
                }}
              >
                {location.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

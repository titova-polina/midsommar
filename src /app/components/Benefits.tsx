import { MapPin, Heart, Leaf, Music } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: MapPin,
      title: 'Локація мрії',
      description: 'Мальовничі Карпати, чисте повітря та неймовірні краєвиди. Ідеальне місце для відпочинку душі.'
    },
    {
      icon: Music,
      title: 'Унікальна атмосфера',
      description: 'Автентична етнічна музика, традиційні танці та майстер-класи від найкращих артистів України.'
    },
    {
      icon: Leaf,
      title: 'Еко-фестиваль',
      description: 'Повна відмова від пластику, сортування сміття та збереження природи для майбутніх поколінь.'
    },
    {
      icon: Heart,
      title: 'Спільнота',
      description: 'Зустріч однодумців, нові знайомства та незабутні спогади в колі друзів та родини.'
    }
  ];

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-center mb-16"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#416D19',
            lineHeight: 1.2
          }}
        >
          Чому обирають нас
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: '#9BCF53' }}
              >
                <benefit.icon size={32} style={{ color: '#416D19' }} />
              </div>
              
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '22px',
                  color: '#416D19',
                  lineHeight: 1.3
                }}
              >
                {benefit.title}
              </h3>
              
              <p 
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '18px',
                  color: '#416D19',
                  lineHeight: 1.6,
                  opacity: 0.8
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

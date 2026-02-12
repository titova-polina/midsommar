import { Recycle, Leaf, TreeDeciduous, Droplets } from 'lucide-react';

export function Sustainability() {
  const initiatives = [
    {
      icon: Recycle,
      title: 'Zero Plastic',
      titleUa: 'Без пластику',
      description: 'Повна відмова від одноразового пластику на території фестивалю'
    },
    {
      icon: Leaf,
      title: 'Waste Sorting',
      titleUa: 'Сортування відходів',
      description: 'Окремі контейнери для різних типів сміття та програма компостування'
    },
    {
      icon: TreeDeciduous,
      title: 'Tree Planting',
      titleUa: 'Висадка дерев',
      description: 'За кожен проданий квиток ми висаджуємо одне дерево в Карпатах'
    },
    {
      icon: Droplets,
      title: 'Clean Water',
      titleUa: 'Чиста вода',
      description: 'Безкоштовні станції з питною водою та багаторазові пляшки'
    }
  ];

  return (
    <section 
      className="py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#BFEA7C' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div 
            className="inline-block px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: '#416D19',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#FFF67E',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Еко-місія
          </div>
          
          <h2 
            className="mb-6"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#416D19',
              lineHeight: 1.2
            }}
          >
            Zero Waste Festival
          </h2>
          
          <p 
            className="max-w-3xl mx-auto"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '18px',
              color: '#416D19',
              lineHeight: 1.8
            }}
          >
            Ми віримо, що справжнє свято має залишати після себе лише спогади, 
            а не сміття. Наша місія — створити фестиваль, який не шкодить природі, 
            а навпаки, допомагає її відновленню.
          </p>
        </div>
        
        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#9BCF53' }}
              >
                <initiative.icon size={36} style={{ color: '#416D19' }} strokeWidth={2} />
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
                {initiative.titleUa}
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
                {initiative.title}
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
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Statistics Banner */}
        <div 
          className="rounded-3xl p-12 text-center"
          style={{
            backgroundColor: '#416D19',
            boxShadow: '0 20px 60px rgba(65, 109, 25, 0.3)'
          }}
        >
          <h3 
            className="mb-8"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 32px)',
              color: '#FFF67E',
              lineHeight: 1.2
            }}
          >
            Наші досягнення 2025
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  color: '#9BCF53',
                  lineHeight: 1,
                  marginBottom: '12px'
                }}
              >
                98%
              </div>
              <p 
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#FFFFFF',
                  opacity: 0.9
                }}
              >
                Переробленого сміття
              </p>
            </div>
            
            <div>
              <div 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  color: '#9BCF53',
                  lineHeight: 1,
                  marginBottom: '12px'
                }}
              >
                2,500
              </div>
              <p 
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#FFFFFF',
                  opacity: 0.9
                }}
              >
                Висаджених дерев
              </p>
            </div>
            
            <div>
              <div 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  color: '#9BCF53',
                  lineHeight: 1,
                  marginBottom: '12px'
                }}
              >
                0kg
              </div>
              <p 
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#FFFFFF',
                  opacity: 0.9
                }}
              >
                Використаного пластику
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

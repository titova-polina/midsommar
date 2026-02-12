import { Star, Users, Calendar, Award } from 'lucide-react';

export function SocialProof() {
  const stats = [
    {
      icon: Users,
      number: '15 000+',
      label: 'Відвідувачів у 2025'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Середня оцінка'
    },
    {
      icon: Calendar,
      number: '5',
      label: 'Років на ринку'
    },
    {
      icon: Award,
      number: '#1',
      label: 'Етно-фестиваль України'
    }
  ];

  const reviews = [
    {
      name: 'Оксана Петренко',
      text: 'Неймовірна атмосфера! Вперше відчула справжню магію української музики. Організація на найвищому рівні.',
      rating: 5,
      year: '2025'
    },
    {
      name: 'Андрій Коваленко',
      text: 'Найкращий фестиваль, на якому я був. Чудова локація, дружня атмосфера і світовий рівень виконавців.',
      rating: 5,
      year: '2025'
    },
    {
      name: 'Марія Шевченко',
      text: 'Їжджу на Сонцестояння третій рік поспіль. Кожен раз це нові емоції, нові знайомства та незабутні враження!',
      rating: 5,
      year: '2024'
    }
  ];

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#9BCF53' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#416D19' }}
              >
                <stat.icon size={32} style={{ color: '#FFF67E' }} />
              </div>
              <div 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 4vw, 42px)',
                  color: '#416D19',
                  lineHeight: 1.2,
                  marginBottom: '8px'
                }}
              >
                {stat.number}
              </div>
              <div 
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#416D19',
                  opacity: 0.8
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews */}
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
          Відгуки гостей
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
          Дізнайтесь, що кажуть наші відвідувачі про фестиваль
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFF67E" style={{ color: '#FFF67E' }} />
                ))}
              </div>
              
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#416D19',
                  lineHeight: 1.6,
                  fontStyle: 'italic'
                }}
              >
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div 
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#416D19'
                    }}
                  >
                    {review.name}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '14px',
                      color: '#416D19',
                      opacity: 0.6
                    }}
                  >
                    Гість {review.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

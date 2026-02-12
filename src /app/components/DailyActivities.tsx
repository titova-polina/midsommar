export function DailyActivities() {
  const activities = [
    {
      title: 'Morning Yoga & Meditation',
      titleUa: 'Ранкова йога та медитація',
      time: '7:00 - 9:00',
      description: 'Почніть день з енергією сонця. Заняття йогою на світанку серед карпатської природи з досвідченими інструкторами.',
      image: 'https://images.unsplash.com/photo-1760774714285-61ff516f86c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHN1bnJpc2UlMjBvdXRkb29yfGVufDF8fHx8MTc3MDUwODQxNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Traditional Craft Workshops',
      titleUa: 'Традиційні майстер-класи',
      time: '11:00 - 18:00',
      description: 'Навчіться створювати вінки, вишивати, грати на автентичних інструментах. Зберігайте та передавайте традиції.',
      image: 'https://images.unsplash.com/photo-1766499670904-edab815e8fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNyYWZ0JTIwd29ya3Nob3AlMjBoYW5kc3xlbnwxfHx8fDE3NzA1MDg0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Night Bonfire Rituals',
      titleUa: 'Нічні ритуали біля вогнища',
      time: '22:00 - 01:00',
      description: 'Традиційні обряди, спільні пісні та танці навколо вогню під зоряним небом. Відчуйте магію спільноти.',
      image: 'https://images.unsplash.com/photo-1651515392392-1161f699c77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wZmlyZSUyMGJvbmZpcmUlMjBuaWdodCUyMHJpdHVhbHxlbnwxfHx8fDE3NzA1MDg0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section 
      className="py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F8FAFC' }}
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
          Щоденні активності
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
          Фестиваль — це не лише музика. Відкрийте для себе традиції, духовність та спільноту
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(65, 109, 25, 0.7) 100%), url('${activity.image}')` 
                }}
              />
              
              <div className="p-6">
                <div 
                  className="inline-block px-3 py-1 rounded-full mb-4"
                  style={{
                    backgroundColor: '#FFF67E',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '12px',
                    color: '#416D19',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {activity.time}
                </div>
                
                <h3 
                  className="mb-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '24px',
                    color: '#416D19',
                    lineHeight: 1.3
                  }}
                >
                  {activity.titleUa}
                </h3>
                
                <p 
                  className="mb-4"
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '14px',
                    color: '#416D19',
                    opacity: 0.5,
                    fontStyle: 'italic'
                  }}
                >
                  {activity.title}
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
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

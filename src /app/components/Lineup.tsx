export function Lineup() {
  const artists = [
    {
      name: 'ДахаБраха',
      genre: 'Етно-фолк',
      image: 'https://images.unsplash.com/photo-1700040139874-c848746e7d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhubyUyMGZvbGslMjBtdXNpY2lhbiUyMHBlcmZvcm1pbmd8ZW58MXx8fHwxNzcwNTA1ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      day: 'П\'ятниця'
    },
    {
      name: 'Onuka',
      genre: 'Електронна етніка',
      image: 'https://images.unsplash.com/photo-1633328879916-4837dcd68f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZlc3RpdmFsJTIwcGVvcGxlJTIwZGFuY2luZ3xlbnwxfHx8fDE3NzA1MDU4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      day: 'Субота'
    },
    {
      name: 'Kozak System',
      genre: 'Фольк-рок',
      image: 'https://images.unsplash.com/photo-1763771891917-bd7009f4fe80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xrJTIwYmFuZCUyMGV0aG5pYyUyMGluc3RydW1lbnRzfGVufDF8fHx8MTc3MDUwNTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      day: 'Субота'
    },
    {
      name: 'Іван Дорн',
      genre: 'Інді-поп',
      image: 'https://images.unsplash.com/photo-1604514288114-3851479df2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbXVzaWMlMjBmZXN0aXZhbCUyMHN0YWdlfGVufDF8fHx8MTc3MDQ5MDE2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      day: 'Неділя'
    },
    {
      name: 'Ot Vinta',
      genre: 'Традиційний фолк',
      image: 'https://images.unsplash.com/photo-1747205608557-8ed128393383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmZXN0aXZhbCUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc3MDUwNTgzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      day: 'П\'ятниця'
    },
    {
      name: 'Vivienne Mort',
      genre: 'Альтернатива',
      image: 'https://images.unsplash.com/photo-1658227665335-9cc3da774f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2QlMjBzdW5zZXR8ZW58MXx8fHwxNzcwNTA1ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      day: 'Неділя'
    }
  ];

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
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
          Line-up 2026
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
          Найяскравіші зірки української етнічної сцени та спеціальні гості
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(65, 109, 25, 0.8) 100%), url('${artist.image}')` 
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-sm mb-2"
                    style={{
                      backgroundColor: '#FFF67E',
                      color: '#416D19',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {artist.day}
                  </div>
                  <h3 
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      fontSize: '28px',
                      color: '#FFFFFF',
                      lineHeight: 1.2
                    }}
                  >
                    {artist.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p 
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '18px',
                    color: '#416D19',
                    opacity: 0.7
                  }}
                >
                  {artist.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            className="px-10 py-4 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#416D19',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Повний лайн-ап
          </button>
        </div>
      </div>
    </section>
  );
}

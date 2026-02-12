export function Legend() {
  return (
    <section 
      className="py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div 
            className="h-[500px] rounded-3xl bg-cover bg-center order-2 lg:order-1"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1672854081064-f341088c596c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwZm9yZXN0JTIwc3VubGlnaHQlMjBtaXN0eXxlbnwxfHx8fDE3NzA1MDg0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
              boxShadow: '0 20px 60px rgba(65, 109, 25, 0.2)'
            }}
          />
          
          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div 
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: '#9BCF53',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                color: '#416D19',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Про фестиваль
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
              Магія найдовшого дня
            </h2>
            
            <div 
              className="space-y-6"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '18px',
                color: '#416D19',
                lineHeight: 1.8
              }}
            >
              <p>
                Тисячі років тому наші предки збиралися разом, щоб відсвяткувати день літнього 
                сонцестояння — момент, коли сонце досягає найвищої точки на небосхилі, 
                даруючи землі найдовший день у році.
              </p>
              
              <p>
                Це був час радості, надії та єднання з природою. Розпалювали вогнища, 
                співали пісні, танцювали під зоряним небом, прославляючи життя та силу 
                української землі.
              </p>
              
              <p>
                Сьогодні ми продовжуємо цю традицію, об'єднуючи древню мудрість з сучасною 
                культурою. <strong>Сонцестояння</strong> — це не просто музичний фестиваль, 
                це духовна подорож, де музика, природа та люди зливаються в єдиному ритмі.
              </p>
              
              <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
                Приєднуйтесь до нас у цьому магічному ритуалі відродження української традиції.
              </p>
            </div>
            
            <button
              className="mt-10 px-10 py-4 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#416D19',
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Дізнатись більше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

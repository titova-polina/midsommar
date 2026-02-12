import { useState } from 'react';
import { Mail, Lock, Phone, User } from 'lucide-react';

export function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add registration logic here
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Add social login logic here
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(65, 109, 25, 0.5), rgba(65, 109, 25, 0.5)), url('https://images.unsplash.com/photo-1756830034149-d689f10857a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBtZWFkb3clMjBmb3Jlc3QlMjBzdW5saWdodCUyMGdyYXNzfGVufDF8fHx8MTc3MDc1NTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div 
        className="w-full max-w-md rounded-3xl p-8 sm:p-10"
        style={{
          backgroundColor: '#F8FAFC',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 5vw, 36px)',
              color: '#416D19',
              marginBottom: '12px',
              lineHeight: 1.2
            }}
          >
            Приєднуйся до магії
          </h1>
          <p 
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '16px',
              color: '#416D19',
              opacity: 0.7
            }}
          >
            Створіть обліковий запис для реєстрації на фестиваль
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                color: '#416D19',
                fontWeight: 600,
                display: 'block',
                marginBottom: '8px'
              }}
            >
              Ім'я та Прізвище
            </label>
            <div className="relative">
              <User 
                size={20} 
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#416D19',
                  opacity: 0.5
                }}
              />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Іван Петренко"
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none transition-all duration-200"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#416D19',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #E5E7EB',
                }}
                onFocus={(e) => e.target.style.borderColor = '#9BCF53'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label 
              htmlFor="email"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                color: '#416D19',
                fontWeight: 600,
                display: 'block',
                marginBottom: '8px'
              }}
            >
              Email
            </label>
            <div className="relative">
              <Mail 
                size={20} 
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#416D19',
                  opacity: 0.5
                }}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="example@email.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none transition-all duration-200"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#416D19',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #E5E7EB',
                }}
                onFocus={(e) => e.target.style.borderColor = '#9BCF53'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label 
              htmlFor="phone"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                color: '#416D19',
                fontWeight: 600,
                display: 'block',
                marginBottom: '8px'
              }}
            >
              Номер телефону
            </label>
            <div className="relative">
              <Phone 
                size={20} 
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#416D19',
                  opacity: 0.5
                }}
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+380 XX XXX XXXX"
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none transition-all duration-200"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#416D19',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #E5E7EB',
                }}
                onFocus={(e) => e.target.style.borderColor = '#9BCF53'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label 
              htmlFor="password"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                color: '#416D19',
                fontWeight: 600,
                display: 'block',
                marginBottom: '8px'
              }}
            >
              Пароль
            </label>
            <div className="relative">
              <Lock 
                size={20} 
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#416D19',
                  opacity: 0.5
                }}
              />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none transition-all duration-200"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#416D19',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #E5E7EB',
                }}
                onFocus={(e) => e.target.style.borderColor = '#9BCF53'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg mt-6"
            style={{
              backgroundColor: '#FFF67E',
              color: '#416D19',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              letterSpacing: '0.05em',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            ЗАРЕЄСТРУВАТИСЯ
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
          <span 
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '14px',
              color: '#416D19',
              opacity: 0.6,
              padding: '0 16px'
            }}
          >
            або
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleSocialLogin('Google')}
            className="w-full py-3 rounded-xl transition-all duration-200 hover:shadow-md flex items-center justify-center gap-3"
            style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #E5E7EB',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '15px',
              color: '#416D19',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M19.8055 10.2292C19.8055 9.55133 19.7507 8.86699 19.6302 8.19556H10.2002V12.0488H15.6014C15.3773 13.2911 14.6571 14.3898 13.6025 15.0877V17.5865H16.8251C18.7177 15.8449 19.8055 13.2728 19.8055 10.2292Z" fill="#4285F4"/>
              <path d="M10.2002 20.0006C12.9515 20.0006 15.2664 19.1151 16.8296 17.5865L13.607 15.0877C12.7096 15.6979 11.5569 16.0433 10.2047 16.0433C7.54343 16.0433 5.29097 14.2834 4.50277 11.917H1.17969V14.4927C2.78068 17.6794 6.31448 20.0006 10.2002 20.0006Z" fill="#34A853"/>
              <path d="M4.49829 11.917C4.08058 10.6747 4.08058 9.33016 4.49829 8.08783V5.51208H1.17966C-0.392688 8.64049 -0.392688 12.3643 1.17966 15.4927L4.49829 11.917Z" fill="#FBBC04"/>
              <path d="M10.2002 3.95795C11.6297 3.93606 13.008 4.47254 14.0444 5.45722L16.8933 2.60828C15.1817 0.990684 12.9333 0.0961549 10.2002 0.122047C6.31448 0.122047 2.78068 2.44322 1.17969 5.51211L4.49832 8.08786C5.28197 5.71627 7.53898 3.95795 10.2002 3.95795Z" fill="#EA4335"/>
            </svg>
            Увійти через Google
          </button>

          <button
            onClick={() => handleSocialLogin('Apple')}
            className="w-full py-3 rounded-xl transition-all duration-200 hover:shadow-md flex items-center justify-center gap-3"
            style={{
              backgroundColor: '#000000',
              border: 'none',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '15px',
              color: '#FFFFFF',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15.4183 17.0417C14.5767 17.9167 13.6683 17.8333 12.7933 17.4583C11.8517 17.075 10.985 17.0583 9.985 17.4583C8.71833 17.9833 8.085 17.875 7.35167 17.0417C2.46 12.0333 3.21833 4.55 8.735 4.28333C10.0183 4.35 10.9433 4.99167 11.7183 5.04167C12.8683 4.81667 13.9767 4.15833 15.2017 4.24167C16.6933 4.35 17.8183 4.93333 18.5517 5.99167C15.4933 7.85833 16.2433 11.9917 19.0767 13.0833C18.5433 14.5083 17.8183 15.925 15.4183 17.05V17.0417ZM11.6267 4.225C11.4767 2.31667 13.0267 0.741667 14.8017 0.583334C15.06 2.825 12.8433 4.475 11.6267 4.225Z"/>
            </svg>
            Увійти через Apple
          </button>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-6">
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: '#416D19', opacity: 0.7 }}>
            Вже маєте аккаунт?{' '}
            <a 
              href="#"
              style={{
                color: '#416D19',
                fontWeight: 600,
                textDecoration: 'underline',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Увійти
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

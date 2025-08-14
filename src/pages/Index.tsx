import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const materials = [
    {
      name: 'Веселый Классик',
      description: 'Матовая поверхность для уютной атмосферы! 😊',
      price: 'от 850 ₽/м²',
      features: ['Влагостойкость', 'Антистатик', 'Экологичность'],
      color: 'bg-cartoon-purple'
    },
    {
      name: 'Сказочный Сатин',
      description: 'Шелковистая текстура с волшебным блеском ✨',
      price: 'от 950 ₽/м²',
      features: ['Перламутровый блеск', 'Износостойкость', 'Роскошный вид'],
      color: 'bg-cartoon-blue'
    },
    {
      name: 'Магический Лак',
      description: 'Глянцевая поверхность для сказочного отражения 🪄',
      price: 'от 1200 ₽/м²',
      features: ['Зеркальный эффект', 'Увеличение пространства', 'Элитность'],
      color: 'bg-cartoon-yellow'
    }
  ];

  const advantages = [
    {
      icon: 'Heart',
      title: 'Сделано с любовью',
      description: 'Каждый потолок - это произведение искусства! 🎨',
      color: 'bg-cartoon-pink'
    },
    {
      icon: 'Shield',
      title: 'Супер-гарантия',
      description: '15 лет защиты для вашего комфорта! 🛡️',
      color: 'bg-cartoon-blue'
    },
    {
      icon: 'Zap',
      title: 'Молниеносно быстро',
      description: 'Установим за 3 часа - быстрее молнии! ⚡',
      color: 'bg-cartoon-yellow'
    },
    {
      icon: 'Star',
      title: 'Звездный дизайн',
      description: 'Уникальные решения прямо из космоса! 🚀',
      color: 'bg-cartoon-purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cartoon-purple via-cartoon-blue to-cartoon-pink text-white overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cartoon-yellow rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cartoon-orange rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cartoon-pink rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-2/3 w-12 h-12 bg-cartoon-blue rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading text-3xl font-black text-cartoon-pink">
              🎨 ВЕСЕЛЫЕ ПОТОЛКИ
            </div>
            <div className="hidden md:flex space-x-8">
              {['Услуги', 'Галерея', 'Преимущества', 'Цены', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-cartoon-pink transition-colors font-semibold">
                  {item}
                </a>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-cartoon-pink to-cartoon-orange text-white hover:from-cartoon-orange hover:to-cartoon-pink font-bold shadow-lg transform hover:scale-105 transition-all rounded-full px-6">
              🎉 Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Героический блок */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-8xl animate-bounce">🏠</span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-black mb-8 text-white drop-shadow-lg">
            Натяжные потолки<br />
            <span className="bg-gradient-to-r from-cartoon-yellow via-cartoon-pink to-cartoon-blue bg-clip-text text-transparent animate-pulse">
              как в сказке! 🌈
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-semibold drop-shadow-md">
            Превратим ваш дом в волшебный мир! ✨ Яркие цвета, сказочные решения, 
            и море позитива в каждом потолке! 🎪
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cartoon-pink to-cartoon-red text-white hover:from-cartoon-red hover:to-cartoon-pink px-10 py-6 text-xl font-bold shadow-xl transform hover:scale-110 transition-all rounded-full">
              <span className="mr-3 text-2xl">📞</span>
              Бесплатный замер
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-cartoon-blue to-cartoon-purple text-white hover:from-cartoon-purple hover:to-cartoon-blue px-10 py-6 text-xl font-bold shadow-xl transform hover:scale-110 transition-all rounded-full">
              <span className="mr-3 text-2xl">👀</span>
              Наши чудеса
            </Button>
          </div>
        </div>
      </section>

      {/* Каталог материалов */}
      <section id="услуги" className="py-20 px-6 bg-white/10 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-black text-white mb-4 drop-shadow-lg">
              🎨 Каталог волшебных материалов
            </h2>
            <p className="text-2xl text-white/80">Выбирай свою магию!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className={`${material.color} border-4 border-white shadow-2xl hover:shadow-cartoon-pink/50 transition-all duration-300 group transform hover:scale-105 hover:rotate-2 rounded-3xl`}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 animate-bounce">
                    {index === 0 ? '😊' : index === 1 ? '✨' : '🪄'}
                  </div>
                  <h3 className="font-heading text-3xl font-black mb-4 text-white drop-shadow-lg group-hover:animate-pulse">
                    {material.name}
                  </h3>
                  <p className="text-white/90 mb-6 font-semibold text-lg">{material.description}</p>
                  <div className="text-4xl font-black text-white mb-8 drop-shadow-lg bg-white/20 rounded-full py-3 px-6 inline-block">
                    {material.price}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {material.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-white font-semibold text-lg">
                        <span className="mr-3 text-2xl">✅</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-gray-800 hover:bg-cartoon-yellow hover:text-white font-black py-4 text-lg shadow-lg transform hover:scale-105 transition-all rounded-full">
                    🚀 Выбрать это чудо!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея работ */}
      <section id="галерея" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-black text-white mb-4 drop-shadow-lg">
              🖼️ Наша галерея чудес
            </h2>
            <p className="text-2xl text-white/80">Каждый проект - это маленькое волшебство!</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-3xl aspect-square transform hover:scale-105 hover:rotate-3 transition-all duration-300">
              <img 
                src="/img/775246ab-8862-4a54-bece-c51fdec45166.jpg" 
                alt="Сказочная гостиная"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cartoon-pink/80 to-transparent group-hover:from-cartoon-pink/40 transition-all duration-300"></div>
              <div className="absolute top-4 right-4 text-4xl animate-spin">✨</div>
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-heading font-black text-xl">Сказочная гостиная 🏰</h4>
                <p className="text-sm text-white/80 font-semibold">35 м² волшебства</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl aspect-square transform hover:scale-105 hover:rotate-3 transition-all duration-300">
              <img 
                src="/img/a7f40d70-aa49-420d-93d9-8d39ad341a25.jpg" 
                alt="Волшебная спальня"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cartoon-blue/80 to-transparent group-hover:from-cartoon-blue/40 transition-all duration-300"></div>
              <div className="absolute top-4 right-4 text-4xl animate-pulse">💤</div>
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-heading font-black text-xl">Волшебная спальня 🌙</h4>
                <p className="text-sm text-white/80 font-semibold">20 м² снов</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl aspect-square transform hover:scale-105 hover:rotate-3 transition-all duration-300">
              <img 
                src="/img/af05042e-dec6-48ba-a682-a67ed950d74d.jpg" 
                alt="Космическая кухня"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cartoon-yellow/80 to-transparent group-hover:from-cartoon-yellow/40 transition-all duration-300"></div>
              <div className="absolute top-4 right-4 text-4xl animate-bounce">👨‍🍳</div>
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-heading font-black text-xl">Космическая кухня 🚀</h4>
                <p className="text-sm text-white/80 font-semibold">15 м² магии</p>
              </div>
            </div>
            
            {[4, 5, 6].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-3xl aspect-square bg-gradient-to-br from-cartoon-orange/60 to-cartoon-red/60 transform hover:scale-105 hover:rotate-3 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-spin">{item === 4 ? '🎪' : item === 5 ? '🎨' : '🌈'}</div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-heading font-black text-xl">Проект №{item} 🎉</h4>
                  <p className="text-sm text-white/80 font-semibold">Скоро здесь!</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="преимущества" className="py-20 px-6 bg-white/10 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-black text-white mb-4 drop-shadow-lg">
              🌟 Почему мы самые крутые?
            </h2>
            <p className="text-2xl text-white/80">У нас есть суперсилы!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group transform hover:scale-110 transition-all duration-300">
                <div className={`w-32 h-32 mx-auto mb-6 ${advantage.color} rounded-full flex items-center justify-center group-hover:animate-bounce shadow-2xl border-4 border-white`}>
                  <Icon name={advantage.icon as any} size={48} className="text-white drop-shadow-lg" />
                </div>
                <h3 className="font-heading text-2xl font-black mb-4 text-white drop-shadow-lg">{advantage.title}</h3>
                <p className="text-white/80 font-semibold text-lg">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Цены */}
      <section id="цены" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="font-heading text-5xl font-black text-white mb-4 drop-shadow-lg">💰 Честные цены</h2>
            <p className="text-2xl text-white/80">Никаких подводных камней - только честность!</p>
          </div>
          <div className="bg-gradient-to-br from-cartoon-pink via-cartoon-purple to-cartoon-blue rounded-3xl p-12 border-8 border-white shadow-2xl max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="text-8xl mb-8 animate-pulse">🎉</div>
            <div className="text-8xl font-black text-white mb-6 drop-shadow-2xl">от 850₽</div>
            <div className="text-4xl text-white/90 mb-12 font-bold">за м² чистого счастья</div>
            <ul className="space-y-6 text-left max-w-2xl mx-auto mb-12">
              {[
                'Бесплатный замер и веселая консультация 🎈',
                'Премиальные материалы из Европы 🌍',
                'Установка командой супергероев 🦸‍♂️',
                'Гарантия на 15 лет счастья 🎊',
                'Уборка до блеска ✨'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white font-bold text-xl">
                  <span className="mr-4 text-3xl">✅</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-white text-cartoon-pink hover:bg-cartoon-yellow hover:text-white px-16 py-6 text-2xl font-black shadow-xl transform hover:scale-110 transition-all rounded-full">
              🧮 Считаем магию!
            </Button>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="контакты" className="py-20 px-6 bg-white/10 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-black text-white mb-4 drop-shadow-lg">
              📞 Свяжитесь с нами!
            </h2>
            <p className="text-2xl text-white/80">Мы всегда рады новым друзьям!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-20 h-20 bg-cartoon-pink rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:animate-bounce">
                  <span className="text-3xl">📞</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Звони прямо сейчас!</h3>
                  <p className="text-cartoon-yellow text-3xl font-black">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-20 h-20 bg-cartoon-blue rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:animate-bounce">
                  <span className="text-3xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Приезжай в гости!</h3>
                  <p className="text-white/80 text-xl font-semibold">Москва, ул. Радужная, д. 42</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-20 h-20 bg-cartoon-yellow rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:animate-bounce">
                  <span className="text-3xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Работаем для вас!</h3>
                  <p className="text-white/80 text-xl font-semibold">Каждый день с 9:00 до 21:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl border-4 border-white shadow-2xl">
              <div className="text-center mb-8">
                <span className="text-6xl mb-4 block animate-bounce">🎪</span>
                <h3 className="font-heading text-3xl font-black text-white drop-shadow-lg">
                  Бесплатная магическая консультация!
                </h3>
              </div>
              <div className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Как вас зовут, волшебник? ✨" 
                  className="w-full p-4 bg-white/90 border-4 border-cartoon-pink rounded-full text-gray-800 placeholder-gray-500 font-semibold text-lg focus:border-cartoon-yellow focus:outline-none shadow-lg"
                />
                <input 
                  type="tel" 
                  placeholder="Ваш магический номер 📱" 
                  className="w-full p-4 bg-white/90 border-4 border-cartoon-blue rounded-full text-gray-800 placeholder-gray-500 font-semibold text-lg focus:border-cartoon-yellow focus:outline-none shadow-lg"
                />
                <Button className="w-full bg-gradient-to-r from-cartoon-orange to-cartoon-red text-white hover:from-cartoon-red hover:to-cartoon-orange py-6 text-xl font-black shadow-xl transform hover:scale-105 transition-all rounded-full">
                  🚀 Начинаем волшебство!
                </Button>
                <p className="text-sm text-white/60 text-center font-semibold">
                  Обещаем не спамить - только магия! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 px-6 border-t-4 border-white/20 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="font-heading text-4xl font-black text-white mb-6 drop-shadow-lg">
            🎨 ВЕСЕЛЫЕ ПОТОЛКИ
          </div>
          <p className="text-white/60 text-lg font-semibold">© 2024 Все волшебство защищено! ✨</p>
          <div className="mt-8 flex justify-center space-x-4">
            {['🌈', '⭐', '🎪', '🚀', '✨'].map((emoji, i) => (
              <span key={i} className="text-4xl animate-bounce hover:animate-spin cursor-pointer" style={{animationDelay: `${i * 0.2}s`}}>
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
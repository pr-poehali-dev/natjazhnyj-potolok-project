import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const materials = [
    {
      name: 'Классик',
      description: 'Матовая поверхность для уютной атмосферы',
      price: 'от 850 ₽/м²',
      features: ['Влагостойкость', 'Антистатик', 'Экологичность']
    },
    {
      name: 'Сатин',
      description: 'Шелковистая текстура с легким блеском',
      price: 'от 950 ₽/м²',
      features: ['Перламутровый блеск', 'Износостойкость', 'Роскошный вид']
    },
    {
      name: 'Лаковый',
      description: 'Глянцевая поверхность для визуального расширения',
      price: 'от 1200 ₽/м²',
      features: ['Зеркальный эффект', 'Увеличение пространства', 'Элитность']
    }
  ];

  const advantages = [
    {
      icon: 'Crown',
      title: 'Премиальное качество',
      description: 'Используем только европейские материалы высшего класса'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 15 лет',
      description: 'Официальная гарантия с полным сервисным обслуживанием'
    },
    {
      icon: 'Clock',
      title: 'Монтаж за 3 часа',
      description: 'Профессиональная команда выполнит работы быстро и аккуратно'
    },
    {
      icon: 'Sparkles',
      title: 'Эксклюзивный дизайн',
      description: 'Индивидуальные решения для создания уникального интерьера'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-dark via-gray-900 to-luxury-dark text-white">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-luxury-dark/90 backdrop-blur-sm z-50 border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading text-2xl font-bold text-luxury-gold">PREMIUM CEILINGS</div>
            <div className="hidden md:flex space-x-8">
              {['Услуги', 'Галерея', 'Преимущества', 'Цены', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-luxury-gold transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <Button className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-semibold">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Героический блок */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-luxury-gold bg-clip-text text-transparent animate-fade-in">
            Натяжные потолки<br />
            <span className="text-luxury-gold">премиум-класса</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Превратим ваш дом в произведение искусства. Европейские материалы, эксклюзивные решения, 
            безупречное исполнение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 px-8 py-4 text-lg font-semibold">
              <Icon name="Phone" className="mr-2" size={20} />
              Бесплатный замер
            </Button>
            <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark px-8 py-4 text-lg">
              <Icon name="Eye" className="mr-2" size={20} />
              Смотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Каталог материалов */}
      <section id="услуги" className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-luxury-gold">
            Каталог премиальных материалов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="bg-luxury-dark/80 border-luxury-gold/30 hover:border-luxury-gold transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="font-heading text-2xl font-bold mb-4 text-luxury-gold group-hover:scale-105 transition-transform">
                      {material.name}
                    </h3>
                    <p className="text-gray-300 mb-6">{material.description}</p>
                    <div className="text-3xl font-bold text-white mb-6">{material.price}</div>
                    <ul className="space-y-3">
                      {material.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <Icon name="Check" className="mr-3 text-luxury-gold" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-8 bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-semibold">
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея работ */}
      <section id="галерея" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-luxury-gold">
            Наши работы
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative group overflow-hidden rounded-lg aspect-square">
              <img 
                src="/img/775246ab-8862-4a54-bece-c51fdec45166.jpg" 
                alt="Глянцевый потолок в гостиной"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent group-hover:from-luxury-dark/40 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-heading font-semibold">Глянцевый потолок</h4>
                <p className="text-sm text-gray-300">Гостиная, 35 м²</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg aspect-square">
              <img 
                src="/img/a7f40d70-aa49-420d-93d9-8d39ad341a25.jpg" 
                alt="Сатиновый потолок в спальне"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent group-hover:from-luxury-dark/40 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-heading font-semibold">Сатиновый потолок</h4>
                <p className="text-sm text-gray-300">Спальня, 20 м²</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg aspect-square">
              <img 
                src="/img/af05042e-dec6-48ba-a682-a67ed950d74d.jpg" 
                alt="Лаковый потолок на кухне"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent group-hover:from-luxury-dark/40 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-heading font-semibold">Лаковый потолок</h4>
                <p className="text-sm text-gray-300">Кухня, 15 м²</p>
              </div>
            </div>
            
            {[4, 5, 6].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-luxury-gold/20 to-luxury-dark">
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent group-hover:from-luxury-dark/40 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-heading font-semibold">Проект №{item}</h4>
                  <p className="text-sm text-gray-300">Премиум потолки</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="преимущества" className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-luxury-gold">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-luxury-gold to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={advantage.icon as any} size={32} className="text-luxury-dark" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-white">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Цены */}
      <section id="цены" className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-8 text-luxury-gold">Прозрачные цены</h2>
          <p className="text-xl text-gray-300 mb-12">Все включено: материал, работа, гарантия</p>
          <div className="bg-luxury-dark/80 rounded-2xl p-8 border border-luxury-gold/30 max-w-2xl mx-auto">
            <div className="text-6xl font-bold text-luxury-gold mb-4">от 850₽</div>
            <div className="text-2xl text-white mb-6">за м²</div>
            <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
              {[
                'Бесплатный замер и консультация',
                'Премиальные европейские материалы',
                'Профессиональный монтаж',
                'Гарантия 15 лет',
                'Уборка после работ'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <Icon name="Check" className="mr-3 text-luxury-gold" size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 px-12 py-4 text-lg font-semibold">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="контакты" className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-luxury-gold">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-luxury-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Телефон</h3>
                  <p className="text-luxury-gold text-xl">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-luxury-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Адрес</h3>
                  <p className="text-gray-300">Москва, ул. Премиальная, д. 1</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-luxury-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Режим работы</h3>
                  <p className="text-gray-300">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-luxury-dark/80 p-8 rounded-2xl border border-luxury-gold/30">
              <h3 className="font-heading text-2xl font-bold mb-6 text-center text-luxury-gold">
                Бесплатная консультация
              </h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-luxury-gold focus:outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-luxury-gold focus:outline-none"
                />
                <Button className="w-full bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 py-4 text-lg font-semibold">
                  Получить консультацию
                </Button>
                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 px-6 border-t border-luxury-gold/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-heading text-2xl font-bold text-luxury-gold mb-4">PREMIUM CEILINGS</div>
          <p className="text-gray-400">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
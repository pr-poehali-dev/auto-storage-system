import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-warehouse-lightgray">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Bot" className="text-tech" size={32} />
              <span className="text-xl font-bold text-warehouse-gray">AutoWarehouse</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#solutions" className="text-warehouse-gray hover:text-tech transition-colors">Решения</a>
              <a href="#projects" className="text-warehouse-gray hover:text-tech transition-colors">Проекты</a>
              <a href="#contact" className="text-warehouse-gray hover:text-tech transition-colors">Контакты</a>
            </div>
            <Button className="bg-tech hover:bg-tech-dark">
              Получить консультацию
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tech-light via-tech to-tech-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Автоматический склад<br />
                <span className="text-tech-light">нового поколения</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Повышение эффективности и снижение затрат через инновационные 
                решения складской автоматизации
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-tech hover:bg-gray-100">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть видео
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/bdd4303b-b089-4e30-bd62-4ff5234304bb.jpg" 
                alt="Автоматический склад" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warehouse-gray mb-4">Наши решения</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные системы автоматизации для максимальной эффективности вашего склада
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-tech rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Bot" className="text-white" size={24} />
                </div>
                <CardTitle className="text-warehouse-gray">Роботизированная система</CardTitle>
                <CardDescription>
                  Автоматизированные роботы для перемещения и сортировки товаров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tech mr-2" size={16} />
                    Точность 99.9%
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tech mr-2" size={16} />
                    24/7 работа
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tech mr-2" size={16} />
                    Снижение ошибок на 85%
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-tech rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Database" className="text-white" size={24} />
                </div>
                <CardTitle className="text-warehouse-gray">Умное хранение</CardTitle>
                <CardDescription>
                  Интеллектуальная система управления запасами и размещением
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tech mr-2" size={16} />
                    Оптимизация пространства
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tech mr-2" size={16} />
                    Прогнозирование спроса
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tech mr-2" size={16} />
                    Автоматический учет
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-tech rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <CardTitle className="text-warehouse-gray">Быстрая обработка</CardTitle>
                <CardDescription>
                  Конвейерные системы для ускоренной обработки заказов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tech mr-2" size={16} />
                    Скорость +300%
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tech mr-2" size={16} />
                    Интеграция с WMS
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tech mr-2" size={16} />
                    Масштабируемость
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-warehouse-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warehouse-gray mb-4">Результаты проектов</h2>
            <p className="text-xl text-gray-600">Измеримые улучшения для наших клиентов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-tech mb-2">85%</div>
              <div className="text-warehouse-gray">Снижение затрат</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tech mb-2">300%</div>
              <div className="text-warehouse-gray">Рост производительности</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tech mb-2">99.9%</div>
              <div className="text-warehouse-gray">Точность выполнения</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-tech mb-2">24/7</div>
              <div className="text-warehouse-gray">Непрерывная работа</div>
            </div>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-warehouse-gray">Кейс: Крупный ретейлер</CardTitle>
              <div className="flex space-x-2">
                <Badge variant="secondary">E-commerce</Badge>
                <Badge variant="secondary">10000 м²</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Внедрение полностью автоматизированного склада для обработки 50,000 заказов в день
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Было</div>
                  <div className="text-lg font-semibold text-warehouse-gray">8 часов на обработку</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Стало</div>
                  <div className="text-lg font-semibold text-tech">2 часа на обработку</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Экономия</div>
                  <div className="text-lg font-semibold text-tech">75% времени</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-warehouse-gray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Готовы автоматизировать ваш склад?</h2>
              <p className="text-xl mb-8 opacity-90">
                Получите бесплатную консультацию и расчет ROI для вашего проекта
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-tech-light" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-tech-light" size={20} />
                  <span>info@autowarehouse.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-tech-light" size={20} />
                  <span>Москва, ул. Технологическая, 1</span>
                </div>
              </div>
            </div>
            <Card className="bg-white text-warehouse-gray">
              <CardHeader>
                <CardTitle>Запросить консультацию</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Компания</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech"
                    placeholder="Название компании"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech"
                    placeholder="+7 (xxx) xxx-xx-xx"
                  />
                </div>
                <Button className="w-full bg-tech hover:bg-tech-dark">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warehouse-gray border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 AutoWarehouse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
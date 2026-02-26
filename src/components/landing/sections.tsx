import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Магазин открыт</Badge>,
    title: "Telegram аккаунты. Быстро и надёжно.",
    showButton: true,
    buttonText: 'Купить аккаунт'
  },
  {
    id: 'about',
    title: 'Почему выбирают нас?',
    content: 'Работаем официально, без мошенничества. Каждый аккаунт проверен вручную перед продажей — вы получаете только живые и рабочие аккаунты.'
  },
  {
    id: 'features',
    title: 'Что входит в продажу',
    content: 'Полный доступ к аккаунту, сессия + номер телефона. Аккаунты любого возраста и региона — под любые задачи: инвайтинг, рассылки, прогрев.'
  },
  {
    id: 'testimonials',
    title: 'Тысячи довольных клиентов',
    content: 'Покупатели возвращаются снова — ценят скорость доставки, честные цены и замену в случае проблем.'
  },
  {
    id: 'join',
    title: 'Готовы к покупке?',
    content: 'Напишите нам прямо сейчас — ответим мгновенно, подберём нужные аккаунты и оформим сделку.',
    showButton: true,
    buttonText: 'Написать в Telegram'
  },
]
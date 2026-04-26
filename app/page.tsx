import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  ChartCandlestick,
  ChevronRight,
  CircleHelp,
  GraduationCap,
  HeartHandshake,
  LineChart,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from 'lucide-react';
import Link from 'next/link';
import { AnimateInView } from '@/components/animate-in-view';
import { SectionHeading } from '@/components/section-heading';

const trustCards = [
  {
    title: 'Обучающие модули',
    copy: 'Пошаговые уроки по рыночной механике, терминологии и дисциплине анализа.',
    icon: BookOpen,
  },
  {
    title: 'Аналитические инструменты',
    copy: 'Структурируйте наблюдения по рынку и изучайте сценарии в удобном кабинете.',
    icon: BarChart3,
  },
  {
    title: 'Управление рисками',
    copy: 'Шаблоны и рамки, которые помогают учитывать волатильность и размер риска.',
    icon: ShieldCheck,
  },
  {
    title: 'История и статистика',
    copy: 'Сохраняйте логику наблюдений, сравнивайте паттерны и отслеживайте прогресс.',
    icon: ChartCandlestick,
  },
  {
    title: 'Market insights',
    copy: 'Образовательные пояснения к рыночным условиям без директивных рекомендаций.',
    icon: BrainCircuit,
  },
  {
    title: 'Персональный прогресс',
    copy: 'Следите за этапами обучения и темами, к которым стоит вернуться.',
    icon: GraduationCap,
  },
];

const platformColumns = [
  {
    title: 'Академия трейдинга',
    points: [
      'Базовые и продвинутые уроки по устройству рынка и торговым сценариям.',
      'Короткие модули с понятной логикой: от терминов до риск-aware подхода.',
      'Материалы созданы для самостоятельного обучения без давления и hype-коммуникации.',
    ],
  },
  {
    title: 'Аналитический кабинет',
    points: [
      'Собирает рыночные данные в понятную структуру для наблюдения и сравнения.',
      'Помогает изучать волатильность, динамику и контекст движения цены.',
      'Показывает сценарии и образовательные пояснения, оставляя решение за пользователем.',
    ],
  },
  {
    title: 'Инструменты наблюдения за рынком',
    points: [
      'Списки наблюдения, шаблоны разбора и удобная система рыночных заметок.',
      'Сравнение условий рынка по нескольким факторам без прямых инвестиционных указаний.',
      'Фокус на дисциплине, повторяемом процессе анализа и самостоятельной оценке данных.',
    ],
  },
];

const workflow = [
  'Регистрируетесь',
  'Проходите базовые уроки',
  'Изучаете рыночные сценарии',
  'Используете аналитические инструменты',
  'Самостоятельно принимаете решения',
];

const analyticsFeatures = [
  'Структурирует данные для более наглядного анализа',
  'Помогает отслеживать сценарии и изменения контекста',
  'Показывает уровень волатильности и поведение рынка',
  'Упрощает сравнение рыночных условий по ключевым метрикам',
  'Добавляет образовательные пояснения к наблюдаемым движениям',
];

const pricingItems = [
  'Доступ к образовательным материалам',
  'Аналитический кабинет',
  'Market overview',
  'Risk-management templates',
  'Обновления платформы',
  'Поддержка',
];

const faqs = [
  {
    question: 'Robinhood торгует за меня?',
    answer:
      'Нет. Платформа предоставляет обучение и аналитические инструменты. Решения принимает пользователь.',
  },
  {
    question: 'Это инвестиционная рекомендация?',
    answer: 'Нет. Материалы носят образовательный и информационный характер.',
  },
  {
    question: 'Можно ли отменить подписку?',
    answer: 'Да, подписку можно отменить в любой момент.',
  },
  {
    question: 'Подходит ли новичкам?',
    answer: 'Да, внутри есть базовые обучающие материалы и понятная структура.',
  },
];

const footerLinks = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Risk Disclaimer', href: '/risk-disclaimer' },
  { label: 'Contact', href: '/contact' },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[size:72px_72px] opacity-[0.08]" />
      <div className="pointer-events-none absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-[28rem] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f0e]/75 backdrop-blur-2xl">
        <div className="container-shell flex h-[72px] items-center justify-between gap-4 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-glow">
              <Radar className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] text-text">ROBINHOOD</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                Independent educational analytics platform
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
            <a className="transition hover:text-text" href="#platform">Платформа</a>
            <a className="transition hover:text-text" href="#analytics">Аналитика</a>
            <a className="transition hover:text-text" href="#pricing">Тариф</a>
            <a className="transition hover:text-text" href="#faq">FAQ</a>
          </nav>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary px-4 py-2 text-sm font-medium text-[#04110c] transition hover:bg-[#00B875]"
          >
            Получить доступ
          </a>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="container-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-28">
          <AnimateInView className="space-y-8">
            <span className="pill-label">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Premium fintech learning environment
            </span>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
                Robinhood — образовательная платформа и аналитический сервис для трейдеров
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Изучайте рынок, анализируйте торговые сценарии и принимайте решения на основе данных — без обещаний доходности и навязчивых сигналов.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-[#04110c] transition hover:bg-[#00B875]"
              >
                Получить доступ
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-text transition hover:border-primary/40 hover:bg-white/10"
              >
                Посмотреть возможности
                <ChevronRight className="h-4 w-4 text-primary" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Structured analytics', 'Контекст рынка без директивных советов'],
                ['Education-first', 'Платформа помогает учиться и системно наблюдать'],
                ['Risk-aware design', 'Фокус на дисциплине и осознанном подходе'],
              ].map(([title, copy]) => (
                <div key={title} className="glass-panel rounded-3xl p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.08]">
                  <div className="text-sm font-medium text-text">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-muted">{copy}</div>
                </div>
              ))}
            </div>
          </AnimateInView>

          <AnimateInView delay={0.15} className="relative">
            <div className="glass-panel relative overflow-hidden rounded-[32px] p-4 sm:p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <div className="absolute right-4 top-4 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                AI analytics badge
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#0d1311] p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-text">Market dashboard</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Scenario analysis workspace</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Live overview
                  </div>
                </div>

                <div className="mt-6 rounded-[24px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
                  <div className="flex items-end justify-between text-xs text-muted">
                    <span>Market trend</span>
                    <span>Volatility index: Moderate</span>
                  </div>
                  <div className="mt-4 h-48 rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,208,132,0.12),transparent_55%)] p-4">
                    <svg viewBox="0 0 480 180" className="h-full w-full" fill="none" aria-hidden="true">
                      <path d="M0 134C40 126 60 90 100 84C140 78 154 110 196 104C240 97 254 42 296 38C338 34 365 96 402 90C430 85 450 58 480 18" stroke="rgba(0,208,132,0.95)" strokeWidth="3" strokeLinecap="round" />
                      <path d="M0 134C40 126 60 90 100 84C140 78 154 110 196 104C240 97 254 42 296 38C338 34 365 96 402 90C430 85 450 58 480 18V180H0V134Z" fill="url(#area)" />
                      <defs>
                        <linearGradient id="area" x1="240" y1="18" x2="240" y2="180" gradientUnits="userSpaceOnUse">
                          <stop stopColor="rgba(0,208,132,0.28)" />
                          <stop offset="1" stopColor="rgba(0,208,132,0)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="glass-panel rounded-[24px] p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-primary/20 bg-primary/10 p-2 text-primary">
                        <LineChart className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text">Market Analysis</div>
                        <div className="text-xs text-muted">Scenario context and comparative metrics</div>
                      </div>
                    </div>
                    <div className="mt-4 text-2xl font-semibold text-text">84%</div>
                    <div className="mt-1 text-sm text-muted">Data structure completeness for the current watchlist</div>
                  </div>

                  <div className="glass-panel rounded-[24px] p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-primary/20 bg-primary/10 p-2 text-primary">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text">Risk Level</div>
                        <div className="text-xs text-muted">Volatility-aware context overview</div>
                      </div>
                    </div>
                    <div className="mt-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                      Moderate exposure environment
                    </div>
                  </div>

                  <div className="glass-panel rounded-[24px] p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/20 sm:col-span-2">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-medium text-text">Education Progress</div>
                        <div className="mt-1 text-xs text-muted">Learning track completion across market basics, structure, and risk</div>
                      </div>
                      <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">Week 4</div>
                    </div>
                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary to-[#00B875]" />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted">
                      <span>68% completed</span>
                      <span>Next: Volatility and scenario review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-shell">
          <AnimateInView>
            <SectionHeading
              eyebrow="Trust & clarity"
              title="Создано для осознанного подхода к трейдингу"
              description="Платформа помогает выстроить аккуратный процесс обучения и анализа, где в центре внимания находятся данные, дисциплина и понимание рыночного контекста."
            />
          </AnimateInView>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {trustCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <AnimateInView key={card.title} delay={index * 0.05}>
                  <article className="glass-panel group h-full rounded-[28px] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:bg-white/[0.07]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-text">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{card.copy}</p>
                  </article>
                </AnimateInView>
              );
            })}
          </div>
        </div>
      </section>

      <section id="platform" className="py-16 sm:py-20">
        <div className="container-shell">
          <AnimateInView>
            <SectionHeading
              eyebrow="Inside the platform"
              title="Что внутри платформы"
              description="Robinhood объединяет обучение, наблюдение за рынком и аналитическую структуру в одном интерфейсе, чтобы пользователю было проще разбираться в данных и выстраивать собственный процесс принятия решений."
              align="center"
            />
          </AnimateInView>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {platformColumns.map((column, index) => (
              <AnimateInView key={column.title} delay={index * 0.08}>
                <article className="glass-panel h-full rounded-[30px] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-medium text-text">{column.title}</h3>
                  </div>
                  <div className="mt-6 space-y-4">
                    {column.points.map((point) => (
                      <div key={point} className="flex gap-3 text-sm leading-7 text-muted">
                        <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-shell">
          <div className="glass-panel rounded-[34px] p-6 sm:p-8 lg:p-10">
            <AnimateInView>
              <SectionHeading
                eyebrow="How it works"
                title="Как это работает"
                description="Сценарий использования платформы выстроен так, чтобы пользователь сначала понимал основы, затем изучал рынок и только после этого принимал собственные решения."
              />
            </AnimateInView>

            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <AnimateInView key={step} delay={index * 0.06}>
                  <div className="relative h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-primary/20 hover:bg-white/[0.06]">
                    <div className="text-xs uppercase tracking-[0.22em] text-muted">Step {index + 1}</div>
                    <div className="mt-4 text-lg font-medium leading-7 text-text">{step}</div>
                    {index < workflow.length - 1 ? (
                      <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-primary/60 to-transparent lg:block" />
                    ) : null}
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="analytics" className="py-16 sm:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimateInView>
            <SectionHeading
              eyebrow="Analytics service"
              title="Аналитический сервис, который помогает видеть рынок структурнее"
              description="Инструменты Robinhood созданы для аккуратной работы с рыночным контекстом: они помогают наблюдать, сравнивать и объяснять данные, не подменяя собой личное решение пользователя."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['Volatility overview', 'Показывает изменения состояния рынка в наглядной форме.'],
                ['Scenario tracking', 'Сохраняет наблюдения по сценариям и контексту.'],
                ['Educational notes', 'Добавляет понятные пояснения к рыночным условиям.'],
                ['Comparison workspace', 'Помогает сопоставлять рыночные условия между периодами.'],
              ].map(([title, copy]) => (
                <div key={title} className="glass-panel rounded-[24px] p-5">
                  <div className="text-sm font-medium text-text">{title}</div>
                  <div className="mt-2 text-sm leading-7 text-muted">{copy}</div>
                </div>
              ))}
            </div>
          </AnimateInView>

          <AnimateInView delay={0.1}>
            <div className="glass-panel rounded-[34px] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-medium text-text">Robinhood analytics workspace</div>
                  <div className="mt-1 text-sm text-muted">Built for clarity, observation, and risk-aware learning</div>
                </div>
                <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary">
                  Education + analytics
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {analyticsFeatures.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      {index === 0 ? <WalletCards className="h-4 w-4" /> : index === 1 ? <Radar className="h-4 w-4" /> : index === 2 ? <LineChart className="h-4 w-4" /> : index === 3 ? <ChartCandlestick className="h-4 w-4" /> : <CircleHelp className="h-4 w-4" />}
                    </div>
                    <p className="text-sm leading-7 text-muted">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      <section id="pricing" className="py-16 sm:py-20">
        <div className="container-shell">
          <AnimateInView>
            <SectionHeading
              eyebrow="Pricing"
              title="Прозрачный доступ к платформе"
              description="Один тариф без агрессивных upsell-механик: обучение, аналитический кабинет и обновления платформы в единой подписке."
              align="center"
            />
          </AnimateInView>

          <AnimateInView delay={0.08} className="mx-auto mt-10 max-w-4xl">
            <div className="glass-panel relative overflow-hidden rounded-[36px] p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <div className="pill-label">Robinhood Access</div>
                  <div className="mt-6 text-5xl font-semibold tracking-tight text-text">от $29</div>
                  <div className="mt-2 text-lg text-muted">/ месяц</div>
                  <p className="mt-6 max-w-md text-sm leading-7 text-muted">
                    Подписка открывает доступ к образовательной части платформы, аналитическим инструментам и регулярным обновлениям сервиса.
                  </p>
                  <a
                    href="mailto:support@robinhood.kz?subject=Robinhood%20Access"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-[#04110c] transition hover:bg-[#00B875]"
                  >
                    Оформить доступ
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="mt-4 text-sm text-muted">Подписку можно отменить в любой момент.</div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {pricingItems.map((item) => (
                    <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-sm text-muted">
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-shell">
          <AnimateInView>
            <div className="rounded-[34px] border border-primary/20 bg-[linear-gradient(135deg,rgba(0,208,132,0.14),rgba(255,255,255,0.04))] p-6 shadow-glow sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="pill-label border-primary/20 bg-black/10 text-primary">Risk disclosure</div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                    Важное уведомление о рисках
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[#d8e2de]">
                    Robinhood предоставляет образовательные материалы и аналитические инструменты. Мы не предоставляем индивидуальные инвестиционные рекомендации, не управляем средствами пользователей и не гарантируем финансовый результат. Все решения пользователь принимает самостоятельно.
                  </p>
                </div>
                <div className="glass-panel max-w-sm rounded-[28px] p-5">
                  <div className="flex items-center gap-3 text-text">
                    <LockKeyhole className="h-5 w-5 text-primary" />
                    <span className="font-medium">Compliance-first messaging</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Тексты и интерфейс построены вокруг обучения, аналитики и самостоятельного принятия решений.
                  </p>
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-20">
        <div className="container-shell">
          <AnimateInView>
            <SectionHeading
              eyebrow="FAQ"
              title="Частые вопросы"
              description="Коротко о том, как устроен сервис и где проходят границы между аналитикой, обучением и личными решениями пользователя."
            />
          </AnimateInView>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <AnimateInView key={faq.question} delay={index * 0.05}>
                <article className="glass-panel rounded-[28px] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <HeartHandshake className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-text">{faq.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
                    </div>
                  </div>
                </article>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-text">ROBINHOOD</div>
            <div className="mt-2 text-sm text-muted">Independent educational analytics platform</div>
            <a className="mt-4 inline-block text-sm text-primary transition hover:text-[#00B875]" href="mailto:support@robinhood.kz">
              support@robinhood.kz
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {footerLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-text">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

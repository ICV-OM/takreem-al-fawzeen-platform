import {
  ArrowLeft,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Menu,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react';

const categories = [
  'القيادة والإدارة',
  'المهارات المهنية',
  'التحول الرقمي',
  'ريادة الأعمال',
  'السلامة والجودة',
  'الموارد البشرية',
];

const services = [
  {
    icon: GraduationCap,
    title: 'تدريب احترافي معتمد',
    description: 'برامج حضورية وعن بُعد مبنية على احتياجات سوق العمل ومؤشرات أداء واضحة.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'توظيف وربط بالمؤسسات',
    description: 'مسارات تأهيل تنتهي بملف مهني قابل للعرض وفرص مقابلات وشراكات تشغيلية.',
  },
  {
    icon: Handshake,
    title: 'استشارات مؤسسية',
    description: 'تشخيص الفجوات وبناء خطط تدريب وقياس أثر تناسب الجهات الحكومية والخاصة.',
  },
];

const programs = [
  {
    badge: 'الأكثر طلباً',
    title: 'إدارة المشاريع الاحترافية',
    category: 'القيادة والإدارة',
    duration: '5 أسابيع',
    lessons: '18 وحدة',
    level: 'متوسط',
  },
  {
    badge: 'مسار توظيف',
    title: 'مهارات سوق العمل والمقابلات',
    category: 'المهارات المهنية',
    duration: '3 أسابيع',
    lessons: '12 وحدة',
    level: 'مبتدئ',
  },
  {
    badge: 'رقمي',
    title: 'التحول الرقمي وأدوات الذكاء الاصطناعي',
    category: 'التحول الرقمي',
    duration: '4 أسابيع',
    lessons: '16 وحدة',
    level: 'متقدم',
  },
];

const pathways = [
  'تقييم مستوى المتدرب وتحديد الفجوات',
  'خطة تعلم شخصية مع مرشد مهني',
  'مشاريع تطبيقية وشهادات إنجاز',
  'تجهيز السيرة الذاتية وربط بفرص العمل',
];

const stats = [
  { value: '+12K', label: 'متدرب مستهدف سنوياً' },
  { value: '+180', label: 'برنامج تدريبي واستشاري' },
  { value: '+55', label: 'شريك وجهة مستفيدة' },
  { value: '92%', label: 'مؤشر رضا المتدربين' },
];

const improvements = [
  'واجهة عربية RTL أوضح من الموقع المرجعي مع دعوات إجراء بارزة.',
  'دمج التدريب والتوظيف والاستشارات في رحلة واحدة بدلاً من عرض الدورات فقط.',
  'بطاقات برامج قابلة للمقارنة، ومسار تعلم واضح، ونموذج تواصل مباشر.',
  'هوية بصرية حديثة للريادة بألوان موثوقة وتدرجات فاخرة وحركة خفيفة.',
];

const navItems = ['البرامج', 'المسارات', 'الاستشارات', 'الشركاء', 'تواصل معنا'];

const Index = () => {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f7f4ed] text-slate-950 selection:bg-amber-300/70 selection:text-slate-950">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#d8b15b_0,transparent_34%),linear-gradient(135deg,#071c33_0%,#0b2f4f_48%,#0f594f_100%)] text-white">
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -right-32 top-24 -z-10 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

        <header className="container mx-auto flex items-center justify-between px-5 py-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="الريادة - الصفحة الرئيسية">
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-amber-200/40 bg-white/10 shadow-2xl backdrop-blur">
              <Sparkles className="h-7 w-7 text-amber-200" />
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-100">الهوية</p>
              <h1 className="text-2xl font-black tracking-tight">الريادة</h1>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/80 lg:flex" aria-label="روابط رئيسية">
            {navItems.map((item) => (
              <a key={item} href={`#${item.replace(' ', '-')}`} className="transition hover:text-amber-200">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:info@Artec.om"
              className="hidden rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-amber-200 hover:bg-white/10 md:inline-flex"
            >
              info@Artec.om
            </a>
            <button className="rounded-full bg-white/10 p-3 text-white backdrop-blur lg:hidden" aria-label="فتح القائمة">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div id="top" className="container mx-auto grid items-center gap-12 px-5 pb-24 pt-10 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pb-32 lg:pt-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/10 px-4 py-2 text-sm font-bold text-amber-100 backdrop-blur">
              <Award className="h-4 w-4" />
              معهد للتدريب والتوظيف والاستشارات في سلطنة عُمان
            </div>
            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              معهد الريادة للتدريب والتوظيف والاستشارات
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/80 md:text-xl">
              منصة تعليمية ومهنية متكاملة تمنح المتدرب برنامجاً واضحاً، مرشداً عملياً، وشراكات تشغيلية تحول المعرفة إلى أثر وظيفي ومؤسسي قابل للقياس.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#البرامج"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 text-base font-black text-slate-950 shadow-2xl shadow-amber-900/30 transition hover:-translate-y-1 hover:bg-amber-200"
              >
                استكشف البرامج
                <ArrowLeft className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@Artec.om"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                اطلب استشارة
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-sm font-bold text-emerald-700">لوحة أثر التدريب</p>
                    <h3 className="text-2xl font-black">رحلة الريادة</h3>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {pathways.map((step, index) => (
                    <div key={step} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0b2f4f] text-sm font-black text-amber-200">
                        {index + 1}
                      </span>
                      <p className="font-bold text-slate-800">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl bg-gradient-to-l from-amber-300 to-amber-100 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-slate-700">الخطوة التالية</p>
                      <h4 className="mt-1 text-xl font-black">ابدأ بتقييم مهاراتك</h4>
                    </div>
                    <PlayCircle className="h-12 w-12 text-slate-900" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-6 hidden rounded-3xl bg-white p-5 text-slate-950 shadow-2xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3 space-x-reverse">
                  {[1, 2, 3].map((item) => (
                    <span key={item} className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-emerald-100 text-sm font-black text-emerald-800">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-black">دفعات تدريبية مستمرة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto -mt-12 grid gap-4 px-5 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur">
            <p className="text-3xl font-black text-[#0b2f4f]">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-5 py-20 lg:px-8" id="البرامج">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-black text-emerald-700">برامج الريادة</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">تجربة تدريبية أجمل، أسرع، وأوضح من منصات عرض الدورات التقليدية</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            بعد دراسة بنية الموقع المرجعي، تم تطوير واجهة تجمع: التصنيفات، الدورات، المساقات، المدربين، العملاء، الأرقام، والتواصل؛ مع تحسين الرحلة والتحويل للمعهد الجديد.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-[#0b2f4f] group-hover:text-amber-200">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-900/5">
              <div className="h-36 bg-[radial-gradient(circle_at_20%_20%,#f7d77b,transparent_32%),linear-gradient(135deg,#0b2f4f,#0f594f)] p-5 text-white">
                <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-black backdrop-blur">{program.badge}</span>
              </div>
              <div className="p-6">
                <p className="text-sm font-bold text-emerald-700">{program.category}</p>
                <h3 className="mt-2 text-2xl font-black leading-snug">{program.title}</h3>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-2xl bg-slate-50 p-3"><b>{program.duration}</b><span className="mt-1 block text-slate-500">المدة</span></div>
                  <div className="rounded-2xl bg-slate-50 p-3"><b>{program.lessons}</b><span className="mt-1 block text-slate-500">المحتوى</span></div>
                  <div className="rounded-2xl bg-slate-50 p-3"><b>{program.level}</b><span className="mt-1 block text-slate-500">المستوى</span></div>
                </div>
                <a href="mailto:info@Artec.om" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 font-black text-white transition hover:bg-emerald-800">
                  سجل اهتمامك
                  <ChevronLeft className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="المسارات" className="bg-white py-20">
        <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="font-black text-emerald-700">من التحليل إلى التصميم</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">ما الذي تم تحسينه مقارنة بالموقع المرجعي؟</h2>
            <p className="mt-5 leading-8 text-slate-600">
              الموقع المرجعي يعتمد على رأس تصفح، اقتراحات، بطاقات دورات، مساقات، مدربين، عملاء، أرقام، ونموذج سؤال. التصميم الجديد يحافظ على هذه البنية الناجحة، لكنه يعيد ترتيبها حول قيمة الريادة: التدريب + التوظيف + الاستشارات.
            </p>
          </div>
          <div className="grid gap-4">
            {improvements.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-slate-100 bg-[#f7f4ed] p-5">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-emerald-700" />
                <p className="font-bold leading-8 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="الاستشارات" className="container mx-auto px-5 py-20 lg:px-8">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-[#0b2f4f] text-white shadow-2xl lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="font-black text-amber-200">استشارات وتوظيف</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">حلول للجهات التي تريد أثراً قابلاً للقياس</h2>
            <div className="mt-8 grid gap-4">
              {['تحليل احتياج تدريبي للفرق', 'تصميم حقائب تدريبية وهوية برامج', 'تأهيل باحثين عن عمل وربطهم بالفرص', 'لوحات قياس أثر وتوصيات تطوير'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                  <ShieldCheck className="h-5 w-5 text-amber-200" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[radial-gradient(circle_at_top,#f5c451,transparent_35%),linear-gradient(135deg,#0f594f,#061827)] p-8 md:p-12">
            <div className="rounded-[2rem] bg-white p-6 text-slate-950">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-emerald-700" />
                <h3 className="text-2xl font-black">نموذج طلب سريع</h3>
              </div>
              <div className="mt-6 grid gap-4">
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-emerald-600" placeholder="الاسم" />
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-emerald-600" placeholder="البريد الإلكتروني" />
                <textarea className="min-h-28 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-emerald-600" placeholder="اكتب احتياجك التدريبي أو الاستشاري" />
                <a href="mailto:info@Artec.om" className="rounded-2xl bg-amber-300 px-5 py-4 text-center font-black text-slate-950 transition hover:bg-amber-200">
                  إرسال الطلب إلى info@Artec.om
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="الشركاء" className="bg-[#efe8d8] py-20">
        <div className="container mx-auto px-5 text-center lg:px-8">
          <p className="font-black text-emerald-700">مجتمع الريادة</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">مدربون، جهات، وخبراء في منظومة واحدة</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {['خبراء قيادة وإدارة', 'مدربون تقنيون', 'شركاء توظيف'].map((partner, index) => (
              <div key={partner} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0b2f4f] text-xl font-black text-amber-200">{index + 1}</div>
                <h3 className="mt-5 text-xl font-black">{partner}</h3>
                <div className="mt-4 flex justify-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="تواصل-معنا" className="bg-slate-950 px-5 py-12 text-white lg:px-8">
        <div className="container mx-auto grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-300 text-slate-950"><Sparkles className="h-6 w-6" /></div>
              <div>
                <p className="text-sm text-white/60">معهد الريادة</p>
                <h2 className="text-2xl font-black">الريادة</h2>
              </div>
            </div>
            <p className="mt-5 leading-8 text-white/65">تدريب وتوظيف واستشارات بمنهجية عملية تصنع انتقالاً مهنياً ومؤسسياً واضحاً.</p>
          </div>
          <div>
            <h3 className="font-black text-amber-200">روابط سريعة</h3>
            <div className="mt-5 grid gap-3 text-white/70">
              {navItems.map((item) => <a key={item} href={`#${item.replace(' ', '-')}`} className="hover:text-white">{item}</a>)}
            </div>
          </div>
          <div>
            <h3 className="font-black text-amber-200">التواصل</h3>
            <div className="mt-5 grid gap-4 text-white/75">
              <a className="flex items-center gap-3 hover:text-white" href="mailto:info@Artec.om"><Mail className="h-5 w-5 text-amber-200" /> info@Artec.om</a>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-200" /> سلطنة عُمان</p>
              <p className="flex items-center gap-3"><Users className="h-5 w-5 text-amber-200" /> برامج للأفراد والمؤسسات</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          جميع الحقوق محفوظة © معهد الريادة للتدريب والتوظيف والاستشارات
        </div>
      </footer>
    </main>
  );
};

export default Index;

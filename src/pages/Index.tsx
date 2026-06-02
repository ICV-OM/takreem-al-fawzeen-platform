import {
  ArrowLeft,
  Bell,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  FileText,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react';

const navItems = ['الرئيسية', 'عن المعهد', 'البرامج', 'التوظيف', 'الاستشارات', 'الأخبار', 'تواصل معنا'];

const quickServices = [
  { icon: GraduationCap, title: 'التسجيل في البرامج', text: 'اختر المسار المناسب وارسل طلب الالتحاق خلال دقائق.' },
  { icon: FileText, title: 'تقييم الاحتياج التدريبي', text: 'نموذج سريع لتحديد المهارات والفجوات وخطة التطوير.' },
  { icon: BriefcaseBusiness, title: 'بوابة التوظيف', text: 'تجهيز السيرة الذاتية وربط الخريجين بفرص العمل.' },
  { icon: Handshake, title: 'طلب استشارة', text: 'حلول للجهات والمؤسسات في التدريب والموارد البشرية.' },
];

const programs = [
  { title: 'إدارة المشاريع الاحترافية', tag: 'قيادة وإدارة', date: 'يبدأ قريباً', duration: '5 أسابيع' },
  { title: 'مهارات سوق العمل والمقابلات', tag: 'مسار توظيف', date: 'متاح الآن', duration: '3 أسابيع' },
  { title: 'التحول الرقمي والذكاء الاصطناعي', tag: 'تقنية', date: 'دفعة جديدة', duration: '4 أسابيع' },
  { title: 'إعداد المدربين وتصميم الحقائب', tag: 'تطوير مؤسسي', date: 'حسب الطلب', duration: '6 أسابيع' },
];

const announcements = [
  'فتح باب التسجيل في برامج الربع القادم للأفراد والمؤسسات.',
  'إطلاق مسار التهيئة الوظيفية وربط الخريجين بفرص مقابلات.',
  'استقبال طلبات الاستشارات المؤسسية وتحليل الاحتياج التدريبي.',
];

const stats = [
  { value: '+12K', label: 'متدرب مستهدف' },
  { value: '+180', label: 'برنامج ومسار' },
  { value: '+55', label: 'شريك وجهة' },
  { value: '92%', label: 'رضا المتدربين' },
];

const steps = [
  'تقييم أولي للمهارات والهدف المهني',
  'اختيار مسار تدريبي أو استشاري مناسب',
  'مشاريع تطبيقية وملف إنجاز للمتدرب',
  'توجيه مهني وربط بجهات وفرص عمل',
];

const testimonials = [
  { name: 'سارة العلوية', role: 'أخصائية موارد بشرية', quote: 'المسار واضح ومنظم، وساعدني في تجهيز ملف مهني قابل للتقديم.' },
  { name: 'محمد البلوشي', role: 'رائد أعمال ناشئ', quote: 'الاستشارة حولت فكرتي إلى خطة تنفيذ وخطوات عملية قابلة للقياس.' },
  { name: 'ريم الحارثية', role: 'خريجة مسار رقمي', quote: 'التدريب كان عملياً، والتمارين جعلتني أكثر استعداداً لسوق العمل.' },
];

const Index = () => {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f4f6f8] text-slate-900 selection:bg-[#c99a43]/30">
      <div className="bg-[#7a1f3d] text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-5 py-2 text-xs font-semibold lg:px-8">
          <div className="flex items-center gap-4">
            <span>سلطنة عُمان</span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <a href="mailto:info@Artec.om" className="inline-flex items-center gap-2 hover:text-amber-100">
              <Mail className="h-3.5 w-3.5" /> info@Artec.om
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#تواصل-معنا" className="hover:text-amber-100">الدعم والمساعدة</a>
            <span>العربية</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-5 py-4 lg:px-8">
          <a href="#الرئيسية" className="flex items-center gap-3" aria-label="الريادة - الرئيسية">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#0a6f69] to-[#063f5c] text-white shadow-lg">
              <Sparkles className="h-8 w-8 text-[#e9c46a]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#7a1f3d]">معهد الريادة</p>
              <h1 className="text-xl font-black leading-tight md:text-2xl">للتدريب والتوظيف والاستشارات</h1>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full bg-slate-100 p-1 text-sm font-bold lg:flex" aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <a key={item} href={`#${item.replace(' ', '-')}`} className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-white hover:text-[#7a1f3d] hover:shadow-sm">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#تواصل-معنا" className="hidden rounded-full bg-[#0a6f69] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#07534f] md:inline-flex">
              تواصل معنا
            </a>
            <button className="rounded-full border border-slate-200 p-3 lg:hidden" aria-label="فتح القائمة">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section id="الرئيسية" className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-56 bg-[linear-gradient(135deg,#063f5c_0%,#0a6f69_60%,#e9c46a_160%)]" />
        <div className="container relative mx-auto grid gap-8 px-5 py-10 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
          <div className="rounded-[2rem] bg-white p-7 shadow-2xl shadow-slate-900/10 md:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f8ead4] px-4 py-2 text-sm font-black text-[#7a1f3d]">
              <ShieldCheck className="h-4 w-4" /> بوابة الريادة للخدمات التدريبية
            </div>
            <h2 className="text-4xl font-black leading-tight text-[#17324d] md:text-6xl">
              تدريبٌ يقودك إلى وظيفة، واستشارةٌ تصنع أثراً
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
              تصميم جديد مستوحى من بوابات الخدمات الحكومية العُمانية: رأس واضح، بحث سريع، خدمات مباشرة، أخبار وتنبيهات، ومسارات منظمة للأفراد والمؤسسات.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#البرامج" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7a1f3d] px-6 py-4 font-black text-white shadow-lg transition hover:bg-[#5f1730]">
                ابدأ التسجيل
                <ArrowLeft className="h-5 w-5" />
              </a>
              <a href="mailto:info@Artec.om" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-black text-[#17324d] transition hover:border-[#0a6f69] hover:text-[#0a6f69]">
                طلب استشارة
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-[#17324d] p-6 text-white shadow-2xl">
            <div className="rounded-2xl bg-white p-3 shadow-xl">
              <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500">
                <Search className="h-5 w-5 text-[#0a6f69]" />
                <span>ابحث عن برنامج، خدمة، أو استشارة...</span>
              </label>
            </div>
            <div className="mt-6 grid gap-3">
              {announcements.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <Bell className="mt-1 h-5 w-5 shrink-0 text-[#e9c46a]" />
                  <p className="leading-7 text-white/90">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[#e9c46a] p-5 text-[#17324d]">
              <p className="text-sm font-bold">خدمة مباشرة</p>
              <h3 className="mt-1 text-2xl font-black">تقييم جاهزيتك المهنية</h3>
            </div>
          </aside>
        </div>
      </section>

      <section className="container mx-auto -mt-3 grid gap-4 px-5 pb-14 lg:grid-cols-4 lg:px-8">
        {quickServices.map((service) => (
          <a key={service.title} href="#تواصل-معنا" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0a6f69] hover:shadow-xl">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#e8f4f2] text-[#0a6f69] group-hover:bg-[#0a6f69] group-hover:text-white">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black text-[#17324d]">{service.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
          </a>
        ))}
      </section>

      <section className="bg-[#eef2f5] py-16" id="عن-المعهد">
        <div className="container mx-auto grid gap-8 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="font-black text-[#0a6f69]">عن المعهد</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#17324d] md:text-5xl">تجربة منظمة مثل بوابات الخدمات، بروح تدريبية حديثة</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl bg-white p-5 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#7a1f3d] text-sm font-black text-white">{index + 1}</span>
                <p className="mt-4 font-bold leading-8 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="البرامج" className="container mx-auto px-5 py-16 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-black text-[#0a6f69]">البرامج والمسارات</p>
            <h2 className="mt-3 text-3xl font-black text-[#17324d] md:text-5xl">اختيارات واضحة حسب الهدف</h2>
          </div>
          <a href="mailto:info@Artec.om" className="inline-flex items-center gap-2 rounded-xl bg-[#17324d] px-5 py-3 font-black text-white hover:bg-[#0f2539]">
            اطلب خطة مخصصة <ChevronLeft className="h-5 w-5" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <article key={program.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-[#f8ead4] px-3 py-1 text-xs font-black text-[#7a1f3d]">{program.tag}</span>
              <h3 className="mt-5 min-h-16 text-xl font-black leading-8 text-[#17324d]">{program.title}</h3>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#0a6f69]" /> {program.date}</p>
                <p className="flex items-center gap-2"><BookOpenCheck className="h-4 w-4 text-[#0a6f69]" /> {program.duration}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="التوظيف" className="bg-white py-16">
        <div className="container mx-auto grid gap-8 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border-r-4 border-[#0a6f69] bg-[#f8fafc] p-6">
              <p className="text-4xl font-black text-[#7a1f3d]">{stat.value}</p>
              <p className="mt-2 font-bold text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="الاستشارات" className="container mx-auto px-5 py-16 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#17324d] text-white shadow-2xl lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="font-black text-[#e9c46a]">الاستشارات والتطوير المؤسسي</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">نحو خطط تدريب قابلة للقياس</h2>
            <div className="mt-8 grid gap-4">
              {['تحليل احتياج تدريبي', 'تصميم حقائب وبرامج', 'تأهيل للوظائف والمقابلات', 'قياس أثر وتوصيات تطوير'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 text-[#e9c46a]" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0a6f69] p-8 md:p-12" id="تواصل-معنا">
            <div className="rounded-2xl bg-white p-6 text-slate-900">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-[#7a1f3d]" />
                <h3 className="text-2xl font-black">نموذج تواصل سريع</h3>
              </div>
              <div className="mt-6 grid gap-4">
                <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-[#0a6f69]" placeholder="الاسم" />
                <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-[#0a6f69]" placeholder="البريد الإلكتروني" />
                <textarea className="min-h-28 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-[#0a6f69]" placeholder="اكتب احتياجك" />
                <a href="mailto:info@Artec.om" className="rounded-xl bg-[#7a1f3d] px-5 py-4 text-center font-black text-white hover:bg-[#5f1730]">
                  إرسال الطلب إلى info@Artec.om
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="الأخبار" className="bg-[#eef2f5] py-16">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mb-10 text-center">
            <p className="font-black text-[#0a6f69]">الأخبار والتنبيهات</p>
            <h2 className="mt-3 text-3xl font-black text-[#17324d] md:text-5xl">كل ما يحتاجه المتدرب في مكان واحد</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {announcements.map((item) => (
              <article key={item} className="rounded-2xl bg-white p-6 shadow-sm">
                <Bell className="h-7 w-7 text-[#7a1f3d]" />
                <p className="mt-4 font-bold leading-8 text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="آراء-المتدربين" className="container mx-auto px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="font-black text-[#0a6f69]">قصص نجاح</p>
          <h2 className="mt-3 text-3xl font-black text-[#17324d] md:text-5xl">آراء المتدربين والشركاء</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex gap-1 text-[#e9c46a]">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="leading-8 text-slate-700">&quot;{item.quote}&quot;</p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <h3 className="font-black">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#17324d] px-5 py-12 text-white lg:px-8">
        <div className="container mx-auto grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e9c46a] text-[#17324d]"><Building2 className="h-6 w-6" /></div>
              <div>
                <p className="text-sm text-white/60">معهد الريادة</p>
                <h2 className="text-2xl font-black">الريادة</h2>
              </div>
            </div>
            <p className="mt-5 leading-8 text-white/70">تصميم خدمي واضح للتدريب والتوظيف والاستشارات في سلطنة عُمان.</p>
          </div>
          <div>
            <h3 className="font-black text-[#e9c46a]">روابط مهمة</h3>
            <div className="mt-5 grid gap-3 text-white/70">
              {navItems.map((item) => <a key={item} href={`#${item.replace(' ', '-')}`} className="hover:text-white">{item}</a>)}
            </div>
          </div>
          <div>
            <h3 className="font-black text-[#e9c46a]">التواصل</h3>
            <div className="mt-5 grid gap-4 text-white/75">
              <a className="flex items-center gap-3 hover:text-white" href="mailto:info@Artec.om"><Mail className="h-5 w-5 text-[#e9c46a]" /> info@Artec.om</a>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#e9c46a]" /> سلطنة عُمان</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#e9c46a]" /> تواصل للأفراد والمؤسسات</p>
              <p className="flex items-center gap-3"><Users className="h-5 w-5 text-[#e9c46a]" /> تدريب وتوظيف واستشارات</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;

import React, { useMemo, useState } from 'react';
import {
  ArrowUp,
  Camera,
  CheckCircle2,
  Clapperboard,
  Download,
  ImagePlus,
  Layers3,
  MessageSquareText,
  Play,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

const promptExamples = [
  'لقطة سينمائية لطائرة درون تعبر فوق صحراء ذهبية عند الغروب',
  'طفل يرسم مدينة مستقبلية تتحول إلى مشهد ثلاثي الأبعاد نابض بالحياة',
  'منتج عطر فاخر يدور فوق موجات حريرية مع إضاءة ناعمة',
];

const visualCards = [
  { title: 'مشهد افتتاحي', gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500', label: '0:00' },
  { title: 'حركة كاميرا', gradient: 'from-cyan-400 via-blue-500 to-violet-600', label: '0:04' },
  { title: 'إخراج نهائي', gradient: 'from-amber-300 via-orange-500 to-rose-500', label: '0:08' },
];

const featureSteps = [
  'اكتب وصفاً تفصيلياً أو ارفع صورة مرجعية',
  'اختر النمط، مدة الفيديو، ونسبة العرض المناسبة للهاتف',
  'اضغط إنشاء وشاهد خطة التوليد والنتيجة التجريبية',
];

const Index = () => {
  const [mode, setMode] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState(promptExamples[0]);
  const [duration, setDuration] = useState('8');
  const [style, setStyle] = useState('سينمائي');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(68);

  const storyboard = useMemo(
    () =>
      prompt
        .split(' ')
        .filter(Boolean)
        .slice(0, 9)
        .join(' ') || 'اكتب وصف الفيديو هنا لعرض مخطط المشاهد',
    [prompt],
  );

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress((current) => (current >= 100 ? 24 : Math.min(current + 16, 96)));
  };

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#080b1e] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute -left-20 top-72 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-4 py-5 sm:px-6 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:py-10">
        <div className="space-y-7 lg:order-2">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-400 to-cyan-300 text-slate-950 shadow-lg shadow-fuchsia-500/30">
                <Clapperboard className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold">استوديو الفيديو الذكي</p>
                <p className="text-xs text-slate-300">Text/Image to Video</p>
              </div>
            </div>
            <button className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-white/10">
              تجربة مجانية
            </button>
          </nav>

          <div className="space-y-5 text-center lg:text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Sparkles className="h-4 w-4" />
              تطبيق هاتف لإنشاء فيديوهات بالذكاء الاصطناعي
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              حوّل <span className="bg-gradient-to-l from-cyan-200 via-fuchsia-200 to-amber-100 bg-clip-text text-transparent">النصوص والصور</span> إلى فيديوهات جاهزة للنشر.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 lg:mx-0">
              واجهة عربية مخصصة للهاتف تساعد صناع المحتوى على كتابة فكرة الفيديو، رفع صورة مرجعية، ضبط النمط والمدة، ثم متابعة مراحل توليد الفيديو لحظة بلحظة.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {featureSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <span className="mb-3 grid h-9 w-9 place-items-center rounded-2xl bg-white/10 text-sm font-bold text-cyan-100">{index + 1}</span>
                <p className="text-sm leading-6 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px] lg:order-1">
          <div className="absolute -inset-4 rounded-[3.2rem] bg-gradient-to-b from-cyan-300/30 via-fuchsia-500/25 to-amber-300/25 blur-2xl" />
          <div className="relative rounded-[2.8rem] border border-white/20 bg-slate-950 p-3 shadow-2xl shadow-black/50">
            <div className="rounded-[2.3rem] border border-white/10 bg-[#11152d] p-4">
              <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/20" />

              <header className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">المشروع الحالي</p>
                  <h2 className="text-lg font-black">مولّد فيديو قصير</h2>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                  <Camera className="h-5 w-5 text-cyan-200" />
                </div>
              </header>

              <div className="mb-4 grid grid-cols-2 gap-2 rounded-3xl bg-black/25 p-1.5">
                <button
                  onClick={() => setMode('text')}
                  className={`flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold transition ${mode === 'text' ? 'bg-cyan-300 text-slate-950' : 'text-slate-300'}`}
                >
                  <MessageSquareText className="h-4 w-4" />
                  من كتابة
                </button>
                <button
                  onClick={() => setMode('image')}
                  className={`flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold transition ${mode === 'image' ? 'bg-fuchsia-300 text-slate-950' : 'text-slate-300'}`}
                >
                  <ImagePlus className="h-4 w-4" />
                  من صورة
                </button>
              </div>

              {mode === 'image' && (
                <div className="mb-4 rounded-3xl border border-dashed border-fuchsia-200/40 bg-fuchsia-200/10 p-4 text-center">
                  <ImagePlus className="mx-auto mb-2 h-8 w-8 text-fuchsia-100" />
                  <p className="text-sm font-bold">اسحب صورة المنتج أو الشخصية هنا</p>
                  <p className="mt-1 text-xs text-slate-400">PNG / JPG حتى 20MB</p>
                </div>
              )}

              <label className="mb-2 block text-sm font-bold text-slate-200">وصف الفيديو</label>
              <textarea
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                className="min-h-28 w-full resize-none rounded-3xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-7 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/70"
                placeholder="مثال: لقطة سينمائية لمنتج يدور بإضاءة درامية..."
              />

              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {promptExamples.map((example) => (
                  <button
                    key={example}
                    onClick={() => setPrompt(example)}
                    className="min-w-56 rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-2 text-right text-xs leading-5 text-slate-300 transition hover:border-cyan-200/50"
                  >
                    {example}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <label className="rounded-3xl border border-white/10 bg-white/[0.05] p-3">
                  <span className="text-xs text-slate-400">مدة الفيديو</span>
                  <select value={duration} onChange={(event) => setDuration(event.target.value)} className="mt-2 w-full bg-transparent text-sm font-bold outline-none">
                    <option className="text-slate-950" value="5">5 ثوانٍ</option>
                    <option className="text-slate-950" value="8">8 ثوانٍ</option>
                    <option className="text-slate-950" value="12">12 ثانية</option>
                  </select>
                </label>
                <label className="rounded-3xl border border-white/10 bg-white/[0.05] p-3">
                  <span className="text-xs text-slate-400">النمط</span>
                  <select value={style} onChange={(event) => setStyle(event.target.value)} className="mt-2 w-full bg-transparent text-sm font-bold outline-none">
                    <option className="text-slate-950" value="سينمائي">سينمائي</option>
                    <option className="text-slate-950" value="إعلاني">إعلاني</option>
                    <option className="text-slate-950" value="أنيميشن">أنيميشن</option>
                  </select>
                </label>
              </div>

              <section className="mt-4 rounded-[2rem] border border-white/10 bg-black/20 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers3 className="h-4 w-4 text-amber-200" />
                    <span className="text-sm font-bold">لوحة المشاهد</span>
                  </div>
                  <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-bold text-emerald-200">جاهز</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {visualCards.map((card) => (
                    <div key={card.title} className={`relative h-28 overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-2`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.45),transparent_30%)]" />
                      <span className="relative rounded-full bg-black/25 px-2 py-1 text-[10px] font-bold">{card.label}</span>
                      <p className="relative mt-10 text-xs font-black leading-5">{card.title}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-400">{storyboard}</p>
              </section>

              <div className="mt-4 rounded-3xl border border-cyan-200/15 bg-cyan-200/10 p-4">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-bold">تقدّم التوليد</span>
                  <span className="text-cyan-100">{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-gradient-to-l from-cyan-300 to-fuchsia-300 transition-all" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  {isGenerating ? `يتم إنشاء فيديو ${duration} ثوانٍ بنمط ${style}` : 'نموذج جاهز لإطلاق عملية التوليد'}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
                <button onClick={handleGenerate} className="flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-l from-cyan-300 to-fuchsia-300 px-5 py-4 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]">
                  <WandSparkles className="h-5 w-5" />
                  إنشاء الفيديو
                </button>
                <button className="grid h-14 w-14 place-items-center rounded-3xl border border-white/10 bg-white/[0.06] text-slate-200">
                  <Download className="h-5 w-5" />
                </button>
              </div>

              <footer className="mt-5 flex items-center justify-between rounded-3xl bg-white/[0.04] px-4 py-3 text-xs text-slate-300">
                <span className="flex items-center gap-2"><Play className="h-4 w-4 text-cyan-200" /> معاينة 9:16</span>
                <span className="flex items-center gap-1 text-emerald-200">رفع <ArrowUp className="h-3 w-3" /></span>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

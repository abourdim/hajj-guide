document.addEventListener('DOMContentLoaded', () => {
  let tab = 'monhajj', fcIdx = 0;
  let checked = JSON.parse(localStorage.getItem('hajj-ck') || '{}');
  let done = JSON.parse(localStorage.getItem('hajj-done') || '{}');
  let lang = localStorage.getItem('hajj-lang') || 'fr';
  let fcs = [...((lang === "ar" && HAJJ_DATA.flashcardsAr) ? HAJJ_DATA.flashcardsAr : HAJJ_DATA.flashcards)];

  // Arabic UI translations
  const AR = {
    logoTitle: 'دليل الحج', logoSub: 'الدليل الشامل للحاج',
    heroDesc: 'كل خطوة بالتفصيل، من التسجيل حتى العودة 🤲',
    searchPlaceholder: 'ابحث عن موضوع، شعيرة، دعاء...',
    tabMonHajj: 'حجّي', tabApprendre: 'تعلّم', tabPreparer: 'استعد', tabPlus: 'المزيد',
    footText: '🕋 دليل الحج — تقبّل الله حجّكم 🤲',
    // Sub-tabs Apprendre
    learnSteps: '🚶 خطوة بخطوة', learnDays: '📅 الأيام', learnRituals: '🕌 المناسك',
    learnDuas: '🤲 الأدعية', learnClothing: '👘 اللباس', learnClassif: '📊 المستويات',
    learnTypes: '⚖️ أنواع الحج', learnMap: '🗺️ الخريطة',
    // Sub-tabs Préparer
    prepChecklist: '✅ قائمة التحضير', prepDates: '🗓️ المواعيد',
    prepCosts: '💰 التكاليف', prepApps: '📱 التطبيقات', prepNusuk: '🌐 نسك',
    // Filter buttons
    filterAll: 'الكل', filterDocs: '📄 وثائق', filterClothes: '👘 ملابس',
    filterHealth: '💊 صحة', filterMisc: '🎒 متنوع',
    // Companion guide
    companionTitle: '🧑‍🏫 دليل المرافق — يوماً بيوم',
    scheduleTitle: '⏰ برنامج اليوم', duasTitle: '🤲 الأدعية الأساسية',
    packTitle: '🎒 ما تحمله', alertsTitle: '🚨 تنبيهات',
    youAreHere: '📍 أنت هنا : ',
    dayNames: ['🏕️ يوم ١ - منى','⛰️ يوم ٢ - عرفة','🎉 يوم ٣ - العيد','🪨 يوم ٤ - التشريق','👋 يوم ٥ - الوداع'],
    dayLocations: ['مكة ← منى','منى ← عرفة','منى · مكة','منى','مكة'],
    mapLabels: ['الكعبة','منى','عرفة','مزدلفة','الجمرات'],
    // Plus grid
    plusFaq: 'أسئلة شائعة', plusErrors: '❌ أخطاء شائعة', plusPractical: 'مسائل عملية',
    plusQuiz: 'اختبار', plusHealth: 'الصحة', plusHeat: 'مواجهة الحر',
    plusHandicap: 'ذوي الاحتياجات', plusTour: 'جولة افتراضية',
    plusMedina: 'دليل المدينة', plusLinks: 'روابط مفيدة',
    plusGroupQA: '❓ أسئلة وأجوبة', plusGroupHealth: '🛡️ الصحة والسلامة', plusGroupDiscover: '🕌 اكتشف',
    backBtn: 'رجوع ←',
    // Section titles for Arabic
    sectionRituals: '🕌 المناسك العشر للحج', sectionRitualsDesc: 'كل منسك بالتفصيل مع التاريخ والأحكام',
    sectionHealth: '❤️ نصائح صحية للحاج', sectionFaq: '❓ أسئلة شائعة',
    sectionErrors: '❌ أكثر ١٠ أخطاء شائعة في الحج',
    sectionChecklist: '✅ قائمة التحضير للحج', sectionMap: '🗺️ خريطة المسافات',
    sectionClassif: '📊 أركان / واجبات / سنن', sectionTypes: '⚖️ أنواع الحج الثلاثة',
    sectionClothing: '👘 لباس الإحرام', sectionDuas: '🤲 الأدعية الأساسية',
    sectionCosts: '💰 تكاليف الحج حسب البلد', sectionDates: '🗓️ مواعيد الحج ٢٠٢٦',
    sectionApps: '📱 التطبيقات الموصى بها', sectionNusuk: '🌐 منصة نسك',
    bestPractice: '💡 حسن التطبيق', history: '📜 التاريخ', rules: '🚫 المحظورات',
    tipLabel: '💡 نصيحة', errorsLabel: '⚠️ أخطاء يجب تجنبها',
    progressSteps: 'خطوات',
    steps: 'خطوات', googleCal: '📅 جوجل', outlookCal: '📧 أوتلوك', icsCal: '🍎 .ics',
    addAllTitle: '📅 أضف كل البرنامج إلى تقويمك',
    addAllDesc: '15 حدثاً بتوقيت مكة المكرمة، مع تنبيهات قبل ساعة و15 دقيقة',
    downloadIcs: '📅 تحميل .ics (15 حدث)', addToGoogle: '📅 إضافة الكل لجوجل',
    seeEvents: '📋 عرض الأحداث الـ 15',
    sectionChecklist: '✅ قائمة التحضير', sectionMap: '🗺️ خريطة المسافات', sectionDuas: '🤲 الأدعية الأساسية'
  };

  const FR = {
    logoTitle: 'Guide du Hajj', logoSub: 'Guide Complet du Pèlerin',
    heroDesc: 'Chaque étape en détail, de l\'inscription au retour. 🤲',
    searchPlaceholder: 'Rechercher un sujet, un rituel, un dua...',
    tabMonHajj: 'Mon Hajj', tabApprendre: 'Apprendre', tabPreparer: 'Préparer', tabPlus: 'Plus',
    footText: '🕋 Guide du Hajj — Qu\'Allah accepte votre Hajj 🤲',
    learnSteps: '🚶 Pas à Pas', learnDays: '📅 Jours', learnRituals: '🕌 Rituels',
    learnDuas: '🤲 Duas', learnClothing: '👘 Tenue', learnClassif: '📊 Niveaux',
    learnTypes: '⚖️ 3 Types', learnMap: '🗺️ Carte',
    prepChecklist: '✅ Checklist', prepDates: '🗓️ Dates',
    prepCosts: '💰 Coûts', prepApps: '📱 Apps', prepNusuk: '🌐 Nusuk',
    filterAll: 'Tout', filterDocs: '📄 Docs', filterClothes: '👘 Habits',
    filterHealth: '💊 Santé', filterMisc: '🎒 Divers',
    companionTitle: '🧑‍🏫 Guide du Compagnon — Jour par Jour',
    scheduleTitle: '⏰ Programme de la journée', duasTitle: '🤲 Duas essentielles',
    packTitle: '🎒 À emporter', alertsTitle: '🚨 Alertes',
    youAreHere: '📍 Vous êtes ici : ',
    dayNames: ['🏕️ Jour 1 - Mina','⛰️ Jour 2 - Arafat','🎉 Jour 3 - Aïd','🪨 Jour 4 - Tashriq','👋 Jour 5 - Adieu'],
    dayLocations: ['Makkah → Mina','Mina → Arafat','Mina · Makkah','Mina','Makkah'],
    mapLabels: ['Kaaba','Mina','Arafat','Muzdalifa','Jamarat'],
    plusFaq: 'FAQ', plusErrors: 'Top 10 Erreurs', plusPractical: 'Questions Pratiques',
    plusQuiz: 'Quiz', plusHealth: 'Santé', plusHeat: 'Survie Chaleur',
    plusHandicap: 'Accessibilité', plusTour: 'Tour Virtuel',
    plusMedina: 'Guide Médine', plusLinks: 'Liens Utiles',
    plusGroupQA: '❓ Questions & Réponses', plusGroupHealth: '🛡️ Santé & Sécurité', plusGroupDiscover: '🕌 Découvrir',
    backBtn: '← Retour',
    steps: 'étapes',
    googleCal: '📅 Google', outlookCal: '📧 Outlook', icsCal: '🍎 .ics',
    addAllTitle: '📅 Ajouter tout le programme à votre calendrier',
    addAllDesc: '15 événements · horaires La Mecque · rappels 1h et 15min avant',
    downloadIcs: '📅 Télécharger .ics (15 événements)', addToGoogle: '📅 Tout ajouter à Google',
    seeEvents: '📋 Voir les 15 événements inclus',
    sectionRituals: '🕌 Les 10 Rituels du Hajj', sectionRitualsDesc: 'Chaque rituel en détail avec son histoire et ses règles',
    sectionHealth: '❤️ Conseils Santé', sectionFaq: '❓ Questions Fréquentes',
    sectionErrors: '❌ Top 10 Erreurs', sectionClassif: '📊 Arkaan / Wajibaat / Sunan',
    sectionTypes: '⚖️ Les 3 Types de Hajj', sectionClothing: '👘 Tenue & Ihram',
    sectionCosts: '💰 Coûts par Pays', sectionDates: '🗓️ Dates 2026',
    sectionApps: '📱 Apps Recommandées', sectionNusuk: '🌐 Nusuk',
    bestPractice: '💡 Bonne pratique', history: '📜 Histoire', rules: '🚫 Règles',
    tipLabel: '💡 Conseil', errorsLabel: '⚠️ Erreurs à éviter', progressSteps: 'étapes',
    sectionChecklist: '✅ Checklist', sectionMap: '🗺️ Carte des Distances', sectionDuas: '🤲 Duas Essentielles'
  };

  function T(key) { return (lang === 'ar' ? AR : FR)[key] || key; }

  function applyLang() {
    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    // Toggle button
    var lb = document.getElementById('langToggle');
    if (lb) lb.textContent = lang === 'ar' ? 'Français' : 'عربي';
    // Static elements
    var el = function(id, txt) { var e = document.getElementById(id); if (e) e.textContent = txt; };
    el('logoTitle', T('logoTitle'));
    el('logoSub', T('logoSub'));
    el('heroDesc', T('heroDesc'));
    el('tabMonHajj', T('tabMonHajj'));
    el('tabApprendre', T('tabApprendre'));
    el('tabPreparer', T('tabPreparer'));
    el('tabPlus', T('tabPlus'));
    el('footText', T('footText'));
    // Search
    var si = document.getElementById('globalSearch');
    if (si) si.placeholder = T('searchPlaceholder');
    // Sub-tabs (by content matching or data attributes)
    var subMap = {
      'learn-steps': 'learnSteps', 'learn-days': 'learnDays', 'learn-rituals': 'learnRituals',
      'learn-duas': 'learnDuas', 'learn-clothing': 'learnClothing', 'learn-classif': 'learnClassif',
      'learn-types': 'learnTypes', 'learn-map': 'learnMap',
      'prep-checklist': 'prepChecklist', 'prep-dates': 'prepDates',
      'prep-costs': 'prepCosts', 'prep-apps': 'prepApps', 'prep-nusuk': 'prepNusuk'
    };
    document.querySelectorAll('.stab').forEach(function(btn) {
      var sub = btn.dataset.sub;
      if (subMap[sub]) btn.textContent = T(subMap[sub]);
    });
    // Filter buttons
    var filterMap = {'all':'filterAll','documents':'filterDocs','vetements':'filterClothes','sante':'filterHealth','divers':'filterMisc'};
    document.querySelectorAll('.fbtn').forEach(function(btn) {
      var f = btn.dataset.filter;
      if (filterMap[f]) btn.textContent = T(filterMap[f]);
    });
    // Share button
    var shareBtn = document.getElementById('shareBtn');
    if (shareBtn) shareBtn.textContent = lang === 'ar' ? '📤 شارك هذا الدليل' : '📤 Partager ce guide';
    localStorage.setItem('hajj-lang', lang);
    // Update lang switch active state
    document.querySelectorAll('.lang-opt').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    // Update share button text
    var shareText = document.getElementById('shareBtnText');
    if (shareText) shareText.textContent = lang === 'ar' ? 'شارك هذا الدليل' : 'Partager ce guide';
    // Close help if open
    var helpPanel = document.getElementById('helpPanel');
    if (helpPanel && !helpPanel.classList.contains('hidden')) { helpOpen = false; helpPanel.classList.add('hidden'); }
    renderAll();
  }

  window.toggleLang = function() {
    lang = lang === 'fr' ? 'ar' : 'fr';
    applyLang();
  };

  window.setLang = function(l) {
    lang = l;
    applyLang();
    // Update active state
    document.querySelectorAll('.lang-opt').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  };

  // Help Panel
  var helpOpen = false;
  window.toggleHelp = function() {
    helpOpen = !helpOpen;
    var panel = document.getElementById('helpPanel');
    var titleEl = document.getElementById('helpTitle');
    var body = document.getElementById('helpBody');
    if (titleEl) titleEl.textContent = lang === 'ar' ? '❓ دليل الاستخدام' : '❓ Guide d\'utilisation';
    if (body) {
      var items = lang === 'ar' ? [
        {icon:'🕋', text:'<b>حجّي</b> — دليلك يوماً بيوم مع البرنامج والأدعية والتنبيهات'},
        {icon:'📖', text:'<b>تعلّم</b> — جميع المناسك والأدعية واللباس خطوة بخطوة'},
        {icon:'✅', text:'<b>استعد</b> — قائمة التحضير والتكاليف والتطبيقات والمواعيد'},
        {icon:'🔍', text:'<b>المزيد</b> — أسئلة شائعة، صحة، أخطاء، جولة افتراضية'},
        {icon:'🤲', text:'<b>زر الأدعية</b> (أسفل يسار) — ٦ أدعية أساسية بضغطة واحدة'},
        {icon:'📅', text:'<b>التقويم</b> — أضف كل البرنامج لجوجل أو تقويم الهاتف'},
        {icon:'🌙', text:'<b>الوضع الداكن</b> — اضغط على ☀️/🌙 في الأعلى'},
        {icon:'📤', text:'<b>المشاركة</b> — شارك الدليل مع أصدقائك عبر واتساب'}
      ] : [
        {icon:'🕋', text:'<b>Mon Hajj</b> — Votre guide jour par jour avec programme, duas et alertes'},
        {icon:'📖', text:'<b>Apprendre</b> — Tous les rituels, duas, tenue, pas à pas'},
        {icon:'✅', text:'<b>Préparer</b> — Checklist, coûts, apps, dates, inscription Nusuk'},
        {icon:'🔍', text:'<b>Plus</b> — FAQ, santé, erreurs, quiz, tour virtuel, Médine'},
        {icon:'🤲', text:'<b>Bouton Duas</b> (en bas à gauche) — 6 duas essentielles en 1 clic'},
        {icon:'📅', text:'<b>Calendrier</b> — Ajoutez tout le programme à Google Calendar ou .ics'},
        {icon:'🌙', text:'<b>Mode sombre</b> — Cliquez sur ☀️/🌙 en haut'},
        {icon:'📤', text:'<b>Partager</b> — Envoyez ce guide à vos proches via WhatsApp'}
      ];
      body.innerHTML = items.map(function(item) {
        return '<div class="help-item"><span class="help-icon">' + item.icon + '</span>' + item.text + '</div>';
      }).join('');
    }
    if (panel) panel.classList.toggle('hidden', !helpOpen);
    var helpBtn = document.getElementById('helpBtn');
    if (helpBtn) helpBtn.setAttribute('aria-expanded', String(helpOpen));
  };

  // Theme
  const tBtn = document.getElementById('themeToggle');
  const theme = localStorage.getItem('hajj-th') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  tBtn.querySelector('.theme-icon').textContent = theme === 'light' ? '🌙' : '☀️';
  tBtn.onclick = () => {
    const n = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', n);
    localStorage.setItem('hajj-th', n);
    tBtn.querySelector('.theme-icon').textContent = n === 'light' ? '🌙' : '☀️';
  };

  // Tabs
  document.querySelectorAll('.tab').forEach(b => b.onclick = () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); tab = b.dataset.tab;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + tab).classList.add('active');
    if (tab === 'plus') { showPlusGrid(); }
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  // Sub-tabs
  document.querySelectorAll('.sub-tabs').forEach(container => {
    container.querySelectorAll('.stab').forEach(btn => {
      btn.onclick = () => {
        container.querySelectorAll('.stab').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        const parent = container.parentElement;
        parent.querySelectorAll('.sub-panel').forEach(p => p.classList.remove('active'));
        parent.querySelector('#sub-' + btn.dataset.sub).classList.add('active');
        container.scrollIntoView({behavior:'smooth', block:'start'});
      };
    });
  });

  // Scroll-to-top button + hero collapse
  const scrollTopBtn = document.getElementById('scrollTop');
  const heroEl = document.querySelector('.hero');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
      if (heroEl) heroEl.classList.toggle('mini', window.scrollY > 150);
    }, {passive: true});
  }

  // Emergency Duas Panel
  var duaPanelOpen = false;
  var ESSENTIAL_DUAS = [
    {label:'التلبية — Talbiyah', ar:'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ', fr:'Me voici ô Allah, me voici ! Pas d\'associé. La louange, la grâce et le pouvoir sont à Toi.'},
    {label:'دعاء عرفة — Arafat', ar:'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', fr:'Il n\'y a de dieu qu\'Allah, Seul, sans associé. Le pouvoir et la louange Lui appartiennent.'},
    {label:'بين الركنين — Tawaf', ar:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', fr:'Seigneur, accorde-nous un bien ici-bas et dans l\'au-delà, et protège-nous du Feu.'},
    {label:'تكبيرات التشريق — Tashriq', ar:'اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ', fr:'Allah est Grand ×2, pas de dieu sauf Allah, Allah est Grand ×2, à Lui la louange.'},
    {label:'عند الرمي — Lapidation', ar:'اللَّهُ أَكْبَرُ', fr:'Allah est le Plus Grand — à chaque caillou.'},
    {label:'الاستغفار — Pardon', ar:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', fr:'Ô Allah, Tu es le Pardonneur, Tu aimes le pardon, alors pardonne-moi.'}
  ];

  window.toggleDuaPanel = function() {
    duaPanelOpen = !duaPanelOpen;
    var panel = document.getElementById('duaPanel');
    var titleEl = document.getElementById('duaPanelTitle');
    if (titleEl) titleEl.textContent = lang === 'ar' ? '🤲 الأدعية الأساسية' : '🤲 Duas Essentielles';
    var body = document.getElementById('duaPanelContent');
    if (body && !body.innerHTML) {
      body.innerHTML = ESSENTIAL_DUAS.map(function(d) {
        return '<div class="dua-item"><div class="dua-item-label">' + d.label + '</div><div class="dua-item-ar">' + d.ar + '</div><div class="dua-item-fr">' + (lang === 'ar' ? '' : d.fr) + '</div></div>';
      }).join('');
    }
    if (panel) panel.classList.toggle('hidden', !duaPanelOpen);
    var duaBtn = document.getElementById('duaBtn');
    if (duaBtn) duaBtn.setAttribute('aria-expanded', String(duaPanelOpen));
  };

  // Search
  let st; document.getElementById('globalSearch').oninput = e => {
    clearTimeout(st); st = setTimeout(() => {
      const q = e.target.value.toLowerCase().trim();
      if (q.length < 2) { renderAll(); return; }
      document.querySelectorAll('.step-card,.tl-day,.rit-card,.ck-item,.dua,.fq,.h-card').forEach(el => {
        el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    }, 300);
  };

  function renderAll() {
    fcs = [...((lang === "ar" && HAJJ_DATA.flashcardsAr) ? HAJJ_DATA.flashcardsAr : HAJJ_DATA.flashcards)]; fcIdx = 0;
    renderSBS(); renderTL(); renderRit(); renderCK(); renderCL(); renderDua(); renderFC(); renderHP(); renderFQ(); renderClassif(); renderMap(); renderNusuk(); renderLinks(); renderTour(); renderHandicap(); renderPractical(); renderHeat(); renderErrors(); renderTypes(); renderMedina(); renderApps(); renderCosts(); renderDates(); renderCompanion(); showPlusGrid();
  }

  // ============ PLUS GRID (replaces old Explorer) ============
  const PLUS_SECTIONS_FR = [
    { group: "❓ Questions & Réponses", items: [
      { id: "faq", icon: "❓", title: "FAQ", desc: "22 questions fréquentes" },
      { id: "errors", icon: "❌", title: "Top 10 Erreurs", desc: "Les pièges à éviter" },
      { id: "practical", icon: "🤔", title: "Questions Pratiques", desc: "Situations délicates" },
      { id: "flashcards", icon: "🃏", title: "Quiz", desc: "Testez vos connaissances" },
    ]},
    { group: "🛡️ Santé & Sécurité", items: [
      { id: "health", icon: "❤️", title: "Santé", desc: "16 conseils essentiels" },
      { id: "heat", icon: "🌡️", title: "Survie Chaleur", desc: "Protocole anti-canicule" },
      { id: "handicap", icon: "♿", title: "Accessibilité", desc: "PMR, seniors, enceintes" },
    ]},
    { group: "🕌 Découvrir", items: [
      { id: "tour", icon: "🏛️", title: "Tour Virtuel", desc: "Les lieux saints" },
      { id: "medina", icon: "🕌", title: "Guide Médine", desc: "Rawdah, Quba, Uhud" },
      { id: "links", icon: "🔗", title: "Liens Utiles", desc: "Sites officiels" },
    ]}
  ];
  const PLUS_SECTIONS_AR = [
    { group: "❓ أسئلة وأجوبة", items: [
      { id: "faq", icon: "❓", title: "أسئلة شائعة", desc: "٢٢ سؤالاً متكرراً" },
      { id: "errors", icon: "❌", title: "أخطاء شائعة", desc: "أخطاء يجب تجنبها" },
      { id: "practical", icon: "🤔", title: "مسائل عملية", desc: "حالات دقيقة" },
      { id: "flashcards", icon: "🃏", title: "اختبار", desc: "اختبر معلوماتك" },
    ]},
    { group: "🛡️ الصحة والسلامة", items: [
      { id: "health", icon: "❤️", title: "الصحة", desc: "١٦ نصيحة أساسية" },
      { id: "heat", icon: "🌡️", title: "مواجهة الحر", desc: "بروتوكول ضد الحرارة" },
      { id: "handicap", icon: "♿", title: "ذوي الاحتياجات", desc: "كبار السن، الحوامل" },
    ]},
    { group: "🕌 اكتشف", items: [
      { id: "tour", icon: "🏛️", title: "جولة افتراضية", desc: "الأماكن المقدسة" },
      { id: "medina", icon: "🕌", title: "دليل المدينة", desc: "الروضة، قباء، أحد" },
      { id: "links", icon: "🔗", title: "روابط مفيدة", desc: "المواقع الرسمية" },
    ]}
  ];
  function getPlusSections() { return lang === 'ar' ? PLUS_SECTIONS_AR : PLUS_SECTIONS_FR; }

  function showPlusGrid() {
    const grid = document.getElementById('plusGrid');
    const content = document.getElementById('plusContent');
    if (!grid || !content) return;
    content.style.display = 'none'; content.innerHTML = '';
    grid.style.display = 'block';
    grid.innerHTML = getPlusSections().map(group => `
      <div class="explore-group-title">${group.group}</div>
      <div class="explore-grid">${group.items.map(item => `
        <div class="explore-card" onclick="openPlusSection('${item.id}')">
          <span class="ec-icon">${item.icon}</span>
          <div class="ec-title">${item.title}</div>
          <div class="ec-desc">${item.desc}</div>
        </div>`).join('')}</div>
    `).join('');
  }
  window.showPlusGrid = showPlusGrid;

  // Hidden containers for Plus sections
  function ensureHiddenContainers() {
    ['faqContainer','errorsContainer','practicalContainer','healthContainer','heatContainer','handicapContainer','linksContainer','flashcardArea','tourContainer','medinaContainer'].forEach(id => {
      if (!document.getElementById(id)) {
        const d = document.createElement('div'); d.id = id; d.style.display = 'none';
        document.body.appendChild(d);
      }
    });
  }
  ensureHiddenContainers();

  window.openPlusSection = function(id) {
    const grid = document.getElementById('plusGrid');
    const content = document.getElementById('plusContent');
    grid.style.display = 'none';
    content.style.display = 'block';
    document.getElementById('panel-plus').scrollIntoView({behavior:'smooth',block:'start'});

    const sourceMap = {
      faq: 'faqContainer', errors: 'errorsContainer', practical: 'practicalContainer',
      health: 'healthContainer', heat: 'heatContainer', handicap: 'handicapContainer',
      tour: 'tourContainer', medina: 'medinaContainer', links: 'linksContainer'
    };

    if (id === 'flashcards') {
      const f = fcs[fcIdx];
      content.innerHTML = `<button class="explore-back" onclick="showPlusGrid()">${T('backBtn')}</button>
        <div style="text-align:center;margin-bottom:16px"><button class="fc-b" onclick="xfcP()">⬅️</button> <span id="xfcC">${fcIdx+1}/${fcs.length}</span> <button class="fc-b" onclick="xfcN()">➡️</button></div>
        <div class="fc-area"><div class="fc" onclick="this.classList.toggle('flip')">
          <div class="fc-face fc-front"><div class="fc-lbl">Question</div><div class="fc-q">${f.q}</div></div>
          <div class="fc-face fc-back"><div class="fc-lbl">Réponse</div><div class="fc-a">${f.a}</div></div>
        </div></div>
        <div style="text-align:center;margin-top:16px"><button class="fc-b" onclick="xfcS()">🔀 Mélanger</button></div>`;
      return;
    }

    const src = sourceMap[id];
    if (src && document.getElementById(src)) {
      content.innerHTML = `<button class="explore-back" onclick="showPlusGrid()">${T('backBtn')}</button>` + document.getElementById(src).innerHTML;
      content.querySelectorAll('.fq-q').forEach(q => {
        q.onclick = () => q.parentElement.classList.toggle('open');
      });
    }
  };

  window.xfcP = () => { fcIdx=(fcIdx-1+fcs.length)%fcs.length; openPlusSection('flashcards'); };
  window.xfcN = () => { fcIdx=(fcIdx+1)%fcs.length; openPlusSection('flashcards'); };
  window.xfcS = () => { for(let i=fcs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[fcs[i],fcs[j]]=[fcs[j],fcs[i]]} fcIdx=0; openPlusSection('flashcards'); };

  function ritSvg(emoji, t1, t2, t3) {
    return `<svg viewBox="0 0 400 110" class="rit-svg"><defs><linearGradient id="rg${emoji.codePointAt(0)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="var(--teal)" stop-opacity=".08"/><stop offset="100%" stop-color="var(--gold)" stop-opacity=".04"/></linearGradient></defs><rect width="400" height="110" fill="url(#rg${emoji.codePointAt(0)})"/><text x="58" y="64" font-size="38" text-anchor="middle" opacity=".8">${emoji}</text><text x="130" y="35" font-size="13" fill="var(--t1)" font-weight="700" font-family="sans-serif">${t1}</text><text x="130" y="58" font-size="10.5" fill="var(--t2)" font-family="sans-serif">${t2}</text><text x="130" y="78" font-size="10" fill="var(--t3)" font-family="sans-serif">${t3}</text><rect x="130" y="90" width="60" height="2.5" rx="1" fill="var(--gold)" opacity=".4"/></svg>`;
  }
  const RIT_SVG = {
    "🤍": ritSvg("🤍","L'Ihram — État Sacré","Égalité devant Allah • 2 draps blancs (♂)","Pas de parfum • Pas de couture (♂)"),
    "🔄": ritSvg("🕋","Le Tawaf — 7 Tours","Sens antihoraire • Pierre Noire → Pierre Noire","Wudu requis • Duas libres pendant les tours"),
    "🏃": ritSvg("🏃","Le Sa'i — Safa ↔ Marwa","7 allers-retours • ~3,15 km total","En mémoire de Hajar cherchant l'eau"),
    "⛰️": ritSvg("⛰️","Arafat — ⭐ PILIER ABSOLU","Du midi au Maghrib • 9 Dhul Hijjah","« Le Hajj, c'est Arafat »"),
    "🪨": ritSvg("🪨","Lapidation des Jamarat","7 cailloux × chaque • « Allahu Akbar »","Ibrahim rejetant le diable 3 fois"),
    "🐑": ritSvg("🐑","Le Sacrifice (Hady)","Mouton, chèvre ou 1/7 vache/chameau","⅓ vous • ⅓ proches • ⅓ pauvres"),
    "✂️": ritSvg("✂️","Rasage (Halq) / Coupe (Taqsir)","♂ Rasage préférable (3× invocations)","♀ Coupe de 1-2 cm uniquement"),
    "🗣️": ritSvg("🗣️","La Talbiyah","Labbayk Allahumma Labbayk !","De l'Ihram → 1er caillou du 10ème jour"),
    "💧": ritSvg("💧","Eau de Zamzam","Source miraculeuse • 4 000+ ans","« Pour ce pour quoi elle est bue »"),
    "👋": ritSvg("👋","Tawaf d'Adieu (al-Wada')","7 derniers tours • Obligatoire (Wajib)","Dernier acte avant de quitter La Mecque")
  };

  // ============ STEP BY STEP ============
  function renderSBS() {
    const c = document.getElementById('stepsContainer');
    const sbsData = (lang === "ar" && HAJJ_DATA.stepByStepAr) ? HAJJ_DATA.stepByStepAr : HAJJ_DATA.stepByStep; if (!sbsData) return;
    let si = 0, doneCount = Object.keys(done).length;

    let h = `<div class="sbs-prog"><div class="sbs-pbar"><div class="sbs-pfill" style="width:${doneCount/22*100}%"></div></div><span class="sbs-ptxt">${doneCount}/22 ${T('progressSteps')}</span></div>`;

    h += sbsData.map(phase => {
      let ph = `<div class="sbs-phase"><div class="sbs-ph" style="border-left-color:${phase.color}"><span>${phase.icon}</span> ${phase.phase}</div><div class="sbs-list">`;
      ph += phase.steps.map(step => {
        si++;
        const d2 = done['s'+si], cls = d2 ? 'done' : '';
        return `<div class="step-card ${cls}" data-si="${si}">
          <div class="step-head" onclick="this.parentElement.classList.toggle('open')">
            <div class="step-num" style="background:${d2?'var(--grn)':phase.color}">${d2?'⭐':step.num}</div>
            <span class="step-em">${step.emoji}</span>
            <h4 class="step-ttl">${step.title}${d2?' ✓':''}</h4>
            <span class="step-chev">▼</span>
          </div>
          <div class="step-body"><div class="step-inner">

            <div class="step-desc">${step.what}</div>
            <div class="how-grid">${step.how.map((x,i)=>{
              const parts = x.split(':');
              const hasLabel = parts.length > 1 && parts[0].length < 50;
              return `<div class="how-card"><div class="how-num">${i+1}</div><div class="how-txt">${hasLabel ? '<b>'+parts[0]+'</b>: '+parts.slice(1).join(':') : x}</div></div>`;
            }).join('')}</div>
            ${step.tips ? `<div class="tip-box"><b>${T('tipLabel')} :</b> ${step.tips}</div>` : ''}
            ${step.erreurs && step.erreurs.length ? `<div class="err-box"><b>⚠️ Erreurs à éviter :</b><ul>${step.erreurs.map(e=>`<li>${e}</li>`).join('')}</ul></div>` : ''}
          </div></div>
        </div>`;
      }).join('');
      return ph + '</div></div>';
    }).join('');

    c.innerHTML = h;

    // Double-click to complete
    c.querySelectorAll('.step-card').forEach(el => {
      el.querySelector('.step-head').addEventListener('dblclick', e => {
        e.stopPropagation();
        const key = 's' + el.dataset.si;
        done[key] = !done[key]; if (!done[key]) delete done[key];
        localStorage.setItem('hajj-done', JSON.stringify(done));
        renderSBS();
      });
    });
  }

  // ============ TIMELINE ============
  function renderTL() {
    const c = document.getElementById('timelineContainer'); if (!c) return;
    const tlData = (lang === "ar" && HAJJ_DATA.timelineAr) ? HAJJ_DATA.timelineAr : HAJJ_DATA.timeline; if (!tlData) return;
    c.innerHTML = `<div class="tl-wrap">${tlData.map((d,i) => `
      <div class="tl-day">
        <div class="tl-dot">${i+1}</div>
        <div class="tl-card" onclick="this.classList.toggle('expanded')">
          <div class="tl-top"><span class="tl-em">${d.emoji}</span><div><div class="tl-name">${d.title}</div><div class="tl-sub">${d.day}</div></div></div>
          <div class="tl-sum">${d.summary}</div>
          <div class="tl-hint">👆 Cliquez pour les détails</div>
          <div class="tl-details">
            ${d.hikmah ? `<div class="hk-box"><b>🌟 Sagesse (Hikmah)</b><p>${d.hikmah}</p></div>` : ''}
            ${d.steps.map(s => `<div class="tl-step"><b>${s.title}</b><p>${s.desc}</p></div>`).join('')}
            ${d.erreurs && d.erreurs.length ? `<div class="er-box"><b>⚠️ Erreurs à éviter</b><ul>${d.erreurs.map(e=>`<li>${e}</li>`).join('')}</ul></div>` : ''}
          </div>
        </div>
      </div>
    `).join('')}</div>`;
  }

  // ============ RITUALS ============
  function renderRit() {
    const c = document.getElementById('ritualsContainer'); if (!c) return;
    const ritData = (lang === 'ar' && HAJJ_DATA.ritualsAr) ? HAJJ_DATA.ritualsAr : HAJJ_DATA.rituals; if (!ritData) return;
    c.innerHTML = ritData.map(r => `
      <div class="rit-card">
        ${RIT_SVG[r.emoji] ? `<div class="rit-illus">${RIT_SVG[r.emoji]}</div>` : `<span class="rit-em">${r.emoji}</span>`}
        <h3 class="rit-name">${r.name}</h3>
        <p class="rit-desc">${r.desc}</p>
        <div class="rit-tip"><b>${T('bestPractice')} :</b> ${r.bestPractice}</div>
        ${r.history ? `<div class="rit-hist"><b>${T('history')} :</b> ${r.history}</div>` : ''}
        ${r.interdits ? `<div class="rit-rules"><b>${T('rules')} :</b> ${r.interdits}</div>` : ''}
      </div>
    `).join('');
  }

  // ============ CHECKLIST ============
  function renderCK() {
    const c = document.getElementById('checklistContainer'); if (!c) return;
    const f = document.querySelector('.fbtn.active')?.dataset.filter || 'all';
    const ckData = (lang === 'ar' && HAJJ_DATA.checklistAr) ? HAJJ_DATA.checklistAr : HAJJ_DATA.checklist; if (!ckData) return;
    const items = ckData.filter(x => f === 'all' || x.cat === f);
    const cats = { documents:'📄', vetements:'👘', sante:'💊', divers:'🎒' };
    c.innerHTML = items.map((x,i) => {
      const label = x.label || x.item;
      const key = 'c'+i+(x.label||x.item||'').substring(0,8), ch = checked[key];
      return `<div class="ck-item ${ch?'chk':''}" data-k="${key}" onclick="ckToggle(this)">
        <div class="ck-box">${ch?'✓':''}</div><span class="ck-lbl">${label}</span><span class="ck-tag">${cats[x.cat]||''}</span>
      </div>`;
    }).join('');
    updProg();
  }
  window.ckToggle = el => {
    const k = el.dataset.k; checked[k] = !checked[k];
    localStorage.setItem('hajj-ck', JSON.stringify(checked));
    el.classList.toggle('chk'); el.querySelector('.ck-box').textContent = checked[k] ? '✓' : '';
    updProg();
  };
  function updProg() {
    const t = HAJJ_DATA.checklist.length, d2 = Object.values(checked).filter(Boolean).length;
    const pf = document.getElementById('progressFill');
    const pt = document.getElementById('progressText');
    if (pf) pf.style.width = (d2/t*100)+'%';
    if (pt) pt.textContent = d2+'/'+t;
  }
  document.querySelectorAll('.fbtn').forEach(b => b.onclick = () => {
    document.querySelectorAll('.fbtn').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); renderCK();
  });

  // ============ CLOTHING with SVG ============
  function renderCL() {
    if (!document.getElementById('clothingContainer')) return;
    const ihramSvg = `<svg viewBox="0 0 600 180" style="width:100%;height:auto">
      <rect width="600" height="180" rx="12" fill="var(--acc)" opacity=".4"/>
      <circle cx="150" cy="50" r="22" fill="var(--card)" stroke="var(--gold)" stroke-width="2"/><text x="150" y="56" text-anchor="middle" font-size="22">👨</text>
      <text x="150" y="90" text-anchor="middle" font-size="10" fill="var(--t1)" font-weight="700">HOMME</text>
      <rect x="80" y="100" width="140" height="28" rx="6" fill="var(--card)" stroke="var(--teal)" stroke-width="1.5"/>
      <text x="150" y="118" text-anchor="middle" font-size="8" fill="var(--teal)" font-weight="600">IZAR (bas) + RIDA (haut)</text>
      <rect x="80" y="134" width="140" height="18" rx="4" fill="rgba(196,90,107,.08)" stroke="var(--rose)" stroke-width="1"/>
      <text x="150" y="147" text-anchor="middle" font-size="7" fill="var(--rose)">❌ Pas de cousu • Pas de slip</text>
      <rect x="80" y="156" width="140" height="18" rx="4" fill="rgba(46,125,82,.08)" stroke="var(--grn)" stroke-width="1"/>
      <text x="150" y="169" text-anchor="middle" font-size="7" fill="var(--grn)">✅ Sandales • Ceinture • Montre</text>
      <circle cx="450" cy="50" r="22" fill="var(--card)" stroke="var(--gold)" stroke-width="2"/><text x="450" y="56" text-anchor="middle" font-size="22">👩</text>
      <text x="450" y="90" text-anchor="middle" font-size="10" fill="var(--t1)" font-weight="700">FEMME</text>
      <rect x="380" y="100" width="140" height="28" rx="6" fill="var(--card)" stroke="var(--teal)" stroke-width="1.5"/>
      <text x="450" y="118" text-anchor="middle" font-size="8" fill="var(--teal)" font-weight="600">Vêtements modestes habituels</text>
      <rect x="380" y="134" width="140" height="18" rx="4" fill="rgba(196,90,107,.08)" stroke="var(--rose)" stroke-width="1"/>
      <text x="450" y="147" text-anchor="middle" font-size="7" fill="var(--rose)">❌ Pas de niqab • Pas de gants</text>
      <rect x="380" y="156" width="140" height="18" rx="4" fill="rgba(46,125,82,.08)" stroke="var(--grn)" stroke-width="1"/>
      <text x="450" y="169" text-anchor="middle" font-size="7" fill="var(--grn)">✅ Hijab • Sous-vêtements OK</text>
      <line x1="300" y1="40" x2="300" y2="170" stroke="var(--brd)" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="300" y="30" text-anchor="middle" font-size="9" fill="var(--gold)" font-weight="700">👘 IHRAM — Tenue du Hajj</text>
    </svg>`;
    document.getElementById('clothingContainer').innerHTML = `
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh);margin-bottom:16px;overflow:hidden">${ihramSvg}</div>
      ${((lang === "ar" && HAJJ_DATA.clothingAr) ? HAJJ_DATA.clothingAr : HAJJ_DATA.clothing).map(c => `
        <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);margin-bottom:12px">
          <h3 style="font-family:var(--fd);font-size:1.1rem;color:var(--grn);margin-bottom:10px">${c.title}</h3>
          <p style="font-size:.88rem;color:var(--t2);line-height:1.65;margin-bottom:12px">${c.content}</p>
          ${c.items ? `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:6px">
            ${c.items.map(item => {
              const isNo = item.includes('❌') || item.includes('INTERDIT') || item.includes('HOMMES :') || item.includes('FEMMES :');
              const isYes = item.includes('✅') || item.includes('AUTORIS');
              const bg = isNo ? 'rgba(196,90,107,.06)' : isYes ? 'rgba(46,125,82,.06)' : 'var(--acc)';
              const brd2 = isNo ? 'var(--rose)' : isYes ? 'var(--grn)' : 'var(--gold)';
              return '<div style="display:flex;gap:8px;align-items:flex-start;padding:8px 12px;background:'+bg+';border-radius:'+('var(--r)')+';border-left:3px solid '+brd2+';font-size:.82rem;line-height:1.5;color:var(--t1)">'+item+'</div>';
            }).join('')}
          </div>` : ''}
        </div>
      `).join('')}
    `;
  }

  // ============ DUAS ============
  const DUA_OCCASIONS_AR = {
    "La Talbiyah — dès l'Ihram jusqu'au 1er lancer du 10": "التلبية — من الإحرام إلى أول رمية يوم العاشر",
    "En voyant la Kaaba": "عند رؤية الكعبة",
    "Au début du Tawaf — Pierre Noire": "بداية الطواف — الحجر الأسود",
    "Tawaf — entre le Coin Yéménite et la Pierre Noire": "بين الركن اليماني والحجر الأسود",
    "Tawaf — invocation libre": "الطواف — دعاء حر",
    "Après le Tawaf — Maqam Ibrahim": "بعد الطواف — مقام إبراهيم",
    "Boire Zamzam": "شرب زمزم",
    "Au sommet du Safa": "على الصفا",
    "Durant le Sa'i — entre Safa et Marwa": "أثناء السعي",
    "Jour d'Arafat — la MEILLEURE invocation": "يوم عرفة — أفضل الدعاء ⭐",
    "Arafat — demande de pardon": "عرفة — طلب المغفرة",
    "À Muzdalifah": "في المزدلفة",
    "En lançant les cailloux (Jamarat)": "عند رمي الجمرات",
    "Le sacrifice": "عند الذبح",
    "Takbir at-Tashriq — après chaque prière": "تكبيرات التشريق — بعد كل صلاة",
    "Entrer dans une mosquée": "دعاء دخول المسجد",
    "Sortir de la mosquée": "دعاء الخروج من المسجد",
    "Dua du voyage — aller": "دعاء السفر — ذهاب",
    "Dua du voyage — retour": "دعاء السفر — عودة",
    "Invocation pour les parents": "الدعاء للوالدين",
    "Invocation complète — protection": "دعاء شامل — حفظ"
  };
  function renderDua() {
    const duasC = document.getElementById('duasContainer'); if (!duasC || !HAJJ_DATA.duas) return;
    duasC.innerHTML = HAJJ_DATA.duas.map(d => {
      const occ = lang === 'ar' ? (DUA_OCCASIONS_AR[d.occasion] || d.occasion) : d.occasion;
      return `<div class="dua"><div class="dua-occ">${occ}</div><div class="dua-ar">${d.arabic}</div><div class="dua-tr">${d.transliteration}</div><div class="dua-fr">${lang === 'ar' ? '' : '🇫🇷 '}${d.translation}</div></div>`;
    }).join('');
  }

  // ============ FLASHCARDS ============
  function renderFC() {
    const f = fcs[fcIdx];
    const fa = document.getElementById('flashcardArea');
    if (!fa) return;
    fa.innerHTML = `<div class="fc-area"><div class="fc" onclick="this.classList.toggle('flip')">
      <div class="fc-face fc-front"><div class="fc-lbl">Question</div><div class="fc-q">${f.q}</div></div>
      <div class="fc-face fc-back"><div class="fc-lbl">Réponse</div><div class="fc-a">${f.a}</div></div>
    </div></div>`;
    const cc = document.getElementById('fcCounter');
    if (cc) cc.textContent = (fcIdx+1)+'/'+fcs.length;
  }
  const fpBtn = document.getElementById('fcPrev');
  const fnBtn = document.getElementById('fcNext');
  const fsBtn = document.getElementById('fcShuffle');
  if (fpBtn) fpBtn.onclick = () => { fcIdx = (fcIdx-1+fcs.length)%fcs.length; renderFC(); };
  if (fnBtn) fnBtn.onclick = () => { fcIdx = (fcIdx+1)%fcs.length; renderFC(); };
  if (fsBtn) fsBtn.onclick = () => {
    for(let i=fcs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[fcs[i],fcs[j]]=[fcs[j],fcs[i]]}
    fcIdx=0; renderFC();
  };
  document.addEventListener('keydown', e => {
    if(tab!=='flashcards')return;
    if(e.key==='ArrowLeft'){fcIdx=(fcIdx-1+fcs.length)%fcs.length;renderFC()}
    else if(e.key==='ArrowRight'){fcIdx=(fcIdx+1)%fcs.length;renderFC()}
    else if(e.key===' '){e.preventDefault();document.querySelector('.fc')?.classList.toggle('flip')}
  });

  // ============ HEALTH ============
  function renderHP() {
    const healthColors = {'💧':'var(--blue)','☀️':'var(--gold)','🦶':'var(--teal)','🤧':'var(--rose)','💊':'var(--rose)','🦷':'var(--t3)','👁️':'var(--teal)','🧠':'var(--gold)','🍎':'var(--grn)','🏥':'var(--rose)','😴':'var(--blue)','🧴':'var(--teal)','🩹':'var(--rose)','📱':'var(--gold)','🧳':'var(--t3)','🤝':'var(--grn)','🔥':'var(--rose)','🫁':'var(--teal)','🦠':'var(--rose)','🤰':'var(--grn)','👴':'var(--gold)','😷':'var(--blue)'};
    const hData = (lang === 'ar' && HAJJ_DATA.healthAr) ? HAJJ_DATA.healthAr : HAJJ_DATA.health; if (!hData) return;
    document.getElementById('healthContainer').innerHTML = hData.map(h => {
      const col = healthColors[h.emoji] || 'var(--teal)';
      return `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:0;box-shadow:var(--sh);overflow:hidden;transition:.3s" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shm)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--sh)'">
        <div style="display:flex;align-items:center;gap:12px;padding:16px 18px;background:linear-gradient(135deg,${col}11,transparent);border-bottom:1px solid var(--brd)">
          <span style="font-size:2rem;width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:${col}15;border-radius:12px;flex-shrink:0">${h.emoji}</span>
          <h3 style="font-family:var(--fd);font-size:1rem;color:${col};margin:0;font-weight:700">${h.title}</h3>
        </div>
        <p style="font-size:.84rem;color:var(--t2);line-height:1.7;padding:14px 18px;margin:0">${h.desc}</p>
      </div>`;
    }).join('');
  }

  // ============ FAQ ============
  function renderFQ() {
    const c = document.getElementById('faqContainer'); if (!c) return;
    const faqData = (lang === 'ar' && HAJJ_DATA.faqAr) ? HAJJ_DATA.faqAr : HAJJ_DATA.faq;
    c.innerHTML = faqData.map((f) => `
      <div class="fq"><div class="fq-q"><span>${f.q}</span><span class="fq-arr">▼</span></div><div class="fq-a"><p>${f.a}</p></div></div>
    `).join('');
    c.querySelectorAll('.fq-q').forEach(q => q.onclick = () => q.parentElement.classList.toggle('open'));
  }

  // ============ CLASSIFICATION ============
  function renderClassif() {
    const d = (lang === "ar" && HAJJ_DATA.classificationAr) ? HAJJ_DATA.classificationAr : HAJJ_DATA.classification; if (!d) return;
    const pyramidSvg = `<svg viewBox="0 0 500 160" style="width:100%;max-width:500px;height:auto;margin:0 auto 16px;display:block">
      <polygon points="250,10 400,65 100,65" fill="rgba(220,53,69,.12)" stroke="#dc3545" stroke-width="2"/>
      <text x="250" y="48" text-anchor="middle" font-size="10" fill="#dc3545" font-weight="700">🔴 ARKAAN (4 Piliers)</text>
      <text x="250" y="60" text-anchor="middle" font-size="7" fill="#dc3545">Invalident le Hajj si omis</text>
      <polygon points="100,68 400,68 450,110 50,110" fill="rgba(240,173,78,.12)" stroke="#f0ad4e" stroke-width="2"/>
      <text x="250" y="92" text-anchor="middle" font-size="10" fill="#f0ad4e" font-weight="700">🟡 WAJIBAAT (7 Obligations)</text>
      <text x="250" y="104" text-anchor="middle" font-size="7" fill="#f0ad4e">Sacrifice compensatoire si omis</text>
      <polygon points="50,113 450,113 490,150 10,150" fill="rgba(40,167,69,.12)" stroke="#28a745" stroke-width="2"/>
      <text x="250" y="136" text-anchor="middle" font-size="10" fill="#28a745" font-weight="700">🟢 SUNAN (Recommandés)</text>
      <text x="250" y="148" text-anchor="middle" font-size="7" fill="#28a745">Bonus de récompense, aucune pénalité</text>
    </svg>`;
    document.getElementById('classifContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${T("sectionClassif")}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      ${pyramidSvg}
      ${d.categories.map(cat => `
        <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;margin-bottom:16px;box-shadow:var(--sh);border-left:5px solid ${cat.color}">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span style="font-size:1.6rem">${cat.emoji}</span>
            <h3 style="font-size:1.05rem;font-weight:700;color:${cat.color};margin:0">${cat.name}</h3>
          </div>
          <p style="font-size:.88rem;color:var(--t2);line-height:1.7;margin-bottom:14px">${cat.desc}</p>
          <div style="display:grid;gap:8px">
            ${cat.items.map(item => `
              <div style="display:flex;gap:10px;padding:10px 14px;background:var(--acc);border-radius:var(--r);border-left:3px solid ${cat.color}">
                <div style="min-width:28px;height:28px;border-radius:50%;background:${cat.color};color:#fff;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;flex-shrink:0">${cat.emoji}</div>
                <div><b style="font-size:.88rem;color:var(--t1)">${item.name}</b><p style="font-size:.82rem;color:var(--t2);margin:4px 0 0;line-height:1.6">${item.detail}</p></div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }

  // ============ MAP / DISTANCES ============
  function renderMap() {
    const d = (lang === "ar" && HAJJ_DATA.mapDistancesAr) ? HAJJ_DATA.mapDistancesAr : HAJJ_DATA.mapDistances; if (!d) return;
    // SVG Map of Hajj route
    const mapSvg = `<svg viewBox="0 0 700 340" style="width:100%;height:auto;margin:0 auto;display:block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="var(--teal)" stop-opacity=".08"/><stop offset="100%" stop-color="var(--gold)" stop-opacity=".04"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="700" height="340" rx="16" fill="url(#mg1)" stroke="var(--brd)" stroke-width="1"/>
      <!-- Routes (dashed lines) -->
      <path d="M 120 250 Q 200 200 300 170" stroke="var(--gold)" stroke-width="2.5" fill="none" stroke-dasharray="8,5" opacity=".6"/>
      <path d="M 300 170 Q 430 130 540 100" stroke="var(--gold)" stroke-width="2.5" fill="none" stroke-dasharray="8,5" opacity=".6"/>
      <path d="M 540 100 L 480 200" stroke="var(--teal)" stroke-width="2.5" fill="none" stroke-dasharray="8,5" opacity=".6"/>
      <path d="M 480 200 L 300 170" stroke="var(--teal)" stroke-width="2.5" fill="none" stroke-dasharray="8,5" opacity=".6"/>
      <path d="M 300 170 Q 250 220 350 260" stroke="var(--rose)" stroke-width="2" fill="none" stroke-dasharray="6,4" opacity=".5"/>
      <!-- Distance labels on routes -->
      <text x="195" y="195" font-size="10" fill="var(--gold)" font-weight="700" font-family="sans-serif" transform="rotate(-15,195,195)">8 km</text>
      <text x="410" y="120" font-size="10" fill="var(--gold)" font-weight="700" font-family="sans-serif" transform="rotate(-10,410,120)">14 km</text>
      <text x="525" y="155" font-size="10" fill="var(--teal)" font-weight="700" font-family="sans-serif" transform="rotate(65,525,155)">9 km</text>
      <text x="370" y="175" font-size="10" fill="var(--teal)" font-weight="700" font-family="sans-serif">3-7 km</text>
      <!-- KAABA -->
      <circle cx="120" cy="250" r="32" fill="var(--card)" stroke="var(--gold)" stroke-width="3" filter="url(#glow)"/>
      <text x="120" y="245" text-anchor="middle" font-size="28">🕋</text>
      <text x="120" y="270" text-anchor="middle" font-size="9" fill="var(--t1)" font-weight="700" font-family="sans-serif">KAABA</text>
      <text x="120" y="295" text-anchor="middle" font-size="8" fill="var(--t3)" font-family="sans-serif">Masjid al-Haram</text>
      <!-- MINA -->
      <circle cx="300" cy="170" r="28" fill="var(--card)" stroke="var(--teal)" stroke-width="2.5"/>
      <text x="300" y="165" text-anchor="middle" font-size="24">🏕️</text>
      <text x="300" y="188" text-anchor="middle" font-size="9" fill="var(--t1)" font-weight="700" font-family="sans-serif">MINA</text>
      <text x="300" y="200" text-anchor="middle" font-size="7" fill="var(--t3)" font-family="sans-serif">Ville de tentes</text>
      <!-- ARAFAT -->
      <circle cx="540" cy="100" r="32" fill="var(--card)" stroke="var(--grn)" stroke-width="3" filter="url(#glow)"/>
      <text x="540" y="95" text-anchor="middle" font-size="28">⛰️</text>
      <text x="540" y="118" text-anchor="middle" font-size="9" fill="var(--grn)" font-weight="700" font-family="sans-serif">ARAFAT ⭐</text>
      <text x="540" y="130" text-anchor="middle" font-size="7" fill="var(--t3)" font-family="sans-serif">Pilier absolu</text>
      <!-- MUZDALIFAH -->
      <circle cx="480" cy="200" r="24" fill="var(--card)" stroke="var(--gold)" stroke-width="2"/>
      <text x="480" y="196" text-anchor="middle" font-size="20">🌙</text>
      <text x="480" y="215" text-anchor="middle" font-size="8" fill="var(--t1)" font-weight="700" font-family="sans-serif">MUZDALIFAH</text>
      <!-- JAMARAT -->
      <circle cx="350" cy="260" r="22" fill="var(--card)" stroke="var(--rose)" stroke-width="2"/>
      <text x="350" y="257" text-anchor="middle" font-size="18">🪨</text>
      <text x="350" y="275" text-anchor="middle" font-size="8" fill="var(--t1)" font-weight="700" font-family="sans-serif">JAMARAT</text>
      <!-- Legend -->
      <rect x="20" y="15" width="180" height="55" rx="8" fill="var(--card)" stroke="var(--brd)" stroke-width="1" opacity=".9"/>
      <text x="30" y="32" font-size="9" fill="var(--t1)" font-weight="700" font-family="sans-serif">🗺️ Carte du Hajj</text>
      <line x1="30" y1="42" x2="55" y2="42" stroke="var(--gold)" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="60" y="46" font-size="7.5" fill="var(--t3)" font-family="sans-serif">Aller</text>
      <line x1="90" y1="42" x2="115" y2="42" stroke="var(--teal)" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="120" y="46" font-size="7.5" fill="var(--t3)" font-family="sans-serif">Retour</text>
      <text x="30" y="60" font-size="7" fill="var(--t3)" font-family="sans-serif">Total : 30-60 km de marche !</text>
    </svg>`;

    document.getElementById('mapContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${T("sectionMap")}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:16px;box-shadow:var(--sh);margin-bottom:20px;overflow:hidden">${mapSvg}</div>
      <div style="display:grid;gap:10px;margin-bottom:20px">
        ${d.routes.map(r => `
          <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:14px 18px;box-shadow:var(--sh);display:flex;align-items:center;gap:14px;flex-wrap:wrap;transition:.2s" onmouseover="this.style.transform='translateX(3px)';this.style.boxShadow='var(--shm)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--sh)'">
            <div style="flex:1;min-width:180px">
              <div style="font-size:.88rem;font-weight:700;color:var(--t1)">${r.from} → ${r.to}</div>
              <div style="font-size:.76rem;color:var(--t3);margin-top:2px">${r.note}</div>
            </div>
            <div style="display:flex;gap:14px;align-items:center">
              <div style="text-align:center;padding:6px 12px;background:rgba(26,138,125,.08);border-radius:10px"><div style="font-size:1.1rem;font-weight:800;color:var(--teal)">${r.km}</div><div style="font-size:.6rem;color:var(--t3)">distance</div></div>
              <div style="text-align:center;padding:6px 12px;background:rgba(200,168,78,.08);border-radius:10px"><div style="font-size:.95rem;font-weight:700;color:var(--gold)">${r.walk}</div><div style="font-size:.6rem;color:var(--t3)">à pied</div></div>
              <span style="font-size:1.2rem">${r.emoji}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="background:linear-gradient(135deg,rgba(200,168,78,.1),rgba(200,168,78,.03));border-radius:var(--rr);padding:18px;border:2px solid rgba(200,168,78,.15);text-align:center">
        <span style="font-size:2rem">🏃</span>
        <p style="font-size:1rem;font-weight:700;color:var(--gold);margin:8px 0 4px">${d.totalWalk}</p>
        <p style="font-size:.82rem;color:var(--t3)">Préparez-vous physiquement 2-3 mois avant !</p>
      </div>
    `;
  }

  // ============ NUSUK INFO ============
  function renderNusuk() {
    const d = (lang === "ar" && HAJJ_DATA.nusukInfoAr) ? HAJJ_DATA.nusukInfoAr : HAJJ_DATA.nusukInfo; if (!d) return;
    document.getElementById('nusukContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="background:linear-gradient(135deg,rgba(30,113,110,.06),transparent);border-radius:var(--rr);padding:18px;border:1px solid var(--brd);margin-bottom:16px">
        <p style="font-size:.9rem;color:var(--teal);font-weight:700;margin-bottom:6px">📅 Hajj 2026</p>
        <p style="font-size:.88rem;color:var(--t2);line-height:1.7">${d.hajj2026}</p>
      </div>
      <div class="grid" style="margin-bottom:20px">
        ${d.features.map(f => `
          <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh)">
            <span style="font-size:1.8rem">${f.icon}</span>
            <h4 style="font-size:.95rem;font-weight:700;color:var(--t1);margin:8px 0 6px">${f.name}</h4>
            <p style="font-size:.84rem;color:var(--t2);line-height:1.65">${f.desc}</p>
          </div>
        `).join('')}
      </div>
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);margin-bottom:16px">
        <h4 style="font-size:1rem;font-weight:700;color:var(--grn);margin-bottom:12px">📋 Étapes d'inscription sur Nusuk</h4>
        ${d.steps.map((s,i) => `
          <div style="display:flex;gap:10px;padding:8px 0;${i<d.steps.length-1?'border-bottom:1px solid var(--brd)':''}">
            <div style="min-width:26px;height:26px;border-radius:50%;background:var(--teal);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:700;flex-shrink:0">${i+1}</div>
            <p style="font-size:.86rem;color:var(--t1);line-height:1.6;margin:0">${s}</p>
          </div>
        `).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px">
        <a href="${d.website}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:var(--teal);color:#fff;border-radius:var(--rr);text-decoration:none;font-weight:600;font-size:.85rem">🌐 hajj.nusuk.sa</a>
        <a href="${d.app.android}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:var(--grn);color:#fff;border-radius:var(--rr);text-decoration:none;font-weight:600;font-size:.85rem">📱 Google Play</a>
        <a href="${d.app.ios}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:var(--blue);color:#fff;border-radius:var(--rr);text-decoration:none;font-weight:600;font-size:.85rem">🍎 App Store</a>
      </div>
    `;
  }

  // ============ EXTERNAL LINKS ============
  function renderLinks() {
    const d = ((lang === "ar" && HAJJ_DATA.externalLinksAr) ? HAJJ_DATA.externalLinksAr : HAJJ_DATA.externalLinks); if (!d) return;
    document.getElementById('linksContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">🔗 Meilleures Ressources Externes</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">Les meilleurs tutoriels, guides et outils pour préparer votre Hajj.</p></div>
      ${d.map(cat => `
        <div style="margin-bottom:24px">
          <h3 style="font-size:1.05rem;font-weight:700;color:var(--teal);margin-bottom:12px">${cat.cat}</h3>
          <div style="display:grid;gap:10px">
            ${cat.links.map(l => `
              <a href="${l.url}" target="_blank" rel="noopener" style="display:block;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:16px 18px;box-shadow:var(--sh);text-decoration:none;transition:all .3s;border-left:4px solid var(--gold)">
                <div style="font-size:.92rem;font-weight:700;color:var(--t1);margin-bottom:4px">${l.title} ↗</div>
                <div style="font-size:.82rem;color:var(--t2);line-height:1.6">${l.desc}</div>
              </a>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }

  // ============ VIRTUAL TOUR with SVG diagrams ============
  function renderTour() {
    const d = (lang === "ar" && HAJJ_DATA.virtualTourAr) ? HAJJ_DATA.virtualTourAr : HAJJ_DATA.virtualTour; if (!d) return;
    // Animated parcours SVG
    const parcoursW = Math.min(800, window.innerWidth - 40);
    
    const parcoursSvg = `<svg viewBox="0 0 ${parcoursW} 120" style="width:100%;height:auto;margin:20px 0">
      <defs><linearGradient id="routeG" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="var(--teal)"/><stop offset="100%" stop-color="var(--gold)"/></linearGradient></defs>
      <line x1="30" y1="50" x2="${parcoursW-30}" y2="50" stroke="url(#routeG)" stroke-width="4" stroke-dasharray="8,4" opacity=".4"/>
      ${d.parcours.map((p,i) => {
        const x = 30 + i * (parcoursW-60) / (d.parcours.length-1);
        return `<g>
          <circle cx="${x}" cy="50" r="18" fill="var(--card)" stroke="var(--gold)" stroke-width="2"/>
          <text x="${x}" y="55" text-anchor="middle" font-size="16">${p.emoji}</text>
          <text x="${x}" y="80" text-anchor="middle" font-size="8" fill="var(--t1)" font-weight="600" font-family="sans-serif">${p.label}</text>
          <text x="${x}" y="95" text-anchor="middle" font-size="7" fill="var(--t3)" font-family="sans-serif">${p.day}</text>
          ${i < d.parcours.length-1 ? `<text x="${x + (parcoursW-60)/(d.parcours.length-1)/2}" y="45" text-anchor="middle" font-size="10" fill="var(--gold)">→</text>` : ''}
        </g>`;
      }).join('')}
    </svg>`;

    document.getElementById('tourContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);margin-bottom:20px;overflow-x:auto">
        <h3 style="font-size:1rem;color:var(--teal);margin-bottom:4px;font-weight:700">🗺️ Parcours du Hajj</h3>
        ${parcoursSvg}
      </div>
      <div class="grid">
        ${d.locations.map(loc => `
          <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);transition:.3s;overflow:hidden;position:relative">
            <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--teal),var(--gold))"></div>
            <h3 style="font-size:1.05rem;font-weight:700;color:var(--teal);margin-bottom:12px">${loc.name}</h3>
            <div style="display:flex;flex-direction:column;gap:6px">
              ${(loc.facts).map(f => `
                <div style="display:flex;gap:8px;align-items:flex-start;padding:6px 10px;background:var(--acc);border-radius:8px;font-size:.84rem;line-height:1.5;color:var(--t1)">
                  <span style="color:var(--gold);font-weight:700;flex-shrink:0">•</span>${f}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ============ HANDICAP / PMR ============
  function renderHandicap() {
    const d = (lang === "ar" && HAJJ_DATA.handicapAr) ? HAJJ_DATA.handicapAr : HAJJ_DATA.handicap; if (!d) return;
    const catColors = {'♿':'var(--blue)','👴':'var(--gold)','🦯':'var(--teal)','🦻':'var(--rose)','🤰':'var(--grn)','🧠':'var(--gold)'};
    document.getElementById('handicapContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      ${d.categories.map(cat => {
        const col = catColors[cat.icon] || 'var(--teal)';
        return `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:0;margin-bottom:14px;box-shadow:var(--sh);overflow:hidden">
          <div style="display:flex;align-items:center;gap:12px;padding:16px 18px;background:linear-gradient(135deg,${col}11,transparent);border-bottom:1px solid var(--brd)">
            <span style="font-size:2.2rem;width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:${col}15;border-radius:12px;flex-shrink:0">${cat.icon}</span>
            <h3 style="font-size:1.05rem;font-weight:700;color:${col};margin:0">${cat.title}</h3>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:6px;padding:14px">
            ${cat.items.map(item => `
              <div style="display:flex;gap:10px;padding:10px 12px;background:var(--acc);border-radius:var(--r);align-items:flex-start;border-left:3px solid ${col};transition:.2s" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''">
                <span style="font-size:1.4rem;flex-shrink:0">${item.emoji}</span>
                <span style="font-size:.82rem;line-height:1.6;color:var(--t1)">${item.text}</span>
              </div>
            `).join('')}
          </div>
        </div>`;
      }).join('')}
    `;
  }

  // ============ PRACTICAL SITUATIONS ============
  function renderPractical() {
    const d = (lang === "ar" && HAJJ_DATA.practicalSituationsAr) ? HAJJ_DATA.practicalSituationsAr : HAJJ_DATA.practicalSituations; if (!d) return;
    const severityColors = { important: 'var(--gold)', urgent: 'var(--rose)', info: 'var(--teal)' };
    const severityLabels = { important: '⚠️ Important', urgent: '🚨 Urgent', info: 'ℹ️ Info' };
    const pc = document.getElementById('practicalContainer'); if (!pc) return;
    pc.innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="display:grid;gap:12px">
        ${d.situations.map((s) => `
          <div class="fq" style="border-left:4px solid ${severityColors[s.severity] || 'var(--teal)'}">
            <div class="fq-q" style="gap:10px">
              <span style="font-size:1.4rem;flex-shrink:0">${s.emoji}</span>
              <span style="flex:1">${s.q}</span>
              <span style="font-size:.65rem;padding:3px 8px;border-radius:12px;background:${severityColors[s.severity]};color:#fff;white-space:nowrap">${severityLabels[s.severity]}</span>
              <span class="fq-arr">▼</span>
            </div>
            <div class="fq-a">
              <div style="padding:0 18px 16px">
                <p style="font-size:.88rem;color:var(--t1);line-height:1.75;margin-bottom:8px">${s.a}</p>
                ${s.madhab ? `<div style="font-size:.78rem;color:var(--t3);font-style:italic;padding-top:6px;border-top:1px solid var(--brd)">📚 ${s.madhab}</div>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    pc.querySelectorAll('.fq-q').forEach(q => q.onclick = () => q.parentElement.classList.toggle('open'));
  }

  // ============ HEAT SAFETY ============
  function renderHeat() {
    const d = (lang === "ar" && HAJJ_DATA.heatSafetyAr) ? HAJJ_DATA.heatSafetyAr : HAJJ_DATA.heatSafety; if (!d) return;
    const thermoSvg = `<svg viewBox="0 0 120 220" style="width:90px;height:auto;flex-shrink:0">
      <defs><linearGradient id="thG" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#e74c3c"/><stop offset="60%" stop-color="#e74c3c"/><stop offset="100%" stop-color="#f39c12"/></linearGradient></defs>
      <rect x="42" y="20" width="36" height="150" rx="18" fill="var(--acc)" stroke="var(--brd)" stroke-width="2"/>
      <rect x="46" y="44" width="28" height="122" rx="14" fill="url(#thG)" opacity=".85"><animate attributeName="height" from="20" to="122" dur="2s" fill="freeze"/><animate attributeName="y" from="146" to="44" dur="2s" fill="freeze"/></rect>
      <circle cx="60" cy="185" r="22" fill="#e74c3c" opacity=".9"/>
      <text x="60" y="192" text-anchor="middle" font-size="11" fill="#fff" font-weight="700" font-family="sans-serif">51.8°</text>
      <text x="60" y="15" text-anchor="middle" font-size="8" fill="var(--t3)" font-family="sans-serif">°C</text>
      <!-- Scale marks -->
      <text x="85" y="50" font-size="7" fill="var(--t3)" font-family="sans-serif">50°</text>
      <text x="85" y="85" font-size="7" fill="var(--t3)" font-family="sans-serif">40°</text>
      <text x="85" y="120" font-size="7" fill="var(--t3)" font-family="sans-serif">30°</text>
      <text x="85" y="150" font-size="7" fill="var(--t3)" font-family="sans-serif">20°</text>
      <line x1="78" y1="47" x2="82" y2="47" stroke="var(--t3)" stroke-width="1"/>
      <line x1="78" y1="82" x2="82" y2="82" stroke="var(--t3)" stroke-width="1"/>
      <line x1="78" y1="117" x2="82" y2="117" stroke="var(--t3)" stroke-width="1"/>
      <line x1="78" y1="147" x2="82" y2="147" stroke="var(--t3)" stroke-width="1"/>
    </svg>`;

    document.getElementById('heatContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--rose);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;margin-bottom:20px;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh)">
        ${thermoSvg}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1;min-width:220px">
          ${d.stats.map(s => `<div style="background:linear-gradient(135deg,rgba(196,90,107,.1),rgba(196,90,107,.03));border:1px solid rgba(196,90,107,.15);border-radius:var(--r);padding:14px;text-align:center"><div style="font-size:1.5rem;font-weight:800;color:var(--rose)">${s.num}</div><div style="font-size:.72rem;color:var(--t2);margin-top:4px;line-height:1.3">${s.label}</div></div>`).join('')}
        </div>
      </div>
      <div style="display:grid;gap:10px;margin-bottom:20px">
        ${d.protocol.map(p => `<div style="display:flex;gap:12px;align-items:flex-start;padding:16px;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);box-shadow:var(--sh);border-left:4px solid var(--rose);transition:.2s" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''"><span style="font-size:1.8rem;flex-shrink:0">${p.icon}</span><div><b style="font-size:.92rem;color:var(--t1)">${p.title}</b><p style="font-size:.84rem;color:var(--t2);line-height:1.65;margin:4px 0 0">${p.desc}</p></div></div>`).join('')}
      </div>
      <div style="background:linear-gradient(135deg,rgba(46,125,82,.08),transparent);border-radius:var(--rr);padding:18px;border:1px solid var(--brd)"><b style="color:var(--grn);font-size:.9rem">🛡️ Ce qui a changé depuis 2024</b><p style="font-size:.84rem;color:var(--t2);line-height:1.65;margin-top:6px">${d.whatChanged}</p></div>
    `;
  }

  // ============ TOP ERRORS ============
  function renderErrors() {
    const d = (lang === 'ar' && HAJJ_DATA.topErrorsAr) ? HAJJ_DATA.topErrorsAr : HAJJ_DATA.topErrors;
    if (!d) return;
    document.getElementById('errorsContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--rose);margin-bottom:8px">${T("sectionErrors")}</h2></div>
      <div style="display:grid;gap:12px">
        ${d.items.map((e) => `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);box-shadow:var(--sh);overflow:hidden;transition:.3s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
          <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:rgba(196,90,107,.06);border-bottom:1px solid var(--brd)">
            <span style="font-size:1.6rem;width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:rgba(196,90,107,.12);border-radius:10px;flex-shrink:0">${e.emoji}</span>
            <div style="font-size:.88rem;font-weight:700;color:var(--rose)">❌ ${e.error}</div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:10px;padding:14px 18px;background:rgba(46,125,82,.04)">
            <span style="font-size:1.1rem;flex-shrink:0;margin-top:1px">✅</span>
            <div style="font-size:.84rem;color:var(--t1);line-height:1.6">${e.fix}</div>
          </div>
        </div>`).join('')}
      </div>
    `;
  }

  // ============ HAJJ TYPES ============
  function renderTypes() {
    const d = (lang === "ar" && HAJJ_DATA.hajjTypesAr) ? HAJJ_DATA.hajjTypesAr : HAJJ_DATA.hajjTypes; if (!d) return;
    const compSvg = `<svg viewBox="0 0 600 110" style="width:100%;height:auto;margin-bottom:16px">
      <rect width="600" height="110" rx="10" fill="var(--acc)" opacity=".4"/>
      <text x="300" y="18" text-anchor="middle" font-size="9" fill="var(--gold)" font-weight="700">COMPARAISON RAPIDE</text>
      <!-- Headers -->
      <rect x="10" y="26" width="140" height="22" rx="4" fill="var(--card)"/><text x="80" y="41" text-anchor="middle" font-size="7.5" fill="var(--t3)" font-weight="600"></text>
      <rect x="155" y="26" width="145" height="22" rx="4" fill="rgba(40,167,69,.15)"/><text x="227" y="41" text-anchor="middle" font-size="8" fill="#28a745" font-weight="700">⭐ TAMATTU'</text>
      <rect x="305" y="26" width="145" height="22" rx="4" fill="rgba(240,173,78,.15)"/><text x="377" y="41" text-anchor="middle" font-size="8" fill="#f0ad4e" font-weight="700">QIRAN</text>
      <rect x="455" y="26" width="135" height="22" rx="4" fill="rgba(108,117,125,.15)"/><text x="522" y="41" text-anchor="middle" font-size="8" fill="#6c757d" font-weight="700">IFRAD</text>
      <!-- Row 1: Omra -->
      <text x="80" y="66" text-anchor="middle" font-size="7.5" fill="var(--t2)" font-weight="600">Omra incluse ?</text>
      <text x="227" y="66" text-anchor="middle" font-size="9" fill="#28a745">✅ Oui</text>
      <text x="377" y="66" text-anchor="middle" font-size="9" fill="#f0ad4e">✅ Combinée</text>
      <text x="522" y="66" text-anchor="middle" font-size="9" fill="#6c757d">❌ Non</text>
      <!-- Row 2: Pause -->
      <text x="80" y="82" text-anchor="middle" font-size="7.5" fill="var(--t2)" font-weight="600">Pause d'Ihram ?</text>
      <text x="227" y="82" text-anchor="middle" font-size="9" fill="#28a745">✅ Oui</text>
      <text x="377" y="82" text-anchor="middle" font-size="9" fill="#f0ad4e">❌ Non</text>
      <text x="522" y="82" text-anchor="middle" font-size="9" fill="#6c757d">❌ Non</text>
      <!-- Row 3: Sacrifice -->
      <text x="80" y="98" text-anchor="middle" font-size="7.5" fill="var(--t2)" font-weight="600">Sacrifice ?</text>
      <text x="227" y="98" text-anchor="middle" font-size="9" fill="#28a745">✅ Requis</text>
      <text x="377" y="98" text-anchor="middle" font-size="9" fill="#f0ad4e">✅ Requis</text>
      <text x="522" y="98" text-anchor="middle" font-size="9" fill="#6c757d">❌ Non requis</text>
    </svg>`;
    document.getElementById('typesContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      ${compSvg}
      <div style="display:grid;gap:14px">
        ${d.types.map(t => `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);border-left:5px solid ${t.color}">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="font-size:1.4rem">${t.emoji}</span><h3 style="font-size:1.05rem;font-weight:700;color:${t.color};margin:0">${t.name}</h3></div>
          <p style="font-size:.88rem;color:var(--t2);line-height:1.6;margin-bottom:12px">${t.desc}</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:.82rem">
            <div style="padding:8px 10px;background:var(--acc);border-radius:var(--r)"><b>Omra ?</b> ${t.omra}</div>
            <div style="padding:8px 10px;background:var(--acc);border-radius:var(--r)"><b>Pause ?</b> ${t.pauseIhram}</div>
            <div style="padding:8px 10px;background:var(--acc);border-radius:var(--r)"><b>Sacrifice ?</b> ${t.sacrifice}</div>
            <div style="padding:8px 10px;background:var(--acc);border-radius:var(--r)"><b>+</b> ${t.avantages}</div>
          </div>
        </div>`).join('')}
      </div>
    `;
  }

  // ============ MEDINA ============
  function renderMedina() {
    const d = (lang === "ar" && HAJJ_DATA.medinaGuideAr) ? HAJJ_DATA.medinaGuideAr : HAJJ_DATA.medinaGuide; if (!d) return;
    const r = d.rawdah;
    const rawdahSvg = `<svg viewBox="0 0 500 200" style="width:100%;height:auto;margin:10px 0">
      <rect width="500" height="200" rx="12" fill="var(--acc)" stroke="var(--brd)" stroke-width="1" opacity=".5"/>
      <!-- Mosque outline -->
      <rect x="40" y="30" width="420" height="140" rx="8" fill="var(--card)" stroke="var(--brd)" stroke-width="1.5"/>
      <text x="250" y="22" text-anchor="middle" font-size="9" fill="var(--t3)" font-weight="600" font-family="sans-serif">MASJID AN-NABAWI (plan simplifié)</text>
      <!-- Rawdah (green zone) -->
      <rect x="170" y="60" width="160" height="80" rx="6" fill="rgba(46,125,82,.15)" stroke="var(--grn)" stroke-width="2"/>
      <text x="250" y="85" text-anchor="middle" font-size="11" fill="var(--grn)" font-weight="700" font-family="sans-serif">🌿 RAWDAH</text>
      <text x="250" y="100" text-anchor="middle" font-size="8" fill="var(--grn)" font-family="sans-serif">Jardin du Paradis</text>
      <text x="250" y="115" text-anchor="middle" font-size="7" fill="var(--t3)" font-family="sans-serif">Tapis vert • ~10 min</text>
      <!-- Minbar -->
      <rect x="145" y="75" width="20" height="40" rx="4" fill="rgba(200,168,78,.2)" stroke="var(--gold)" stroke-width="1.5"/>
      <text x="155" y="100" text-anchor="middle" font-size="6" fill="var(--gold)" font-weight="700" font-family="sans-serif">Minbar</text>
      <!-- Sacred Chamber -->
      <rect x="335" y="65" width="55" height="60" rx="4" fill="rgba(200,168,78,.15)" stroke="var(--gold)" stroke-width="1.5"/>
      <text x="362" y="90" text-anchor="middle" font-size="6.5" fill="var(--gold)" font-weight="700" font-family="sans-serif">Chambre</text>
      <text x="362" y="100" text-anchor="middle" font-size="6" fill="var(--gold)" font-family="sans-serif">Sacrée ﷺ</text>
      <!-- Gates -->
      <rect x="170" y="140" width="40" height="18" rx="4" fill="rgba(59,125,216,.15)" stroke="var(--blue)" stroke-width="1"/>
      <text x="190" y="153" text-anchor="middle" font-size="6" fill="var(--blue)" font-weight="700" font-family="sans-serif">Gate 37 ♂</text>
      <rect x="290" y="140" width="40" height="18" rx="4" fill="rgba(196,90,107,.15)" stroke="var(--rose)" stroke-width="1"/>
      <text x="310" y="153" text-anchor="middle" font-size="6" fill="var(--rose)" font-weight="700" font-family="sans-serif">Gate 25 ♀</text>
      <!-- Qibla arrow -->
      <text x="80" y="105" text-anchor="middle" font-size="8" fill="var(--t3)" font-family="sans-serif">← Qibla</text>
      <line x1="95" y1="100" x2="140" y2="100" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3,2" marker-end="none"/>
    </svg>`;

    document.getElementById('medinaContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--grn);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="background:linear-gradient(135deg,rgba(46,125,82,.08),transparent);border:2px solid rgba(46,125,82,.15);border-radius:var(--rr);padding:20px;margin-bottom:16px">
        <h3 style="font-size:1.1rem;color:var(--grn);margin-bottom:10px">${r.title}</h3>
        <p style="font-size:.88rem;color:var(--t2);line-height:1.7;margin-bottom:14px">${r.desc}</p>
        ${rawdahSvg}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;font-size:.82rem">
          <div style="padding:10px;background:var(--card);border-radius:var(--r)"><b>👨 Hommes :</b> ${r.horaires.hommes}<br><b>Porte :</b> ${r.portes.hommes}</div>
          <div style="padding:10px;background:var(--card);border-radius:var(--r)"><b>👩 Femmes :</b> ${r.horaires.femmes}<br><b>Porte :</b> ${r.portes.femmes}</div>
        </div>
        <div style="display:grid;gap:6px;margin-bottom:12px">${r.booking.map((b,i) => `<div style="display:flex;gap:8px;padding:8px 10px;background:var(--card);border-radius:var(--r);font-size:.82rem;border-left:3px solid var(--grn)"><span style="min-width:22px;height:22px;border-radius:50%;background:var(--grn);color:#fff;font-size:.65rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</span>${b}</div>`).join('')}</div>
        <div style="padding:10px 14px;background:rgba(200,168,78,.1);border-radius:var(--r);font-size:.82rem;border-left:3px solid var(--gold)"><b>💡</b> ${r.astuce}</div>
        <div style="display:flex;gap:12px;margin-top:10px;font-size:.78rem;color:var(--t3)"><span>⏱️ Durée : ${r.duree}</span><span>🔒 Limite : ${r.limite}</span></div>
      </div>
      <div class="grid">${d.sites.map(s => `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:16px;box-shadow:var(--sh)"><span style="font-size:1.6rem">${s.emoji}</span><h4 style="font-size:.95rem;color:var(--grn);margin:6px 0">${s.name}</h4><p style="font-size:.82rem;color:var(--t2);line-height:1.6">${s.desc}</p></div>`).join('')}</div>
      <div style="margin-top:14px;padding:12px 16px;background:var(--acc);border-radius:var(--r);font-size:.84rem;color:var(--t2)">🚄 ${d.transport}</div>
    `;
  }

  // ============ APPS ============
  function renderApps() {
    const d = (lang === "ar" && HAJJ_DATA.recommendedAppsAr) ? HAJJ_DATA.recommendedAppsAr : HAJJ_DATA.recommendedApps; if (!d) return;
    document.getElementById('appsContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin-bottom:16px">
        ${d.apps.map(a => {
          const isReq = a.cat === 'OBLIGATOIRE';
          return `<div style="display:flex;gap:14px;align-items:flex-start;padding:16px;background:var(--card);border:1px solid ${isReq?'var(--rose)':'var(--brd)'};border-radius:var(--rr);box-shadow:var(--sh);transition:.3s${isReq?';border-width:2px':''}" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shm)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--sh)'">
            <div style="width:48px;height:48px;border-radius:12px;background:${isReq?'linear-gradient(135deg,var(--rose),#e8757f)':'linear-gradient(135deg,var(--acc),var(--card))'};display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex-shrink:0;border:1px solid ${isReq?'var(--rose)':'var(--brd)'}">${a.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;flex-wrap:wrap">
                <b style="font-size:.9rem;color:var(--t1)">${a.name}</b>
                <span style="font-size:.6rem;padding:2px 8px;border-radius:8px;background:${isReq?'var(--rose)':'rgba(200,168,78,.12)'};color:${isReq?'#fff':'var(--gold)'};font-weight:600">${a.cat}</span>
              </div>
              <p style="font-size:.78rem;color:var(--t2);line-height:1.5;margin:0 0 6px">${a.desc}</p>
              <div style="display:flex;gap:8px;align-items:center">
                ${a.ios?'<span style="font-size:.62rem;padding:2px 6px;border-radius:6px;background:var(--acc);color:var(--t3)">🍎 iOS</span>':''}
                ${a.android?'<span style="font-size:.62rem;padding:2px 6px;border-radius:6px;background:var(--acc);color:var(--t3)">🤖 Android</span>':''}
                ${!a.ios && !a.android?'<span style="font-size:.62rem;padding:2px 6px;border-radius:6px;background:var(--acc);color:var(--t3)">🌐 Web</span>':''}
                <span style="font-size:.65rem;color:var(--gold)">⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div style="padding:14px 18px;background:var(--acc);border-radius:var(--rr);font-size:.84rem;color:var(--t2);line-height:1.6">💡 ${d.tips}</div>
    `;
  }

  // ============ COSTS ============
  function renderCosts() {
    const d = (lang === "ar" && HAJJ_DATA.costsAr) ? HAJJ_DATA.costsAr : HAJJ_DATA.costs; if (!d) return;
    // Parse the avg value to get a number for bar width (rough mapping)
    const avgMap = {'France':9500,'Royaume-Uni':8000,'États-Unis':12000,'Canada':13000,'Algérie':6000,'Maroc':8000,'Tunisie':7000};
    const maxAvg = 13000;
    document.getElementById('costsContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="display:grid;gap:12px;margin-bottom:16px">
        ${d.countries.map(c => {
          const avg = avgMap[c.country] || 8000;
          const pct = Math.round(avg / maxAvg * 100);
          return `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh);overflow:hidden">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><span style="font-size:1.8rem">${c.flag}</span><h3 style="font-size:1rem;font-weight:700;color:var(--t1);margin:0;flex:1">${c.country}</h3>${c.quota?`<span style="font-size:.68rem;padding:3px 10px;border-radius:12px;background:rgba(26,138,125,.1);color:var(--teal);font-weight:600">${c.quota}</span>`:''}</div>
          <div style="display:flex;gap:8px;margin-bottom:12px">
            <div style="flex:1;padding:10px;background:rgba(26,138,125,.06);border-radius:var(--r);text-align:center;border:1px solid rgba(26,138,125,.1)"><div style="font-size:.6rem;color:var(--teal);font-weight:600;margin-bottom:2px">ÉCONOMIQUE</div><div style="font-size:.78rem;font-weight:700;color:var(--teal)">${c.eco}</div></div>
            <div style="flex:1;padding:10px;background:rgba(200,168,78,.06);border-radius:var(--r);text-align:center;border:1px solid rgba(200,168,78,.1)"><div style="font-size:.6rem;color:var(--gold);font-weight:600;margin-bottom:2px">STANDARD</div><div style="font-size:.78rem;font-weight:700;color:var(--gold)">${c.std}</div></div>
            <div style="flex:1;padding:10px;background:rgba(196,90,107,.06);border-radius:var(--r);text-align:center;border:1px solid rgba(196,90,107,.1)"><div style="font-size:.6rem;color:var(--rose);font-weight:600;margin-bottom:2px">LUXE</div><div style="font-size:.78rem;font-weight:700;color:var(--rose)">${c.lux}</div></div>
          </div>
          <div style="margin-bottom:8px"><div style="height:6px;background:var(--acc);border-radius:6px;overflow:hidden"><div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--teal),var(--gold));border-radius:6px;transition:width 1s"></div></div><div style="font-size:.65rem;color:var(--t3);margin-top:3px">Moyenne ~${c.avg}</div></div>
          <div style="font-size:.76rem;color:var(--t3);line-height:1.4">${c.note}</div>
        </div>`;}).join('')}
      </div>
      <div style="padding:14px 18px;background:var(--acc);border-radius:var(--rr);font-size:.84rem;color:var(--t2);line-height:1.6;margin-bottom:10px">💸 ${d.extras}</div>
      <div style="padding:14px 18px;background:linear-gradient(135deg,rgba(30,113,110,.06),transparent);border-radius:var(--rr);font-size:.84rem;color:var(--t2);line-height:1.6"><b>📅 Durées de séjour :</b> Court : ${d.sejours.court} • Moyen : ${d.sejours.moyen} • Long : ${d.sejours.long}</div>
    `;
  }

  // ============ DATES ============
  function renderDates() {
    const d = (lang === "ar" && HAJJ_DATA.hajjDatesAr) ? HAJJ_DATA.hajjDatesAr : HAJJ_DATA.hajjDates; if (!d) return;
    
    // Full MAI 2026 calendar grid
    // Mai 2026: starts on Friday (Ven=5), 31 days
    // Hajj days: ~25-30 Mai
    const hajjDays = {25:'🏕️',26:'⛰️',27:'🎉',28:'🪨',29:'🪨',30:'👋'};
    const hajjLabels = {25:'Mina',26:'Arafat',27:'Aïd',28:'Tashriq',29:'Tashriq',30:'Adieu'};
    const hajjColors = {25:'#1a8a7d',26:'#2e7d52',27:'#c45a6b',28:'#c8a84e',29:'#c8a84e',30:'#9a8c7a'};
    let calHTML = '<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh);margin-bottom:16px;overflow-x:auto">';
    calHTML += '<div style="text-align:center;font-family:var(--fd);font-size:1.1rem;color:var(--gold);margin-bottom:12px">📅 Mai 2026 — Dhul Hijjah 1447</div>';
    calHTML += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center">';
    // Headers
    ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'].forEach(function(d2) {
      calHTML += '<div style="font-size:.65rem;font-weight:700;color:var(--t3);padding:4px 0">'+d2+'</div>';
    });
    // Mai 2026 starts on Friday → offset = 4 empty cells (Lun-Jeu)
    for (var e = 0; e < 4; e++) { calHTML += '<div></div>'; }
    for (var day = 1; day <= 31; day++) {
      var isHajj = hajjDays[day];
      var col = hajjColors[day] || '';
      var label = hajjLabels[day] || '';
      if (isHajj) {
        calHTML += '<div style="padding:4px 2px;background:'+col+'18;border:2px solid '+col+';border-radius:8px;position:relative">';
        calHTML += '<div style="font-size:.7rem;font-weight:700;color:'+col+'">'+day+'</div>';
        calHTML += '<div style="font-size:.85rem;margin:2px 0">'+isHajj+'</div>';
        calHTML += '<div style="font-size:.5rem;color:'+col+';font-weight:600">'+label+'</div>';
        calHTML += '</div>';
      } else {
        calHTML += '<div style="padding:6px 2px;font-size:.72rem;color:var(--t3)">'+day+'</div>';
      }
    }
    calHTML += '</div></div>';

    // Timeline SVG
    var tlSvg = '<svg viewBox="0 0 650 70" style="width:100%;height:auto;margin-bottom:16px">';
    tlSvg += '<rect width="650" height="70" rx="10" fill="var(--acc)" opacity=".3"/>';
    tlSvg += '<line x1="40" y1="30" x2="610" y2="30" stroke="var(--gold)" stroke-width="3" stroke-linecap="round"/>';
    var tlDays = [{x:55,em:'🏕️',lb:'8 DH',col:'#1a8a7d'},{x:165,em:'⛰️',lb:'9 DH ⭐',col:'#2e7d52'},{x:280,em:'🎉',lb:'10 DH',col:'#c45a6b'},{x:390,em:'🪨',lb:'11-12',col:'#c8a84e'},{x:500,em:'🕋',lb:'Tawaf',col:'#c8a84e'},{x:595,em:'👋',lb:'Adieu',col:'#9a8c7a'}];
    tlDays.forEach(function(t) {
      tlSvg += '<circle cx="'+t.x+'" cy="30" r="10" fill="'+t.col+'" opacity=".2"/>';
      tlSvg += '<text x="'+t.x+'" y="24" text-anchor="middle" font-size="14">'+t.em+'</text>';
      tlSvg += '<text x="'+t.x+'" y="52" text-anchor="middle" font-size="7" fill="'+t.col+'" font-weight="700" font-family="sans-serif">'+t.lb+'</text>';
    });
    // Arrows between stops
    [110,220,335,445,548].forEach(function(ax) {
      tlSvg += '<text x="'+ax+'" y="33" text-anchor="middle" font-size="10" fill="var(--gold)">→</text>';
    });
    tlSvg += '</svg>';

    document.getElementById('datesContainer').innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><div style="padding:12px 16px;background:rgba(200,168,78,.1);border:2px solid rgba(200,168,78,.2);border-radius:var(--rr);font-size:.85rem;color:var(--gold);line-height:1.6;margin-bottom:16px">${d.warning}</div></div>
      ${calHTML}
      ${tlSvg}
      <div style="display:grid;gap:10px;margin-bottom:20px">
        ${d.dates.map(dt => {
          const gcalDates = {
            '1 Dhul Hijjah': {start:'20260518',end:'20260519',sIso:'2026-05-18',eIso:'2026-05-19'},
            '8 Dhul Hijjah': {start:'20260525',end:'20260526',sIso:'2026-05-25',eIso:'2026-05-26'},
            '9 Dhul Hijjah': {start:'20260526',end:'20260527',sIso:'2026-05-26',eIso:'2026-05-27'},
            '10 Dhul Hijjah': {start:'20260527',end:'20260528',sIso:'2026-05-27',eIso:'2026-05-28'},
            '11-13 Dhul Hijjah': {start:'20260528',end:'20260531',sIso:'2026-05-28',eIso:'2026-05-31'}
          };
          const cal = gcalDates[dt.hijri];
          if (!cal) return `<div style="display:flex;gap:14px;align-items:center;padding:14px 18px;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);box-shadow:var(--sh)">
            <span style="font-size:1.8rem;width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:rgba(200,168,78,.08);border-radius:10px;flex-shrink:0">${dt.emoji}</span>
            <div style="flex:1"><div style="font-size:.9rem;font-weight:700;color:var(--t1)">${dt.event}</div><div style="font-size:.76rem;color:var(--t3);margin-top:2px">${dt.hijri}</div></div>
            <div style="font-size:.9rem;font-weight:700;color:var(--teal);padding:4px 10px;background:rgba(26,138,125,.08);border-radius:8px">${dt.greg}</div>
          </div>`;
          const title = 'Hajj 2026 — ' + dt.event.replace(/ ⭐/g,'').replace(/ 🎉/g,'');
          const desc = dt.hijri + ' — ' + dt.event + ' (±1 jour selon observation lunaire)';
          const gcalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title) + '&dates=' + cal.start + '/' + cal.end + '&details=' + encodeURIComponent(desc) + '&location=' + encodeURIComponent('Makkah, Saudi Arabia');
          const outlookUrl = 'https://outlook.live.com/calendar/0/action/compose?subject=' + encodeURIComponent(title) + '&startdt=' + cal.sIso + '&enddt=' + cal.eIso + '&body=' + encodeURIComponent(desc) + '&location=' + encodeURIComponent('Makkah, Saudi Arabia');
          const uid = 'hajj2026-' + dt.hijri.replace(/[^a-z0-9]/gi,'');
          const icsData = 'BEGIN:VCALENDAR\\nVERSION:2.0\\nBEGIN:VEVENT\\nDTSTART;VALUE=DATE:' + cal.start + '\\nDTEND;VALUE=DATE:' + cal.end + '\\nSUMMARY:' + title + '\\nDESCRIPTION:' + desc + '\\nLOCATION:Makkah Saudi Arabia\\nUID:' + uid + '\\nEND:VEVENT\\nEND:VCALENDAR';
          return `<div style="display:flex;gap:14px;align-items:center;padding:14px 18px;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);box-shadow:var(--sh);transition:.2s;flex-wrap:wrap" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''">
            <span style="font-size:1.8rem;width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:rgba(200,168,78,.08);border-radius:10px;flex-shrink:0">${dt.emoji}</span>
            <div style="flex:1;min-width:140px"><div style="font-size:.9rem;font-weight:700;color:var(--t1)">${dt.event}</div><div style="font-size:.76rem;color:var(--t3);margin-top:2px">${dt.hijri}</div></div>
            <div style="font-size:.9rem;font-weight:700;color:var(--teal);padding:4px 10px;background:rgba(26,138,125,.08);border-radius:8px;white-space:nowrap">${dt.greg}</div>
            <div style="display:flex;gap:4px;flex-wrap:wrap">
              <a href="${gcalUrl}" target="_blank" rel="noopener" style="padding:4px 8px;background:rgba(66,133,244,.08);border:1px solid rgba(66,133,244,.2);border-radius:6px;font-size:.62rem;font-weight:600;color:#4285f4;text-decoration:none;white-space:nowrap" title="Google Calendar">📅 Google</a>
              <a href="${outlookUrl}" target="_blank" rel="noopener" style="padding:4px 8px;background:rgba(0,120,212,.08);border:1px solid rgba(0,120,212,.2);border-radius:6px;font-size:.62rem;font-weight:600;color:#0078d4;text-decoration:none;white-space:nowrap" title="Outlook">📧 Outlook</a>
              <a href="data:text/calendar;charset=utf-8,${encodeURIComponent(icsData.replace(/\\n/g,'\r\n'))}" download="hajj-${cal.start}.ics" style="padding:4px 8px;background:rgba(46,125,82,.08);border:1px solid rgba(46,125,82,.2);border-radius:6px;font-size:.62rem;font-weight:600;color:var(--grn);text-decoration:none;white-space:nowrap" title="Apple Calendar / Android / Tout calendrier">🍎 .ics</a>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div style="background:linear-gradient(135deg,rgba(200,168,78,.08),rgba(200,168,78,.02));border:2px solid rgba(200,168,78,.2);border-radius:var(--rr);padding:22px;margin-bottom:20px;text-align:center">
        <h4 style="font-size:1.05rem;color:var(--gold);margin-bottom:12px">📅 Ajouter tout le programme à votre calendrier</h4>
        <p style="font-size:.8rem;color:var(--t3);margin-bottom:16px">15 événements · horaires La Mecque · rappels 1h et 15min avant</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:16px">
          <button onclick="addAllToGoogle()" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#4285f4;color:#fff;border:none;border-radius:22px;font-size:.85rem;font-weight:700;cursor:pointer;box-shadow:0 3px 12px rgba(66,133,244,.3);transition:.3s;font-family:var(--fu)" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform=''">📅 Google Calendar</button>
          <button onclick="downloadHajjICS()" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--card);color:var(--t1);border:1px solid var(--brd);border-radius:22px;font-size:.85rem;font-weight:700;cursor:pointer;box-shadow:var(--sh);transition:.3s;font-family:var(--fu)" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform=''">🍎 Apple · Android · Outlook (.ics)</button>
        </div>
        <details style="text-align:left;background:var(--card);border-radius:var(--r);padding:10px 14px;font-size:.75rem;color:var(--t3);cursor:pointer">
          <summary style="font-weight:600;color:var(--t2)">📋 Voir les 15 événements inclus</summary>
          <div style="margin-top:8px;display:grid;gap:3px">
            <div>25/05 05h — Ghusl + Ihram + Talbiyah</div>
            <div>25/05 09h — Départ vers Mina</div>
            <div>25/05 13h — Dhuhr à Mina</div>
            <div>25/05 16h — Asr à Mina</div>
            <div>26/05 05h — Fajr + départ Arafat</div>
            <div style="color:var(--grn);font-weight:600">26/05 12h — ⭐ ARAFAT ⭐</div>
            <div>26/05 19h30 — Muzdalifah</div>
            <div>27/05 08h — Lapidation</div>
            <div style="color:var(--rose);font-weight:600">27/05 10h — Sacrifice + AÏD 🎉</div>
            <div>27/05 14h — Tawaf al-Ifadah</div>
            <div>28-29/05 — Lapidation J11-12</div>
            <div>30/05 — Tawaf al-Wada</div>
          </div>
        </details>
      </div>
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh)">
        <h4 style="font-size:.95rem;color:var(--grn);margin-bottom:10px">📌 Infos clés</h4>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:6px">${d.keyInfo.map(info => `<div style="display:flex;gap:8px;padding:8px 12px;background:var(--acc);border-radius:var(--r);font-size:.82rem;line-height:1.5;align-items:flex-start;border-left:3px solid var(--gold)"><span style="color:var(--gold);flex-shrink:0">📌</span><span>${info}</span></div>`).join('')}</div>
      </div>
    `;
  }

  // ============ ADD ALL TO GOOGLE CALENDAR ============
  window.addAllToGoogle = function() {
    const events = [
      {t:'Hajj: Ghusl + Ihram + Talbiyah',s:'20260525T020000Z',e:'20260525T030000Z',d:'Bain complet. Ihram. 2 rakat. Talbiyah.',l:'Hotel Makkah'},
      {t:'Hajj: Depart vers Mina',s:'20260525T060000Z',e:'20260525T090000Z',d:'Bus vers Mina (8km). Photographier tente.',l:'Mina Makkah'},
      {t:'⭐ ARAFAT — LE JOUR CLE',s:'20260526T090000Z',e:'20260526T160000Z',d:'Combiner Dhuhr+Asr. Duas non-stop midi au Maghrib. NE PAS QUITTER AVANT LE COUCHER DU SOLEIL.',l:'Plaine de Arafat'},
      {t:'Hajj: Muzdalifah — Nuit',s:'20260526T163000Z',e:'20260526T180000Z',d:'Combiner Maghrib+Isha. Ramasser 49-70 cailloux. Dormir.',l:'Muzdalifah'},
      {t:'Hajj: Lapidation + Sacrifice + AID',s:'20260527T050000Z',e:'20260527T070000Z',d:'7 cailloux Grande Jamara. Sacrifice. Rasage. PREMIER TAHALLUL.',l:'Jamarat Mina'},
      {t:'Hajj: Tawaf al-Ifadah + Sai (PILIER)',s:'20260527T110000Z',e:'20260527T140000Z',d:'7 tours Kaaba + 7 allers-retours Safa-Marwa.',l:'Masjid al-Haram Makkah'},
      {t:'Hajj: Lapidation 3 Jamarat (Jour 11)',s:'20260528T100000Z',e:'20260528T120000Z',d:'Petite→Moyenne→Grande. 21 cailloux.',l:'Jamarat Mina'},
      {t:'Hajj: Lapidation 3 Jamarat (Jour 12)',s:'20260529T100000Z',e:'20260529T120000Z',d:'Meme procedure. Quitter Mina AVANT Maghrib si depart.',l:'Jamarat Mina'},
      {t:'Hajj: Tawaf al-Wada — Adieu',s:'20260530T070000Z',e:'20260530T090000Z',d:'7 tours adieu. 2 rakat. Zamzam. Dernier regard Kaaba.',l:'Masjid al-Haram Makkah'}
    ];
    var opened = 0;
    events.forEach(function(ev, i) {
      setTimeout(function() {
        var url = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
          + '&text=' + encodeURIComponent(ev.t)
          + '&dates=' + ev.s.replace(/[-:]/g,'') + '/' + ev.e.replace(/[-:]/g,'')
          + '&details=' + encodeURIComponent(ev.d)
          + '&location=' + encodeURIComponent(ev.l);
        window.open(url, '_blank');
        opened++;
      }, i * 800);
    });
    setTimeout(function() {
      if (opened === 0) {
        alert('Votre navigateur bloque les pop-ups. Autorisez-les pour ce site, puis réessayez.');
      }
    }, 2000);
  };

  // ============ ICS CALENDAR GENERATOR ============
  window.downloadHajjICS = function() {
    const events = [
      {s:'20260525T050000',e:'20260525T060000',t:'Hajj: Ghusl + Ihram + Talbiyah',d:'Bain complet, parfum, vetir Ihram. 2 rakat. Formuler niyyah du Hajj. Commencer la Talbiyah.',l:'Hotel Makkah'},
      {s:'20260525T090000',e:'20260525T120000',t:'Hajj: Depart vers Mina (8 km)',d:'Bus vers Mina. Continuer la Talbiyah. Trouver sa tente. PHOTOGRAPHIER le numero de camp.',l:'Mina, Makkah'},
      {s:'20260525T130000',e:'20260525T133000',t:'Hajj: Dhuhr a Mina (raccourcie)',d:'Priere Dhuhr raccourcie a 2 rakat. NE PAS combiner avec Asr.',l:'Mina, Makkah'},
      {s:'20260525T160000',e:'20260525T163000',t:'Hajj: Asr a Mina (raccourcie)',d:'Priere Asr raccourcie a 2 rakat.',l:'Mina, Makkah'},
      {s:'20260526T050000',e:'20260526T060000',t:'Hajj: Fajr a Mina puis depart Arafat',d:'Priez Fajr a Mina. Depart vers Arafat (14 km).',l:'Mina, Makkah'},
      {s:'20260526T120000',e:'20260526T190000',t:'⭐ ARAFAT — LE PLUS GRAND JOUR ⭐',d:'Combiner Dhuhr+Asr. Puis DUAS NON-STOP de midi au Maghrib. Meilleure dua: La ilaha illallah wahdahu la sharika lah. NE PAS QUITTER AVANT LE COUCHER DU SOLEIL.',l:'Plaine de Arafat'},
      {s:'20260526T193000',e:'20260526T210000',t:'Hajj: Depart Arafat → Muzdalifah',d:'Apres le coucher du soleil: depart vers Muzdalifah (9 km). Combiner Maghrib+Isha. RAMASSER 49-70 cailloux. Dormir a la belle etoile.',l:'Muzdalifah'},
      {s:'20260527T050000',e:'20260527T060000',t:'Hajj: Fajr Muzdalifah + depart',d:'Priez Fajr a Muzdalifah. Depart vers Mina apres le lever du soleil.',l:'Muzdalifah'},
      {s:'20260527T080000',e:'20260527T100000',t:'Hajj: Lapidation Jamarat al-Aqaba',d:'7 cailloux sur la GRANDE Jamara UNIQUEMENT. Allahu Akbar a chaque lancer. ARRETEZ la Talbiyah apres le 1er caillou.',l:'Jamarat, Mina'},
      {s:'20260527T100000',e:'20260527T110000',t:'Hajj: Sacrifice + Rasage = AID MOUBARAK',d:'Sacrifice (coupon agence). Rasage complet (H) ou coupe 2cm (F). PREMIER TAHALLUL: tout redevient permis sauf relations conjugales.',l:'Mina, Makkah'},
      {s:'20260527T140000',e:'20260527T170000',t:'Hajj: Tawaf al-Ifadah + Sai (PILIER)',d:'7 tours de la Kaaba + 7 allers-retours Safa-Marwa. PILIER — ne pas oublier. Peut etre reporte au 11 ou 12.',l:'Masjid al-Haram, Makkah'},
      {s:'20260528T130000',e:'20260528T150000',t:'Hajj: Lapidation 3 Jamarat (Jour 11)',d:'ORDRE: Petite → Moyenne → Grande. 7 cailloux chacune = 21 total. Dua longue apres Petite et Moyenne (face Qibla). PAS de dua apres la Grande.',l:'Jamarat, Mina'},
      {s:'20260529T130000',e:'20260529T150000',t:'Hajj: Lapidation 3 Jamarat (Jour 12)',d:'Meme procedure. Si vous partez aujourd hui: quittez Mina AVANT le Maghrib. Sinon restez pour le 13.',l:'Jamarat, Mina'},
      {s:'20260530T100000',e:'20260530T120000',t:'Hajj: Tawaf al-Wada (Adieu)',d:'7 tours d adieu. 2 rakat Maqam Ibrahim. Buvez Zamzam. Dernier regard sur la Kaaba. WAJIB — ne pas sauter. Femmes en menstruation: exemptees.',l:'Masjid al-Haram, Makkah'},
      {s:'20260526T050000',e:'20260526T053000',t:'RAPPEL: Takbir at-Tashriq commence',d:'A partir de Fajr du 9 Dhul Hijjah: recitez le Takbir apres CHAQUE priere obligatoire. Allahu Akbar Allahu Akbar la ilaha illallah wallahu akbar Allahu akbar wa lillahil hamd.',l:'Makkah'}
    ];
    var ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//HajjGuide//FR\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\nX-WR-CALNAME:Hajj 2026\r\nX-WR-TIMEZONE:Asia/Riyadh\r\nX-WR-CALDESC:Dates estimees — peuvent varier de +/-1 jour selon observation lunaire officielle.\r\n';
    events.forEach(function(ev, idx) {
      ics += 'BEGIN:VEVENT\r\n';
      ics += 'DTSTART;TZID=Asia/Riyadh:' + ev.s + '\r\n';
      ics += 'DTEND;TZID=Asia/Riyadh:' + ev.e + '\r\n';
      ics += 'SUMMARY:' + ev.t + '\r\n';
      ics += 'DESCRIPTION:' + ev.d.replace(/,/g, '\\,') + '\r\n';
      ics += 'LOCATION:' + ev.l + '\r\n';
      ics += 'UID:hajj2026-' + idx + '@guidehajj\r\n';
      ics += 'BEGIN:VALARM\r\nTRIGGER:-PT60M\r\nACTION:DISPLAY\r\nDESCRIPTION:' + ev.t + ' dans 1 heure\r\nEND:VALARM\r\n';
      ics += 'BEGIN:VALARM\r\nTRIGGER:-PT15M\r\nACTION:DISPLAY\r\nDESCRIPTION:' + ev.t + ' dans 15 minutes!\r\nEND:VALARM\r\n';
      ics += 'END:VEVENT\r\n';
    });
    ics += 'END:VCALENDAR';
    var blob = new Blob([ics], {type: 'text/calendar;charset=utf-8'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'hajj-2026-programme-complet.ics';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ============ COMPANION GUIDE ============
  // ============ COMPANION GUIDE — Day Selector ============
  let activeDay = 0;

  function renderCompanion() {
    const dFr = HAJJ_DATA.companionGuide;
    const dAr = HAJJ_DATA.companionGuideAr;
    const d = (lang === 'ar' && dAr) ? dAr : dFr;
    if (!d) return;
    const c = document.getElementById('companionContainer'); if (!c) return;
    const dayColors = ['#1a8a7d','#2e7d52','#c45a6b','#c8a84e','#9a8c7a'];

    function renderDay(di) {
      activeDay = di;
      var day = d[di];
      var col = dayColors[di];
      var dayLocations = T('dayLocations');
      var dayShortNames = T('dayNames');
      var mapLabelsArr = T('mapLabels');

      // Mini location map SVG showing where we are
      var mapPts = [{x:60,y:45,l:mapLabelsArr[0]},{x:200,y:35,l:mapLabelsArr[1]},{x:360,y:25,l:mapLabelsArr[2]},{x:310,y:50,l:mapLabelsArr[3]},{x:230,y:55,l:mapLabelsArr[4]}];
      var dayHighlight = [[0,1],[1,2],[1,4,0],[1,4],[0]]; // which points to highlight per day
      var miniMap = '<svg viewBox="0 0 420 70" style="width:100%;max-width:420px;height:auto;margin:0 auto 16px;display:block">';
      miniMap += '<rect width="420" height="70" rx="8" fill="var(--acc)" opacity=".3"/>';
      // Routes
      miniMap += '<path d="M60 45 Q130 30 200 35" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      miniMap += '<path d="M200 35 Q280 25 360 25" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      miniMap += '<path d="M360 25 L310 50" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      miniMap += '<path d="M310 50 L230 55" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      miniMap += '<path d="M230 55 Q150 50 60 45" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      // Points
      var hl = dayHighlight[di] || [];
      mapPts.forEach(function(pt, pi) {
        var isHere = hl.indexOf(pi) !== -1;
        miniMap += '<circle cx="'+pt.x+'" cy="'+pt.y+'" r="'+(isHere?10:6)+'" fill="'+(isHere?col:'var(--brd)')+'" opacity="'+(isHere?'.9':'.4')+'"/>';
        if (isHere) miniMap += '<circle cx="'+pt.x+'" cy="'+pt.y+'" r="14" fill="'+col+'" opacity=".15"><animate attributeName="r" values="14;18;14" dur="2s" repeatCount="indefinite"/></circle>';
        miniMap += '<text x="'+pt.x+'" y="'+(pt.y-12)+'" text-anchor="middle" font-size="'+(isHere?'7.5':'6')+'" fill="'+(isHere?col:'var(--t3)')+'" font-weight="'+(isHere?'700':'400')+'" font-family="sans-serif">'+pt.l+'</text>';
      });
      miniMap += '<text x="210" y="68" text-anchor="middle" font-size="6" fill="var(--t3)" font-family="sans-serif">' + T('youAreHere') + dayLocations[di] + '</text>';
      miniMap += '</svg>';

      // Day selector strip with LOCATION names
      var strip = '<div style="display:flex;gap:6px;margin-bottom:12px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none">';
      for (var j = 0; j < d.length; j++) {
        var isActive = j === di;
        var jcol = dayColors[j];
        strip += '<button onclick="selectHajjDay(' + j + ')" style="flex:1;min-width:60px;padding:10px 6px;border-radius:var(--rr);border:2px solid ' + (isActive ? jcol : 'var(--brd)') + ';background:' + (isActive ? jcol + '18' : 'var(--card)') + ';cursor:pointer;text-align:center;transition:.3s;box-shadow:' + (isActive ? '0 4px 12px ' + jcol + '30' : 'var(--sh)') + '">';
        strip += '<div style="font-size:1.2rem;margin-bottom:2px">' + d[j].emoji + '</div>';
        strip += '<div style="font-size:.62rem;font-weight:700;color:' + (isActive ? jcol : 'var(--t3)') + ';white-space:nowrap">' + dayShortNames[j].replace(/^[^\w\u0600-\u06FF]+/,'') + '</div>';
        strip += '</button>';
      }
      strip += '</div>';

      // Navigation arrows
      var nav = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">';
      if (di > 0) {
        nav += '<button onclick="selectHajjDay(' + (di-1) + ')" style="border:none;background:var(--acc);padding:8px 16px;border-radius:20px;font-size:.8rem;font-weight:600;cursor:pointer;color:var(--t2);transition:.3s;font-family:var(--fu)">◀ ' + dayShortNames[di-1] + '</button>';
      } else { nav += '<div></div>'; }
      nav += '<div style="font-size:.78rem;font-weight:700;color:' + col + '">' + T('youAreHere') + dayLocations[di] + '</div>';
      if (di < d.length - 1) {
        nav += '<button onclick="selectHajjDay(' + (di+1) + ')" style="border:none;background:var(--acc);padding:8px 16px;border-radius:20px;font-size:.8rem;font-weight:600;cursor:pointer;color:var(--t2);transition:.3s;font-family:var(--fu)">' + dayShortNames[di+1] + ' ▶</button>';
      } else { nav += '<div></div>'; }
      nav += '</div>';

      // Day header
      var header = '<div style="display:flex;align-items:center;gap:14px;padding:18px 20px;background:linear-gradient(135deg,' + col + '15,transparent);border-radius:var(--rr);margin-bottom:16px;border:1px solid ' + col + '25">';
      header += '<span style="font-size:2.4rem;width:56px;height:56px;display:flex;align-items:center;justify-content:center;background:' + col + '20;border-radius:14px;flex-shrink:0">' + day.emoji + '</span>';
      header += '<div><div style="font-size:1.1rem;font-weight:800;color:var(--t1)">' + day.day + '</div><div style="font-size:.88rem;color:' + col + ';font-weight:700">' + day.title + '</div></div>';
      header += '</div>';

      // Schedule
      var schedule = '<div style="margin-bottom:16px;padding:16px;background:var(--acc);border-radius:var(--r)">';
      schedule += '<div style="font-size:.82rem;font-weight:700;color:' + col + ';margin-bottom:12px">' + T('scheduleTitle') + '</div>';
      day.schedule.forEach(function(s) {
        schedule += '<div style="display:flex;gap:10px;padding:10px 12px;margin-bottom:4px;background:var(--card);border-radius:8px;border-left:3px solid ' + col + ';transition:.2s" onmouseover="this.style.transform=\'translateX(3px)\'" onmouseout="this.style.transform=\'\'">';
        schedule += '<span style="min-width:80px;font-weight:700;color:' + col + ';flex-shrink:0;font-size:.8rem">' + s.time + '</span>';
        schedule += '<span style="color:var(--t1);line-height:1.5;font-size:.82rem">' + s.action + '</span></div>';
      });
      schedule += '</div>';

      // Duas
      var duas = '<div style="margin-bottom:16px"><div style="font-size:.82rem;font-weight:700;color:var(--grn);margin-bottom:10px">' + T('duasTitle') + '</div>';
      day.duas.forEach(function(dua) {
        duas += '<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--r);padding:14px;margin-bottom:8px">';
        duas += '<div style="font-family:var(--fd);font-size:1.15rem;color:var(--grn);direction:rtl;text-align:right;line-height:1.9;padding:10px;background:rgba(46,125,82,.05);border-radius:8px;margin-bottom:8px">' + dua.ar + '</div>';
        duas += '<div style="font-size:.76rem;font-style:italic;color:var(--t3);margin-bottom:3px">' + dua.translit + '</div>';
        duas += '<div style="font-size:.82rem;color:var(--t1);margin-bottom:4px">🇫🇷 ' + dua.fr + '</div>';
        if (dua.note) duas += '<div style="font-size:.7rem;font-weight:600;color:var(--gold);padding:4px 8px;background:rgba(200,168,78,.08);border-radius:6px;display:inline-block">' + dua.note + '</div>';
        duas += '</div>';
      });
      duas += '</div>';

      // Pack + Alerts grid
      var grid = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">';
      grid += '<div style="background:rgba(59,125,216,.05);border-radius:var(--r);padding:12px 14px;border:1px solid rgba(59,125,216,.12)">';
      grid += '<div style="font-size:.8rem;font-weight:700;color:var(--blue);margin-bottom:6px">' + T('packTitle') + '</div>';
      grid += '<div style="font-size:.78rem;color:var(--t1);line-height:1.5">' + day.pack.replace('🎒 ','') + '</div></div>';
      grid += '<div style="background:rgba(196,90,107,.04);border-radius:var(--r);padding:12px 14px;border:1px solid rgba(196,90,107,.12)">';
      grid += '<div style="font-size:.8rem;font-weight:700;color:var(--rose);margin-bottom:6px">' + T('alertsTitle') + '</div>';
      day.alerts.forEach(function(a) { grid += '<div style="font-size:.75rem;color:var(--t1);line-height:1.4;padding:3px 0">' + a + '</div>'; });
      grid += '</div></div>';

      // Guide tip
      var tip = '<div style="display:flex;gap:12px;background:linear-gradient(135deg,rgba(200,168,78,.08),rgba(200,168,78,.02));border:1px solid rgba(200,168,78,.15);border-radius:var(--rr);padding:14px 16px;margin-bottom:14px">';
      tip += '<span style="font-size:1.4rem;flex-shrink:0">🧑‍🏫</span>';
      tip += '<div style="font-size:.82rem;color:var(--t1);line-height:1.65;font-style:italic">' + day.guideTip.replace('🧑‍🏫 ','') + '</div></div>';

      c.innerHTML = '<h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:16px;text-align:center">' + T('companionTitle') + '</h2>'
        + strip + miniMap + header + nav + schedule + duas + grid + tip + nav;
    }

    renderDay(activeDay);
  }

  window.selectHajjDay = function(di) {
    activeDay = di;
    renderCompanion();
    var c = document.getElementById('companionContainer');
    if (c) c.scrollIntoView({behavior:'smooth', block:'start'});
  };



  // ============ SHARE ============
  window.shareGuide = function() {
    var title = lang === 'ar' ? 'دليل الحج الشامل ٢٠٢٦' : 'Guide Complet du Hajj 2026';
    var text = lang === 'ar' ? 'دليل الحج خطوة بخطوة مع الأدعية والبرنامج اليومي' : 'Guide du Hajj pas à pas avec duas et programme jour par jour';
    if (navigator.share) {
      navigator.share({ title: title, text: text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(function() {
        var btn = document.getElementById('shareBtn');
        var orig = btn.textContent;
        btn.textContent = lang === 'ar' ? '✅ تم النسخ!' : '✅ Lien copié !';
        setTimeout(function() { btn.textContent = orig; }, 2000);
      });
    }
  };

  // INIT
  applyLang();
  renderAll();
});

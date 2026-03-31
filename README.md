# 🕋 Guide Complet du Hajj 2026

**بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ**

> وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ

Guide interactif complet pour le pèlerinage du Hajj 2026 — **trilingue Français / عربي / English**.
Application web progressive (PWA), zéro dépendance, zéro build, pure HTML/CSS/JS.

**v1.0** — [github.com/abourdim/hajj-guide](https://github.com/abourdim/hajj-guide)

---

## ⚠️ Avertissement

Je ne suis ni savant ni cheikh. Ce guide est un effort personnel — je n'ai pas trouvé en ligne ce qui me convenait, alors je l'ai construit moi-même. Il peut contenir des erreurs. Vérifiez toujours auprès d'un imam ou d'une source islamique de confiance.

---

## 🌐 Démo

Ouvrez `index.html` directement dans le navigateur. Aucun serveur requis.

---

## ✨ Fonctionnalités

### 🕋 Mon Hajj — Guide Compagnon jour par jour
- **5 jours détaillés** : programme horaire, duas, alertes, liste à emporter
- **Navigation** par boutons jour ◀ ▶ avec noms de lieux
- **Mini-carte SVG** position en temps réel (Kaaba → Mina → Arafat → Muzdalifah → Jamarat)

### 📖 Apprendre — Savoir religieux complet
- **22 étapes pas à pas** avec instructions détaillées
- **9 jours timeline** du Hajj
- **10 rituels** avec illustrations SVG, histoire et règles
- **21 duas** en arabe calligraphié + translittération + traduction
- **Tenue / Ihram** : SVG homme vs femme + interdits visuels
- **Pyramide Arkaan / Wajibaat / Sunan** (classification SVG)
- **3 Types de Hajj** : Tamattu' / Qiran / Ifrad (comparaison visuelle)
- **Carte des distances** SVG (Kaaba → Mina → Arafat → Muzdalifah → Jamarat)
- **Guide Omra** : étapes, miqats, duas, erreurs courantes, comparatif Hajj/Omra

### ✅ Préparer — Concret et pratique
- **Checklist interactive** (58 items, 5 catégories, barre de progression, localStorage)
- **Calendrier Mai–Juin 2026** + intégration Google Calendar / Outlook / .ics
- **15 événements** avec horaires précis et rappels (1h + 15min)
- **Coûts par pays** (7 pays, barres visuelles comparatives)
- **8 applications** recommandées (style App Store)
- **Guide Nusuk** : inscription officielle pas à pas

### 🔍 Plus — Ressources complémentaires
- **22 FAQ** (accordéon)
- **Top 10 erreurs** (cartes avant/après ❌→✅)
- **16 conseils santé** (cartes colorées par type)
- **Survie chaleur** (protocole anti-canicule, thermomètre SVG)
- **Accessibilité** : PMR, seniors, enceintes — 6 catégories, 31 items
- **32 flashcards quiz** (flip animation, mélange aléatoire)
- **Tour virtuel** des lieux saints
- **Guide Médine** : Rawdah, Quba, Uhud (plan SVG)
- **12 questions pratiques** pour situations délicates
- **Liens officiels** : Nusuk, Hajj.gov.sa, IslamQA…
- **À propos** : sources, contact, GitHub, prompt IA pour reconstruire

### 🌍 Trilingue FR / عربي / EN
- **3 langues complètes** avec sélecteur de drapeau (SVG inline — compatible Windows)
- **100+ clés UI** traduites (tabs, boutons, labels, titres)
- **Toutes les sections data** en FR + AR + EN (`data.js`)
- **RTL complet** pour l'arabe (CSS adapté, polices Amiri / Noto Naskh Arabic)
- `D(base)` helper : sélection automatique selon langue courante

### 🎨 Design & UX
- **Splash screen** 13s avec compte à rebours, verset coranique, guide d'utilisation
- **Barre d'actualités défilante** (news ticker) en bas : countdown Hajj, checklist %, dua du jour, hijri
- **Navigation bottom bar fixe** (4 onglets toujours visibles, style app mobile)
- **Dark mode par défaut** + toggle + auto-détection nocturne (21h–6h)
- **Barre sacrée** : Bismillah + verset en haut de page
- **Thème or & teal** sur fond sombre `#1a1612`
- **Bouton 🤲 Duas** flottant (6 duas essentielles)
- **Recherche globale** collapsible dans le header
- **Scroll-to-top** doré
- **Logo workshop-diy.org** animé (wink au clic)
- **Print styles**
- **Accessibilité** (focus-visible, reduced-motion, aria-labels)

### 📱 PWA — Application installable
- `manifest.json` : nom, thème, standalone
- Installable sur iOS / Android
- Fonctionne hors-ligne (fichiers locaux)

### 🔧 Fonctionnalités techniques
- **Sons** Web Audio API (clic, succès, erreur)
- **Toast notifications** avec spinner
- **Calendrier Hijri** (`Intl.DateTimeFormat` umalqura)
- **Effet typewriter** sur les duas (panel)
- **Shake to report** : DeviceMotionEvent → export JSON bug report
- **localStorage** : thème, langue, checklist, étapes complétées
- **Animations respiratoires** (deco-bands or/vert en haut/bas de page)

---

## 📁 Structure

```
hajj-guide/
├── index.html          # Shell HTML — 4 tabs, splash, bottom nav
├── style.css           # CSS variables, dark theme, RTL, animations
├── app.js              # Logique, rendus, i18n (T/D), PWA features
├── data.js             # Toutes les données FR + AR + EN (~3300 lignes)
├── manifest.json       # PWA manifest
├── package.json        # Dev dependencies (Playwright, serve)
├── playwright.config.js
└── tests/              # 125 tests Playwright E2E
    ├── accessibility.spec.js
    ├── calendar.spec.js
    ├── checklist.spec.js
    ├── companion.spec.js
    ├── dua-panel.spec.js
    ├── flashcards.spec.js
    ├── help-panel.spec.js
    ├── language.spec.js
    ├── plus-sections.spec.js
    ├── scroll.spec.js
    ├── search.spec.js
    ├── steps.spec.js
    ├── subtabs.spec.js
    ├── tabs.spec.js
    ├── theme.spec.js
    └── timeline.spec.js
```

---

## 🚀 Utilisation

```bash
git clone https://github.com/abourdim/hajj-guide.git
cd hajj-guide
open index.html
```

Aucune dépendance. Aucun build. Aucun framework.

---

## 🧪 Tests

```bash
npm install
npx playwright test
# 125 tests — accessibilité, tabs, checklist, calendar, search, language...
```

---

## 📊 Statistiques

| Fichier | Lignes |
|---------|--------|
| index.html | ~165 |
| style.css | ~390 |
| app.js | ~2280 |
| data.js | ~3340 |
| **Total** | **~6175** |

- 3 langues complètes (FR / AR / EN)
- 125 tests Playwright E2E
- 15 événements calendrier
- 32 flashcards
- 21 duas
- 10 rituels illustrés
- 0 dépendances runtime (sauf Google Fonts)

---

## 📚 Sources & Références

- [Ministère du Hajj et de l'Omra (KSA)](https://www.haj.gov.sa)
- [Islam Q&A — islamqa.info](https://islamqa.info)
- [Islamweb — islamweb.net](https://www.islamweb.net)
- [Nusuk — nusuk.sa](https://www.nusuk.sa)
- Wikipedia — Hajj

---

## 📱 Compatibilité

- Chrome, Firefox, Safari, Edge
- iOS Safari, Android Chrome
- Desktop, Tablet, Mobile
- Dark mode système
- Impression (print styles)
- Flags SVG inline (compatible Windows — pas d'emoji)

---

## 📬 Contact & Contribution

Pour signaler une erreur ou suggérer une amélioration :
**abdelhak.bourdim@gmail.com**

Ce projet est open source — contributions bienvenues :
[github.com/abourdim/hajj-guide](https://github.com/abourdim/hajj-guide)

---

## 📄 Licence

Ce guide est un outil éducatif. Le contenu religieux est basé sur les sources citées.
Consultez un savant pour les questions de fiqh spécifiques.

**Powered by [workshop-diy.org](https://workshop-diy.org)**

---

*حج مبرور وسعي مشكور وذنب مغفور* 🤲

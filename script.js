/**
 * ==========================================================================
 * ملف الجافاسكريبت الرئيسي (script.js)
 * مول الشناوي للأجهزة الكهربائية والمنزلية – فرع السنطة
 * ==========================================================================
 */

// ==========================================================================
// 1. بيانات النشاط الأساسية
// ==========================================================================
const STORE_INFO = {
  name: 'مول الشناوي للأجهزة الكهربائية والمنزلية – فرع السنطة',
  phone: '01012164433',
  whatsappNumber: '201012164433',
  address: 'مدينة السنطة، محافظة الغربية، الرمز البريدي 6652926',
  landmark: 'بجوار مسجد المنشاوي',
  plusCode: 'P4GC+W9 السنطة'
};

// ==========================================================================
// 2. مصفوفة بيانات المنتجات (يمكنك التعديل أو الإضافة هنا بكل سهولة)
// ملاحظة: روابط الصور أدناه هي صور بديلة تجريبية (Placeholders)،
// ويمكنك استبدالها بروابط صور منتجات المحل الحقيقية مباشرة.
// ==========================================================================
const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'ثلاجة نوفروست 16 قدم تبريد متعدد',
    category: 'refrigerators',
    categoryLabel: 'ثلاجات وديب فريزر',
    description: 'سعة تخزينية ممتازة، كفاءة عالية في استهلاك الطاقة، تبريد متساوي بدون تكوين ثلج إطلاقاً.',
    badge: 'الأكثر طلباً',
    features: ['تقنية النوفروست الكاملة', 'أرفف زجاجية مقواة ضد الكسر', 'ضمان معتمد 10 سنوات'],
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'غسالة فول أوتوماتيك 8 كجم سمارت إنفرتر',
    category: 'washers',
    categoryLabel: 'غسالات أوتوماتيك',
    description: 'موتور إنفرتر اقتصادي هادئ تماماً، برامج متعددة للأقمشة الحساسة والغسيل السريع بالبخار.',
    badge: 'توفير طاقة A+++',
    features: ['موتور دفع مباشر بدون اهتزاز', 'برنامج غسيل سريع 15 دقيقة', 'حلة عناية فائقة بالملابس'],
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'بوتاجاز 5 شعلة ستانلس ستيل أمان كامل',
    category: 'cookers',
    categoryLabel: 'بوتاجازات وأفران',
    description: 'سطح ستانلس سميك سهل التنظيف، حوامل زهر ثقيلة، شواية دوارة ومروحة توزيع حراري في الفرن.',
    badge: 'أمان كامل 100%',
    features: ['حوامل زهر فائقة المتانة', 'إشعال ذاتي للشعلات والفرن', 'مروحة توزيع حراري بالفرن'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'تكييف سبليت 1.5 حصان بارد/ساخن ديجيتال',
    category: 'ac',
    categoryLabel: 'تكييفات ومراوح',
    description: 'تبريد وتدفئة سريعة بكفاءة عالية، فلاتر كربونية لتنقية الهواء من الأتربة وشاشة LED رقمية.',
    badge: 'تبريد فائق سريع',
    features: ['تقنية البلازما لتنقية الجو', 'خاصية التشغيل الاقتصادي الليلي', 'ضمان معتمد 5 سنوات'],
    image: 'https://images.unsplash.com/photo-1614633833026-0720421298d0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'شاشة سمارت 50 بوصة 4K Ultra HD',
    category: 'tvs',
    categoryLabel: 'شاشات وتلفزيونات',
    description: 'ألوان زاهية وتباين سينمائي، نظام تشغيل ذكي يدعم التطبيقات مع ريموت تحكم صوتي وواي فاي.',
    badge: 'دقة 4K السينمائية',
    features: ['رسيفر داخلي فائق الوضوح', 'صوت محيطي نقي Dolby', 'مدخلات متعددة HDMI وUSB'],
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'محضر طعام ومفرمة متكاملة 1000 وات',
    category: 'small-appliances',
    categoryLabel: 'أجهزة صغيرة',
    description: 'خلاط وكبة ومفرمة وعصارة في جهاز واحد، شفرات حادة من الستانلس ستيل المقاوم للصدأ.',
    badge: 'متعدد الاستخدام',
    features: ['موتور نحاس قوي 1000 وات', 'وعاء خلط سعة 2 لتر غير قابل للكسر', 'سرعات متعددة مع نبض'],
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    name: 'طقم طهي جرانيت تركي صحي 10 قطع',
    category: 'housewares',
    categoryLabel: 'أدوات منزلية',
    description: 'طبقات طلاء غير لاصقة خالية من المواد الضارة، توزيع حراري متوازن، سهل التنظيف ومقابض عازلة.',
    badge: 'جرانيت صحي فاخر',
    features: ['خالٍ تماماً من PFOA', 'قاعدة سميكة متينة لا تلتصق', 'أغطية بيركس مقاومة للحرارة'],
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    name: 'ديب فريزر رأسي 6 درج ديجيتال نوفروست',
    category: 'refrigerators',
    categoryLabel: 'ثلاجات وديب فريزر',
    description: 'أدراج واسعة وقوية لسهولة حفظ وتنسيق الأطعمة، شاشة تحكم ديجيتال خارجية وخاصية التجميد السريع.',
    badge: 'تجميد فائق السرعة',
    features: ['شاشة تحكم إلكترونية خارجية', 'إضاءة داخلية ساطعة LED', 'أدراج شفافة قوية التحمل'],
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80'
  }
];

// ==========================================================================
// 2.2 مصفوفة صور معرض المحل والأجهزة (Image Gallery Data)
// يمكنك استبدال أو إضافة روابط صور المحل الحقيقية هنا
// ==========================================================================
const GALLERY_DATA = [
  {
    id: 1,
    title: 'صالة العرض والواجهة الرئيسية لمول الشناوي',
    category: 'showroom',
    categoryLabel: 'صالة العرض بالفرع',
    image: '/assets/aistudio/image_8c0d89f7.png',
    description: 'الواجهة الرسمية لمول الشناوي (وكيل ELARABY) في السنطة، أحدث التجهيزات والأجهزة المنزلية.'
  },
  {
    id: 2,
    title: 'جناح الثلاجات والديب فريزر النوفروست',
    category: 'cooling',
    categoryLabel: 'ثلاجات وديب فريزر',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80',
    description: 'تشكيلة متكاملة من ثلاجات وديب فريزر بأعلى مستويات كفاءة الطاقة وتبريد متوازن.'
  },
  {
    id: 3,
    title: 'قسم البوتاجازات والأفران وحوامل الزهر',
    category: 'cooking',
    categoryLabel: 'بوتاجازات وأفران',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=1200&q=80',
    description: 'أفضل موديلات البوتاجازات ستانلس ستيل مع أمان كامل 100% وشوايات ومراوح توزيع حراري.'
  },
  {
    id: 4,
    title: 'معرض الغسالات الأوتوماتيك والإنفرتر',
    category: 'washers',
    categoryLabel: 'غسالات وأجهزة تنظيف',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
    description: 'غسالات ملابس فوق أوتوماتيك وفول أوتوماتيك بموتور دفع مباشر صامت واقتصادي.'
  },
  {
    id: 5,
    title: 'جناح الشاشات الذكية بدقة 4K فائقة الوضوح',
    category: 'electronics',
    categoryLabel: 'شاشات وتكييفات',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80',
    description: 'شاشات عرض ذكية سمارت بأحجام مختلفة وصوت محيطي نقي وألوان سينمائية نابضة.'
  },
  {
    id: 6,
    title: 'أجهزة التكييفات ومراوح التهوية الصيفية',
    category: 'electronics',
    categoryLabel: 'شاشات وتكييفات',
    image: 'https://images.unsplash.com/photo-1614633833026-0720421298d0?auto=format&fit=crop&w=1200&q=80',
    description: 'تكييفات بارد/ساخن بلازما كلاستر لتنقية الهواء وتوفير استهلاك الكهرباء.'
  },
  {
    id: 7,
    title: 'أجهزة المطبخ الصغيرة ومحضرات الطعام',
    category: 'showroom',
    categoryLabel: 'صالة العرض بالفرع',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1200&q=80',
    description: 'خلاطات ومحضرات طعام ومكانس كهربائية وقلايات هوائية صحية للمنزل العصري.'
  },
  {
    id: 8,
    title: 'أطقم الحلل الجرانيت التركي ومستلزمات العروسة',
    category: 'showroom',
    categoryLabel: 'صالة العرض بالفرع',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1200&q=80',
    description: 'أفخم أطقم الحلل الصحية غير اللاصقة ومستلزمات جهاز العروسة المتكاملة.'
  }
];

// ==========================================================================
// 2.3 إدارة تخزين المنتجات محلياً (LocalStorage)
// ==========================================================================
const STORAGE_KEY = 'elshennawy_products_v2';

function loadStoredProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('تعذر قراءة المنتجات من الذاكرة المحلية، سيتم استخدام البيانات الافتراضية', err);
  }
  return [...PRODUCTS_DATA];
}

function saveStoredProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (err) {
    console.error('تعذر حفظ المنتجات في الذاكرة المحلية', err);
  }
}

// مصفوفة المنتجات الحية النشطة
let currentLiveProducts = loadStoredProducts();
let currentActiveCategory = 'all';

// مصفوفة عناصر معرض الصور
let currentGalleryItems = [...GALLERY_DATA];
let currentLightboxIndex = 0;

// خريطة أسماء الأقسام بالعربية
const CATEGORY_NAMES = {
  refrigerators: 'ثلاجات وديب فريزر',
  washers: 'غسالات أوتوماتيك',
  cookers: 'بوتاجازات وأفران',
  ac: 'تكييفات ومراوح',
  'small-appliances': 'أجهزة صغيرة',
  tvs: 'شاشات وتلفزيونات',
  housewares: 'أدوات منزلية'
};

// ==========================================================================
// 3. دالة تهيئة التطبيق الرئيسية
// ==========================================================================
function bootApp() {
  initProducts(currentLiveProducts);
  initCategoryFilters();
  initCategoryCardsNavigation();
  initGallery(currentGalleryItems);
  initGalleryFilters();
  initLightbox();
  initMobileNav();
  initPerformanceOptimizedScroll();
  initScrollAnimations();
  initQuickInquiryForm();
  initAdminSystem();
}

// ==========================================================================
// 4. عرض كروت المنتجات ديناميكياً مع تحسين الأداء
// ==========================================================================
function initProducts(products) {
  const container = document.getElementById('products-grid');
  if (!container) return;

  container.innerHTML = '';

  if (!products || products.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
        <p style="color: var(--text-muted); font-size: 1.1rem; font-weight: 700;">لا توجد منتجات متطابقة حالياً في هذا القسم.</p>
        <button onclick="filterProductsByCategory('all')" class="filter-btn active" style="margin-top: 1rem;">عرض كافة الأجهزة</button>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const message = `مرحباً مول الشناوي (فرع السنطة)، أود الاستفسار عن تفاصيل وسعر: ${product.name}`;
    const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

    const featuresHtml = (product.features || [])
      .map(
        (f) => `
        <li class="product-feature-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${f}</span>
        </li>
      `
      )
      .join('');

    const card = document.createElement('article');
    card.className = 'product-card reveal-item is-visible';
    card.setAttribute('data-category', product.category);

    card.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" decoding="async" />
        ${product.badge ? `<span class="product-tag">${product.badge}</span>` : ''}
        <span class="product-category-label">${product.categoryLabel || CATEGORY_NAMES[product.category] || 'أجهزة منزلية'}</span>
      </div>
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <ul class="product-features">
          ${featuresHtml}
        </ul>
        <div class="product-card-footer">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-ask-price" aria-label="اسأل عن سعر ${product.name} عبر واتساب">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.4.2-.7.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.2-.7.1-.2.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9c0 1.7 1.3 3.3 1.5 3.5.2.2 2.5 3.8 6 5.3 3.6 1.5 3.6 1 4.2 1 .6 0 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.7-.5zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.5.8 3.1 1.4 4.8 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
            </svg>
            <span>اسأل عن السعر</span>
          </a>
        </div>
      </div>
    `;

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

// ==========================================================================
// 5. فلترة المنتجات حسب القسم المختار
// ==========================================================================
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      filterProductsByCategory(category);
    });
  });
}

function filterProductsByCategory(category) {
  currentActiveCategory = category;

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach((b) => {
    if (b.getAttribute('data-category') === category) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  if (!category || category === 'all') {
    initProducts(currentLiveProducts);
  } else {
    const filtered = currentLiveProducts.filter((item) => item.category === category);
    initProducts(filtered);
  }
}

// ==========================================================================
// 6. ربط كروت الأقسام بالفلتر
// ==========================================================================
function initCategoryCardsNavigation() {
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const targetCategory = card.getAttribute('data-target-category');
      if (targetCategory) {
        filterProductsByCategory(targetCategory);
        const productsSection = document.getElementById('products');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ==========================================================================
// 7. القائمة الجانبية على الهواتف
// ==========================================================================
function initMobileNav() {
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    hamburger.classList.toggle('is-active');
    navLinks.classList.toggle('is-open');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('is-open')) {
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    }
  });
}

// ==========================================================================
// 8. تحسين أداء التمرير (ScrollSpy & Back to Top بدون أي تهنيج 60 FPS)
// ==========================================================================
function initPerformanceOptimizedScroll() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  let isScrollScheduled = false;

  const handleScrollUpdate = () => {
    const scrollPos = window.scrollY + 140;

    // تمييز الرابط النشط
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    // زر الصعود للأعلى
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    isScrollScheduled = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!isScrollScheduled) {
        window.requestAnimationFrame(handleScrollUpdate);
        isScrollScheduled = true;
      }
    },
    { passive: true }
  );

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 9. تأثيرات الظهور عند التمرير (IntersectionObserver مفرد ومُحسّن)
// ==========================================================================
let singleRevealObserver = null;

function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-item').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  if (!singleRevealObserver) {
    singleRevealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px'
      }
    );
  }

  document.querySelectorAll('.reveal-item:not(.is-visible)').forEach((el) => {
    singleRevealObserver.observe(el);
  });
}

// ==========================================================================
// 11. نموذج الاستفسار السريع المباشر لواتساب
// ==========================================================================
function initQuickInquiryForm() {
  const form = document.getElementById('quick-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('inquiry-name');
    const noteInput = document.getElementById('inquiry-message');

    const customerName = nameInput ? nameInput.value.trim() : '';
    const note = noteInput ? noteInput.value.trim() : '';

    if (!note) {
      alert('يرجى كتابة استفسارك أو الجهاز المطلوب');
      return;
    }

    let message = `مرحباً مول الشناوي فرع السنطة،`;
    if (customerName) {
      message += ` أنا: ${customerName}،`;
    }
    message += ` استفساري هو: ${note}`;

    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

// ==========================================================================
// 12. معرض الصور (Image Gallery) وعارض الصور المكبّر (LightBox Modal)
// ==========================================================================

/**
 * عرض كروت معرض الصور
 */
function initGallery(items) {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  container.innerHTML = '';
  currentGalleryItems = items;

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem;">
        <p style="color: var(--text-muted); font-size: 1.05rem;">لا توجد صور حالياً في هذا القسم.</p>
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card reveal-item';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `تكبير صورة: ${item.title}`);

    card.innerHTML = `
      <div class="gallery-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="gallery-card-img" loading="lazy" />
        <span class="gallery-overlay-badge">${item.categoryLabel}</span>
        <div class="gallery-overlay-zoom">
          <div class="gallery-overlay-zoom-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>
      </div>
      <div class="gallery-card-info">
        <h3 class="gallery-card-title">${item.title}</h3>
        <p class="gallery-card-desc">${item.description}</p>
        <span class="gallery-card-cta">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <span>اضغط للتكبير والمشاهدة</span>
        </span>
      </div>
    `;

    // عند النقر أو الضغط على مفتاح Enter/Space
    const triggerOpen = () => openLightbox(index);
    card.addEventListener('click', triggerOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerOpen();
      }
    });

    container.appendChild(card);
  });
}

/**
 * فلترة صور المعرض حسب القسم
 */
function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-gallery-cat');
      if (!cat || cat === 'all') {
        initGallery(GALLERY_DATA);
      } else {
        const filtered = GALLERY_DATA.filter((item) => item.category === cat);
        initGallery(filtered);
      }
      initScrollAnimations();
    });
  });
}

/**
 * تهيئة عارض الصور المكبّر (LightBox Modal)
 */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const overlay = document.getElementById('lightbox-overlay');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal) return;

  // إغلاق العارض
  const closeModal = () => {
    modal.classList.remove('is-active');
    setTimeout(() => {
      modal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }, 200);
  };

  if (overlay) overlay.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // التنقل للصورة السابقة والتالية
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  // دعم لوحة المفاتيح (Esc للإغلاق، والأسهم للتنقل)
  document.addEventListener('keydown', (e) => {
    if (modal.hasAttribute('hidden') || !modal.classList.contains('is-active')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      // في واجهة RTL: السهم الأيمن يرجع للصورة السابقة
      navigateLightbox(-1);
    } else if (e.key === 'ArrowLeft') {
      // السهم الأيسر يتقدم للصورة التالية
      navigateLightbox(1);
    }
  });
}

/**
 * فتح عارض الصور عند مؤشر محدد
 */
function openLightbox(index) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal || currentGalleryItems.length === 0) return;

  currentLightboxIndex = index;
  updateLightboxContent();

  modal.removeAttribute('hidden');
  // السماح للـ reflow ليعمل تأثير الـ fade-in
  requestAnimationFrame(() => {
    modal.classList.add('is-active');
  });
  document.body.style.overflow = 'hidden';
}

/**
 * التنقل بين الصور
 */
function navigateLightbox(step) {
  if (currentGalleryItems.length === 0) return;
  const total = currentGalleryItems.length;
  currentLightboxIndex = (currentLightboxIndex + step + total) % total;

  const imgEl = document.getElementById('lightbox-img');
  if (imgEl) {
    imgEl.classList.add('fade-transition');
    setTimeout(() => {
      updateLightboxContent();
      imgEl.classList.remove('fade-transition');
    }, 150);
  } else {
    updateLightboxContent();
  }
}

/**
 * تحديث محتوى العارض (الصورة، العداد، العنوان، ورابط الواتساب)
 */
function updateLightboxContent() {
  const item = currentGalleryItems[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById('lightbox-img');
  const counterEl = document.getElementById('lightbox-counter');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const whatsappLinkEl = document.getElementById('lightbox-whatsapp-link');

  if (imgEl) {
    imgEl.src = item.image;
    imgEl.alt = item.title;
  }

  if (counterEl) {
    counterEl.textContent = `${currentLightboxIndex + 1} / ${currentGalleryItems.length}`;
  }

  if (titleEl) {
    titleEl.textContent = item.title;
  }

  if (descEl) {
    descEl.textContent = item.description;
  }

  if (whatsappLinkEl) {
    const message = `مرحباً مول الشناوي فرع السنطة، أود الاستفسار عن المعروضات أو الجهاز الموضح في معرض الصور: "${item.title}"`;
    whatsappLinkEl.href = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}

// ==========================================================================
// 13. لوحة الإدارة السرية للتحكم بالمنتجات والصور (Hidden Admin System)
// ==========================================================================
const ATTACHED_STORE_IMAGE = '/assets/aistudio/image_8c0d89f7.png';
const DEFAULT_PIN = '0000';
const PIN_STORAGE_KEY = 'elshennawy_admin_pin';

function getAdminPin() {
  return localStorage.getItem(PIN_STORAGE_KEY) || DEFAULT_PIN;
}

function setAdminPin(pin) {
  localStorage.setItem(PIN_STORAGE_KEY, pin.trim());
}

function resetAdminPin() {
  localStorage.removeItem(PIN_STORAGE_KEY);
}

function initAdminSystem() {
  const secretTrigger = document.getElementById('secret-admin-trigger');
  const navAdminBtn = document.getElementById('nav-admin-btn');
  const mobileNavAdminBtn = document.getElementById('mobile-nav-admin-btn');

  const loginModal = document.getElementById('admin-login-modal');
  const loginCard = loginModal ? loginModal.querySelector('.admin-login-card') : null;
  const loginForm = document.getElementById('admin-login-form');
  const pinInput = document.getElementById('admin-pin-input');
  const loginError = document.getElementById('admin-login-error');
  const loginClose = document.getElementById('admin-login-close');
  const loginOverlay = document.getElementById('admin-login-overlay');
  const quickFillBtn = document.getElementById('btn-quick-fill-pin');
  const togglePinBtn = document.getElementById('btn-toggle-pin-visibility');

  const dashboardModal = document.getElementById('admin-dashboard-modal');
  const dashboardClose = document.getElementById('admin-dashboard-close');
  const dashboardOverlay = document.getElementById('admin-dashboard-overlay');
  const logoutBtn = document.getElementById('admin-logout-btn');

  // فتح نافذة كلمة المرور
  const openLoginModal = () => {
    if (!loginModal) return;
    if (loginError) loginError.hidden = true;
    if (pinInput) {
      pinInput.value = '';
      pinInput.type = 'password';
    }
    if (togglePinBtn) togglePinBtn.textContent = '👁️';
    loginModal.removeAttribute('hidden');
    requestAnimationFrame(() => loginModal.classList.add('is-active'));
    setTimeout(() => pinInput && pinInput.focus(), 150);
  };

  const closeLoginModal = () => {
    if (!loginModal) return;
    loginModal.classList.remove('is-active');
    setTimeout(() => loginModal.setAttribute('hidden', ''), 200);
  };

  const openDashboard = () => {
    closeLoginModal();
    if (!dashboardModal) return;
    dashboardModal.removeAttribute('hidden');
    requestAnimationFrame(() => dashboardModal.classList.add('is-active'));
    updateAdminStats();
    renderAdminProductsTable();
  };

  const closeDashboard = () => {
    if (!dashboardModal) return;
    dashboardModal.classList.remove('is-active');
    setTimeout(() => dashboardModal.setAttribute('hidden', ''), 200);
  };

  // أزرار فتح شاشة تسجيل الدخول
  if (secretTrigger) secretTrigger.addEventListener('click', openLoginModal);
  if (navAdminBtn) navAdminBtn.addEventListener('click', openLoginModal);
  if (mobileNavAdminBtn) {
    mobileNavAdminBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const navLinks = document.getElementById('nav-links');
      if (navLinks) navLinks.classList.remove('is-open');
      openLoginModal();
    });
  }

  // اختصار لوحة المفاتيح للدخول السري (Ctrl + Shift + A أو Alt + A)
  document.addEventListener('keydown', (e) => {
    if (
      (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a' || e.key === 'ش')) ||
      (e.altKey && (e.key === 'A' || e.key === 'a' || e.key === 'ش'))
    ) {
      e.preventDefault();
      openLoginModal();
    }
  });

  // إظهار وإخفاء رمز الـ PIN
  if (togglePinBtn && pinInput) {
    togglePinBtn.addEventListener('click', () => {
      const isPassword = pinInput.type === 'password';
      pinInput.type = isPassword ? 'text' : 'password';
      togglePinBtn.textContent = isPassword ? '🙈' : '👁️';
    });
  }

  // لوحة أرقام اللمس الافتراضية
  const keypad = document.getElementById('admin-virtual-keypad');
  if (keypad && pinInput) {
    keypad.addEventListener('click', (e) => {
      const btn = e.target.closest('.keypad-btn');
      if (!btn) return;
      const key = btn.getAttribute('data-key');
      if (key === 'clear') {
        pinInput.value = '';
      } else if (key === 'backspace') {
        pinInput.value = pinInput.value.slice(0, -1);
      } else if (key && pinInput.value.length < 8) {
        pinInput.value += key;
      }
      pinInput.focus();
    });
  }

  // دالة التحقق من الـ PIN ودخول لوحة التحكم
  const performLogin = () => {
    const enteredPin = pinInput ? pinInput.value.trim() : '';
    const currentValidPin = getAdminPin();
    if (enteredPin === currentValidPin) {
      if (loginError) loginError.hidden = true;
      openDashboard();
      showAdminToast('تم تسجيل الدخول بنجاح! مرحباً بك في لوحة إدارة مول الشناوي.', 'success');
    } else {
      if (loginError) loginError.hidden = false;
      if (loginCard) {
        loginCard.classList.remove('shake-anim');
        void loginCard.offsetWidth; // Force reflow
        loginCard.classList.add('shake-anim');
      }
      if (pinInput) pinInput.select();
    }
  };

  // زر التعبئة السريعة بـ 0000
  if (quickFillBtn && pinInput) {
    quickFillBtn.addEventListener('click', () => {
      pinInput.value = getAdminPin();
      performLogin();
    });
  }

  // إغلاق المودال
  if (loginClose) loginClose.addEventListener('click', closeLoginModal);
  if (loginOverlay) loginOverlay.addEventListener('click', closeLoginModal);
  if (dashboardClose) dashboardClose.addEventListener('click', closeDashboard);
  if (dashboardOverlay) dashboardOverlay.addEventListener('click', closeDashboard);
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      closeDashboard();
      showAdminToast('تم تسجيل الخروج من لوحة الإدارة', 'info');
    });
  }

  // إرسال نموذج التحقق من الـ PIN
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      performLogin();
    });
  }

  // التبديل بين تبويبات لوحة الإدارة
  const tabButtons = document.querySelectorAll('.admin-tab-btn');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.admin-tab-pane').forEach((pane) => pane.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const targetId = btn.getAttribute('data-target');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');

      if (targetId === 'tab-products') {
        renderAdminProductsTable();
      }
      updateAdminStats();
    });
  });

  const btnSwitchToAdd = document.getElementById('btn-switch-to-add');
  if (btnSwitchToAdd) {
    btnSwitchToAdd.addEventListener('click', () => {
      const tabAddBtn = document.getElementById('tab-btn-add');
      if (tabAddBtn) tabAddBtn.click();
    });
  }

  // البحث والفلترة حسب القسم في لوحة الإدارة
  const searchInput = document.getElementById('admin-search-input');
  const categoryFilter = document.getElementById('admin-category-filter');

  const handleTableFilter = () => {
    const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const cat = categoryFilter ? categoryFilter.value : 'all';
    renderAdminProductsTable(q, cat);
  };

  if (searchInput) searchInput.addEventListener('input', handleTableFilter);
  if (categoryFilter) categoryFilter.addEventListener('change', handleTableFilter);

  // مكتبة الصور السريعة في نموذج الإضافة
  const addImgUrlInput = document.getElementById('add-product-img-url');
  const addImgPreview = document.getElementById('add-img-preview');
  const addFileInput = document.getElementById('add-product-file');

  const presetImagesContainerAdd = document.getElementById('admin-preset-images-add');
  if (presetImagesContainerAdd && addImgUrlInput && addImgPreview) {
    presetImagesContainerAdd.addEventListener('click', (e) => {
      const btn = e.target.closest('.admin-preset-btn');
      if (btn) {
        const imgUrl = btn.getAttribute('data-img');
        if (imgUrl) {
          addImgUrlInput.value = imgUrl;
          addImgPreview.src = imgUrl;
          showAdminToast(`تم اختيار صورة: ${btn.textContent.trim()}`, 'info');
        }
      }
    });
  }

  // وسوم الشارات السريعة (Add Form)
  const addBadgeInput = document.getElementById('add-product-badge');
  document.querySelectorAll('.btn-badge-tag').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag');
      if (tag && addBadgeInput) {
        addBadgeInput.value = tag;
      }
    });
  });

  // وسوم الشارات السريعة (Edit Form)
  const editBadgeInput = document.getElementById('edit-product-badge');
  document.querySelectorAll('.btn-badge-tag-edit').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag');
      if (tag && editBadgeInput) {
        editBadgeInput.value = tag;
      }
    });
  });

  if (addImgUrlInput && addImgPreview) {
    addImgUrlInput.addEventListener('input', () => {
      addImgPreview.src = addImgUrlInput.value.trim() || ATTACHED_STORE_IMAGE;
    });
  }

  // رفع صورة محلياً وتحويلها إلى Base64 DataURL
  if (addFileInput && addImgUrlInput && addImgPreview) {
    addFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target.result;
          addImgUrlInput.value = result;
          addImgPreview.src = result;
          showAdminToast(`تم رفع وتجهيز الصورة بنجاح: ${file.name}`, 'success');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // إرسال نموذج إضافة منتج جديد
  const addProductForm = document.getElementById('admin-add-product-form');
  if (addProductForm) {
    addProductForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('add-product-name').value.trim();
      const category = document.getElementById('add-product-category').value;
      const badge = addBadgeInput ? addBadgeInput.value.trim() : '';
      const description = document.getElementById('add-product-desc').value.trim();
      const featuresRaw = document.getElementById('add-product-features').value;
      const image = addImgUrlInput && addImgUrlInput.value.trim() ? addImgUrlInput.value.trim() : ATTACHED_STORE_IMAGE;

      if (!name || !description || !image) {
        showAdminToast('يرجى ملء جميع الحقول المطلوبة (الاسم، الوصف، والصورة)', 'danger');
        return;
      }

      const features = featuresRaw
        .split('\n')
        .map((f) => f.trim())
        .filter((f) => f.length > 0);

      const nextId = currentLiveProducts.length > 0 ? Math.max(...currentLiveProducts.map((p) => p.id)) + 1 : 1;

      const newProduct = {
        id: nextId,
        name,
        category,
        categoryLabel: CATEGORY_NAMES[category] || 'أجهزة منزلية',
        description,
        badge: badge || 'جديد بالفرع',
        features: features.length > 0 ? features : ['ضمان معتمد', 'أصلي 100%'],
        image: image || ATTACHED_STORE_IMAGE
      };

      currentLiveProducts = [newProduct, ...currentLiveProducts];
      saveStoredProducts(currentLiveProducts);

      // إعادة عرض المنتجات على الموقع وفي لوحة الإدارة
      filterProductsByCategory(currentActiveCategory);
      renderAdminProductsTable();
      updateAdminStats();

      showAdminToast(`تمت إضافة الجهاز: "${name}" بنجاح!`, 'success');
      addProductForm.reset();
      if (addImgPreview) addImgPreview.src = ATTACHED_STORE_IMAGE;

      // العودة لتبويب القائمة
      const tabProductsBtn = document.getElementById('tab-btn-products');
      if (tabProductsBtn) tabProductsBtn.click();
    });
  }

  const btnResetAdd = document.getElementById('btn-reset-add-form');
  if (btnResetAdd && addProductForm) {
    btnResetAdd.addEventListener('click', () => {
      addProductForm.reset();
      if (addImgPreview) addImgPreview.src = ATTACHED_STORE_IMAGE;
      showAdminToast('تم تفريغ حقول الإضافة', 'info');
    });
  }

  // إعدادات تعديل منتج قائم (Edit Modal)
  initEditProductModal();

  // إعدادات النسخ الاحتياطي واستعادة البيانات
  const btnResetDefaults = document.getElementById('btn-reset-to-default-products');
  if (btnResetDefaults) {
    btnResetDefaults.addEventListener('click', () => {
      if (confirm('هل أنت متأكد من رغبتك في استعادة قائمة المنتجات الافتراضية الأصلية لمول الشناوي؟')) {
        localStorage.removeItem(STORAGE_KEY);
        currentLiveProducts = [...PRODUCTS_DATA];
        filterProductsByCategory(currentActiveCategory);
        renderAdminProductsTable();
        updateAdminStats();
        showAdminToast('تم استعادة المنتجات الافتراضية بنجاح!', 'success');
      }
    });
  }

  // تنزيل ملف نسخة احتياطية بصيغة JSON
  const btnDownloadBackup = document.getElementById('btn-download-backup-json');
  if (btnDownloadBackup) {
    btnDownloadBackup.addEventListener('click', () => {
      const jsonStr = JSON.stringify(currentLiveProducts, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `مول_الشناوي_نسخة_احتياطية_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showAdminToast('تم تحميل ملف النسخة الاحتياطية بنجاح!', 'success');
    });
  }

  // استيراد واستعادة من ملف JSON
  const importFileInput = document.getElementById('admin-import-json-file');
  if (importFileInput) {
    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (!Array.isArray(parsed) || parsed.length === 0) {
            throw new Error('الملف لا يحتوي على مصفوفة منتجات صالحة');
          }
          currentLiveProducts = parsed;
          saveStoredProducts(currentLiveProducts);
          filterProductsByCategory(currentActiveCategory);
          renderAdminProductsTable();
          updateAdminStats();
          showAdminToast(`تم استيراد ${parsed.length} منتج بنجاح من الملف!`, 'success');
        } catch (err) {
          showAdminToast('خطأ: تعذر قراءة الملف، تأكد من أنه ملف JSON صالح.', 'danger');
        }
      };
      reader.readAsText(file);
      importFileInput.value = '';
    });
  }

  // نسخ كود JSON للحافظة
  const btnExportJson = document.getElementById('btn-export-products-json');
  if (btnExportJson) {
    btnExportJson.addEventListener('click', () => {
      const jsonStr = JSON.stringify(currentLiveProducts, null, 2);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(jsonStr).then(() => {
          showAdminToast('تم نسخ كود المنتجات (JSON) إلى الحافظة بنجاح!', 'success');
        });
      } else {
        showAdminToast('تم تجهيز البيانات', 'info');
      }
    });
  }

  // إدارة تغيير واستعادة رمز الـ PIN في الإعدادات
  const changePinForm = document.getElementById('admin-change-pin-form');
  const newPinInput = document.getElementById('new-pin-input');
  const btnResetPinDefault = document.getElementById('btn-reset-pin-default');
  const toggleNewPinBtn = document.getElementById('btn-toggle-new-pin-visibility');

  if (toggleNewPinBtn && newPinInput) {
    toggleNewPinBtn.addEventListener('click', () => {
      const isPassword = newPinInput.type === 'password';
      newPinInput.type = isPassword ? 'text' : 'password';
      toggleNewPinBtn.textContent = isPassword ? '🙈' : '👁️';
    });
  }

  if (changePinForm && newPinInput) {
    changePinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = newPinInput.value.trim();
      if (val.length < 4) {
        showAdminToast('يجب أن يكون الرمز السري 4 أرقام أو حروف على الأقل', 'danger');
        return;
      }
      setAdminPin(val);
      newPinInput.value = '';
      showAdminToast(`تم تغيير رمز المرور السري بنجاح إلى: ${val}`, 'success');
    });
  }

  if (btnResetPinDefault) {
    btnResetPinDefault.addEventListener('click', () => {
      resetAdminPin();
      if (newPinInput) newPinInput.value = '';
      showAdminToast('تم استعادة رمز المرور السري الافتراضي (0000)', 'success');
    });
  }
}

/**
 * تحديث بطاقات إحصائيات لوحة الإدارة (KPIs)
 */
function updateAdminStats() {
  const totalEl = document.getElementById('stat-total-products');
  const catsEl = document.getElementById('stat-active-categories');
  const featEl = document.getElementById('stat-featured-products');

  if (totalEl) totalEl.textContent = currentLiveProducts.length;
  if (catsEl) {
    const cats = new Set(currentLiveProducts.map((p) => p.category));
    catsEl.textContent = cats.size;
  }
  if (featEl) {
    const feat = currentLiveProducts.filter((p) => Boolean(p.badge && p.badge.trim().length > 0));
    featEl.textContent = feat.length;
  }
}

/**
 * عرض جدول المنتجات في لوحة الإدارة
 */
function renderAdminProductsTable(query = '', category = 'all') {
  const tbody = document.getElementById('admin-products-tbody');
  const countBadge = document.getElementById('admin-products-count');
  const filterCountBadge = document.getElementById('admin-filter-count-badge');
  if (!tbody) return;

  tbody.innerHTML = '';
  if (countBadge) countBadge.textContent = currentLiveProducts.length;

  let filtered = currentLiveProducts;

  if (category && category !== 'all') {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        (p.categoryLabel && p.categoryLabel.toLowerCase().includes(query)) ||
        (CATEGORY_NAMES[p.category] && CATEGORY_NAMES[p.category].toLowerCase().includes(query)) ||
        (p.badge && p.badge.toLowerCase().includes(query)) ||
        p.description.toLowerCase().includes(query)
    );
  }

  if (filterCountBadge) {
    filterCountBadge.textContent = `عرض ${filtered.length} من أصل ${currentLiveProducts.length} جهاز`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2.5rem 1rem; color: #94a3b8;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <p style="font-weight: 700; color: #e2e8f0; margin-bottom: 0.25rem;">لا توجد أجهزة متطابقة مع البحث الحالي.</p>
          <span style="font-size: 0.8rem; color: #94a3b8;">جرب تغيير كلمة البحث أو اختيار قسم مختلف.</span>
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach((product) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <img src="${product.image}" alt="${product.name}" class="admin-table-thumb" onerror="this.src='/assets/aistudio/image_8c0d89f7.png'" />
      </td>
      <td style="font-weight: 700; color: #ffffff; max-width: 240px;">
        <span style="display: block; line-height: 1.4;">${product.name}</span>
        <span style="font-size: 0.72rem; color: #94a3b8; font-weight: normal;">ID: #${product.id}</span>
      </td>
      <td>
        <span style="font-size: 0.78rem; background: rgba(37, 99, 235, 0.25); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.4); padding: 0.2rem 0.55rem; border-radius: 4px; font-weight: 600;">
          ${product.categoryLabel || CATEGORY_NAMES[product.category] || product.category}
        </span>
      </td>
      <td>
        ${
          product.badge
            ? `<span style="color: #fbbf24; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); padding: 0.2rem 0.5rem; border-radius: 9999px; font-weight: 700; font-size: 0.76rem;">${product.badge}</span>`
            : '<span style="color: #64748b; font-size: 0.75rem;">بدون شارة</span>'
        }
      </td>
      <td style="font-size: 0.78rem; color: #cbd5e1; max-width: 200px;">
        ${(product.features || []).slice(0, 2).join(' • ') || 'ضمان معتمد'}
      </td>
      <td style="white-space: nowrap;">
        <button class="admin-btn-preview" data-id="${product.id}" title="معاينة هذا المنتج في الموقع">👁️ عرض</button>
        <button class="admin-btn-edit" data-id="${product.id}" title="تعديل تفاصيل هذا المنتج">✏️ تعديل</button>
        <button class="admin-btn-delete" data-id="${product.id}" title="حذف هذا المنتج">🗑️ حذف</button>
      </td>
    `;

    // زر المعاينة في الموقع
    const previewBtn = tr.querySelector('.admin-btn-preview');
    if (previewBtn) {
      previewBtn.addEventListener('click', () => {
        const dashboardModal = document.getElementById('admin-dashboard-modal');
        if (dashboardModal) {
          dashboardModal.classList.remove('is-active');
          setTimeout(() => dashboardModal.setAttribute('hidden', ''), 200);
        }
        filterProductsByCategory(product.category);
        const productsSection = document.getElementById('products');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
        showAdminToast(`تم الانتقال لمعاينة: "${product.name}"`, 'info');
      });
    }

    // زر التعديل
    const editBtn = tr.querySelector('.admin-btn-edit');
    if (editBtn) {
      editBtn.addEventListener('click', () => openEditProductModal(product.id));
    }

    // زر الحذف
    const deleteBtn = tr.querySelector('.admin-btn-delete');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => handleDeleteProduct(product.id, product.name));
    }

    tbody.appendChild(tr);
  });
}

/**
 * نافذة تعديل بيانات المنتج
 */
function initEditProductModal() {
  const modal = document.getElementById('admin-edit-modal');
  const overlay = document.getElementById('admin-edit-overlay');
  const closeBtn = document.getElementById('admin-edit-close');
  const cancelBtn = document.getElementById('btn-cancel-edit');
  const form = document.getElementById('admin-edit-product-form');

  const editImgInput = document.getElementById('edit-product-img-url');
  const editImgPreview = document.getElementById('edit-img-preview');
  const editFileInput = document.getElementById('edit-product-file');

  const presetImagesContainerEdit = document.getElementById('admin-preset-images-edit');
  if (presetImagesContainerEdit && editImgInput && editImgPreview) {
    presetImagesContainerEdit.addEventListener('click', (e) => {
      const btn = e.target.closest('.admin-preset-btn');
      if (btn) {
        const imgUrl = btn.getAttribute('data-img');
        if (imgUrl) {
          editImgInput.value = imgUrl;
          editImgPreview.src = imgUrl;
          showAdminToast(`تم اختيار صورة: ${btn.textContent.trim()}`, 'info');
        }
      }
    });
  }

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-active');
    setTimeout(() => modal.setAttribute('hidden', ''), 200);
  };

  if (overlay) overlay.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (editImgInput && editImgPreview) {
    editImgInput.addEventListener('input', () => {
      editImgPreview.src = editImgInput.value.trim() || ATTACHED_STORE_IMAGE;
    });
  }

  if (editFileInput && editImgInput && editImgPreview) {
    editFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target.result;
          editImgInput.value = result;
          editImgPreview.src = result;
          showAdminToast(`تم رفع الصورة: ${file.name}`, 'success');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = parseInt(document.getElementById('edit-product-id').value, 10);
      const name = document.getElementById('edit-product-name').value.trim();
      const category = document.getElementById('edit-product-category').value;
      const badge = document.getElementById('edit-product-badge').value.trim();
      const description = document.getElementById('edit-product-desc').value.trim();
      const featuresRaw = document.getElementById('edit-product-features').value;
      const image = editImgInput && editImgInput.value.trim() ? editImgInput.value.trim() : ATTACHED_STORE_IMAGE;

      const features = featuresRaw
        .split('\n')
        .map((f) => f.trim())
        .filter((f) => f.length > 0);

      currentLiveProducts = currentLiveProducts.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            name,
            category,
            categoryLabel: CATEGORY_NAMES[category] || p.categoryLabel,
            badge,
            description,
            features: features.length > 0 ? features : p.features,
            image
          };
        }
        return p;
      });

      saveStoredProducts(currentLiveProducts);
      filterProductsByCategory(currentActiveCategory);
      renderAdminProductsTable();
      updateAdminStats();
      closeModal();
      showAdminToast(`تم تعديل بيانات "${name}" بنجاح!`, 'success');
    });
  }
}

function openEditProductModal(productId) {
  const modal = document.getElementById('admin-edit-modal');
  const product = currentLiveProducts.find((p) => p.id === productId);
  if (!modal || !product) return;

  document.getElementById('edit-product-id').value = product.id;
  document.getElementById('edit-product-name').value = product.name;
  document.getElementById('edit-product-category').value = product.category;
  document.getElementById('edit-product-badge').value = product.badge || '';
  document.getElementById('edit-product-desc').value = product.description;
  document.getElementById('edit-product-features').value = (product.features || []).join('\n');

  const editImgInput = document.getElementById('edit-product-img-url');
  const editImgPreview = document.getElementById('edit-img-preview');
  if (editImgInput) editImgInput.value = product.image;
  if (editImgPreview) editImgPreview.src = product.image;

  modal.removeAttribute('hidden');
  requestAnimationFrame(() => modal.classList.add('is-active'));
}

/**
 * حذف منتج
 */
function handleDeleteProduct(productId, productName) {
  if (confirm(`هل أنت متأكد من رغبتك في حذف المنتج: "${productName}"؟`)) {
    currentLiveProducts = currentLiveProducts.filter((p) => p.id !== productId);
    saveStoredProducts(currentLiveProducts);
    filterProductsByCategory(currentActiveCategory);
    renderAdminProductsTable();
    updateAdminStats();
    showAdminToast(`تم حذف المنتج: "${productName}" بنجاح`, 'info');
  }
}

/**
 * إشعار توست المنبثق السريع مع دعم أنواع الحالات
 */
let toastTimer = null;
function showAdminToast(message, type = 'success') {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;

  clearTimeout(toastTimer);

  let iconSvg = '';
  let borderColor = 'var(--accent)';

  if (type === 'success') {
    borderColor = '#22c55e';
    iconSvg = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;
  } else if (type === 'danger') {
    borderColor = '#ef4444';
    iconSvg = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    `;
  } else {
    borderColor = '#3b82f6';
    iconSvg = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;
  }

  toast.style.borderRightColor = borderColor;
  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  toast.removeAttribute('hidden');
  requestAnimationFrame(() => toast.classList.add('show'));

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.setAttribute('hidden', ''), 300);
  }, 3400);
}

// ==========================================================================
// بدء وتشغيل التطبيق بعد تعريف كافة الدوال والمصفوفات
// ==========================================================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}




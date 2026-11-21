(function () {
  "use strict";

  const RU_CIS_TIMEZONES = new Set([
    "Europe/Moscow",
    "Europe/Kaliningrad",
    "Europe/Samara",
    "Europe/Volgograd",
    "Europe/Saratov",
    "Europe/Ulyanovsk",
    "Europe/Kirov",
    "Europe/Astrakhan",
    "Europe/Minsk",
    "Europe/Simferopol",
    "Asia/Yekaterinburg",
    "Asia/Omsk",
    "Asia/Novosibirsk",
    "Asia/Barnaul",
    "Asia/Tomsk",
    "Asia/Novokuznetsk",
    "Asia/Krasnoyarsk",
    "Asia/Irkutsk",
    "Asia/Chita",
    "Asia/Yakutsk",
    "Asia/Khandyga",
    "Asia/Vladivostok",
    "Asia/Ust-Nera",
    "Asia/Magadan",
    "Asia/Sakhalin",
    "Asia/Srednekolymsk",
    "Asia/Kamchatka",
    "Asia/Anadyr",
    "Asia/Almaty",
    "Asia/Qyzylorda",
    "Asia/Qostanay",
    "Asia/Aqtobe",
    "Asia/Aqtau",
    "Asia/Atyrau",
    "Asia/Oral",
    "Asia/Bishkek",
    "Asia/Tashkent",
    "Asia/Dushanbe"
  ]);

  function detectVisitorLanguage() {
    try {
      localStorage.removeItem("sc_lang");
      const manual = localStorage.getItem("sc_lang_manual");
      if (manual === "ru" || manual === "en") {
        return manual;
      }
    } catch (_) {
      // Ignore storage restrictions
    }

    try {
      const langs = Array.isArray(navigator.languages) && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language || ""];

      for (const raw of langs) {
        const tag = String(raw || "").trim().toLowerCase();
        if (!tag) continue;
        if (
          tag === "ru" || tag.startsWith("ru-") ||
          tag === "be" || tag.startsWith("be-") ||
          tag === "kk" || tag.startsWith("kk-") ||
          tag === "ky" || tag.startsWith("ky-") ||
          tag.endsWith("-ru") || tag.endsWith("-by") ||
          tag.endsWith("-kz") || tag.endsWith("-kg")
        ) {
          return "ru";
        }
      }
    } catch (_) {
      // Ignore navigator errors
    }

    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && RU_CIS_TIMEZONES.has(tz)) {
        return "ru";
      }
    } catch (_) {
      // Ignore Intl errors
    }

    return "en";
  }

  const state = {
    lang: detectVisitorLanguage(),
    heroShotId: "fireplace",
    mediaMode: "screenshots",
    activeMediaIndex: 0,
    lightboxOpen: false,
    lightboxListType: "screenshots",
    lightboxIndex: 0,
    legalModalOpen: false,
    selectedOrderOptions: new Set(["duo-turnkey"])
  };

  const prefetchedUrls = new Set();

  function getDict() {
    return window.I18N[state.lang] || window.I18N.ru;
  }

  function getByPath(obj, path) {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
  }

  function getMediaList(type) {
    return type === "gifs" ? window.LIGHTGIVER_GIFS : window.LIGHTGIVER_SCREENSHOTS;
  }

  function findScreenshotById(id) {
    return window.LIGHTGIVER_SCREENSHOTS.find((item) => item.id === id) || window.LIGHTGIVER_SCREENSHOTS[0];
  }

  function prefetchImage(url) {
    if (!url || prefetchedUrls.has(url)) return;
    prefetchedUrls.add(url);
    const img = new Image();
    img.src = url;
  }

  /* ================= 1. LANGUAGE & STATIC TEXTS ================= */
  function applyTranslations() {
    const dict = getDict();
    document.documentElement.lang = state.lang;
    document.title = dict.metaTitle;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getByPath(dict, key);
      if (typeof val === "string") {
        el.textContent = val;
      }
    });

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === state.lang);
    });

    const statusTextEl = document.getElementById("work-status-text");
    if (statusTextEl) {
      statusTextEl.textContent = window.SITE_CONFIG.availableForWork ? dict.nav.statusOpen : dict.nav.statusBusy;
    }

    const msgInput = document.getElementById("order-message-input");
    if (msgInput) msgInput.placeholder = dict.order.messagePlaceholder;

    const tgLink = document.getElementById("direct-tg-link");
    const tgVal = document.getElementById("direct-tg-val");
    if (tgLink && tgVal) {
      tgLink.href = window.SITE_CONFIG.contacts.telegramUrl;
      tgVal.textContent = window.SITE_CONFIG.contacts.telegramHandle;
    }

    const emailLink = document.getElementById("direct-email-link");
    const emailVal = document.getElementById("direct-email-val");
    if (emailLink && emailVal) {
      emailLink.href = "mailto:" + window.SITE_CONFIG.contacts.email;
      emailVal.textContent = window.SITE_CONFIG.contacts.email;
    }

    renderHeroFacts();
    renderHeroMonitor();
    renderTeamCards();
    renderSteamBox();
    renderMediaShowcase();
    renderOrderOptions();
    updateBriefPreview();

    if (state.lightboxOpen) {
      renderLightboxContent();
    }
    if (state.legalModalOpen) {
      renderLegalModal();
    }
  }

  /* ================= 2. HERO FACTS & MONITOR ================= */
  function renderHeroFacts() {
    const dict = getDict();
    const container = document.getElementById("hero-facts-grid");
    if (!container) return;

    container.innerHTML = dict.hero.quickFacts
      .map(
        (fact) => `
        <div class="fact-box">
          <span class="fact-label">${fact.label}</span>
          <span class="fact-value">${fact.value}</span>
        </div>
      `
      )
      .join("");
  }

  function renderHeroMonitor() {
    const shot = findScreenshotById(state.heroShotId);
    const imgEl = document.getElementById("hero-preview-img");
    if (imgEl && shot) {
      if (imgEl.dataset.currentSrc !== shot.src) {
        imgEl.dataset.currentSrc = shot.src;
        imgEl.src = shot.src;
      }
      imgEl.alt = shot.title[state.lang];
    }
    document.querySelectorAll("[data-hero-shot]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-hero-shot") === state.heroShotId);
    });
  }

  /* ================= 3. TEAM & SERVICES CARDS ================= */
  function renderTeamCards() {
    const dict = getDict();
    const container = document.getElementById("team-cards-container");
    if (!container) return;

    container.innerHTML = dict.team.members
      .map((member) => {
        const tagsHtml = member.tags.map((t) => `<span class="dev-tag">${t}</span>`).join("");
        const servicesHtml = member.services.map((s) => `<li>${s}</li>`).join("");

        return `
          <article class="dev-card ${member.accent}">
            <div>
              <div class="dev-header">
                <div class="dev-avatar-wrap">
                  <img src="${member.avatar}" alt="${member.name} (${member.nick})" class="dev-avatar" />
                </div>
                <div class="dev-identity">
                  <div class="dev-name-row">
                    <h3 class="dev-name">${member.name}</h3>
                    <span class="dev-nick">@${member.nick}</span>
                  </div>
                  <p class="dev-role">${member.role}</p>
                </div>
              </div>

              <blockquote class="dev-quote-plaque">${member.quote}</blockquote>

              <div class="dev-tags">${tagsHtml}</div>

              <h4 class="dev-services-title">${member.servicesTitle}</h4>
              <ul class="dev-services-list">${servicesHtml}</ul>
            </div>

            <div class="dev-action-footer">
              <button type="button" class="dev-select-btn" data-select-member="${member.id}">
                ${dict.team.orderFromBtn} (${member.nick})
              </button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  /* ================= 4. LIGHTGIVER PREVIEW (MERGED) ================= */
  function renderSteamBox() {
    const dict = getDict();
    const container = document.getElementById("steam-cta-container");
    if (!container) return;

    const steamUrl = (window.SITE_CONFIG.links && window.SITE_CONFIG.links.steamUrl) || "";
    if (steamUrl.trim().length > 0) {
      container.innerHTML = `
        <a href="${steamUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sonar btn-lg">
          <span class="sonar-dot"></span>
          <span>${dict.game.steamWishlist}</span>
          <span>↗</span>
        </a>
      `;
    } else {
      container.innerHTML = `
        <div class="steam-soon-badge">
          <span class="sonar-dot"></span>
          <span>${dict.game.steamSoon}</span>
        </div>
      `;
    }
  }

  function renderMediaShowcase() {
    const list = getMediaList(state.mediaMode);
    if (state.activeMediaIndex >= list.length || state.activeMediaIndex < 0) {
      state.activeMediaIndex = 0;
    }

    document.querySelectorAll("[data-media-mode]").forEach((btn) => {
      const isMatch = btn.getAttribute("data-media-mode") === state.mediaMode;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-selected", isMatch ? "true" : "false");
    });

    const activeItem = list[state.activeMediaIndex];
    const mainImg = document.getElementById("stage-main-img");
    const mainVideo = document.getElementById("stage-main-video");
    const loader = document.getElementById("stage-loader");
    const captionEl = document.getElementById("stage-caption");
    const counterEl = document.getElementById("stage-counter");

    if (activeItem) {
      if (activeItem.isVideo && mainVideo) {
        if (mainImg) {
          mainImg.hidden = true;
          mainImg.removeAttribute("src");
          delete mainImg.dataset.currentSrc;
        }
        mainVideo.hidden = false;
        mainVideo.poster = activeItem.thumb || "";
        if (mainVideo.dataset.currentSrc !== activeItem.src) {
          if (loader) loader.hidden = false;
          mainVideo.dataset.currentSrc = activeItem.src;
          mainVideo.src = activeItem.src;
          mainVideo.load();
        } else if (loader && mainVideo.readyState >= 2) {
          loader.hidden = true;
        }
        const playPromise = mainVideo.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } else if (mainImg) {
        if (mainVideo) {
          mainVideo.pause();
          mainVideo.hidden = true;
          mainVideo.removeAttribute("src");
          delete mainVideo.dataset.currentSrc;
          mainVideo.load();
        }
        mainImg.hidden = false;
        mainImg.alt = activeItem.title[state.lang];
        if (mainImg.dataset.currentSrc !== activeItem.src) {
          if (loader) loader.hidden = false;
          mainImg.dataset.currentSrc = activeItem.src;
          mainImg.src = activeItem.src;
          if (mainImg.complete && loader) {
            loader.hidden = true;
          }
        } else if (loader && mainImg.complete) {
          loader.hidden = true;
        }

        // Prefetch adjacent screenshots so Next/Prev feels instant
        const nextIdx = (state.activeMediaIndex + 1) % list.length;
        const prevIdx = (state.activeMediaIndex - 1 + list.length) % list.length;
        prefetchImage(list[nextIdx].src);
        prefetchImage(list[prevIdx].src);
      }
    }

    if (captionEl && activeItem) {
      captionEl.textContent = activeItem.title[state.lang];
    }
    if (counterEl) {
      counterEl.textContent = `${state.activeMediaIndex + 1} / ${list.length}`;
    }

    const thumbsContainer = document.getElementById("media-thumbs-grid");
    if (thumbsContainer) {
      thumbsContainer.innerHTML = list
        .map((item, idx) => {
          const thumbSrc = item.thumb || item.src;
          return `
            <button
              type="button"
              class="media-thumb-btn ${idx === state.activeMediaIndex ? "active" : ""}"
              data-thumb-index="${idx}"
              title="${item.title[state.lang]}"
              aria-label="${item.title[state.lang]}"
            >
              <img src="${thumbSrc}" alt="${item.title[state.lang]}" loading="lazy" decoding="async" />
              <span class="thumb-badge-num">${idx + 1}</span>
              ${item.isVideo ? '<span class="thumb-play-badge" aria-hidden="true">▶</span>' : ""}
            </button>
          `;
        })
        .join("");
    }
  }

  function stepStageMedia(delta) {
    const list = getMediaList(state.mediaMode);
    state.activeMediaIndex = (state.activeMediaIndex + delta + list.length) % list.length;
    renderMediaShowcase();
  }

  /* ================= 5. LIGHTBOX & LEGAL MODALS ================= */
  function openLightbox(listType, index) {
    state.lightboxOpen = true;
    state.lightboxListType = listType;
    state.lightboxIndex = index;
    const modal = document.getElementById("lightbox-modal");
    if (!modal) return;
    renderLightboxContent();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    state.lightboxOpen = false;
    const lbVideo = document.getElementById("lightbox-video");
    if (lbVideo) {
      lbVideo.pause();
      lbVideo.hidden = true;
      lbVideo.removeAttribute("src");
      delete lbVideo.dataset.currentSrc;
      lbVideo.load();
    }
    const lbLoader = document.getElementById("lightbox-loader");
    if (lbLoader) lbLoader.hidden = true;

    const modal = document.getElementById("lightbox-modal");
    if (modal) modal.hidden = true;
    if (!state.legalModalOpen) {
      document.body.style.overflow = "";
    }
  }

  function stepLightbox(delta) {
    if (!state.lightboxOpen) return;
    const list = getMediaList(state.lightboxListType);
    state.lightboxIndex = (state.lightboxIndex + delta + list.length) % list.length;
    renderLightboxContent();
  }

  function renderLightboxContent() {
    const list = getMediaList(state.lightboxListType);
    const item = list[state.lightboxIndex];
    if (!item) return;

    document.getElementById("lightbox-counter").textContent = `${state.lightboxIndex + 1} / ${list.length}`;
    document.getElementById("lightbox-title").textContent = item.title[state.lang];

    const imgEl = document.getElementById("lightbox-img");
    const videoEl = document.getElementById("lightbox-video");
    const loaderEl = document.getElementById("lightbox-loader");

    if (item.isVideo && videoEl) {
      if (imgEl) {
        imgEl.hidden = true;
        imgEl.removeAttribute("src");
        delete imgEl.dataset.currentSrc;
      }
      videoEl.hidden = false;
      videoEl.poster = item.thumb || "";
      if (videoEl.dataset.currentSrc !== item.src) {
        if (loaderEl) loaderEl.hidden = false;
        videoEl.dataset.currentSrc = item.src;
        videoEl.src = item.src;
        videoEl.load();
      } else if (loaderEl && videoEl.readyState >= 2) {
        loaderEl.hidden = true;
      }
      const p = videoEl.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {});
      }
    } else if (imgEl) {
      if (videoEl) {
        videoEl.pause();
        videoEl.hidden = true;
        videoEl.removeAttribute("src");
        delete videoEl.dataset.currentSrc;
        videoEl.load();
      }
      imgEl.hidden = false;
      imgEl.alt = item.title[state.lang];
      if (imgEl.dataset.currentSrc !== item.src) {
        if (loaderEl) loaderEl.hidden = false;
        imgEl.dataset.currentSrc = item.src;
        imgEl.src = item.src;
        if (imgEl.complete && loaderEl) {
          loaderEl.hidden = true;
        }
      } else if (loaderEl && imgEl.complete) {
        loaderEl.hidden = true;
      }
    }
  }

  function renderLegalModal() {
    const dict = getDict();
    const badgeEl = document.getElementById("legal-badge");
    const titleEl = document.getElementById("legal-title");
    const listEl = document.getElementById("legal-sections-list");
    if (badgeEl) badgeEl.textContent = dict.legal.badge;
    if (titleEl) titleEl.textContent = dict.legal.title;
    if (listEl) {
      listEl.innerHTML = dict.legal.sections
        .map(
          (sec) => `
          <div class="legal-section-item">
            <h4 class="legal-section-heading">${sec.heading}</h4>
            <p class="legal-section-body">${sec.body}</p>
          </div>
        `
        )
        .join("");
    }
  }

  function openLegalModal() {
    state.legalModalOpen = true;
    renderLegalModal();
    const modal = document.getElementById("legal-modal");
    if (modal) modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLegalModal() {
    state.legalModalOpen = false;
    const modal = document.getElementById("legal-modal");
    if (modal) modal.hidden = true;
    if (!state.lightboxOpen) {
      document.body.style.overflow = "";
    }
  }

  /* ================= 6. DIALOGUE BRIEF BUILDER ================= */
  function renderOrderOptions() {
    const dict = getDict();
    const container = document.getElementById("order-options-grid");
    if (!container) return;

    container.innerHTML = dict.order.options
      .map((opt) => {
        const isSelected = state.selectedOrderOptions.has(opt.id);
        let displayTitle = opt.title;
        if (opt.id === "cipher" && isSelected) {
          displayTitle =
            state.lang === "ru"
              ? "🔓 РАСШИФРОВАНО: Просто поздороваться / обсудить LightGiver"
              : "🔓 DECRYPTED: Just say hi / ask about LightGiver";
        }
        return `
          <button
            type="button"
            class="dlg-option-btn ${opt.color} ${isSelected ? "selected" : ""}"
            data-order-opt="${opt.id}"
          >
            <span class="dlg-who-tag">${opt.who}</span>
            <span class="dlg-option-title">${displayTitle}</span>
            <span class="dlg-option-sub">${opt.sub}</span>
          </button>
        `;
      })
      .join("");
  }

  function buildBriefText() {
    const dict = getDict();
    const selectedTitles = dict.order.options
      .filter((o) => state.selectedOrderOptions.has(o.id))
      .map((o) => {
        if (o.id === "cipher") {
          return state.lang === "ru"
            ? "Просто поздороваться / спросить про LightGiver"
            : "Just say hi / ask about LightGiver";
        }
        return `${o.title} (${o.who})`;
      });

    const userMsg = (document.getElementById("order-message-input")?.value || "").trim();

    if (state.lang === "ru") {
      const lines = ["Привет, Spiteful Creation (Mitrey & Rozzar)!"];
      if (selectedTitles.length > 0) {
        lines.push("\nИнтересует помощь по направлениям:");
        selectedTitles.forEach((t) => lines.push(`• ${t}`));
      }
      if (userMsg) {
        lines.push(`\nО задаче:\n${userMsg}`);
      } else {
        lines.push("\nО задаче: [опишите задачу в паре слов]");
      }
      return lines.join("\n");
    } else {
      const lines = ["Hey Spiteful Creation (Mitrey & Rozzar)!"];
      if (selectedTitles.length > 0) {
        lines.push("\nI'm looking for help with:");
        selectedTitles.forEach((t) => lines.push(`• ${t}`));
      }
      if (userMsg) {
        lines.push(`\nTask details:\n${userMsg}`);
      } else {
        lines.push("\nTask details: [describe your task briefly]");
      }
      return lines.join("\n");
    }
  }

  function updateBriefPreview() {
    const previewEl = document.getElementById("brief-preview-text");
    if (previewEl) {
      previewEl.textContent = buildBriefText();
    }
  }

  function copyBriefToClipboard(callback) {
    const text = buildBriefText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          showCopyToast();
          if (callback) callback(text);
        })
        .catch(() => {
          fallbackCopy(text);
          if (callback) callback(text);
        });
    } else {
      fallbackCopy(text);
      if (callback) callback(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showCopyToast();
  }

  function showCopyToast() {
    const toast = document.getElementById("copy-toast");
    if (!toast) return;
    toast.hidden = false;
    clearTimeout(showCopyToast._timer);
    showCopyToast._timer = setTimeout(() => {
      toast.hidden = true;
    }, 4500);
  }

  /* ================= 7. EVENT LISTENERS ================= */
  function initEvents() {
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const newLang = btn.getAttribute("data-lang-btn");
        if (newLang && (newLang === "ru" || newLang === "en")) {
          try {
            localStorage.setItem("sc_lang_manual", newLang);
          } catch (_) {
            // Ignore storage restrictions
          }
          if (newLang !== state.lang) {
            state.lang = newLang;
            applyTranslations();
          }
        }
      });
    });

    document.querySelectorAll("[data-hero-shot]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.heroShotId = btn.getAttribute("data-hero-shot");
        renderHeroMonitor();
      });
    });

    document.getElementById("hero-monitor-screen")?.addEventListener("click", () => {
      const idx = window.LIGHTGIVER_SCREENSHOTS.findIndex((s) => s.id === state.heroShotId);
      openLightbox("screenshots", idx >= 0 ? idx : 0);
    });

    document.getElementById("stage-prev-btn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      stepStageMedia(-1);
    });

    document.getElementById("stage-next-btn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      stepStageMedia(1);
    });

    const stageImg = document.getElementById("stage-main-img");
    const stageVideo = document.getElementById("stage-main-video");
    const stageLoader = document.getElementById("stage-loader");

    if (stageImg && stageLoader) {
      stageImg.addEventListener("load", () => {
        stageLoader.hidden = true;
      });
      stageImg.addEventListener("error", () => {
        stageLoader.hidden = true;
      });
    }
    if (stageVideo && stageLoader) {
      stageVideo.addEventListener("loadeddata", () => {
        stageLoader.hidden = true;
      });
      stageVideo.addEventListener("canplay", () => {
        stageLoader.hidden = true;
      });
      stageVideo.addEventListener("error", () => {
        stageLoader.hidden = true;
      });
    }

    stageImg?.addEventListener("click", () => {
      openLightbox(state.mediaMode, state.activeMediaIndex);
    });

    stageVideo?.addEventListener("click", () => {
      openLightbox(state.mediaMode, state.activeMediaIndex);
    });

    const lbImg = document.getElementById("lightbox-img");
    const lbVideo = document.getElementById("lightbox-video");
    const lbLoader = document.getElementById("lightbox-loader");

    if (lbImg && lbLoader) {
      lbImg.addEventListener("load", () => {
        lbLoader.hidden = true;
      });
      lbImg.addEventListener("error", () => {
        lbLoader.hidden = true;
      });
    }
    if (lbVideo && lbLoader) {
      lbVideo.addEventListener("loadeddata", () => {
        lbLoader.hidden = true;
      });
      lbVideo.addEventListener("canplay", () => {
        lbLoader.hidden = true;
      });
      lbVideo.addEventListener("error", () => {
        lbLoader.hidden = true;
      });
    }

    document.addEventListener("click", (e) => {
      const legalBtn = e.target.closest("[data-open-legal]");
      if (legalBtn) {
        openLegalModal();
        return;
      }

      const modeBtn = e.target.closest("[data-media-mode]");
      if (modeBtn) {
        const newMode = modeBtn.getAttribute("data-media-mode");
        if (newMode && newMode !== state.mediaMode) {
          state.mediaMode = newMode;
          state.activeMediaIndex = 0;
          renderMediaShowcase();
        }
        return;
      }

      const thumbBtn = e.target.closest("[data-thumb-index]");
      if (thumbBtn) {
        const idx = parseInt(thumbBtn.getAttribute("data-thumb-index"), 10);
        if (!Number.isNaN(idx)) {
          state.activeMediaIndex = idx;
          renderMediaShowcase();
        }
        return;
      }

      const devBtn = e.target.closest("[data-select-member]");
      if (devBtn) {
        const memberId = devBtn.getAttribute("data-select-member");
        state.selectedOrderOptions.clear();
        if (memberId === "mitrey") {
          state.selectedOrderOptions.add("code");
          state.selectedOrderOptions.add("gd-narrative");
        } else if (memberId === "rozzar") {
          state.selectedOrderOptions.add("3d-blender");
          state.selectedOrderOptions.add("level-light");
        }
        renderOrderOptions();
        updateBriefPreview();
        document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const orderOptBtn = e.target.closest("[data-order-opt]");
      if (orderOptBtn) {
        const optId = orderOptBtn.getAttribute("data-order-opt");
        if (state.selectedOrderOptions.has(optId)) {
          state.selectedOrderOptions.delete(optId);
        } else {
          state.selectedOrderOptions.add(optId);
        }
        renderOrderOptions();
        updateBriefPreview();
        return;
      }
    });

    document.getElementById("duo-order-btn")?.addEventListener("click", () => {
      state.selectedOrderOptions.clear();
      state.selectedOrderOptions.add("duo-turnkey");
      renderOrderOptions();
      updateBriefPreview();
      document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("order-message-input")?.addEventListener("input", updateBriefPreview);

    document.getElementById("send-telegram-btn")?.addEventListener("click", () => {
      copyBriefToClipboard(() => {
        window.open(window.SITE_CONFIG.contacts.telegramUrl, "_blank", "noopener,noreferrer");
      });
    });

    document.getElementById("send-email-btn")?.addEventListener("click", () => {
      const text = buildBriefText();
      const subject =
        state.lang === "ru"
          ? "Заказ / Сотрудничество со Spiteful Creation"
          : "Commission / Inquiry for Spiteful Creation";
      const mailto = `mailto:${window.SITE_CONFIG.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      window.location.href = mailto;
    });

    document.getElementById("copy-brief-btn")?.addEventListener("click", () => {
      copyBriefToClipboard();
    });

    document.getElementById("lightbox-close-btn")?.addEventListener("click", closeLightbox);
    document.getElementById("lightbox-prev-btn")?.addEventListener("click", () => stepLightbox(-1));
    document.getElementById("lightbox-next-btn")?.addEventListener("click", () => stepLightbox(1));
    document.getElementById("lightbox-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "lightbox-modal") closeLightbox();
    });

    document.getElementById("legal-close-btn")?.addEventListener("click", closeLegalModal);
    document.getElementById("legal-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "legal-modal") closeLegalModal();
    });

    document.addEventListener("keydown", (e) => {
      if (state.legalModalOpen && e.key === "Escape") {
        closeLegalModal();
        return;
      }
      if (!state.lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initEvents();
    applyTranslations();
  });
})();

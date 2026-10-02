(() => {
  "use strict";

  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const setupMobileMenu = () => {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (!header || !toggle || !nav) return;

    const label = toggle.querySelector(".visually-hidden");

    const setOpen = (isOpen) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      nav.dataset.open = String(isOpen);
      document.body.classList.toggle("menu-open", isOpen);
      if (label) label.textContent = isOpen ? "Tutup menu navigasi" : "Buka menu navigasi";
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (toggle.getAttribute("aria-expanded") === "true" && !header.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    const desktopQuery = window.matchMedia("(min-width: 900px)");
    const closeAtDesktop = (event) => {
      if (event.matches) setOpen(false);
    };
    desktopQuery.addEventListener?.("change", closeAtDesktop);
  };

  const setupActiveNavigation = () => {
    const links = [...document.querySelectorAll(".site-nav a[href^='#']")];
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    if (!links.length || !sections.length) return;

    const setCurrent = (sectionId) => {
      links.forEach((link) => {
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    setCurrent("beranda");
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -62% 0px", threshold: [0, 0.15, 0.35] }
    );

    sections.forEach((section) => observer.observe(section));
  };

  const formatRupiah = (amount) => `Rp${Number(amount).toLocaleString("id-ID")}`;

  const renderPriceCard = (program, index) => {
    const card = createElement("section", `price-card ${index % 2 ? "coral-card" : "blue-card"}`);
    card.dataset.program = program.id;

    const head = createElement("div", "price-card-head");
    head.append(
      createElement("h4", "", program.name),
      createElement("span", "", `${program.durationMinutes} menit`)
    );

    const sessionLine = createElement(
      "p",
      "session-line",
      `${program.frequency} · ${program.companion}`
    );

    const packageList = createElement("ul");
    program.packages.forEach((feePackage) => {
      const item = createElement("li");
      item.append(
        createElement("strong", "", formatRupiah(feePackage.price)),
        createElement("span", "", `per ${feePackage.period} · ${feePackage.sessions} sesi`)
      );
      packageList.append(item);
    });

    card.append(head, sessionLine, packageList);
    return card;
  };

  const renderFeeBranch = (section, branch) => {
    const heading = createElement("div", "fee-branch-heading");
    const pin = createElement("span", "pin-icon");
    pin.setAttribute("aria-hidden", "true");
    const headingText = createElement("div");
    headingText.append(createElement("p", "", "Cabang"), createElement("h3", "", branch.name));
    heading.append(pin, headingText);

    const priceGrid = createElement("div", "price-grid");
    branch.programs.forEach((program, index) => priceGrid.append(renderPriceCard(program, index)));

    const source = createElement(
      "p",
      "source-note source-note-on-dark",
      `Sumber: brosur hlm. ${branch.sourcePage}`
    );

    section.replaceChildren(heading, priceGrid, source);
  };

  const setupFees = (content) => {
    const select = document.querySelector("[data-branch-select]");
    const sections = [...document.querySelectorAll("[data-fee-branches] [data-branch]")];
    if (!select || !sections.length || !content?.fees) return;

    sections.forEach((section) => {
      const branch = content.fees[section.dataset.branch];
      if (branch) renderFeeBranch(section, branch);
    });

    const setBranch = (branchId) => {
      if (!content.fees[branchId]) return;
      sections.forEach((section) => {
        const isActive = section.dataset.branch === branchId;
        section.dataset.active = String(isActive);
        section.setAttribute("aria-hidden", String(!isActive));
      });
      select.value = branchId;
    };

    select.addEventListener("change", (event) => setBranch(event.target.value));
    setBranch(content.fees[select.value] ? select.value : Object.keys(content.fees)[0]);
  };

  const buildWhatsAppUrl = (contact) => {
    const message = `Halo Seruni Montessori, saya ingin bertanya tentang program di cabang ${contact.messageBranch}.`;
    return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const setupContacts = (content) => {
    if (!content?.contacts) return;

    document.querySelectorAll("[data-contact]").forEach((card) => {
      const contact = content.contacts[card.dataset.contact];
      if (!contact) return;

      const title = card.querySelector("h3");
      const location = card.querySelector(".contact-pin p");
      const link = card.querySelector(".whatsapp-button");
      if (title) title.textContent = contact.branch;
      if (location) location.textContent = contact.location;
      if (!link) return;

      const icon = createElement("span", "wa-icon", "◔");
      icon.setAttribute("aria-hidden", "true");
      const number = createElement("span", "", contact.phoneDisplay);
      link.replaceChildren(icon, number);
      link.href = buildWhatsAppUrl(contact);
      link.setAttribute("aria-label", `Hubungi cabang ${contact.branch} melalui WhatsApp`);
    });
  };

  const setupPopoverFallback = () => {
    if ("showPopover" in HTMLElement.prototype) return;

    const popovers = [...document.querySelectorAll("[popover]")];
    popovers.forEach((popover) => {
      popover.hidden = true;
      popover.removeAttribute("popover");
    });

    document.querySelectorAll("[popovertarget]").forEach((button) => {
      const targetId = button.getAttribute("popovertarget");
      const target = document.getElementById(targetId);
      if (!target) return;

      button.removeAttribute("popovertarget");
      button.setAttribute("aria-controls", targetId);
      button.addEventListener("click", () => {
        const shouldClose = button.getAttribute("popovertargetaction") === "hide";
        if (shouldClose) {
          target.hidden = true;
          delete target.dataset.fallbackOpen;
          document.body.classList.remove("popover-fallback-open");
          return;
        }
        target.hidden = false;
        target.dataset.fallbackOpen = "true";
        document.body.classList.add("popover-fallback-open");
        target.querySelector(".popover-close")?.focus();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const openPopover = document.querySelector('[data-fallback-open="true"]');
      if (!openPopover) return;
      openPopover.hidden = true;
      delete openPopover.dataset.fallbackOpen;
      document.body.classList.remove("popover-fallback-open");
    });
  };

  setupMobileMenu();
  setupActiveNavigation();
  setupPopoverFallback();

  const content = window.SERUNI_CONTENT;
  if (!content) {
    console.error("Data konten Seruni Montessori tidak ditemukan.");
    return;
  }

  setupFees(content);
  setupContacts(content);
})();

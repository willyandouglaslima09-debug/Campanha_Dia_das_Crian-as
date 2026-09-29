document.addEventListener("DOMContentLoaded", function () {
  // 1. Inicializar ícones do Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Menu Hambúrguer para Celulares (Responsividade Interativa)
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    mobileNavLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // 3. Copiar Chave PIX
  const copyButton = document.getElementById("copy-pix-button");
  const copiedStatus = document.getElementById("copied-status");
  const pixKey = "63985121403";

  if (copyButton) {
    copyButton.addEventListener("click", async function () {
      try {
        await navigator.clipboard.writeText(pixKey);
        if (copiedStatus) {
          copiedStatus.classList.remove("hidden");
          setTimeout(function () {
            copiedStatus.classList.add("hidden");
          }, 3000);
        }
      } catch (error) {
        alert("Chave PIX: " + pixKey);
      }
    });
  }
});
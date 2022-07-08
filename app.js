document.addEventListener('DOMContentLoaded', () => {
  const productSection = {
    get functions() {
      return {
        zoom: () => {},
        displayDiscount: () => {
          if (!this.conditionals.shouldDisplayDiscount) {
            const promotionalPriceEl = document.querySelector(
              '.product-stuff-wrapper .price-wrapper span.promotional-price'
            );
            document.querySelector(
              '.product-stuff-wrapper .price-wrapper span.original-price'
            ).style.display = 'none';
            promotionalPriceEl.style.fontSize = '1rem';
            promotionalPriceEl.style.color = '#FD3154';
          }
        },
      };
    },
    conditionals: {
      shouldDisplayDiscount: true,
    },
  };

  ((productSection) => {
    if (productSection) {
      productSection.functions.displayDiscount();
    }
  })(productSection);
});

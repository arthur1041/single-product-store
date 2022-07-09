const helperFunctions = {
  appendHTML: (el, htmlCode) => {
    el.insertAdjacentHTML('beforeend', htmlCode);
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const productSection = {
    get functions() {
      return {
        activateGallery: () => {
          const { appendHTML } = helperFunctions;

          const currentImageEl = document.querySelector(
            '.product-stuff-wrapper .media-wrapper .current-img img'
          );
          const thumbnailsEl = document.querySelectorAll(
            '.product-stuff-wrapper .media-wrapper .thumbnails-wrapper .thumbnail'
          );
          const thumbnailsWrapperEl = document.querySelector(
            '.product-stuff-wrapper .media-wrapper .thumbnails-wrapper'
          );

          const currentImageUrl = currentImageEl.src;

          thumbnailsEl.forEach((el) => {
            el.addEventListener('click', () => {
              currentImageEl.src = el.querySelector("img").src;
            });
          });
        },
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
        qtyOnlyAllowPositiveNumbers: () => {
          const qtySelector = document.querySelector('#qty-selecor');

          qtySelector.addEventListener('input', (event) => {
            const enteredValue = event.data;

            if (enteredValue === null || enteredValue < 0) {
              qtySelector.value = '1';
            } else if (parseInt(qtySelector.value) <= 0) {
              qtySelector.value = '1';
            }
          });
        },
      };
    },
    conditionals: {
      shouldDisplayDiscount: true,
    },
  };

  ((productSection) => {
    if (productSection) {
      const { displayDiscount, activateGallery, qtyOnlyAllowPositiveNumbers } =
        productSection.functions;

      // conditional functions
      displayDiscount();

      // functionalities
      activateGallery();
      qtyOnlyAllowPositiveNumbers();
    }
  })(productSection);
});

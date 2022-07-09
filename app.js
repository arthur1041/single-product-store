document.addEventListener('DOMContentLoaded', () => {
  
  const productSection = {
    get functions() {
      return {
        activateGallery: () => {

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
            
            if(enteredValue === null || enteredValue < 0 ) {
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
      productSection.functions.displayDiscount();
      
      productSection.functions.activateGallery();
      productSection.functions.qtyOnlyAllowPositiveNumbers();
    }
  })(productSection);

});

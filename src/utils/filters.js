export function filterProducts(products, searchQuery, selectedCategory, priceRange) {
    return products.filter(product =>
      (!selectedCategory || product.category === selectedCategory) &&
      product.price >= priceRange.min &&
      product.price <= priceRange.max &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
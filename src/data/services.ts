
import type { ProductDB } from '../typing/Typing';
import { productsDB, categories } from './db';

type Filters = {priceRange: {max: number, min: number}, primeOnly?: boolean, colors: string, brands:Array<string>, rating:number ,inStock?:boolean, }
type Options = {filters: Filters, sortBy: string, category: string, searchQuery: string; limit:number, offset:number}

// Simulate API delay
const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const productService = {
  // GET all products with optional filters and sorting
  // async getAllProducts(options?: Options) {
  async getAllProducts() {
    await delay(200);
    let products = [...productsDB];

    // Apply filters and sorting
    // if (options) { products = this.applyFiltersAndSort(products, options); }

    const productLocal = localStorage.getItem("productLocal");
    const productStorage : ProductDB[] = productLocal ? JSON.parse(productLocal) : [];

    const productsAll= [...products,  ...productStorage];

    return productsAll;
  },

  // GET last id 
  // async getLastId(){
  //       await delay(200);
  //   const lastIdDB = productsDB.length;

  //   const productLocal = localStorage.getItem("productLocal");
  //   const productStorage : ProductDB[] = productLocal ? JSON.parse(productLocal) : [];

  //   const lestIdProduct= lastIdDB + productStorage.length;

  //   return lestIdProduct;
  // },

  // GET product by ID
  async getProductById(id : string) {
    await delay(1000);
    
    const productLocal = localStorage.getItem("productLocal");
    const productStorage : ProductDB[] = productLocal ? JSON.parse(productLocal) : [];

    const productsAll= [...productsDB,  ...productStorage];
    
    const product = productsAll.find((p) => p.idProduct === parseInt(id));

    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  },

  // GET products by category with optional filters and sorting
  async getProductsByCategory(category :string, options: Options) {
    await delay(150);
    let products =
      category === 'all'
        ? [...productsDB]
        : productsDB.filter((product) => product.category === category);

    // Apply filters and sorting
    products = this.applyFiltersAndSort(products, options);

    return products;
  },

  // GET categories
  async getCategories() {
    await delay(100);
    return [...categories];
  },

  // Search products with optional filters and sorting
  async searchProducts(query :string, options: Options) {
    await delay(200);
    let products = !query
      ? [...productsDB]
      : productsDB.filter(
          (product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );

    // Apply filters and sorting
    products = this.applyFiltersAndSort(products, options);

    return products;
  },

  // GET featured products
  async getFeaturedProducts() {
    await delay(150);
    return productsDB.filter((product) => product.priceInfo?.includes("cupon")).slice(0, 8);
  },

  // GET products on sale
  async getProductsOnSale() {
    await delay(150);
    return productsDB.filter((product) => product.priceInfo?.includes("descuento")).slice(0, 10);
  },

  // Apply filters and sorting to products array
  applyFiltersAndSort(products :ProductDB[], options: Options) {
    const {filters, sortBy, category, searchQuery} = options;

    // const {
    //   filters = {},
    //   sortBy = 'relevance',
    //   category = 'all',
    //   searchQuery = '',
    // } = options;

    let filtered = [...products];
    

    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter((product) => product.category === category);
    }

    

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    
    // Price range filter
    if (filters.priceRange.max !== 0 && filters.priceRange.min > 0 ) {
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceRange.min &&
          product.price <= filters.priceRange.max
      );
    }
    
    // Color filter
    if (filters.colors && filters.colors.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.colors &&
          product.colors.some((color) => filters.colors.includes(color))
      );
    }
    
    // Brand filter
    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        product.brands.some((brand) => filters.brands.includes(brand))
      );
    }
    


    // Rating filter
    if (filters.rating && filters.rating > 0) {
      filtered = filtered.filter(
        (product) => product.rating >= filters.rating
      );
    }
    

    // Prime only filter
    if (filters.primeOnly) {
      filtered = filtered.filter((product) => product.prime);
    }
    
    
    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    // Apply sorting
    filtered = this.sortProducts(filtered, sortBy);
    
    
    return filtered;
  },

  // Sort products based on criteria
  sortProducts(products: ProductDB[], sortBy: string) {
    const sorted = [...products];

    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return sorted.sort((a, b) => b.idProduct - a.idProduct);
      case 'name-az':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-za':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      // case 'discount':
      //   return sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
      // case 'popularity':
      //   return sorted.sort((a, b) => b.rating.count - a.rating.count);
      default:
        // relevance - keep original order
        return sorted;
    }
  },

  // Get unique filter values from products
  async getFilterOptions(category = 'all') {
    await delay(50);

    const products =
      category === 'all'
        ? [...productsDB]
        : productsDB.filter((product) => product.category === category);

    const colors = new Set();
    const brands = new Set();
    let minPrice = Infinity;
    let maxPrice = 0;

    products.forEach((product) => {
      // Collect colors
      if (product.colors) {
        product.colors.forEach((color) => colors.add(color));
      }

      // Collect brands
      if (product.brands) {
        brands.add(product.brands);
      }

      // Calculate price range
      minPrice = Math.min(minPrice, product.price);
      maxPrice = Math.max(maxPrice, product.price);
    });

    return {
      colors: Array.from(colors).sort(),
      brands: Array.from(brands).sort(),
      priceRange: [Math.floor(minPrice), Math.ceil(maxPrice)],
    };
  },

  // Get products with advanced filtering
  async getFilteredProducts(options: Options) {
    const {limit, offset} = options;
    await delay(200);
    
    // const {
    //   category = 'all',
    //   searchQuery = '',
    //   filters = {},
    //   sortBy = 'relevance',
    //   limit,
    //   offset = 0,
    // } = options;

    let products = this.applyFiltersAndSort(productsDB, options);

    // Apply pagination if specified
    if (limit) {
      products = products.slice(offset, offset + limit);
    }

    return {
      products,
      total: products.length,
      hasMore: limit ? offset + limit < products.length : false,
    };
  },

  // Get sort options
  getSortOptions() {
    return [
      { value: 'relevance', label: 'Relevancia' },
      { value: 'price-low', label: 'Precio: menor a mayor' },
      { value: 'price-high', label: 'Precio: mayor a menor' },
      { value: 'rating', label: 'Mejor valorados' },
      { value: 'newest', label: 'Más recientes' },
      { value: 'name-az', label: 'Nombre: A-Z' },
      { value: 'name-za', label: 'Nombre: Z-A' },
      { value: 'discount', label: 'Mayor descuento' },
      { value: 'popularity', label: 'Más populares' },
    ];
  },
};

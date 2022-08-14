export type USER = {
  name: String,
  image: String,
  email: String,
  cart: Array,
  wishlist: Array,
  emailVerified: any,
  products?: PRODUCTS
};

export type USERS = USER[];

export type PRODUCT = {
  title: String,
  image: String,
  category: String,
  description: String,
  rating: Object,
  price: Number,
  countInStock: Number,
};

export type PRODUCTS = PRODUCT[];

export type CATEGORY = {
  name: string,
  products: PRODUCTS,
};

export type CATEGORIES = CATEGORY[];

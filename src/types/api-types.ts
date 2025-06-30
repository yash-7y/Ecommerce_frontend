import type {
  BarChart,
  CartItemType,
  LineChart,
  Order,
  PieChart,
  Product,
  ShippingInfoType,
  Stats,
  User,
} from "./types";
export type CustomError = {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
};

export type MessageResponse = {
  success: boolean;
  message: string;
};
export type DeleteUserRequestType = {
  userId: string;
  adminUserId: string;
};
export type AllUsersResponseType = {
  success: boolean;
  users: User[];
};
export type UserResponseType = {
  success: boolean;
  user: User;
};

export type AllProductsResponseType = {
  success: boolean;
  products: Product[];
};
export type CategoriesResponseType = {
  success: boolean;
  categories: string[];
};
export type SearchProductsResponseType = {
  success: boolean;
  products: Product[];
  totalPage: number;
};
export type SearchProductsRequestType = {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
};

export type ProductResponseType = {
  success: boolean;
  product: Product;
};

export type NewProductRequestType = {
  id: string;
  formData: FormData;
};

export type UpdateProductRequestType = {
  userId: string;
  productId: string;
  formData: FormData;
};

export type DeleteProductRequestType = {
  userId: string;
  productId: string;
};

export type NewOrderRequestType = {
  shippingInfo: ShippingInfoType;
  orderItems: CartItemType[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  user: string;
};

export type UpdateOrderRequestType = {
  userId: string;
  orderId: string;
};

export type AllOrdersResponseType = {
  success: boolean;
  orders: Order[];
};

export type OrderDetailsResponseType = {
  success: boolean;
  order: Order;
};

export type StatsResponseType = {
  success: boolean;
  stats: Stats;
};

export type PieResponseType = {
  success: boolean;
  charts: PieChart;
};

export type BarResponseType = {
  success: true;
  charts: BarChart;
};

export type LineResponseType = {
  success: true;
  charts: LineChart;
};

export interface User {
  name: string;
  email: string;
  photo: string;
  role: string;
  gender: string;
  dob: string;
  _id: string;
}

export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: string;
  _id: string;
};

export type ShippingInfoType = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
};

export type CartItemType = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

//order
export type OrderItemType = Omit<CartItemType, "stock"> & { _id: string }; // no such id in backend model code, so this id is mongodb implicit id

export type Order = {
  orderItems: OrderItemType[];
  shippingInfo: ShippingInfoType;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string; // order id
};

//Stats
type CountAndChange = {
  revenue: number;
  product: number;
  user: number;
  order: number;
};

type LatestTransaction = {
  _id: string;
  discount: number;
  amount: number;
  quantity: number;
  status: string;
}[];

export type Stats = {
  categoriesAndCountMapInPercentage: Record<string, number>[];
  count: CountAndChange;
  changePercent: CountAndChange;
  chart: {
    order: number[];
    revenue: number[];
  };
  userRatio: {
    male: number;
    female: number;
  };
  latestTransactions: LatestTransaction;
};

// pie chart
type orderFullfillment = {
  processing: number;
  shipped: number;
  delivered: number;
};
type stockAvailability = {
  inStock: number;
  outOfStock: number;
};
type revenueDistribution = {
  netMargin: number;
  discount: number;
  productionCost: number;
  burnt: number;
  marketingCost: number;
};
type usersAgeGoup = {
  teen: number;
  adult: number;
  old: number;
};

export type PieChart = {
  orderFullfillment: orderFullfillment;
  productCategoriesPercent: Record<string, number>[];
  stockAvailability: stockAvailability;
  revenueDistribution: revenueDistribution;
  usersAgeGoup: usersAgeGoup;
  adminCustomer: {
    admin: number;
    customer: number;
  };
};

//bar chart
export type BarChart = {
  users: number[];
  products: number[];
  orders: number[];
};

//line chart
export type LineChart = {
  users: number[];
  products: number[];
  discount: number[];
  revenue: number[];
};

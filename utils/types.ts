import { Prisma } from "@prisma/client";

export type CartItemWithProduct=Prisma.CartItemGetPayload<{
  include:{product:true};
}>;

export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};


export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export type Product = {
  id: string;
  name: string;
  company: string;
  description?: string;
  featured?: boolean;
  image?: string;
  price: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  clerkId?: string;
};

export type FavoriteWithProduct = Prisma.FavoriteGetPayload<{
  include: { product: true };
}>;

export type Order = {
  id: string;
  clerkId?: string;
  products: number;
  orderTotal: number;
  tax: number;
  shipping: number;
  email: string;
  isPaid: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type TSidebarLink = {
  title: string;
  icon: JSX.Element;
  path: string;
};

export type User = {
  Email: string;
  Fullname: string;
  IsActive: boolean;
  IsLocked: boolean;
  IsOnline: boolean;
  Orders: [];
  Profile_Picture: string;
  Role: string;
  id: string;
};

export type Product = {
  Barcode: string;
  Category: string;
  ImportPrice: number;
  Name: string;
  OrderDetails: [];
  Quantity: number;
  RetailPrice: number;
  updatedAt: string;
  _id: string;
  Flag: 1;
};

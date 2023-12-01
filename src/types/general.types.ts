export type TSidebarLink = {
  title: string;
  icon: JSX.Element;
  path: string;
  role?: string[];
};

export type User = {
  Email: string;
  Fullname: string;
  IsActive: boolean;
  IsLocked: boolean;
  IsOnline: boolean;
  Orders: [];
  FirstLogin?: boolean;
  Profile_Picture: string;
  Role: string;
  id: string;
};

export type Product = {
  Barcode: string;
  Category: string;
  ImportPrice?: number;
  Name: string;
  Quantity: number;
  RetailPrice: number;
  OrderDetails?: [];
  Image: string;
  _id: string;
  Flag: number;
};

export interface IUser {
  phone: string;
  email: string;
  password: string;
  firstName: string;
  secondName: string;
  image: string | null;
  rate: number;
  date: Date;
  reviews: string[];
  products: string[];
  cart: string[];
  orders: string[];
  accessToken: string | null;
  _id: string;
  refreshToken: string | null;
  verify: boolean;
  verificationToken: string | null;
  emailChangeToken: string | null;
  newEmail: string | null;
}

export interface IUserCreate {
  phone: string;
  email: string;
  password: string;
  firstName: string;
  secondName: string;
  image?: string | null;
}

export interface IUserSignUp {
  phone: string;
  email: string;
  password: string;
  firstName: string;
  secondName: string;
  image?: File | '';
}

export interface IUserLogIn {
  phone?: string;
  email?: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IUserEmail {
  email: string;
}

export interface IUserResetPassword {
  resetToken: string;
  passwordId: string;
  newPassword: string;
}

export interface IUserChangePassword {
  newPassword: string;
  oldPassword: string;
}

export interface IUserChangeData {
  phone: string;
  email: string;
  firstName: string;
  secondName: string;
  image: string | null;
}

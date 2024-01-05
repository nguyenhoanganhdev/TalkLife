export type SignUpRequest = {
  params: SignUpParams;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-empty-pattern
  callback?: ({}: any) => void;
};

export type SignUpParams = {
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
};

export type UserProfile = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type SignUpSuccessPayload = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

export type CategoriesPayload = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

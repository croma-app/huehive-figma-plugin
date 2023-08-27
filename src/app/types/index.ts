export interface UserInfo {
  user: User;
  userToken: string;
}

export interface User {
  id: number;
  email: string;
  full_name: string;
  uid: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  username: string;
  device_id: any;
  temp_login_token: string;
  temp_login_token_expires_at: string;
}

export interface Palette {
  id: number;
  name: string;
  desc?: string;
  device_id?: string;
  created_at: string;
  updated_at: string;
  url: string;
  colors: Color[];
}

export interface Color {
  id: number;
  hex: string;
  name: string;
  order: number;
  created_at: string;
  updated_at: string;
  text_color: string;
}

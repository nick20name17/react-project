export interface User {
  id: number
  email: string
  password: string
  name: string
  role: string
  avatar: string
}

export interface UserPayload {
  name: string
  email: string
  password: string
  avatar: string
}

export interface UpdateUserPayload {
  email: string
  name: string
}

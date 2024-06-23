import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL(path, baseUrl)

  return fetch(url, init)
}

// esse aquivo concatena minha URL, ex: http://localhost:3000/api/ + products

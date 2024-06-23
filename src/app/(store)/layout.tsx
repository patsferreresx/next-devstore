import Header from '@/components/header'
import { ReactNode } from 'react'

// layout funciona assim
export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

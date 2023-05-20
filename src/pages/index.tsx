import Image from 'next/image'
import { Inter } from 'next/font/google'
import Weather from '@/components/views/Weather'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Weather />
  )
};
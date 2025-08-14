'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image' // Thêm import Image

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/ant_2015_1.png" // Đặt file avatar.jpg vào thư mục public
          alt="Avatar"
          width={70}
          height={70}
          className="rounded-full border"
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Nguyễn Tuấn Anh
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Kỹ sư điện tử viễn thông
          </TextEffect>
        </div>
      </div>
      {/* <Image
        src="/ant_2015_1.png"
        alt="Avatar"
        width={70}
        height={70}
        className="rounded-full border"
      /> */}
    </header>
  )
}
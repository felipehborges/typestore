import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import { ModeToggle } from './ui/mode-toggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image alt="" src="/ts_logo.png" width={100} height={100} />
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />

        <CartWidget />

        <div className="h-4 w-px bg-muted" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            alt=""
            src="https://github.com/felipehborges.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { Input } from './ui/input'
import { ModeToggle } from './ui/mode-toggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image alt="" src="/ts_logo.png" width={100} height={100} />
        </Link>

        <Input
          className="h-10 w-80 rounded-lg"
          placeholder="Buscar produtos..."
        />

        {/* <form className="flex w-[320px] items-center gap-3 rounded-full bg-background px-5 py-3 ring ring-muted-foreground">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </form> */}
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

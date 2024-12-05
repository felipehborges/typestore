import Image from 'next/image'
import Link from 'next/link'

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <strong>moletom</strong>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/aula-f75`}
          className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-background ring-1 ring-primary/20 dark:ring-0"
        >
          <Image
            src="/f75_00.jpg"
            alt=""
            className="place-self-center transition-transform duration-300 group-hover:scale-105"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-muted bg-background p-1 pl-5">
            <span className="truncate text-sm">Teclado Aula F75</span>
            <span className="flex h-full items-center justify-center rounded-full bg-primary px-4 font-semibold">
              {Number(450).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`/product/aula-f75`}
          className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-background ring-1 ring-primary/20 dark:ring-0"
        >
          <Image
            src="/f75_00.jpg"
            alt=""
            className="place-self-center transition-transform duration-300 group-hover:scale-105"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-muted bg-background p-1 pl-5">
            <span className="truncate text-sm">Teclado Aula F75</span>
            <span className="flex h-full items-center justify-center rounded-full bg-primary px-4 font-semibold">
              {Number(450).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`/product/aula-f75`}
          className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-background ring-1 ring-primary/20 dark:ring-0"
        >
          <Image
            src="/f75_00.jpg"
            alt=""
            className="place-self-center transition-transform duration-300 group-hover:scale-105"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-muted bg-background p-1 pl-5">
            <span className="truncate text-sm">Teclado Aula F75</span>
            <span className="flex h-full items-center justify-center rounded-full bg-primary px-4 font-semibold">
              {Number(450).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

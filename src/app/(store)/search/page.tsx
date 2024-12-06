import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface SearchPageProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: { revalidate: 60 * 60 }
  })

  const products = await response.json()

  return products
}

export default async function SearchPage({ ...props }: SearchPageProps) {
  const { q: query } = props.searchParams

  if (!query) redirect('/')

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <strong>{query}</strong>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-background ring-1 ring-primary/20 dark:ring-0"
            >
              <Image
                src={product.image}
                alt=""
                className="place-self-center transition-transform duration-300 group-hover:scale-105"
                width={480}
                height={480}
                quality={100}
              />

              <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-muted bg-background p-1 pl-5">
                <span className="truncate text-sm">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-primary px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'
import { Input } from './ui/input'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const inputQuery = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) return null

    router.push(`/search?q=${query}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <Input
        className="h-10 w-80 rounded-lg"
        defaultValue={inputQuery ?? ''}
        placeholder="Buscar produtos..."
        name="q"
      />
    </form>
  )
}

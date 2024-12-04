import { Skeleton } from '@/components/ui/skeleton'

export default function HomeLoading() {
  return (
    <p className="text-9xl text-red-600">CARREGANDO</p>
    // <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
    //   <Skeleton className="col-span-6 row-span-6 h-[856px]" />
    //   <Skeleton className="col-span-3 row-span-3" />
    //   <Skeleton className="col-span-3 row-span-3" />
    // </div>
  )
}

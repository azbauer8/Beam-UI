import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className='mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-4 px-6 pt-8'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold'>Beam UI</h1>
        <p className='text-accent-fg text-balance'>
          A set of composable, styled components using Base UI and TailwindCSS.
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <Button asChild>
          <Link href='/docs'>Get Started</Link>
        </Button>
        <Button variant='ghost' className='text-fg' asChild>
          <Link href='/docs/components/button'>Browse Components</Link>
        </Button>
      </div>
    </main>
  )
}

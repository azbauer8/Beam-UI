export function PreviewContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-bg flex w-full flex-col items-center justify-center gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain rounded-md border px-6 py-8 sm:min-h-44 sm:py-12'>
      {children}
    </div>
  )
}

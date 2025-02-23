"use client"
import { PreviewCard } from "@/components/ui/preview-card"

export function PreviewCardDemo() {
  return (
    <PreviewCard>
      <p className='max-w-64 text-base text-balance'>
        The principles of good{" "}
        <PreviewCard.Trigger href='https://en.wikipedia.org/wiki/Typography'>
          typography
        </PreviewCard.Trigger>{" "}
        remain into the digital age.
      </p>
      <PreviewCard.Popup>
        <img
          width='448'
          height='300'
          className='block w-full rounded-sm'
          src='https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300'
          alt='Station Hofplein signage in Rotterdam, Netherlands'
        />
        <p className='text-sm text-pretty'>
          <strong>Typography</strong> is the art and science of arranging type
          to make written language clear, visually appealing, and effective in
          communication.
        </p>
      </PreviewCard.Popup>
    </PreviewCard>
  )
}

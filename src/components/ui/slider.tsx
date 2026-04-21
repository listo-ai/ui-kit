import * as React from "react"
import { Slider } from "radix-ui"

import { cn } from "@/lib/utils"

function SliderComponent({
  className,
  ...props
}: React.ComponentProps<typeof Slider.Root>) {
  return (
    <Slider.Root
      data-slot="slider"
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <Slider.Track
        data-slot="slider-track"
        className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"
      >
        <Slider.Range
          data-slot="slider-range"
          className="absolute h-full bg-primary"
        />
      </Slider.Track>
      <Slider.Thumb
        data-slot="slider-thumb"
        className={cn(
          "block size-4 rounded-full border border-primary/50 bg-background shadow transition-[color,box-shadow]",
          "hover:border-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
          // No explicit disabled needed — root disables pointer-events above
        )}
      />
    </Slider.Root>
  )
}

export { SliderComponent as Slider }

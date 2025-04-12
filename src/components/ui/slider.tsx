"use client"

import * as React from "react"
import { useMotionValue, motion, type MotionProps } from "framer-motion"

interface SliderProps {
  value: number[] | undefined
  defaultValue?: number[]
  onValueChange?: (value: number[]) => void
  min?: number
  max?: number
  step?: number
  className?: string
}

export function Slider({
  value,
  defaultValue = [0],
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className,
  ...props
}: SliderProps & Omit<MotionProps, keyof SliderProps>) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const actualValue = value !== undefined ? value : internalValue
  const sliderRef = React.useRef<HTMLDivElement>(null)

  const handleSliderChange = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return

    const sliderRect = sliderRef.current.getBoundingClientRect()
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
    const offsetX = clientX - sliderRect.left
    const percentage = Math.max(0, Math.min(1, offsetX / sliderRect.width))

    const newValue = min + percentage * (max - min)
    const steppedValue = Math.round(newValue / step) * step
    const newValues = [steppedValue]

    if (value === undefined) {
      setInternalValue(newValues)
    }

    onValueChange?.(newValues)
  }

  return (
    <div
      className={`relative h-2 w-full bg-gray-200 rounded-full ${className || ''}`}
      ref={sliderRef}
      onClick={handleSliderChange}
      {...props}
    >
      <motion.div
        className="absolute h-full bg-blue-500 rounded-full"
        style={{
          width: `${((actualValue[0] - min) / (max - min)) * 100}%`,
        }}
      />
      <motion.div
        className="absolute w-5 h-5 bg-white rounded-full border-2 border-blue-500 -top-1.5 -ml-2.5"
        style={{
          left: `${((actualValue[0] - min) / (max - min)) * 100}%`,
        }}
        drag="x"
        dragConstraints={sliderRef}
        dragElastic={0}
        dragMomentum={false}
        onDrag={(event, info) => {
          if (!sliderRef.current) return

          const sliderRect = sliderRef.current.getBoundingClientRect()
          const percentage = Math.max(0, Math.min(1, (info.point.x - sliderRect.left) / sliderRect.width))

          const newValue = min + percentage * (max - min)
          const steppedValue = Math.round(newValue / step) * step
          const newValues = [steppedValue]

          if (value === undefined) {
            setInternalValue(newValues)
          }

          onValueChange?.(newValues)
        }}
      />
    </div>
  )
}

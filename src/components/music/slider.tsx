import React, { useState, useEffect, useRef } from 'react'

interface CustomSliderProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export const Slider: React.FC<CustomSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    updateValue(event)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      updateValue(event)
    }
  }

  const updateValue = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect()
      const percentage = (event.clientX - rect.left) / rect.width
      const newValue = Math.min(Math.max(percentage * (max - min) + min, min), max)
      onChange(newValue)
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging])

  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div 
      ref={sliderRef}
      className="relative w-full h-2 bg-gray-200 rounded-full cursor-pointer"
      onMouseDown={handleMouseDown}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      tabIndex={0}
    >
      <div 
        className="absolute h-full bg-blue-500 rounded-full"
        style={{ width: `${percentage}%` }}
      />
      <div 
        className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full -top-1 -mt-px"
        style={{ left: `calc(${percentage}% - 0.5rem)` }}
      />
    </div>
  )
}
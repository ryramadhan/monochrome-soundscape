import { useEffect, useState } from 'react'

const TRAIL = 10

export function MouseTrail() {
  const [enabled, setEnabled] = useState(false)
  const [trail, setTrail] = useState(() =>
    Array.from({ length: TRAIL }, () => ({ x: 0, y: 0 })),
  )

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine) and (hover: hover)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setEnabled(fine.matches && !reduce.matches)
    sync()
    fine.addEventListener('change', sync)
    reduce.addEventListener('change', sync)
    return () => {
      fine.removeEventListener('change', sync)
      reduce.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('custom-cursor-active')

    const onMove = (e: MouseEvent) => {
      setTrail((prev) => [
        { x: e.clientX, y: e.clientY },
        ...prev.slice(0, TRAIL - 1),
      ])
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100]"
    >
      {trail.map((p, i) => {
        const size = Math.max(3, 7 - i * 0.45)
        const opacity = 1 - i / (TRAIL + 1)
        return (
          <div
            key={i}
            className="pointer-events-none fixed rounded-full bg-white mix-blend-difference shadow-[0_0_14px_rgba(255,255,255,0.45)]"
            style={{
              left: p.x,
              top: p.y,
              width: size,
              height: size,
              opacity,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )
      })}
    </div>
  )
}

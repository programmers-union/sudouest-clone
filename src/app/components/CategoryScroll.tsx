'use client'
import { useRef } from 'react'
import Image from 'next/image'

export default function CategoryScroll() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -220, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 220, behavior: 'smooth' })
  }

  const items = [
    { title: "L'édito", bg: "linear-gradient(to right, #1b861e, #94e094)", icon: "/icons/editorial.svg" },
    { title: 'Enquêtes et reportages', bg: 'linear-gradient(to right, #ea580c, #fbbf24)', icon: '/icons/investigation.svg' },
    { title: 'Bonne humeur', bg: 'linear-gradient(to right, #8b5cf6, #a78bfa)', icon: '/icons/smile.svg' },
    { title: 'Premium', bg: 'linear-gradient(to right, #facc15, #fde047)', icon: '/icons/premium.svg' },
    { title: 'Reportages vidéo', bg: 'linear-gradient(to right, #2563eb, #60a5fa)', icon: '/icons/playbutton.svg' },
    { title: 'Edition du soir', bg: 'linear-gradient(to right, #4c1d95, #8b5cf6)', icon: '/icons/moon.svg' },
  ]

  return (
    <div className="position-relative px-5 py-3 bg-light">
      {/* Scroll Container */}
      <div
        className="d-flex overflow-hidden"
        ref={scrollRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="d-flex align-items-center rounded text-white me-3 px-3 py-2 flex-shrink-0"
            style={{
              background: item.bg,
              minWidth: '200px',
              height: '70px',
              position: 'relative',
            }}
          >
            <strong className="z-2">{item.title}</strong>
            <Image
              src={item.icon}
              alt=""
              width={50}
              height={50}
              className="position-absolute end-0 bottom-0 opacity-25"
            />
          </div>
        ))}
      </div>

      {/* Left Scroll Button */}
      <button
        className="btn btn-white border position-absolute top-50 start-0 translate-middle-y shadow-sm"
        style={{ zIndex: 10 }}
        onClick={scrollLeft}
      >
        &lsaquo;
      </button>

      {/* Right Scroll Button */}
      <button
        className="btn btn-white border position-absolute top-50 end-0 translate-middle-y shadow-sm"
        style={{ zIndex: 10 }}
        onClick={scrollRight}
      >
        &rsaquo;
      </button>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Add your images here when ready ──────────────────
import chennaiOrtho1 from '../../assets/creatives/co1.jpg'
import chennaiOrtho2 from '../../assets/creatives/co2.jpg'
import chennaiOrtho3 from '../../assets/creatives/co3.jpg'
import acer1 from '../../assets/creatives/ac1.jpg'
import acer2 from '../../assets/creatives/ac2.jpg'
import srmDx1 from '../../assets/creatives/sdx1.jpg'
import srmDx2 from '../../assets/creatives/sdx2.jpg'

const clients = [
  {
    name: 'Chennai Ortho',
    images: [
      { src: chennaiOrtho1, alt: 'Chennai Ortho campaign creative 1' },
      { src: chennaiOrtho2, alt: 'Chennai Ortho campaign creative 2' },
      { src: chennaiOrtho3, alt: 'Chennai Ortho campaign creative 3' },
    ],
  },
  {
    name: 'Acer',
    images: [
      { src: acer1, alt: 'Acer campaign creative 1' },
      { src: acer2, alt: 'Acer campaign creative 2' },
    ],
  },
  {
    name: 'SRM Dx',
    images: [
      { src: srmDx1, alt: 'SRM Dx campaign creative 1' },
      { src: srmDx2, alt: 'SRM Dx campaign creative 2' },
    ],
  },
]

// ── Lightbox ──────────────────────────────────────────
function Lightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl leading-none transition-colors"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}

// ── Masonry grid ──────────────────────────────────────
function MasonryGrid({ images, onImageClick }) {
  if (images.length === 0) {
    return (
      <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div
            key={i}
            className="bg-white/[0.04] border border-white/[0.07] rounded-xl aspect-square flex items-center justify-center"
          >
            <p className="font-light text-[.7rem] text-muted text-center px-3">
              Add image here
            </p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="columns-3 gap-3 max-sm:columns-2">
      {images.map((img, i) => (
        <div
          key={i}
          className="break-inside-avoid mb-3 overflow-hidden rounded-xl cursor-zoom-in group"
          onClick={() => onImageClick(img)}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full block transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────
export default function CreativesPage() {
  const [lightbox, setLightbox] = useState(null)
  const [activeClient, setActiveClient] = useState('All')

  const tabs = ['All', ...clients.map(c => c.name)]

  const filteredClients = activeClient === 'All'
    ? clients
    : clients.filter(c => c.name === activeClient)

  return (
    <div className="bg-[var(--color-bg)] min-h-screen text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-10 py-5 bg-[rgba(8,8,8,0.92)] backdrop-blur-xl border-b border-white/[0.06]">
        <Link
          to="/"
          className="font-light text-p3 text-muted flex items-center gap-2 hover:text-primarywhite transition-colors duration-200"
        >
          ← Back to portfolio
        </Link>
        <span className="font-light text-p3 text-muted">Social Media & Campaign Creatives</span>
      </nav>

      {/* Hero */}
      <div className="pt-[100px] pb-0 bg-gradient-to-b from-[rgba(180,80,0,0.1)] to-transparent">
        <div className="max-w-[1100px] mx-auto px-10 pt-16 pb-12">

          <div className="flex flex-wrap gap-2 mb-8">
            {['Visual Design', 'Adobe Photoshop', 'Adobe Illustrator', 'Xtracut · 2024–25'].map(tag => (
              <span
                key={tag}
                className="inline-flex items-center border border-white/[0.1] rounded-full px-3 py-1 font-light text-p3 text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-h2 text-primarywhite leading-[1] mb-4">
            Social Media &<br />
            <span className="text-[var(--color-amber)]">Campaign Creatives</span>
          </h1>

          <p className="font-light text-p2 text-muted leading-[1.75] max-w-[520px]">
            Campaign posters and social media creatives designed for real clients at Xtracut — Chennai Ortho, Acer, and SRM Dx.
          </p>

        </div>
      </div>

      {/* Client filter tabs */}
      <div className="sticky top-[73px] z-50 bg-[rgba(8,8,8,0.92)] backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto px-10">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveClient(tab)}
                className={`px-4 py-2 rounded-full font-light text-p3 whitespace-nowrap transition-all duration-200 ${
                  activeClient === tab
                    ? 'bg-[var(--color-amber)] text-black'
                    : 'text-muted hover:text-primarywhite hover:bg-white/[0.06]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-[1100px] mx-auto px-10 py-16">
        {filteredClients.map(client => (
          <div key={client.name} className="mb-20">

            {/* Client name */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-h3 text-primarywhite">{client.name}</h2>
              <div className="flex-1 h-px bg-white/[0.07]" />
              <span className="font-light text-[.75rem] text-muted">
                {client.images.length > 0 ? `${client.images.length} creatives` : 'images coming soon'}
              </span>
            </div>

            <MasonryGrid
              images={client.images}
              onImageClick={setLightbox}
            />

          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/[0.08] max-w-[1100px] mx-auto px-10 py-12 flex justify-between items-center flex-wrap gap-5">
        <div>
          <p className="font-light text-[.75rem] text-muted mb-1.5">View on Behance</p>
          <a
            href="https://www.behance.net/gallery/246548051/Social-Media-Campaign-Creatives"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-p2 text-[var(--color-amber)] hover:opacity-70 transition-opacity"
          >
            behance.net/gokulkrishnak ↗
          </a>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link to="/" className="btn-secondary">← Back to portfolio</Link>
          <a href="mailto:gokulkrishnak771@gmail.com" className="btn-primary">Work with me ↗</a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

    </div>
  )
}

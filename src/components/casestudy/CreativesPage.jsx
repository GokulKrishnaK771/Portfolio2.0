import { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Add your images here when ready ──────────────────
import img1 from '../../assets/creatives/co1.jpg'
import img2 from '../../assets/creatives/co2.jpg'
import img3 from '../../assets/creatives/co3.jpg'
import img4 from '../../assets/creatives/ac1.jpg'
import img5 from '../../assets/creatives/ac2.jpg'
import img6 from '../../assets/creatives/ac3.jpg'
import img7 from '../../assets/creatives/ac4.jpg'
import img8 from '../../assets/creatives/sdx1.jpg'
import img9 from '../../assets/creatives/sdx2.jpg'
import img10 from '../../assets/creatives/sdx3.jpg'
import img11 from '../../assets/creatives/ed1.jpg'
import img12 from '../../assets/creatives/ed4.jpg'
import img13 from '../../assets/creatives/ed5.jpg'
import img14 from '../../assets/creatives/sv1.jpg'
import img15 from '../../assets/creatives/ku1.jpg'
import img16 from '../../assets/creatives/mepz1.jpg'
import img17 from '../../assets/creatives/mepz2.jpg'

const images = [
  { src: img1, alt: 'Chennai Ortho' },
  { src: img2, alt: 'Chennai Ortho' },
  { src: img3, alt: 'Chennai Ortho' },
  { src: img4, alt: 'Acer' },
  { src: img5, alt: 'Acer' },
  { src: img6, alt: 'Acer' },
  { src: img7, alt: 'Acer' },
  { src: img8, alt: 'SRM DX' },
  { src: img9, alt: 'SRM DX' },
  { src: img10, alt: 'SRM DX' },
  { src: img11, alt: 'Eduverse' },
  { src: img12, alt: 'Eduverse' },
  { src: img13, alt: 'Eduverse' },
  { src: img14, alt: 'Study Vista' },
  { src: img15, alt: 'Karunya University' },
  { src: img16, alt: 'MEPZ' },
  { src: img17, alt: 'MEPZ' },
]

// ── Lightbox ──────────────────────────────────────────
function Lightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white/40 hover:text-white text-4xl leading-none transition-colors"
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

// ── Main page ─────────────────────────────────────────
export default function CreativesPage() {
  const [lightbox, setLightbox] = useState(null)

  const isEmpty = images.length === 0
  const placeholderHeights = ['h-48', 'h-64', 'h-56', 'h-72', 'h-44', 'h-60', 'h-52', 'h-68', 'h-48', 'h-56', 'h-64', 'h-44']

  return (
    <div className="bg-[var(--color-bg)] min-h-screen text-white">

      {/* Navbar */}
      {/* <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-10 py-5 bg-[rgba(8,8,8,0.92)] backdrop-blur-xl border-b border-white/[0.06]">
        <Link
          to="/"
          className="font-light text-p3 text-muted flex items-center gap-2 hover:text-primarywhite transition-colors duration-200"
        >
          ← Back to portfolio
        </Link>
        <span className="font-light text-p3 text-muted">Creatives</span>
      </nav> */}

      {/* Header */}
      <div className=" bg-gradient-to-b from-[rgba(180,80,0,0.1)] to-transparent">
        <div className="max-w-[1200px] mx-auto px-10 pt-16 pb-12">

          <div className="flex flex-wrap gap-2 mb-8">
            {['Visual Design', 'Adobe Photoshop', 'Adobe Illustrator', 'Xtracut · 2024–25'].map(tag => (
              <span key={tag} className="inline-flex items-center border border-white/[0.1] rounded-full px-3 py-1 font-light text-p3 text-muted">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <h1 className="font-display text-h2 text-primarywhite leading-[1] mb-4">
                Social Media &<br />
                <span className="text-[var(--color-amber)]">Campaign Creatives</span>
              </h1>
              <p className="font-light text-p2 text-muted leading-[1.75] max-w-[480px]">
                Campaign posters and social media creatives for Chennai Ortho, Acer, SRM Dx and many more - designed at Xtracut using Photoshop and Illustrator.
              </p>
            </div>
            {/* <a
              href="https://www.behance.net/gallery/246548051/Social-Media-Campaign-Creatives"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary self-start"
            >
              View on Behance ↗
            </a> */}
          </div>

        </div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-[1200px] mx-auto px-10 pb-20">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">

          {isEmpty
            ? placeholderHeights.map((h, i) => (
                <div
                  key={i}
                  className={`${h} bg-white/[0.04] border border-white/[0.07] rounded-xl flex items-center justify-center mb-3 break-inside-avoid`}
                >
                  <p className="font-light text-[.7rem] text-muted">image {i + 1}</p>
                </div>
              ))
            : images.map((img, i) => (
                <div
                  key={i}
                  className="break-inside-avoid mb-3 overflow-hidden rounded-xl cursor-zoom-in group"
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ))
          }

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/[0.08] max-w-[1200px] mx-auto px-10 py-12 flex justify-between items-center flex-wrap gap-5">
        {/* <div>
          <p className="font-light text-[.75rem] text-muted mb-1.5">View full project</p>
          <a
            href="https://www.behance.net/gallery/246548051/Social-Media-Campaign-Creatives"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white gap-3"
          >
            behance.net/gokulkrishnak ↗
          </a>
        </div> */}
        <div className="flex gap-3 flex-wrap">
          <Link to="/" className="btn-secondary">← Back to portfolio</Link>
          <a href="/#contact" className="btn-primary flex items-center justify-center">
              <span className=" text-p2 font-body">Let's Work</span>
              <img src="/arrow-slant.svg" alt="arrow-slant" />
            </a>
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

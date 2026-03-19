"use client"

export default function CriticalCSS() {
  return (
    <style jsx>{`
      /* Critical CSS for above-the-fold content */
      .hero-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
      }
      
      .hero-title {
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 700;
        line-height: 1.2;
      }
      
      .hero-button {
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        transition: all 0.2s ease;
      }
      
      /* Prevent layout shift */
      .image-container {
        aspect-ratio: 16/9;
        background: #f3f4f6;
      }
    `}</style>
  )
}

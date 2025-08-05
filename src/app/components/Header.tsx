// components/Header.js
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-bottom">
      {/* Top Bar */}
      <div className="d-flex justify-content-end align-items-center px-3 py-1 border-bottom small text-secondary bg-light width100">
        <div className="me-auto text-uppercase small-text fw-bold">SUDOUEST.FR</div>
        <div className="d-none d-md-flex gap-3 align-items-center">
          <a href="#" className='small-text'>JEUX</a>
          <a href="#" className='small-text'>LES NEWSLETTERS</a>
          <a href="#" className="text-dark bg-warning px-2 py-1 text-uppercase fw-bold small-text">S'ABONNER</a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container py-3">
        {/* Desktop View */}
        <div className="d-none d-md-flex justify-content-between align-items-center width100">
          {/* Left icons */}
          <div className="d-flex align-items-center gap-4">
            <div className="text-center">
              <div className="icon-size">☰</div>
              <div className="icon-name-size">Menu</div>
            </div>
            <div className="text-center">
              <div className="icon-size">🔍</div>
              <div className="icon-name-size">Rechercher</div>
            </div>
            <div className="text-center">
              <div className="icon-size fw-bold text-danger">TV7</div>
              <div className="icon-name-size">La chaîne</div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="logo">
            <Image src="/logo.png" alt="Sud Ouest" width={140} height={80} />
          </div>

          {/* Right icon */}
          <div className="text-center">
            <div className="fs-5">👤</div>
            <div className="small">S'identifier</div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="d-flex d-md-none justify-content-between align-items-center">
          <div className="d-flex gap-3 align-items-center">
            <div className="fs-4">☰</div>
            <div className="fs-4">🔍</div>
          </div>

          <div className="text-center">
            <Image src="/images/logo-footer.png" alt="Sud Ouest" width={100} height={50} />
          </div>

          <div className="fs-4">👤</div>
        </div>
      </div>

      {/* Bottom Category Bar */}
      <nav className="border-top border-bottom">
        <div className="container overflow-auto py-2">
          <div className="d-flex flex-nowrap align-items-center justify-content-center">
            <Link href="/" className="me-3 text-dark text-decoration-none">🏠</Link>
            <Link href="/business" className="me-3 text-dark fw-bold text-uppercase small-text">Business</Link>
            <Link href="/politics" className="me-3 text-dark text-uppercase small-text">Politics</Link>
            <Link href="/technology" className="me-3 text-dark text-uppercase small-text">Technology</Link>
            <Link href="/health" className="me-3 text-dark text-uppercase small-text">Health</Link>
            <Link href="/science" className="me-3 text-dark text-uppercase small-text">Science</Link>
            <Link href="/sports" className="me-3 text-dark text-uppercase small-text">Sports</Link>
            <Link href="/entertainment" className="me-3 text-dark text-uppercase small-text">Entertainment</Link>
            <Link href="/lifestyle" className="me-3 text-dark text-uppercase small-text">Lifestyle</Link>
            <Link href="/education" className="me-3 text-dark text-uppercase small-text">Education</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-30 pt-8">
        <a href="#">
          <img src="/GK.svg" alt="logo" />
        </a>
        <div style={{ display: 'flex', gap: '32px' }}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="font-body text-[2rem] text-secondary"
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
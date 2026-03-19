const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];


const Navbar = () => {
  return (
    <nav className="absolute w-full z-999">
      <div className="flex justify-center sm:justify-between items-center mx-4 md:mx-30 pt-8">
        <a href="#" className="">
          <svg height="37" width="80" fill="none" viewBox="0 0 80 37" xmlns="http://www.w3.org/2000/svg">
	<path d="M18.5281 18.528H37.0081C37.0081 28.752 28.7521 37.008 18.5281 37.008C8.25609 37.008 8.79765e-05 28.752 8.79765e-05 18.528C8.79765e-05 8.30399 8.25609 -5.72205e-06 18.5281 -5.72205e-06V18.528ZM60.7527 18.528L79.2807 37.008H42.2247V-5.72205e-06H79.2807L60.7527 18.528Z" fill="#FF9000"/>
</svg>
        </a>
        <div className="hidden sm:flex gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-h5 text-secondary"
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
              onMouseLeave={e => e.target.style.color = '#373737'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Navbar
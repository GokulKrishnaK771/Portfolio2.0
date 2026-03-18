function SocialIcon({ href, icon, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="{icon}Icons"
    >
      <img src={icon} alt={alt} className="social-icons" />
    </a>
  );
}

export default SocialIcon;

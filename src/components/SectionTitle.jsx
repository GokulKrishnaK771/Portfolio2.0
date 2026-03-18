const SectionTitle = ({title}) => {
  return (
    <div className="relative inline-block px-4 py-2">
      {/* Corner boxes */}
      <span className="absolute top-1 left-2 w-4 h-4 border-3 border-[var(--color-border-blue)] bg-[var(--color-text-primarywhite)]" />
      <span className="absolute top-1 right-2 w-4 h-4 border-3 border-[var(--color-border-blue)] bg-[var(--color-text-primarywhite)]" />
      <span className="absolute bottom-1 left-2 w-4 h-4 border-3 border-[var(--color-border-blue)] bg-[var(--color-text-primarywhite)]" />
      <span className="absolute bottom-1 right-2 w-4 h-4 border-3 border-[var(--color-border-blue)] bg-[var(--color-text-primarywhite)]" />

      <span className="section-title">{title}</span>
    </div>
  )
}

export default SectionTitle
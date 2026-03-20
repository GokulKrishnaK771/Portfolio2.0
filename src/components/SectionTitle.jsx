const SectionTitle = ({title}) => {
  return (
    <div className="relative px-2 py-2 w-fit max-w-full border-3 border-[var(--color-border-blue)]">
      {/* Corner boxes */}
      <span className="absolute -top-1.5 -left-1.5 w-4 h-4 border-3 border-[var(--color-border-blue)] bg-[var(--color-text-primarywhite)]" />
      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 border-3 border-[var(--color-border-blue)] bg-[var(--color-text-primarywhite)]" />
      <span className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-3 border-[var(--color-border-blue)] bg-[var(--color-text-primarywhite)]" />
      <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-3 border-[var(--color-border-blue)] bg-[var(--color-text-primarywhite)]" />

      <span className="section-title">{title}</span>
    </div>
  )
}

export default SectionTitle
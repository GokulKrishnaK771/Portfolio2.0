const OpportunityPill = ({ className = "" }) => {
    return (
        <span className={`relative flex h-3 w-3 ${className}`}>
      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#00FF29] opacity-70 animate-ping"></span>

      {/* Solid center dot */}
      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FF29]"></span>
    </span>
    )
}

export default OpportunityPill
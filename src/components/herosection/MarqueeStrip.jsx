export default function MarqueeStrip({
  items = [],
  speed = "", // seconds
}) {

  const sequence = items.flatMap((text) => [text, "star"]);

  return (
    <div className="w-full overflow-hidden  py-4">
      
      {/* Animation Styles (scoped here) */}
      <style>
        {`
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .marquee-track {
            width: max-content;
            animation: marqueeScroll ${speed}s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="marquee-track flex items-center gap-10">
        {[...sequence, ...sequence, ...sequence].map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            {item === "star" ? (
              <Star />
            ) : (
              <span className="text-white uppercase tracking-[0.35em] font-display text-[1.5rem] lg:text-[2rem]">
                {item}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.401 20.2003C24.0221 21.9096 22.1947 24.0809 20.9288 36.7393C20.8865 37.1551 20.2859 37.1551 20.2358 36.7393C18.7296 24.0809 16.8614 21.9558 6.44962 20.2003C6.03338 20.1541 6.02768 19.5535 6.44305 19.5073C16.822 17.7979 18.6498 15.6728 19.9157 3.01442C19.9579 2.59863 20.5585 2.59863 20.6087 3.01442C22.1149 15.6728 23.9826 17.7517 34.3944 19.5073C34.7645 19.5535 34.7697 20.1079 34.401 20.2003Z" fill="white"/>
</svg>

  );
}

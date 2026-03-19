import MarqueeStrip from "./herosection/MarqueeStrip"

const MarqueeScroll = () => {
    return (
        <div className="z-10">
            <MarqueeStrip
                items={["INTERACTIVE", "ENGAGING", "RESPONSIVE", "DYNAMIC", "ACCESSIBLE"]}
                speed={50}
            />
        </div>
    )
}

export default MarqueeScroll
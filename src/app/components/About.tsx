import FadeUp from './FadeUp'

export default function About() {
  return (
    <section className="px-6 md:px-14 py-24 md:py-32" style={{ background: '#f7f5fc' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#aaa] mb-8">
              About
            </p>
            <p className="text-2xl md:text-3xl font-light text-[#0f0f0f] leading-[1.4]">
              Distilled started with a hunch: the most interesting conversations in AI were happening in side rooms and after-parties, not on stage.
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="md:pt-14">
            <p className="text-base text-[#777] font-light leading-relaxed mb-8">
              So we built the room. Founders, researchers, and operators who&apos;d rather spend an evening in real conversation than sit through another panel.
            </p>
            <p className="text-base text-[#777] font-light leading-relaxed">
              Zero slide decks. Maximum curiosity.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

import svgPaths from "./svg-4vmwm4gn6c";

function Home() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p1fdb9f00} fill="var(--fill-0, #FCFCFC)" id="Exclude" />
        </g>
      </svg>
    </div>
  );
}

function HomeSel() {
  return (
    <div className="bg-[#3f3f3f] box-border content-stretch flex gap-[8px] items-center px-[10px] py-[12px] relative rounded-[8px] shrink-0 w-[313px]" data-name="home sel">
      <Home />
      <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#fcfcfc] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="relative size-full" data-name="Menu">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[20px] py-0 relative size-full">
          <HomeSel />
        </div>
      </div>
    </div>
  );
}
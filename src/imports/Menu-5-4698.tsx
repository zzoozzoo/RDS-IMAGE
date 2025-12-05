import svgPaths from "./svg-ojrymcnbpn";

function Group() {
  return (
    <div className="absolute inset-[14.58%_16.21%]" data-name="Group">
      <div className="absolute inset-[-1.15%_-4.62%_-4.41%_-4.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p34592100} id="Path" stroke="var(--stroke-0, #B7B7B7)" strokeWidth="1.5" />
            <path d="M8.85927 12.7169V17.1945" id="Path_2" stroke="var(--stroke-0, #B7B7B7)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <Group />
    </div>
  );
}

export default function Menu() {
  return (
    <div className="relative size-full" data-name="Menu">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[12px] relative size-full">
          <Home />
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Home
          </p>
        </div>
      </div>
    </div>
  );
}
import svgPaths from "./svg-7ipnoxqy6n";

function EllipsisHorizontalExtraboldLight() {
  return (
    <div className="absolute inset-[44.37%_19.49%_44.38%_19.49%]" data-name="ellipsis-horizontal-extrabold-light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 3">
        <g id="ellipsis-horizontal-extrabold-light">
          <g id="Union">
            <path d={svgPaths.pa9e1d80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1ee71000} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p21b50300} fill="var(--fill-0, #616161)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function EllipsisHorizontal() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ellipsis-horizontal">
      <EllipsisHorizontalExtraboldLight />
    </div>
  );
}

function More() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[2px] relative rounded-[4px] shrink-0" data-name="More">
      <EllipsisHorizontal />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Group">
          <path d="M0 6H12" id="Path" stroke="var(--stroke-0, #616161)" strokeWidth="1.5" />
          <path d="M6 0V12" id="Path_2" stroke="var(--stroke-0, #616161)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function PlusBoldLight() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="plus-bold-light">
      <Group />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="plus">
      <PlusBoldLight />
    </div>
  );
}

function PlusSel() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[2px] relative rounded-[4px] shrink-0" data-name="Plus sel">
      <Plus />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon">
      <More />
      <PlusSel />
    </div>
  );
}

function Sel() {
  return (
    <div className="basis-0 bg-[#1f1f1f] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="SEL">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pl-[10px] pr-[4px] py-[4px] relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px relative shrink-0 text-[#616161] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            CATEGORIES
          </p>
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default function Title() {
  return (
    <div className="relative size-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[20px] py-0 relative size-full">
          <Sel />
        </div>
      </div>
    </div>
  );
}
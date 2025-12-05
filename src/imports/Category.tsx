import svgPaths from "./svg-7rjyzlldpo";

function ChevronUpExtraboldLight() {
  return (
    <div className="absolute contents inset-[34.03%_18.07%_34.03%_18.05%]" data-name="chevron-up-extrabold-light">
      <div className="absolute inset-[34.03%_18.07%_34.03%_18.05%]" data-name="Path">
        <div className="absolute inset-[-22.14%_-5.53%_-11.07%_-5.53%]" style={{ "--stroke-0": "rgba(183, 183, 183, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
            <path d={svgPaths.p2690fbc0} id="Path" stroke="var(--stroke-0, #B7B7B7)" strokeWidth="2.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-up">
      <ChevronUpExtraboldLight />
    </div>
  );
}

function InputDropdown() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-full" data-name="Input / Dropdown">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[32px] items-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Categories
          </p>
          <ChevronUp />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#111111] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Topics
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Categories
          </p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group">
          <path d="M0 7.3335H14.6667" id="Path" stroke="var(--stroke-0, #B7B7B7)" strokeWidth="1.5" />
          <path d="M7.33333 0.00016275V14.6668" id="Path_2" stroke="var(--stroke-0, #B7B7B7)" strokeWidth="1.5" />
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
    <div className="relative shrink-0 size-[22px]" data-name="plus">
      <PlusBoldLight />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#111111] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <Plus />
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            New Category
          </p>
        </div>
      </div>
    </div>
  );
}

function Dropped() {
  return (
    <div className="bg-[#111111] box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_6px_20px_-6px_rgba(0,0,0,0.6)] shrink-0 w-full" data-name="Dropped">
      <Frame1 />
      <Frame />
      <Frame2 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[421px]" data-name="Input">
      <InputDropdown />
      <Dropped />
    </div>
  );
}

export default function Category() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Category">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Category
      </p>
      <Input />
    </div>
  );
}
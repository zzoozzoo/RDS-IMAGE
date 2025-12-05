import svgPaths from "./svg-tp347zyzeg";

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-0 relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Create a luxury red handbag
          </p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[2px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d="M0 9.37505H20" id="Path" stroke="var(--stroke-0, #B7B7B7)" strokeWidth="2.4" />
          <path d="M9.37505 0V20" id="Path_2" stroke="var(--stroke-0, #B7B7B7)" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Plus() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="plus">
      <Group />
    </div>
  );
}

function Touch() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Touch">
      <Plus />
    </div>
  );
}

function PaperPlane() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="paper-plane">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="paper-plane">
          <path clipRule="evenodd" d={svgPaths.p14332200} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Fill-5" />
        </g>
      </svg>
    </div>
  );
}

function Generate() {
  return (
    <div className="bg-[#1f1f1f] overflow-clip relative rounded-[100px] shrink-0 size-[48px]" data-name="Generate">
      <PaperPlane />
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex gap-[593px] items-center relative shrink-0 w-full" data-name="Btn">
      <Touch />
      <Generate />
    </div>
  );
}

export default function Input() {
  return (
    <div className="bg-[#111111] relative rounded-[28px] size-full" data-name="Input">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-end overflow-clip pb-[12px] pt-[24px] px-[12px] relative size-full">
          <Text />
          <Btn />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.2)]" />
    </div>
  );
}
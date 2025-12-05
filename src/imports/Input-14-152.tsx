function Txet() {
  return (
    <div className="relative shrink-0 w-full" data-name="Txet">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[12px] py-0 relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Describe your image
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

function Plus1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Plus">
      <Plus />
    </div>
  );
}

export default function Input() {
  return (
    <div className="bg-[#111111] relative rounded-[28px] size-full" data-name="Input">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[12px] pt-[24px] px-[12px] relative size-full">
          <Txet />
          <Plus1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.2)]" />
    </div>
  );
}
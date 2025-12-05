import svgPaths from "./svg-vq5p5mvcc6";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
      <div className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#555555] text-[16px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Click to upload</p>
        <p>{`image `}</p>
      </div>
    </div>
  );
}

function ImageResult() {
  return (
    <div className="bg-[#111111] relative shrink-0 size-[176px]" data-name="Image Result">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[31px] py-[49px] relative rounded-[inherit] size-[176px]">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-dashed inset-0 pointer-events-none shadow-[4px_4px_16px_-4px_rgba(0,0,0,0.6)]" />
    </div>
  );
}

function ChevronDownExtraboldLight() {
  return (
    <div className="absolute contents inset-[34.03%_18.06%]" data-name="chevron-down-extrabold-light">
      <div className="absolute inset-[34.03%_18.06%]" data-name="Path">
        <div className="absolute inset-[-11.07%_-5.53%_-22.14%_-5.53%]" style={{ "--stroke-0": "rgba(183, 183, 183, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
            <path d={svgPaths.p15f70480} id="Path" stroke="var(--stroke-0, #B7B7B7)" strokeWidth="2.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <ChevronDownExtraboldLight />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-[421px]" data-name="Input">
      <div className="box-border content-stretch flex gap-[32px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[421px]">
        <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Categories
        </p>
        <ChevronDown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Category">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Category
      </p>
      <Input />
    </div>
  );
}

function ChevronDownExtraboldLight1() {
  return (
    <div className="absolute contents inset-[34.03%_18.06%]" data-name="chevron-down-extrabold-light">
      <div className="absolute inset-[34.03%_18.06%]" data-name="Path">
        <div className="absolute inset-[-11.07%_-5.53%_-22.14%_-5.53%]" style={{ "--stroke-0": "rgba(183, 183, 183, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
            <path d={svgPaths.p15f70480} id="Path" stroke="var(--stroke-0, #B7B7B7)" strokeWidth="2.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <ChevronDownExtraboldLight1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-[421px]" data-name="Input">
      <div className="box-border content-stretch flex gap-[32px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[421px]">
        <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          🎟️ Voucher
        </p>
        <ChevronDown1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubCategory() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Sub category">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sub Category
      </p>
      <Input1 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="List 2">
      <Category />
      <SubCategory />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0 w-[633px]" data-name="List">
      <ImageResult />
      <List2 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#555555] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ex. Voucher, Gourmet
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Name">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Name
      </p>
      <Input2 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#555555] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ex. 電子票券, 現金禮券, 外送平台
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Tags">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tags
      </p>
      <Input3 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full" data-name="List">
      <Name />
      <Tags />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="List">
      <List />
      <List1 />
    </div>
  );
}

function Cancel() {
  return (
    <div className="basis-0 bg-[#1f1f1f] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Cancel">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[15px] relative w-full">
          <p className="basis-0 font-['SF_Pro:Bold',sans-serif] font-bold grow leading-[30px] min-h-px min-w-px relative shrink-0 text-[#efefef] text-[20px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <div className="absolute bottom-0 left-[-4.71%] right-[-4.71%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <g id="Frame 4">
            <path d={svgPaths.p345b85a0} id="Path" stroke="var(--stroke-0, #111111)" strokeWidth="2.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconText() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="icon + text">
      <Frame />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[#111111] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save
      </p>
    </div>
  );
}

function Save() {
  return (
    <div className="bg-[#20fe7b] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[24px] py-[15px] relative rounded-[8px] shrink-0 w-[421px]" data-name="Save">
      <IconText />
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Btn">
      <Cancel />
      <Save />
    </div>
  );
}

export default function AddImagePopup() {
  return (
    <div className="bg-[#111111] relative rounded-[28px] size-full" data-name="Add image Popup">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start overflow-clip pb-[44px] pt-[32px] px-[40px] relative size-full">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] relative shrink-0 text-[#fcfcfc] text-[35px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Save Asset
          </p>
          <List3 />
          <Btn />
        </div>
      </div>
    </div>
  );
}
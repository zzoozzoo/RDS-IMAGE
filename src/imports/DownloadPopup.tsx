import svgPaths from "./svg-39itwdpxap";
import imgImageResult from "figma:asset/c912f80d57def8945955d4e9a272f5c913df29c2.png";

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
          280p
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
        Resolution
      </p>
      <Input />
    </div>
  );
}

function Btn() {
  return <div className="absolute bg-white right-[2px] rounded-[500px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_3px_8px_0px_rgba(0,0,0,0.15),0px_3px_1px_0px_rgba(0,0,0,0.06)] size-[24px] top-1/2 translate-y-[-50%]" data-name="Btn" />;
}

function SwitchRrr() {
  return (
    <div className="bg-[#399fff] h-[28px] overflow-clip relative rounded-[500px] shrink-0 w-[48px]" data-name="Switch RRR">
      <Btn />
    </div>
  );
}

function Radio() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-center px-0 py-[10px] relative shrink-0 w-[416px]" data-name="Radio">
      <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Remove background
      </p>
      <SwitchRrr />
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[421px]" data-name="Background">
      <Radio />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[176px] items-end relative shrink-0 w-full" data-name="List">
      <Category />
      <Background />
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

function Group() {
  return (
    <div className="absolute left-0 size-[18px] top-0">
      <div className="absolute bottom-[-6.66%] left-[-6.67%] right-[-6.67%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <g id="Group 39">
            <path d={svgPaths.pd7c1d40} id="Vector" stroke="var(--stroke-0, #111111)" strokeMiterlimit="10" strokeWidth="2.4" />
            <path d="M10.2 0V12.1678" id="Vector_2" stroke="var(--stroke-0, #111111)" strokeMiterlimit="10" strokeWidth="2.4" />
            <path d={svgPaths.p15069280} id="Vector_3" stroke="var(--stroke-0, #111111)" strokeMiterlimit="10" strokeWidth="2.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Down() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="down">
      <Group />
    </div>
  );
}

function IconText() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="icon + text">
      <Down />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[#111111] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Download
      </p>
    </div>
  );
}

function Download() {
  return (
    <div className="bg-[#399fff] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[24px] py-[15px] relative rounded-[8px] shrink-0 w-[421px]" data-name="Download">
      <IconText />
    </div>
  );
}

function Btn1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Btn">
      <Cancel />
      <Download />
    </div>
  );
}

function ImageResult() {
  return (
    <div className="absolute left-[40px] size-[176px] top-[113px]" data-name="Image Result">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageResult} />
    </div>
  );
}

export default function DownloadPopup() {
  return (
    <div className="bg-[#111111] relative rounded-[28px] size-full" data-name="Download Popup">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start overflow-clip pb-[44px] pt-[32px] px-[40px] relative size-full">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] min-w-full relative shrink-0 text-[#fcfcfc] text-[35px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Download setting
          </p>
          <List />
          <Btn1 />
          <ImageResult />
        </div>
      </div>
    </div>
  );
}
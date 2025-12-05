import svgPaths from "./svg-ichv7upvnv";
import imgImage from "figma:asset/be7dd9fb586b232ca6880ab5c9795ab832be673c.png";

function Group() {
  return (
    <div className="absolute inset-[23.74%]" data-name="Group">
      <div className="absolute inset-[-7.21%_-7.22%_-7.21%_-7.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group">
            <path d={svgPaths.p11114800} id="Path" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p362e8420} id="Path_2" stroke="var(--stroke-0, #111111)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TimesBoldLight() {
  return (
    <div className="absolute contents inset-[23.74%]" data-name="times-bold-light">
      <Group />
    </div>
  );
}

function Times() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="times">
      <TimesBoldLight />
    </div>
  );
}

function ImageDel() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.1)] box-border content-stretch flex items-center p-[4px] right-[4px] rounded-[100px] top-[4px]" data-name="Image Del">
      <Times />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[14px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[14px] size-full" src={imgImage} />
      <ImageDel />
    </div>
  );
}

function ImageRef() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Image / ref">
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pl-[12px] pr-0 py-0 relative shrink-0" data-name="Image">
      {[...Array(2).keys()].map((_, i) => (
        <ImageRef key={i} />
      ))}
    </div>
  );
}

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

function Group1() {
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
      <Group1 />
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Btn">
      <Touch />
      <Generate />
    </div>
  );
}

export default function Input() {
  return (
    <div className="bg-[#111111] relative rounded-[28px] size-full" data-name="Input">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[12px] pt-[24px] px-[12px] relative size-full">
          <Image1 />
          <Text />
          <Btn />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.2)]" />
    </div>
  );
}
import svgPaths from "./svg-gr7ubup17t";

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
    <div className="absolute bottom-[11px] left-[11px] overflow-clip size-[48px]" data-name="Touch">
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

function Plus1() {
  return (
    <div className="absolute bg-[#1f1f1f] bottom-[11px] overflow-clip right-[11px] rounded-[100px] size-[48px]" data-name="Plus">
      <PaperPlane />
    </div>
  );
}

export default function Input() {
  return (
    <div className="bg-[#111111] border border-[#555555] border-solid overflow-clip relative rounded-[28px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.2)] size-full" data-name="Input">
      <Touch />
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[24px] left-[23px] text-[#fcfcfc] text-[18px] top-[23px] w-[665px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create a luxury red handbag
      </p>
      <Plus1 />
    </div>
  );
}
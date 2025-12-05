import svgPaths from "./svg-s97118qlwv";

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

export default function Generate() {
  return (
    <div className="bg-[#1f1f1f] overflow-clip relative rounded-[100px] size-full" data-name="Generate">
      <PaperPlane />
    </div>
  );
}
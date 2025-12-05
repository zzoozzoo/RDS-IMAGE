import svgPaths from "./svg-4pks7q3vgs";

function Frame() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute bottom-0 left-[-4.24%] right-[-4.24%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
          <g id="Frame 4">
            <path d={svgPaths.p2059d400} id="Path" stroke="var(--stroke-0, #1F1F1F)" strokeWidth="2.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Save() {
  return (
    <div className="absolute left-1/2 size-[30px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="save">
      <Frame />
    </div>
  );
}

export default function ActionButton() {
  return (
    <div className="bg-[#efefef] overflow-clip relative rounded-[100px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] size-full" data-name="Action button">
      <Save />
    </div>
  );
}
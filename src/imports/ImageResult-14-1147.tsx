import svgPaths from "./svg-0d64t34m46";
import imgImageResultDefault from "figma:asset/c912f80d57def8945955d4e9a272f5c913df29c2.png";

function ImageResultDefault() {
  return (
    <div className="absolute blur-sm filter left-[-39px] size-[378px] top-[-39px]" data-name="Image Result / Default">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImageResultDefault} />
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
      </div>
    </div>
  );
}

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

function ActionButton() {
  return (
    <div className="absolute bg-[#fcfcfc] left-[72px] overflow-clip rounded-[100px] size-[60px] top-[120px]" data-name="Action button">
      <Save />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]">
      <div className="absolute bottom-[-6%] left-[-6%] right-[-6%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
          <g id="Group 39">
            <path d={svgPaths.p27335c40} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeMiterlimit="10" strokeWidth="2.4" />
            <path d="M11.2 0V13.5197" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeMiterlimit="10" strokeWidth="2.4" />
            <path d={svgPaths.p1bd573c0} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeMiterlimit="10" strokeWidth="2.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Download() {
  return (
    <div className="absolute left-1/2 size-[30px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="download">
      <Group />
    </div>
  );
}

function ActionButton1() {
  return (
    <div className="absolute bg-[#fcfcfc] left-[168px] overflow-clip rounded-[100px] size-[60px] top-[120px]" data-name="Action button">
      <Download />
    </div>
  );
}

export default function ImageResult() {
  return (
    <div className="bg-white relative shadow-[0px_4px_20px_-8px_#000000] size-full" data-name="Image Result">
      <ImageResultDefault />
      <ActionButton />
      <ActionButton1 />
    </div>
  );
}
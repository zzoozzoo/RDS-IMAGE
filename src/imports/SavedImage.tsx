import svgPaths from "./svg-dxfmr4ksp1";
import imgSavedImage from "figma:asset/08ae4304fb3b4c7f6eed5dbf1fd1ff6d51780d86.png";

function SavedImage() {
  return (
    <div className="absolute blur-[3px] filter left-[-27px] size-[215px] top-[-27px]" data-name="Saved image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgSavedImage} />
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative size-full" data-name="Group">
      <div className="absolute inset-[-5.12%_-19.64%_-7.24%_-19.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 20">
          <g id="Group">
            <path d={svgPaths.pc613700} id="Rectangle 2017" stroke="var(--stroke-0, #1F1F1F)" strokeWidth="1.8" />
            <path d="M5.48333 4.19166L0.9 4.19166" id="Line 30" stroke="var(--stroke-0, #1F1F1F)" strokeWidth="1.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PenExtraboldLight() {
  return (
    <div className="absolute contents inset-[14.17%_14.21%_7.46%_7.42%]" data-name="pen-extrabold-light">
      <div className="absolute flex inset-[14.17%_14.21%_7.46%_7.42%] items-center justify-center">
        <div className="flex-none h-[17.583px] rotate-[45deg] w-[4.583px]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Pen() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="pen">
      <PenExtraboldLight />
    </div>
  );
}

function BtnSaved() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex items-center p-[8px] relative rounded-[100px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Btn Saved">
      <Pen />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[15.49%_14.6%_15.49%_14.56%]" data-name="Group">
      <div className="absolute bottom-[-6.52%] left-0 right-0 top-[-6.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
          <g id="Group">
            <g id="Group_2">
              <path d="M0 3.02507H14.1667" id="Path" stroke="var(--stroke-0, #1F1F1F)" strokeWidth="1.8" />
              <path d={svgPaths.p29106d20} id="Path_2" stroke="var(--stroke-0, #1F1F1F)" strokeWidth="1.8" />
              <path d="M5.59214 5.8583V11.5249" id="Path_3" stroke="var(--stroke-0, #1F1F1F)" strokeWidth="1.8" />
              <path d="M8.57493 5.8583V11.5249" id="Path_4" stroke="var(--stroke-0, #1F1F1F)" strokeWidth="1.8" />
            </g>
            <path d={svgPaths.p37d16680} id="Path_5" stroke="var(--stroke-0, #1F1F1F)" strokeWidth="1.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TrashExtraboldLight() {
  return (
    <div className="absolute contents inset-[15.49%_14.6%_15.49%_14.56%]" data-name="trash-extrabold-light">
      <Group1 />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trash">
      <TrashExtraboldLight />
    </div>
  );
}

function BtnSaved1() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Btn Saved">
      <Trash />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute aspect-[19/19] bottom-[16.67%] left-[3.33px] top-[16.67%]">
      <div className="absolute bottom-[-6.75%] left-[-6.75%] right-[-6.75%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
          <g id="Group 39">
            <path d={svgPaths.p2b0c2500} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeMiterlimit="10" strokeWidth="1.8" />
            <path d="M7.56667 0V9.01317" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeMiterlimit="10" strokeWidth="1.8" />
            <path d={svgPaths.p2109bf00} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeMiterlimit="10" strokeWidth="1.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="download">
      <Group2 />
    </div>
  );
}

function BtnSaved2() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Btn Saved">
      <Download />
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-1/2 top-[calc(50%-1px)] translate-x-[-50%] translate-y-[-50%]" data-name="Btn">
      <BtnSaved />
      <BtnSaved1 />
      <BtnSaved2 />
    </div>
  );
}

export default function SavedImage1() {
  return (
    <div className="relative size-full" data-name="Saved image">
      <SavedImage />
      <Btn />
    </div>
  );
}
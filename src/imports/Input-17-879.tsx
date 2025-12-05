import svgPaths from "./svg-x7l3aunjze";

function Group() {
  return (
    <div className="absolute inset-[23.74%]" data-name="Group">
      <div className="absolute inset-[-7.21%_-7.22%_-7.22%_-7.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group">
            <path d={svgPaths.p11114800} id="Path" stroke="var(--stroke-0, #616161)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p362e8420} id="Path_2" stroke="var(--stroke-0, #616161)" strokeLinejoin="round" strokeWidth="1.5" />
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

function X() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex items-center p-[5px] relative rounded-[100px] shrink-0" data-name="x">
      <Times />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex gap-[6px] items-center justify-center pl-[12px] pr-[4px] py-[6px] relative rounded-[100px] shrink-0" data-name="Tag">
      <p className="font-['SF_Pro:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        速食快餐
      </p>
      <X />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[23.74%]" data-name="Group">
      <div className="absolute inset-[-7.21%_-7.22%_-7.22%_-7.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group">
            <path d={svgPaths.p11114800} id="Path" stroke="var(--stroke-0, #616161)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p362e8420} id="Path_2" stroke="var(--stroke-0, #616161)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TimesBoldLight1() {
  return (
    <div className="absolute contents inset-[23.74%]" data-name="times-bold-light">
      <Group1 />
    </div>
  );
}

function Times1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="times">
      <TimesBoldLight1 />
    </div>
  );
}

function X1() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex items-center p-[5px] relative rounded-[100px] shrink-0" data-name="x">
      <Times1 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex gap-[6px] items-center justify-center pl-[12px] pr-[4px] py-[6px] relative rounded-[100px] shrink-0" data-name="Tag">
      <p className="font-['SF_Pro:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        漢堡
      </p>
      <X1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[23.74%]" data-name="Group">
      <div className="absolute inset-[-7.21%_-7.22%_-7.22%_-7.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group">
            <path d={svgPaths.p11114800} id="Path" stroke="var(--stroke-0, #616161)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p362e8420} id="Path_2" stroke="var(--stroke-0, #616161)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TimesBoldLight2() {
  return (
    <div className="absolute contents inset-[23.74%]" data-name="times-bold-light">
      <Group2 />
    </div>
  );
}

function Times2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="times">
      <TimesBoldLight2 />
    </div>
  );
}

function X2() {
  return (
    <div className="bg-[#1f1f1f] box-border content-stretch flex items-center p-[5px] relative rounded-[100px] shrink-0" data-name="x">
      <Times2 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex gap-[6px] items-center justify-center pl-[12px] pr-[4px] py-[6px] relative rounded-[100px] shrink-0" data-name="Tag">
      <p className="font-['SF_Pro:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{` 電子票券`}</p>
      <X2 />
    </div>
  );
}

export default function Input() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] size-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-center flex flex-wrap gap-[10px] items-center overflow-clip px-[16px] py-[12px] relative size-full">
          <Tag />
          <Tag1 />
          <Tag2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
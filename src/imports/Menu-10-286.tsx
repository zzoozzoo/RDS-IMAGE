function Num() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function TwHover() {
  return (
    <div className="bg-[#1f1f1f] relative rounded-[8px] shrink-0 w-full" data-name="TW_Hover">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[32px] items-center px-[10px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🇹🇼 TW
          </p>
          <Num />
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="relative size-full" data-name="Menu">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[20px] py-0 relative size-full">
          <TwHover />
        </div>
      </div>
    </div>
  );
}
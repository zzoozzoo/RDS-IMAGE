import svgPaths from "./svg-z404axlriz";

function Group() {
  return (
    <div className="absolute inset-[16.67%_15.21%_15.21%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5.87%_-4.15%_-4.15%_-5.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <g id="Group">
            <path d={svgPaths.p2f219980} id="Path" stroke="var(--stroke-0, #555555)" strokeWidth="2.4" />
            <circle cx="9.02038" cy="9.02038" id="Oval" r="7.82037" stroke="var(--stroke-0, #555555)" strokeWidth="2.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SearchExtraboldLight() {
  return (
    <div className="absolute contents inset-[16.67%_15.21%_15.21%_16.67%]" data-name="search-extrabold-light">
      <Group />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute right-0 size-[30px] top-1/2 translate-y-[-50%]" data-name="search">
      <SearchExtraboldLight />
    </div>
  );
}

function Search1() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Search">
      <div className="absolute bg-[#303030] bottom-0 h-px left-0 w-[293px]" data-name="Line" />
      <Search />
    </div>
  );
}

function Search2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Search">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[30px] py-0 relative w-full">
          <Search1 />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p1fdb9f00} fill="var(--fill-0, #FCFCFC)" id="Exclude" />
        </g>
      </svg>
    </div>
  );
}

function HomeSel() {
  return (
    <div className="bg-[#3f3f3f] box-border content-stretch flex gap-[8px] items-center px-[10px] py-[12px] relative rounded-[8px] shrink-0 w-[313px]" data-name="home sel">
      <Home />
      <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#fcfcfc] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
    </div>
  );
}

function Home1() {
  return (
    <div className="box-border content-stretch flex items-center px-[20px] py-0 relative shrink-0 w-[353px]" data-name="Home">
      <HomeSel />
    </div>
  );
}

function Title() {
  return (
    <div className="box-border content-stretch flex items-center px-[30px] py-[6px] relative shrink-0 w-[353px]" data-name="Title">
      <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px relative shrink-0 text-[#616161] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TOPICS
      </p>
    </div>
  );
}

function Num() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function Tw() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-center px-[30px] py-[12px] relative shrink-0 w-[353px]" data-name="TW">
      <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        🇹🇼 TW
      </p>
      <Num />
    </div>
  );
}

function Num1() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function Th() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-center px-[30px] py-[12px] relative shrink-0 w-[353px]" data-name="TH">
      <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        🇹🇭 TH
      </p>
      <Num1 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="List">
      <Tw />
      <Th />
    </div>
  );
}

function Topics() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Topics">
      <Title />
      <List />
    </div>
  );
}

function Title1() {
  return (
    <div className="box-border content-stretch flex items-center px-[30px] py-[6px] relative shrink-0 w-[353px]" data-name="Title">
      <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px relative shrink-0 text-[#616161] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CATEGORIES
      </p>
    </div>
  );
}

function Num2() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🎟️ Voucher
          </p>
          <Num2 />
        </div>
      </div>
    </div>
  );
}

function Num3() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum1() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`💄 Beauty & Skincare`}</p>
          <Num3 />
        </div>
      </div>
    </div>
  );
}

function Num4() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum2() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🫧 Fragrance
          </p>
          <Num4 />
        </div>
      </div>
    </div>
  );
}

function Num5() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum3() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🍰 Dessert Baking
          </p>
          <Num5 />
        </div>
      </div>
    </div>
  );
}

function Num6() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum4() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🍵 Food and Tea
          </p>
          <Num6 />
        </div>
      </div>
    </div>
  );
}

function Num7() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum5() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🛋️ Home life
          </p>
          <Num7 />
        </div>
      </div>
    </div>
  );
}

function Num8() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum6() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            💍 Jewelry, bags, watches ...
          </p>
          <Num8 />
        </div>
      </div>
    </div>
  );
}

function Num9() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum7() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🪔 Indoor fragrance
          </p>
          <Num9 />
        </div>
      </div>
    </div>
  );
}

function Num10() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum8() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🍼 Mother and baby
          </p>
          <Num10 />
        </div>
      </div>
    </div>
  );
}

function Num11() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum9() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🖥️ 3C home appliances
          </p>
          <Num11 />
        </div>
      </div>
    </div>
  );
}

function Num12() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum10() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            👗 International Fashion
          </p>
          <Num12 />
        </div>
      </div>
    </div>
  );
}

function Num13() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum11() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            💐 Preserved Bouquet
          </p>
          <Num13 />
        </div>
      </div>
    </div>
  );
}

function Num14() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum12() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🔮 Good fortune
          </p>
          <Num14 />
        </div>
      </div>
    </div>
  );
}

function Num15() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum13() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🏋🏻‍♀️ Health and wellness
          </p>
          <Num15 />
        </div>
      </div>
    </div>
  );
}

function Num16() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum14() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🏕️ Leisure sports
          </p>
          <Num16 />
        </div>
      </div>
    </div>
  );
}

function Num17() {
  return (
    <div className="bg-[#303030] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[3px] relative rounded-[100px] shrink-0" data-name="Num">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function CategoryNum15() {
  return (
    <div className="relative shrink-0 w-full" data-name="category {num}">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            🐶 Pets
          </p>
          <Num17 />
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="List">
      <CategoryNum />
      <CategoryNum1 />
      <CategoryNum2 />
      <CategoryNum3 />
      <CategoryNum4 />
      <CategoryNum5 />
      <CategoryNum6 />
      <CategoryNum7 />
      <CategoryNum8 />
      <CategoryNum9 />
      <CategoryNum10 />
      <CategoryNum11 />
      <CategoryNum12 />
      <CategoryNum13 />
      <CategoryNum14 />
      <CategoryNum15 />
    </div>
  );
}

function Categories() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Categories">
      <Title1 />
      <List1 />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Menu">
      <Home1 />
      <Topics />
      <Categories />
    </div>
  );
}

function Menu1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 top-[130px] w-[353px]" data-name="Menu">
      <Search2 />
      <Menu />
    </div>
  );
}

function Left() {
  return (
    <div className="absolute bg-[#111111] h-[1292px] left-0 overflow-clip top-0 w-[353px]" data-name="Left">
      <p className="absolute font-['LINE_Seed_App:Bold',sans-serif] leading-[44px] left-[30px] not-italic text-[40px] text-white top-[40px] tracking-[-0.5px] w-[293px]">RDS</p>
      <Menu1 />
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

function Plus1() {
  return (
    <div className="absolute bottom-[12px] left-[12px] overflow-clip size-[48px]" data-name="Plus">
      <Plus />
    </div>
  );
}

function Dash() {
  return <div className="absolute bg-[#fcfcfc] h-[20px] left-[24px] top-[26px] w-px" data-name="dash" />;
}

function Input() {
  return (
    <div className="bg-[#111111] h-[120px] relative rounded-[28px] shrink-0 w-[713px]" data-name="Input">
      <div className="h-[120px] overflow-clip relative rounded-[inherit] w-[713px]">
        <Plus1 />
        <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#b7b7b7] text-[18px] top-[24px] w-[665px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Describe your image
        </p>
        <Dash />
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 top-[calc(50%-40.5px)] translate-x-[-50%] translate-y-[-50%] w-[713px]" data-name="Input">
      <p className="font-['LINE_Seed_App:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[36px] text-center text-white w-[min-content]">What will you create?</p>
      <Input />
    </div>
  );
}

function Right() {
  return (
    <div className="absolute bg-[#111111] h-[1292px] left-[calc(25%+3px)] overflow-clip top-0 w-[1077px]" data-name="Right">
      <Input1 />
    </div>
  );
}

export default function HomeDefault() {
  return (
    <div className="bg-black relative size-full" data-name="Home / Default">
      <Left />
      <Right />
    </div>
  );
}
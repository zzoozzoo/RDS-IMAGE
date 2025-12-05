import svgPaths from "./svg-oii4iqvwbo";
import imgImageResultDefault from "figma:asset/c912f80d57def8945955d4e9a272f5c913df29c2.png";
import imgImageResult from "figma:asset/b339640573b26640b0031e43f186518df8dd01d6.png";
import imgImageResult1 from "figma:asset/522288b58ed1b7ac9544aa86311e10b4394424c3.png";

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
          <path d={svgPaths.p258f900} fill="var(--fill-0, #FCFCFC)" id="Exclude" />
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

function Image() {
  return <div className="absolute h-[300px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[920px]" data-name="Image 4" />;
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-0 relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Create a burger
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
    <div className="content-stretch flex gap-[593px] items-center relative shrink-0 w-full" data-name="Btn">
      <Touch />
      <Generate />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#111111] left-1/2 rounded-[28px] top-[1112px] translate-x-[-50%] w-[713px]" data-name="Input">
      <div className="box-border content-stretch flex flex-col gap-[12px] items-end overflow-clip pb-[12px] pt-[24px] px-[12px] relative rounded-[inherit] w-[713px]">
        <Text />
        <Btn />
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

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

function Group2() {
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
      <Group2 />
    </div>
  );
}

function ActionButton1() {
  return (
    <div className="absolute bg-[#fcfcfc] left-[169px] overflow-clip rounded-[100px] size-[60px] top-[120px]" data-name="Action button">
      <Download />
    </div>
  );
}

function ImageResult() {
  return (
    <div className="bg-white overflow-clip relative shadow-[0px_4px_20px_-8px_#000000] shrink-0 size-[300px]" data-name="Image Result">
      <ImageResultDefault />
      <ActionButton />
      <ActionButton1 />
    </div>
  );
}

function ImageResult1() {
  return (
    <div className="relative shrink-0 size-[300px]" data-name="Image Result">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageResult} />
    </div>
  );
}

function ImageResult2() {
  return (
    <div className="relative shrink-0 size-[300px]" data-name="Image Result">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageResult1} />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Image 5">
      <ImageResult />
      <ImageResult1 />
      <ImageResult2 />
    </div>
  );
}

function Right() {
  return (
    <div className="absolute bg-[#111111] h-[1292px] left-[calc(25%+3px)] overflow-clip top-0 w-[1077px]" data-name="Right">
      <Image />
      <Input />
      <Image1 />
    </div>
  );
}

function Dimmed() {
  return <div className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.5)] h-[1292px] left-0 top-0 w-[1440px]" data-name="Dimmed" />;
}

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

function Input1() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-[421px]" data-name="Input">
      <div className="box-border content-stretch flex gap-[32px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[421px]">
        <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Categories
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
        Category
      </p>
      <Input1 />
    </div>
  );
}

function ChevronDownExtraboldLight1() {
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

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <ChevronDownExtraboldLight1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-[421px]" data-name="Input">
      <div className="box-border content-stretch flex gap-[32px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[421px]">
        <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          🎟️ Voucher
        </p>
        <ChevronDown1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubCategory() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Sub category">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sub Category
      </p>
      <Input2 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#555555] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ex. Voucher, Gourmet
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Name">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Name
      </p>
      <Input3 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['SF_Pro:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#555555] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ex. 電子票券, 現金禮券, 外送平台
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Tags">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tags
      </p>
      <Input4 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full" data-name="List">
      <Category />
      <SubCategory />
      <Name />
      <Tags />
    </div>
  );
}

function Cancel() {
  return (
    <div className="basis-0 bg-[#1f1f1f] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Cancel">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[64px] py-[15px] relative w-full">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[#efefef] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <div className="absolute bottom-0 left-[-4.71%] right-[-4.71%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <g id="Frame 4">
            <path d={svgPaths.p345b85a0} id="Path" stroke="var(--stroke-0, #111111)" strokeWidth="2.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="icon + text">
      <Frame1 />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[#111111] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save
      </p>
    </div>
  );
}

function Save1() {
  return (
    <div className="bg-[#20fe7b] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[170px] py-[15px] relative rounded-[8px] shrink-0 w-[421px]" data-name="Save">
      <IconText />
    </div>
  );
}

function Btn1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Btn">
      <Cancel />
      <Save1 />
    </div>
  );
}

function ImageResult3() {
  return (
    <div className="absolute left-[40px] size-[176px] top-[113px]" data-name="Image Result">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageResultDefault} />
    </div>
  );
}

function SavePopup() {
  return (
    <div className="absolute bg-[#111111] box-border content-stretch flex flex-col gap-[36px] items-start left-[calc(25%+185px)] overflow-clip pb-[44px] pt-[32px] px-[40px] rounded-[28px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[713px]" data-name="Save Popup">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] min-w-full relative shrink-0 text-[#fcfcfc] text-[35px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save Asset
      </p>
      <List2 />
      <Btn1 />
      <ImageResult3 />
    </div>
  );
}

export default function HomeSaveImagePopupDefault() {
  return (
    <div className="bg-black relative size-full" data-name="Home / Save image popup default">
      <Left />
      <Right />
      <Dimmed />
      <SavePopup />
    </div>
  );
}
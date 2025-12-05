import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import svgPaths from '../imports/svg-0x49kgccyb';
import tagSvgPaths from '../imports/svg-x7l3aunjze';

interface SaveImagePopupProps {
  imageUrl: string;
  onClose: () => void;
  onSave: (data: {
    category: string;
    subCategory: string;
    name: string;
    tags: string;
  }) => void;
}

const categories = [
  { label: '🎟️ Voucher', value: 'voucher' },
  { label: '💄 Beauty & Skincare', value: 'beauty' },
  { label: '🫧 Fragrance', value: 'fragrance' },
  { label: '🍰 Dessert Baking', value: 'dessert' },
  { label: '🍵 Food and Tea', value: 'food' },
  { label: '🛋️ Home life', value: 'home' },
  { label: '💍 Jewelry, bags, watches ...', value: 'jewelry' },
  { label: '🪔 Indoor fragrance', value: 'indoor-fragrance' },
  { label: '🍼 Mother and baby', value: 'mother-baby' },
  { label: '🖥️ 3C home appliances', value: '3c' },
  { label: '👗 International Fashion', value: 'fashion' },
  { label: '💐 Preserved Bouquet', value: 'bouquet' },
  { label: '🔮 Good fortune', value: 'fortune' },
  { label: '🏋🏻‍♀️ Health and wellness', value: 'health' },
  { label: '🏕️ Leisure sports', value: 'sports' },
  { label: ' Pets', value: 'pets' },
];

// Mock translation function - In production, this would call a real translation API
const mockTranslate = async (text: string): Promise<{ zh: string; th: string }> => {
  // Simulated translation - replace with real API call
  const translations: { [key: string]: { zh: string; th: string } } = {
    'voucher': { zh: '電子票券', th: 'บัตรกำนัล' },
    'gourmet': { zh: '美食', th: 'อาหารรสเลิศ' },
    'burger': { zh: '漢堡', th: 'เบอร์เกอร์' },
    'fast food': { zh: '速食快餐', th: 'อาหารจานด่วน' },
    'beauty': { zh: '美妝', th: 'ความงาม' },
    'skincare': { zh: '護膚', th: 'ผิวพรรณ' },
  };
  
  const lower = text.toLowerCase().trim();
  if (translations[lower]) {
    return translations[lower];
  }
  
  // Default mock translation for unknown words
  return {
    zh: `${text}_中文`,
    th: `${text}_ไทย`,
  };
};

export function SaveImagePopup({ imageUrl, onClose, onSave }: SaveImagePopupProps) {
  const [category, setCategory] = useState('Categories');
  const [subCategory, setSubCategory] = useState('🎟️ Voucher');
  const [name, setName] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
  
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const subCategoryDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false);
      }
      if (subCategoryDropdownRef.current && !subCategoryDropdownRef.current.contains(event.target as Node)) {
        setShowSubCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Auto-generate tags when name changes
  useEffect(() => {
    const generateTags = async () => {
      if (name.trim()) {
        const translation = await mockTranslate(name);
        setTags([translation.zh, translation.th]);
      } else {
        setTags([]);
      }
    };
    
    const timeoutId = setTimeout(generateTags, 500); // Debounce
    return () => clearTimeout(timeoutId);
  }, [name]);

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const addTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setTagInput('');
    }
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const handleSave = () => {
    onSave({
      category,
      subCategory,
      name,
      tags: tags.join(', '),
    });
    onClose();
  };

  return (
    <>
      {/* Dimmed Background */}
      <div 
        className="fixed inset-0 backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.5)] z-40"
        onClick={onClose}
      />
      
      {/* Save Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] rounded-[28px] z-50 w-[713px]">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start pb-[44px] pt-[32px] px-[40px] relative">
          <p 
            className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] relative shrink-0 text-[#fcfcfc] text-[35px] w-full" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Save Asset
          </p>
          
          {/* List 3 - Main Container */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            
            {/* List - Image + Category/SubCategory horizontal */}
            <div className="content-stretch flex gap-[36px] items-center relative shrink-0 w-[633px]">
              {/* Image Result */}
              <div className="relative shrink-0 size-[176px]">
                <img 
                  src={imageUrl} 
                  alt="" 
                  className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" 
                />
              </div>
              
              {/* List 2 - Category and SubCategory vertical */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
                {/* Category */}
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
                  <p 
                    className="font-['SF_Pro:Regular',sans-serif] h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Category
                  </p>
                  <div className="relative">
                    <button
                      onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                      className="bg-[#111111] rounded-[8px] relative shrink-0 w-[421px]"
                    >
                      <div className="box-border content-stretch flex gap-[32px] items-center px-[16px] py-[12px] relative w-[421px]">
                        <p 
                          className="basis-0 font-['SF_Pro:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px] text-left" 
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {category || 'Categories'}
                        </p>
                        <div className="relative shrink-0 size-[24px]">
                          {showCategoryDropdown ? (
                            <div className="absolute inset-[34.03%_18.07%_34.03%_18.05%]">
                              <div className="absolute inset-[-22.14%_-5.53%_-11.07%_-5.53%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
                                  <path d="M0.848534 9.36326L8.51463 1.69706L16.1808 9.36326" stroke="#B7B7B7" strokeWidth="2.4" />
                                </svg>
                              </div>
                            </div>
                          ) : (
                            <div className="absolute inset-[34.03%_18.06%]">
                              <div className="absolute inset-[-11.07%_-5.53%_-22.14%_-5.53%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
                                  <path d="M16.1807 0.848523L8.51463 8.51472L0.848534 0.848523" stroke="#B7B7B7" strokeWidth="2.4" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </button>
                    
                    {/* Category Dropdown */}
                    {showCategoryDropdown && (
                      <div className="bg-[#111111] box-border content-stretch flex flex-col items-start overflow-clip absolute top-full mt-1 rounded-[8px] shadow-[0px_6px_20px_-6px_rgba(0,0,0,0.6)] w-full z-10" ref={categoryDropdownRef}>
                        <div className={`${category === 'Topics' ? 'bg-[#2f2f2f]' : 'bg-[#111111] hover:bg-[#1f1f1f]'} relative shrink-0 w-full transition-colors`}>
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
                              <button
                                onClick={() => {
                                  setCategory('Topics');
                                  setShowCategoryDropdown(false);
                                }}
                                className="basis-0 font-['SF_Pro:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[18px] text-left"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                Topics
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className={`${category === 'Categories' ? 'bg-[#2f2f2f]' : 'bg-[#111111] hover:bg-[#1f1f1f]'} relative shrink-0 w-full transition-colors`}>
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
                              <button
                                onClick={() => {
                                  setCategory('Categories');
                                  setShowCategoryDropdown(false);
                                }}
                                className="basis-0 font-['SF_Pro:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[18px] text-left"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                Categories
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className={`${category === 'New Category' ? 'bg-[#2f2f2f]' : 'bg-[#111111] hover:bg-[#1f1f1f]'} relative shrink-0 w-full transition-colors`}>
                          <div className="flex flex-row items-center size-full">
                            <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
                              <div className="relative shrink-0 size-[22px]">
                                <div className="absolute inset-[16.67%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                    <g>
                                      <path d="M0 7.3335H14.6667" stroke="#B7B7B7" strokeWidth="1.5" />
                                      <path d="M7.33333 0.00016275V14.6668" stroke="#B7B7B7" strokeWidth="1.5" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  setCategory('New Category');
                                  setShowCategoryDropdown(false);
                                }}
                                className="font-['SF_Pro:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#b7b7b7] text-[18px] text-nowrap whitespace-pre text-left"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                New Category
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Sub Category */}
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
                  <p 
                    className="font-['SF_Pro:Regular',sans-serif] h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Sub Category
                  </p>
                  <div className="relative">
                    <button
                      onClick={() => setShowSubCategoryDropdown(!showSubCategoryDropdown)}
                      className="bg-[#111111] rounded-[8px] relative shrink-0 w-[421px]"
                    >
                      <div className="box-border content-stretch flex gap-[32px] items-center px-[16px] py-[12px] relative w-[421px]">
                        <p 
                          className="basis-0 font-['SF_Pro:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px] text-left" 
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {subCategory}
                        </p>
                        <div className="relative shrink-0 size-[24px]">
                          {showSubCategoryDropdown ? (
                            <div className="absolute inset-[34.03%_18.07%_34.03%_18.05%]">
                              <div className="absolute inset-[-22.14%_-5.53%_-11.07%_-5.53%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
                                  <path d="M0.848534 9.36326L8.51463 1.69706L16.1808 9.36326" stroke="#B7B7B7" strokeWidth="2.4" />
                                </svg>
                              </div>
                            </div>
                          ) : (
                            <div className="absolute inset-[34.03%_18.06%]">
                              <div className="absolute inset-[-11.07%_-5.53%_-22.14%_-5.53%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
                                  <path d="M16.1807 0.848523L8.51463 8.51472L0.848534 0.848523" stroke="#B7B7B7" strokeWidth="2.4" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </button>
                    
                    {/* Sub Category Dropdown */}
                    {showSubCategoryDropdown && (
                      <div className="absolute top-full mt-1 w-full bg-[#111111] rounded-[8px] shadow-[0px_6px_20px_-6px_rgba(0,0,0,0.6)] max-h-[300px] overflow-y-auto z-10" ref={subCategoryDropdownRef}>
                        {categories.map((cat) => (
                          <button
                            key={cat.value}
                            onClick={() => {
                              setSubCategory(cat.label);
                              setShowSubCategoryDropdown(false);
                            }}
                            className={`w-full text-left px-[16px] py-[12px] transition-colors ${
                              subCategory === cat.label ? 'bg-[#2f2f2f]' : 'bg-[#111111] hover:bg-[#1f1f1f]'
                            }`}
                          >
                            <p 
                              className="font-['SF_Pro:Regular',sans-serif] leading-[24px] text-[#b7b7b7] text-[18px]" 
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              {cat.label}
                            </p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* List 1 - Name and Tags full width vertical */}
            <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
              {/* Name */}
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <p 
                  className="font-['SF_Pro:Regular',sans-serif] h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Name
                </p>
                <div className="bg-[#111111] rounded-[8px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
                      <textarea
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="ex. Voucher, Gourmet"
                        className="w-full font-['SF_Pro:Regular',sans-serif] leading-[24px] text-[#fcfcfc] placeholder:text-[#555555] text-[18px] bg-transparent border-0 outline-none resize-none overflow-hidden break-words"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        rows={1}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement;
                          target.style.height = 'auto';
                          target.style.height = target.scrollHeight + 'px';
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>

              {/* Tags */}
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <p 
                  className="font-['SF_Pro:Regular',sans-serif] h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Tags
                </p>
                <div className="bg-[#111111] rounded-[8px] relative shrink-0 w-full min-h-[48px]">
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-center flex flex-wrap gap-[10px] items-center px-[16px] py-[12px] relative w-full">
                      {tags.length === 0 && !tagInput ? (
                        <p 
                          className="font-['SF_Pro:Regular',sans-serif] leading-[24px] text-[#555555] text-[18px]" 
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          ex. 電子票券, 現金禮券, 外送平台
                        </p>
                      ) : (
                        <>
                          {tags.map((tag, index) => (
                            <div key={index} className="bg-[#303030] box-border content-stretch flex gap-[6px] items-center justify-center pl-[12px] pr-[4px] py-[6px] relative rounded-[100px] shrink-0 max-w-full">
                              <p 
                                className="font-['SF_Pro:Regular',sans-serif] leading-[22px] relative text-[#fcfcfc] text-[16px] break-all overflow-hidden text-ellipsis" 
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                {tag}
                              </p>
                              <button
                                onClick={() => removeTag(index)}
                                className="bg-[#1f1f1f] box-border content-stretch flex items-center p-[5px] relative rounded-[100px] shrink-0"
                              >
                                <div className="relative shrink-0 size-[14px]">
                                  <div className="absolute inset-[23.74%]">
                                    <div className="absolute inset-[-7.21%_-7.22%_-7.22%_-7.21%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                                        <g>
                                          <path d={tagSvgPaths.p11114800} stroke="#616161" strokeLinejoin="round" strokeWidth="1.5" />
                                          <path d={tagSvgPaths.p362e8420} stroke="#616161" strokeLinejoin="round" strokeWidth="1.5" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          ))}
                          <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyDown={handleTagInputKeyDown}
                            placeholder="Add tag"
                            className="flex-1 min-w-[100px] font-['SF_Pro:Regular',sans-serif] leading-[24px] text-[#fcfcfc] placeholder:text-[#555555] text-[18px] bg-transparent border-0 outline-none"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Btn - Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              onClick={onClose}
              className="basis-0 bg-[#1f1f1f] grow min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-[#2f2f2f] transition-colors"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[15px] relative w-full">
                  <p 
                    className="basis-0 font-['SF_Pro:Bold',sans-serif] font-bold grow leading-[30px] min-h-px min-w-px relative shrink-0 text-[#efefef] text-[20px] text-center" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Cancel
                  </p>
                </div>
              </div>
            </button>
            
            <button
              onClick={handleSave}
              className="bg-[#20fe7b] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[15px] relative rounded-[8px] shrink-0 w-[421px] hover:bg-[#1ae66e] transition-colors"
            >
              <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                <div className="relative shrink-0 size-[18px]">
                  <div className="absolute bottom-0 left-[-4.71%] right-[-4.71%] top-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                      <g>
                        <path d={svgPaths.p345b85a0} stroke="#111111" strokeWidth="2.4" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p 
                  className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[#111111] text-[20px] text-nowrap whitespace-pre" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Save
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
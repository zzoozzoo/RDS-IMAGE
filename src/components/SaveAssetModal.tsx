import { useState, useEffect } from 'react';
import { ParentSection, ImageAsset } from '../types';
import svgPaths from "../imports/svg-eui8r3w2mf";
import { translateText } from '../utils/googleTranslate';

interface SaveAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  parentSections: ParentSection[];
  onSave: (asset: Omit<ImageAsset, 'id' | 'createdAt'>) => void;
  existingAsset?: ImageAsset;
}

export function SaveAssetModal({
  isOpen,
  onClose,
  imageUrl: initialImageUrl,
  parentSections,
  onSave,
  existingAsset
}: SaveAssetModalProps) {
  const [selectedParent, setSelectedParent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [imageName, setImageName] = useState('');
  const [tags, setTags] = useState({ zh_TW: [] as string[], th: [] as string[] });
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [isDragging, setIsDragging] = useState(false);

  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    setImageUrl(initialImageUrl);
  }, [initialImageUrl]);

  useEffect(() => {
    if (existingAsset) {
      setImageName(existingAsset.name);
      setTags(existingAsset.tags);
      setSelectedCategory(existingAsset.categoryId);
      
      // Find parent section
      const parent = parentSections.find(p => 
        p.categories.some(c => c.id === existingAsset.categoryId)
      );
      if (parent) setSelectedParent(parent.id);
    }
  }, [existingAsset, parentSections]);

  // Auto-generate tags when image name changes
  useEffect(() => {
    if (imageName && !existingAsset) {
      const generateTags = async () => {
        setIsTranslating(true);
        try {
          const [zhTag, thTag] = await Promise.all([
            translateText(imageName, 'zh-TW'),
            translateText(imageName, 'th')
          ]);

          setTags({
            zh_TW: [zhTag],
            th: [thTag]
          });
        } catch (error) {
          console.error('Error generating tags:', error);
        } finally {
          setIsTranslating(false);
        }
      };

      const timer = setTimeout(generateTags, 500);
      return () => clearTimeout(timer);
    }
  }, [imageName, existingAsset]);

  const handleSave = () => {
    if (!selectedCategory || !imageName || !imageUrl) return;

    onSave({
      name: imageName,
      url: imageUrl,
      categoryId: selectedCategory,
      tags
    });

    handleClose();
  };

  const handleClose = () => {
    setSelectedParent('');
    setSelectedCategory('');
    setImageName('');
    setTags({ zh_TW: [], th: [] });
    onClose();
  };

  const handleFileSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    if (!imageName) {
      setImageName(file.name.replace(/\.[^/.]+$/, '')); // Remove file extension
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  const categories = selectedParent 
    ? parentSections.find(p => p.id === selectedParent)?.categories || []
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="bg-[#111111] relative rounded-[28px] w-[713px] max-h-[90vh] overflow-y-auto">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start pb-[44px] pt-[32px] px-[40px]">
          {/* Header */}
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] relative shrink-0 text-[#fcfcfc] text-[35px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Save Asset
          </p>

          {/* List */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            {/* Image and Category Section */}
            <div className="content-stretch flex gap-[36px] items-center relative shrink-0 w-[633px]">
              {/* Image Result */}
              <label
                htmlFor="file-upload-modal"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className="bg-[#111111] relative shrink-0 size-[176px] cursor-pointer transition-colors"
              >
                <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[31px] py-[49px] relative rounded-[inherit] size-[176px]">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt="Preview" 
                      className="absolute inset-0 size-full object-cover"
                    />
                  ) : (
                    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
                      <div className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#555555] text-[16px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="mb-0">Click to upload</p>
                        <p>image</p>
                      </div>
                    </div>
                  )}
                </div>
                <div aria-hidden="true" className={`absolute border ${isDragging ? 'border-[#20fe7b]' : 'border-[#555555]'} border-dashed inset-0 pointer-events-none shadow-[4px_4px_16px_-4px_rgba(0,0,0,0.6)]`} />
                <input
                  id="file-upload-modal"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileSelect(file);
                  }}
                  className="hidden"
                />
              </label>

              {/* Category Dropdowns */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
                {/* Category (Parent Section) */}
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Category
                  </p>
                  <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-[421px]">
                    <div className="box-border content-stretch flex gap-[32px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[421px]">
                      <select
                        value={selectedParent}
                        onChange={(e) => {
                          setSelectedParent(e.target.value);
                          setSelectedCategory('');
                        }}
                        className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px] bg-transparent border-none outline-none appearance-none w-full"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <option value="" className="bg-[#111111]">Categories</option>
                        {parentSections.map((section) => (
                          <option key={section.id} value={section.id} className="bg-[#111111]">
                            {section.name}
                          </option>
                        ))}
                      </select>
                      <div className="relative shrink-0 size-[24px]">
                        <div className="absolute inset-[34.03%_18.06%]">
                          <div className="absolute inset-[-11.07%_-5.53%_-22.14%_-5.53%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
                              <path d={svgPaths.p15f70480} stroke="#B7B7B7" strokeWidth="2.4" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>

                {/* Sub Category */}
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Sub Category
                  </p>
                  <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-[421px]">
                    <div className="box-border content-stretch flex gap-[32px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[421px]">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        disabled={!selectedParent}
                        className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px] bg-transparent border-none outline-none appearance-none w-full disabled:opacity-50"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <option value="" className="bg-[#111111]">
                          {selectedParent ? 'Select Sub Category' : '🎟️ Voucher'}
                        </option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id} className="bg-[#111111]">
                            {category.emoji} {category.name}
                          </option>
                        ))}
                      </select>
                      <div className="relative shrink-0 size-[24px]">
                        <div className="absolute inset-[34.03%_18.06%]">
                          <div className="absolute inset-[-11.07%_-5.53%_-22.14%_-5.53%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
                              <path d={svgPaths.p15f70480} stroke="#B7B7B7" strokeWidth="2.4" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Name and Tags Section */}
            <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
              {/* Name Input */}
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Name
                </p>
                <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
                      <input
                        type="text"
                        value={imageName}
                        onChange={(e) => setImageName(e.target.value)}
                        placeholder="ex. Voucher, Gourmet"
                        className="basis-0 font-['SF_Pro:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] placeholder:text-[#555555] text-[18px] bg-transparent border-none outline-none w-full"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>

              {/* Tags Input ZH */}
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Tags (ZH-TW)
                </p>
                <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
                      <input
                        type="text"
                        value={tags.zh_TW.join(', ')}
                        onChange={(e) => setTags(prev => ({ ...prev, zh_TW: e.target.value.split(',').map(t => t.trim()) }))}
                        placeholder={isTranslating ? "Generating..." : "ex. 電子票券, 現金禮券"}
                        className="basis-0 font-['SF_Pro:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] placeholder:text-[#555555] text-[18px] bg-transparent border-none outline-none w-full"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>

              {/* Tags Input TH */}
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Tags (TH)
                </p>
                <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
                      <input
                        type="text"
                        value={tags.th.join(', ')}
                        onChange={(e) => setTags(prev => ({ ...prev, th: e.target.value.split(',').map(t => t.trim()) }))}
                        placeholder={isTranslating ? "Generating..." : "ex. บัตรกำนัล, คูปอง"}
                        className="basis-0 font-['SF_Pro:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] placeholder:text-[#555555] text-[18px] bg-transparent border-none outline-none w-full"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            {/* Cancel */}
            <button
              onClick={handleClose}
              className="basis-0 bg-[#1f1f1f] grow min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[15px] relative w-full">
                  <p className="basis-0 font-['SF_Pro:Bold',sans-serif] font-bold grow leading-[30px] min-h-px min-w-px relative shrink-0 text-[#efefef] text-[20px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Cancel
                  </p>
                </div>
              </div>
            </button>

            {/* Save */}
            <button
              onClick={handleSave}
              disabled={!selectedCategory || !imageName || !imageUrl}
              className="bg-[#20fe7b] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[24px] py-[15px] relative rounded-[8px] shrink-0 w-[421px] hover:bg-[#1ae66e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                <div className="relative shrink-0 size-[18px]">
                  <div className="absolute bottom-0 left-[-4.71%] right-[-4.71%] top-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                      <path d={svgPaths.p345b85a0} stroke="#111111" strokeWidth="2.4" />
                    </svg>
                  </div>
                </div>
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[#111111] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Save
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

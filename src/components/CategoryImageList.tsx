import { useState, useRef } from 'react';
import { useNavigate } from './useNavigate';
import { ImageAsset, Category } from '../types';
import { Edit, Trash2, Download } from 'lucide-react';

interface CategoryImageListProps {
  category: Category;
  images: ImageAsset[];
  onEditCategory: (categoryId: string, emoji?: string, name?: string) => void;
  onUploadImage: (file: File) => void;
  onEditImage: (image: ImageAsset) => void;
  onDownloadImage: (imageUrl: string, imageName: string) => void;
  onDeleteImage: (imageId: string) => void;
  onNavigateHome: () => void;
  onOpenSaveModal: () => void;
}

export function CategoryImageList({
  category,
  images,
  onEditCategory,
  onUploadImage,
  onEditImage,
  onDownloadImage,
  onDeleteImage,
  onNavigateHome,
  onOpenSaveModal
}: CategoryImageListProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative bg-[#111111] h-screen w-full overflow-y-auto">
      <div className="px-[30px] py-[40px] pb-[200px] relative">
        {/* Content Container - grows to fill available space */}
        <div className="w-full relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-[65px]">
            {/* Title */}
            <div className="flex gap-[12px] items-center">
              <h1 className="font-['SF_Pro:Bold',sans-serif] font-bold text-[35px] leading-[45px] text-white text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {category.emoji} {category.name}
              </h1>
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold text-[35px] leading-[45px] text-[#777777] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {images.length}
              </p>
            </div>

            {/* Add Image Button */}
            <button
              onClick={onOpenSaveModal}
              className="flex gap-[8px] items-center justify-end hover:opacity-80 transition-opacity"
            >
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-[8.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                    <g>
                      <path d="M0.000162721 7.81255H16.6668" stroke="#B7B7B7" strokeWidth="1.8" />
                      <path d="M7.81271 0V16.6667" stroke="#B7B7B7" strokeWidth="1.8" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[30px] text-[#b7b7b7] text-[22px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                Add Image 
              </p>
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[10px] gap-y-[32px]">
            {images.map((image) => (
              <div key={image.id} className="flex flex-col gap-[10px] items-start w-full">
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden group cursor-pointer">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none transition-transform duration-300 group-hover:scale-110">
                    <div className="absolute bg-white inset-0" />
                    <img alt="" className="absolute max-w-none object-center object-cover size-full" src={image.url} />
                  </div>
                  {/* Dimmed overlay with buttons on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[8px] items-center">
                      {/* Edit Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditImage(image);
                        }}
                        className="bg-[#fcfcfc] p-[8px] rounded-full shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] hover:bg-[#e8e8e8] transition-colors"
                      >
                        <Edit className="size-[20px] text-[#1f1f1f]" strokeWidth={1.8} />
                      </button>
                      {/* Delete Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteImage(image.id);
                        }}
                        className="bg-[#fcfcfc] p-[8px] rounded-full shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] hover:bg-[#e8e8e8] transition-colors"
                      >
                        <Trash2 className="size-[20px] text-[#1f1f1f]" strokeWidth={1.8} />
                      </button>
                      {/* Download Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDownloadImage(image.url, image.name);
                        }}
                        className="bg-[#fcfcfc] p-[8px] rounded-full shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] hover:bg-[#e8e8e8] transition-colors"
                      >
                        <Download className="size-[20px] text-[#1f1f1f]" strokeWidth={1.8} />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="flex flex-col gap-[4px] items-start w-full">
                  <p className="font-['SF_Pro:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#c8c8c8] w-full truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {image.name}
                  </p>
                  <p className="font-['SF_Pro:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#777777] w-full truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {image.tags.zh_TW[0] || ''}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Create Button - positioned relative to grid container */}
          <button
            onClick={onNavigateHome}
            className="fixed bottom-[60px] right-[60px] bg-[#20fe7b] rounded-full size-[100px] hover:bg-[#1ae66e] transition-colors flex items-center justify-center shadow-lg z-50"
          >
            <div className="size-[40px] flex items-center justify-center">
              <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <g>
                  <path d="M0 20H40" stroke="#111111" strokeWidth="6" />
                  <path d="M20 0V40" stroke="#111111" strokeWidth="6" />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onUploadImage(file);
            e.target.value = '';
          }
        }}
        className="hidden"
      />
    </div>
  );
}
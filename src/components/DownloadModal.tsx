import { useState, useEffect, useRef } from 'react';
import svgPaths from '../imports/svg-39itwdpxap';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageName: string;
}

export function DownloadModal({
  isOpen,
  onClose,
  imageUrl,
  imageName
}: DownloadModalProps) {
  const [resolution, setResolution] = useState<'200p' | '280p' | '1080p'>('280p');
  const [removeBackground, setRemoveBackground] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const resolutionOptions = ['200p', '280p', '1080p'] as const;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDownload = () => {
    // Create a canvas to download the image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      if (ctx) {
        // Draw white background if removeBackground is false
        if (!removeBackground) {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        ctx.drawImage(img, 0, 0);
        
        // Convert canvas to blob and download
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${imageName}_${resolution}${removeBackground ? '_transparent' : ''}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, 'image/png');
      }
      
      onClose();
    };
    
    img.onerror = () => {
      // Fallback: direct download
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `${imageName}_${resolution}${removeBackground ? '_transparent' : ''}.png`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    };
    
    img.src = imageUrl;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] rounded-[28px] z-50 w-[713px]">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start pb-[44px] pt-[32px] px-[40px] relative">
          <p 
            className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[45px] relative shrink-0 text-[#fcfcfc] text-[35px] w-full" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Download setting
          </p>

          {/* Image Preview + Settings */}
          <div className="flex gap-[36px] items-start w-full">
            {/* Image Preview */}
            <div className="relative shrink-0 size-[176px]">
              <img 
                src={imageUrl} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover object-center bg-white"
              />
            </div>

            {/* Settings */}
            <div className="content-stretch flex flex-col gap-[24px] flex-1 items-end relative">
              {/* Resolution */}
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <p 
                  className="font-['SF_Pro:Regular',sans-serif] h-[18px] leading-[18px] relative shrink-0 text-[#555555] text-[14px] w-full" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Resolution
                </p>
                <div className="bg-[#111111] relative rounded-[8px] shrink-0 w-full">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="box-border content-stretch flex gap-[32px] items-center px-[16px] py-[12px] relative rounded-[inherit] w-full"
                  >
                    <p 
                      className="basis-0 font-['SF_Pro:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px] text-left" 
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {resolution}
                    </p>
                    <div className="relative shrink-0 size-[24px]">
                      {isDropdownOpen ? (
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
                  </button>
                  <div className="absolute border border-[#555555] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-[4px] bg-[#111111] rounded-[8px] shadow-[0px_6px_20px_-6px_rgba(0,0,0,0.6)] overflow-hidden z-10" ref={dropdownRef}>
                      {resolutionOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setResolution(option);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-[16px] py-[12px] text-left font-['SF_Pro:Regular',sans-serif] leading-[24px] text-[#b7b7b7] text-[18px] transition-colors ${
                            resolution === option ? 'bg-[#2f2f2f]' : 'bg-[#111111] hover:bg-[#1f1f1f]'
                          }`}
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Remove Background Toggle */}
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-[32px] items-center px-0 py-[10px] relative shrink-0 w-full">
                  <p 
                    className="basis-0 font-['SF_Pro:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px]" 
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Remove background
                  </p>
                  <button
                    onClick={() => setRemoveBackground(!removeBackground)}
                    className={`h-[28px] overflow-clip relative rounded-[500px] shrink-0 w-[48px] transition-colors ${
                      removeBackground ? 'bg-[#399fff]' : 'bg-[#303030]'
                    }`}
                  >
                    <div 
                      className={`absolute bg-white right-[2px] rounded-[500px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_3px_8px_0px_rgba(0,0,0,0.15),0px_3px_1px_0px_rgba(0,0,0,0.06)] size-[24px] top-1/2 translate-y-[-50%] transition-transform ${
                        removeBackground ? 'translate-x-0' : 'translate-x-[-22px]'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="basis-0 bg-[#1f1f1f] grow min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-[#303030] transition-colors"
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

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="bg-[#399fff] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[24px] py-[15px] relative rounded-[8px] shrink-0 w-[421px] hover:bg-[#2a8eef] transition-colors"
            >
              <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                <div className="relative shrink-0 size-[18px]">
                  <div className="absolute left-0 size-[18px] top-0">
                    <div className="absolute bottom-[-6.66%] left-[-6.67%] right-[-6.67%] top-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
                        <g>
                          <path d={svgPaths.pd7c1d40} stroke="#111111" strokeMiterlimit="10" strokeWidth="2.4" />
                          <path d="M10.2 0V12.1678" stroke="#111111" strokeMiterlimit="10" strokeWidth="2.4" />
                          <path d={svgPaths.p15069280} stroke="#111111" strokeMiterlimit="10" strokeWidth="2.4" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <p 
                  className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[#111111] text-[20px] text-nowrap whitespace-pre" 
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Download
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
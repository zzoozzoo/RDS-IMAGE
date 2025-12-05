import { useState, useRef } from 'react';
import { Plus, Send, Check, Download } from 'lucide-react';
import { GeneratedImage } from '../types';
import { SaveImagePopup } from './SaveImagePopup';

interface HomeScreenProps {
  onSaveImage: (imageUrl: string, metadata: {
    category: string;
    subCategory: string;
    name: string;
    tags: string;
  }) => void;
  onDownloadImage: (imageUrl: string, imageName: string) => void;
}

export function HomeScreen({ onSaveImage, onDownloadImage }: HomeScreenProps) {
  const [prompt, setPrompt] = useState('');
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [savePopupImageUrl, setSavePopupImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (uploadedImages.length + files.length <= 10) {
      setUploadedImages([...uploadedImages, ...files]);
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim() && uploadedImages.length === 0) return;

    setIsGenerating(true);

    // Simulate API call to NanoBanana API
    // In real app, this would call the actual API
    setTimeout(() => {
      // Generate 3 mock images (white background, 1:1 ratio, centered object)
      const mockImages: GeneratedImage[] = [
        {
          id: '1',
          url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop',
          prompt: prompt
        },
        {
          id: '2',
          url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
          prompt: prompt
        },
        {
          id: '3',
          url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
          prompt: prompt
        }
      ];

      setGeneratedImages(mockImages);
      setIsGenerating(false);
      
      // Keep prompt for editing, only clear uploaded images
      setUploadedImages([]);
    }, 2000);
  };

  // Calculate dynamic positioning based on number of images
  const imagesPerRow = 7;
  const imageRows = uploadedImages.length > 0 ? Math.ceil(uploadedImages.length / imagesPerRow) : 0;
  const textTopPosition = uploadedImages.length > 0 
    ? 23 + (imageRows * 80) + ((imageRows - 1) * 10) + 8 
    : 23;
  const containerMinHeight = uploadedImages.length > 0
    ? textTopPosition + 24 + 11
    : 70;

  return (
    <div className="flex-1 bg-[#111111] h-screen overflow-y-auto relative">
      {generatedImages.length === 0 ? (
        // Initial State - Centered Input
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[713px]">
          <h1 className="font-line-seed text-[36px] leading-[normal] text-white text-center mb-[40px]">
            What will you create?
          </h1>

          <div className="bg-[#111111] border border-[#555555] border-solid rounded-[28px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.2)] overflow-clip relative">
            <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[12px] pt-[24px] px-[12px] relative w-full">
              
              {/* Images uploaded */}
              {uploadedImages.length > 0 && (
                <div className="box-border content-stretch flex gap-[10px] items-center pl-[12px] pr-0 py-0 relative shrink-0">
                  {uploadedImages.map((file, index) => (
                    <div key={index} className="relative shrink-0 size-[80px]">
                      <div className="absolute inset-0 overflow-clip rounded-[14px]">
                        <img
                          src={URL.createObjectURL(file)}
                          alt=""
                          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[14px] size-full"
                        />
                        {/* Delete Button */}
                        <button
                          onClick={() => {
                            setUploadedImages(uploadedImages.filter((_, i) => i !== index));
                          }}
                          className="absolute bg-[rgba(0,0,0,0.1)] backdrop-blur-sm box-border content-stretch flex items-center p-[4px] right-[4px] rounded-[100px] top-[4px] hover:bg-[rgba(0,0,0,0.2)] transition-colors"
                        >
                          <div className="relative shrink-0 size-[14px]">
                            <div className="absolute inset-[23.74%]">
                              <div className="absolute inset-[-7.21%_-7.22%_-7.21%_-7.21%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                                  <g>
                                    <path d="M0.75 0.75L7.5 7.5" stroke="#111111" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path d="M7.5 0.75L0.75 7.5" stroke="#111111" strokeLinejoin="round" strokeWidth="1.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Text Input - Always rendered, layout changes based on state */}
              <div className="relative shrink-0 w-full">
                <div className={uploadedImages.length === 0 && !prompt.trim() ? "size-full" : "flex flex-row items-center justify-center size-full"}>
                  <div className="box-border content-stretch flex items-center justify-center px-[12px] py-0 relative w-full">
                    <textarea
                      ref={textareaRef}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleGenerate();
                        }
                      }}
                      placeholder="Describe your image"
                      className="basis-0 grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px] bg-transparent resize-none focus:outline-none placeholder:text-[#b7b7b7] border-0 p-0 m-0"
                      style={{ fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif", fontVariationSettings: "'wdth' 100" }}
                      rows={1}
                    />
                  </div>
                </div>
              </div>

              {/* Buttons - Layout changes based on state */}
              {uploadedImages.length === 0 && !prompt.trim() ? (
                // State 1: Plus Button Only
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="overflow-clip relative shrink-0 size-[48px] rounded-[100px] hover:bg-[#1f1f1f] transition-colors"
                >
                  <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <div className="absolute inset-[2px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                          <path d="M0 9.37505H20" stroke="#B7B7B7" strokeWidth="2.4" />
                          <path d="M9.37505 0V20" stroke="#B7B7B7" strokeWidth="2.4" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>
              ) : (
                // State 2 & 3: Plus and Generate Buttons
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="overflow-clip relative shrink-0 size-[48px] rounded-[100px] hover:bg-[#1f1f1f] transition-colors"
                  >
                    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                      <div className="absolute inset-[2px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d="M0 9.37505H20" stroke="#B7B7B7" strokeWidth="2.4" />
                            <path d="M9.37505 0V20" stroke="#B7B7B7" strokeWidth="2.4" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="bg-[#1f1f1f] overflow-clip relative rounded-[100px] shrink-0 size-[48px] hover:bg-[#3f3f3f] transition-colors disabled:opacity-50"
                  >
                    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path 
                            clipRule="evenodd" 
                            d="M21.0873 11.0044L5.61025 3.2684C5.23325 3.0794 4.78425 3.1194 4.44525 3.3734C4.10725 3.6274 3.94225 4.0444 4.01825 4.4604L5.29225 11.3H5.94125H6.60225H13.4003V12.7H6.60225H5.94125H5.28125L4.01825 19.5394C3.94225 19.9564 4.10725 20.3724 4.44525 20.6264C4.64325 20.7744 4.87725 20.8504 5.11225 20.8504C5.28125 20.8504 5.45225 20.8114 5.61125 20.7324L21.0873 12.9954C21.4663 12.8054 21.7013 12.4244 21.7013 12.0004C21.7013 11.5754 21.4663 11.1944 21.0873 11.0044Z" 
                            fill="#FCFCFC" 
                            fillRule="evenodd" 
                          />
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              )}
              
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      ) : (
        // Generated State - Input at Bottom + Results
        <div className="flex flex-col h-full">
          {/* Generated Images */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="flex gap-[10px]">
              {generatedImages.map((image) => (
                <div
                  key={image.id}
                  className="relative w-[300px] h-[300px] bg-white overflow-hidden shadow-[0px_4px_20px_-8px_#000000]"
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  {/* Default Image - Scales to 110% on hover */}
                  <img
                    src={image.url}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 ${
                      hoveredImage === image.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Hover State - Blurred background */}
                  {hoveredImage === image.id && (
                    <>
                      {/* Blurred background layer */}
                      <div className="absolute blur-sm filter left-[-39px] size-[378px] top-[-39px] pointer-events-none">
                        <img
                          src={image.url}
                          alt=""
                          className="absolute max-w-none object-center object-cover size-full"
                        />
                        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
                      </div>
                      
                      {/* Action buttons - Positioned according to Figma */}
                      <button
                        onClick={() => setSavePopupImageUrl(image.url)}
                        className="absolute bg-[#efefef] left-[72px] rounded-[100px] size-[60px] top-[120px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] hover:bg-[#e0e0e0] transition-colors z-10"
                      >
                        <div className="absolute left-1/2 size-[30px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                          <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                            <div className="absolute bottom-0 left-[-4.24%] right-[-4.24%] top-0">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                                <g>
                                  <path d="M20.8485 4L8.62631 16.2222L0.848528 8.44444" stroke="#1F1F1F" strokeWidth="2.4" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => onDownloadImage(image.url, `generated-${image.id}`)}
                        className="absolute bg-[#efefef] left-[168px] rounded-[100px] size-[60px] top-[120px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] hover:bg-[#e0e0e0] transition-colors z-10"
                      >
                        <div className="absolute left-1/2 size-[30px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                          <div className="absolute left-[5px] size-[20px] top-[5px]">
                            <div className="absolute bottom-[-6%] left-[-6%] right-[-6%] top-0">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
                                <g>
                                  <path d="M16.9895 7.92763L11.2 13.7171L5.41053 7.92763" stroke="#1F1F1F" strokeMiterlimit="10" strokeWidth="2.4" />
                                  <path d="M11.2 0V13.5197" stroke="#1F1F1F" strokeMiterlimit="10" strokeWidth="2.4" />
                                  <path d="M21.2 15.4737V18C21.2 19.1046 20.3046 20 19.2 20H3.2C2.09543 20 1.2 19.1046 1.2 18V15.4737" stroke="#1F1F1F" strokeMiterlimit="10" strokeWidth="2.4" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Input at Bottom */}
          <div className="p-8 flex justify-center">
            <div className="w-[713px] bg-[#111111] border border-[#555555] border-solid rounded-[28px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.2)] overflow-clip relative">
              <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[12px] pt-[24px] px-[12px] relative w-full">
                {/* Text Input */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex items-center justify-center px-[12px] py-0 relative w-full">
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleGenerate();
                          }
                        }}
                        placeholder={generatedImages[0]?.prompt || "Describe your image"}
                        className="basis-0 grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#fcfcfc] text-[18px] bg-transparent resize-none focus:outline-none placeholder:text-[#fcfcfc] border-0 p-0 m-0"
                        style={{ fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif", fontVariationSettings: "'wdth' 100" }}
                        rows={1}
                      />
                    </div>
                  </div>
                </div>

                {/* Button Row - Plus and Generate */}
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="overflow-clip relative shrink-0 size-[48px] rounded-[100px] hover:bg-[#1f1f1f] transition-colors"
                  >
                    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                      <div className="absolute inset-[2px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d="M0 9.37505H20" stroke="#B7B7B7" strokeWidth="2.4" />
                            <path d="M9.37505 0V20" stroke="#B7B7B7" strokeWidth="2.4" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="bg-[#1f1f1f] overflow-clip relative rounded-[100px] shrink-0 size-[48px] hover:bg-[#3f3f3f] transition-colors disabled:opacity-50"
                  >
                    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path 
                            clipRule="evenodd" 
                            d="M21.0873 11.0044L5.61025 3.2684C5.23325 3.0794 4.78425 3.1194 4.44525 3.3734C4.10725 3.6274 3.94225 4.0444 4.01825 4.4604L5.29225 11.3H5.94125H6.60225H13.4003V12.7H6.60225H5.94125H5.28125L4.01825 19.5394C3.94225 19.9564 4.10725 20.3724 4.44525 20.6264C4.64325 20.7744 4.87725 20.8504 5.11225 20.8504C5.28125 20.8504 5.45225 20.8114 5.61125 20.7324L21.0873 12.9954C21.4663 12.8054 21.7013 12.4244 21.7013 12.0004C21.7013 11.5754 21.4663 11.1944 21.0873 11.0044Z" 
                            fill="#FCFCFC" 
                            fillRule="evenodd" 
                          />
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isGenerating && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-[24px] leading-[32px]">
            Generating images...
          </div>
        </div>
      )}

      {/* Save Image Popup */}
      {savePopupImageUrl && (
        <SaveImagePopup
          imageUrl={savePopupImageUrl}
          onClose={() => setSavePopupImageUrl(null)}
          onSave={(data) => {
            onSaveImage(savePopupImageUrl, data);
            setSavePopupImageUrl(null);
          }}
        />
      )}
    </div>
  );
}
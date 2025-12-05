import { useState } from 'react';
import { Home, Search, MoreVertical, Plus, Edit2, Trash2, Check, X } from 'lucide-react';
import { ParentSection, Category } from '../types';
import svgSelected from '../imports/svg-431c696l3j';
import svgDefault from '../imports/svg-s7m7jl6jz8';

interface SidebarProps {
  parentSections: ParentSection[];
  selectedView: 'home' | string;
  onViewChange: (view: string) => void;
  onAddParentSection: () => void;
  onEditParentSection: (id: string) => void;
  onDeleteParentSection: (id: string) => void;
  onAddCategory: (parentId: string, emoji: string, name: string) => void;
  onEditCategory: (categoryId: string) => void;
  onDeleteCategory: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Sidebar({
  parentSections,
  selectedView,
  onViewChange,
  onAddParentSection,
  onEditParentSection,
  onDeleteParentSection,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
  searchQuery,
  onSearchChange
}: SidebarProps) {
  const [hoveredParent, setHoveredParent] = useState<string | null>(null);
  const [selectedParent, setSelectedParent] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [addingCategoryTo, setAddingCategoryTo] = useState<string | null>(null);
  const [newCategoryEmoji, setNewCategoryEmoji] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojiCategories = [
    {
      name: 'Frequently Used',
      emojis: ['🎨', '📁', '🌟', '💼', '🎯', '📱', '💡', '🚀']
    },
    {
      name: 'Smileys',
      emojis: ['😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘']
    },
    {
      name: 'Objects',
      emojis: ['🎨', '📁', '📂', '📊', '📈', '📉', '💼', '📱', '💻', '⌨️', '🖥️', '🖨️', '📷', '📸', '🎥', '📹']
    },
    {
      name: 'Symbols',
      emojis: ['⭐', '🌟', '✨', '💫', '🔥', '💧', '💎', '🎯', '🎪', '🎭', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵']
    },
    {
      name: 'Food',
      emojis: ['🍎', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑']
    },
    {
      name: 'Activities',
      emojis: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏']
    }
  ];

  return (
    <div className="bg-[#111111] w-[353px] h-screen overflow-y-auto flex flex-col">
      {/* Logo */}
      <div className="px-[30px] pt-[40px] pb-[32px]">
        <h1 className="font-line-seed text-[40px] leading-[44px] tracking-[-0.5px] text-white">
          RDS
        </h1>
      </div>

      {/* Search */}
      <div className="px-[30px] pb-[32px]">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder=""
            className="w-full bg-transparent border-b border-[#303030] pb-3 pr-10 text-white text-[18px] leading-[24px] focus:outline-none focus:border-[#555555] placeholder:text-[#555555]"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px]">
            <Search className="w-5 h-5 text-[#555555]" strokeWidth={2.4} />
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1">
        {/* Home */}
        <div className="px-[20px] mb-[18px]">
          <button
            onClick={() => onViewChange('home')}
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
            className={`w-full flex items-center gap-[8px] px-[10px] py-[12px] rounded-[8px] transition-colors ${
              selectedView === 'home'
                ? 'bg-[#3f3f3f]'
                : isHomeHovered 
                ? 'bg-[#1f1f1f]' 
                : ''
            }`}
          >
            {/* Home Icon */}
            <div className="w-[24px] h-[24px] relative flex-shrink-0">
              {selectedView === 'home' ? (
                // Selected state - filled icon
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgSelected.p258f900} fill="#FCFCFC" />
                </svg>
              ) : (
                // Default and Hover state - outline icon
                <div className="absolute inset-[14.58%_16.21%]">
                  <div className="absolute inset-[-1.15%_-4.62%_-4.41%_-4.62%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgDefault.p34592100} stroke="#B7B7B7" strokeWidth="1.5" />
                      <path d="M8.85927 12.7169V17.1945" stroke="#B7B7B7" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <span className={`text-[18px] leading-[24px] ${
              selectedView === 'home' 
                ? 'text-[#fcfcfc]' 
                : isHomeHovered 
                ? 'text-[#b7b7b7]' 
                : 'text-[#b7b7b7]'
            }`}>
              Home
            </span>
          </button>
        </div>

        {/* Parent Sections */}
        {parentSections.map((section) => (
          <div key={section.id} className="mb-[18px]">
            {/* Section Title */}
            <div className="px-[20px]">
              <div
                className={`px-[10px] py-[6px] rounded-[8px] cursor-pointer transition-colors ${
                  selectedParent === section.id
                    ? 'bg-[#1f1f1f]'
                    : hoveredParent === section.id
                    ? 'bg-[#1f1f1f]'
                    : ''
                }`}
                onMouseEnter={() => setHoveredParent(section.id)}
                onMouseLeave={() => setHoveredParent(null)}
                onClick={() => setSelectedParent(selectedParent === section.id ? null : section.id)}
              >
                <div className="flex items-center justify-between min-h-[18px]">
                  <p className="text-[14px] leading-[18px] text-[#616161] font-['SF_Pro:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {section.name}
                  </p>
                  <div className={`flex items-center gap-[4px] transition-opacity ${
                    (hoveredParent === section.id || selectedParent === section.id) ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditParentSection(section.id);
                      }}
                      className="p-[2px] hover:bg-[#303030] rounded transition-colors"
                      title="Edit section"
                    >
                      <MoreVertical className="w-[18px] h-[18px] text-[#616161]" strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setAddingCategoryTo(section.id);
                      }}
                      className="p-[2px] hover:bg-[#303030] rounded transition-colors"
                      title="Add subcategory"
                    >
                      <Plus className="w-[18px] h-[18px] text-[#616161]" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories List */}
            <div className="flex flex-col gap-[2px] mt-[6px]">
              {/* New Category Input Form */}
              {addingCategoryTo === section.id && (
                <div className="px-[20px] mb-[2px]">
                  <div className="bg-[#1f1f1f] rounded-[8px] px-[10px] py-[12px] relative">
                    <div className="flex items-center gap-[8px] mb-[8px]">
                      {/* Emoji Picker Button */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                          className="w-[32px] h-[32px] bg-[#303030] hover:bg-[#3f3f3f] rounded text-[18px] leading-[24px] text-center text-white focus:outline-none transition-colors flex items-center justify-center"
                        >
                          {newCategoryEmoji || '🎨'}
                        </button>
                        
                        {/* Emoji Picker Popover */}
                        {showEmojiPicker && (
                          <>
                            {/* Backdrop */}
                            <div 
                              className="fixed inset-0 z-10"
                              onClick={() => setShowEmojiPicker(false)}
                            />
                            
                            {/* Emoji Picker */}
                            <div className="absolute left-0 top-[40px] z-20 bg-[#1f1f1f] border border-[#303030] rounded-[8px] shadow-lg w-[280px] max-h-[320px] overflow-y-auto">
                              {emojiCategories.map((category, idx) => (
                                <div key={idx} className="p-[12px] border-b border-[#303030] last:border-b-0">
                                  <p className="text-[12px] leading-[16px] text-[#777777] mb-[8px] font-['SF_Pro:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {category.name}
                                  </p>
                                  <div className="grid grid-cols-8 gap-[4px]">
                                    {category.emojis.map((emoji, emojiIdx) => (
                                      <button
                                        key={emojiIdx}
                                        type="button"
                                        onClick={() => {
                                          setNewCategoryEmoji(emoji);
                                          setShowEmojiPicker(false);
                                        }}
                                        className="w-[28px] h-[28px] flex items-center justify-center hover:bg-[#303030] rounded transition-colors text-[18px]"
                                      >
                                        {emoji}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && newCategoryName.trim()) {
                            onAddCategory(section.id, newCategoryEmoji, newCategoryName);
                            setAddingCategoryTo(null);
                            setNewCategoryEmoji('');
                            setNewCategoryName('');
                            setShowEmojiPicker(false);
                          }
                        }}
                        placeholder="Category name"
                        className="flex-1 bg-transparent border-b border-[#303030] pb-[4px] text-[18px] leading-[24px] text-[#b7b7b7] focus:outline-none focus:border-[#555555] placeholder:text-[#555555] font-['SF_Pro:Regular',sans-serif]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        autoFocus
                      />
                    </div>
                    <div className="flex items-center justify-end gap-[4px]">
                      <button
                        onClick={() => {
                          setAddingCategoryTo(null);
                          setNewCategoryEmoji('');
                          setNewCategoryName('');
                          setShowEmojiPicker(false);
                        }}
                        className="p-[6px] hover:bg-[#303030] rounded transition-colors"
                        title="Cancel"
                      >
                        <X className="w-[16px] h-[16px] text-[#777777]" strokeWidth={2} />
                      </button>
                      <button
                        onClick={() => {
                          if (newCategoryName.trim()) {
                            onAddCategory(section.id, newCategoryEmoji, newCategoryName);
                            setAddingCategoryTo(null);
                            setNewCategoryEmoji('');
                            setNewCategoryName('');
                            setShowEmojiPicker(false);
                          }
                        }}
                        className="p-[6px] hover:bg-[#303030] rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Save"
                        disabled={!newCategoryName.trim()}
                      >
                        <Check className="w-[16px] h-[16px] text-[#777777]" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {section.categories.map((category) => (
                <div
                  key={category.id}
                  className="px-[20px] group relative"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button
                    onClick={() => onViewChange(category.id)}
                    className={`w-full flex items-center px-[10px] py-[12px] rounded-[8px] transition-colors ${
                      selectedView === category.id 
                        ? 'bg-[#3f3f3f]' 
                        : hoveredCategory === category.id
                        ? 'bg-[#1f1f1f]'
                        : ''
                    }`}
                  >
                    <span 
                      className={`text-[18px] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-left font-['SF_Pro:Regular',sans-serif] ${
                        selectedView === category.id
                          ? 'text-[#fcfcfc]'
                          : 'text-[#b7b7b7]'
                      }`}
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {category.emoji} {category.name}
                    </span>
                    <div className="flex items-center gap-[32px] ml-[32px]">
                      <div className="bg-[#303030] px-[10px] py-[3px] rounded-full flex items-center justify-center">
                        <span 
                          className={`text-[14px] leading-[18px] font-['SF_Pro:Regular',sans-serif] ${
                            selectedView === category.id
                              ? 'text-[#c8c8c8]'
                              : 'text-[#777777]'
                          }`}
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {category.imageCount}
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
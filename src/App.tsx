import { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { HomeScreen } from './components/HomeScreen';
import { CategoryImageList } from './components/CategoryImageList';
import { SaveAssetModal } from './components/SaveAssetModal';
import { DownloadModal } from './components/DownloadModal';
import { DeleteConfirmModal } from './components/DeleteConfirmModal';
import { ParentSection, ImageAsset } from './types';

// Import TW category images
import imgBirthday from 'figma:asset/08ae4304fb3b4c7f6eed5dbf1fd1ff6d51780d86.png';
import imgForWomen from 'figma:asset/6309693aa4d155dd2bd9480a5c960f03ec10bdd7.png';
import imgForMen from 'figma:asset/80199c0b83b307444168f4a0616f1fd5183e3ccf.png';
import imgDrinks from 'figma:asset/c4f4e025778421f3ced382877e5c53e2777c6997.png';
import imgFriendship from 'figma:asset/a5544b02e6e4b23472b131178eca6a7c95267850.png';
import imgZodiac from 'figma:asset/573da14b950752560b32d215b71d0376bebec8ef.png';
import imgLover from 'figma:asset/578d252ea8e445097800b649e3b325d3b62369b3.png';
import imgNewborn from 'figma:asset/3e38169f3208b1834f44e4162aec691e14e3f49a.png';
import imgElders from 'figma:asset/39b243a336e51fa4b8dbe3ac4e33706e064d4fc2.png';
import imgEngraved from 'figma:asset/df30dfc113f75280de1e5ea88835d79fb0ef633a.png';
import imgHousewarming from 'figma:asset/918a61c4d6ab6d63f28bf811f5c401cb0b14f107.png';
import imgFastShipping from 'figma:asset/5db8fdc451539ae0ba1865a88b18cc6287c605bb.png';

export default function App() {
  const [selectedView, setSelectedView] = useState<'home' | string>('home');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal states
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ url: string; name: string } | null>(null);
  const [editingAsset, setEditingAsset] = useState<ImageAsset | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{
    type: 'category' | 'image' | 'parent';
    id: string;
    name: string;
  } | null>(null);

  // Data states
  const [parentSections, setParentSections] = useState<ParentSection[]>([
    {
      id: 'topics',
      name: 'TOPICS',
      categories: [
        { id: 'tw', name: 'TW', emoji: '🇹🇼', parentId: 'topics', imageCount: 12 },
        { id: 'th', name: 'TH', emoji: '🇹🇭', parentId: 'topics', imageCount: 0 }
      ]
    },
    {
      id: 'categories',
      name: 'CATEGORIES',
      categories: [
        { id: 'voucher', name: 'Voucher', emoji: '🎟️', parentId: 'categories', imageCount: 0 },
        { id: 'beauty', name: 'Beauty & Skincare', emoji: '💄', parentId: 'categories', imageCount: 0 },
        { id: 'fragrance', name: 'Fragrance', emoji: '🫧', parentId: 'categories', imageCount: 0 },
        { id: 'dessert', name: 'Dessert Baking', emoji: '🍰', parentId: 'categories', imageCount: 0 },
        { id: 'food-tea', name: 'Food and Tea', emoji: '🍵', parentId: 'categories', imageCount: 0 },
        { id: 'home-life', name: 'Home life', emoji: '🛋️', parentId: 'categories', imageCount: 0 },
        { id: 'jewelry', name: 'Jewelry, bags, watches ...', emoji: '💍', parentId: 'categories', imageCount: 0 },
        { id: 'indoor-fragrance', name: 'Indoor fragrance', emoji: '🪔', parentId: 'categories', imageCount: 0 },
        { id: 'mother-baby', name: 'Mother and baby', emoji: '🍼', parentId: 'categories', imageCount: 0 },
        { id: '3c-appliances', name: '3C home appliances', emoji: '🖥️', parentId: 'categories', imageCount: 0 },
        { id: 'fashion', name: 'International Fashion', emoji: '👗', parentId: 'categories', imageCount: 0 },
        { id: 'bouquet', name: 'Preserved Bouquet', emoji: '💐', parentId: 'categories', imageCount: 0 },
        { id: 'fortune', name: 'Good fortune', emoji: '🔮', parentId: 'categories', imageCount: 0 },
        { id: 'health', name: 'Health and wellness', emoji: '🏋🏻‍♀️', parentId: 'categories', imageCount: 0 },
        { id: 'leisure', name: 'Leisure sports', emoji: '🏕️', parentId: 'categories', imageCount: 0 },
        { id: 'pets', name: 'Pets', emoji: '🐶', parentId: 'categories', imageCount: 0 }
      ]
    }
  ]);

  const [images, setImages] = useState<ImageAsset[]>([
    {
      id: 'tw-birthday',
      name: 'Birthday',
      url: imgBirthday,
      categoryId: 'tw',
      tags: { zh_TW: ['生日快樂'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-for-women',
      name: 'For women',
      url: imgForWomen,
      categoryId: 'tw',
      tags: { zh_TW: ['送給女生'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-for-men',
      name: 'For men',
      url: imgForMen,
      categoryId: 'tw',
      tags: { zh_TW: ['送給男生'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-drinks',
      name: 'Drinks',
      url: imgDrinks,
      categoryId: 'tw',
      tags: { zh_TW: ['請客飲料'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-friendship',
      name: 'Friendship',
      url: imgFriendship,
      categoryId: 'tw',
      tags: { zh_TW: ['友誼感謝'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-zodiac',
      name: '12 Zodiac',
      url: imgZodiac,
      categoryId: 'tw',
      tags: { zh_TW: ['12星座'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-lover',
      name: 'For your lover',
      url: imgLover,
      categoryId: 'tw',
      tags: { zh_TW: ['送給情人'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-newborn',
      name: 'Newborn',
      url: imgNewborn,
      categoryId: 'tw',
      tags: { zh_TW: ['新生兒禮'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-elders',
      name: 'For elders',
      url: imgElders,
      categoryId: 'tw',
      tags: { zh_TW: ['送給長輩'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-engraved',
      name: 'Engraved items',
      url: imgEngraved,
      categoryId: 'tw',
      tags: { zh_TW: ['各種客製款'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-housewarming',
      name: 'Housewarming',
      url: imgHousewarming,
      categoryId: 'tw',
      tags: { zh_TW: ['喬遷用品'], th: [] },
      createdAt: new Date()
    },
    {
      id: 'tw-fast-shipping',
      name: 'Fast Shipping',
      url: imgFastShipping,
      categoryId: 'tw',
      tags: { zh_TW: ['快速出貨'], th: [] },
      createdAt: new Date()
    }
  ]);

  // Helper functions
  const updateCategoryCount = (categoryId: string, delta: number) => {
    setParentSections(sections =>
      sections.map(section => ({
        ...section,
        categories: section.categories.map(cat =>
          cat.id === categoryId
            ? { ...cat, imageCount: Math.max(0, cat.imageCount + delta) }
            : cat
        )
      }))
    );
  };

  const getCurrentCategory = () => {
    for (const section of parentSections) {
      const category = section.categories.find(c => c.id === selectedView);
      if (category) return category;
    }
    return null;
  };

  const getCategoryImages = () => {
    return images.filter(img => img.categoryId === selectedView);
  };

  // Filtered images and categories based on search
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return { images, parentSections };

    const query = searchQuery.toLowerCase();
    const filteredImages = images.filter(img =>
      img.name.toLowerCase().includes(query)
    );
    const filteredSections = parentSections.map(section => ({
      ...section,
      categories: section.categories.filter(cat =>
        cat.name.toLowerCase().includes(query)
      )
    })).filter(section => section.categories.length > 0);

    return { images: filteredImages, parentSections: filteredSections };
  }, [searchQuery, images, parentSections]);

  // Handlers
  const handleSaveImage = (imageUrl: string, metadata: {
    category: string;
    subCategory: string;
    name: string;
    tags: string;
  }) => {
    // Find the category ID from subCategory label
    let categoryId = '';
    for (const section of parentSections) {
      const foundCategory = section.categories.find(cat => 
        `${cat.emoji} ${cat.name}` === metadata.subCategory
      );
      if (foundCategory) {
        categoryId = foundCategory.id;
        break;
      }
    }

    // If no category found, don't save
    if (!categoryId) {
      console.error('Category not found:', metadata.subCategory);
      return;
    }

    // Parse tags
    const tagArray = metadata.tags.split(',').map(t => t.trim()).filter(t => t);
    const zhTags = tagArray.filter(t => /[\u4e00-\u9fa5]/.test(t));
    const thTags = tagArray.filter(t => /[\u0e00-\u0e7f]/.test(t));

    // Create new image asset
    const newAsset: ImageAsset = {
      id: Date.now().toString(),
      name: metadata.name || 'Untitled',
      url: imageUrl,
      categoryId: categoryId,
      tags: { zh_TW: zhTags, th: thTags },
      createdAt: new Date()
    };

    setImages([...images, newAsset]);
    updateCategoryCount(categoryId, 1);
  };

  const handleDownloadImage = (imageUrl: string, imageName: string) => {
    setCurrentImage({ url: imageUrl, name: imageName });
    setDownloadModalOpen(true);
  };

  const handleSaveAsset = (asset: Omit<ImageAsset, 'id' | 'createdAt'>) => {
    if (editingAsset) {
      // Update existing asset
      setImages(imgs =>
        imgs.map(img =>
          img.id === editingAsset.id
            ? { ...img, ...asset }
            : img
        )
      );
      
      // Update counts if category changed
      if (editingAsset.categoryId !== asset.categoryId) {
        updateCategoryCount(editingAsset.categoryId, -1);
        updateCategoryCount(asset.categoryId, 1);
      }
    } else {
      // Add new asset
      const newAsset: ImageAsset = {
        ...asset,
        id: Date.now().toString(),
        createdAt: new Date()
      };
      setImages([...images, newAsset]);
      updateCategoryCount(asset.categoryId, 1);
    }

    setEditingAsset(null);
  };

  const handleDeleteImage = (imageId: string) => {
    const image = images.find(img => img.id === imageId);
    if (image) {
      setDeleteTarget({
        type: 'image',
        id: imageId,
        name: image.name
      });
      setDeleteModalOpen(true);
    }
  };

  const handleDeleteCategory = (categoryId: string) => {
    const category = getCurrentCategory();
    if (category) {
      setDeleteTarget({
        type: 'category',
        id: categoryId,
        name: category.name
      });
      setDeleteModalOpen(true);
    }
  };

  const handleDeleteParentSection = (parentId: string) => {
    const section = parentSections.find(s => s.id === parentId);
    if (section) {
      setDeleteTarget({
        type: 'parent',
        id: parentId,
        name: section.name
      });
      setDeleteModalOpen(true);
    }
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;

    if (deleteTarget.type === 'image') {
      const image = images.find(img => img.id === deleteTarget.id);
      if (image) {
        updateCategoryCount(image.categoryId, -1);
        setImages(images.filter(img => img.id !== deleteTarget.id));
      }
    } else if (deleteTarget.type === 'category') {
      // Delete all images in category
      const categoryImages = images.filter(img => img.categoryId === deleteTarget.id);
      setImages(images.filter(img => img.categoryId !== deleteTarget.id));
      
      // Remove category
      setParentSections(sections =>
        sections.map(section => ({
          ...section,
          categories: section.categories.filter(cat => cat.id !== deleteTarget.id)
        }))
      );
      
      if (selectedView === deleteTarget.id) {
        setSelectedView('home');
      }
    } else if (deleteTarget.type === 'parent') {
      // Get all category IDs in this parent
      const section = parentSections.find(s => s.id === deleteTarget.id);
      if (section) {
        const categoryIds = section.categories.map(c => c.id);
        
        // Delete all images in these categories
        setImages(images.filter(img => !categoryIds.includes(img.categoryId)));
        
        // Remove parent section
        setParentSections(sections => sections.filter(s => s.id !== deleteTarget.id));
        
        if (categoryIds.includes(selectedView)) {
          setSelectedView('home');
        }
      }
    }

    setDeleteTarget(null);
  };

  const handleAddParentSection = () => {
    const name = prompt('Enter parent section name:');
    if (name) {
      const newSection: ParentSection = {
        id: Date.now().toString(),
        name: name.toUpperCase(),
        categories: []
      };
      setParentSections([...parentSections, newSection]);
    }
  };

  const handleEditParentSection = (id: string) => {
    const section = parentSections.find(s => s.id === id);
    if (section) {
      const name = prompt('Enter new name:', section.name);
      if (name) {
        setParentSections(sections =>
          sections.map(s =>
            s.id === id ? { ...s, name: name.toUpperCase() } : s
          )
        );
      }
    }
  };

  const handleAddCategory = (parentId: string, emoji: string, name: string) => {
    if (name) {
      const newCategory = {
        id: Date.now().toString(),
        name,
        emoji: emoji || '🎨',
        parentId,
        imageCount: 0
      };
      
      setParentSections(sections =>
        sections.map(section =>
          section.id === parentId
            ? { ...section, categories: [...section.categories, newCategory] }
            : section
        )
      );
    }
  };

  const handleEditCategory = (categoryId: string, emoji?: string, name?: string) => {
    setParentSections(sections =>
      sections.map(section => ({
        ...section,
        categories: section.categories.map(cat =>
          cat.id === categoryId
            ? { ...cat, ...(emoji && { emoji }), ...(name && { name }) }
            : cat
        )
      }))
    );
  };

  const handleUploadImage = (file: File) => {
    // In a real app, upload to storage and get URL
    const url = URL.createObjectURL(file);
    setCurrentImage({ url, name: file.name });
    setSaveModalOpen(true);
  };

  const handleOpenSaveModal = () => {
    // Open save modal without an image (for Add button in CategoryImageList)
    setCurrentImage({ url: '', name: '' });
    setSaveModalOpen(true);
  };

  const currentCategory = getCurrentCategory();
  const categoryImages = getCategoryImages();

  return (
    <div className="flex h-screen overflow-hidden bg-black">
      {/* Sidebar */}
      <Sidebar
        parentSections={filteredData.parentSections}
        selectedView={selectedView}
        onViewChange={setSelectedView}
        onAddParentSection={handleAddParentSection}
        onEditParentSection={handleEditParentSection}
        onDeleteParentSection={handleDeleteParentSection}
        onAddCategory={handleAddCategory}
        onEditCategory={handleEditCategory}
        onDeleteCategory={handleDeleteCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <div className="flex-1 ml-[10px]">
        {selectedView === 'home' ? (
          <HomeScreen
            onSaveImage={handleSaveImage}
            onDownloadImage={handleDownloadImage}
          />
        ) : currentCategory ? (
          <CategoryImageList
            category={currentCategory}
            images={categoryImages}
            onEditCategory={handleEditCategory}
            onUploadImage={handleUploadImage}
            onEditImage={(asset) => {
              setCurrentImage({ url: asset.url, name: asset.name });
              setEditingAsset(asset);
              setSaveModalOpen(true);
            }}
            onDownloadImage={handleDownloadImage}
            onDeleteImage={handleDeleteImage}
            onNavigateHome={() => setSelectedView('home')}
            onOpenSaveModal={handleOpenSaveModal}
          />
        ) : (
          <div className="flex-1 bg-[#111111] flex items-center justify-center">
            <p className="text-[#777777] text-[18px]">Category not found</p>
          </div>
        )}
      </div>

      {/* Modals */}
      {currentImage && (
        <>
          <SaveAssetModal
            isOpen={saveModalOpen}
            onClose={() => {
              setSaveModalOpen(false);
              setEditingAsset(null);
            }}
            imageUrl={currentImage.url}
            parentSections={parentSections}
            onSave={handleSaveAsset}
            existingAsset={editingAsset || undefined}
          />

          <DownloadModal
            isOpen={downloadModalOpen}
            onClose={() => setDownloadModalOpen(false)}
            imageUrl={currentImage.url}
            imageName={currentImage.name}
          />
        </>
      )}

      {deleteTarget && (
        <DeleteConfirmModal
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false);
            setDeleteTarget(null);
          }}
          onConfirm={confirmDelete}
          title={`Delete ${deleteTarget.type === 'parent' ? 'Section' : deleteTarget.type === 'category' ? 'Category' : 'Image'}`}
          message={`Are you sure you want to delete "${deleteTarget.name}"?`}
          type={deleteTarget.type}
        />
      )}
    </div>
  );
}
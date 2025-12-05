import { X, AlertTriangle } from 'lucide-react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  type?: 'category' | 'image' | 'parent';
}

export function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  type = 'image'
}: DeleteConfirmModalProps) {
  if (!isOpen) return null;

  const getWarningMessage = () => {
    switch (type) {
      case 'parent':
        return 'This will delete all subcategories and their images.';
      case 'category':
        return 'All images in this category will also be deleted.';
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="bg-[#1f1f1f] rounded-[24px] w-[450px] p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d4183d]/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-[#d4183d]" />
            </div>
            <h2 className="text-[24px] leading-[32px] text-white">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#b7b7b7] hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Message */}
        <div className="mb-6">
          <p className="text-[#b7b7b7] text-[18px] leading-[24px] mb-3">
            {message}
          </p>
          {getWarningMessage() && (
            <div className="bg-[#d4183d]/10 border border-[#d4183d]/30 rounded-[12px] p-4">
              <p className="text-[#d4183d] text-[14px] leading-[18px]">
                ⚠️ {getWarningMessage()}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-[#303030] hover:bg-[#3f3f3f] text-white py-3 rounded-[12px] text-[18px] leading-[24px] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex-1 bg-[#d4183d] hover:bg-[#b0142f] text-white py-3 rounded-[12px] text-[18px] leading-[24px] transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

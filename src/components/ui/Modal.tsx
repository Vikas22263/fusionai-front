import { useEffect } from "react";
import { X } from "lucide-react";
import { ModalProps } from "../../types/modal";
import { useNavigate } from "react-router-dom";

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const navigate = useNavigate();
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative animate-fadeIn">
        <button
          onClick={() => {
            onClose();
            navigate("/");
          }}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}

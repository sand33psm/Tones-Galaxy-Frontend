"use client";

import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Dialog isOpen={isOpen} onDismiss={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent
        className="bg-white dark:bg-gray-800 rounded-lg p-6 mx-auto mt-20 max-w-md shadow-lg"
        aria-label="Authentication Modal"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-white"
        >
          ×
        </button>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

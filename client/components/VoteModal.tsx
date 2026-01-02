"use client";

import { X, AlertCircle } from "lucide-react";
import { Candidate } from "@/lib/mockData";

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  candidate: Candidate;
}

export default function VoteModal({
  isOpen,
  onClose,
  onConfirm,
  candidate,
}: VoteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Confirm Your Vote</h2>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={candidate.imageUrl}
              alt={candidate.name}
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">{candidate.name}</h3>
              <p className="text-blue-600 font-medium">{candidate.party}</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            ⚠️ This action cannot be undone. Please review your choice carefully.
          </p>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          {/* FIXED: Changed to blue background */}
          <button
            onClick={onConfirm}
            className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Confirm Vote
          </button>
        </div>
      </div>
    </div>
  );
}

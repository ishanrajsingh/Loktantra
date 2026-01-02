"use client";

import { useState } from "react";
import { User2, Award, BookOpen } from "lucide-react";
import { Candidate } from "@/lib/mockData";
import VoteButton from "./VoteButton";
import VoteModal from "./VoteModal";

interface CandidateCardProps {
  candidate: Candidate;
  hasVoted?: boolean;
  showVoteButton?: boolean;
}

export default function CandidateCard({
  candidate,
  hasVoted = false,
  showVoteButton = true,
}: CandidateCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [voted, setVoted] = useState(hasVoted);

  const handleVoteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmVote = () => {
    setVoted(true);
    setIsModalOpen(false);
    alert(`Vote cast for ${candidate.name}!`);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <img
              src={candidate.imageUrl}
              alt={candidate.name}
              className="w-24 h-24 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">{candidate.name}</h3>
              <p className="text-primary-600 font-medium">{candidate.party}</p>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <User2 className="w-4 h-4 mr-2" />
                  <span>Age: {candidate.age}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>{candidate.qualification}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start text-sm text-gray-700">
            <BookOpen className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
            <p>{candidate.description}</p>
          </div>

          {showVoteButton && (
            <div className="mt-6">
              <VoteButton
                disabled={voted}
                onClick={handleVoteClick}
              />
            </div>
          )}
        </div>
      </div>

      <VoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmVote}
        candidate={candidate}
      />
    </>
  );
}

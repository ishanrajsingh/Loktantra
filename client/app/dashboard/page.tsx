import Navbar from "@/components/Navbar";
import CandidateCard from "@/components/CandidateCard";
import StatusBadge from "@/components/StatusBadge";
import { mockCandidates, electionStatus } from "@/lib/mockData";
import { Calendar, Users, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Voter Dashboard</h1>
            <p className="text-gray-600 mt-1">Cast your vote for the candidate of your choice</p>
          </div>
          <StatusBadge status="live" />
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Election Period</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">Dec 1-31</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Candidates</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{mockCandidates.length}</p>
              </div>
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-accent-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Votes Cast</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{electionStatus.totalVotes}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {mockCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              hasVoted={false}
              showVoteButton={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

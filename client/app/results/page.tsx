import Navbar from "@/components/Navbar";
import StatusBadge from "@/components/StatusBadge";
import { mockCandidates } from "@/lib/mockData";
import { Trophy, TrendingUp } from "lucide-react";

export default function Results() {
  const sortedCandidates = [...mockCandidates].sort((a, b) => b.voteCount - a.voteCount);
  const totalVotes = mockCandidates.reduce((sum, c) => sum + c.voteCount, 0);
  const winner = sortedCandidates[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Live Results</h1>
            <p className="text-gray-600 mt-1">Real-time vote counts for all candidates</p>
          </div>
          <StatusBadge status="live" />
        </div>

        {/* FIXED: Changed background to use proper gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-blue-100 text-sm font-medium">Current Leader</p>
              <h2 className="text-3xl font-bold text-white">{winner.name}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <p className="text-blue-100 mb-2">{winner.party}</p>
              <div className="flex items-center space-x-3">
                <span className="text-4xl font-bold text-white">{winner.voteCount}</span>
                <span className="text-xl text-blue-100">votes</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-white">
                {((winner.voteCount / totalVotes) * 100).toFixed(1)}%
              </div>
              <p className="text-blue-100">of total votes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">All Candidates</h2>
          
          <div className="space-y-4">
            {sortedCandidates.map((candidate, index) => {
              const percentage = ((candidate.voteCount / totalVotes) * 100).toFixed(1);
              
              return (
                <div key={candidate.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full font-bold text-gray-700">
                        {index + 1}
                      </div>
                      <img
                        src={candidate.imageUrl}
                        alt={candidate.name}
                        className="w-12 h-12 rounded-lg"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{candidate.name}</h3>
                        <p className="text-sm text-gray-600">{candidate.party}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{candidate.voteCount}</div>
                      <p className="text-sm text-gray-600">votes</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-blue-600 h-4 rounded-full transition-all flex items-center justify-end pr-2"
                        style={{ width: `${percentage}%` }}
                      >
                        {parseFloat(percentage) > 10 && (
                          <span className="text-xs font-semibold text-white">{percentage}%</span>
                        )}
                      </div>
                    </div>
                    {parseFloat(percentage) <= 10 && (
                      <span className="absolute right-2 top-0 text-xs font-semibold text-gray-600">
                        {percentage}%
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center space-x-3">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <p className="text-blue-800">
            <span className="font-semibold">Total Votes:</span> {totalVotes} votes cast across all candidates
          </p>
        </div>
      </div>
    </div>
  );
}

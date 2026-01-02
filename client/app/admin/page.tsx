"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import StatusBadge from "@/components/StatusBadge";
import { Plus, Play, StopCircle, Users, TrendingUp } from "lucide-react";
import { electionStatus } from "@/lib/mockData";

export default function AdminPanel() {
  const [isActive, setIsActive] = useState(electionStatus.isActive);

  const handleStartElection = () => {
    setIsActive(true);
    alert("Election started!");
  };

  const handleEndElection = () => {
    setIsActive(false);
    alert("Election ended!");
  };

  const handleAddCandidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    alert(`Candidate ${formData.get('name')} added!`);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600 mt-1">Manage candidates and election status</p>
          </div>
          <StatusBadge status={isActive ? "live" : "ended"} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Add New Candidate</h2>
                <Plus className="w-6 h-6 text-primary-600" />
              </div>

              <form onSubmit={handleAddCandidate} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Candidate Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Party Name
                    </label>
                    <input
                      type="text"
                      name="party"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter party name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter age"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Qualification
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter qualification"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter candidate description"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Add Candidate
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Election Controls</h2>
              
              <div className="space-y-3">
                <button
                  onClick={handleStartElection}
                  disabled={isActive}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <Play className="w-5 h-5" />
                  <span>Start Election</span>
                </button>

                <button
                  onClick={handleEndElection}
                  disabled={!isActive}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <StopCircle className="w-5 h-5" />
                  <span>End Election</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Statistics</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Total Voters</span>
                  </div>
                  <span className="font-bold text-gray-900">{electionStatus.totalVoters}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Votes Cast</span>
                  </div>
                  <span className="font-bold text-gray-900">{electionStatus.totalVotes}</span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Voter Turnout</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary-600 h-3 rounded-full"
                      style={{ width: `${(electionStatus.totalVotes / electionStatus.totalVoters) * 100}%` }}
                    />
                  </div>
                  <div className="text-right text-sm font-medium text-gray-900 mt-1">
                    {((electionStatus.totalVotes / electionStatus.totalVoters) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import { mockVoteHistory } from "@/lib/mockData";
import { formatDate, truncateAddress } from "@/lib/utils";
import { ExternalLink, Clock, Hash } from "lucide-react";

export default function History() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Vote History</h1>
          <p className="text-gray-600 mt-1">View your past voting records and transactions</p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Candidate
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Date & Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Transaction Hash
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Block
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockVoteHistory.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{record.candidateName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{formatDate(record.timestamp)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Hash className="w-4 h-4 mr-2 text-gray-400" />
                        <code className="text-sm font-mono text-primary-600">
                          {truncateAddress(record.transactionHash)}
                        </code>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{record.blockNumber.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                        <span>View</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            ℹ️ All votes are permanently recorded on the blockchain and cannot be modified or deleted.
          </p>
        </div>
      </div>
    </div>
  );
}

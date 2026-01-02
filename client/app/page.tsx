import Link from "next/link";
import { Wallet, Shield, CheckCircle, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-4xl">L</span>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Loktantra</h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Secure, Transparent, and Decentralized Voting Platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Blockchain Secured</h3>
            <p className="text-gray-600">Your vote is encrypted and stored on blockchain, ensuring maximum security.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-accent-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Results</h3>
            <p className="text-gray-600">Real-time vote counting with complete transparency and verifiability.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Democratic Access</h3>
            <p className="text-gray-600">Every eligible voter has equal access to participate in elections.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Cast Your Vote?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect your wallet to get started with secure voting
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            <Wallet className="w-6 h-6" />
            <span>Connect Wallet</span>
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Supported wallets: MetaMask, WalletConnect, Coinbase Wallet
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">5,000+</div>
            <div className="text-gray-600">Registered Voters</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent-600 mb-2">4,445</div>
            <div className="text-gray-600">Votes Cast</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Transparency</div>
          </div>
        </div>
      </div>
    </div>
  );
}

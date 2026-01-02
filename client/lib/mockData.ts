export interface Candidate {
  id: number;
  name: string;
  party: string;
  age: number;
  qualification: string;
  description: string;
  imageUrl: string;
  voteCount: number;
}

export interface VoteRecord {
  id: string;
  candidateName: string;
  timestamp: Date;
  transactionHash: string;
  blockNumber: number;
}

export const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    party: "Progressive Party",
    age: 45,
    qualification: "MBA, IIM Ahmedabad",
    description: "Focused on economic development and infrastructure",
    imageUrl: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0ea5e9&color=fff&size=200",
    voteCount: 1250,
  },
  {
    id: 2,
    name: "Priya Sharma",
    party: "Unity Alliance",
    age: 38,
    qualification: "Ph.D. in Political Science",
    description: "Advocate for education and women empowerment",
    imageUrl: "https://ui-avatars.com/api/?name=Priya+Sharma&background=10b981&color=fff&size=200",
    voteCount: 980,
  },
  {
    id: 3,
    name: "Amit Patel",
    party: "National Front",
    age: 52,
    qualification: "B.Tech, IIT Delhi",
    description: "Technology-driven governance and transparency",
    imageUrl: "https://ui-avatars.com/api/?name=Amit+Patel&background=8b5cf6&color=fff&size=200",
    voteCount: 1450,
  },
  {
    id: 4,
    name: "Sunita Verma",
    party: "People's Movement",
    age: 41,
    qualification: "LLB, Delhi University",
    description: "Legal reforms and social justice initiatives",
    imageUrl: "https://ui-avatars.com/api/?name=Sunita+Verma&background=f59e0b&color=fff&size=200",
    voteCount: 765,
  },
];

export const mockVoteHistory: VoteRecord[] = [
  {
    id: "1",
    candidateName: "Rajesh Kumar",
    timestamp: new Date(2024, 11, 15, 14, 30),
    transactionHash: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0",
    blockNumber: 18523456,
  },
  {
    id: "2",
    candidateName: "Priya Sharma",
    timestamp: new Date(2024, 11, 10, 10, 15),
    transactionHash: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
    blockNumber: 18521234,
  },
  {
    id: "3",
    candidateName: "Amit Patel",
    timestamp: new Date(2024, 10, 25, 16, 45),
    transactionHash: "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
    blockNumber: 18518765,
  },
];

export const electionStatus = {
  isActive: true,
  startDate: new Date(2024, 11, 1),
  endDate: new Date(2024, 11, 31),
  totalVotes: 4445,
  totalVoters: 5000,
};

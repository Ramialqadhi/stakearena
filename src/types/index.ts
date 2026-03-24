export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string | null;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ChallengeStatus = "PENDING" | "ACTIVE" | "COMPLETED" | "CANCELLED";
export type TransactionType = "DEPOSIT" | "WITHDRAWAL" | "STAKE" | "PAYOUT" | "RAKE";
export type TransactionStatus = "PENDING" | "COMPLETED" | "FAILED";

export interface Challenge {
  id: string;
  creatorId: string;
  opponentId?: string | null;
  game: string;
  stakeAmount: number;
  status: ChallengeStatus;
  winnerId?: string | null;
  creatorPaid: boolean;
  opponentPaid: boolean;
  shareCode: string;
  createdAt: Date;
  updatedAt: Date;
  creator?: User;
  opponent?: User | null;
  winner?: User | null;
  match?: Match | null;
}

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  status: TransactionStatus;
  challengeId?: string | null;
  createdAt: Date;
  user?: User;
  challenge?: Challenge | null;
}

export interface Match {
  id: string;
  challengeId: string;
  creatorScore?: number | null;
  opponentScore?: number | null;
  notes?: string | null;
  confirmedAt?: Date | null;
  confirmedBy?: string | null;
  challenge?: Challenge;
}

export interface Game {
  id: string;
  name: string;
  emoji: string;
  activeChallenges: number;
  category: string;
}

export const SUPPORTED_GAMES: Game[] = [
  { id: "clash-royale", name: "Clash Royale", emoji: "⚔️", activeChallenges: 142, category: "Mobile" },
];

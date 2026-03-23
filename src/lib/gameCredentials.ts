export interface CredentialConfig {
  label: string;
  placeholder: string;
  hint: string;
}

export const GAME_CREDENTIALS: Record<string, CredentialConfig> = {
  "clash-royale": {
    label: "Clash Royale Player Tag",
    placeholder: "#ABC123",
    hint: "Your in-game player tag starting with #",
  },
  chess: {
    label: "Chess Username",
    placeholder: "e.g. Magnus2023",
    hint: "Your Chess.com or Lichess username",
  },
  fifa: {
    label: "EA / Gaming Username",
    placeholder: "e.g. EA username, PSN ID, or Xbox Gamertag",
    hint: "The username your opponent will use to find you in game",
  },
};

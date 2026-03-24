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
};

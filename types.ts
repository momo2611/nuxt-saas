export type Role = "user" | "assistant";

export type ChatCompletionRequestMessage = {
  role: Role;
  content: string;
};

export type AudioResponse = {
  audio: string;
  spectrogram: string;
};

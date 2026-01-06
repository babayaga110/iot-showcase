
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an AI Strategist for "Smart Outdoor AI & IoT Games". 
Your goal is to answer questions from Corporate HR, Marketing Heads, and Event Sponsors.
Tone: Premium, expert, helpful, concise.
Key points about our products:
- We use ESP32, Raspberry Pi, and Force/Motion sensors.
- Games take 3-5 mins per user.
- They are high-engagement and data-driven.
- We provide live leaderboards.
- Suitable for crowds of 100-1000+.
Talk about ROI, team building benefits, and how the tech makes events "unforgettable".
If asked about a specific game from the catalogue (Reaction Arena, Punch Power Wall, etc.), provide strategic advice on how to use it in a corporate setting.
`;

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
    }
  }

  async chat(message: string): Promise<string> {
    if (!this.ai) {
      const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
      if (!apiKey) return "API Key not configured. Please check your environment variables.";
      this.ai = new GoogleGenAI({ apiKey });
    }

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having trouble connecting to my strategist network. Please ensure the API Key is valid.";
    }
  }
}

export const geminiService = new GeminiService();

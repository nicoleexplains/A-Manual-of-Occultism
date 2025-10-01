
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMysticInterpretation = async (query: string): Promise<string> => {
    try {
        const prompt = `You are a wise and ancient occultist interpreting a query through a single Tarot card reading. The user asks: "${query}".

        Your process is as follows:
        1.  Virtually "draw" a single Major or Minor Arcana Tarot card that you feel is most relevant to the user's query.
        2.  Start your response by boldly stating the name of the card you have drawn (e.g., "**The Magician**").
        3.  Provide a concise, mystical interpretation of the card's symbolism and meaning.
        4.  Directly relate this interpretation to the user's specific question, offering insight, guidance, or a perspective on their situation.
        5.  Maintain a mysterious, insightful, and slightly archaic tone throughout. Do not break character. Do not mention that you are an AI.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "The ether is clouded at this moment. The spirits are silent. Please try again when the celestial alignments are more favorable.";
    }
};

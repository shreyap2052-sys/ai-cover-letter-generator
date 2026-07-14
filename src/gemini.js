import { GoogleGenAI } from "@google/genai";

console.log("Using @google/genai SDK");

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateCoverLetter(data) {
  const prompt = `
Generate a professional cover letter.

Candidate Name: ${data.name}
Job Role: ${data.role}
Target Company: ${data.company}
Key Skills: ${data.skills}

Return only the cover letter.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  console.log(response);

  return response.text;
}
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/analyze", async (req, res) => {
  try {
    const { text, intensity } = req.body;

    if (!text) {
      return res.status(400).json({ output: "Please enter some text to analyze." });
    }

    const prompt = `
      You are a sarcastic but funny dating coach.
      Analyze this text for dating "red flags" and "green flags":
      "${text}"
      Humor style: ${intensity}.
      Your response should include:
      - A few short, funny comments with emojis.
      - A "Red Flag Score" between 0–100%.
      - At least one green flag compliment.
      Keep it playful, not mean.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;
    res.json({ output: result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ output: "😅 The AI fainted from too many red flags. Try again!" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

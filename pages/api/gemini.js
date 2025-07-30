import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  const { messages } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  // Stub fallback if no key
  if (!apiKey) {
    console.warn('No GEMINI_API_KEY set — returning stub response');
    return res.status(200).json({ response: '🤖 (Demo) Hi! I am your AI food assistant.' });
  }

  // Initialize client
  const ai = new GoogleGenAI({ apiKey });

  try {
    
    const history = messages.map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    // Create a new chat session
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      history
    });

    // Send the last user message
    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage({ message: { text: lastMessage } });

    // Extract the reply text
    const responseText = result.choices?.[0]?.message?.text || result.text;
    if (!responseText) {
      throw new Error('Empty response from Gemini SDK');
    }

    return res.status(200).json({ response: responseText });
  } catch (err) {
    console.error('Gemini client error:', err);
    return res.status(500).json({ error: 'Gemini API failed.' });
  }
}

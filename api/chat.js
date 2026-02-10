export default async function handler(req, res) {
    // CORS Headers erlauben
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // OPTIONS Request für CORS
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message, history = [] } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Nachricht fehlt' });
        }

        // Groq API Key aus Umgebungsvariablen
        const GROQ_API_KEY = process.env.GROQ_API_KEY;

        if (!GROQ_API_KEY) {
            return res.status(500).json({ error: 'API-Schlüssel nicht konfiguriert' });
        }

        // System-Prompt - hier kannst du den Bot trainieren!
        const systemPrompt = `Du bist ein freundlicher und professioneller Kundenservice-Assistent. 
Deine Aufgabe ist es, Kunden zu helfen und ihre Fragen zu beantworten.

Wichtige Regeln:
- Sei höflich und professionell
- Antworte auf Deutsch
- Halte deine Antworten präzise und hilfreich
- Wenn du etwas nicht weißt, sage es ehrlich

Firmeninformationen:
- Du arbeitest für ein innovatives Unternehmen
- Öffnungszeiten: Mo-Fr 9-18 Uhr
- Support-Email: support@firma.de
- Du kannst Fragen zu Produkten, Dienstleistungen und allgemeinen Anfragen beantworten`;

        // Nachrichten für Groq API vorbereiten
        const messages = [
            { role: 'system', content: systemPrompt },
            ...history,
            { role: 'user', content: message }
        ];

        // Anfrage an Groq API
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile', // Schnelles und gutes Modell
                messages: messages,
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        if (!groqResponse.ok) {
            const errorData = await groqResponse.text();
            console.error('Groq API Error:', errorData);
            throw new Error('Fehler bei der AI-Anfrage');
        }

        const data = await groqResponse.json();
        const aiResponse = data.choices[0].message.content;

        return res.status(200).json({ 
            response: aiResponse,
            success: true 
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ 
            error: 'Ein Fehler ist aufgetreten',
            details: error.message 
        });
    }
}

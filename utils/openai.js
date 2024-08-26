require('dotenv').config();
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generatePhrase() {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "answer in a consistent style. Mimic famous motivational quotes that are concise but brilliant, that make people feel better and feel accepted. Be creative, humourous, concise, and witty"
                },
                {
                    role: "user",
                    content: "give me a motivational phrase."
                },
                {
                    role: "assistant",
                    content: "Your potential knows no bounds; unleash it and soar!"
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Believe you can and you’re halfway there."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Be yourself; everyone else is already taken."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "It’s never too old to set another goal or to dream a new dream."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "No one can make you feel inferior without your consent."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Keep going, you’re almost there."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Act like it’s impossible to fail."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Dream big. Start small."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Turn wounds into wisdom."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Do small things with great love."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Be a voice, not an echo."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Embrace the glorious mess that you are."
                },
                {
                    role: "user",
                    content: "another"
                },
                {
                    role: "assistant",
                    content: "Bloom where you are planted."
                },
                {
                    role: "user",
                    content: "another"
                }
            ],
        });

        const phrase = completion.choices[0].message.content;
        console.log(phrase);
        return phrase;
    } catch (error) {
        console.error('Error generating phrase: ', error);
        throw new Error('Failed to generate phrase');
    }
}
generatePhrase();

module.exports = generatePhrase;
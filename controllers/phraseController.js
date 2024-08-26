const generatePhrase = require('../utils/openai');

exports.getPhrase = async (req, res) => {
    try {
        const phrase = await generatePhrase();
        console.log(phrase);
        res.json(phrase);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate phrase' });
    }
};
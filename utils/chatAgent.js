const chatAgent = async (message, chatHistory) => {
    try {
        const systemPrompt = `You are a helpful AI assistant for Gain Chain AI, a blockchain-based platform that integrates artificial intelligence to democratize access to Web3 technologies. You help users understand our platform, features, and answer their questions about blockchain technology.

        Key features to remember:
        - Democratization of blockchain access through AI-driven tools
        - Community-centric ecosystem
        - GCH Coins tokenomics
        - Educational initiatives
        - Focus on accessibility and empowerment

        Chat history:
        ${JSON.stringify(chatHistory)}`;

        const response = await invokeAIAgent(systemPrompt, message);
        return response;
    } catch (error) {
        console.error('Chat agent error:', error);
        return "I apologize, but I'm having trouble processing your request. Please try again later or contact our support team through the contact form.";
    }
};

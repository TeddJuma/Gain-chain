function Chatbot() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);
        const [messages, setMessages] = React.useState([]);
        const [input, setInput] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const messagesEndRef = React.useRef(null);

        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        };

        React.useEffect(() => {
            if (isOpen && messages.length === 0) {
                setMessages([{
                    role: 'ai',
                    content: "Hi! I'm G-bot, your AI assistant for Gain Chain AI. I'm here to help answer any questions you might have about our platform, features, or blockchain technology in general. How can I assist you today?"
                }]);
            }
            scrollToBottom();
        }, [messages, isOpen]);

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!input.trim()) return;

            const userMessage = { role: 'user', content: input };
            setMessages(prev => [...prev, userMessage]);
            setInput('');
            setIsLoading(true);

            try {
                const response = await chatAgent(input, messages);
                const aiMessage = { role: 'ai', content: response };
                setMessages(prev => [...prev, aiMessage]);
            } catch (error) {
                console.error('Chat submission error:', error);
                setMessages(prev => [...prev, {
                    role: 'ai',
                    content: "I'm sorry, I encountered an error. Please try again later."
                }]);
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div className="chatbot-container" data-name="chatbot-container">
                {isOpen && (
                    <div className="chatbot-window" data-name="chatbot-window">
                        <div className="chat-header" data-name="chat-header">
                            <h3>Chat with G-bot</h3>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="close-button"
                                data-name="chat-close-button"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="chat-messages" data-name="chat-messages">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`message ${msg.role === 'user' ? 'user-message' : 'ai-message'}`}
                                    data-name={`${msg.role}-message-${index}`}
                                >
                                    {msg.content}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="message ai-message" data-name="loading-message">
                                    <i className="fas fa-spinner fa-spin"></i> Thinking...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSubmit} className="chat-input" data-name="chat-input-form">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="chat-input-field"
                                data-name="chat-input-field"
                            />
                            <button 
                                type="submit" 
                                className="chat-send-button"
                                data-name="chat-send-button"
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                )}
                <button
                    className="chatbot-button"
                    onClick={() => setIsOpen(!isOpen)}
                    data-name="chatbot-toggle-button"
                >
                    <div className="chat-bubbles">
                        <i className="fas fa-comments"></i>
                    </div>
                </button>
            </div>
        );
    } catch (error) {
        console.error('Chatbot component error:', error);
        reportError(error);
        return null;
    }
}

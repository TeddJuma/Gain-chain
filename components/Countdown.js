function Countdown() {
    try {
        const [timeLeft, setTimeLeft] = React.useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        });

        React.useEffect(() => {
            const targetDate = new Date('2025-04-20T00:00:00');

            const calculateTimeLeft = () => {
                const now = new Date();
                const difference = targetDate - now;

                if (difference > 0) {
                    setTimeLeft({
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / 1000 / 60) % 60),
                        seconds: Math.floor((difference / 1000) % 60)
                    });
                }
            };

            calculateTimeLeft();
            const timer = setInterval(calculateTimeLeft, 1000);

            return () => clearInterval(timer);
        }, []);

        return (
            <div data-name="countdown-root-container">
                <div className="quantum-flow-container">
                    <div className="quantum-flow"></div>
                </div>
                <section className="countdown-section">
                    <div className="countdown-container">
                        <div className="countdown-header">
                            <img 
                                src="images/logo.jpg" 
                                alt="Gain Chain AI Logo" 
                                className="countdown-logo"
                            />
                            <h1 className="countdown-title">
                                <span className="gradient-text">Coming Soon</span>
                            </h1>
                            <p className="countdown-subtitle">
                                Get ready for the future of Web3 with Gain Chain AI
                            </p>
                        </div>

                        <div className="countdown-timer">
                            <div className="timer-block">
                                <span className="timer-number">{timeLeft.days}</span>
                                <span className="timer-label">Days</span>
                            </div>
                            <div className="timer-block">
                                <span className="timer-number">{timeLeft.hours}</span>
                                <span className="timer-label">Hours</span>
                            </div>
                            <div className="timer-block">
                                <span className="timer-number">{timeLeft.minutes}</span>
                                <span className="timer-label">Minutes</span>
                            </div>
                            <div className="timer-block">
                                <span className="timer-number">{timeLeft.seconds}</span>
                                <span className="timer-label">Seconds</span>
                            </div>
                        </div>

                        <div className="countdown-cta hover:text-red">
                            <a href="/" className="primary-button glow-effect ">
                                Back to Home
                                <span className="button-shine"></span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Countdown component error:', error);
        reportError(error);
        return null;
    }
}
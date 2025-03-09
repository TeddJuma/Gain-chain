function App() {
    try {
        return (
            <div data-name="app-container">
                <QuantumFlow />
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Gallery />
                    <Services />
                    <Features />
                    <Testimonials />
                    <FAQ />
                    <Team />
                    <Contact />
                </main>
                <Chatbot />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

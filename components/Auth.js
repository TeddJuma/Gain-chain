function Auth() {
    try {
        const [authState, setAuthState] = React.useState({
            isLogin: true,
            email: '',
            password: '',
            name: '',
            isLoading: false,
            error: null
        });

        const handleAuthSubmit = (event) => {
            event.preventDefault();
            setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

            // Simulated authentication logic
            setTimeout(() => {
                const { isLogin, email, password, name } = authState;
                if ((isLogin && email && password) || (!isLogin && name && email && password)) {
                    console.log(isLogin ? 'Login successful' : 'Signup successful');
                } else {
                    setAuthState(prev => ({
                        ...prev,
                        error: 'Please fill all required fields',
                        isLoading: false
                    }));
                }
            }, 1500);
        };

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setAuthState(prev => ({ ...prev, [name]: value }));
        };

        const toggleAuthMode = () => {
            setAuthState(prev => ({
                ...prev,
                isLogin: !prev.isLogin,
                error: null
            }));
        };

        const handleICPIdentity = () => {
            // ICP Identity authentication logic
            console.log('Initiating ICP Identity authentication');
        };

        const handleGoogleAuth = () => {
            // Google authentication logic
            console.log('Initiating Google authentication');
        };

        return (
            <div data-name="auth-root-container">
                {/* Remove the quantum-flow-container div since it's now handled by the AuthApp */}
                <section className="auth-section" data-name="auth-section">
                    <div className="auth-container" data-name="auth-container">
                        <div className="auth-header" data-name="auth-header">
                            <div className="logo-text-wrapper" data-name="logo-text-wrapper">
                                <img 
                                    src="images/logo.jpg" 
                                    alt="Gain Chain AI Logo" 
                                    className="auth-logo"
                                    data-name="auth-logo"
                                />
                                <span className="auth-logo-text" data-name="auth-logo-text">
                                    Gain Chain AI
                                </span>
                            </div>
                            <h2 className="section-title" data-name="auth-title">
                                {authState.isLogin ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <p className="auth-subtitle" data-name="auth-subtitle">
                                {authState.isLogin 
                                    ? 'Sign in with your preferred method'
                                    : 'Join our community with your identity'}
                            </p>
                        </div>

                        <div className="auth-options" data-name="auth-options">
                            <button 
                                className="auth-option-btn primary" 
                                onClick={handleICPIdentity}
                                data-name="icp-auth-button"
                            >
                                <i className="fas fa-shield-alt"></i>
                                Continue with ICP Identity
                            </button>

                            <button 
                                className="auth-option-btn" 
                                onClick={handleGoogleAuth}
                                data-name="google-auth-button"
                            >
                                <i className="fab fa-google"></i>
                                Continue with Google
                            </button>

                            <div className="auth-divider" data-name="auth-divider">
                                <span>or</span>
                            </div>
                        </div>

                        <form onSubmit={handleAuthSubmit} className="auth-form" data-name="auth-form">
                            {!authState.isLogin && (
                                <div className="input-group" data-name="name-input-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={authState.name}
                                        onChange={handleInputChange}
                                        className="auth-input"
                                        disabled={authState.isLoading}
                                        data-name="name-input"
                                    />
                                </div>
                            )}

                            <div className="input-group" data-name="email-input-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={authState.email}
                                    onChange={handleInputChange}
                                    className="auth-input"
                                    disabled={authState.isLoading}
                                    data-name="email-input"
                                />
                            </div>

                            <div className="input-group" data-name="password-input-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={authState.password}
                                    onChange={handleInputChange}
                                    className="auth-input"
                                    disabled={authState.isLoading}
                                    data-name="password-input"
                                />
                            </div>

                            {authState.error && (
                                <div className="auth-error" data-name="auth-error">
                                    {authState.error}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className="auth-button"
                                disabled={authState.isLoading}
                                data-name="auth-submit"
                            >
                                {authState.isLoading ? (
                                    <span className="auth-spinner" data-name="auth-spinner"></span>
                                ) : (
                                    authState.isLogin ? 'Sign In' : 'Create Account'
                                )}
                            </button>
                        </form>

                        <div className="auth-switch" data-name="auth-switch">
                            {authState.isLogin 
                                ? "Don't have an account? " 
                                : "Already have an account? "}
                            <button 
                                className="auth-switch-btn" 
                                onClick={toggleAuthMode}
                                data-name="auth-toggle-button"
                            >
                                {authState.isLogin ? 'Sign Up' : 'Sign In'}
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Auth component error:', error);
        reportError(error);
        return null;
    }
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function TestApp() {
    return (_jsx("div", { style: {
            padding: '40px',
            fontFamily: 'Arial, sans-serif',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }, children: _jsxs("div", { style: {
                textAlign: 'center',
                background: 'rgba(255,255,255,0.1)',
                padding: '40px',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)'
            }, children: [_jsx("h1", { style: { fontSize: '3em', marginBottom: '20px' }, children: "\uD83C\uDF89 React Test App Working!" }), _jsx("p", { style: { fontSize: '1.2em', marginBottom: '30px' }, children: "If you can see this, React is working correctly." }), _jsx("p", { style: { fontSize: '1.1em' }, children: _jsx("strong", { children: "This means the issue is with the complex portfolio code." }) }), _jsx("button", { onClick: () => alert('React onClick working!'), style: {
                        background: '#4CAF50',
                        color: 'white',
                        padding: '15px 30px',
                        border: 'none',
                        borderRadius: '25px',
                        fontSize: '1.1em',
                        cursor: 'pointer',
                        marginTop: '20px'
                    }, children: "Test React Click" })] }) }));
}
export default TestApp;

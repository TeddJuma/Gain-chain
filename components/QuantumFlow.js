function QuantumFlow() {
    try {
        const canvasRef = React.useRef(null);
        const mouseRef = React.useRef({ x: 0, y: 0 });
        
        React.useEffect(() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            let animationFrameId;
            
            const nodes = [];
            const nodeCount = 50;
            const connectionDistance = 150;
            const maxSpeed = 0.3;
            
            // Initialize nodes evenly distributed across the canvas
            const generateNodes = () => {
                const gridSize = Math.ceil(Math.sqrt(nodeCount));
                const cellWidth = canvas.width / gridSize;
                const cellHeight = canvas.height / gridSize;
                
                for (let i = 0; i < nodeCount; i++) {
                    const row = Math.floor(i / gridSize);
                    const col = i % gridSize;
                    nodes.push({
                        x: cellWidth * (col + 0.5) + (Math.random() - 0.5) * cellWidth,
                        y: cellHeight * (row + 0.5) + (Math.random() - 0.5) * cellHeight,
                        size: Math.random() * 3 + 2,
                        speedX: (Math.random() - 0.5) * maxSpeed,
                        speedY: (Math.random() - 0.5) * maxSpeed,
                        pulsate: Math.random() * Math.PI * 2,
                        pulsateSpeed: Math.random() * 0.05 + 0.02
                    });
                }
            };
            
            const drawNode = (node) => {
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.size * 2
                );
                
                const intensity = (Math.sin(node.pulsate) + 1) * 0.5;
                
                // Deep blue shades
                gradient.addColorStop(0, `rgba(25, 42, 86, ${0.8 * intensity})`);
                gradient.addColorStop(1, 'rgba(0, 0, 51, 0)');
                
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
                
                // Add a glowing effect around the node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(34, 65, 122, ${0.2 * intensity})`;
                ctx.lineWidth = 4;
                ctx.stroke();
                
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(34, 65, 122, ${0.6 * intensity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            };
            
            const drawConnections = () => {
                nodes.forEach((node1, i) => {
                    nodes.slice(i + 1).forEach(node2 => {
                        const dx = node2.x - node1.x;
                        const dy = node2.y - node1.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < connectionDistance) {
                            const opacity = (1 - distance / connectionDistance) * 0.5;
                            ctx.beginPath();
                            ctx.moveTo(node1.x, node1.y);
                            ctx.lineTo(node2.x, node2.y);
                            ctx.strokeStyle = `rgba(44, 82, 160, ${opacity})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    });
                });
            };
            
            const render = () => {
                ctx.fillStyle = 'rgba(15, 23, 42, 1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                nodes.forEach(node => {
                    node.x += node.speedX;
                    node.y += node.speedY;
                    node.pulsate += node.pulsateSpeed;
                    
                    if (node.x < 0) node.x = canvas.width;
                    if (node.x > canvas.width) node.x = 0;
                    if (node.y < 0) node.y = canvas.height;
                    if (node.y > canvas.height) node.y = 0;
                    
                    drawNode(node);
                });
                
                drawConnections();
                
                animationFrameId = requestAnimationFrame(render);
            };
            
            const handleResize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                nodes.length = 0;
                generateNodes();
            };
            
            handleResize();
            window.addEventListener('resize', handleResize);
            render(); // Start the animation loop
            
            return () => {
                window.removeEventListener('resize', handleResize);
                cancelAnimationFrame(animationFrameId);
            };
        }, []);
        
        return (
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full -z-10"
                data-name="quantum-flow-canvas"
            />
        );
    } catch (error) {
        console.error('QuantumFlow component error:', error);
        reportError(error);
        return null;
    }
}

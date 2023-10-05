Bun.serve({
    websocket: {
        message(ws, msg) {
            ws.send('Response');
        },
        
        close(ws) {
            console.log("Client has disconnected");
        },
    },
    fetch(req, server) {
        if (!server.upgrade(req)) {
            return new Response(null, { status: 404 });
        }
    },
    port: 3000,
});
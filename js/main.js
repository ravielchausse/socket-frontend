let initSocket = (conn) => {

    // socket.on("emiter", (data) => { return boby_function });

    socket = io.connect(conn);

    socket.on('connect', () => {

        toggleClass('.status', 'alert-success', 'alert-danger');
        $(".status span").text("Online");
        return;
    });

    socket.on('disconnect', () => {

        toggleClass('.status', 'alert-danger', 'alert-success');
        $(".status span").text("Offline");
        return;
    });

    let id = socket.id;

    socket.on(id, (attributes) => {

        console.log({ socket_id: socket.id });
        return console.log({ id: attributes });
    });

    socket.on("log", (attributes) => {

        return console.log({ log: attributes });
    });

    socket.on("message", (message) => {

        return $(".message span").text(message);
    });

    socket.on("setRooms", (rooms) => {

        return console.log({ rooms });
    });

    return;
}

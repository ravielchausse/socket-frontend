let socket = null;

let toggleClass = (class_element, class_add, class_remove) => {

    $(class_element).removeClass(class_remove);
    $(class_element).addClass(class_add);
};

let joinRoom = (room) => {

    return socket.emit("joinRoom", room);
};

let getRooms = () => {

    return socket.emit("getRooms", {});
};

let emitToRooms = (rooms, message) => {

    return socket.emit("emitToRooms", { rooms, message });
};

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

    socket.on("emitToRooms", (message) => {

        return console.log({ message });
    });

    socket.on("geral", (message) => {

        return $(".geral span").text(message);
    });

    return;
}

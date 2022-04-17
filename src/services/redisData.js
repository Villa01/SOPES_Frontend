
import { connect } from 'socket.io-client';


// const url = process.env.REDIS_SOCKET;
const url = 'https://sopes-p02.uc.r.appspot.com/'
const getLast10 = () => {
    return new Promise((resolve) => {

        const socket = connect(url);
        socket.emit('redis:last');
        socket.on('redis:last', data => {
            resolve(data);
        })
    });
}

const getTopPlayers = () => {
    return new Promise((resolve) => {

        const socket = connect(url);
        socket.emit('redis:top');
        socket.on('redis:top', data => {
            resolve(data);
        })
    });
}


export {
    getLast10,
    getTopPlayers
}
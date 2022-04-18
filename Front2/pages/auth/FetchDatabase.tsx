//When I'll host my server, I'll have to change this constante.
const serverLink = "http://192.168.1.26:3001/";

var result:[{}];

const Api_result = async () => {
    fetch(serverLink)
        .then(response => response.json())
        .then(data => {
            result = data;
        })
        .catch(err => console.error(err));
};

Api_result();

export { result };
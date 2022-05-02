//When I'll host my server, I'll have to change this constante.
const serverLink = "http://192.168.1.26:3001/";
const ntr_univ_serverLink = "http://172.20.10.9:3001/";

var result:any;

const Api_result = async () => {
    fetch(ntr_univ_serverLink)
        .then(response => response.json())
        .then(data => {
            result = data;
        })
        .catch(err => console.error(err));
};

Api_result();

export { result };
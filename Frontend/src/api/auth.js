import axios from 'axios';

export function login(login_data){
    return axios({
        method: "POST",
        url: "http://localhost:8393/login",
        data: login_data,
    })
}

export function cadastro(user){
    return axios({
        method: "POST",
        url: "http://localhost:8393/cadastro",
        data: user,
    })
}
import React from "react"

export default function RteApi() {
    return fetch('http://localhost:3001/')
        .then(data => console.log(data.json()))
}
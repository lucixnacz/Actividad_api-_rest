import mysql from 'mysql2/promise';
export let conexion= mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"brayden.0601",
    port:3306,
    database:"Gestion_academica"
})

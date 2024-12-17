import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"Client_Management_System"
})

con.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err);
        return;
    }
    console.log('Connected to the database');
});

export const db = con; //export the connection to use or add by Routes files.
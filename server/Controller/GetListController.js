const connection  = require("../config/Database")

const getList = function (app) {
    app.get("/api/getList", (req, res) => {
        const sqlGet = "SELECT * FROM list"
        connection.query(sqlGet, (err, result) => {
            if (err) throw err
            else if (result) {
                res.send(result)
            }
        })
    })

    
}
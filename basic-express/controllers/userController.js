class userController {
    static getUsers(req,res) {
        res.send("Users Page");
    }

    static create(req, res) {
        res.send("Create User Page");
    }
}

module.exports = userController;
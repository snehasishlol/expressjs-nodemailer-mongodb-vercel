module.exports = {
    route: "/",
    exec: async(req, res) => {
        res.json({
            hey: "hello world"
        });
    },
}
const sendMail = require("../../util/sendMail");

module.exports = {
    route: "/mail",
    exec: async (req, res) => {
        const { id } = req.body;

        try {
            await sendMail(id, `New mail`, `This is an example mail sent using Resend.`);
        }
        catch (err) {
            console.error(err);
        }

        res
            .status(200)
            .json({
                success: true,
                message: `Mail sent to ${id}.`,
                code: 201
            });
    },
}

const todosService = require('./services.js');

const getAllTypes = async (req, res) => {
    try {
        res.send(await todosService.getAllTaskFromDb());
    }
    catch (err) {
        if (err instanceof HTTPError) {
            return res.status(err.code).send({ message: err.message });
        }
        res.status(500).send(err.message);
    }
};

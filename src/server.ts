import createApp from "./app";

const APP = createApp();
const PORT = process.env.PORT;

APP.listen(PORT, () => {
    console.log(`💜 API rodando em http://localhost:${PORT} ...`);
})
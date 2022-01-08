const app = require('./app');
const PORT = process.env.PORT || 8080;
const { db } = require('./db');

const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () => console.log(`Welcome to my ends, ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

init();

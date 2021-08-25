import express from 'express';
import router from './router/Router';
import { DatabaseType } from './DatabaseWrapper/DataBaseType';
import DatabaseWrapper from './DatabaseWrapper/DatabaseWrapper';

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

new DatabaseWrapper(DatabaseType.MongoDBRegular).connect();

app.use(router)

app.listen(port, () => {
    console.log(` Schedule is listening on port ${port}`);
})

import express from 'express';
import router from './router/Router';
import { DatabaseType } from './DatabaseWrapper/DataBaseType';
import DatabaseWrapper from './DatabaseWrapper/DatabaseWrapper';

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

new DatabaseWrapper(DatabaseType.MongoDBRegular).connect();

app.use(router)

app.listen(port, () => {
    console.log(` Service Category is listening on port ${port}`);
})

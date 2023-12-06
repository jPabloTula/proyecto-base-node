import { DataSource } from "typeorm";
import { User } from "./entities/user";
import { Course } from "./entities/course";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "prueba23",
    database: "proyecto-base",
    synchronize: true,
    entities: [User, Course]
});
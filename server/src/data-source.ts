import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Roles } from "./entity/Roles"
import { Patient } from "./entity/Patient"
import { Examination } from "./entity/Examination"



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "wuipsWcH/ap5/Pf!",
    database: "meddb",
    synchronize: true,
    logging: true,
    entities: [Roles, User, Patient, Examination],
    migrations: [],
    subscribers: [],
})

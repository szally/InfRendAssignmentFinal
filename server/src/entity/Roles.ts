import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn } from "typeorm"
import { User } from "./User"
import { RoleDTO } from '../../../models';


@Entity()
export class Roles implements RoleDTO {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    role: string

    @OneToMany(() => User, (user) => user.roles)
    users: User[]

}
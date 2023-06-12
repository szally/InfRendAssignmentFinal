import { Entity, Column, OneToOne, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Patient } from "./Patient"
import { Roles } from "./Roles"
import { UserDTO } from '../../../models';


@Entity()
export class User implements UserDTO{

    @PrimaryColumn()
    username: string

    @Column()
    pwd: string

    @OneToOne(() => Patient)
    @JoinColumn()
    patient: Patient

    @ManyToOne(() => Roles, (role) => role.users)
    roles: Roles
}
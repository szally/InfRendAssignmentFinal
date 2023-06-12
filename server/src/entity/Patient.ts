import { Entity, Column, OneToMany, PrimaryColumn} from "typeorm"
import { Examination } from "./Examination"
import { PatientDTO } from '../../../models';

@Entity()
export class Patient implements PatientDTO{

    
    @PrimaryColumn()
    taj: number

    @Column()
    name: string
    
    @Column()
    dob: string

    @Column()
    age: number

    @Column()
    sex: string

    @OneToMany(() => Examination, (exam) => exam.patient)
    exams: Examination[]

}

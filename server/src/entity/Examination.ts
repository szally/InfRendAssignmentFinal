import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Patient } from "./Patient"
import { ExaminationDTO } from '../../../models';

@Entity()
export class Examination implements ExaminationDTO{

    @PrimaryGeneratedColumn()
    examID: number

    @Column()
    examType: string

    @Column()
    diagnosis: string

    @Column()
    prescription: string

    @Column()
    treatment: string
    
    @Column({ type: 'date', nullable: true })
    examDate: string

    @ManyToOne(() => Patient, (patient) => patient.exams)
    patient: Patient

}
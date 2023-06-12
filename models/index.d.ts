export interface RoleDTO {
    id: number;
    role: string;
}

export interface UserDTO {
    username: string;
    pwd: string;
    patient: null | PatientDTO;
    roles: null | RoleDTO
}

export interface PatientDTO {
    taj: number;
    name: string;
    dob: string;
    age: number;
    sex: string
}

export interface ExaminationDTO {
    examID: number;
    examType: string;
    diagnosis: string;
    prescription: string;
    treatment: string;
    examDate: string;
    patient: null | PatientDTO
}
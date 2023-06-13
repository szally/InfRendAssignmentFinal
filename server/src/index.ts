
import { AppDataSource } from "./data-source"
import express from "express";
import { getRoutes } from "./routes";
import cors from 'cors';

AppDataSource.initialize().then(async () => {

    const app = express();
    app.use(cors());

    app.use(express.json());
    
    app.use('/api', getRoutes());

    app.listen(2000, () => {
        console.log('Listening on port 2000 ...');
    });

}).catch(error => console.log(error))


//     console.log("Inserting a new user into the database...")
//     const role1 = new Roles()
//     role1.role = "doctor"
//     const role2 = new Roles()
//     role2.role = "patient"
//     await AppDataSource.manager.save(role1)
//     await AppDataSource.manager.save(role2)
//     const roles = await AppDataSource.manager.find(Roles)

//     const patient = new Patient()
//     patient.name = "Marcello Nguyen"
//     patient.tajNumb = 123456789
//     patient.dob = "1982-02-13"
//     patient.age = 41
//     patient.sex = "male"
//     await AppDataSource.manager.save(patient)
//     const patients = await AppDataSource.manager.find(Patient)

//     const user = new User()
//     user.username = "marcellonguyen82" //Marcello Nguyen
//     user.pwd = "DLojac[/w[zo*7yH"
//     user.role = role2
//     user.patient = patient
//     await AppDataSource.manager.save(user)
//     const users = await AppDataSource.manager.find(User)
    

//     const examination = new Examination()
//     examination.patient = patient
//     examination.examType ="Outpatient care" //járóbeteg ellátás
//     examination.diagnosis = "GERD. Gastritis chr."
//     examination.examsDate = "2023-05-31"
//     examination.prescription ="none"
//     examination.treatment = "none"
//     const examination2 = new Examination()
//     examination2.patient = patient
//     examination2.examType ="Family doctor treatment" //házorvosi ellátás
//     examination2.diagnosis = "GERD. Gastritis chr."
//     examination2.examsDate = "2023-05-31"
//     examination2.prescription ="2x40 mg Esomeprazol sandoz, 1x1 Gaviscon"
//     examination2.treatment = "Prescribed medication, lowfat diet"
//     await AppDataSource.manager.save(examination)
//     await AppDataSource.manager.save(examination2)
    
//     const exams = await AppDataSource.manager.find(Examination)
//    // const user2 = new User()
//  //  user2.username = "green.maxine" //Maxine O'Reilly
//    // user2.pwd = "h@@LiQtIRe4J2ts2"
//     //const user3 = new User()
//    // user3.username = "klas.parker" //Nicolas Parker
//     //user3.pwd = "gh/3t.jE/Ptp3Gl["
//     //const user4 = new User()
//    // user4.username = "seize_louise" //Louise O'Doherty
//     //user4.pwd = "z)C66uI3BregM5b6"
//   //  const admin = new User()
//     //admin.username = "bree_jones" //Brianna Jones
//     //admin.pwd = "!18zsJzY4]/@VX32"
    
    
//     console.log("Loaded users: ", users)
//     console.log("Loaded users: ", patients)
//     console.log("Loaded users: ", exams)

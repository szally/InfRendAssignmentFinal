import express from 'express';
import { UserController } from './controller/user.controller';
import { RolesController } from './controller/role.controller';
import { PatientController } from './controller/patient.controller';
import { ExaminationController } from './controller/examination.controller';

export function getRoutes() {
    const router = express.Router();

    const roleController = new RolesController();

    router.get('/roles', roleController.getAll);
    router.get('/roles/:id', roleController.getOne);
    router.post('/roles', roleController.create);
    router.put('/roles', roleController.update);
    router.delete('/roles/:id', roleController.delete);


    const userController = new UserController();

    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);

    
    const patientController = new PatientController();

    router.get('/patient', patientController.getAll);
    router.get('/patient/:taj', patientController.getOne);
    router.post('/patient', patientController.create);
    router.put('/patient', patientController.update);
    router.delete('/patient/:taj', patientController.delete);

    const examController = new ExaminationController();

    router.get('/exams', examController.getAll);
    router.get('/exams/:id', examController.getOne);
    router.post('/exams', examController.create);
    router.put('/exams', examController.update);
    router.delete('/exams/:id', examController.delete);

    return router;
}
import { AppDataSource } from "../data-source";
import { Patient} from "../entity/Patient";
import { Controller } from "./base.controller";

export class PatientController extends Controller {
    repository = AppDataSource.getRepository(Patient);
}
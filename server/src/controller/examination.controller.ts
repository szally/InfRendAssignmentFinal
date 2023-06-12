import { AppDataSource } from "../data-source";
import { Examination } from "../entity/Examination";
import { Controller } from "./base.controller";

export class ExaminationController extends Controller {
    repository = AppDataSource.getRepository(Examination);
}
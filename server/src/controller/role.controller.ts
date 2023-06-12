import { AppDataSource } from "../data-source";
import { Roles } from "../entity/Roles";
import { Controller } from "./base.controller";

export class RolesController extends Controller {
    repository = AppDataSource.getRepository(Roles);
}
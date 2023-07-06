import { getRepository } from "../repositories/get";

const getUserUseCase = (id: string) => {
    const task = getRepository(id);
    return task;
}
import { 
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from './../controllers/user.controller';
import { Router } from "express";

export class UsersRouter {
    static get routes(): Router {
        const router = Router();
        router.get('/', getAllUsers);
        router.get('/:id', getUserById);
        router.post('/', createUser);
        router.put('/:id', updateUser);
        router.delete('/:id', deleteUser);
        return router;
    }
}
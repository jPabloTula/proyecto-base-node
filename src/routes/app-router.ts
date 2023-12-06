import { Router } from "express";
import { CoursesRouter } from "./courses.router";
import { UsersRouter } from "./users.router";

export class AppRoutes {
    static get routes(): Router{
        const router = Router();
        router.use('/courses', CoursesRouter.routes);
        router.use('/users', UsersRouter.routes);
        return router;
    }
}
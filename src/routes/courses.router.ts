import { Router } from "express";
import { 
    createCourse,
    deleteCourse,
    getAllCourses,
    getCourseById,
    updateCourse
} from "../controllers/course.controller";

export class CoursesRouter {

    static get routes(): Router {
        const router = Router();
        router.get('/', getAllCourses);
        router.get('/:id', getCourseById);
        router.post('/', createCourse);
        router.put('/:id', updateCourse);
        router.delete('/:id', deleteCourse);
        return router;
    }
}
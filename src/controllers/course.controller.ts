import { Request, Response } from 'express';
import { Course } from "../entities/course";

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.log(error);
    }
}

export const getCourseById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const courseId = parseInt(id);
        const course = await Course.findOne({ where: { id: courseId } });
        res.json(course);
    } catch (error) {
        console.log(error);
    }
}

export const createCourse = async (req: Request, res: Response) => {
    const newCourse = Course.createCourse(req.body);
    try {
        const saveCourse = await Course.save(newCourse);
        res.status(201).json(saveCourse);
    } catch (error) {
        console.log(error);
    }
}

export const updateCourse = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const currentCourse = await Course.findOne({ where: { id: +id } });
        const result = await Course.update(id, { ...currentCourse, ...Course.createCourse(req.body) });
        res.json({ status: 'success', result });
    } catch (error) {
        console.log(error);
    }
}

export const deleteCourse = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedCourse = await Course.delete({ id: +id });
        res.json({ status: 'success', deletedCourse });
    } catch (error) {
        console.log(error);

    }
}
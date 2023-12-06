import { Request, Response } from 'express';
import { User } from '../entities/user';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userId = parseInt(id);
        const user = await User.findOne({ where: { id: userId } });
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = User.createUser(req.body);
    try {
        const savedUser = await User.save(newUser);
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const currentUser = await User.findOne({ where: { id: +id } });
        const result = await User.update(id, { ...currentUser, ...User.createUser(req.body) });
        res.json({ status: 'success', result });
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.delete({ id: +id });
        res.json({ status: 'success', deletedUser });
    } catch (error) {
        console.log(error);
    }
}
import { 
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity({name:'courses'})
export class Course extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column({ default: true})
    activo: boolean;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    create: Date;

    static createCourse(request: any): Course {
        const { nombre, descripcion, activo } = request;
        const course = new Course();
        course.nombre = nombre;
        course.descripcion = descripcion;
        course.activo = activo;
        return course;
    }
}
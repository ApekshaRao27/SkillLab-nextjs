import { create } from "zustand";
import { shallow } from "zustand/shallow";

export type Student = {
  id: string;
  name: string;
  classroomId: string;
};

export type Classroom = {
  id: string;
  name: string;
};

type ClassroomStore = {
  students: Student[];
  classrooms: Classroom[];
  selectedClassroomId: string | null;

  addStudent: (name: string, classroomId: string) => void;
  removeStudent: (id: string) => void;
  moveStudent: (studentId: string, classroomId: string) => void;

  // derived
  getStudentsByClassroom: (id: string | null) => Student[];
  getTotalStudents: () => number;

  setSelectedClassroomId: (id: string) => void;
};

export const useClassroomStore = create<ClassroomStore>((set, get) => ({
  students: [],
  classrooms: [
    { id: "1", name: "Class A" },
    { id: "2", name: "Class B" },
    { id: "3", name: "Class C" },
  ],
  selectedClassroomId: "1",

  addStudent: (name, classroomId) =>
    set((state) => ({
      students: [
        ...state.students,
        { id: crypto.randomUUID(), name, classroomId },
      ],
    })),

  removeStudent: (id) =>
    set((state) => ({
      students: state.students.filter((s) => s.id !== id),
    })),

  moveStudent: (studentId, classroomId) =>
    set((state) => ({
      students: state.students.map((s) =>
        s.id === studentId ? { ...s, classroomId } : s
      ),
    })),

  // derived helpers
  getStudentsByClassroom: (id) =>
    id ? get().students.filter((s) => s.classroomId === id) : [],

  getTotalStudents: () => get().students.length,

  setSelectedClassroomId: (id) => set({ selectedClassroomId: id }),
}));
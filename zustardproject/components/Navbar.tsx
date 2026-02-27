"use client";

import { useClassroomStore } from "@/store/classroomStore";

export default function Navbar() {
  const totalStudents = useClassroomStore((s) => s.getTotalStudents());

  return (
    <nav className="p-4 border-b flex justify-between">
      <h1 className="font-bold">Classroom Manager</h1>
      <span>Total Students: {totalStudents}</span>
    </nav>
  );
}
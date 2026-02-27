"use client";

import Navbar from "@/components/Navbar";
import ClassroomList from "@/components/classroomList";
import StudentList from "@/components/studentList";
import AddStudentForm from "@/components/addStudentForm";

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="flex gap-4 p-4">
        <ClassroomList />

        <div className="flex-1">
          <AddStudentForm />
          <StudentList />
        </div>
      </div>
    </div>
  );
}
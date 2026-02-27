"use client";

import { useState } from "react";
import { useClassroomStore } from "@/store/classroomStore";

export default function AddStudentForm() {
  const [name, setName] = useState("");
  const selectedClassroomId = useClassroomStore((s) => s.selectedClassroomId);
  const addStudent = useClassroomStore((s) => s.addStudent);

  if (!selectedClassroomId) return null;

  return (
    <form
      className="p-4 border mb-4 flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (!name.trim()) return;
        addStudent(name, selectedClassroomId);
        setName("");
      }}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student name"
        className="border p-2 flex-1"
      />
      <button className="bg-green-500 text-white px-3 rounded">
        Add
      </button>
    </form>
  );
}
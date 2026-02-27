"use client";

import { useClassroomStore } from "@/store/classroomStore";

export default function StudentList() {
  const selectedClassroomId = useClassroomStore((s) => s.selectedClassroomId);
  const classrooms = useClassroomStore((s) => s.classrooms);
  const students = useClassroomStore((s) => s.students);

  const removeStudent = useClassroomStore((s) => s.removeStudent);
  const moveStudent = useClassroomStore((s) => s.moveStudent);

  if (!selectedClassroomId) return null;

  const filtered = students.filter(
    (s) => s.classroomId === selectedClassroomId
  );

  return (
    <div className="flex-1 p-4 border">
      <h2 className="font-bold mb-2">Students</h2>

      {filtered.length === 0 && <p>No students yet.</p>}

      {filtered.map((s) => (
        <div key={s.id} className="flex gap-2 items-center mb-2">
          <span className="flex-1">{s.name}</span>

          <select
            value={s.classroomId}
            onChange={(e) => moveStudent(s.id, e.target.value)}
            className="border p-1"
          >
            {classrooms.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <button
            onClick={() => removeStudent(s.id)}
            className="text-red-500 font-bold"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
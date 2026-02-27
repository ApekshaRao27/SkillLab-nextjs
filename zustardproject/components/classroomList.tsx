"use client";

import { useClassroomStore } from "@/store/classroomStore";

export default function ClassroomList() {
  const classrooms = useClassroomStore((s) => s.classrooms);
  const selectedClassroomId = useClassroomStore((s) => s.selectedClassroomId);
  const setSelectedClassroomId = useClassroomStore(
    (s) => s.setSelectedClassroomId
  );

  return (
    <div className="border p-4 w-64">
      <h2 className="font-bold mb-2">Classrooms</h2>

      {classrooms.map((c) => (
        <button
          key={c.id}
          onClick={() => setSelectedClassroomId(c.id)}
          className={`block w-full text-left p-2 mb-1 rounded ${
            selectedClassroomId === c.id
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
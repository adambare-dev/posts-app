import { useState } from "react";

function Comments() {
  const [comments, setComments] = useState([
    {
      name: "Ali",
      profile: "/pexels-andrewperformance1-697509.jpg",
      commen: "this is very cool right😂",
      id: 1,
    },
    {
      name: "Jphn doe",
      profile: "/pexels-anna-nekrashevich-6801642.jpg",
      commen:
        "managing the state with useRducer was my most difficult part in my react course😢",
      id: 2,
    },
    {
      name: "Sara",
      profile: "/pexels-pixabay-262391.jpg",
      commen: "very heplful Post",
      id: 3,
    },
    {
      name: "Amina",
      profile: "/pexels-divinetechygirl-1181354.jpg",
      commen: "Tailwind was great chioce",
      id: 4,
    },
  ]);
  return (
    <div className="flex flex-col gap-4 my-6">
      <h4 className="text-sm font-bold tracking-wider uppercase text-slate-400 mb-1">
        Discussion
      </h4>
      <section className=" flex flex-col gap-4">
        {comments.map((c) => (
          <div key={c.id} className="bg-slate-800 p-4 rounded-2xl">
            <article className="flex gap-2.5 items-center mb-5">
              <img
                src={c.profile}
                alt="profile picture"
                className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold">{c.name}</h3>
            </article>
            <p>{c.commen}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Comments;

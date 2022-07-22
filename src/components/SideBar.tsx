import { useGetLessonsQuery } from "../graphql/generated";
import { Lessons } from "./Lessons";




export function SideBar(){

    const {data} = useGetLessonsQuery()

    

    return(

        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma das aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lessons =>{
                    return(
                        <Lessons 
                        key={lessons.id}
                        title={lessons.title}
                        slug={lessons.slug}
                        avalibleAt={new Date(lessons. availableAt)}
                        type={lessons.lessonType}
                    />
                    )
                })}
               
            </div>
        </aside>
    )
}
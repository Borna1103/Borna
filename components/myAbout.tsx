import data from "../data/skills.json"

export default function About(){
    return(
        <section className=" bg-gradient-to-r from-teal-600 to-emerald-400 text-white py-12 px-4 text-center">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-4 max-w-2xl mx-auto">
                Hello, my name is Borna, I am a UC San Diego Graduate in Mathematics - Computer Science. I specialize in backend software development as well as User Interactions in 3D space through Extended Reality. I aspire to continue pursuing and learning new ways to enhance with XR to be able to bring to the everyday user.
            </p>

            <p className="mt-10 max-w-2xl font-bold mx-auto">Here are a few of my skills I have learned along the way</p>
            
            <div className="mt-5 mx-auto wrap overflow-hidden">
                {data.map((skill) => (
                    <span className="hover:text-teal-200 font-semibold cursor-default relative sm:text-xl text-base mx-4" key={skill.id}>{skill.skill}</span>
                ))}
            </div>

      </section>
    )
}
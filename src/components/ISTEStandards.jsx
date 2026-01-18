export default function ISTEStandards() {
    return (
        <div className="max-w-6xl mx-auto p-6 mt-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-emerald-600 mb-4">ISTE Standards</h1>
                <p className="text-lg text-gray-600">International Society for Technology in Education Standards</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* ISTE Educator Standards */}
                <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-emerald-600 mb-4">ISTE Educator Standards</h2>
                        <ul className="space-y-4 text-lg">
                            <li>
                                <span className="font-semibold text-emerald-700">2.1</span> Educators continually improve their practice by learning from and with others, and exploring proven and promising practices that leverage technology to improve student learning.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">2.2</span> Educators seek opportunities for leadership to support student empowerment and success and to improve teaching and learning.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">2.3</span> Educators inspire students to positively contribute to and responsibly participate in the digital world.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">2.4</span> Educators dedicate time to collaborate with both colleagues and students to improve practice, discover and share resources and ideas, and solve problems.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">2.5</span> Educators design authentic, learner-driven activities and opportunities that use technology to accommodate learner variability.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">2.6</span> Educators facilitate learning with technology to support student achievement of the 2016 ISTE Standards for Students.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">2.7</span> Educators understand and use data to drive their instruction and support students in achieving their learning goals.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ISTE Student Standards */}
                <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-emerald-600 mb-4">ISTE Student Standards</h2>
                        <ul className="space-y-4 text-lg">
                            <li>
                                <span className="font-semibold text-emerald-700">1.1</span> Students leverage technology to take an active role in choosing, achieving and demonstrating competency in their learning goals, informed by the learning sciences.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">1.2</span> Students recognize the responsibilities and opportunities for positively contributing to their digital communities.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">1.3</span> Students critically curate a variety of resources using digital tools to construct knowledge, produce creative artifacts and make meaningful learning experiences for themselves and others.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">1.4</span> Students use a variety of technologies within a design process to identify and solve problems by creating new, useful or imaginative solutions.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">1.5</span> Students develop and employ strategies for understanding and solving problems in ways that leverage the power of technological methods to develop and test solutions.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">1.6</span> Students communicate clearly and express themselves creatively for a variety of purposes using the platforms, tools, styles, formats and digital media appropriate to their goals.
                            </li>
                            <li>
                                <span className="font-semibold text-emerald-700">1.7</span> Students use digital tools to broaden their perspectives and enrich their learning by collaborating with others and working effectively in teams locally and globally.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function WelcomeLetter() {
    return (
            <div className="max-w-2xl mx-auto p-6">
            <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-emerald-600 mb-4">Welcome Letter</h2>
                    <p className="mb-4 text-lg">Dear Parents,</p>
                    <p className="mb-4 text-lg">
                        My name is Johnny Peña and I have been a music educator for the last 15 years. I am going on my third year as a public school teacher with Austin ISD and have been on faculty at two Universities: The University of Texas of San Antonio (2018-2022) and Baptist University of the Americas (2016-2018).
                    </p>
                    <p className="mb-4 text-lg">
                        I am excited to work with all my returning and new students this year. As the music teacher for Cook Elementary my top priority is to keep music engaging and help students build a lifelong love for music. As part of this goal there are three main procedures I need students to follow:
                    </p>
                    <ol className="list-decimal ml-8 mb-4 text-lg">
                        <li>Make choices that help you and others learn.</li>
                        <li>Use instruments and materials with care.</li>
                        <li>Consider others and be kind.</li>
                    </ol>
                    <p className="mb-2 text-lg font-semibold">Grading in my classroom is primarily split into two categories:</p>
                    <ol className="list-decimal ml-8 mb-4 text-lg">
                        <li>
                            <span className="font-semibold">Participation</span> - All students are capable of making beautiful music, but not all learners will progress at the same pace. For this reason, students receive a grade on participation and effort.
                        </li>
                        <li>
                            <span className="font-semibold">Rules and Procedures</span> - Music making in a group setting requires all students to do their best to follow the rules and procedures.
                        </li>
                    </ol>
                    <p className="mb-4 text-lg">
                        Please don’t hesitate to reach out to me for any questions or concerns at <a href="mailto:juan.pena@austinisd.org" className="text-emerald-700 underline">juan.pena@austinisd.org</a>.
                    </p>
                    <p className="text-lg font-semibold">Best,<br/>Mr. Peña</p>
                </div>
            </div>
        </div>
    );
}
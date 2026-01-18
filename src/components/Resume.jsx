import React from "react";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-10 pt-16">
      {/* Header */}
      <div className="hero text-black rounded-xl p-8 shadow-2xl border-t-4 border-emerald-500">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-3">Juan "Johnny" Peña</h1>
          <a href="mailto:jpenaguitarist@gmail.com" className="btn btn-white text-emerald-600 btn-lg">jpenaguitarist@gmail.com</a>
        </div>
      </div>

      {/* Education */}
      <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
        <div className="card-body">
          <h2 className="card-title text-2xl text-emerald-600 mb-4">🎓 Education</h2>
          <ul className="list-disc ml-6">
            <li>
              <span className="font-semibold text-lg">The University of Texas at San Antonio, San Antonio, TX</span> – Master of Music in Music Performance <span className="text-lg text-gray-500">(Dec 2014)</span>
            </li>
            <li>
              <span className="font-semibold text-lg">Texas A & M International University, Laredo, TX</span> – Bachelor of Music in Music Performance <span className="text-lg text-gray-500">(May 2012)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Publications */}
      <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
        <div className="card-body">
          <h2 className="card-title text-2xl text-emerald-600 mb-4">📚 Publications</h2>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-4">
              <span className="font-semibold text-lg">Nostalgic Atoms</span>, as Key Mosaic – <span className="text-lg text-gray-500">Jan 2026</span><br />
              <span className="text-lg">Instrumental album written by me. <br /><a href="https://www.keymosaic.com" className="text-blue-500 underline">www.keymosaic.com</a></span>
            </li>
            <li className="mb-4">
              <span className="font-semibold text-lg">Seating Chart Ninja</span> – <span className="text-lg text-gray-500">Aug 2025</span><br />
              <span className="text-lg">Essential Areas seating chart app. <br /><a href="https://www.seatingchartninja.com" className="text-blue-500 underline">www.seatingchartninja.com</a></span>
            </li>
            <li className="mb-4">
              <span className="font-semibold text-lg">The Young Guitarist, Vol. 1, 2, and 3</span> – <span className="text-lg text-gray-500">Aug 2022</span><br />
              <span className="text-lg">Sequential music for group/private guitar lessons. Used in two nonprofit group guitar programs.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Awards */}
      <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
        <div className="card-body">
          <h2 className="card-title text-2xl text-emerald-600 mb-4">🏆 Recent Awards</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>Teacher of the Year – Cook Elementary, <span className="text-lg text-gray-500">Dec 2026</span></li>
            <li>Austin Ed Fund Grant Recipient, <span className="text-lg text-gray-500">Aug 2026</span> (grant for classroom set of classical guitars)</li>
          </ul>
        </div>
      </div>

      {/* Experience */}
      <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
        <div className="card-body space-y-6">
          <h2 className="card-title text-2xl text-emerald-600 mb-4">💼 Most Recent Experience</h2>
          <div className="p-4 rounded-lg shadow-md border-t-4 border-emerald-500">
            <p className="font-bold text-lg text-emerald-700">Austin Independent School District (AISD), Austin, TX – Elementary Music Teacher <span className="text-lg text-gray-500">Oct 2023 – Present</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Teach daily music lessons to 400+ K-5 students.</li>
              <li>Align lesson plans with AISD shared curriculum.</li>
              <li>Integrate relevant songs for students.</li>
              <li>Collaborate with staff for student performances.</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg shadow-md border-t-4 border-emerald-500">
            <p className="font-bold text-lg text-emerald-700">Dash Realty, Austin, TX – Real Estate Agent <span className="text-lg text-gray-500">Jul 2021 – Present</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Ensure customer satisfaction in real estate transactions.</li>
              <li>Respond promptly to client communications.</li>
              <li>Guide clients through the home buying process.</li>
              <li>Market on Facebook and Instagram.</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg shadow-md border-t-4 border-emerald-500">
            <p className="font-bold text-lg text-emerald-700">Cognizant/YouTube, Austin, TX – Senior Process Executive <span className="text-lg text-gray-500">Dec 2022 – Oct 2023</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Correct artist metadata, art tracks, music videos, and YouTube Music Charts info.</li>
              <li>Respond to client needs respectfully and promptly.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* University Teaching Experience */}
      <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
        <div className="card-body space-y-6">
          <h2 className="card-title text-2xl text-emerald-600 mb-4">🎓 University Teaching Experience</h2>
          <div>
            <p className="font-semibold text-lg">UTSA, San Antonio, TX – Lecturer of Guitar & Director of UTSA String Project <span className="text-lg text-gray-500">Aug 2018 – May 2022</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Lead teacher for collegiate guitar classes and ensembles.</li>
              <li>Developed 3-year curriculum for String Project Guitar Program.</li>
              <li>Directed nonprofit String Project, supervised 10-15 student employees/year.</li>
              <li>Created schedules for 80-150 students and 10-15 employees.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg">Baptist University of the Americas, San Antonio, TX – Adjunct Professor <span className="text-lg text-gray-500">Aug 2016 – May 2018</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Lead teacher for collegiate guitar and music theory I-IV.</li>
              <li>Developed clear syllabi for courses.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Studio & Classroom Teaching Experience */}
      <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
        <div className="card-body space-y-6">
          <h2 className="card-title text-2xl text-emerald-600 mb-4">🎼 Studio & Classroom Teaching Experience</h2>
          <div>
            <p className="font-semibold text-lg">Self Employed, San Antonio & Austin, TX – Music Teacher, Author, Performer <span className="text-lg text-gray-500">Jan 2007 – Present</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Maintain positive customer relationships.</li>
              <li>Foster growth mindset in students.</li>
              <li>Use Adobe Premiere for editing performances.</li>
              <li>Market books/lessons on social media.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg">Shmuel Bass Torah Academy, San Antonio, TX – General Music Teacher <span className="text-lg text-gray-500">Aug 2016 – Dec 2017</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Developed lesson plans and taught K-4 music classes.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg">Carver Community Center, San Antonio, TX – Lead Guitar Teacher <span className="text-lg text-gray-500">Aug 2016 – Dec 2017</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Taught group classical guitar lessons and arranged music for ensembles.</li>
              <li>Organized bi-annual recitals.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg">Southwest ISD, San Antonio, TX – Mariachi Tutor <span className="text-lg text-gray-500">Sep 2015 – Feb 2016</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Assisted in building musical/technical foundation for students.</li>
              <li>Taught private lessons on guitar, vihuela, guitarron, and violin.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg">UTSA String Project, San Antonio, TX – Lead Guitar Teacher & Assistant Director <span className="text-lg text-gray-500">Aug 2013 – May 2017</span></p>
            <ul className="list-disc ml-6 text-lg">
              <li>Assistant Director (Jan 2016 – May 2017).</li>
              <li>Developed group guitar curriculum and taught lessons.</li>
              <li>Organized recitals and teacher training meetings.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
        <div className="card-body">
          <h2 className="card-title text-2xl text-emerald-600 mb-4">⚡ Skills</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>Software: Adobe Premiere, Adobe InDesign, Google Suite, Microsoft Suite, Video Streaming (Zoom/Google), ProTools</li>
            <li>Web: JavaScript, React/Vite, HTML, CSS, Tailwind CSS, Daisy UI, Bootstrap</li>
            <li>Bilingual: English/Spanish</li>
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
        <div className="card-body">
          <h2 className="card-title text-2xl text-emerald-600 mb-4">📜 Certifications</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>Licensed Real Estate Agent, TREC #764641, Texas</li>
          </ul>
        </div>
      </div>

      {/* References */}
      <div className="card bg-white shadow-xl border-t-4 border-emerald-500">
        <div className="card-body text-center">
          <h2 className="card-title text-2xl text-emerald-600 justify-center mb-4">📞 References</h2>
          <p className="text-lg font-semibold">Available upon request</p>
        </div>
      </div>
    </div>
  );
}

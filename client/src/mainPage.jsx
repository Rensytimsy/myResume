export default function MainPage(){
    return(
        <div>
        <div className="bg-white-100 p-8 rounded-lg  max-w-4xl mx-auto mt-10">
          {/* Profile Section */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start ml-0 md:ml-20 mb-5 space-y-6 md:space-y-0">
            {/* Image Section */}
            <div className="w-full md:w-[200px] flex justify-center">
              <img
                className="w-[90%] max-w-[350px] mb-5 h-auto md:h-[450px]object-contain rounded-md"
                src="/myimage.jpg"
                alt="Timothy Mutwiri"
              />
            </div>

            {/* Text Content */}
            <div className="mt-5 md:mt-10 md:ml-10 px-4 md:px-0">
              {/* Name and Title */}
              <p className="text-xl md:text-2xl font-bold text-gray-800">Timothy Mutwiri</p>
              <p className="text-gray-600 text-sm md:text-base">Full Stack Software Engineer</p>
              {/* <p className="text-gray-600 text-sm md:text-base">Age 21</p> */}


              {/* Education Section */}
              <div className="mt-10">
                <p className="mb-6 text-lg md:text-2xl font-bold text-gray-500">Education</p>
                <ul className="space-y-4">
                  <li>
                    <p>
                      <a className="text-lg md:text-xl font-bold text-gray-600">ALX</a>, Backend Software Engineering
                    </p>
                  </li>
                  <li>
                    <p>
                      <a className="text-lg md:text-xl font-bold text-gray-600">Andela</a>, Frontend Software Engineering
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* About Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-600">About Me</h2>
            <p className="text-gray-700">
              Passionate software engineer with experience in building scalable web
              applications and a knack for creating intuitive user interfaces. I enjoy
              solving complex problems and continuously learning new technologies. Work experience 2years
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-600">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Mern stack, software developer</li>
              <li>JavaScript (React, Node.js, Express, Mongodb)</li>
              <li>HTML5, CSS3, and Tailwind CSS</li>
              <li>SQL and NoSQL Databases (MySQL, MongoDB)</li>
              <li>Version Control (Git, GitHub)</li>
              <li>Cloud Deployment (AWS, Docker)</li>
            </ul>
          </div>

          {/* Projects Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-600">Projects</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold">E-Commerce Platform</h3>
                <p className="text-gray-700">
                  Built a scalable e-commerce platform using MERN stack with features
                  like user authentication, product search, and payment integration.
                  <a href="/projects" className='m-5 text-blue-500 hover:underline'>View Projects</a>
                </p>
              </li>
              <li>
                <h3 className="font-bold">Portfolio Website</h3>
                <p className="text-gray-700">
                  Designed and developed a personal portfolio using Next.js and
                  Tailwind CSS to showcase projects and skills.
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-600">Contact Me</h2>
            <p className="text-gray-700">Email: rensytimsy03@gmail.com</p>
            <p className="text-gray-700">Phone: (+254) 790337192</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/Rensytimsy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/timothy-mutwiri-9900a2262/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>
    )
}
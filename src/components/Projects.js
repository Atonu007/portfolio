import bookstore from '../assets/bookstoree.jpg'
import movie from "../assets/movie.jpg";
import machine from '../assets/499B.png';
import git from "../assets/gitHub.gif";


export const Projects = () => {
    return (
    <div name='project' className='min-h-screen w-full flex justify-center items-center px-3 -mt-20 md:mt-10 mb-4   '>
      

      <div className='flex flex-col md:justify-center md:items-center mt-12'>
        <h1 className='font-bold text-2xl underline underline-offset-8 ml-3  '>Projects</h1>
        <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
          <div className='rounded-2xl h-56 w-64 md:mr-10 mb-3'>
            <img src={movie} alt="movie club" className='h-56 w-64 rounded-lg bg-green-100' />
          </div>
          <div className='md:w-2/5 px-3 md:ml-5 '>
            <h1 className='font-semibold mb-2 '>MoviePedia</h1>
            <p className='font-medium mb-2 '>
              I developed a website called MoviePedia using React.js and Tailwind CSS, which provides information about
              movies that are currently playing, upcoming releases, and top rated films. Additionally, users can access detailed
               information on each movie. To retrieve the movie data, I integrated The Movie Database API into the website.
              
            </p>
            <a href="https://github.com/Atonu007/MoviePedia" target="_blank" rel="noreferrer" className='font-bold' >Code<i className="uil uil-github text-2xl mt-2" ></i></a>
            <a href="https://findsmovie.netlify.app/" target="_blank" rel="noreferrer" className='font-bold ml-10' >Live Demo<i className="uil uil-external-link-alt text-2xl mt-2"></i></a> 



          </div>


        </div>
        {/* <div className='flex flex-col  md:flex-row-reverse justify-center items-center mt-10 '>
          <div className='rounded-2xl h-56 w-64 md:mr-10  '>
            <img src={bookstore} alt="book club" className='h-56 w-64 rounded-lg bg-green-100' />
          </div>
          <div className='md:w-2/5 px-3 md:mr-10 mt-10 '>
            <h1 className='font-semibold mb-2 '>BookFinder</h1>
            <p className='font-medium mb-2 '>
            BookFinder is a React.js web application for book enthusiasts, featuring a user-friendly interface and efficient search functionality. Users can explore and purchase books based on titles, authors, or genres. The app uses Tailwind CSS for
            an appealing design and context API for smooth state management, ensuring a seamless shopping experience.
              
            </p>
            <a href="https://github.com/pranto322/BooksHouse" target="_blank" rel="noreferrer" className='font-bold' >Code<i className="uil uil-github text-2xl mt-2" ></i></a>
            <a href="https://bookshouse21.netlify.app/" target="_blank" rel="noreferrer" className='font-bold ml-10' >Live Demo<i className="uil uil-external-link-alt text-2xl mt-2"></i></a> 
             
          </div> */}


          <div className='flex flex-col  md:flex-row-reverse justify-center items-center mt-10 '>
            <div className='rounded-2xl h-56 w-64 md:mr-10  '>
              <img src={bookstore} alt="book club" className='h-56 w-64 rounded-lg bg-green-100' />
            </div>
            <div className='md:w-2/5 px-3 md:mr-10 mt-10 '>
              <h1 className='font-semibold mb-2 '>TaskMate</h1>
              <p className='font-medium mb-2 '>
                      Added task save in the local stroage of browser.
                      Background Theme is changable and also included Dark Mode.
                      Theme and task are saved in the local stroage of the browser and if not deleted it will use in the next session.
                
              </p>
              <a href="https://github.com/Atonu007/taskmate_react" target="_blank" rel="noreferrer" className='font-bold' >Code<i className="uil uil-github text-2xl mt-2" ></i></a>
              <a href="https://taskadderlist.netlify.app/" target="_blank" rel="noreferrer" className='font-bold ml-10' >Live Demo<i className="uil uil-external-link-alt text-2xl mt-2"></i></a> 
              
          </div>
          


        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
          <div className='rounded-2xl h-56 w-64 md:mr-10 mb-3 md:mt-5'>
            <img src={machine} alt="machine leanrning" className='bg-green-100 rounded-lg h-56 w-64' />
          </div>
          <div className='md:w-2/5 px-3 md:ml-5 mt-3'>
            <h1 className='font-semibold mb-2 '>Smart-Healthcare-Mobile-Application_CSE499B_project </h1>
            <p className='font-medium '>
                      Used Java, custom Graph-QL API, MySQL.
                      User can get primary treatment by using AI doctor.
                      User can find doctor, hospital, and nearest pharmacy easily.
              
            </p>
            <a href="https://github.com/Atonu007/Senior-Design-project" target="_blank" rel="noreferrer" className='font-bold mt-6' >Code<i className="uil uil-github text-2xl" ></i></a>
            

          </div>


        </div>
        <div className='flex flex-col  md:flex-row-reverse justify-center items-center mt-10  md:-mt-3 '>
   
        <div className='rounded-2xl h-56 w-64 md:mr-10 mb-3 md:mt-5'>
        <a href="https://github.com/Atonu007" target="_blank" rel="noreferrer" className='font-bold mt-6' ><img src={git} alt="machine leanrning" className='bg-green-100 rounded-lg h-56 w-64' /> </a>
          </div>
          <div className='md:w-2/5 px-3 md:ml-5 mt-3'>
            <h1 className='font-semibold mb-2 '>Find out More </h1>
            <p className='font-medium '>
                      Used Java, custom Graph-QL API, MySQL.
                      User can get primary treatment by using AI doctor.
                      User can find doctor, hospital, and nearest pharmacy easily.
              
            </p>
           </div>


        </div>
      </div>

    </div>
  )
}
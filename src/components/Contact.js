import mail from "../assets/email-flag.gif";

export const Contact = () => {
  return (
    <div name='contact' className='min-h-screen w-full flex justify-center items-center px-3 -mt-20 md:mt-10 mb-4   '>
    <div className='flex flex-col justify-center items-center pt-16 pb-4'>
      <h1 className='font-bold text-2xl underline underline-offset-8 decoration-2 mb-4'>Contact</h1>
      <p className='font-medium py-3 mb-4'>Submit the form to get in touch.</p>
      <div className='flex flex-col md:flex-row justify-center items-center md:mr-10'>
        <div className='mt-5 md:w-2/5 '>
          <img src={mail} alt="envelop" />
        </div>

        <form action="https://getform.io/f/5948fc94-5d78-4f66-add6-49f23d4a99d5" method='POST' className='md:w-2/5 w-full px-5 md:mt-5 md:pl-5'>
          <div className='border-2 rounded-2xl w-full p-2 border-gray-500 flex items-center mb-2'>
            <i className="uil uil-user text-gray-400 mr-2"></i>
            <input
              type="text"
              name='name'
              placeholder='Enter your name'
              className='w-full outline-none font-medium '
            />
          </div>
          <div className='border-2 rounded-2xl w-full p-2 mt-5 border-gray-500 flex items-center'>
            <i className="uil uil-envelope text-gray-400 mr-2"></i>
            <input
              type="text"
              name='email'
              placeholder='Enter your email'
              className='w-full outline-none font-medium'
            />
          </div>
          <div className='border-2 rounded-2xl  p-2 mt-5 border-gray-500 flex items-center'>

            <textarea
              type="text"
              name='text'
              rows="5"


              placeholder='Your text'
              className='w-full outline-none font-medium'
            />
          </div>
          <button className='border rounded-2xl w-full p-2 mt-5  flex justify-center bg-violet-500 items-center font-bold text-white'>Let's Talk</button>
        </form>



      </div>

    </div>

  </div>
  )
}

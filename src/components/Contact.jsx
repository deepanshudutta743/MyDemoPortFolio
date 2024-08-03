import React,{useRef} from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
function Contact() {
  // Create a ref for the form element
  const formRef = useRef(null);

  const handleSubmit =async (event) => {
    event.preventDefault();
    // Handle form submission
    const formData = new FormData(event.target);

    // Convert FormData to a plain object
    const data = Object.fromEntries(formData.entries());

    // Log the form data
    console.log(data);
    
   await onSubmit(data);
  };

  const onSubmit=async(data)=>{
    const userInfo={
      name: data.name,
      email: data.email,
      message: data.message
    };

    try{
    await axios.post("https://getform.io/f/aejyvkwb",userInfo);
    toast.success("Your msg hasbeen sent");

    if(formRef.current)
    {
      formRef.current.reset();
    }
    }catch(error)
    {
      toast.error("Something went wrong");
    }
  };


  return (
    <section name="Contact" className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact with me</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please fill out the form below to contact me</p>
        <form 
          onSubmit={handleSubmit}
          className="space-y-8"
          ref={formRef}
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="Enter Your Full Name" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="name@flowbite.com" 
              required 
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
              placeholder="Enter Your Query.."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_phx4fap', 'template_5tz0zs6', formRef.current, '8kJv77-bla_A4zVDe')
      .then((result) => {
        setSent(true);
        formRef.current.reset();
        console.log(result.text);
        alert('Message sent');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Error sending message');
      });
  };

  return (
    <div name ='contact' className='w-full h-screen p-4'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-800 p-2'>Hire Me</p>
          <p className="py-6">
            I am available for freelance work. Connect with me via phone:{' '}
            <strong>+234 806 455 5076</strong> or email{' '}
            <strong>
              <a href="mailto:adediranweb@gmail.com">adediranweb@gmail.com</a>
            </strong>
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2'>
            <input
              type="text"
              required
              className=" p-2 bg-transparent border-2 rounded-md focus:outline-none"
              placeholder="Your Name"
              name="user_name"
            />
            <input
              type="email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              placeholder="Your Email"
              name="user_email"
            />

            <textarea
              name="message"
              rows={10}
              placeholder="Write Your Message"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>

            <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" disabled={sent}>
              {sent ? 'Message Sent' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;



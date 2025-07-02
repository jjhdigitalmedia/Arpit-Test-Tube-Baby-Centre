import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f5a98577-08b5-4cd3-ae37-3bb1137a0e35");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    // Step 2: Submit to Pabbly Webhook (NEW)
    await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzMTA0MzA1MjY4NTUzMzUxMzQi_pc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: json
    });

    if (res.success) {
      console.log("Success", res);
      alert('Form has bees successfully submitted, Thanks for contact me')
      const formData = new FormData('');
      
 if (typeof gtag === "function") {
      gtag('event', 'conversion', {
        'send_to': 'AW-17183522494' // <-- Replace with your own conversion ID
      });
    }
      
      
    }
  };

  return (
    <section id='contact' className="text-gray-600 body-font relative">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-rose-700 font-asap">Book Your Appointment</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">If you're seeking treatment or have any queries, feel free to submit this form. I'll get back to you as soon as possible.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={onSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="mobile" className="leading-7 text-sm">Mobile</label>
                <input type="tel" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm">Email</label>
                <input type="tel" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-700 focus:bg-white focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-rose-700 border-0 py-2 px-8 focus:outline-none hover:bg-rose-800 rounded text-lg">Submit</button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              {/* <a className="text-rose-500 text-wrap">arpitivf@gmail.com</a> */}
              <a href="mailto:arpitivf@gmail.com?subject=Inquiry&body=Hello, I have a question about..." className='text-rose-700' target="_blank">arpitivf@gmail.com</a>
              <p className="leading-normal my-5">162 Bai Ka Bagh, Lowther Rd, Jeevan Jyoti Hospital, Prayagraj, Uttar Pradesh 211003
              </p>
              <div className='flex m-auto w-fit'>
                <a href="https://www.instagram.com/dr.vandanabansal" target='_blank'>
                  <FaInstagram className='mx-2 text-rose-600 text-xl' />
                </a>
                <a href="https://www.facebook.com/vandana.bansal.33" target='_blank'>
                  <FaFacebook className='mx-2 text-rose-600 text-xl' />
                </a>
                <a href="https://www.youtube.com/@DrVandanaBansal" target='_blank'>
                  <FaYoutube className='mx-2 text-rose-600 text-xl' />
                </a>
                <a href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/" target='_blank'>
                  <FaLinkedinIn className='mx-2 text-rose-600 text-xl' />
                </a>
              </div>

            </div>
          </form>
        </div>
      </div>
      <div>
      </div>
    </section>
  )
}

export default Contact
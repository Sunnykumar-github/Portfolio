import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Extract values from form elements
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Generate Mailto
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:oneplussunny01@gmail.com?subject=${subject}&body=${body}`;

    // Show success immediately after
    setTimeout(() => {
      setStatus('success');
      e.target.reset();

      // Auto-hide success overlay after 3s
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <div id="contact">
      <div className="flex flex-col w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-container-low opacity-50 -z-10"></div>
        <div className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg relative z-10">
          {/*  Header Section  */}
          <div className="flex flex-col gap-stack-sm max-w-3xl mt-stack-md animate-fade-in-up">
            <div className="flex items-center gap-unit mb-unit">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Connect</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              Initiate Contact
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Have a project in mind or want to discuss opportunities? Reach out directly to start a conversation.
            </p>
          </div>
          {/*  Main Grid  */}
          <section data-aos="fade-up" className="w-full py-stack-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/*  Data-Driven  */}
              <div className="group p-stack-md rounded-2xl bg-surface-container-highest/40 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500 animate-fade-in-up" style={{ "animationDelay": "100ms" }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                </div>
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">Data-Driven Problem Solver</h3>
                <p className="text-on-surface-variant text-body-md">Expertise in Fractal Analytics and building complex, high-performance dashboards.</p>
              </div>
              {/*  Entrepreneurial  */}
              <div className="group p-stack-md rounded-2xl bg-surface-container-highest/40 backdrop-blur-xl border border-white/5 hover:border-secondary-container/30 transition-all duration-500 animate-fade-in-up" style={{ "animationDelay": "200ms" }}>
                <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary-container">rocket_launch</span>
                </div>
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">Entrepreneurial Mindset</h3>
                <p className="text-on-surface-variant text-body-md">Proven track record of launching and scaling initiatives like BIT Cycles from zero to one.</p>
              </div>
              {/*  Versatile Leader  */}
              <div className="group p-stack-md rounded-2xl bg-surface-container-highest/40 backdrop-blur-xl border border-white/5 hover:border-secondary/30 transition-all duration-500 animate-fade-in-up" style={{ "animationDelay": "300ms" }}>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary">groups</span>
                </div>
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">Versatile Leader</h3>
                <p className="text-on-surface-variant text-body-md">Experience leading high-performance engineering teams and impactful community initiatives.</p>
              </div>
            </div>
          </section><div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-stack-md items-start">
            {/*  Left Column: Contact Info & Image  */}
            <div className="lg:col-span-5 flex flex-col gap-stack-lg animate-fade-in-up" style={{ "animationDelay": "400ms" }}>
              {/*  Contact Links  */}
              <div className="flex flex-col gap-0">
                <a className="group flex items-center gap-4 py-6 border-b border-white/5 hover:pl-2 transition-all duration-300" href="mailto:oneplussunny01@gmail.com">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary-container transition-colors">mail</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">Email</span>
                    <span className="font-body-lg text-body-lg text-on-surface truncate">oneplussunny01@gmail.com</span>
                  </div>
                </a>
                <a className="group flex items-center gap-4 py-6 border-b border-white/5 hover:pl-2 transition-all duration-300" href="tel:+919960416324">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary-container transition-colors">call</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">Phone</span>
                    <span className="font-body-lg text-body-lg text-on-surface truncate">+91 9960416324</span>
                  </div>
                </a>
                <a className="group flex items-center gap-4 py-6 border-b border-white/5 hover:pl-2 transition-all duration-300" href="https://www.linkedin.com/in/sunny-kumar3005" target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary-container transition-colors">work</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">LinkedIn</span>
                    <span className="font-body-lg text-body-lg text-on-surface truncate">sunny-kumar3005</span>
                  </div>
                </a>
                <a className="group flex items-center gap-4 py-6 hover:pl-2 transition-all duration-300" href="https://github.com/Sunnykumar-github" target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary-container transition-colors">code</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">GitHub</span>
                    <span className="font-body-lg text-body-lg text-on-surface truncate">Sunnykumar-github</span>
                  </div>
                </a>
              </div>
              {/*  Provided Image  */}
              <div className="relative w-48 h-48 mt-stack-md group">
                <div className="absolute inset-0 bg-primary/10 blur-xl transition-colors duration-500 rounded-full"></div>
                <img alt="Sunny Kumar" className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl transition-transform duration-500 group-hover:-translate-y-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYnMkrLThq4R7ghTnr85mUTY3pRlsI3oN4md-d00PeDV8nsaOOUabfyTuacXTopb-UeWrmVULoKOJ_C9Vo_xWkrOsi1VcS0_xB6-zobuVzZq1wj7-weYVaABGGT5FzlAUZzjTZQNF3GbMijoP0Vg-IrNzJKHjwI3Ohoktr1oIJKcfYP1W1GyeKw26XY2M0qULtSAbJm9OqPy6dEKfhd2znY48QR2zkea6ue4n44XTsOm1sjYBOKbe9jwOxqRSnOGKBjA" />
              </div>
            </div>
            {/*  Right Column: Glassy Contact Form  */}
            <div className="lg:col-span-7 w-full animate-fade-in-up" style={{ "animationDelay": "500ms" }}>
              <form onSubmit={handleSubmit} className="relative flex flex-col gap-stack-md p-8 md:p-12 rounded-3xl bg-surface-container-high/30 backdrop-blur-xl border border-white/5 transition-transform duration-500" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                  {/*  Name Input  */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="name">Full Name</label>
                    <input name="name" className="w-full bg-surface-container text-on-surface font-body-md p-4 rounded-lg focus:outline-none border border-transparent focus:border-secondary-container transition-colors duration-300 placeholder:text-on-surface-variant/50" id="name" placeholder="Vikram Kumar" required="" type="text" />
                  </div>
                  {/*  Email Input  */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">Email Address</label>
                    <input name="email" className="w-full bg-surface-container text-on-surface font-body-md p-4 rounded-lg focus:outline-none border border-transparent focus:border-secondary-container transition-colors duration-300 placeholder:text-on-surface-variant/50" id="email" placeholder="Example@gmail.com" required="" type="email" />
                  </div>
                </div>
                {/*  Message Input  */}
                <div className="flex flex-col gap-2 mt-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="message">Details</label>
                  <textarea name="message" className="w-full bg-surface-container text-on-surface font-body-md p-4 rounded-lg focus:outline-none border border-transparent focus:border-secondary-container transition-colors duration-300 placeholder:text-on-surface-variant/50 resize-none" id="message" placeholder="Write the details here..." required="" rows="6"></textarea>
                </div>
                {/*  Submit Button  */}
                <div className="mt-stack-sm flex justify-end border-t border-white/5 pt-6">
                  <button disabled={status === 'loading'} className={`group relative inline-flex items-center gap-3 px-8 py-4 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full overflow-hidden transition-all duration-300 ${status === 'loading' ? 'opacity-80 cursor-wait' : 'hover:bg-secondary-container/90 hover:-translate-y-1'}`} id="submit-btn" type="submit">
                    {status === 'loading' ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
                        <span className="font-bold uppercase tracking-wider">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10 font-bold uppercase tracking-wider">Send Message</span>
                        <span className="material-symbols-outlined relative z-10 text-[18px] group-hover:translate-x-1 transition-transform">send</span>
                      </>
                    )}
                  </button>
                </div>
                {/*  Success Overlay (Hidden by default)  */}
                {/*  Success Overlay  */}
                <div className={`absolute inset-0 z-20 bg-surface-container/90 backdrop-blur-md rounded-[24px] flex flex-col items-center justify-center transition-opacity duration-500 ${status === 'success' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} id="success-overlay">
                  <div className="w-16 h-16 rounded-full bg-tertiary/20 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-tertiary text-4xl">check_circle</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Transmission Sent</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-center px-8">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div><style dangerouslySetInnerHTML={{
        __html: `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
`}} />
    </div>
  );
}

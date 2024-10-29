import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// Import your custom icons
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import tiktokIcon from '../assets/tiktok.png';
import discordIcon from '../assets/discord.png';
import githubIcon from '../assets/github2.png';
import whatsappIcon from '../assets/whatsapp.jpeg';
import phoneIcon from '../assets/phone.png';

const SocialLink = ({ href, icon, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mr-4"
  >
    <img src={icon} alt={alt} className="w-8 h-8 rounded-lg border border-white" />
  </a>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_tm7048g',
      'template_g1i67s8',
      {
        from_name: form.name,
        to_name: 'Mutiso Muli',
        from_email: form.email,
        to_email: 'mulimutiso525@gmail.com',
        message: form.message,
      },
      'ktM7SWdejptKHGbXC'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Get in touch</p>

        <div className="flex flex-wrap my-4">
          <SocialLink href="https://x.com/Anthonygeeky50" icon={twitterIcon} alt="Twitter" />
          <SocialLink href="https://www.facebook.com/tony.muli/" icon={facebookIcon} alt="Facebook" />
          <SocialLink href="https://www.instagram.com/antonymusau50/" icon={instagramIcon} alt="Instagram" />
          <SocialLink href="https://www.tiktok.com/@anthonymuli537?lang=en" icon={tiktokIcon} alt="TikTok" />
          <SocialLink href="https://discord.gg/anthonymuli" icon={discordIcon} alt="Discord" />
          <SocialLink href="https://github.com/anto-muli" icon={githubIcon} alt="GitHub" />
          <SocialLink href="https://wa.me/+254705200072" icon={whatsappIcon} alt="WhatsApp" />
          <SocialLink href="tel:+254705200072" icon={phoneIcon} alt="Phone" />
        </div>

        <h3 className={styles.heroHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
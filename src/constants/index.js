import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: web,
    },
    {
      title: "JavaScript Developer",
      icon: mobile,
    },
    {
      title: "REST API's Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Joy ecommerce",
      company_name: "JOY ECOMMERCE IS A COMPREHENSIVE ECOMMERCE PLATFORM WITH BOTH ADMIN AND STOREFRONT INTERFACES, BUILT WITH REACT, TAILWIND, AND TYPESCRIPT",
      icon: tesla,
      iconBg: "#383E56",
      date: "AUGUST 2024",
      points: [
        "This was a web application that provides robust tools for managing inventory, customer relations, and fulfillment processes. On the storefront side, customers can seamlessly add products to their cart, proceed to checkout, make secure payments, and arrange shipping to their location.",
      ],
    },
    {
      title: "Royal gems",
      company_name: "ROYAL GEMS IS AN E-COMMERCE PLATFORM FOR A JEWEL SHOP IN NAIROBI",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "MAY 2024",
      points: [
        "Developed a modern e-commerce platform for Royal Gems, a leading jewel retailer in Nairobi, using React and Tailwind CSS for a responsive, visually engaging frontend. Built a robust backend with Node.js, Express, and PostgreSQL to handle transactions, inventory, and secure payments efficiently. Containerized the application stack with Docker, enhancing deployment consistency across environments, and created a RESTful API to streamline communication and integrate third-party services.",
      ],
    },
    {
      title: "AirBnB Platform clone",
      company_name: "WEB-BASED PLATFORM FOR USERS TO SEARCH, BOOK, AND MANAGE HOME RENTALS FROM VARIOUS PROVIDERS",
      icon: tesla,
      iconBg: "#383E56",
      date: "APRIL 2024",
      points: [
        "Developed a full-featured AirBnB clone, combining a Python-based backend for scalable property matching and availability with a JavaScript frontend for a smooth, responsive user experience. Built a RESTful API for efficient communication and integrated features like payment processing, geolocation, and real-time booking, supporting thousands of concurrent users.",
      ],
    },
    {
      title: "Unix shell",
      company_name: "A UNIX COMMAND INTERPRETER",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "OCTOBER 2023",
      points: [
        "Built a Unix command interpreter from scratch in C, implementing core shell features like command parsing, execution, and environment variable management. Advanced capabilities include I/O redirection, piping, background process handling, and signal management, highlighting expertise in C, system calls, and Unix programming.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I am extremely impressed with the ecommerce platform created for Jewels of Joy. The user experience is seamless, and the inventory management features are incredibly efficient. A game-changer for our business!",
      name: "Belinda",
      designation: "CEO",
      company: "Jewels of Joy",
      image: "https://res.cloudinary.com/divq9zycw/image/upload/v1730208603/storefront_bv6k9d.png",
    },
    {
      testimonial:
        "The website developed for Royal Gems is simply outstanding. It beautifully showcases our products and has streamlined our operations significantly. Our customers love the ease of use, and it has greatly boosted our sales!",
      name: "Charity",
      designation: "CEO",
      company: "Royal Gems",
      image: "https://res.cloudinary.com/divq9zycw/image/upload/v1730208134/frontend_ko9jvn.jpg",
    },
    {
      testimonial:
        "Working with Anthony as a backend developer has been a fantastic experience. His expertise and collaborative spirit have greatly enhanced our project, and I appreciate his dedication to delivering high-quality solutions. He’s an invaluable team member!",
      name: "Maitha",
      designation: "Senior Developer",
      company: "Open Tempo Ltd",
      image: "https://res.cloudinary.com/divq9zycw/image/upload/v1730208572/pexels-markusspiske-177598_rqcdj9.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Jewelsofjoy",
      description:
        "Joy Ecommerce is a comprehensive ecommerce platform with both admin and storefront interfaces, built with React, Tailwind, and TypeScript",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "PostreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/anto-muli/Joy-Ecommerce",
    },
    {
      name: "AirBnB Platform clone",
      description:
        "Joy E-commerce is a Comprehensive E-commerce Platform with Both Admin and Storefront Interfaces, built with React, Tailwind, And Typescript.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "RestApi",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/anto-muli/AirBnB_clone_v4",
    },
    {
      name: "Royal Gems",
      description:
        "An e-commerce website for a Jewellery Shop.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Postgres",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/anto-muli/royal_gems_v3",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
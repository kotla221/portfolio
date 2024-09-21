type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Nikhil Kotla",
    fullName: "Nikhil Kotla",
    email: "kotlanikhil7@gmail.com",
  },
  hero: {
    name: "Nikhil Kotla",
    p: ["Salesforce Developer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "Please enter your name",
      },
      email: { span: "Your Email", placeholder: "Please enter your email" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `As a skilled Salesforce professional, I specialize in designing and developing innovative solutions that optimize business processes and enhance customer relationship management. My expertise spans across Service Cloud, utilizing a wide range of Salesforce tools such as Aura Components, Visualforce Pages, and Apex Controllers to deliver high-quality, scalable solutions. I thrive in collaborative environments, where I can creatively solve complex challenges and work closely with clients to meet their unique needs. Passionate about leveraging technology to streamline operations, I am committed to delivering efficient, impactful solutions that drive business success.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "MY ACHIEVEMENTS",
      h2: "Honours & Achievements..",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

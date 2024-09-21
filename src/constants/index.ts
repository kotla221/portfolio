import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  Salesforce,
  html,
  css,
  reactjs,
  Python,
  git,
  Deloitte,
  leadingIndia,
  tcs,
  carrent,
  jobit,
  tripguide,
  rstudio,
  keras,
  sql,
  tableau,
  jira,
  tensorflow,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Salesforce Developer",
    icon: web,
  },
  {
    title: "AI Enthusiast",
    icon: mobile,
  },
  {
    title: "Machine Learning Developer",
    icon: backend,
  },
  {
    title: "Salesforce Administrator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Salesforce",
    icon: Salesforce,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "R Studio",
    icon: rstudio,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
];

const experiences: TExperience[] = [
  {
    title: "Salesforce Developer",
    companyName: "TCS",
    icon: tcs,
    iconBg: "#383E56",
    date: "August 2020 - July 2023",
    points: [
      "Designed, developed, and configured Salesforce solutions using custom objects, fields, validation rules, workflows, triggers, and process builder, reducing resolution time by 30%.",
      "Conducted design walk-throughs and code reviews, improving code quality by 40% and reducing post-implementation issues by 20%.",
      "Proficient in CRM functionalities, facilitating complete Customer Service journeys across channels like Case Management,Live chat, Telephony, and Web Portals.",
      "Manipulated data for import, export, upsert, and update between Salesforce and various systems using Data Loader and Workbench.",
      "Utilized Einstein AI to automate case classification and resolution processes, improving accuracy and efficiency",
    ],
  },
  {
    title: "Technology Consulting Virtual Internship",
    companyName: "Deloitte",
    icon: Deloitte,
    iconBg: "#E6DEDD",
    date: "May 2020 - Jul 2020",
    points: [
      "Developed detailed business cases that outlined project benefits, cost analysis, and potential returns to support decision-making and secure project approval.",
      "Established the methodology and framework for project execution, including setting objectives, milestones, and deliverables to ensure effective project management.",
      "Gained knowledge of cloud computing concepts, including infrastructure, services, and deployment models, to inform cloud-related project decisions.",
      "Evaluated the practicality of cloud solutions for specific business needs, considering factors such as cost, scalability, and security.",
    ],
  },
  {
    title: "Deep Learning Intern",
    companyName: "LeadingIndia.AI",
    icon: leadingIndia,
    iconBg: "#383E56",
    date: "Jun 2019 - Dec 2019",
    points: [
      "Successfully led the design, development, and implementation of a deep learning-based system for cactus species identification, leveraging drone-mounted cameras.",
      "Collaborated seamlessly with a team of engineers to construct and manage large-scale deep learning models, incorporating techniques such as InceptionV3, RESNET, VGG16, DenseNetFastAI and achieved an exception accuracy rate of 99% on testing data.",
      "Collaborated with cross-functional teams to gather requirements, design scalable solutions, and manage the product roadmap.",
      
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: "Salesforce Certified Developer",
    name: "Salesforce",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAA9lBMVEUoD4////+Q0P4NndoAAIYhAI1cUaPU0eUAAIUNAIkbAIvx8PZrYaspAIzOy+EUAIqGzP7AvNklCI6Rir6HgLn49/x+d7OS0//Jxt4KpN+V2P+moco5JZYaAIWblsTX1efn5fB6cbI9LJe3s9RENZrq6fODfLdzaq9USKBLPZ32+/9uZKxlW6je3Otyntuk2P7g8f9jhcqIw/UyHZMQk9QlK5kgUqsba7ofVq6WkMFQQ57O6f/l8/86OZ9OX7O/4/6AtetBR6YjPaEZdsEWgMciSKYTi85Ycr53puBNXrJffcXB5P4dYrUab7wlLZquqc5GUqtsk9TZZt9RAAATBklEQVR4nN2dCX/ath/GDbHANoeLAkkoVxIIIQ1pt5IeydZ1a7PuaDb+e/9v5q/Llw4jGdsJ/D6fNsH40NeSHj067FiV/Q9r+1OcTg+btWKi2V2fPj1jb7CyXQ8UFZ5rr8a9p2Uc2z60ig3o2+MnZLw4dwsGpOEOtyqx2zDWbVAKomUBp/00jHWnJEIczslTMF7YJSIiyOzFNTvjqqyCSgPC8hmXXqmIluUtyma8K0dR4+Eelst4UqbeBOF0ymQsWW+CsLPpTjbGkvUmCJgttZmOKl1vgvBqZTE+gd4EkUl3MjAa6U2LRm7GPYvumDMa6A1srR4fvt3ePnz40mpFG7dizuB3zBn19ab17qHfPyDRv31PIVutd+8fHz/GmA0jg+4YH6GvN61HBkgpv6HkwdbH2z6Jg6+rjJTmumPKqK83rYc4Io53rX9vo239x4yQxrpjyKivN62vPOLBwfvEpv5DRkhT3TFjvLB1xaL1XkQ84DZhyFYW4TX0O2aMQ329EQklzO+tx4db9Mu3f4xECJil2mjvrHqTQhns1r/9aJCXZrpjwjjW9zetWy3EBO7tUD8rjXTHgNHE36z0spGj/KIPaaI7+oz6eoOy8fcsjAf9T/qQBrqjz2jSn2p9zMR4cKB/CQPd0d6zadKf0pUcIQyaTH3d0WU00BtL0TrqRP+LfoXQ1h1NRsPxG/gpI6NJRmrrjh6jid6Q0LIA0ow0uZCm7ugx6vubgPFrVsbf8/c7WnsZ6Q1B/JI5Hz+YGHU93dFhHJuONGZuOlB8NeqMaOmOBmPbdLw4owOgYdjh0tGdzYwX5qNw2QlN81FLdzYzZtCbLbLxwKg+4quttmc01hurtQ1i/73p4MBm3dnEaKw329XGg77p5ZDu3G3HaKw3iPHDNozfMozxbJpHT2dsZBj1z9z8k2w0sQBh2BdbMBrrzbaMWbJxo+6kMprrDb7ghy2ycZVtkiBdd9IYzfWGMGbtV2UtqThSdSeFMYPe0MjKaN5uRJGmO2rGLHpDovWQjfDAYMhKjBTdUTOeZ50Ph+8yZGQfGZxtEC2g1h0lYya9oWE4moNnsR4+bkeIwluaMmbTmwDyH23I/rsWJJMeWxJaKbqjYMysNwxSNyf7H3OAC0KlO3LGzHoTRGv4gIsgP1NVKKJSd+SMmfUmDNiCvz/+8+GjogbSH9/+zRVRpTtSxms/jyuSeUVJX7L/8d2HB7wQ4lN+yz1YyHVHxjjIc6WYmIu3LZjzgpYopLojYdxSb5Ih9ib774pcZS/THZFxa71JBj9GZzIBlyUkuiMybq83yWh9ialr/zZnmRFCojsCYz56E48W6m0RJUX/PRZRCZMh6g7PmKveBNFq/f7h68PXx+yrq0xC0B2OsajnGWBRQioLXneSjA23pGQUG5zuJBnz1psnCk53Eoz5680TRVJ34oyF6M3ThDuWM5b6/FTREdediHFP9IYFjOlOxLgnehNETHdCxst90ZsgvCbPuEd6E0SoO9Ye6k0Qge5Y6XoD4Q4LUaA7llpvgGu71rmF/vfDr303GWwQ1ottiU7F70wi+kY8loTPLh7uzH6PBRQO9KWjwWAYMZ5J9AY4tSm9Db3JYOHQc/jTST0ek0Oy3TsMN3furti+ws408KX88UR2LD3lGu8Bmnhrh0CCBX8eUri8cbS5M7h2XUk+edcBo2wxnL1MrJe4oAmyG5Vk0FS4CaN/ek31S9iZBD7ArauOxfUGH+2R/lGPnMib8+eYwfAksaTMJAMYdocxWkKdg7aw7KWGb5MwkMDSye3dIWmTj3YKjPyVyLNO3mGM8Yg/xzlhFB6nn4qr+qBHGacCP/SERS8NebIV6SSQpTNWLqBQXt01YZwJX0jW9Yx9E8bKtaddVvljG9kZKw3hzRpwiBlPhdoYFtTpNXQc2FwjMgAjxs6yyeKaXI2lc1JrNrvs0BuUOnB/TXai/ZwBPYgUeZERH8tOeQ/kjOFFm/QRDMpYxwde3k1YisV23r5BjGteVAGbXK8D10MIEPjOsku1kjIO7PC9KPS20XS2HeB59j09GE/ss1en2GTD3KUfLSkjOjYMS84Ye7uLFTGe4LR4vj1jRe+Mb0T8AWI84rcicnK0E+U7YPswRv6usHTSNK/5a/lkQzd2GQkjpwkSRuGilDFoQx2alRd8RnqXiHHBVUcwq0Tn5/E3M9ImqXJXMqMFXfqanRqH05ohxiFXTX1qZQ9l/ZCgrHosgMgIaPUbGzLakIWSMbyoJ2W0fLqUla960EKM/JIY1iiLjWbIeDLvsrgHAqPX5ZG0GK1zFp6K8Si46NyTMkJ6nQlXIiBAjOccDG04etKOCN92sKY1xgjY88L3MduqwRgFzYfUtiOhORESTRz/uDRcIUa+AMt3lTOu44wnjm0757Tqx2uzGSO9bZkYiVY2uISDe8R4yOkqzceGVj4mGHs3NzfB67XGsVpRGuOpLHOQ27XYpfgEVDx1feQTpPBjpTOSL/n66E4RIw/ur4U0cYz1AYt1La45UTQSPWsdxsaExU3XUzAGFx2M5ZrjnZHdeF1FuWsFNi0MQMd6pIWVtR2OzyLRdoQxcRJn1NJVVJdpKHXVDi7KIHhGh9rjJScvPvHkl3yFpJVqGoOEOj4nikXijKV4AMgeguCzBjfXlpi7zARUOg518dBzAXMEjNGFyRY7aMeBT91qzzMtqxqM0UVhnBGbB4BSyHrMvDNFdhUz3vDNRNApatytcBFaHZ0ERYAyrq1hEAkPYIfjfZP43cyJMboofdqUMUK04eosKEgTvobhS+FxAJ4RXIWlrnfBlJQmKLX/SNLJrHH8ccmcGGMxVPYfhdbAqVBG3gVIl/JoMgavSKvl7sljoeojNyyehGQXZrwT7Ld3JfThSUHfzBj0O2JqXRpjRxyaI+ch43LigBawB8nj16Smp47LsXTaU/LNTdQhSGeMH6vJOJMx1msS++kG43JS/+273eAkvXbXp+O2bruRiB71bP6gh34P9Nm+IV+FfTb3An9sxu6xP8X7DyTHhoxnaGvjhvXWesmrNkifiJyExU3ncCV9wSZpNMkYMt+FJIGaDGdVWy4XluOGeeDayWBJ82O/BztF5yQfEynwlceGkHhr0MfnLspO7ce2uFLryV4oRP6bq9ZVw2jMZieD+jvCKI6w7klQ700YT/dv8pEG7VLSeat9m0MOwq1EjE2ZJu1+sJFiyij0JPYjWO+CMvKd5z0JZhPYeoB9XA6AHEAvzni/jxUSnlfijPzg3F4EG84OGCW2fPcjGIJhjPLh1B2PoCcYrLPK+CDwcw4IKklGYW5y98O75BjX+1ch/QHHKAzO7X7YE46xsn/5aFd4Rn4MfecDLATG8b7Zcu9OYORHxnY+ooV40XryfXMBTkNkFJeU7XRAyZp5+aTq7kZs5Dli5OfMdzzcqYTxif4mR1ERW7sZexYp98FiT1L6oVdOtWcrknhGfs5ckj4h1cCTD8KT744uxdW/VndZSp0ATSmjsMiTT9/q8pK7D2B5ecmv0woCFxbhlHjhHjfmAL1UaCBbC785/IGUcZMtJwPrSUjMoRomsSWnxKuCuTEH4B3WU26u3TzJNPgbX1Eff/5xAyNZ79FO7ITH2lVtDvYZd/x3+KYkbhOZ6FVfGO+fqWtrV+SMwpx5IliXM1wPiR8hcSgjqqgAFTnyrIsXPp1iz1Y4x3AljjY6V8APjsbLRohzdvDSYrYf+g3gR1y8cHH3JV0GBL1wK5YB/GSLOr2xJQ1JRnHOPHFn2pVKI/TuwD08aU+vCCOczY9q9h3+7DpnnXrnEmcMWB4d3QNrNT+6RBvbnSNsFsHl0XwGLWjPO+2TwblrOXi4/r52D7yjoyN88AI4i8FJu3OHBdjFE9eHC3zzfesOnfnO8tlZ3GWnfq2E9A4VjKmDc2QxQzMY3QJX4R/X7Ho4hy+oOzyjI9P42QdcI8Y+sVS0s1q3ab4cocxgo0kDh53k1MaFC4+jLVdBw3YPQlu9gjYbR6wcsrN0KmnWLLEqKs4oX7PKAs8d1EesRNPhoB5jZD01Rk1+zD0yEI8y3Y42otpJ6xdJ+w1K6FmMkWEvSLXH/xq2G/TkV/48PAsCcxULjqJw4gsXEs+VS+fMg6NQGuZ4wRb2fERiFw65uYgRr0A/BaTYVbqOUycTKIyRUFw5WJ2QylJGjFFznKuxC5pn+LY1a4BMFXbur5DRHAzRd/gC3qKGrnq3bAI8ydZ2HXJzfEh+TGoz5WBi8o/uJD4o58zZNJdPFu64kEgsXmZENYcwLjyy/qjuEHHq2XHGQzfYGDF2LBs/IufhY7Hm4G9uqPg4jndu3eDkkFXNSHPInLeP6zHJPczYcFJm8dkaSBljypw5LuAnju+QNpzUzSsQtB2E0aWtxcAntyPJiKSHbWRlldSWiwGSlRY+ljy5FDS13nDKCtphULZJi07aWix8ax9fKHUgka1PlTGq58whLiyd8XhMihzECcMFJcZoWwGVyHjFMUKPVbRzkGDE9Sum+jHGNRuowHdn6mLG1LEZ9oiKjLGiLKvB9AiJGXlmewYyM1rQqeEHnCp1V2DEhzXOZlhuZPlYx0VlI6OboEoyKhucxI1Zu7haoEpGcjcLI/A91xnjLQIjbhHnLsDCyBiRLyIL1FDJJvWR6nIaI0i+qjTJqJozJxSXq+FwaE1xynD6ezPHn2RjBIvpynEGuHkgxX7oeAnGtUMWpDHGseMSkaszXXWtTYz+OIVxoqiQ+CGqhoOXx3p4Fe6ZT24UlYZDc0YPHdnDjd2atZ+9sR+WVYxBm1rUnpLefO/UpkaSXBAVg02M3FI67h1BKsYoj3EhmrjBs/ekeoS6Wg8Z0YnYp4BxSTZSn3PO2nssI3Tcpe3ib3DbFUz+TsgdYCNPKOuC4ZmuSxnSlmk4yb9wzjEq5sxX3XmXGQRQ687R/XYX03p7sJp1u9j3dOc4eaBJnk6Cw+4c1zn0aQEQw7yLJDjYeDnvziB0rqft+nRJ7qhb69TbyJ2Sb/AFwKCNnO+QnhlA9KmDNntgfFI/GUPiV5fk1KpgT8WpGFWdQS/q7wM6GgBIxwHS58rYAAGgn9h4AQi/g4mN5KFw/MA7SyWgnZJwSAH6uAfDzkw+kaYQBl2V6NSKSDQCIuNezJnzjylwjHsxZ86vlubfvbYHc+bhHLmKUd1d2ZkI58hVjHuwlDVpyCWMezBnHs6Rqxj3YM7c5pEExp2fM4/myJWMOz9n7gmv0hUY67teWIWX1UjeMbvrLsARHqMSGXd8zhwOBSKRccfnzMW3JkkYd3zOPDZHrmYU3lyyUwElf5deZKz87ZXx1uJCAo5W/4lAEsbP1R+Begb8GQccDV+/fKPF+FP15fF/1mjXKMHo/PXL4+pPWow/v6hWj1/+t9opSjD69CcirL74WYuxghgx5evz0a5UTDD67VdMiBglPDLGN9Uqpfzz02gXDAEY/Y8RVquS6ihl/F6thpS/PXvK1uiXtwFhtfpZk/GHF9WI8tf/PWtKkCCsvvhBk/FVxIgp3/71bOtla/RHnBAxvtJkrMSPIpS/PMu89Ly/qy+ryZDhSBk/cwciyj+eW15CD/woEEqro5zxpxf8sehsz8riwZH147FAWH0hcQAKxlciI6Z8NhYP29LjY0kapdVRzhi0kDzl87B4xJbKCOWto4rxZ1lGVp+FxUOmTUUobzmUf29OnpHVJ7d4rdFvf6oIVdmoYpTWyIDyySxeZEvl2Sitjeq/jSiR1jjlU1i8uC2VIkpFNYWx8jkF8iksXtKWyhClbWMqYzpk2RYP8KbNADGFMbW4Vpn5KScvkS19kU6oLqjpjJVXbzQoi8/LlsSW8oRvFHKzkRG1kxsoi7d4clvKE0oGOLQZtSgLtHjIlspNmwHhZsbNJbZ6XJTFw7Z0QzXUINRhRJTpEluQxYOjd0rTFhJ+TquHJoyEcpP85GzxgrHE7Ql1GVF830iZo8VLt6UUUJfQgFGH8td8LN4m00YIv+sn3IARzxJspNze4rVGf20klI3458SoQ/n2l63q5UZbakxozIgojwu0eMJYYg6EGRgrlR90KLPkpadBeCzv6ufNiCgLsHhQx5ZmIczImL/Fw7ZUMpaYJHyTiTAzowalgcXLx5bmz6hjZPUsXl62tAhGLSO70eJBOsW9gVDX0uTPqEWZavHytKVFMWrZdeUoXr62tDjGipaRlVm8vG2pMvJg1DKyvMXTsaW5EObFqGVk/xh57OlaCLwCbKky8mLUoay+/mU1wrH6679qaYR5Mm42sgjzZfXt27fVlxul9Dg/wnwZNYwsBt24R0Zbqox8GfUoNxBmtaXKyJtRw8huINzCtCkif8ZtKIsgLIZRw64rCLe2NNIohlHDyIqE25s2RRTFqGFkSyIskrGy2ciGgEUSFsyoR5mXLVVGwYybLV6epk0RhTOmU5ZAWAqjety5FMKSGOV2PW9bqoySGEUjm78tVUZpjMTiBZgvijFtiiiREcUP39/g+F5aFpIol/Fp4v/ZwP4zSAcwwAAAAABJRU5ErkJggg==",

    },
  {
    testimonial:"Salesforce Certified Platform Developer I ",
    name: "Salesforce",
    image: "data:image/png;base64,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",

  },
  {
    testimonial:"Microsoft certified Azure Fundamentals",
    name: "Microsoft",
    image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg?branch=main",
   },
];

const projects: TProject[] = [
  {
    name: "Detecting Authentic and Fraudulent Job Advertisements",
    description:
      "Engineered cutting-edge Machine Learning (ML) and Natural Language Processing (NLP) models to achieve accuracy of 98% in distinguishing authentic from fraudulent job vacancy advertisements.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "TD-IDF",
        color: "green-text-gradient",
      },
      {
        name: "SMOTE",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://www.kaggle.com/code/kotlanikhil222/fake-job-detection-using-nlp/notebook",
  },
  {
    name: "Traffic-sign-detection",
    description:
      "Employed YOLO V3 detection algorithm for robust traffic sign recognition and accurately detected and recognized traffic signs within images from cameras and sensors. Attained a remarkable 97.08% accuracy for proposed RMR-CNN model.",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "CV",
        color: "green-text-gradient",
      },
      {
        name: "YOLO-V3",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/kotla221/Traffic-sign-detection",
  },
  {
    name: "Twitter-Sentiment-Analysis",
    description:
      "Developed a Twitter Sentiment Analysis tool to classify the polarity of tweets (positive, negative, or neutral) at both sentence and feature levels. Visualized the results using a pie chart to provide clear insights into overall sentiment trends.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Sentiment Analysis",
        color: "green-text-gradient",
      },
      
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/kotla221/Twitter-Sentiment-Analysis",
  },
];

export { services, technologies, experiences, testimonials, projects };



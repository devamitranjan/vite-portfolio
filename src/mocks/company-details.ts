import { ICompanyDetails } from "./types/company-details";

export const companyDetails: ICompanyDetails[] = [
  {
    companyName: "Druva Data Solutions Pvt. Ltd.",
    roles: [
      {
        "Staff Software Engineer - October 2023 - Present": [
          "Architected login project to enhance customer engagement by showcasing offers, leading to increased product adoption by 23%.",
          "Developed product-led growth experience, enabling customers to explore and try products independently, bypassing traditional sales channels which led to 500+ trials.",
          "Created common API services to unify legacy and new REST APIs, streamlining maintenance and enabling rapid security updates.",
          "Implemented complex state machines for seamless delivery of security addons as part of self-service offerings.",
          "Engineered URL-based restrictions using NGINX redirection.",
          "Implemented MFA mandate for Fedramp and FIPS compliance.",
          "Developed resuable number text component adopted across all product teams, enhancing in-house design library.",
        ],
      },
      {
        "Software Engineer - April 2022 - September 2023": [
          "Led Low-Level Design of dashboard charts using Amcharts for Enterprise workloads backup, resulting in improved data visualization for multiple customer types.",
          "Revamped dashboard application, migrating it to TypeScript, reducing loading type by 50%, and improving code maintainablity.",
          "Integrated Vite microfrontend library into webpack application, enhancing component reusability and reducing feature implementation time by 3 sprints.",
          "Developed MFA features (Email, TOTP, and SMS) for two-factor authentication, ensuring enhanced security.",
          "Utilized Webpack Module federation to create microfrontend sidebar in React, improving feature delivery time by 75%.",
          "Implemented unit tests using Jest and React testing library, achieving over 85% test coverage across projects.",
          "Resolved 250+ critical and blocker bugs, enhancing application stability and user experience.",
          "Developed robust state management solution leveraging Xstate features, ensuring application stability and consistency.",
        ],
      },
    ],
    companyIndex: "druva",
  },
  {
    companyName: "Infosys Ltd",
    roles: [
      {
        "Senior System Engineer - January 2022 - March 2022": [
          "Developed healthcare website using React JS for frontend with Express JS for backend, ensuring HIPAA compliance",
          "Integrated MongoDB and SQL databases for flexible and stuctured data storage, implementing strignent security measures",
          "Deployed the source code in QA and UAT through Azure Devops pipeline.",
        ],
      },
      {
        "System Engineer - April 2020 - January 2022": [
          "Carried out Agile practices, requirements gathering, requirement analysis and estimation.",
          "Followed SCRUM Methodologies using JIRA tool for the software development process.",
          "Built Reusable components, methods and front – end libraries for future code in ReactJS.",
          "Translated design and wireframes into high quality code.",
          "Optimized components for maximum performance and debugged on developer tools of the browser.",
          "Implemented the complex API calls using axios and used ContextAPI for state management.",
          "Build the entire static texts and images to be changed dynamically with Sitecore JSS Code First approach.",
        ],
      },
      {
        "System Engineer Trainee - February 2020 - April 2020": [
          "Trained in Python, DBMS and Microsoft Technologies including C#.",
          "Designed database layer using MSSQL.",
          "Developed Data Access Layer by ADO.NET and EF Core 2.0.",
          "Developed Service Layer by ASP.NET Web API.",
          "Developed Presentation Layer Using HTML, CSS, Bootstrap and React.",
        ],
      },
    ],
    companyIndex: "infosys",
  },
];

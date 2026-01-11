import React from "react";
import Card from "./components/Card";

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    nameOfCompany: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    nameOfCompany: "Apple",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    nameOfCompany: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    nameOfCompany: "Amazon",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    nameOfCompany: "Netflix",
    datePosted: "4 days ago",
    post: "Web UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    nameOfCompany: "Microsoft",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    nameOfCompany: "Tesla",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    nameOfCompany: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    nameOfCompany: "IBM",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    nameOfCompany: "Oracle",
    datePosted: "5 days ago",
    post: "Web Application Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hour",
    location: "Gurgaon, India"
  }
];


  console.log(jobOpenings);

  return (
    <div className="parent">
{jobOpenings.map(function(el,idx){
  return <div key={idx} >
    <Card company={el.nameOfCompany} post={el.post} tag1={el.tag1} tag2={el.tag2} pay={el.pay} logo={el.brandLogo} location={el.location} date={el.datePosted}  />;
  </div>
})}
    </div>
  );
};

export default App;

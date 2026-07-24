import React from "react";
import { Link } from "react-router-dom";
import "./TableOfContents.css";

const contents = [
  { title: "First Page", page: 1, path: "/FirstPage" },
  { title: "Content View", page: 2, path: "/SecondPage" },
  { title: "Chief Editor's Remarks", page: 3, path: "/ThirdPage" },
  { title: "Remarks from the Chief Principal", page: 4, path: "/FourthPage" },
  { title: "Remarks from the Board of Management Chairperson", page: 5, path: "/FifthPage" },
  { title: "Remarks from the Bishop", page: 6, path: "/SixthPage" },
  { title: "Remarks from the Deputy-Administration", page: 7, path: "/SeventhPage" },
  { title: "Remarks from the Deputy Principal-Academics", page: 8, path: "/EighthPage" },
  { title: "Remarks from HOD Examinations", page: 9, path: "/NinethPage" },
  { title: "Careers Department", page: 10, path: "/TenthPage" },
  { title: "Remarks form the Science Department", page: 11, path: "/ElevenPage" },
  { title: "Remarks from the Social Sciences", page: 12, path: "/TwelvePage" },
  { title: "Alumni Corner", page: 13, path: "/alumni" },
  { title: "Acknowledgements", page: 14, path: "/acknowledgements" }
];

const TableOfContents = () => {
  return (
    <div className="toc-page">
      <h1 className="toc-title">TABLE OF CONTENTS</h1>

      <div className="toc-card">
        {contents.map((item, index) => (
          <Link key={index} to={item.path} className="toc-item">
            <span>{item.title}</span>

            <span className="dots"></span>

            <span>{item.page}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
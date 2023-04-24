import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import certificate_1 from "../assets/certificate_1.png";
import certificate_2 from "../assets/certificate_2.png";
import certificate_3 from "../assets/certificate_3.png";
import certificate_4 from "../assets/certificate_4.png";

function CertificationCard({ logo, title, date }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <br />
          <span>Date : {date}</span>
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default function Certifications() {
  const certifications = [
    {
      logo: certificate_4,
      title: "DevOps, Cloud, and Agile Foundations",

      date: "Mar 22, 2023",
    },
    {
      logo: certificate_1,
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",

      date: "Feb 20, 2023",
    },
    {
      logo: certificate_3,
      title: "Python Functions, Files, and Dictionaries",

      date: "May 16, 2022",
    },
    {
      logo: certificate_2,
      title: "Data Collection and Processing with Python",

      date: "May 27, 2022",
    },
  ];
  const PAGE_SIZE = 3;
  const [activePage, setActivePage] = React.useState(1);

  const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

  const handleClick = (event) => {
    setActivePage(event.target.text);
  };

  const pages = [];

  for (let number = 1; number <= totalPages; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={handleClick}
      >
        {number}
      </Pagination.Item>
    );
  }

  const startIndex = (activePage - 1) * PAGE_SIZE;
  const endIndex = activePage * PAGE_SIZE;
  const currentCertifications = certifications.slice(startIndex, endIndex);

  return (
    <div>
      <Row className="my-3">
        {currentCertifications.map((certification) => (
          <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
            <CertificationCard {...certification} />
          </Col>
        ))}
      </Row>
      <Row className="my-3">
        <Col>
          <Pagination>{pages}</Pagination>
        </Col>
      </Row>
    </div>
  );
}

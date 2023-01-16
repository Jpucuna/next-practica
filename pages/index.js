import Layout from "../components/Layout";
import Link from "next/link";
import { skills } from "../profile";
import { experiences } from "../profile";
var moment = require("moment");

console.log("experiences", experiences);

const Index = () => (
  <Layout>
    {/* header card*/}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="ryan-ray.jpeg" alt="image-user" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Ryan Ray</h1>
              <h3>FullStack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, asperiores et quo earum quasi quis impedit magni sit,
                rerum fugit eaque soluta quod ipsam praesentium delectus,
                corporis quia animi ad?
              </p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/*Second section*/}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li key={i}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to ? to : moment().format("YYYY")}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>

            <Link legacyBehavior href="">
              <a className="btn btn-light">Know Here</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default Index;

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App container">  {/* Added "container" for Bootstrap */}
        <div className="row">
          <div className="col-md-12"> {/* Made the entire first section a single column */}
            <h2>🌱Rodolfo Miguel Ortega Santiesteban</h2>
            <h5>C#, Python, AWS, SQL, Backend Developer</h5>
            <p>Cuba</p>
          </div>
          <div className="col-md-12">
            <p>
            C#, Python, AWS, Backend Developer. Experience with C# .Net, Python microservices in AWS, and SQL Server queries and
SPs optimizations. Work as part of a respectful, collaborative team, maintaining and migrating legacy system to a modern
microservices-based scalable infrastructure, archiving a perceived performance time increase from 5 min in the legacy
monolithic solution to 15 secs in the worst scenarios in the client. I can work independently but relay on the team if needed.
            </p>
          </div>

          <div className="col-md-12"> {/* Made the experience section a single column */}
            <h3>Experience</h3>
            <div className="card mb-3">
              <div className="card-body">
                <h4>PartsBase Inc.</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  C#, Python, AWS, SQL, Backend Developer
                </h6>
                <ul>
                  <li>Co-designed the architecture, and development from legacy .Net MVC system into scalable C# .Net,
                  Python in AWS using API Gateway, S3, CDN, Lambdas.</li>
                  <li>Achieved a performance increase from a worst scenario of 5 minutes to 15 seconds response in the current
                  solution.
                  </li>
                  <li>Implemented and maintained Azure DevOps CI/CD pipelines to automate build, test, and
                  deployment processes.</li>
                  <li>Optimize SQL Server queries and Stored Procedures from execution time of various minutes in to
                  less than 15 seconds in most of the cases.</li>
                  <li>Design and implemented asynchronous processes using WebSocket and AWS S3, to deal with the
                  queries that couldn’t be reduced below the 30 seconds of execution time due to the large quantity of
                  data to be processed.</li>
                  <li> Follow SCRUM agile methodology and best practices, with a team of 3 to 4 people and 15 days
                  sprints. Leveraging my understanding of the system processes to provide guidance and support to
                  team members, contributing to efficient problem-solving and project delivery</li>
                  <li>Coach junior developers promoting the use of clean, efficient, and well-documented and testable
                  code.
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h4 className="card-title">Fivana</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                C#, Python, AWS, Backend Developer
                </h6>
                <ul>
                  <li>Maintained ASP .NET and MVC codebase.</li>
                  <li>Developed .NET Core and Python AWS Lambda services.</li>
                  <li>
                    Participated in the technical design of new AWS architectures.
                  </li>
                  <li>
                    Created and maintained CI/CD pipelines in Azure DevOps
                    Services.
                  </li>
                  <li>Configured AWS services using the console and CLI.</li>
                  <li>
                    Developed and maintained SQL Server queries and stored
                    procedures.
                  </li>
                  <li>
                    Participated in Scrum ceremonies and collaborated
                    effectively with team members.
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <p className="card-title">See full experience in my LinkedIn profile or ask the chatbot about.</p>
                <p className="card-subtitle mb-2 text-muted">
                  <a href="https://www.linkedin.com/in/rodolfo-ortega-santiesteban/">linkedin.com/in/rodolfo-ortega-santiesteban/</a>
                </p>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h4 className="card-title">EDUCATION</h4>
                <hr></hr>
                <h6 className="card-subtitle mb-2 text-muted">
                Universidad de Oriente
                </h6>
                <p className="card-subtitle mb-2 text-muted">
                Bachelor's degree in Computer Science.
                </p>
              </div>
            </div>
          </div>
        </div>
        <script src="/public/chatbotConfig.js"></script>
      </div>
    );
  }
}

export default App;

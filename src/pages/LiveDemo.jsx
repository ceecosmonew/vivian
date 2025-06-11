
import { motion } from "framer-motion";

export default function LiveDemo() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="container mt-5">
      <h2 className="text-warning mb-4">Projects</h2>
      <p>Here are some of the projects I built while learning frontend development. These reflect my growing skills in React, layout design, responsiveness, and creativity. As a <strong>marketer</strong> and <strong>strong communicator</strong>, I aim to create appealing and clear user interfaces.</p>

      <div className="row g-4">
        {[1, 2, 3].map((i) => (
          <div className="col-md-4" key={i}>
            <div className="card shadow-sm border-0 h-100">
              <img src={`/images/project${i}.png`} alt={`Project ${i}`} className="card-img-top rounded-top" />
              <div className="card-body">
                <h5 className="card-title">Project {i}</h5>
                <p className="card-text">This is a sample project I completed during my learning phase. It demonstrates my understanding of layout, color, and functionality.</p>
                <a
                  href={`https://emmy-crystalss.netlify.app`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-2"
                >
                  Live Demo
                </a>
                <a
                  href={`https://github.com/username/project${i}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark mt-2 ms-2"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}


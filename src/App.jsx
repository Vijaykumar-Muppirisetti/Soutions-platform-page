import React from "react";
import "./App.css";

// Import all images at the top
import elearningImg from "./assets/images/elearning.jpg";
import animationImg from "./assets/images/animation.jpg";
import trainingImg from "./assets/images/training.jpg";
import assessmentImg from "./assets/images/animation.jpg";

/* Icons unchanged – keep your SVG components */

/* Service Card */
const ServiceCard = ({ icon, title, description }) => (
  <div className="serviceCard">
    {<div className="iconContainer">{icon}</div>}
    <h3 className="serviceTitle">{title}</h3>
    <p className="serviceDescription">{description}</p>
    <button className="linkButton">
      Learn more <span className="arrow"></span>
    </button>
  </div>
);

/* Feature Section */
const FeatureSection = ({
  reverse,
  tag,
  title,
  description,
  description2,
  button1,
  button2,
  imageSrc,
  backgroundColor = "#f5f5f5",
}) => (
  <section className="featureSection" style={{ backgroundColor }}>
    <div className={`featureContainer ${reverse ? "reverse" : ""}`}>
      <div className="featureContent">
        {tag && <span className="featureTag">{tag}</span>}
        <h2 className="featureTitle">{title}</h2>
        <p className="featureDescription">{description}</p>
        {description2 && <p className="featureDescription">{description2}</p>}
        <div className="buttonGroup">
          <button className="primaryButton">{button1}</button>
          <button className="secondaryButton">
            {button2} <span className="arrow"></span>
          </button>
        </div>
      </div>
      <div className="featureImageContainer">
        {/* Check if it's an image path or emoji/text */}
        {typeof imageSrc === "string" &&
        (imageSrc.includes("/") || imageSrc.includes(".")) ? (
          <img src={imageSrc} alt={title} className="featureImageReal" />
        ) : (
          <div className="featureImage">{imageSrc}</div>
        )}
      </div>
    </div>
  </section>
);

/* Testimonial Card */
const TestimonialCard = ({ rating, text, author, role }) => (
  <div className="testimonialCard">
    <div className="stars">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="star">
          ★
        </span>
      ))}
    </div>
    <p className="testimonialText">"{text}"</p>
    <div className="authorInfo">
      <div className="avatar"></div>
      <div>
        <div className="authorName">{author}</div>
        <div className="authorRole">{role}</div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="container">
      <section className="servicesSection">
        <span className="sectionTag">Services</span>
        <h1 className="mainTitle">What we offer</h1>
        <p className="subtitle">
          Complete learning solutions covering development, delivery, and
          assessment.
        </p>

        <div className="servicesGrid">
          <ServiceCard
            title="E-Learning Platforms"
            description="Flexible digital learning designed for real schedules."
          />
          <ServiceCard
            title="Visual & Animation"
            description="Complex ideas explained visually."
          />
          <ServiceCard
            title="Training Solutions"
            description="Programs that build skills and capability."
          />
          <ServiceCard
            title="Psychometric Assessments"
            description="Data-led insight into people and performance."
          />
        </div>
      </section>

      {/* E-Learning Feature */}
      <FeatureSection
        tag="Digital"
        title="E-learning that works in the real world"
        description="We design e-learning platforms where learning fits naturally into everyday work and study."
        description2="Our courses are built for busy lives — short, relevant, and purposeful."
        button1="Explore"
        button2="Learn"
        imageSrc={elearningImg}
        backgroundColor="#ffffff"
      />

      {/* Animation Feature */}
      <FeatureSection
        reverse={true}
        tag="Visual"
        title="Animation that moves people and stays with them"
        description="Motion tells stories that words alone cannot. We use animation and motion design that captures attention and makes ideas unforgettable."
        button1="Explore"
        button2="Watch"
        imageSrc={animationImg}
        backgroundColor="#f5f5f5"
      />

      {/* Training Feature */}
      <FeatureSection
        tag="Training"
        title="Training that builds lasting capability"
        description="We design training programs that change how teams work."
        description2="Knowledge transfers. Skills develop. People grow."
        button1="Button"
        button2="Button"
        imageSrc={trainingImg}
        backgroundColor="#ffffff"
      />

      {/* Assessment Feature */}
      <FeatureSection
        reverse={true}
        tag="Insight"
        title="Assessment that reveals true potential"
        description="Our psychometric tools cut through noise. They show what people can do, what they need, where they belong. Data that matters."
        button1="Assess"
        button2="Discover"
        imageSrc={assessmentImg}
        backgroundColor="#f5f5f5"
      />

      <section className="testimonialsSection">
        <h2 className="testimonialsTitle">Real results</h2>
        <p className="testimonialsSubtitle">
          What clients say about working with us
        </p>
        <div className="testimonialsGrid">
          <TestimonialCard
            rating={5}
            text="Their e-learning platform transformed how we train. Engagement went up. Completion rates too."
            author="Sarah Chen"
            role="Training director, TechCorp"
          />
          <TestimonialCard
            rating={5}
            text="The animation work brought our brand story to life in ways we never imagined possible."
            author="Marcus Webb"
            role="Creative lead, Brand Studios"
          />
          <TestimonialCard
            rating={5}
            text="Their assessments gave us clarity on team strengths we didn't know we had."
            author="Elena Rodriguez"
            role="HR manager, Global Solutions"
          />
        </div>
      </section>
    </div>
  );
}

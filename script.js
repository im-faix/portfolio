// Edit this object to update the portfolio content without touching the page layout.
const portfolio = {
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  skills: ["AWS", "Kubernetes", "Terraform", "Docker", "GitHub Actions", "Linux"],
  projects: [
    { title: "SRE Dashboard", description: "A focused operations dashboard for understanding service health, deployments, and reliability signals.", tags: ["React", "Go", "Observability"], link: "#" },
    { title: "Cloud Infrastructure", description: "Infrastructure as code and deployment workflows designed to make environments consistent and repeatable.", tags: ["Terraform", "AWS", "CI/CD"], link: "#" },
    { title: "Event Scheduler", description: "A dependable scheduling service with automated delivery, containerized development, and clear operational workflows.", tags: ["Python", "Docker", "Automation"], link: "#" },
    { title: "Product Platform", description: "A production-minded application setup with container orchestration and a streamlined path from commit to release.", tags: ["Java", "Kubernetes", "DevOps"], link: "#" }
  ]
};

document.getElementById("email-link").href = `mailto:${portfolio.email}`;
document.getElementById("email-link").firstChild.textContent = `${portfolio.email} `;
["hero-linkedin", "footer-linkedin"].forEach(id => document.getElementById(id).href = portfolio.linkedin);
document.getElementById("footer-github").href = portfolio.github;
document.getElementById("skill-list").innerHTML = portfolio.skills.map(skill => `<span>${skill}</span>`).join("");
document.getElementById("project-list").innerHTML = portfolio.projects.map((project, index) => `
  <article class="project">
    <div><span class="project-number">0${index + 1} / 04</span><a class="project-link" href="${project.link}" aria-label="View ${project.title}">↗</a>
      <h3>${project.title}</h3><p>${project.description}</p></div>
    <div class="project-meta">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
  </article>
`).join("");

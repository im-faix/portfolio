// Edit this object to update the portfolio content without touching the page layout.
const portfolio = {
  email: "mohammedfaizanhere@gmail.com",
  phone: "+91 9108137445",
  github: "https://github.com/im-faix",
  linkedin: "https://www.linkedin.com/in/faizan9/",
  skills: ["AWS", "Kubernetes", "Terraform", "Docker", "Jenkins", "Argo CD", "Helm", "ELK", "Prometheus", "Grafana", "Vault", "Kafka", "MongoDB", "PostgreSQL", "Bash", "Java"],
  proficiency: [
    { title: "Cloud & Networking", tools: "AWS (EC2, VPC, S3, IAM, CloudWatch, Security Groups, Route 53), Linux, DNS, HTTP/HTTPS" },
    { title: "Containers & Orchestration", tools: "Kubernetes, kubeadm, CRI-O, WeaveNet CNI, Helm, NGINX Ingress, Docker, Docker Compose" },
    { title: "IaC & Automation", tools: "Terraform, remote state, S3 backends, Bash/Shell, Cron" },
    { title: "CI/CD & GitOps", tools: "Jenkins declarative pipelines, GitHub webhooks, Argo CD, Helm" },
    { title: "Observability & SRE", tools: "ELK Stack, Prometheus, Grafana, alerting, etcd backup/restore, incident troubleshooting" },
    { title: "Security & Data", tools: "HashiCorp Vault, Kubernetes RBAC, network policies, AWS IAM, SSL/TLS, Kafka, Elasticsearch, MongoDB, PostgreSQL" }
  ],
  experience: [{
    role: "Associate DevOps Engineer",
    company: "FireFlink",
    location: "Bangalore, India",
    duration: "Jul 2025 – Present",
    summary: "Supported 2 production and 5 lower environments hosting approximately 40 microservices on on-premises and AWS EC2 infrastructure.",
    responsibilities: [
      "Bootstrapped and maintained self-managed Kubernetes environments using kubeadm, CRI-O, and WeaveNet, supporting ingress, networking, deployments, and workload troubleshooting.",
      "Built Jenkins declarative CI/CD pipelines with GitHub webhooks for application build, containerization, validation, and deployment workflows.",
      "Implemented GitOps with Argo CD and Helm, maintaining declarative configurations in version control and supporting controlled releases and rollbacks.",
      "Performed operational maintenance and rolling upgrades for Apache Kafka, Elasticsearch, and MongoDB with focus on persistent storage and service continuity.",
      "Implemented ELK centralized logging and Prometheus/Grafana monitoring for service visibility and incident investigation.",
      "Automated Kubernetes control-plane disaster recovery with Bash and Cron etcd snapshots, targeting recovery in under 15 minutes.",
      "Deployed Shell and Prometheus alerting for SSL/TLS and domain expiry, eliminating production outage risks from expired certificates and domains.",
      "Provisioned AWS VPC, EC2, Security Groups, IAM, and S3-backed Terraform state using reusable infrastructure-as-code patterns.",
      "Integrated HashiCorp Vault with Kubernetes for secrets management and dynamic secret injection, reducing reliance on hardcoded credentials.",
      "Applied Kubernetes RBAC, network policies, and AWS IAM controls following least-privilege security practices."
    ],
    technologies: ["Linux", "Kubernetes", "AWS", "Terraform", "Docker", "Jenkins", "Argo CD", "Helm", "ELK", "Prometheus", "Grafana", "Vault"]
  }, {
    role: "DevOps Trainee",
    company: "QSpiders",
    location: "Bangalore, India",
    duration: "Aug 2024 – Jun 2025",
    summary: "Built hands-on foundations in Linux administration, Shell scripting, Git, Maven, Jenkins, Docker, Kubernetes, and AWS through structured training and practical exercises.",
    responsibilities: [
      "Worked with containerization, CI/CD workflows, and Kubernetes deployment concepts through practical exercises.",
      "Developed troubleshooting and automation skills used in subsequent professional DevOps work."
    ],
    technologies: ["Linux", "Shell", "Git", "Maven", "Jenkins", "Docker", "Kubernetes", "AWS"]
  }],
  credentials: [
    { type: "Education", title: "Bachelor of Computer Applications (BCA)", organization: "SRNMN College of Applied Science · 2021–2024 · CGPA 8.72" }
  ],
  projects: [
    { title: "SRE Dashboard", description: "A self-managed dashboard for Kubernetes inventory, TLS certificate expiry, DNS resolution, and public domain-expiry checks.", tags: ["React", "Go", "Kubernetes", "Observability"], link: "https://github.com/im-faix/dasboard" },
    { title: "Spring Using Kubernetes", description: "A production-style Spring Boot and Thymeleaf deployment on Kubernetes with Docker, optional Jenkins CI/CD, Actuator metrics, and NodePort access.", tags: ["Spring Boot", "Docker", "Kubernetes", "Jenkins"], link: "https://github.com/im-faix/spring-using-kubernetes" },
    { title: "Event Scheduler System", description: "A lightweight Flask REST API for creating, retrieving, updating, and deleting events with persistent JSON storage.", tags: ["Python", "Flask", "REST API", "JSON"], link: "https://github.com/im-faix" },
    { title: "Kubernetes Infrastructure & DR", description: "Self-managed Kubernetes operations with kubeadm, CRI-O, CNI, ingress, and automated etcd snapshot/restore workflows.", tags: ["Kubernetes", "Bash", "etcd", "Disaster Recovery"], link: "https://github.com/im-faix" },
    { title: "Observability & Logging", description: "ELK, Prometheus, and Grafana patterns for infrastructure and application visibility, alerting, and operational troubleshooting.", tags: ["ELK", "Prometheus", "Grafana", "SRE"], link: "https://github.com/im-faix" },
    { title: "TLS & Domain Monitoring", description: "Shell and Prometheus-based certificate and domain expiry monitoring with proactive alerting.", tags: ["Shell", "Prometheus", "SSL/TLS", "Monitoring"], link: "https://github.com/im-faix" },
    { title: "GitOps Delivery", description: "Jenkins CI combined with Argo CD and Helm for version-controlled Kubernetes deployments and release automation.", tags: ["Jenkins", "Argo CD", "Helm", "GitOps"], link: "https://github.com/im-faix" }
  ]
};

document.getElementById("email-link").href = `mailto:${portfolio.email}`;
document.getElementById("email-link").firstChild.textContent = `${portfolio.email} `;
document.getElementById("phone-link").href = `tel:${portfolio.phone.replace(/\s/g, "")}`;
document.getElementById("phone-link").textContent = portfolio.phone;
["hero-linkedin", "footer-linkedin"].forEach(id => document.getElementById(id).href = portfolio.linkedin);
document.getElementById("footer-github").href = portfolio.github;
document.getElementById("skill-list").innerHTML = portfolio.skills.map(skill => `<span>${skill}</span>`).join("");
document.getElementById("proficiency-list").innerHTML = portfolio.proficiency.map(group => `
  <article class="proficiency-card"><h3>${group.title}</h3><p>${group.tools}</p></article>
`).join("");
document.getElementById("experience-list").innerHTML = portfolio.experience.map(job => `
  <article class="experience-item">
    <div class="experience-heading"><div><h3>${job.role}</h3><p>${job.company} · ${job.location}</p></div><span>${job.duration}</span></div>
    <p class="experience-summary">${job.summary}</p>
    <ul>${job.responsibilities.map(item => `<li>${item}</li>`).join("")}</ul>
    <div class="project-meta">${job.technologies.map(tag => `<span>${tag}</span>`).join("")}</div>
  </article>
`).join("");
document.getElementById("credential-list").innerHTML = portfolio.credentials.map(credential => `
  <article class="credential-item"><span class="eyebrow">${credential.type}</span><div><h3>${credential.title}</h3><p>${credential.organization}</p>${credential.summary ? `<p class="credential-summary">${credential.summary}</p>` : ""}</div></article>
`).join("");
document.getElementById("project-list").innerHTML = portfolio.projects.map((project, index) => `
  <article class="project">
    <div><span class="project-number">0${index + 1} / 0${portfolio.projects.length}</span><a class="project-link" href="${project.link}" target="_blank" rel="noreferrer" aria-label="View ${project.title}">↗</a>
      <h3>${project.title}</h3><p>${project.description}</p></div>
    <div class="project-meta">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
  </article>
`).join("");

const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") document.body.classList.add("dark-theme");
const updateThemeLabel = () => {
  const dark = document.body.classList.contains("dark-theme");
  themeToggle.innerHTML = `${dark ? "○" : "◐"} <span>${dark ? "Light" : "Dark"}</span>`;
  themeToggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
};
updateThemeLabel();
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
  updateThemeLabel();
});

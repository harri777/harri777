const GH_USER = "hawkz94"

const GH_BASE_URL = "https://github.com"

const SKILLS = [
  { 
    name: "Kubernetes",
    logo: "https://img.shields.io/badge/-Kubernetes-2088FF?style=flat-square&logo=kubernetes&logoColor=white"
  },
  {
    name: "Istio",
    logo: "https://img.shields.io/badge/-Istio-506ba9?style=flat-square&logo=istio&logoColor=white"
  },
  { 
    name: "Docker",
    logo: "https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white"
  },
  { 
    name: "Google Cloud Platform",
    logo: "https://img.shields.io/badge/-Google_Cloud_Platform-1a73e8?style=flat-square&logo=google-cloud&logoColor=white"
  },
  { 
    name: "Amazon Web, Services",
    logo: "https://img.shields.io/badge/-Amazon%20Web%20Services-F9A03C?style=flat-square&logo=amazon-aws&logoColor=white"
  },
  { 
    name: "Heroku",
    logo: "https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white"
  },
  {
    name: "Linux",
    logo: "https://img.shields.io/badge/-Linux-000000?style=flat-square&logo=Linux&logoColor=white"
  },
  { 
    name: "github actions",
    logo: "https://img.shields.io/badge/-Github_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white"
  },
  { 
    name: "Jenkins",
    logo: "https://img.shields.io/badge/-Jenkins-764ABC?style=flat-square&logo=jenkins&logoColor=white"
  },
  {
    name: "ArgoCD",
    logo: "https://img.shields.io/badge/-ArgoCD-009585?style=flat-square&logo=argo&logoColor=white"
  },
  { 
    name: "git",
    logo: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
  },
  { 
    name: "Golang",
    logo: "https://img.shields.io/badge/-Golang-45b8d8?style=flat-square&logo=go&logoColor=white"
  },
  { 
    name: "Python",
    logo: "https://img.shields.io/badge/-Python-007ACC?style=flat-square&logo=python&logoColor=white"
  },
  { 
    name: "Nodejs",
    logo: "https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white"
  },
  {
    name: "Ansible",
    logo: "https://img.shields.io/badge/-Ansible-000000?style=flat-square&logo=ansible&logoColor=white"
  },
  {
    name: "Terraform",
    logo: "https://img.shields.io/badge/-Terraform-844FBA?style=flat-square&logo=terraform&logoColor=white"
  },
  { 
    name: "Datadog",
    logo: "https://img.shields.io/badge/-Datadog-430098?style=flat-square&logo=datadog&logoColor=white"
  },
  { 
    name: "Prometheus",
    logo: "https://img.shields.io/badge/-Prometheus-FB542B?style=flat-square&logo=prometheus&logoColor=white"
  },
  { 
    name: "Grafana",
    logo: "https://img.shields.io/badge/-Grafana-EC4A3F?style=flat-square&logo=grafana&logoColor=white"
  },
  { 
    name: "MySql",
    logo: "https://img.shields.io/badge/-MySQL-2088FF?style=flat-square&logo=mysql&logoColor=white"
  },
  { 
    name: "Postgres",
    logo: "https://img.shields.io/badge/-PostgreSQL-0064a5?style=flat-square&logo=postgresql&logoColor=white"
  },
  { 
    name: "MongoDB",
    logo: "https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white"
  },
  { 
    name: "Cloudflare",
    logo: "https://img.shields.io/badge/-Cloudflare-F9A03C?style=flat-square&logo=cloudflare&logoColor=white"
  },
  {
    name: "ElasticSearch",
    logo: "https://img.shields.io/badge/-ElasticSearch-506ba9?style=flat-square&logo=elastic&logoColor=white"
  }
];

const PROJECTS = [
  {
    name: "EKS Terraform - GH Actions",
    slug: "eks-terraform-k8s",
  },
  {
    name: "GKE Terraform - GH Actions",
    slug: "gke-terraform-gh-actions",
  },
  {
    name: "Go Check Email Spoof",
    slug: "check-email-spoof",
  },
  {
    name: "Micro Frontend - Monorepo - k8s and Istio",
    slug: "microfrontend-monorepo-k8s-istio",
  },
  {
    name: "Crazy Scan - Port Scan",
    slug: "crazyScan",
  }
]


module.exports = {
  GH_USER,
  GH_BASE_URL,
  SKILLS,
  PROJECTS
}
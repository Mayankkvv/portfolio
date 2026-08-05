const projects = [
  {
    id: "workflow-automation-platform",
    title: "AI Workflow Automation Platform",
    tagline:
      "A Zapier/n8n-style visual workflow builder with real AI integrations",
    image: "/projects/workflow-automation-placeholder.jpg",
    github: "https://github.com/Mayankkvv",
    demo: "",
    techStack: [
      "MongoDB Atlas",
      "Express",
      "React",
      "Node.js",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "React Flow",
      "Zustand",
      "Groq API",
    ],
    features: [
      "Visual drag-and-drop workflow builder using React Flow",
      "Background job processing with Redis + BullMQ",
      "Real-time execution updates via Socket.IO",
      "OAuth integrations: GitHub, Discord, Gmail, Google Drive, Slack",
    ],
    metrics: [
      { label: "OAuth Integrations", value: "5" },
      { label: "Build Steps", value: "31" },
    ],
    architectureImage:
      "/projects/workflow-automation-architecture-placeholder.jpg",
  },
  {
    id: "packet-analyzer",
    title: "DPI Engine (Packet Analyzer)",
    tagline:
      "Multi-threaded C++ Deep Packet Inspection engine for real-world traffic classification",
    image: "/projects/packet-analyzer-placeholder.jpg",
    github: "https://github.com/Mayankkvv/Packet_analyzer",
    demo: "",
    techStack: ["C++17", "CMake", "PCAP", "Python"],
    features: [
      "Classifies traffic into 20+ real-world apps (YouTube, Netflix, WhatsApp, etc.) without decrypting HTTPS",
      "Flow-based blocking for efficient traffic matching",
      "Multi-threaded pipeline: Reader → Load Balancer → Fast Path workers",
    ],
    metrics: [
      { label: "Apps Classified", value: "20+" },
      { label: "Language", value: "C++17" },
    ],
    architectureImage: "/projects/packet-analyzer-architecture-placeholder.jpg",
  },
  {
    id: "research-agent",
    title: "Autonomous AI Research Agent",
    tagline:
      "A three-agent Planner–Researcher–Critic pipeline for autonomous research tasks",
    image: "/projects/research-agent-placeholder.jpg",
    github: "https://github.com/Mayankkvv",
    demo: "",
    techStack: ["Python", "FastAPI", "Groq", "LLaMA 3"],
    features: [
      "Three-agent Planner-Researcher-Critic pipeline",
      "Deployed on Render",
      "Extended and benchmarked on the GAIA benchmark (Hugging Face Agents Course)",
    ],
    metrics: [
      { label: "GAIA Level 1", value: "20%" },
      { label: "Agent Roles", value: "3" },
    ],
    architectureImage: "/projects/research-agent-architecture-placeholder.jpg",
  },
  {
    id: "dynamic-pricing-engine",
    title: "Dynamic Pricing Engine",
    tagline:
      "Real-time price optimization engine using demand elasticity ML models and Multi-Armed Bandits with business guardrails",
    image: "/projects/dynamic-pricing-placeholder.jpg",
    github: "https://github.com/Mayankkvv/dynamic-pricing-engine",
    demo: "",
    techStack: ["Python", "FastAPI", "Redis", "XGBoost", "PyTorch", "Docker"],
    features: [
      "Demand elasticity modeling (dQ/dP) paired with Thompson Sampling for exploration",
      "Rule-based business guardrail engine enforcing minimum margin floors, MAP, and price caps",
      "Low-latency Redis feature store and sub-10ms FastAPI serving pipeline",
    ],
    metrics: [
      { label: "Inference SLA", value: "< 10ms" },
      { label: "Optimization", value: "Elasticity + MAB" },
    ],
    architectureImage: "/projects/dynamic-pricing-architecture-placeholder.jpg",
  },
  {
    id: "netflix-retention-intelligence",
    title: "Netflix Retention Intelligence",
    tagline:
      "End-to-end churn prediction and user retention analytics pipeline leveraging Tree-based Ensemble Models and SHAP explainability",
    image: "/projects/netflix-retention-placeholder.jpg",
    github: "https://github.com/Mayankkvv/netflix-retention-ml",
    demo: "",
    techStack: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "SHAP",
      "Optuna",
    ],
    features: [
      "Automated feature engineering pipeline processing user watch history, plan tier, profile count, and session frequency",
      "Trained and benchmarked Random Forest & XGBoost classifiers fine-tuned with Optuna / GridSearchCV hyperparameter optimization",
      "Model explainability using SHAP (SHapley Additive exPlanations) to quantify individual feature impacts on subscriber retention vs. churn risk",
      "Rigorous diagnostic evaluation using ROC-AUC, Precision-Recall curves, and confusion matrices to minimize false positives",
    ],
    metrics: [
      { label: "Optimization", value: "Optuna / GridSearch" },
      { label: "Explainability", value: "SHAP Feature Attribution" },
    ],
    architectureImage:
      "/projects/netflix-retention-architecture-placeholder.jpg",
  },
];

export default projects;

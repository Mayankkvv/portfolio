const projects = [
  {
    id: "sync-engine",
    title: "Sync Engine",
    tagline:
      "Real-time collaborative document editing with a custom-built CRDT for conflict resolution — the engineering behind Google Docs, engineered from first principles.",
    image: "/projects/sync-engine-placeholder.jpg",
    github: "https://github.com/Mayankkvv/sync-engine",
    demo: "https://sync-engine-sigma.vercel.app/",
    techStack: [
      "React",
      "Node.js",
      "WebSocket (ws)",
      "Custom CRDT",
      "Vite",
      "Tailwind CSS",
      "CodeMirror",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Jest",
      "Supertest",
      "Vercel",
      "Render",
    ],
    description: [
      "Sync Engine is a full-stack, real-time collaborative document editor that lets multiple people edit the same document simultaneously and see each other's changes appear instantly — the same category of problem behind Google Docs, built entirely from scratch to understand how it actually works under the hood, rather than relying on an existing collaboration library.",
      "At its core is a custom Conflict-free Replicated Data Type (CRDT), hand-implemented without any third-party CRDT library. Instead of representing a document as plain text, it's modeled as a linked structure of uniquely identified characters, where deletions are tombstoned rather than removed and concurrent edits at the same position are resolved through a deterministic tie-breaking rule. This guarantees that every connected client converges to the exact same final document, regardless of network timing or the order operations arrive in — a property proven through automated tests that simulate multiple clients applying conflicting edits in different orders.",
      "The application supports live presence (who's currently viewing a document), animated typing indicators, and real-time collaborator cursors rendered directly inside the editor. Editing continues seamlessly even while offline: changes are queued locally and automatically merged back in once the connection is restored, using the same CRDT logic that resolves live conflicts. Every edit is also permanently recorded in an event-sourced operation log, enabling users to preview and restore any past version of a document — restoring is computed as a genuine diff and broadcast live, not a silent overwrite.",
      "Access control is built around real ownership and sharing: each document has an owner who can invite specific existing users as collaborators, with permissions enforced independently at both the REST API layer and the WebSocket connection layer — closing the gap where securing only one entry point would leave the other open. Authentication uses hashed passwords (bcrypt) and JWTs, with a secure password-reset flow (cryptographically random, hashed, single-use, time-limited tokens) and rate-limited login endpoints to resist brute-force attempts.",
      "The project is backed by 16 automated tests (Jest and Supertest) covering CRDT convergence under concurrent operations, full REST API behavior including access control, and a real two-client WebSocket integration test — and is fully deployed, with the React frontend on Vercel and the Node/Express backend on Render."
    ],
    features: [
      "Real-time collaborative editing over WebSockets with live sync, presence indicators, typing indicators, and collaborator cursor positions",
      "Custom CRDT built from scratch — no external conflict-resolution library — with proven deterministic convergence under concurrent edits",
      "Offline editing with automatic reconnection and merge, so edits made without a connection are never lost",
      "Event-sourced version history with point-in-time preview and live, broadcast restoration of past versions",
      "Invite-based document sharing with owner/collaborator permission tiers, enforced independently across REST and WebSocket layers",
      "Secure authentication — bcrypt password hashing, JWT sessions, rate-limited login, and a hashed single-use password reset flow",
      "Automated test suite (Jest + Supertest) covering algorithm correctness, API authorization, and multi-client concurrency",
      "Fully deployed production build across Vercel, Render, and MongoDB Atlas",
    ],
    metrics: [
      { label: "Automated Tests", value: "16" },
      { label: "Conflict Resolution", value: "Custom CRDT" },
    ],
    architectureImage:
      "/projects/sync-engine-architecture-placeholder.jpg",
  },
  {
    id: "workflow-automation-platform",
    title: "AI Workflow Automation Platform",
    tagline:
      "A Zapier/n8n-style visual workflow builder with real AI integrations",
    image: "/projects/workflow-automation-placeholder.jpg",
    github: "https://github.com/Mayankkvv",
    demo: "https://ai-workflow-platform-three.vercel.app/",
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
    demo: "https://autonomous-ai-agent-n80y.onrender.com/ui",
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
    demo: "https://dynamic-pricing-engine-nz3sxrnskubqfgkn5tdjx8.streamlit.app/",
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
    demo: "https://netflix-retention-ml-khqf7puciigqudoxqrvabt.streamlit.app/",
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

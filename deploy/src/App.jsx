import { useState } from "react";
import { Moon, Sun, Globe, FileDown } from "lucide-react";

const mono = "ui-monospace, 'SF Mono', Menlo, monospace";

const t = {
  en: {
    toggle: "FR",
    moreLabel: "How?",
    lessLabel: "Less",
    starTip: "A project that shaped how I think about engineering",
    atLabel: "at",
    bio: [
      "I'm a data and AI engineer. I've been building production systems for 8 years, mostly at the intersection of large-scale data infrastructure and applied ML.",
      "The work I enjoy most: taking a messy data problem and turning it into something reliable that teams can actually use. I've done this for banks (BNP Paribas), retailers (Carrefour), manufacturers (Saint-Gobain), and public institutions (Unédic).",
      "I ran these projects through Theodo and other Paris-based tech consultancies, first as a senior data engineer, then as VP where I built and mentored junior teams, and now as a freelancer.",
      "Currently focused on IS innovation and modern data stacks. I like Rust, CUDA, and things that go fast. Outside of engineering, I play poker, listen to a lot of music, and I'm building toward creating content.",
    ],
    work: [
      { year: "2025", title: "Automated financial reporting", where: "Cedrus & Partners", what: "Python engine generating PowerPoint reports from Power BI data for an asset allocation firm. 50+ client reports/month, fully automated.", context: "50+ reports/month is the production volume, each being a client-specific PowerPoint generated from Power BI extracts with isolated per-client storage. Previously, analysts spent days on manual formatting and PDF exports. Architecture designed for parallel processing to serve hundreds of clients simultaneously." },
      { year: "2025", title: "Modern data stack for senior care KPIs", where: "Colisée", what: "Financial reporting modernization for Europe's leading EHPAD group. Airbyte, Coalesce, Airflow, Power BI.", context: "+20% productivity was reported by Colisée's finance team: time to produce monthly financial reports dropped after consolidating scattered data sources into Power BI dashboards. The Airbyte + Coalesce + Airflow stack replaced manual Excel consolidation across European subsidiaries. I also trained the performance team on the new BI tools." },
      { year: "2024–25", starred: true, title: "GenAI for wealth advisory", where: "GAMBIT / BNP Paribas", what: "Whisper + Mistral Large 2 pipeline for transcribing and summarizing client meetings. Modular containerized architecture on Azure K8s, deployed on-prem.", context: "2h30 saved per meeting, measured by comparing advisor prep time before and after rollout. Latency on data extraction dropped from 15s to 1s by switching from batch API calls to real-time streaming between the front-end and the containerized inference backend. First version shipped to prod in 4 months." },
      { year: "2024–25", title: "AI job market intelligence", where: "AFDAS", what: "LLM solution auto-updating 70+ job descriptions, initially for telecom then expanded to culture, cinema and other verticals. LLM-as-judge for quality control. Deployed on Azure, <€3 per role.", context: "70+ roles started with the telecom vertical, now expanding to other sectors (culture, cinema, etc.). Cost of <€3/role is the Azure Functions compute per run (OpenAI API + App Insights), averaged over production. The comparison vs 'several days' comes from AFDAS's own benchmark: manual documentary analysis of job market trends previously took 2-3 days per batch. The tool generates a Word report sent periodically to AFDAS admins." },
      { year: "2023–24", starred: true, title: "Supplier insights platform on top of Europe's biggest retail lake", where: "Carrefour Links", what: "Built the data infrastructure and a supplier-facing dashboard for Carrefour Europe. 1B+ rows/day processed through dbt, BigQuery, Airflow. Automatic insights for e-commerce suppliers via semantic search.", context: "1B+ rows/day is the volume processed through the dbt/BigQuery/Airflow pipeline (the broader Carrefour datalake handles 20B+ lines/day across all systems). +15% productivity was measured by the Carrefour data office: time-to-insight dropped for marketing and category management teams after migrating from fragmented legacy SI. I managed the Terraform infra (compute + IAM), the dbt transformation layer, and the Airflow orchestration." },
      { year: "2023", title: "Salary guarantee system overhaul", where: "Unédic / DUA", what: "Rebuilt the IS for France's unemployment insurance. Star-schema data model, Docker multi-container microservices, GDPR-compliant. 100k+ companies covered.", context: "100k+ companies is the number of businesses covered by the DUA salary guarantee scheme, that's the actual dataset scope. The 3-month MVP timeline was from kickoff to first production deployment (Airbyte ingestion + Coalesce transforms + Jupyter dashboards), with a team of 3 (myself as lead + 2 data engineers). Legacy MicroStrategy reports were replaced with a consolidated star-schema validated against historical data." },
      { year: "2022–23", title: "Industrial anomaly detection", where: "Saint-Gobain", what: "Real-time ML defect detection across 5 manufacturing sites. CNN + OpenCV pipeline, 10k anomalies/day. Python, C++, RTSP/TCP.", context: "10k anomalies/day is the actual production detection volume: each anomaly is a glass defect flagged by the CNN model from camera feeds. +40% precision improvement over the previous rule-based system. Deployed across 5 factories over 16 Agile sprints. The feedback loop recovered 65% of initially undetected defects by retraining on false negatives flagged by production operators." },
      { year: "2017–20", title: "Neuromorphic vision R&D + teaching", where: "CNRS, Institut de la Vision", what: "Biomimetic perception research with neuromorphic sensors. Online/hierarchical clustering for async data streams. 240h teaching AI, deep learning, C++, Java.", context: "240h of teaching across the period, covering AI, deep learning, C++, and Java at engineering school level. The research focused on ensemble algorithms (online + hierarchical clustering) for asynchronous event-based data from neuromorphic cameras, incompatible with standard computer vision approaches. Also mentored research teams in C++, Python, and MATLAB." },
    ],
    stackTitle: "What I work with",
    certsTitle: "Certifications",
    eduTitle: "Education",
  },
  fr: {
    toggle: "EN",
    moreLabel: "Comment ?",
    lessLabel: "Moins",
    starTip: "Un projet qui a changé ma façon de penser l'ingénierie",
    atLabel: "chez",
    bio: [
      "Je suis ingénieur data et IA. Ça fait 8 ans que je construis des systèmes en production, surtout à l'intersection de l'infrastructure data à grande échelle et du ML appliqué.",
      "Ce que je préfère : prendre un problème data complexe et le transformer en quelque chose de fiable que les équipes utilisent vraiment. J'ai fait ça pour des banques (BNP Paribas), retailers (Carrefour), des industriels (Saint-Gobain) et des institutions publiques (Unédic).",
      "Ces projets, je les ai menés chez Theodo et d'autres ESN parisiennes, en tant que data engineer senior, puis VP où j'ai constitué et encadré des équipes junior, et enfin en freelance.",
      "Focus actuel : innovation sur les SI et les data stacks en g\u00e9n\u00e9ral. J'aime le Rust, le CUDA, et les trucs qui vont vite. En dehors de l'ing\u00e9nierie, je joue au poker, j'\u00e9coute beaucoup de musique, et je me construis un chemin vers la cr\u00e9ation de contenu.",
    ],
    work: [
      { year: "2025", title: "Rapports financiers automatisés", where: "Cedrus & Partners", what: "Moteur Python de génération de rapports PowerPoint à partir de données Power BI pour un cabinet d'allocation d'actifs. 50+ rapports clients/mois, entièrement automatisé.", context: "50+ rapports/mois = volume de production, chaque rapport étant un PowerPoint spécifique client généré depuis des extraits Power BI, avec stockage isolé par client. Les analystes passaient auparavant des jours sur le formatage manuel et l'export PDF. Architecture conçue pour le traitement parallèle de centaines de clients simultanément." },
      { year: "2025", title: "Modern data stack pour KPI EHPAD", where: "Colisée", what: "Modernisation du reporting financier du leader européen EHPAD. Airbyte, Coalesce, Airflow, Power BI.", context: "+20% de productivité rapporté par l'équipe finance Colisée : le temps de production des rapports financiers mensuels a baissé après consolidation des sources dispersées dans des dashboards Power BI. La stack Airbyte + Coalesce + Airflow a remplacé la consolidation manuelle Excel entre filiales européennes. J'ai aussi formé l'équipe performance aux nouveaux outils BI." },
      { year: "2024–25", starred: true, title: "GenAI pour gestion de patrimoine", where: "GAMBIT / BNP Paribas", what: "Pipeline Whisper + Mistral Large 2 pour transcrire et résumer les entretiens clients. Architecture modulaire conteneurisée sur Azure K8s, déployée on-prem.", context: "2h30 gagnées par entretien, mesuré en comparant le temps de préparation des conseillers avant et après déploiement. Latence passée de 15s à 1s sur l'extraction de données en passant d'appels API batch à du streaming temps réel entre le front et le backend d'inférence conteneurisé. Première version en prod livrée en 4 mois." },
      { year: "2024–25", title: "IA pour veille métier", where: "AFDAS", what: "Solution LLM mettant à jour 70+ fiches métier, d'abord pour les télécoms puis étendu à la culture, au cinéma et d'autres verticales. LLM-as-judge pour le contrôle qualité. Déployé sur Azure, <3€ par métier.", context: "70+ métiers au départ sur la verticale télécoms, maintenant en expansion vers d'autres secteurs (culture, cinéma, etc.). Le coût <3€/métier est le coût compute Azure Functions par exécution (API OpenAI + App Insights), moyenné sur la production. La comparaison vs 'plusieurs jours' vient du benchmark interne AFDAS : l'analyse documentaire manuelle des tendances du marché prenait 2-3 jours par lot. L'outil génère un rapport Word envoyé périodiquement aux admins AFDAS." },
      { year: "2023–24", starred: true, title: "Plateforme insights fournisseurs sur le plus grand datalake retail d'Europe", where: "Carrefour Links", what: "Infrastructure data et dashboard fournisseurs pour Carrefour Europe. 1Md+ lignes/jour via dbt, BigQuery, Airflow. Insights automatiques pour les fournisseurs e-commerce via recherche sémantique.", context: "1Md+ lignes/jour = volume traité par le pipeline dbt/BigQuery/Airflow (le datalake Carrefour global gère 20Mds+ lignes/jour tous systèmes confondus). +15% de productivité mesuré par la direction data Carrefour : le time-to-insight a baissé pour les équipes marketing et category management après migration du SI legacy fragmenté. J'ai administré l'infra Terraform (compute + IAM), la couche de transformation dbt, et l'orchestration Airflow." },
      { year: "2023", title: "Refonte SI garantie des salaires", where: "Unédic / DUA", what: "Reconstruction du SI assurance chômage. Modèle en étoile, microservices Docker multi-conteneurs, conformité RGPD. 100k+ entreprises couvertes.", context: "100k+ entreprises = nombre d'entreprises couvertes par le régime de garantie des salaires DUA, c'est le périmètre réel du dataset. Le MVP en 3 mois = du kickoff au premier déploiement en production (ingestion Airbyte + transforms Coalesce + dashboards Jupyter), avec une équipe de 3 (moi en lead + 2 data engineers). Les rapports legacy MicroStrategy ont été remplacés par un star-schema consolidé validé contre les données historiques." },
      { year: "2022–23", title: "Détection d'anomalies industrielles", where: "Saint-Gobain", what: "Détection ML temps réel sur 5 sites manufacturiers. Pipeline CNN + OpenCV, 10k anomalies/jour. Python, C++, RTSP/TCP.", context: "10k anomalies/jour = volume de détection réel en production, chaque anomalie est un défaut de verre flaggé par le modèle CNN depuis les flux caméra. +40% de précision par rapport au système précédent basé sur des règles. Déployé sur 5 usines en 16 sprints Agile. La boucle de feedback a récupéré 65% des défauts initialement non détectés en ré-entraînant sur les faux négatifs remontés par les opérateurs." },
      { year: "2017–20", title: "R&D vision neuromorphique + enseignement", where: "CNRS, Institut de la Vision", what: "Recherche en perception biomimétique avec capteurs neuromorphiques. Clustering en ligne/hiérarchique pour données asynchrones. 240h d'enseignement IA, deep learning, C++, Java.", context: "240h d'enseignement sur la période, couvrant IA, deep learning, C++ et Java au niveau école d'ingénieur. La recherche portait sur des algorithmes ensemble (clustering en ligne + hiérarchique) pour données événementielles asynchrones issues de caméras neuromorphiques, incompatibles avec les approches CV standard. Mentoring des équipes de recherche en C++, Python et MATLAB." },
    ],
    stackTitle: "Outils",
    certsTitle: "Certifications",
    eduTitle: "Formation",
  },
};

const stack = [
  "Python", "Rust", "C++", "SQL", "Java",
  "Azure", "GCP", "Terraform", "Kubernetes", "Docker",
  "Snowflake", "Databricks", "BigQuery", "dbt", "Airflow", "Spark",
  "OpenAI", "LLMs", "Langchain", "MLflow", "TensorFlow", "RAG",
  "Looker", "Power BI", "Tableau",
  "CI/CD", "Microservices", "Data Modeling", "GDPR",
  "uv", "poetry",
];

const certs = [
  "Nvidia, Large-Scale RAG Pipelines, 2025",
  "Google Cloud Professional Data Engineer, 2023",
  "Snowflake SnowPro Core, 2022",
];

function WorkItem({ w, fg, fg2, fg3, border, moreLabel, lessLabel, starTooltip, atLabel }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ marginBottom: 28 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 4 }}>
        <span style={{ fontFamily: mono, fontSize: 13, color: fg3, flexShrink: 0, minWidth: 52 }}>{w.year}</span>
        <div>
          {w.starred && <span style={{ marginRight: 5, fontSize: 13, color: fg3 }}>★</span>}
          <span style={{ fontWeight: 600, color: fg }}>{w.title}</span>
          <span style={{ color: fg3, marginLeft: 8 }}>{atLabel} {w.where}</span>
        </div>
      </div>
      {w.starred && (
        <p style={{
          fontSize: 12, fontStyle: "italic", color: fg3, marginLeft: 64,
          opacity: hovered ? 1 : 0, maxHeight: hovered ? 20 : 0,
          transition: "opacity 0.3s ease, max-height 0.3s ease",
          overflow: "hidden", marginBottom: hovered ? 4 : 0,
        }}>
          {starTooltip}
        </p>
      )}
      <p style={{ fontSize: 14, color: fg2, marginLeft: 64, lineHeight: 1.65 }}>{w.what}</p>
      {w.context && (
        <div style={{ marginLeft: 64, marginTop: 6 }}>
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none", border: "none", padding: 0,
              fontSize: 12, fontFamily: mono, color: fg3,
              cursor: "pointer", textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
            onMouseEnter={e => e.target.style.color = fg}
            onMouseLeave={e => e.target.style.color = fg3}
          >
            {open ? lessLabel : moreLabel}
          </button>
          {open && (
            <p style={{
              fontSize: 13, color: fg2, lineHeight: 1.7,
              marginTop: 8, paddingLeft: 12,
              borderLeft: `2px solid ${border}`,
            }}>
              {w.context}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function getDefaultLang() {
  try {
    const host = window.location.hostname;
    if (host.startsWith("cv.")) return "fr";
    if (host.startsWith("resume.")) return "en";
  } catch (e) {}
  return "en";
}

function getDefaultDark() {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (e) {}
  return false;
}

export default function App() {
  const [dark, setDark] = useState(getDefaultDark);
  const [lang, setLang] = useState(getDefaultLang);
  const l = t[lang];

  const fg = dark ? "#ededed" : "#111";
  const fg2 = dark ? "#999" : "#666";
  const fg3 = dark ? "#555" : "#999";
  const bg = dark ? "#111" : "#fff";
  const border = dark ? "#262626" : "#eee";
  const link = dark ? "#6cb6ff" : "#0969da";

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
      background: bg, color: fg, minHeight: "100vh",
      transition: "background 0.2s, color 0.2s",
      WebkitFontSmoothing: "antialiased",
      fontSize: 16, lineHeight: 1.6,
    }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "48px 20px 80px" }}>

        {/* HEADER */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
          <h1 style={{ fontSize: 20, fontWeight: 600, margin: 0, letterSpacing: -0.3 }}>Vincent Fraillon</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setDark(!dark)} style={{
              background: "none", border: `1px solid ${border}`, borderRadius: 6,
              width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: fg2,
            }}>
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a
              href={lang === "fr" ? "/Vincent_Fraillon_CV.pdf" : "/Vincent_Fraillon_Resume.pdf"}
              download
              style={{
                background: "none", border: `1px solid ${border}`, borderRadius: 6,
                width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: fg2, textDecoration: "none",
              }}
              title={lang === "fr" ? "Télécharger le CV (A4 PDF)" : "Download resume (A4 PDF)"}
            >
              <FileDown size={14} />
            </a>
            <button onClick={() => setLang(lang === "en" ? "fr" : "en")} style={{
              background: "none", border: `1px solid ${border}`, borderRadius: 6,
              padding: "0 10px", height: 32, fontSize: 12, fontWeight: 600,
              cursor: "pointer", color: fg2, fontFamily: mono,
              display: "flex", alignItems: "center", gap: 4,
            }}>
              <Globe size={12} /> {l.toggle}
            </button>
          </div>
        </header>

        {/* BIO */}
        <section style={{ marginBottom: 48 }}>
          {l.bio.map((p, i) => (
            <p key={i} style={{ color: i === 0 ? fg : fg2, fontSize: i === 0 ? 16 : 15, marginBottom: 16, lineHeight: 1.7 }}>{p}</p>
          ))}
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "0 0 48px" }} />

        {/* WORK */}
        <section style={{ marginBottom: 48 }}>
          {l.work.map((w, i) => (
            <WorkItem key={i} w={w} fg={fg} fg2={fg2} fg3={fg3} border={border} moreLabel={l.moreLabel} lessLabel={l.lessLabel} starTooltip={l.starTip} atLabel={l.atLabel} />
          ))}
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "0 0 48px" }} />

        {/* STACK */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: fg }}>{l.stackTitle}</h2>
          <p style={{ fontFamily: mono, fontSize: 13, color: fg2, lineHeight: 2 }}>
            {stack.join(" · ")}
          </p>
        </section>

        {/* CERTS + EDU */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 48 }}>
          <div>
            <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: fg }}>{l.certsTitle}</h2>
            {certs.map((c, i) => <p key={i} style={{ fontSize: 13, color: fg2, lineHeight: 1.7 }}>{c}</p>)}
          </div>
          <div>
            <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: fg }}>{l.eduTitle}</h2>
            <p style={{ fontSize: 13, color: fg2, lineHeight: 1.7 }}>Msc. Engineering, Sorbonne, 2017</p>
            <p style={{ fontSize: 13, color: fg2, lineHeight: 1.7 }}>Univ. Pierre & Marie Curie, 2015</p>
          </div>
        </div>

      </div>
    </div>
  );
}

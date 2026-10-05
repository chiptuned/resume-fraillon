from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[1]
OUTS = [ROOT / 'deploy/public/Vincent_Fraillon_Resume.pdf', ROOT / 'deploy/public/Vincent_Fraillon_CV.pdf']
INK, MUTED, LIGHT = colors.HexColor('#171717'), colors.HexColor('#666666'), colors.HexColor('#a0a0a0')

DATA = {
'en': {
 'intro': 'Data and AI engineer with 8+ years building production systems. I turn Python, C++, SQL and applied AI into useful applications, combining prompt design, product framing and Lean delivery.',
 'jobs': [
  ('Jun 2026–', 'AI applications & data studio', 'q4o', 'Building practical AI applications and production-grade data systems for clients. Python, C++, SQL, prompt design and Lean delivery.'),
  ('10/2024–03/2026', 'VP Data Engineering', 'Isskar', 'Led data engineering strategy and delivery; built teams, methods and reliable data foundations.'),
  ('2025', 'Automated financial reporting', 'Cedrus & Partners', 'Python engine generating 50+ client PowerPoint reports per month from Power BI data, fully automated.'),
  ('2025', 'Modern data stack for senior care KPIs', 'Colisée', 'Modernized finance reporting with Airbyte, Coalesce, Airflow and Power BI; trained the performance team.'),
  ('2024–25', 'GenAI for wealth advisory', 'GAMBIT / BNP Paribas', 'Whisper + Mistral pipeline for transcribing and summarizing client meetings; modular Azure Kubernetes architecture, deployed on-prem.'),
  ('2024–25', 'AI job market intelligence', 'AFDAS', 'LLM solution updating 70+ job descriptions across sectors, with an LLM-as-judge quality-control workflow.'),
  ('2023–24', 'Supplier insights platform', 'Carrefour Links', 'Supplier-facing platform processing 1B+ rows/day; dbt, BigQuery, Airflow and semantic search for e-commerce insights.'),
  ('2023', 'Salary guarantee system overhaul', 'Unédic / DUA', 'Rebuilt core information system with star-schema data model, Docker microservices and GDPR compliance; 100k+ companies covered.'),
  ('2022–23', 'Industrial anomaly detection', 'Saint-Gobain', 'Real-time vision system across five factories; CNN + OpenCV pipeline processing 10k anomalies/day, Python and C++.'),
  ('2017–20', 'Neuromorphic vision R&D + teaching', 'CNRS / Institut de la Vision', 'Research on event-based vision and 240 hours teaching AI, deep learning, C++ and Java.'),
 ],
 'stackTitle':'Core toolkit', 'stack':'Python · C++ · SQL · AI applications · LLMs · prompt design · RAG · product framing · Lean / Agile · data engineering · cloud · team leadership',
 'certTitle':'Certifications', 'cert':'NVIDIA Large-Scale RAG Pipelines (2025) · Google Cloud Professional Data Engineer (2023) · Snowflake SnowPro Core (2022)',
 'eduTitle':'Education', 'edu':'MSc Engineering, Sorbonne (2017) · UPMC (2015)',
},
'fr': {
 'intro': 'Ingénieur data et IA, 8+ ans d’expérience sur des systèmes en production. Je transforme Python, C++, SQL et l’IA appliquée en applications utiles, avec conception de prompts, cadrage produit et livraison Lean.',
 'jobs': [
  ('Juin 2026–', 'Applications IA & studio data', 'q4o', 'Conception d’applications IA utiles et de systèmes data prêts pour la production. Python, C++, SQL, prompts et livraison Lean.'),
  ('10/2024–03/2026', 'VP Data Engineering', 'Isskar', 'Pilotage de la stratégie et des projets data engineering, des équipes, des méthodes et des fondations data.'),
  ('2025', 'Automatisation du reporting financier', 'Cedrus & Partners', 'Moteur Python générant plus de 50 rapports PowerPoint clients par mois depuis Power BI, entièrement automatisé.'),
  ('2025', 'Modernisation du reporting EHPAD', 'Colisée', 'Modernisation du reporting financier avec Airbyte, Coalesce, Airflow et Power BI ; formation de l’équipe performance.'),
  ('2024–25', 'GenAI pour la gestion de patrimoine', 'GAMBIT / BNP Paribas', 'Pipeline Whisper + Mistral pour transcrire et résumer les entretiens ; architecture modulaire Azure Kubernetes, déploiement on-prem.'),
  ('2024–25', 'IA pour la veille sur les métiers', 'AFDAS', 'Solution LLM mettant à jour plus de 70 fiches métiers dans plusieurs secteurs, avec contrôle qualité automatisé.'),
  ('2023–24', 'Plateforme d’insights fournisseurs', 'Carrefour Links', 'Plateforme fournisseurs traitant plus d’1 Md de lignes/jour ; dbt, BigQuery, Airflow et recherche sémantique.'),
  ('2023', 'Refonte du système de garantie des salaires', 'Unédic / DUA', 'Refonte du SI avec modèle de données en étoile, microservices Docker, conformité RGPD et couverture de 100k+ entreprises.'),
  ('2022–23', 'Détection d’anomalies industrielles', 'Saint-Gobain', 'Vision temps réel sur cinq usines ; pipeline CNN + OpenCV traitant 10k anomalies/jour, Python et C++.'),
  ('2017–20', 'R&D vision neuromorphique & enseignement', 'CNRS / Institut de la Vision', 'Recherche en vision événementielle et 240 h d’enseignement en IA, deep learning, C++ et Java.'),
 ],
 'stackTitle':'Compétences clés', 'stack':'Python · C++ · SQL · Applications IA · LLM · conception de prompts · RAG · cadrage produit · Lean / Agile · data engineering · cloud · management d’équipe',
 'certTitle':'Certifications', 'cert':'NVIDIA Large-Scale RAG Pipelines (2025) · Google Cloud Professional Data Engineer (2023) · Snowflake SnowPro Core (2022)',
 'eduTitle':'Formation', 'edu':'MSc ingénieur, Sorbonne (2017) · UPMC (2015)',
}
}

def make_pdf(lang, output):
    d = DATA[lang]
    doc = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=19*mm, leftMargin=19*mm, topMargin=15*mm, bottomMargin=14*mm, title='Vincent Fraillon — CV' if lang=='fr' else 'Vincent Fraillon — Resume', author='Vincent Fraillon')
    styles = getSampleStyleSheet()
    name = ParagraphStyle('Name', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=16.5, leading=19, textColor=INK)
    contact = ParagraphStyle('Contact', parent=styles['Normal'], fontName='Helvetica', fontSize=8.8, leading=11, textColor=MUTED)
    intro = ParagraphStyle('Intro', parent=styles['Normal'], fontName='Helvetica', fontSize=9.3, leading=13, textColor=INK, spaceAfter=1)
    title = ParagraphStyle('JobTitle', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=11.2, textColor=INK)
    company = ParagraphStyle('Company', parent=styles['Normal'], fontName='Helvetica', fontSize=9.1, leading=11.2, textColor=LIGHT)
    year = ParagraphStyle('Year', parent=styles['Normal'], fontName='Courier', fontSize=8.1, leading=11, textColor=LIGHT)
    body = ParagraphStyle('Body', parent=styles['Normal'], fontName='Helvetica', fontSize=8.1, leading=10.6, textColor=MUTED)
    smallhead = ParagraphStyle('SmallHead', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8.6, leading=11, textColor=INK, spaceAfter=3)
    mono = ParagraphStyle('Mono', parent=body, fontName='Courier', fontSize=7.3, leading=10.2)
    story = []
    header = Table([[Paragraph('Vincent Fraillon', name), Paragraph('— vincent@q4o.com', contact)]], colWidths=[53*mm, 119*mm])
    header.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'BASELINE'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    story += [header, Spacer(1, 3.5*mm), Paragraph(escape(d['intro']), intro), Spacer(1, 3.5*mm), HRFlowable(width='100%', thickness=.55, color=colors.HexColor('#e5e5e5')), Spacer(1, 3.8*mm)]
    for yr, role, org, desc in d['jobs']:
        connector = 'chez' if lang == 'fr' else 'at'
        right = [Paragraph(f'<b>{escape(role)}</b> <font color="#999999">{connector} {escape(org)}</font>', title), Paragraph(escape(desc), body)]
        row = Table([[Paragraph(escape(yr), year), right]], colWidths=[27*mm, 145*mm])
        row.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0),('LEFTPADDING',(1,0),(1,0),0)]))
        story += [KeepTogether([row, Spacer(1, 2.8*mm)])]
    story += [Spacer(1, 1*mm), HRFlowable(width='100%', thickness=.55, color=colors.HexColor('#e5e5e5')), Spacer(1, 3*mm), Paragraph(d['stackTitle'], smallhead), Paragraph(escape(d['stack']), mono), Spacer(1, 2.3*mm)]
    cols = [[Paragraph(d['certTitle'],smallhead), Paragraph(escape(d['cert']),body)], [Paragraph(d['eduTitle'],smallhead), Paragraph(escape(d['edu']),body)]]
    footer = Table([[cols[0], cols[1]]], colWidths=[86*mm,86*mm])
    footer.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),6*mm),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    story.append(footer)
    doc.build(story)

make_pdf('en', OUTS[0])
make_pdf('fr', OUTS[1])
print('\n'.join(str(p) for p in OUTS))

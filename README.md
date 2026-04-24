# Norbloc AI Engineering Assignment

> Interactive prototypes demonstrating AI-powered features for financial crime compliance

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![D3.js](https://img.shields.io/badge/D3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white)

## Overview

This assignment delivers interactive, single-file HTML prototypes for **norbloc** -- a financial crime compliance platform specializing in AML (Anti-Money Laundering), KYC (Know Your Customer), and sanctions screening. Each prototype demonstrates AI-assisted capabilities for key compliance workflows, built on a shared design system:

1. **Design System** -- Shared shadcn-inspired design tokens and component patterns
2. **Adaptive AI Risk Scoring** -- Dynamic customer risk assessment dashboard
3. **AML Alert Triage Copilot (Sancus)** -- AI-powered investigation assistant
4. **Intelligent UBO Graph Extraction** -- Interactive ownership structure visualization

## Quick Start

No build tools or dependencies required. Each prototype is a self-contained HTML file.

### Option 1: Open Directly

```
Double-click any `.html` file to open it in your browser.
```

### Option 2: Serve via Local HTTP Server

```bash
cd norbloc-assignment
python -m http.server 8765
```

Then visit:

| Prototype | URL |
|-----------|-----|
| Risk Scoring | http://localhost:8765/risk-scoring-prototype.html |
| AML Copilot | http://localhost:8765/aml-alert-triage-copilot.html |
| UBO Graph | http://localhost:8765/ubo-graph-extraction-prototype.html |

---

## Prototype 1: Adaptive AI Risk Scoring

A customer risk scoring dashboard that dynamically assesses and visualizes financial crime risk across a customer portfolio.

![Adaptive AI Risk Scoring Dashboard](screenshots/risk-scoring-dashboard.png)

### Features

- **Customer Risk Table** -- Sortable list of 10 customers with dynamic risk scores, trend arrows (up/down), severity badges (Low/Medium/High/Critical), alert counts, KYC status, and last review dates
- **Score Breakdown** -- Customer detail panel with 90-day score history line chart (Chart.js) and risk factor composition donut chart
- **KYC Status Tracking** -- Color-coded badges for document validity: Valid (green), Expiring Soon (amber), Expired (red)
- **Alert Volume Charts** -- Time-series line chart showing 30-day alert trends and donut chart for alert distribution by severity
- **Drill-Down Workflow** -- Click any customer row to expand their full risk profile, historical trajectory, and factor breakdown
- **Filtering & Search** -- Filter by risk level (All/Low/Medium/High/Critical), real-time search by name/email/ID, sortable columns

### Key Design Decisions

- Risk scores computed from weighted factors: transaction patterns, jurisdiction risk, PEP status, sanctions proximity, KYC completeness, alert velocity
- 90-day temporal scoring shows risk trajectory, not just static point-in-time numbers
- Color-coded severity badges provide instant risk assessment at a glance

---

## Prototype 2: AML Alert Triage Copilot (Sancus)

An AI assistant that helps compliance analysts investigate, triage, and resolve AML alerts through natural language interaction.

![AML Alert Triage Copilot](screenshots/aml-alert-triage-copilot.png)

### Features

- **Alert Inbox** -- Sidebar with 10 AML alerts showing severity (Critical/High/Medium), customer names, alert types, timestamps, and status badges (Pending/Needs Review/Escalated)
- **AI Chat Interface** -- Conversational investigation with structured AI responses: evidence, analysis, recommendations, and confidence scores (e.g., "85% confidence: Escalate")
- **Evidence Graph** -- D3.js force-directed graph showing entity relationships and transaction flows between persons, companies, and accounts
- **Triage Summary Panel** -- Structured output with recommended actions, risk factors, escalation rationale, and confidence percentages
- **Transaction Timeline** -- Chronological view of suspicious transactions with amounts, counterparties, and transaction types
- **Quick Actions** -- "Dismiss with rationale", "Request info", and "Escalate to senior analyst" buttons with audit trail logging
- **Filtering** -- Filter by severity (All/Critical/High/Medium) or status (All/Pending/Needs Review/Escalate)
- **Audit Trail** -- Complete investigation history with timestamps and analyst decisions

### Alert Types Covered

| Alert ID | Type | Severity | Customer |
|----------|------|----------|----------|
| AML-001 | Sanctions Hit | Critical | Dmitri Volkov |
| AML-002 | Structuring | High | Li Wei |
| AML-003 | PEP Match | High | Senator Maria Santos |
| AML-004 | Rapid Movement | High | Olympus Trading FZE |
| AML-005 | Volume Spike | Medium | Ahmed Al-Rashid |
| AML-006 | Sanctions + Dormant | Critical | Elena Kuznetsova |
| AML-007 | Shell Company | Medium | Caribbean Holdings Ltd |
| AML-008 | Layering | High | Rajesh Patel |
| AML-009 | Cash-Intensive | Medium | Golden Dragon Casino Ltd |
| AML-010 | High-Risk Jurisdiction | High | Viktor Petrov |

---

## Prototype 3: Intelligent UBO Graph Extraction

An interactive visualization that extracts and displays Ultimate Beneficial Owner (UBO) ownership structures from unstructured corporate documents.

![UBO Graph Extraction](screenshots/ubo-graph-extraction.png)

### Features

- **Force-Directed Graph** -- D3.js force simulation rendering entities as color-coded nodes: individuals (teal), companies (blue), trusts (orange)
- **Multi-Stage Workflow** -- Upload → Extraction → Graph → Review, with progress tracking and visual indicators
- **Node Interaction** -- Click any entity to view details panel with ownership %, jurisdiction, role, and AI confidence score
- **Confidence Scoring** -- AI-extracted entities show confidence levels (e.g., 97% for primary UBO); filter by High/Medium/Low confidence
- **Ownership Chains** — Visualize multi-layer structures including offshore vehicles, nominees, and trust beneficiaries
- **Entity Type Filtering** -- Filter by type: Individual, Company, or Trust
- **Verification Workflow** -- Mark entities as Verified or Flagged during compliance review
- **Document Context** -- Source document snippets support each extracted relationship, with extraction metadata (document count, languages, pages processed)
- **Extraction Dashboard** -- Overview stats: entities found, relationships mapped, documents processed, and pending verification count

### Entity Types

- **Individual** -- Natural persons with ownership stakes
- **Company** -- Corporate entities in the ownership chain
- **Trust** -- Trust structures with beneficiaries

---

## Architecture

### Design Philosophy

All prototypes follow a **zero-build, zero-dependency** approach with a shared design system:

- **Shared design system** -- `design-system.html` contains shadcn-inspired OKLCH design tokens and component patterns used across all prototypes
- **Single HTML files** -- Each prototype is one self-contained file with embedded CSS and JavaScript
- **No build tools** -- No npm, webpack, or transpilation required
- **CDN-hosted libraries** -- Only Chart.js and D3.js loaded from CDN
- **Dark theme** -- Corporate dark theme using CSS custom properties, consistent across all prototypes

### Technical Stack

| Component | Technology |
|-----------|------------|
| Markup | HTML5 semantic elements |
| Styling | CSS3 with custom properties, flexbox, grid |
| Interactivity | Vanilla JavaScript (ES6+) |
| Charts | Chart.js 4.x |
| Graph Visualization | D3.js 7.x (force simulation) |
| Data | Embedded mock data (JSON) |

### Data Architecture

Each prototype uses realistic mock data:

- **Risk Scoring**: 10 customers with dynamic scores, 6 risk factors, 90-day score history
- **AML Copilot**: 10 alerts across 7 alert types with 54 transactions, AI summaries, evidence graphs, and audit trail entries
- **UBO Extraction**: 12-entity ownership graph with 15 directed ownership edges, confidence scores, and multi-language document support

---

## File Structure

```
norbloc-assignment/
├── design-system.html                # Shared OKLCH design tokens & component patterns
├── risk-scoring-prototype.html       # Adaptive AI Risk Scoring dashboard (1,937 lines)
├── aml-alert-triage-copilot.html     # AML Alert Triage Copilot (Sancus) (1,639 lines)
├── ubo-graph-extraction-prototype.html # Intelligent UBO Graph Extraction (2,845 lines)
├── screenshots/
│   ├── risk-scoring-dashboard.png    # Risk scoring dashboard view
│   ├── aml-alert-triage-copilot.png  # AML copilot main interface
│   └── ubo-graph-extraction.png      # UBO graph visualization
└── README.md                         # This file
```

---

## Notes

- **Interview assignment** -- Built as a take-home technical assignment for norbloc
- **Not for production** -- Mock data, no backend, simulated AI responses
- **Browser support** -- Modern browsers (Chrome, Firefox, Safari, Edge)

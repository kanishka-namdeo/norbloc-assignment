// ============================================================
// MOCK DATA: 10 AML Alerts with triage classifications & adverse media
// ============================================================
const alerts = [
  {
    id: 'AML-001', customer: { name: 'Dmitri Volkov', id: 'CUST-4821', riskScore: 92, kycStatus: 'Expired', jurisdiction: 'Cyprus', dob: '1978-03-15', pep: false },
    alertType: 'Sanctions Hit', severity: 'critical', status: 'pending', timestamp: new Date(Date.now() - 3600000),
    triage: { classification: 'escalate', confidence: 94 },
    riskFactors: [{ name: 'OFAC List Match', value: 98 }, { name: 'High-Risk Jurisdiction', value: 75 }, { name: 'Transaction Velocity', value: 60 }],
    transactions: [
      { date: '2025-01-18', amount: 485000, currency: 'USD', direction: 'OUT', counterparty: 'Meridian Holdings Ltd', country: 'Cyprus' },
      { date: '2025-01-17', amount: 250000, currency: 'EUR', direction: 'IN', counterparty: 'Baltic Trade Corp', country: 'Latvia' },
      { date: '2025-01-15', amount: 175000, currency: 'USD', direction: 'OUT', counterparty: 'Aegis Capital', country: 'Malta' }
    ],
    linkedAlerts: ['AML-004'],
    adverseMedia: [
      { title: 'Cyprus firm linked to Russian oligarch network under investigation', source: 'Reuters', date: '2025-01-10', sentiment: 'negative' },
      { title: 'Meridian Holdings flagged in EU sanctions probe', source: 'Financial Times', date: '2024-12-28', sentiment: 'negative' }
    ],
    evidence: [
      { type: 'OFAC Match', desc: 'Name matches SDN list entry #21847, DOB verified. Exact DOB match on OFAC SDN list.', source: 'LexisNexis', date: '2025-01-18' },
      { type: 'Transaction Pattern', desc: '3 large transfers in 72 hours to high-risk jurisdictions totaling $910K.', source: 'MemberCheck', date: '2025-01-18' }
    ],
    aiSummary: 'Critical sanctions alert. Customer Dmitri Volkov matches an entry on the OFAC SDN list (entry #21847). Date of birth confirmed. Multiple large transactions to Cyprus, Latvia, and Malta detected in the past 72 hours. Immediate escalation recommended.'
  },
  {
    id: 'AML-002', customer: { name: 'Li Wei', id: 'CUST-3392', riskScore: 78, kycStatus: 'Valid', jurisdiction: 'China', dob: '1985-11-22', pep: false },
    alertType: 'Structuring', severity: 'high', status: 'pending', timestamp: new Date(Date.now() - 7200000),
    triage: { classification: 'review', confidence: 72 },
    riskFactors: [{ name: 'Deposit Pattern', value: 88 }, { name: 'Below Reporting Threshold', value: 92 }, { name: 'Frequency', value: 65 }],
    transactions: [
      { date: '2025-01-18', amount: 9500, currency: 'USD', direction: 'IN', counterparty: 'Cash Deposit', country: 'US' },
      { date: '2025-01-17', amount: 9800, currency: 'USD', direction: 'IN', counterparty: 'Cash Deposit', country: 'US' },
      { date: '2025-01-17', amount: 9200, currency: 'USD', direction: 'IN', counterparty: 'Cash Deposit', country: 'US' },
      { date: '2025-01-16', amount: 9600, currency: 'USD', direction: 'IN', counterparty: 'Cash Deposit', country: 'US' },
      { date: '2025-01-15', amount: 9400, currency: 'USD', direction: 'IN', counterparty: 'Cash Deposit', country: 'US' }
    ],
    linkedAlerts: [],
    adverseMedia: [],
    evidence: [
      { type: 'Pattern Detection', desc: '5 cash deposits below $10,000 CTR threshold within 4 days.', source: 'MemberCheck', date: '2025-01-18' },
      { type: 'Historical Baseline', desc: 'Customer average monthly deposits: $2,100.', source: 'MemberCheck', date: '2025-01-18' }
    ],
    aiSummary: 'Structuring pattern detected. Li Wei made 5 cash deposits of $9,200-$9,800 over 4 consecutive days, each just below the $10,000 CTR reporting threshold. Total structured: $47,500.'
  },
  {
    id: 'AML-003', customer: { name: 'Senator Maria Santos', id: 'CUST-1157', riskScore: 85, kycStatus: 'Valid', jurisdiction: 'Brazil', dob: '1962-07-08', pep: true },
    alertType: 'PEP Match', severity: 'high', status: 'pending', timestamp: new Date(Date.now() - 14400000),
    triage: { classification: 'escalate', confidence: 91 },
    riskFactors: [{ name: 'PEP Status', value: 100 }, { name: 'Unusual Wire Activity', value: 72 }, { name: 'Shell Company Links', value: 55 }],
    transactions: [
      { date: '2025-01-16', amount: 1200000, currency: 'BRL', direction: 'OUT', counterparty: 'Offshore Ventures Inc', country: 'BVI' },
      { date: '2025-01-10', amount: 800000, currency: 'USD', direction: 'IN', counterparty: 'Global Construction SA', country: 'Brazil' }
    ],
    linkedAlerts: ['AML-007'],
    adverseMedia: [
      { title: 'Brazilian Senator Named in Corruption Probe Operation Remote', source: 'O Globo', date: '2024-11-15', sentiment: 'negative' },
      { title: 'Congress member under investigation for offshore links', source: 'Reuters', date: '2024-10-22', sentiment: 'negative' }
    ],
    evidence: [
      { type: 'PEP Database', desc: 'Confirmed: Member of Brazilian Congress since 2019.', source: 'LexisNexis', date: '2025-01-16' },
      { type: 'Adverse Media', desc: 'Named in corruption investigation (Operation Remote, 2024).', source: 'LexisNexis', date: '2024-11-15' },
      { type: 'Beneficial Ownership', desc: 'Linked to 3 offshore entities via nominee directors.', source: 'LexisNexis', date: '2025-01-16' }
    ],
    aiSummary: 'PEP alert for Senator Maria Santos, Brazilian Congress member. Large outbound wire of R$1.2M to BVI-registered entity. Adverse media hit from 2024 corruption probe.'
  },
  {
    id: 'AML-004', customer: { name: 'Olympus Trading FZE', id: 'CUST-7743', riskScore: 88, kycStatus: 'Expiring', jurisdiction: 'UAE', dob: 'Entity', pep: false },
    alertType: 'Rapid Movement', severity: 'high', status: 'pending', timestamp: new Date(Date.now() - 28800000),
    triage: { classification: 'escalate', confidence: 87 },
    riskFactors: [{ name: 'Velocity Score', value: 95 }, { name: 'Pass-Through Pattern', value: 82 }, { name: 'Jurisdiction Risk', value: 70 }],
    transactions: [
      { date: '2025-01-18', amount: 2100000, currency: 'USD', direction: 'IN', counterparty: 'Nordic Exports AB', country: 'Sweden' },
      { date: '2025-01-18', amount: 2050000, currency: 'USD', direction: 'OUT', counterparty: 'Meridian Holdings Ltd', country: 'Cyprus' },
      { date: '2025-01-17', amount: 1800000, currency: 'EUR', direction: 'IN', counterparty: 'Danube Trading GmbH', country: 'Austria' },
      { date: '2025-01-17', amount: 1750000, currency: 'EUR', direction: 'OUT', counterparty: 'Pacific Rim Capital', country: 'Singapore' }
    ],
    linkedAlerts: ['AML-001'],
    adverseMedia: [
      { title: 'UAE free zone companies used in layering scheme, FATF warns', source: 'Bloomberg', date: '2025-01-05', sentiment: 'negative' }
    ],
    evidence: [
      { type: 'Pass-Through Detection', desc: 'Funds received and forwarded within same day on 2 occasions.', source: 'MemberCheck', date: '2025-01-18' },
      { type: 'Account Age', desc: 'Account opened 14 days ago. No prior transaction history.', source: 'MemberCheck', date: '2025-01-18' },
      { type: 'Beneficial Owner', desc: 'UBO chain includes entities in 4 jurisdictions.', source: 'LexisNexis', date: '2025-01-18' }
    ],
    aiSummary: 'Rapid fund movement through newly opened account (14 days old). Classic pass-through / layering behavior. Linked to AML-001.'
  },
  {
    id: 'AML-005', customer: { name: 'Ahmed Al-Rashid', id: 'CUST-5566', riskScore: 65, kycStatus: 'Valid', jurisdiction: 'Kuwait', dob: '1990-05-30', pep: false },
    alertType: 'Volume Spike', severity: 'medium', status: 'pending', timestamp: new Date(Date.now() - 43200000),
    triage: { classification: 'false-positive', confidence: 68 },
    riskFactors: [{ name: 'Volume Anomaly', value: 78 }, { name: 'Counterparty Risk', value: 45 }, { name: 'Account Age', value: 30 }],
    transactions: [
      { date: '2025-01-18', amount: 320000, currency: 'USD', direction: 'IN', counterparty: 'Tech Solutions LLC', country: 'US' },
      { date: '2025-01-15', amount: 185000, currency: 'USD', direction: 'IN', counterparty: 'Digital Assets Fund', country: 'Malta' }
    ],
    linkedAlerts: [],
    adverseMedia: [],
    evidence: [
      { type: 'Volume Anomaly', desc: 'Jan volume: $505K vs 12-month avg: $42K (+1,102%).', source: 'MemberCheck', date: '2025-01-18' },
      { type: 'New Counterparties', desc: '3 of 5 January counterparties are first-time.', source: 'MemberCheck', date: '2025-01-18' }
    ],
    aiSummary: 'Transaction volume anomaly. January volume of $505K represents a 1,102% increase over the 12-month average. New counterparties introduced. Likely legitimate business expansion.'
  },
  {
    id: 'AML-006', customer: { name: 'Elena Kuznetsova', id: 'CUST-2219', riskScore: 91, kycStatus: 'Expired', jurisdiction: 'Russia', dob: '1973-09-12', pep: true },
    alertType: 'Sanctions + Dormant', severity: 'critical', status: 'pending', timestamp: new Date(Date.now() - 50400000),
    triage: { classification: 'escalate', confidence: 97 },
    riskFactors: [{ name: 'Sanctions Proximity', value: 88 }, { name: 'Dormant Reactivation', value: 95 }, { name: 'PEP Status', value: 100 }, { name: 'Cross-Border Risk', value: 72 }],
    transactions: [
      { date: '2025-01-17', amount: 5600000, currency: 'USD', direction: 'OUT', counterparty: 'Crown Asset Management', country: 'UK' },
      { date: '2025-01-16', amount: 5600000, currency: 'USD', direction: 'IN', counterparty: 'Siberian Resources JSC', country: 'Russia' }
    ],
    linkedAlerts: ['AML-004'],
    adverseMedia: [
      { title: 'Former Russian energy official linked to sanctioned entities', source: 'The Guardian', date: '2025-01-08', sentiment: 'negative' },
      { title: 'EU expands sanctions list including Russian political figures', source: 'EU Official Journal', date: '2024-12-15', sentiment: 'neutral' },
      { title: 'Siberian Resources JSC placed on EU sanctions watchlist', source: 'Financial Times', date: '2024-11-30', sentiment: 'negative' }
    ],
    evidence: [
      { type: 'Dormant Account', desc: 'Account inactive for 18 months prior to Jan 2025.', source: 'MemberCheck', date: '2025-01-17' },
      { type: 'Sanctions Proximity', desc: 'Received funds from entity on EU sanctions watchlist.', source: 'LexisNexis', date: '2025-01-17' },
      { type: 'PEP Status', desc: 'Former Deputy Minister of Energy (2015-2020).', source: 'LexisNexis', date: '2025-01-17' },
      { type: 'Single Large Transfer', desc: '$5.6M received and immediately forwarded to UK entity.', source: 'MemberCheck', date: '2025-01-17' }
    ],
    aiSummary: 'Critical multi-factor alert. Elena Kuznetsova (former Russian Deputy Minister, PEP) reactivated a dormant account after 18 months. Received $5.6M from a Russian entity on EU sanctions watchlist.'
  },
  {
    id: 'AML-007', customer: { name: 'Caribbean Holdings Ltd', id: 'CUST-8834', riskScore: 74, kycStatus: 'Valid', jurisdiction: 'BVI', dob: 'Entity', pep: false },
    alertType: 'Shell Company', severity: 'medium', status: 'pending', timestamp: new Date(Date.now() - 64800000),
    triage: { classification: 'review', confidence: 76 },
    riskFactors: [{ name: 'Shell Company Indicators', value: 82 }, { name: 'Nominee Directors', value: 90 }, { name: 'Opaque UBO Chain', value: 75 }],
    transactions: [
      { date: '2025-01-14', amount: 3400000, currency: 'USD', direction: 'IN', counterparty: 'Senator Maria Santos', country: 'Brazil' },
      { date: '2025-01-13', amount: 1200000, currency: 'USD', direction: 'OUT', counterparty: 'Panama Gateway Corp', country: 'Panama' }
    ],
    linkedAlerts: ['AML-003'],
    adverseMedia: [
      { title: 'BVI shell companies under increased scrutiny post-Panama Papers', source: 'Bloomberg', date: '2024-12-01', sentiment: 'negative' }
    ],
    evidence: [
      { type: 'Corporate Registry', desc: 'No physical office registered. Registered agent only.', source: 'LexisNexis', date: '2025-01-14' },
      { type: 'UBO Structure', desc: '3 layers of nominee ownership. Ultimate beneficial owner unclear.', source: 'LexisNexis', date: '2025-01-14' },
      { type: 'PEP Link', desc: 'Received R$1.2M from Senator Maria Santos (AML-003).', source: 'MemberCheck', date: '2025-01-14' }
    ],
    aiSummary: 'Shell company indicators for Caribbean Holdings Ltd (BVI). No physical presence, 3 layers of nominee directors. Linked to PEP alert AML-003.'
  },
  {
    id: 'AML-008', customer: { name: 'Rajesh Patel', id: 'CUST-4455', riskScore: 71, kycStatus: 'Valid', jurisdiction: 'India', dob: '1982-01-25', pep: false },
    alertType: 'Layering', severity: 'high', status: 'pending', timestamp: new Date(Date.now() - 86400000),
    triage: { classification: 'review', confidence: 74 },
    riskFactors: [{ name: 'Network Complexity', value: 85 }, { name: 'Rapid Transfers', value: 72 }, { name: 'Jurisdiction Hopping', value: 68 }],
    transactions: [
      { date: '2025-01-17', amount: 425000, currency: 'USD', direction: 'OUT', counterparty: 'Dubai Gold Exchange', country: 'UAE' },
      { date: '2025-01-16', amount: 430000, currency: 'USD', direction: 'IN', counterparty: 'London Bullion Corp', country: 'UK' },
      { date: '2025-01-15', amount: 415000, currency: 'USD', direction: 'OUT', counterparty: 'Zurich Precious Metals', country: 'Switzerland' },
      { date: '2025-01-14', amount: 420000, currency: 'USD', direction: 'IN', counterparty: 'Mumbai Exports Pvt Ltd', country: 'India' }
    ],
    linkedAlerts: [],
    adverseMedia: [],
    evidence: [
      { type: 'Layering Pattern', desc: 'Funds moved through 4 countries in 4 days via commodity trades.', source: 'MemberCheck', date: '2025-01-17' },
      { type: 'Business Mismatch', desc: 'Customer registered as "IT Consultant" — no connection to precious metals.', source: 'MemberCheck', date: '2025-01-17' }
    ],
    aiSummary: 'Layering pattern via precious metals trades. Rajesh Patel (IT consultant) moved $420K-$430K through UK, Switzerland, UAE, and India in 4 days.'
  },
  {
    id: 'AML-009', customer: { name: 'Golden Dragon Casino Ltd', id: 'CUST-6677', riskScore: 68, kycStatus: 'Valid', jurisdiction: 'Philippines', dob: 'Entity', pep: false },
    alertType: 'Cash-Intensive', severity: 'medium', status: 'pending', timestamp: new Date(Date.now() - 100800000),
    triage: { classification: 'false-positive', confidence: 62 },
    riskFactors: [{ name: 'Cash Ratio', value: 85 }, { name: 'Business Type Risk', value: 72 }, { name: 'Deposit Structuring', value: 55 }],
    transactions: [
      { date: '2025-01-17', amount: 89000, currency: 'USD', direction: 'IN', counterparty: 'Cash Deposit', country: 'Philippines' },
      { date: '2025-01-16', amount: 95000, currency: 'USD', direction: 'IN', counterparty: 'Cash Deposit', country: 'Philippines' },
      { date: '2025-01-14', amount: 78000, currency: 'USD', direction: 'IN', counterparty: 'Cash Deposit', country: 'Philippines' }
    ],
    linkedAlerts: [],
    adverseMedia: [],
    evidence: [
      { type: 'Cash Business', desc: '92% of inbound funds are cash deposits.', source: 'MemberCheck', date: '2025-01-17' },
      { type: 'Industry Risk', desc: 'Casinos rated high-risk for money laundering by FATF.', source: 'LexisNexis', date: '2025-01-14' }
    ],
    aiSummary: 'Cash-intensive business alert for Golden Dragon Casino Ltd. 92% of inbound funds are cash deposits totaling $262K. Casinos are FATF-identified high-risk. Expected behavior for casino operations.'
  },
  {
    id: 'AML-010', customer: { name: 'Viktor Petrov', id: 'CUST-9921', riskScore: 82, kycStatus: 'Valid', jurisdiction: 'Belarus', dob: '1969-12-03', pep: false },
    alertType: 'High-Risk Jurisdiction', severity: 'high', status: 'pending', timestamp: new Date(Date.now() - 115200000),
    triage: { classification: 'review', confidence: 79 },
    riskFactors: [{ name: 'Jurisdiction Risk', value: 92 }, { name: 'Cross-Border Volume', value: 65 }, { name: 'Sanctions Proximity', value: 78 }],
    transactions: [
      { date: '2025-01-16', amount: 680000, currency: 'EUR', direction: 'OUT', counterparty: 'Minsk Industrial Group', country: 'Belarus' },
      { date: '2025-01-15', amount: 700000, currency: 'EUR', direction: 'IN', counterparty: 'Frankfurt Trade Bank', country: 'Germany' }
    ],
    linkedAlerts: [],
    adverseMedia: [
      { title: 'Belarus correspondent banking routes under EU review', source: 'Reuters', date: '2025-01-03', sentiment: 'negative' }
    ],
    evidence: [
      { type: 'Jurisdiction Alert', desc: 'Belarus is on FATF grey list with heightened sanctions risk.', source: 'LexisNexis', date: '2025-01-16' },
      { type: 'Bank Correspondent', desc: 'Funds routed through German correspondent banking relationship.', source: 'MemberCheck', date: '2025-01-16' }
    ],
    aiSummary: 'High-risk jurisdiction alert for Viktor Petrov (Belarus). EUR 700K received from German bank and forwarded to Minsk Industrial Group. Belarus is on the FATF grey list.'
  }
];

// State
let activeAlert = null;
let currentFilter = 'all';
let conversationHistory = [];
let investigationStep = 0;
let auditTrail = [];
let auditDrawerOpen = false;

// ============================================================
// AUDIT TRAIL
// ============================================================
function addAuditEntry(type, detail, user = 'AI Sancus') {
  auditTrail.unshift({
    type,
    detail,
    user,
    timestamp: new Date()
  });
  renderAuditTrail();
}

function renderAuditTrail() {
  const list = document.getElementById('audit-list');
  if (!list) return;
  list.innerHTML = auditTrail.map(entry => {
    const time = entry.timestamp.toLocaleTimeString();
    return `<div class="audit-entry">
      <div class="audit-entry-header">
        <span class="audit-entry-type">${entry.type}</span>
        <span class="audit-entry-user">${entry.user}</span>
        <span class="audit-entry-time">${time}</span>
      </div>
      <div class="audit-entry-detail">${entry.detail}</div>
    </div>`;
  }).join('');
}

function toggleAuditDrawer() {
  auditDrawerOpen = !auditDrawerOpen;
  document.getElementById('audit-drawer').classList.toggle('open', auditDrawerOpen);
  const btn = document.getElementById('audit-toggle-btn');
  btn.classList.toggle('active', auditDrawerOpen);
  btn.setAttribute('aria-expanded', auditDrawerOpen);
}

// ============================================================
// TOAST
// ============================================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  const icon = type === 'success' ? '&#x2713;' : type === 'warning' ? '&#x26A0;' : '&#x2713;';
  toast.innerHTML = `<span style="font-size:16px">${icon}</span> ${message}`;
  if (type === 'warning') toast.style.borderLeftColor = 'var(--warning)';
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-show'));
  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Confirmation Dialog
function showConfirmation(title, message, onConfirm, confirmText = 'Confirm', isDanger = false) {
  const dialog = document.getElementById('confirmation-dialog');
  const titleEl = document.getElementById('confirmation-title');
  const messageEl = document.getElementById('confirmation-message');
  const confirmBtn = document.getElementById('confirmation-confirm');
  const cancelBtn = document.getElementById('confirmation-cancel');

  titleEl.textContent = title;
  messageEl.textContent = message;
  confirmBtn.textContent = confirmText;
  confirmBtn.className = `confirmation-btn ${isDanger ? 'danger' : 'primary'}`;
  dialog.classList.add('visible');

  function handleConfirm() { dialog.classList.remove('visible'); cleanup(); onConfirm(); }
  function handleCancel() { dialog.classList.remove('visible'); cleanup(); }
  function cleanup() {
    confirmBtn.removeEventListener('click', handleConfirm);
    cancelBtn.removeEventListener('click', handleCancel);
    dialog.removeEventListener('click', handleBackdrop);
  }
  function handleBackdrop(e) { if (e.target === dialog) handleCancel(); }

  confirmBtn.addEventListener('click', handleConfirm);
  cancelBtn.addEventListener('click', handleCancel);
  dialog.addEventListener('click', handleBackdrop);
}

// ============================================================
// RENDER ALERT INBOX
// ============================================================
function renderAlertList() {
  const listEl = document.getElementById('alert-list');
  const searchTerm = document.getElementById('alert-search').value.toLowerCase();
  let filtered = alerts.filter(a => {
    if (currentFilter === 'critical' && a.severity !== 'critical') return false;
    if (currentFilter === 'high' && a.severity !== 'high') return false;
    if (currentFilter === 'medium' && a.severity !== 'medium') return false;
    if (currentFilter === 'pending' && a.status !== 'pending') return false;
    if (currentFilter === 'review' && a.triage?.classification !== 'review') return false;
    if (currentFilter === 'escalate' && a.triage?.classification !== 'escalate') return false;
    if (searchTerm && !a.customer.name.toLowerCase().includes(searchTerm) && !a.alertType.toLowerCase().includes(searchTerm) && !a.id.toLowerCase().includes(searchTerm)) return false;
    return true;
  });

  filtered.sort((a, b) => {
    const severityOrder = { critical: 0, high: 1, medium: 2 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });

  let html = '';
  filtered.forEach(alert => {
    const hoursAgo = Math.floor((Date.now() - alert.timestamp) / 3600000);
    const timeStr = hoursAgo === 0 ? 'Just now' : hoursAgo < 24 ? `${hoursAgo}h ago` : hoursAgo < 48 ? 'Yesterday' : `${Math.floor(hoursAgo / 24)}d ago`;
    const typeIcons = { 'Sanctions Hit': '&#x26A0;', 'Structuring': '&#x1F4B5;', 'PEP Match': '&#x1F464;', 'Rapid Movement': '&#x26A1;', 'Volume Spike': '&#x1F4C8;', 'Shell Company': '&#x1F3E2;', 'Layering': '&#x1F504;', 'Cash-Intensive': '&#x1F4B0;', 'High-Risk Jurisdiction': '&#x1F30D;', 'Sanctions + Dormant': '&#x1F6AB;' };
    const isActive = activeAlert && activeAlert.id === alert.id;
    const scoreColor = alert.riskScore >= 80 ? 'var(--critical)' : alert.riskScore >= 60 ? 'var(--warning)' : 'var(--success)';
    const triageLabel = alert.triage ? (alert.triage.classification === 'false-positive' ? 'Likely FP' : alert.triage.classification === 'review' ? 'Needs Review' : 'Escalate') : '';
    const triageClass = alert.triage ? `triage-${alert.triage.classification}` : '';
    const statusClass = `status-${alert.status}`;

    html += `<div class="alert-card ${isActive ? 'active' : ''} severity-${alert.severity}" onclick="selectAlert('${alert.id}')">
      <div class="alert-card-top">
        <div class="severity-dot severity-${alert.severity}"></div>
        <span class="alert-type-icon">${typeIcons[alert.alertType] || '&#x1F4CB;'}</span>
        <span class="alert-customer">${alert.customer.name}</span>
        ${triageLabel ? `<span class="triage-badge ${triageClass}">${triageLabel}</span>` : ''}
      </div>
      <div class="alert-type-label">${alert.alertType}</div>
      <div class="alert-meta">
        <span class="alert-time">${timeStr}</span>
        <span class="alert-risk" style="color: ${scoreColor}">Score: ${alert.riskScore}</span>
      </div>
    </div>`;
  });

  if (filtered.length === 0) {
    html = '<div style="padding:24px;text-align:center;color:var(--muted-foreground);font-size:13px;">No alerts match your filters</div>';
  }

  listEl.innerHTML = html;
  document.getElementById('pending-count').textContent = alerts.filter(a => a.status === 'pending').length;
}

document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-pressed', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-pressed', 'true');
    currentFilter = chip.dataset.filter;
    renderAlertList();
  });
});

document.getElementById('alert-search').addEventListener('input', renderAlertList);

// ============================================================
// CHAT SYSTEM
// ============================================================
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSuggestions = document.getElementById('chat-suggestions');

function addMessage(role, content, actions = null, viz = null) {
  const msg = document.createElement('div');
  msg.className = `message message-${role}`;
  const avatar = document.createElement('div');
  avatar.className = `msg-avatar msg-avatar-${role}`;
  if (role === 'ai') {
    avatar.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`;
  } else {
    avatar.textContent = 'You';
  }
  msg.appendChild(avatar);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'msg-content';
  const bubble = document.createElement('div');
  bubble.className = `msg-bubble msg-${role}`;
  bubble.innerHTML = content;
  contentDiv.appendChild(bubble);

  if (viz) {
    const vizDiv = document.createElement('div');
    vizDiv.className = 'msg-viz';
    vizDiv.innerHTML = viz;
    contentDiv.appendChild(vizDiv);
  }

  if (actions) {
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'msg-actions';
    actions.forEach(a => {
      const btn = document.createElement('button');
      btn.className = `msg-action-btn ${a.class || ''}`;
      btn.textContent = a.label;
      btn.onclick = () => {
        if (a.action) a.action();
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
      };
      actionsDiv.appendChild(btn);
    });
    contentDiv.appendChild(actionsDiv);
  }

  msg.appendChild(contentDiv);
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return bubble;
}

function showTyping() {
  const msg = document.createElement('div');
  msg.className = 'message message-ai';
  msg.id = 'typing-msg';
  msg.innerHTML = `<div class="msg-avatar msg-avatar-ai"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('typing-msg');
  if (el) el.remove();
}

function renderMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code style="background:var(--muted);padding:1px 4px;border-radius:3px;font-size:12px;">$1</code>')
    .replace(/\n/g, '<br>');
}

async function streamText(bubble, text, speed = 12) {
  bubble.innerHTML = '';
  const chars = [];
  for (let i = 0; i < text.length; i++) {
    chars.push(text[i]);
    bubble.innerHTML = renderMarkdown(chars.join(''));
    chatMessages.scrollTop = chatMessages.scrollHeight;
    if (i % 3 === 0) await new Promise(r => setTimeout(r, speed));
  }
  bubble.innerHTML = renderMarkdown(text);
}

function setSuggestions(suggestions) {
  chatSuggestions.innerHTML = suggestions.map(s => `<button class="suggestion-btn" onclick="sendSuggestion('${s}')">${s}</button>`).join('');
}

function sendSuggestion(text) {
  chatInput.value = text;
  handleSend();
}

async function handleSend() {
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = '';
  addMessage('user', text);
  conversationHistory.push({ role: 'user', text });

  showTyping();
  await new Promise(r => setTimeout(r, 800 + Math.random() * 600));
  hideTyping();

  const response = processInput(text);
  const bubble = addMessage('ai', '');
  await streamText(bubble, response.text, 10);

  if (response.actions) {
    const msgEl = bubble.closest('.message');
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'msg-actions';
    response.actions.forEach(a => {
      const btn = document.createElement('button');
      btn.className = `msg-action-btn ${a.class || ''}`;
      btn.textContent = a.label;
      btn.onclick = () => {
        if (a.action) a.action();
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
      };
      actionsDiv.appendChild(btn);
    });
    msgEl.querySelector('.msg-content').appendChild(actionsDiv);
  }

  if (response.viz) {
    const msgEl = bubble.closest('.message');
    const vizDiv = document.createElement('div');
    vizDiv.className = 'msg-viz';
    vizDiv.innerHTML = response.viz;
    msgEl.querySelector('.msg-content').appendChild(vizDiv);
    if (response.viz && response.viz.includes('mini-network-')) renderMiniNetworkGraph(response.viz);
  }

  if (response.suggestions) setSuggestions(response.suggestions);
  conversationHistory.push({ role: 'ai', text: response.text });
}

document.getElementById('send-btn').addEventListener('click', handleSend);
chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });

// ============================================================
// RESPONSE ENGINE — with natural language query parsing
// ============================================================
function processInput(text) {
  const lower = text.toLowerCase();

  // Natural language queries for structured filtering
  if (lower.includes('strong name') && lower.includes('active sanction')) {
    const strongSanctions = alerts.filter(a => a.severity === 'critical' || a.triage?.classification === 'escalate');
    return getFilterResponse(strongSanctions, 'strong name match AND active sanctions');
  }
  if (lower.includes('adverse media')) {
    return getAdverseMediaResponse();
  }
  if (lower.includes('false positive') || lower.includes('likely fp') || lower.includes('can dismiss')) {
    const fps = alerts.filter(a => a.triage?.classification === 'false-positive');
    return getFilterResponse(fps, 'likely false positive');
  }
  if (lower.includes('needs review') || lower.includes('need review')) {
    const reviews = alerts.filter(a => a.triage?.classification === 'review');
    return getFilterResponse(reviews, 'needs review');
  }
  if (lower.includes('escalate') && (lower.includes('show') || lower.includes('only') || lower.includes('which'))) {
    const escalates = alerts.filter(a => a.triage?.classification === 'escalate');
    return getFilterResponse(escalates, 'recommended for escalation');
  }
  if (lower.includes('pep') && lower.includes('active sanction')) {
    const pepSanctions = alerts.filter(a => a.customer.pep && a.severity === 'critical');
    return getFilterResponse(pepSanctions, 'PEP with active sanctions');
  }

  if (activeAlert) {
    if (lower === 'next step' || lower === 'next' || lower === 'continue') {
      if (investigationStep > 0 && investigationStep < 4) {
        showInvestigationStep(activeAlert, investigationStep + 1);
        return { text: '', suggestions: [] };
      }
      if (investigationStep === 4) {
        return { text: 'Investigation complete. You can now draft a SAR, escalate, or dismiss this alert.', suggestions: ['Draft SAR', 'Escalate', 'Dismiss as false positive'] };
      }
    }
    if (lower.includes('why') || lower.includes('flagged') || lower.includes('reason') || lower.includes('trigger')) return getWhyFlaggedResponse(activeAlert);
    if (lower.includes('transaction') || lower.includes('transfer') || lower.includes('payment')) return getTransactionResponse(activeAlert);
    if (lower.includes('risk') || lower.includes('score')) return getRiskResponse(activeAlert);
    if (lower.includes('investigat') || lower.includes('deep') || lower.includes('more about')) return getInvestigationResponse(activeAlert);
    if (lower.includes('pattern') || lower.includes('similar') || lower.includes('connect')) return getPatternResponse(activeAlert);
    if (lower.includes('evidence') || lower.includes('proof') || lower.includes('support')) return getEvidenceResponse(activeAlert);
    if (lower.includes('adverse media')) return getAlertAdverseMediaResponse(activeAlert);
  }

  if (lower.includes('next alert') || lower.includes('next highest') || lower.includes('show next')) return getNextAlertResponse();
  if (lower.includes('investigate aml') || lower.includes('show me aml') || lower.includes('open aml')) {
    const match = lower.match(/aml[- ]?(\d+)/);
    if (match) {
      const alert = alerts.find(a => a.id.toLowerCase() === `aml-${match[1].padStart(3, '0')}`);
      if (alert) { activeAlert = alert; renderAlertList(); showDetailPanel(alert); return getAlertSummaryResponse(alert); }
    }
  }
  if (lower.includes('pattern') || lower.includes('trend') || lower.includes('overview')) return getGeneralPatternResponse();
  if (lower.includes('dismiss') || lower.includes('close') || lower.includes('false positive')) {
    if (activeAlert) { dismissAlert(activeAlert); return { text: `Alert ${activeAlert.id} has been dismissed. What would you like to do next?`, suggestions: ['Next alert', 'Show me patterns'] }; }
    return { text: 'I can help dismiss an alert. Please select an alert from the sidebar first.', suggestions: ['Why was this flagged?', 'Show me the evidence', 'Show risk breakdown'] };
  }
  if (lower.includes('escalat')) return { text: 'Escalation requires an active alert context. Click an alert in the sidebar and I can escalate it with full justification.', suggestions: ['Why was this flagged?', 'Show me the evidence'] };
  if (lower.includes('sar') || lower.includes('file')) return { text: 'To prepare a SAR, I need an alert context first. Select an alert and ask me to investigate.', suggestions: ['Start investigation', 'Show me patterns'] };
  if (lower.includes('edd') || lower.includes('enhanced due diligence')) return { text: 'EDD is recommended for alerts with risk scores above 70. Select a high-risk alert and I can initiate EDD.', suggestions: ['Show risk breakdown', 'Start investigation'] };
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return { text: 'Hello! I\'m Sancus, your AML investigation partner. I can help you:\n\n**Conversational Queries** — "Show only hits with strong name match AND active sanctions"\n**Adverse Media** — "Summarize all adverse media for this entity"\n**Alert Triage** — Review, dismiss, or escalate with AI recommendations\n**SAR Filing** — Draft Suspicious Activity Reports with evidence\n\nI operate in **advisory mode** (EU AI Act compliant) — you retain full decision authority.', suggestions: ['Show me patterns', 'Which alerts need escalation?', 'Summarize adverse media'] };
  }
  if (lower.includes('help')) {
    return { text: 'Here is what I can help with:\n\n**Conversational Queries**\n• "Show only hits with strong name match AND active sanctions"\n• "Summarize all adverse media for this entity"\n• "Which alerts are likely false positives?"\n\n**Alert Triage** — Each alert has an AI classification badge:\n• **Likely FP** — Probably safe to dismiss\n• **Needs Review** — Requires manual investigation\n• **Escalate** — High confidence — escalate immediately\n\n**Investigation** — Structured 4-step evidence gathering\n**SAR Filing** — Draft reports with supporting evidence\n\nAll decisions are logged to the **Audit Trail** for EU AI Act compliance.', suggestions: ['Show me patterns', 'Which alerts need escalation?', 'Show advisory mode details'] };
  }

  for (const alert of alerts) {
    if (lower.includes(alert.customer.name.toLowerCase().split(' ')[0].toLowerCase())) {
      if (activeAlert && activeAlert.id === alert.id) return getInvestigationResponse(alert);
      activeAlert = alert; renderAlertList();
      return getAlertSummaryResponse(alert);
    }
  }

  return { text: 'I\'m not sure I understand. Try selecting an alert, or ask me about patterns, risk scores, or investigations. Type "help" for a full list of capabilities.', suggestions: ['Help', 'Show me patterns', 'Which alerts need escalation?'] };
}

function getFilterResponse(filteredAlerts, description) {
  const list = filteredAlerts.map(a => {
    const triageLabel = a.triage?.classification === 'false-positive' ? 'Likely FP' : a.triage?.classification === 'review' ? 'Needs Review' : 'Escalate';
    const triageClass = a.triage ? `triage-${a.triage.classification}` : '';
    return `• **${a.id}** — ${a.customer.name} (${a.alertType}) — Risk: ${a.riskScore}/100 — <span class="triage-badge ${triageClass}">${triageLabel}</span> (AI confidence: ${a.triage?.confidence}%)`;
  }).join('\n');

  addAuditEntry('Query', `Natural language query: "${description}" — ${filteredAlerts.length} results returned`);

  return {
    text: `Found **${filteredAlerts.length} alerts** matching: "${description}"\n\n${list}\n\nSelect any alert for detailed analysis.`,
    suggestions: filteredAlerts.length > 0 ? [filteredAlerts[0].id, 'Summarize adverse media'] : ['Show me patterns', 'Show all alerts']
  };
}

function getAdverseMediaResponse() {
  const withMedia = alerts.filter(a => a.adverseMedia && a.adverseMedia.length > 0);
  let vizHtml = '';
  withMedia.forEach(a => {
    vizHtml += `<div style="margin-bottom:16px;"><div style="font-weight:600;font-size:13px;margin-bottom:8px;">${a.customer.name} (${a.id})</div>`;
    a.adverseMedia.forEach(m => {
      const sentimentColor = m.sentiment === 'negative' ? 'var(--critical)' : m.sentiment === 'neutral' ? 'var(--warning)' : 'var(--success)';
      vizHtml += `<div style="padding:8px;background:var(--muted / 0.5);border-radius:var(--radius-sm);margin-bottom:4px;font-size:12px;border-left:3px solid ${sentimentColor};">
        <div style="font-weight:500;margin-bottom:2px;">${m.title}</div>
        <div style="color:var(--muted-foreground);">${m.source} — ${m.date} — <span style="color:${sentimentColor};font-weight:600;text-transform:uppercase;font-size:10px;">${m.sentiment}</span></div>
      </div>`;
    });
    vizHtml += '</div>';
  });

  addAuditEntry('Query', 'Requested adverse media summary across all alerts');

  return {
    text: `**Adverse Media Summary**\n\n${withMedia.length} of ${alerts.length} alerts have associated adverse media hits.\n\n${withMedia.map(a => `• **${a.customer.name}**: ${a.adverseMedia.length} hit(s) — most recent: ${a.adverseMedia[0].date}`).join('\n')}\n\nSee details below:`,
    viz: vizHtml,
    suggestions: withMedia.length > 0 ? [withMedia[0].id, 'Show patterns'] : []
  };
}

function getAlertAdverseMediaResponse(alert) {
  if (!alert.adverseMedia || alert.adverseMedia.length === 0) {
    return { text: `No adverse media found for ${alert.customer.name} in LexisNexis or MemberCheck databases.`, suggestions: ['Show evidence', 'Start investigation'] };
  }
  let vizHtml = '';
  alert.adverseMedia.forEach(m => {
    const sentimentColor = m.sentiment === 'negative' ? 'var(--critical)' : m.sentiment === 'neutral' ? 'var(--warning)' : 'var(--success)';
    vizHtml += `<div style="padding:12px;background:var(--muted / 0.5);border-radius:var(--radius-md);margin-bottom:8px;border-left:3px solid ${sentimentColor};">
      <div style="font-weight:600;font-size:13px;margin-bottom:4px;">${m.title}</div>
      <div style="font-size:12px;color:var(--muted-foreground);">Source: <span class="badge badLexisNexis">${m.source}</span> — Date: ${m.date} — Sentiment: <span style="color:${sentimentColor};font-weight:600;text-transform:uppercase;">${m.sentiment}</span></div>
    </div>`;
  });

  addAuditEntry('Query', `Requested adverse media summary for ${alert.id} — ${alert.adverseMedia.length} hits found`);

  return {
    text: `**Adverse Media for ${alert.customer.name}**\n\n${alert.adverseMedia.length} hit(s) found across LexisNexis and MemberCheck databases:\n\n${alert.adverseMedia.map(m => `• "${m.title}" — ${m.source} (${m.date})`).join('\n')}\n\nAll hits have **negative sentiment** and are directly relevant to this alert.`,
    viz: vizHtml,
    suggestions: ['Show evidence', 'Start investigation', 'Draft SAR']
  };
}

function getAlertSummaryResponse(alert) {
  activeAlert = alert;
  renderAlertList();
  showDetailPanel(alert);
  const triageLabel = alert.triage?.classification === 'false-positive' ? 'Likely False Positive' : alert.triage?.classification === 'review' ? 'Needs Manual Review' : 'Recommended for Escalation';
  const triageClass = alert.triage ? `triage-${alert.triage.classification}` : '';

  addAuditEntry('Triage', `Alert ${alert.id} reviewed. AI classification: ${triageLabel} (confidence: ${alert.triage?.confidence}%). Data sources: LexisNexis, MemberCheck.`);

  return {
    text: `Alert **${alert.id}** — ${alert.alertType}\n\nCustomer: ${alert.customer.name} (${alert.customer.id})\nRisk Score: ${alert.riskScore}/100 | Severity: ${alert.severity.toUpperCase()}\n\n**AI Triage Classification:** <span class="triage-badge ${triageClass}">${triageLabel}</span> (Confidence: ${alert.triage?.confidence}%)\n\n**Data Sources:** LexisNexis, MemberCheck\n\n${alert.aiSummary}\n\nWhat would you like to explore?`,
    actions: [
      { label: 'Dismiss', class: 'success', action: () => dismissAlert(alert) },
      { label: 'Escalate', class: 'danger', action: () => escalateAlert(alert) },
      { label: 'Request EDD', class: '', action: () => eddAlert(alert) }
    ],
    suggestions: ['Why was this flagged?', 'Show risk breakdown', 'Show adverse media', 'Start investigation']
  };
}

function getWhyFlaggedResponse(alert) {
  let vizHtml = '<table class="mini-tx-table"><thead><tr><th>Trigger</th><th>Score</th><th>Detail</th></tr></thead><tbody>';
  alert.riskFactors.forEach(f => {
    vizHtml += `<tr><td>${f.name}</td><td><span class="score-pill ${f.value >= 80 ? 'score-high' : f.value >= 60 ? 'score-medium' : 'score-low'}">${f.value}</span></td><td style="color:var(--muted-foreground)">${f.value >= 80 ? 'Critical' : f.value >= 60 ? 'Elevated' : 'Moderate'}</td></tr>`;
  });
  vizHtml += '</tbody></table>';

  addAuditEntry('Explanation', `Risk factor breakdown provided for ${alert.id}`);

  return {
    text: `This alert was triggered by ${alert.riskFactors.length} risk factors:\n\n` + alert.riskFactors.map(f => `**${f.name}**: Score ${f.value}/100`).join('\n') + `\n\nThe combined risk score is ${alert.riskScore}/100. Here is the breakdown:`,
    viz: vizHtml,
    suggestions: ['Show transactions', 'Show evidence', 'Start investigation']
  };
}

function getTransactionResponse(alert) {
  let vizHtml = '<table class="mini-tx-table"><thead><tr><th>Date</th><th>Amount</th><th>Dir</th><th>Counterparty</th><th>Country</th></tr></thead><tbody>';
  alert.transactions.forEach(tx => {
    const color = tx.direction === 'IN' ? 'var(--success)' : 'var(--destructive)';
    vizHtml += `<tr><td>${tx.date}</td><td style="font-weight:600;color:${color}">${tx.direction === 'IN' ? '+' : '-'}${tx.currency} ${tx.amount.toLocaleString()}</td><td>${tx.direction}</td><td>${tx.counterparty}</td><td>${tx.country}</td></tr>`;
  });
  vizHtml += '</tbody></table>';
  const totalIn = alert.transactions.filter(t => t.direction === 'IN').reduce((s, t) => s + t.amount, 0);
  const totalOut = alert.transactions.filter(t => t.direction === 'OUT').reduce((s, t) => s + t.amount, 0);

  addAuditEntry('Analysis', `Transaction analysis provided for ${alert.id} — ${alert.transactions.length} transactions reviewed`);

  return {
    text: `${alert.customer.name} has ${alert.transactions.length} recent transactions:\n\nTotal Inbound: ${alert.transactions[0]?.currency || 'USD'} ${totalIn.toLocaleString()}\nTotal Outbound: ${alert.transactions[0]?.currency || 'USD'} ${totalOut.toLocaleString()}\nNet Flow: ${alert.transactions[0]?.currency || 'USD'} ${(totalIn - totalOut).toLocaleString()}\n\n${alert.transactions.length >= 4 ? 'High transaction frequency is notable. ' : ''}See details below:`,
    viz: vizHtml,
    suggestions: ['Why was this flagged?', 'Show risk breakdown', 'Start investigation']
  };
}

function getRiskResponse(alert) {
  let vizHtml = '<div class="risk-factor-chart">';
  alert.riskFactors.forEach(f => {
    const color = f.value >= 80 ? 'var(--critical)' : f.value >= 60 ? 'var(--warning)' : 'var(--success)';
    vizHtml += `<div class="risk-factor"><div class="risk-factor-header"><span class="risk-factor-name">${f.name}</span><span class="risk-factor-value" style="color:${color}">${f.value}%</span></div><div class="risk-factor-bar"><div class="risk-factor-fill" style="width:${f.value}%;background:${color}"></div></div></div>`;
  });
  vizHtml += '</div>';

  addAuditEntry('Explanation', `Risk score breakdown provided for ${alert.id}`);

  return {
    text: `Risk breakdown for ${alert.customer.name} (Score: ${alert.riskScore}/100):\n\n` + alert.riskFactors.map(f => `${f.name}: ${f.value}%`).join('\n') + `\n\nThe overall score is a weighted composite. Here is the visual breakdown:`,
    viz: vizHtml,
    suggestions: ['Show transactions', 'Why was this flagged?', 'Start investigation']
  };
}

function getInvestigationResponse(alert) {
  activeAlert = alert;
  investigationStep = 1;
  showDetailPanel(alert);
  addAuditEntry('Investigation', `Structured investigation initiated for ${alert.id}`);
  return {
    text: `Investigation initiated for **${alert.id}** — ${alert.alertType}\n\nI will guide you through a structured 4-step investigation. Let's start:`,
    actions: [
      { label: 'Step 1: Review Profile', class: 'primary', action: () => showInvestigationStep(alert, 1) },
      { label: 'Step 2: Transactions', class: '', action: () => showInvestigationStep(alert, 2) },
      { label: 'Step 3: Cross-References', class: '', action: () => showInvestigationStep(alert, 3) },
      { label: 'Step 4: Evidence', class: '', action: () => showInvestigationStep(alert, 4) }
    ],
    suggestions: ['Review profile', 'Show transactions', 'Cross-reference check', 'Show evidence']
  };
}

function showInvestigationStep(alert, step) {
  investigationStep = step;
  const stepData = [
    null,
    { title: 'Step 1: Customer Profile Review', text: `**Customer:** ${alert.customer.name}\n**ID:** ${alert.customer.id}\n**Jurisdiction:** ${alert.customer.jurisdiction}\n**KYC Status:** ${alert.customer.kycStatus}\n**PEP:** ${alert.customer.pep ? 'Yes — CONFIRMED' : 'No'}\n**Risk Score:** ${alert.riskScore}/100\n\n${alert.customer.pep ? 'PEP status requires enhanced scrutiny.' : 'Customer is not a PEP, but jurisdiction-based risk may apply.'}`, viz: null },
    { title: 'Step 2: Transaction Pattern Analysis', text: `**Transaction Summary:**\n${alert.aiSummary}\n\n**Key observations:**\n• ${alert.transactions.length} transactions analyzed\n• Inbound: ${alert.transactions.filter(t => t.direction === 'IN').reduce((s,t) => s + t.amount, 0).toLocaleString()} ${alert.transactions[0]?.currency}\n• Outbound: ${alert.transactions.filter(t => t.direction === 'OUT').reduce((s,t) => s + t.amount, 0).toLocaleString()} ${alert.transactions[0]?.currency}\n• Jurisdictions involved: ${[...new Set(alert.transactions.map(t => t.country))].join(', ')}`, viz: (() => { let h = '<table class="mini-tx-table"><thead><tr><th>Date</th><th>Amount</th><th>Dir</th><th>To/From</th><th>Country</th></tr></thead><tbody>'; alert.transactions.forEach(tx => { const c = tx.direction === 'IN' ? 'var(--success)' : 'var(--destructive)'; h += `<tr><td>${tx.date}</td><td style="font-weight:600;color:${c}">${tx.direction === 'IN' ? '+' : '-'}${tx.currency} ${tx.amount.toLocaleString()}</td><td>${tx.direction}</td><td style="font-size:11px">${tx.counterparty}</td><td style="font-size:11px">${tx.country}</td></tr>`; }); h += '</tbody></table>'; return h; })() },
    { title: 'Step 3: Cross-Reference Check', text: `${alert.linkedAlerts.length > 0 ? `**Linked Alerts Found:** ${alert.linkedAlerts.length}\n\n` + alert.linkedAlerts.map(id => { const linked = alerts.find(a => a.id === id); return linked ? `• **${id}** — ${linked.customer.name} (${linked.alertType})` : ''; }).join('\n') + '\n\nShared entities suggest potential coordinated activity.' : 'No directly linked alerts found.'}\n\nSee network visualization:`, viz: alert.linkedAlerts.length > 0 ? `<div class="mini-network-graph" id="network-${alert.id}"></div>` : null },
    { title: 'Step 4: Evidence Summary', text: `**${alert.evidence.length} evidence items collected:**\n\n${alert.evidence.map(e => `• **[${e.type}]** ${e.desc} (Source: ${e.source})`).join('\n')}\n\n**Assessment:** ${alert.riskScore >= 85 ? 'Evidence threshold for SAR filing is met.' : alert.riskScore >= 70 ? 'Sufficient evidence for escalation.' : 'Evidence is moderate.'}`, viz: (() => { let h = '<table class="evidence-table"><thead><tr><th>Type</th><th>Description</th><th>Source</th></tr></thead><tbody>'; alert.evidence.forEach(e => { h += `<tr><td><span class="badge-${e.source === 'LexisNexis' ? 'badLexisnexis' : 'badMembercheck'}">${e.type}</span></td><td>${e.desc}</td><td><span class="badge ${e.source === 'LexisNexis' ? 'badLexisnexis' : 'badMembercheck'}">${e.source}</span></td></tr>`; }); h += '</tbody></table>'; return h; })() }
  ];

  const data = stepData[step];
  addAuditEntry('Investigation', `Step ${step} completed for ${alert.id}: ${data.title}`);

  addMessage('ai', data.text,
    step === 4 ? [
      { label: 'Draft SAR', class: 'primary', action: () => draftSAR(alert) },
      { label: 'Escalate', class: 'danger', action: () => escalateAlert(alert) },
      { label: 'Request EDD', class: '', action: () => eddAlert(alert) }
    ] : null, data.viz
  );

  if (step < 4) setSuggestions(['Next step', 'Show transactions', 'Show risk breakdown', 'Draft SAR']);
  else setSuggestions(['Draft SAR', 'Escalate', 'Dismiss as false positive']);
}

function getPatternResponse(alert) {
  if (alert.linkedAlerts.length === 0) {
    return { text: `No directly linked alerts found for ${alert.customer.name}.`, suggestions: ['Show me patterns', 'Show risk breakdown'] };
  }
  return {
    text: `Pattern analysis for ${alert.customer.name}:\n\nConnected to ${alert.linkedAlerts.length} other alert(s):\n${alert.linkedAlerts.map(id => { const linked = alerts.find(a => a.id === id); return `• ${id}: ${linked ? linked.customer.name + ' (' + linked.alertType + ')' : 'Unknown'}`; }).join('\n')}\n\nSee network visualization:`,
    viz: `<div class="mini-network-graph" id="network-${alert.id}"></div>`,
    suggestions: ['Show me all patterns', 'Start investigation', 'Draft SAR']
  };
}

function getNextAlertResponse() {
  const pendingAlerts = alerts.filter(a => a.status === 'pending').sort((a, b) => b.riskScore - a.riskScore);
  if (pendingAlerts.length === 0) return { text: 'All pending alerts reviewed.', suggestions: ['Show me patterns', 'Help'] };
  const nextAlert = pendingAlerts[0];
  activeAlert = nextAlert; renderAlertList(); showDetailPanel(nextAlert);
  return {
    text: `Next highest priority: **${nextAlert.id}** — ${nextAlert.alertType}\n\nCustomer: ${nextAlert.customer.name} | Risk: ${nextAlert.riskScore}/100 | Severity: ${nextAlert.severity.toUpperCase()}\n\n**AI Triage:** ${nextAlert.triage?.classification === 'false-positive' ? 'Likely False Positive' : nextAlert.triage?.classification === 'review' ? 'Needs Review' : 'Escalate'} (Confidence: ${nextAlert.triage?.confidence}%)\n\n${nextAlert.aiSummary}`,
    actions: [
      { label: 'Dismiss', class: 'success', action: () => dismissAlert(nextAlert) },
      { label: 'Escalate', class: 'danger', action: () => escalateAlert(nextAlert) },
      { label: 'Request EDD', class: '', action: () => eddAlert(nextAlert) }
    ],
    suggestions: ['Why was this flagged?', 'Show risk breakdown', 'Start investigation']
  };
}

function getEvidenceResponse(alert) {
  let vizHtml = '<table class="evidence-table"><thead><tr><th>Type</th><th>Description</th><th>Source</th></tr></thead><tbody>';
  alert.evidence.forEach(e => {
    vizHtml += `<tr><td><span class="badge-${e.source === 'LexisNexis' ? 'badLexisnexis' : 'badMembercheck'}">${e.type}</span></td><td>${e.desc}</td><td><span class="badge ${e.source === 'LexisNexis' ? 'badLexisnexis' : 'badMembercheck'}">${e.source}</span></td></tr>`;
  });
  vizHtml += '</tbody></table>';

  addAuditEntry('Evidence', `Evidence reviewed for ${alert.id} — ${alert.evidence.length} items with source attribution`);

  return {
    text: `Evidence collected for ${alert.id}:\n\n${alert.evidence.map(e => `[${e.type}] ${e.desc} (Source: ${e.source})`).join('\n\n')}`,
    viz: vizHtml,
    suggestions: ['Start investigation', 'Draft SAR', 'Show risk breakdown']
  };
}

function getGeneralPatternResponse() {
  const criticalCount = alerts.filter(a => a.severity === 'critical').length;
  const highCount = alerts.filter(a => a.severity === 'high').length;
  const mediumCount = alerts.filter(a => a.severity === 'medium').length;
  const avgRisk = Math.round(alerts.reduce((s, a) => s + a.riskScore, 0) / alerts.length);
  const pendingCount = alerts.filter(a => a.status === 'pending').length;
  const pebCount = alerts.filter(a => a.customer.pep).length;
  const linkedPairs = alerts.filter(a => a.linkedAlerts.length > 0).length;
  const fpCount = alerts.filter(a => a.triage?.classification === 'false-positive').length;
  const reviewCount = alerts.filter(a => a.triage?.classification === 'review').length;
  const escCount = alerts.filter(a => a.triage?.classification === 'escalate').length;

  addAuditEntry('Query', 'Cross-alert pattern analysis requested — portfolio overview generated');

  return {
    text: `Cross-Alert Pattern Analysis\n\n**Portfolio Overview:**\n• Total Alerts: ${alerts.length}\n• Pending Review: ${pendingCount}\n• Critical: ${criticalCount} | High: ${highCount} | Medium: ${mediumCount}\n• Average Risk Score: ${avgRisk}/100\n• PEP-Related: ${pebCount}\n• Linked Alert Pairs: ${linkedPairs}\n\n**AI Triage Summary:**\n• Likely False Positive: ${fpCount}\n• Needs Review: ${reviewCount}\n• Recommended for Escalation: ${escCount}\n\n**Identified Patterns:**\n1. **Pass-Through Network**: AML-004 and AML-001 share counterparty "Meridian Holdings Ltd" in Cyprus\n2. **PEP-Shell Company Link**: AML-003 and AML-007 directly connected\n3. **Dormant Reactivation**: AML-006 with sanctions-proximate funds\n4. **Commodity Layering**: AML-008 across 4 jurisdictions in 4 days\n\n**Recommended Priority Order:**\n1. AML-006 — Critical (Sanctions + PEP + Dormant)\n2. AML-001 — Critical (OFAC Match)\n3. AML-004 — High (Pass-Through, linked to AML-001)\n4. AML-003 — High (PEP + Adverse Media)`,
    suggestions: ['Investigate AML-006', 'Show me AML-001', 'Summarize adverse media']
  };
}

// ============================================================
// ALERT ACTIONS
// ============================================================
function dismissAlert(alert) {
  showConfirmation(
    'Dismiss Alert?',
    `You are about to dismiss ${alert.id} — ${alert.alertType} for ${alert.customer.name}. This will mark the alert as a false positive. This action is logged for EU AI Act audit purposes.`,
    () => {
      alert.status = 'dismissed';
      activeAlert = null;
      document.getElementById('detail-panel').classList.remove('visible');
      renderAlertList();
      addAuditEntry('Decision', `Officer dismissed ${alert.id} (${alert.alertType}). AI classification was: ${alert.triage?.classification === 'false-positive' ? 'Likely FP (agreed)' : alert.triage?.classification} — Officer decision logged.`);
      showToast(`Alert ${alert.id} dismissed as false positive`);
      setSuggestions(['Next alert', 'Show me patterns']);
    },
    'Dismiss'
  );
}

function escalateAlert(alert) {
  showConfirmation(
    'Escalate Alert?',
    `You are about to escalate ${alert.id} — ${alert.alertType} for ${alert.customer.name} to the senior AML team. This will create a high-priority case requiring review within 24 hours.`,
    () => {
      alert.status = 'escalated';
      activeAlert = null;
      document.getElementById('detail-panel').classList.remove('visible');
      renderAlertList();
      addAuditEntry('Decision', `Officer escalated ${alert.id} (${alert.alertType}). AI classification was: ${alert.triage?.classification === 'escalate' ? 'Escalate (agreed)' : alert.triage?.classification} — Officer decision logged.`);
      showToast(`Alert ${alert.id} escalated to senior team`, 'warning');
      addMessage('ai', `Alert ${alert.id} has been escalated for senior analyst review.\n\n**Escalation Summary:**\n• Alert: ${alert.id} — ${alert.alertType}\n• Customer: ${alert.customer.name}\n• Risk Score: ${alert.riskScore}/100\n• Severity: ${alert.severity.toUpperCase()}\n• Key Triggers: ${alert.riskFactors.map(f => f.name).join(', ')}\n\nA case has been created and assigned to the senior AML team. Recommended timeline: 24-hour review window.`);
      setSuggestions(['Draft SAR', 'Show me patterns', 'Next alert']);
    },
    'Escalate', true
  );
}

function eddAlert(alert) {
  alert.status = 'edd';
  renderAlertList();
  addAuditEntry('Action', `EDD initiated for ${alert.id} by officer`);
  addMessage('ai', `Enhanced Due Diligence initiated for ${alert.id}.\n\n**EDD Checklist Generated:**\n1. Verify source of wealth documentation\n2. Obtain enhanced identity verification\n3. Review full transaction history (12 months)\n4. Check all sanctions lists (OFAC, EU, UN, UK)\n5. Review beneficial ownership chain\n6. Adverse media deep-dive\n7. Geographic risk assessment\n8. Counterparty risk analysis`, { suggestions: ['Show evidence', 'Draft SAR', 'Next alert'] });
}

function draftSAR(alert) {
  const sarText = `SAR Narrative Draft — ${alert.id}\n\n**Subject:** ${alert.customer.name}\n**Customer ID:** ${alert.customer.id}\n**Jurisdiction:** ${alert.customer.jurisdiction}\n**Alert Type:** ${alert.alertType}\n**Risk Score:** ${alert.riskScore}/100\n\n**Activity Summary:**\n${alert.aiSummary}\n\n**Supporting Evidence:**\n${alert.evidence.map(e => `• ${e.type} [${e.source}]: ${e.desc}`).join('\n')}\n\n**Transaction Summary:**\n${alert.transactions.map(tx => `• ${tx.date}: ${tx.direction} ${tx.currency} ${tx.amount.toLocaleString()} to/from ${tx.counterparty} (${tx.country})`).join('\n')}\n\n**Recommendation:**\n${alert.riskScore >= 85 ? 'File SAR immediately. Evidence threshold met.' : alert.riskScore >= 70 ? 'File SAR recommended.' : 'Monitor and gather additional evidence.'}\n\n**${alert.linkedAlerts.length > 0 ? 'Linked Alerts: ' + alert.linkedAlerts.join(', ') + ' should be referenced.' : 'No linked alerts.'}**`;

  addAuditEntry('SAR', `SAR narrative drafted for ${alert.id} — includes ${alert.evidence.length} evidence items from ${[...new Set(alert.evidence.map(e => e.source))].join(', ')}`);

  addMessage('ai', sarText, [
    { label: 'File SAR', class: 'primary', action: () => { addAuditEntry('Filing', `SAR for ${alert.id} prepared for submission to FinCAN/FinCEN`); addMessage('ai', `SAR for ${alert.id} has been prepared for filing. In a production system, this would be submitted to FinCAN/FinCEN.`); } },
    { label: 'Edit Narrative', class: '', action: () => { addMessage('ai', 'In production, the SAR narrative editor would open here for manual review.'); } }
  ]);
  setSuggestions(['File SAR', 'Show me patterns', 'Next alert']);
}

// ============================================================
// DETAIL PANEL
// ============================================================
function showDetailPanel(alert) {
  const panel = document.getElementById('detail-panel');
  const content = document.getElementById('detail-content');
  document.getElementById('detail-title').textContent = alert.id + ' — ' + alert.alertType;
  panel.classList.add('visible');

  const triageLabel = alert.triage?.classification === 'false-positive' ? 'Likely False Positive' : alert.triage?.classification === 'review' ? 'Needs Manual Review' : 'Recommended for Escalation';
  const triageClass = alert.triage ? `triage-${alert.triage.classification}` : '';
  const triageSectionClass = alert.triage?.classification === 'false-positive' ? 'fp' : alert.triage?.classification === 'review' ? 'review' : 'escalate';

  const kycBadgeClass = alert.customer.kycStatus === 'Expired' ? 'badKycExpired' : alert.customer.kycStatus === 'Expiring' ? 'badKycExpiring' : 'badKycValid';

  let txHtml = '';
  if (alert.transactions.length > 0) {
    txHtml = '<table class="tx-table"><thead><tr><th>Date</th><th>Amount</th><th>Dir</th><th>To/From</th></tr></thead><tbody>';
    alert.transactions.forEach(tx => {
      const color = tx.direction === 'IN' ? 'var(--success)' : 'var(--destructive)';
      txHtml += `<tr><td>${tx.date}</td><td style="color:${color};font-weight:600">${tx.currency} ${tx.amount.toLocaleString()}</td><td><span class="tx-direction ${tx.direction === 'IN' ? 'inbound' : 'outbound'}">${tx.direction}</span></td><td style="font-size:12px;color:var(--muted-foreground)">${tx.counterparty}</td></tr>`;
    });
    txHtml += '</tbody></table>';
  }

  let riskHtml = '';
  alert.riskFactors.forEach(f => {
    const color = f.value >= 80 ? 'var(--critical)' : f.value >= 60 ? 'var(--warning)' : 'var(--success)';
    riskHtml += `<div class="risk-factor"><div class="risk-factor-header"><span class="risk-factor-name">${f.name}</span><span class="risk-factor-value" style="color:${color}">${f.value}%</span></div><div class="risk-factor-bar"><div class="risk-factor-fill" style="width:${f.value}%;background:${color}"></div></div></div>`;
  });

  let evidenceHtml = '';
  alert.evidence.forEach(e => {
    const sourceClass = e.source === 'LexisNexis' ? '' : 'data-source="membercheck"';
    evidenceHtml += `<div class="evidence-card" ${sourceClass}><div class="evidence-card-title">${e.type}</div><div class="evidence-card-desc">${e.desc}</div><div class="evidence-card-source">Source: ${e.source} — ${e.date}</div></div>`;
  });

  let adverseHtml = '';
  if (alert.adverseMedia && alert.adverseMedia.length > 0) {
    adverseHtml = '<div class="detail-section"><div class="detail-section-title">Adverse Media</div>';
    alert.adverseMedia.forEach(m => {
      const sentimentColor = m.sentiment === 'negative' ? 'var(--critical)' : m.sentiment === 'neutral' ? 'var(--warning)' : 'var(--success)';
      adverseHtml += `<div style="padding:10px;background:var(--muted / 0.5);border-radius:var(--radius-md);margin-bottom:6px;border-left:3px solid ${sentimentColor};font-size:12px;">
        <div style="font-weight:500;margin-bottom:2px;">${m.title}</div>
        <div style="color:var(--muted-foreground);font-size:11px;">${m.source} — ${m.date} — <span style="color:${sentimentColor};font-weight:600;text-transform:uppercase;">${m.sentiment}</span></div>
      </div>`;
    });
    adverseHtml += '</div>';
  }

  const scoreClass = alert.riskScore >= 80 ? 'score-high' : alert.riskScore >= 60 ? 'score-medium' : 'score-low';

  content.innerHTML = `
    <div class="detail-section">
      <div class="detail-section-title">Customer Profile</div>
      <div class="detail-field"><span class="detail-field-label">Name</span><span class="detail-field-value">${alert.customer.name}</span></div>
      <div class="detail-field"><span class="detail-field-label">ID</span><span class="detail-field-value">${alert.customer.id}</span></div>
      <div class="detail-field"><span class="detail-field-label">Jurisdiction</span><span class="detail-field-value">${alert.customer.jurisdiction}</span></div>
      <div class="detail-field"><span class="detail-field-label">KYC Status</span><span class="detail-field-value"><span class="badge ${kycBadgeClass}">${alert.customer.kycStatus}</span></span></div>
      <div class="detail-field"><span class="detail-field-label">PEP</span><span class="detail-field-value">${alert.customer.pep ? '<span class="badge badge-pep">Yes</span>' : 'No'}</span></div>
      <div class="detail-field"><span class="detail-field-label">Risk Score</span><span class="detail-field-value"><span class="score-pill ${scoreClass}">${alert.riskScore}/100</span></span></div>
    </div>
    <div class="detail-section">
      <div class="eu-ai-act-banner">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        AI Triage — Advisory Mode (EU AI Act compliant)<br>Human officer retains full decision authority
      </div>
      <div class="triage-section ${triageSectionClass}">
        <div class="triage-recommendation">${triageLabel}</div>
        <div class="triage-reasoning">AI Confidence: ${alert.triage?.confidence}% — Based on ${alert.evidence.length} evidence items from LexisNexis and MemberCheck</div>
        <div class="triage-data-sources">
          <span class="triage-source-tag">LexisNexis</span>
          <span class="triage-source-tag">MemberCheck</span>
          <span class="triage-source-tag">FATF Grey List</span>
        </div>
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Transaction History</div>
      ${txHtml}
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Risk Factors</div>
      ${riskHtml}
    </div>
    ${adverseHtml}
    <div class="detail-section">
      <div class="detail-section-title">Evidence</div>
      ${evidenceHtml}
    </div>
  `;
}

document.getElementById('detail-close').addEventListener('click', () => {
  document.getElementById('detail-panel').classList.remove('visible');
});

document.getElementById('detail-panel-toggle').addEventListener('click', () => {
  document.getElementById('detail-panel').classList.toggle('visible');
});

// ============================================================
// SELECT ALERT
// ============================================================
function selectAlert(id) {
  const alert = alerts.find(a => a.id === id);
  if (!alert) return;
  activeAlert = alert;
  renderAlertList();
  const response = getAlertSummaryResponse(alert);
  addMessage('ai', response.text, response.actions);
  if (response.suggestions) setSuggestions(response.suggestions);
}

// ============================================================
// MINI NETWORK GRAPH (D3.js)
// ============================================================
function renderMiniNetworkGraph(vizHtml) {
  if (!vizHtml || !vizHtml.includes('mini-network-')) return;
  const match = vizHtml.match(/id="network-([^"]+)"/);
  if (!match) return;
  const alertId = match[1];
  const alert = alerts.find(a => a.id === alertId);
  if (!alert) return;

  setTimeout(() => {
    const container = document.getElementById(`network-${alertId}`);
    if (!container) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0) return;

    const svg = d3.select(container).append('svg').attr('width', width).attr('height', height);
    const g = svg.append('g');
    const nodes = [{ id: alert.customer.name, type: 'center' }];
    const links = [];

    alert.transactions.forEach(tx => {
      if (!nodes.find(n => n.id === tx.counterparty)) nodes.push({ id: tx.counterparty, type: 'counterparty', country: tx.country });
      links.push({ source: alert.customer.name, target: tx.counterparty, value: tx.amount, direction: tx.direction });
    });

    alert.linkedAlerts.forEach(linkedId => {
      const linked = alerts.find(a => a.id === linkedId);
      if (linked && !nodes.find(n => n.id === linked.customer.name)) nodes.push({ id: linked.customer.name, type: 'linked', alertId: linkedId });
    });

    const radiusMap = { center: 20, counterparty: 14, linked: 16 };

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(30));

    const link = g.selectAll('line').data(links).join('line').attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-opacity', 0.6);

    const node = g.selectAll('g').data(nodes).join('g').attr('cursor', 'pointer');
    node.append('circle').attr('r', d => radiusMap[d.type]).attr('fill', d => d.type === 'center' ? '#3b82f6' : d.type === 'counterparty' ? '#9ca3b8' : '#f59e0b');
    node.append('text').attr('text-anchor', 'middle').attr('dy', '0.35em').attr('fill', d => d.type === 'center' ? 'white' : '#0f1117').attr('font-size', 7).attr('font-weight', 600).text(d => d.id.length > 12 ? d.id.substring(0, 10) + '..' : d.id);
    node.append('text').attr('text-anchor', 'middle').attr('dy', d => radiusMap[d.type] + 12).attr('fill', '#9ca3b8').attr('font-size', 8).text(d => d.country || d.alertId || '');

    simulation.on('tick', () => {
      link.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  }, 100);
}

// ============================================================
// INITIALIZE
// ============================================================
function init() {
  renderAlertList();
  renderAuditTrail();
  setSuggestions(['Show me patterns', 'Which alerts need escalation?', 'Summarize adverse media']);

  addMessage('ai', 'Welcome! I\'m **Sancus**, your AML investigation partner.\n\nRight now there are **' + alerts.length + ' alerts** pending review, including **' + alerts.filter(a => a.severity === 'critical').length + ' critical** and **' + alerts.filter(a => a.severity === 'high').length + ' high-severity** alerts.\n\n**AI Triage Summary:**\n• ' + alerts.filter(a => a.triage?.classification === 'escalate').length + ' recommended for escalation\n• ' + alerts.filter(a => a.triage?.classification === 'review').length + ' need manual review\n• ' + alerts.filter(a => a.triage?.classification === 'false-positive').length + ' likely false positives\n\nI operate in **advisory mode** (EU AI Act compliant) — you retain full decision authority. All decisions are logged to the **Audit Trail**.\n\nTry a query: *"Show only hits with strong name match AND active sanctions*"');
}

init();
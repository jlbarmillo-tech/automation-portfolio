export type N8nArchiveProject = {
  id: number;
  title: string;
  slug: string;
  platform: 'n8n';
  category: string;
  featured: boolean;
  description: string;
  technologies: readonly string[];
  workflowImage: string;
  workflowJson?: string;
  video?: string;
  githubUrl?: string;
  nodeCount: number;
  aiModel: string;
  integrations: number;
  automationType: string;
  challenge: string;
  solution: string;
  workflowSummary: readonly string[];
  businessOutcome: readonly string[];
};

export const n8nArchiveProjects = [
  {
    id: 101,
    title: 'AI Business Operations Dashboard',
    slug: 'ai-business-operations-dashboard',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'AI-powered dashboard that consolidates operational metrics into a centralized reporting system.',
    technologies: ['n8n', 'Google Gemini', 'Google Sheets'],
    workflowImage:
      '/screenshots/n8n/archive/ai-business-operations-dashboard/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-business-operations-dashboard/workflow.json',
    nodeCount: 12,
    aiModel: 'Google Gemini',
    integrations: 3,
    automationType: 'Business Dashboard',
    challenge:
      'Business metrics were scattered across multiple systems, making reporting slow and inconsistent.',
    solution:
      'Built an AI workflow that aggregates operational data and generates summarized business insights.',
    workflowSummary: [
      'Collect operational metrics',
      'Process data with AI',
      'Generate business summary',
      'Store dashboard data',
    ],
    businessOutcome: [
      'Centralized reporting',
      'Reduced manual reporting',
      'Improved operational visibility',
    ],
  },

  {
    id: 102,
    title: 'AI Customer Feedback Analyzer',
    slug: 'ai-customer-feedback-analyzer',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Analyzes customer feedback using AI to identify sentiment, trends, and recurring issues.',
    technologies: ['n8n', 'Google Gemini', 'Google Sheets'],
    workflowImage:
      '/screenshots/n8n/archive/ai-customer-feedback-analyzer/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-customer-feedback-analyzer/workflow.json',
    nodeCount: 11,
    aiModel: 'Google Gemini',
    integrations: 3,
    automationType: 'Sentiment Analysis',
    challenge:
      'Large volumes of customer feedback were difficult to review manually.',
    solution:
      'Created an AI workflow that classifies and summarizes customer feedback automatically.',
    workflowSummary: [
      'Receive customer feedback',
      'Analyze with AI',
      'Categorize sentiment',
      'Generate summary',
    ],
    businessOutcome: [
      'Faster feedback analysis',
      'Improved customer insights',
      'Reduced manual review',
    ],
  },

  {
    id: 103,
    title: 'AI Customer Review Monitoring',
    slug: 'ai-customer-review-monitoring',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Monitors online customer reviews and detects important trends using AI.',
    technologies: ['n8n', 'Google Gemini', 'Google Sheets'],
    workflowImage:
      '/screenshots/n8n/archive/ai-customer-review-monitoring/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-customer-review-monitoring/workflow.json',
    nodeCount: 10,
    aiModel: 'Google Gemini',
    integrations: 3,
    automationType: 'Review Monitoring',
    challenge:
      'Tracking customer reviews across platforms required constant manual effort.',
    solution:
      'Automated review collection, sentiment analysis, and reporting.',
    workflowSummary: [
      'Collect reviews',
      'Analyze sentiment',
      'Generate AI summary',
      'Save results',
    ],
    businessOutcome: [
      'Improved brand monitoring',
      'Reduced manual effort',
      'Faster issue detection',
    ],
  },

  {
    id: 104,
    title: 'AI Customer Support Agent',
    slug: 'ai-customer-support-agent',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'AI-powered virtual support assistant capable of handling common customer inquiries.',
    technologies: ['n8n', 'Google Gemini', 'Webhook'],
    workflowImage:
      '/screenshots/n8n/archive/ai-customer-support-agent/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-customer-support-agent/workflow.json',
    nodeCount: 15,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'AI Agent',
    challenge:
      'Support teams spent significant time answering repetitive customer questions.',
    solution:
      'Built an AI agent capable of answering common support inquiries automatically.',
    workflowSummary: [
      'Receive customer inquiry',
      'Process with AI',
      'Generate response',
      'Deliver reply',
    ],
    businessOutcome: [
      'Reduced response time',
      'Improved customer satisfaction',
      'Lower support workload',
    ],
  },

  {
    id: 105,
    title: 'AI Customer Support Escalation System',
    slug: 'ai-customer-support-escalation-system',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Automatically escalates high-priority support requests using AI classification.',
    technologies: ['n8n', 'Google Gemini', 'Slack'],
    workflowImage:
      '/screenshots/n8n/archive/ai-customer-support-escalation-system/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-customer-support-escalation-system/workflow.json',
    nodeCount: 13,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Support Automation',
    challenge:
      'Critical customer issues were not always identified quickly.',
    solution:
      'Implemented AI classification and automatic escalation to support teams.',
    workflowSummary: [
      'Receive ticket',
      'Analyze urgency',
      'Escalate critical cases',
      'Notify support team',
    ],
    businessOutcome: [
      'Faster response to urgent issues',
      'Improved SLA compliance',
      'Reduced manual triage',
    ],
  },
    {
    id: 106,
    title: 'AI Email Triage & Smart Reply',
    slug: 'ai-email-triage-smart-reply',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Automatically classifies incoming emails, prioritizes requests, and generates AI-powered draft replies.',
    technologies: ['n8n', 'Google Gemini', 'Gmail'],
    workflowImage:
      '/screenshots/n8n/archive/ai-email-triage-smart-reply/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-email-triage-smart-reply/workflow.json',
    nodeCount: 14,
    aiModel: 'Google Gemini',
    integrations: 3,
    automationType: 'Email Automation',
    challenge:
      'Support teams spent too much time manually sorting and replying to emails.',
    solution:
      'Built an AI workflow that classifies emails and generates contextual reply drafts.',
    workflowSummary: [
      'Receive email',
      'Classify using AI',
      'Generate reply draft',
      'Send notification',
    ],
    businessOutcome: [
      'Reduced email processing time',
      'Improved response consistency',
      'Higher team productivity',
    ],
  },

  {
    id: 107,
    title: 'AI Executive Assistant',
    slug: 'ai-executive-assistant',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'AI assistant that helps organize information, summarize content, and automate routine executive tasks.',
    technologies: ['n8n', 'Google Gemini', 'Google Workspace'],
    workflowImage:
      '/screenshots/n8n/archive/ai-executive-assistant/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-executive-assistant/workflow.json',
    nodeCount: 16,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'AI Assistant',
    challenge:
      'Executives spend significant time on repetitive administrative tasks.',
    solution:
      'Created an AI assistant to automate summaries, reminders, and information retrieval.',
    workflowSummary: [
      'Collect requests',
      'Analyze with AI',
      'Generate output',
      'Deliver response',
    ],
    businessOutcome: [
      'Saved executive time',
      'Improved productivity',
      'Reduced manual administration',
    ],
  },

  {
    id: 108,
    title: 'AI Facebook Messenger Chatbot',
    slug: 'ai-facebook-messenger-chatbot',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'AI chatbot that automates customer conversations through Facebook Messenger.',
    technologies: ['n8n', 'Google Gemini', 'Facebook Messenger'],
    workflowImage:
      '/screenshots/n8n/archive/ai-facebook-messenger-chatbot/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-facebook-messenger-chatbot/workflow.json',
    nodeCount: 15,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Chatbot',
    challenge:
      'Businesses struggled to respond quickly to Messenger inquiries.',
    solution:
      'Developed an AI chatbot capable of answering frequently asked questions automatically.',
    workflowSummary: [
      'Receive Messenger message',
      'Analyze intent',
      'Generate AI response',
      'Reply to customer',
    ],
    businessOutcome: [
      '24/7 automated support',
      'Improved response times',
      'Reduced workload',
    ],
  },

  {
    id: 109,
    title: 'AI Lead Generation Chatbot',
    slug: 'ai-lead-generation-chatbot',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Conversational AI chatbot that captures leads and qualifies prospects automatically.',
    technologies: ['n8n', 'Google Gemini', 'Webhook'],
    workflowImage:
      '/screenshots/n8n/archive/ai-lead-generation-chatbot/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-lead-generation-chatbot/workflow.json',
    nodeCount: 14,
    aiModel: 'Google Gemini',
    integrations: 3,
    automationType: 'Lead Generation',
    challenge:
      'Potential leads were lost because there was no automated qualification process.',
    solution:
      'Built an AI chatbot that collects information and qualifies leads automatically.',
    workflowSummary: [
      'Start conversation',
      'Collect lead information',
      'Qualify using AI',
      'Send qualified lead',
    ],
    businessOutcome: [
      'Captured more leads',
      'Improved lead quality',
      'Reduced manual qualification',
    ],
  },

  {
    id: 110,
    title: 'AI Lead Qualification System',
    slug: 'ai-lead-qualification-system',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'AI workflow that scores and qualifies incoming leads before sending them to sales.',
    technologies: ['n8n', 'Google Gemini', 'HubSpot'],
    workflowImage:
      '/screenshots/n8n/archive/ai-lead-qualification-system/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-lead-qualification-system/workflow.json',
    nodeCount: 13,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Lead Qualification',
    challenge:
      'Sales teams wasted time contacting low-quality leads.',
    solution:
      'Implemented AI lead scoring and automatic routing of qualified prospects.',
    workflowSummary: [
      'Receive lead',
      'Analyze with AI',
      'Score lead',
      'Route to CRM',
    ],
    businessOutcome: [
      'Improved sales efficiency',
      'Higher conversion rate',
      'Reduced manual screening',
    ],
  },
    {
    id: 111,
    title: 'AI Meeting Scheduler',
    slug: 'ai-meeting-scheduler',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Automates meeting scheduling by qualifying requests, checking availability, and coordinating appointments.',
    technologies: ['n8n', 'Google Calendar', 'Google Gemini'],
    workflowImage:
      '/screenshots/n8n/archive/ai-meeting-scheduler/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-meeting-scheduler/workflow.json',
    nodeCount: 12,
    aiModel: 'Google Gemini',
    integrations: 3,
    automationType: 'Scheduling Automation',
    challenge:
      'Manual scheduling caused delays and unnecessary back-and-forth communication.',
    solution:
      'Automated appointment qualification, scheduling, and confirmation notifications.',
    workflowSummary: [
      'Receive meeting request',
      'Check availability',
      'Schedule meeting',
      'Send confirmation',
    ],
    businessOutcome: [
      'Reduced scheduling time',
      'Improved booking accuracy',
      'Better customer experience',
    ],
  },

  {
    id: 112,
    title: 'AI Proposal Management System',
    slug: 'ai-proposal-management-system',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Automates proposal generation, approval workflows, and client delivery using AI.',
    technologies: ['n8n', 'Google Docs', 'Google Gemini'],
    workflowImage:
      '/screenshots/n8n/archive/ai-proposal-management-system/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-proposal-management-system/workflow.json',
    nodeCount: 14,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Document Automation',
    challenge:
      'Creating and managing proposals manually was repetitive and time-consuming.',
    solution:
      'Built an AI workflow that generates proposals and automates approval processes.',
    workflowSummary: [
      'Collect client data',
      'Generate proposal',
      'Review document',
      'Send to client',
    ],
    businessOutcome: [
      'Faster proposal turnaround',
      'Reduced manual document creation',
      'Improved consistency',
    ],
  },

  {
    id: 113,
    title: 'AI Research Assistant',
    slug: 'ai-research-assistant',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'AI assistant that gathers, summarizes, and organizes research from multiple sources.',
    technologies: ['n8n', 'Google Gemini', 'HTTP Request'],
    workflowImage:
      '/screenshots/n8n/archive/ai-research-assistant/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-research-assistant/workflow.json',
    nodeCount: 15,
    aiModel: 'Google Gemini',
    integrations: 3,
    automationType: 'Research Automation',
    challenge:
      'Research required significant manual effort across multiple information sources.',
    solution:
      'Created an AI workflow that summarizes research into concise reports.',
    workflowSummary: [
      'Collect sources',
      'Analyze content',
      'Generate summary',
      'Store report',
    ],
    businessOutcome: [
      'Saved research time',
      'Improved information quality',
      'Faster decision making',
    ],
  },

  {
    id: 114,
    title: 'AI Resume Optimizer & ATS',
    slug: 'ai-resume-optimizer-ats',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Optimizes resumes for Applicant Tracking Systems (ATS) using AI recommendations.',
    technologies: ['n8n', 'Google Gemini', 'PDF'],
    workflowImage:
      '/screenshots/n8n/archive/ai-resume-optimizer-ats/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-resume-optimizer-ats/workflow.json',
    nodeCount: 13,
    aiModel: 'Google Gemini',
    integrations: 3,
    automationType: 'Career Automation',
    challenge:
      'Many resumes failed ATS screening due to formatting and keyword issues.',
    solution:
      'Built an AI workflow that analyzes resumes and recommends ATS improvements.',
    workflowSummary: [
      'Upload resume',
      'Analyze with AI',
      'Suggest improvements',
      'Generate optimized version',
    ],
    businessOutcome: [
      'Improved ATS compatibility',
      'Higher interview potential',
      'Professional resume optimization',
    ],
  },

  {
    id: 115,
    title: 'AI Social Media Content Approval',
    slug: 'ai-social-media-content-approval',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Automates content review and approval workflows before social media publishing.',
    technologies: ['n8n', 'Google Gemini', 'Slack'],
    workflowImage:
      '/screenshots/n8n/archive/ai-social-media-content-approval/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-social-media-content-approval/workflow.json',
    nodeCount: 12,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Content Automation',
    challenge:
      'Marketing teams manually reviewed every social media post before publishing.',
    solution:
      'Built an AI workflow that reviews content and routes approvals automatically.',
    workflowSummary: [
      'Receive content',
      'Review with AI',
      'Request approval',
      'Publish after approval',
    ],
    businessOutcome: [
      'Faster approvals',
      'Improved content quality',
      'Reduced manual reviews',
    ],
  },
    {
    id: 116,
    title: 'AI Social Media Content Approval System',
    slug: 'ai-social-media-content-approval-system',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'AI-powered workflow that reviews, classifies, and approves social media content before publishing.',
    technologies: ['n8n', 'Google Gemini', 'Slack'],
    workflowImage:
      '/screenshots/n8n/archive/ai-social-media-content-approval-system/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-social-media-content-approval-system/workflow.json',
    nodeCount: 13,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Content Automation',
    challenge:
      'Content approval was slow due to manual review and multiple stakeholders.',
    solution:
      'Developed an AI-powered approval workflow that automates content review and notifications.',
    workflowSummary: [
      'Receive content',
      'Analyze with AI',
      'Route for approval',
      'Publish after approval',
    ],
    businessOutcome: [
      'Faster approval process',
      'Improved content consistency',
      'Reduced manual coordination',
    ],
  },

  {
    id: 117,
    title: 'AI Support Ticket Triage',
    slug: 'ai-support-ticket-triage',
    platform: 'n8n',
    category: 'AI Automation',
    featured: false,
    description:
      'Automatically categorizes, prioritizes, and routes support tickets using AI.',
    technologies: ['n8n', 'Google Gemini', 'Slack'],
    workflowImage:
      '/screenshots/n8n/archive/ai-support-ticket-triage/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/ai-support-ticket-triage/workflow.json',
    nodeCount: 14,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Support Automation',
    challenge:
      'Support agents manually triaged every incoming ticket, causing delays.',
    solution:
      'Implemented AI ticket classification with automatic routing to the correct support queue.',
    workflowSummary: [
      'Receive support ticket',
      'Classify using AI',
      'Assign priority',
      'Route to appropriate team',
    ],
    businessOutcome: [
      'Reduced ticket handling time',
      'Improved SLA compliance',
      'Higher support efficiency',
    ],
  },

  {
    id: 118,
    title: 'Bitcoin Price Alert System',
    slug: 'bitcoin-price-alert-system',
    platform: 'n8n',
    category: 'Automation',
    featured: false,
    description:
      'Monitors Bitcoin prices in real time and sends automated alerts when price thresholds are reached.',
    technologies: ['n8n', 'HTTP Request', 'Telegram'],
    workflowImage:
      '/screenshots/n8n/archive/bitcoin-price-alert-system/workflow.png',
    workflowJson:
      '/screenshots/n8n/archive/bitcoin-price-alert-system/workflow.json',
    nodeCount: 10,
    aiModel: 'N/A',
    integrations: 3,
    automationType: 'Monitoring Automation',
    challenge:
      'Crypto traders needed immediate notifications when Bitcoin reached target prices.',
    solution:
      'Built an automated monitoring workflow that checks market prices and sends instant alerts.',
    workflowSummary: [
      'Fetch Bitcoin price',
      'Compare against threshold',
      'Trigger alert',
      'Notify user',
    ],
    businessOutcome: [
      'Real-time price monitoring',
      'Faster trading decisions',
      'Eliminated manual checking',
    ],
  },
];


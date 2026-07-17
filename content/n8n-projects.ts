export type N8nProject = {
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

export const n8nProjects = [
  {
    id: 201,
    title: 'AI Client Onboarding System',
    slug: 'ai-client-onboarding-system',
    platform: 'n8n',
    category: 'AI Automation',
    featured: true,
    description: 'Automates client intake, document collection, and team handoff with AI-powered workflow orchestration.',
    technologies: ['n8n', 'OpenAI', 'Google Drive', 'Slack'],
    workflowImage: '/screenshots/n8n/featured/ai-client-onboarding-system/workflow.png',
    workflowJson: '/screenshots/n8n/featured/ai-client-onboarding-system/workflow.json',
    video: '/screenshots/n8n/featured/ai-client-onboarding-system/demo.mp4',
    nodeCount: 14,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Client Onboarding',
    challenge: 'New-client onboarding involved repetitive manual follow-up, scattered documents, and inconsistent internal handoffs.',
    solution: 'Built an n8n workflow that captures client details, uses AI to organize intake information, creates the required folders, and alerts the delivery team.',
    workflowSummary: [
      'Receive a completed client intake form',
      'Use AI to summarize and classify client requirements',
      'Create and organize the client workspace',
      'Send onboarding instructions and document requests',
      'Notify the delivery team with a structured handoff',
    ],
    businessOutcome: ['Reduced manual onboarding tasks', 'Created consistent client handoffs', 'Accelerated time to project kickoff'],
  },
  {
    id: 202,
    title: 'AI Customer Support Operations Center',
    slug: 'ai-customer-support-operations-center',
    platform: 'n8n',
    category: 'AI Automation',
    featured: true,
    description: 'Centralizes support requests, prioritizes issues with AI, and coordinates faster responses across support channels.',
    technologies: ['n8n', 'OpenAI', 'Slack', 'Google Sheets'],
    workflowImage: '/screenshots/n8n/featured/ai-customer-support-operations-center/workflow.png',
    workflowJson: '/screenshots/n8n/featured/ai-customer-support-operations-center/workflow.json',
    video: '/screenshots/n8n/featured/ai-customer-support-operations-center/demo.mp4',
    nodeCount: 15,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Support Operations',
    challenge: 'Support messages arrived through multiple channels, making it difficult to prioritize urgent issues and maintain response consistency.',
    solution: 'Built an n8n operations center that consolidates requests, uses AI to classify urgency and sentiment, and routes actionable tickets to the right team.',
    workflowSummary: [
      'Collect support requests from connected channels',
      'Classify issue type, urgency, and sentiment with AI',
      'Create a centralized support record',
      'Route high-priority tickets to the appropriate team',
      'Send status updates and track resolution activity',
    ],
    businessOutcome: ['Improved ticket prioritization', 'Reduced response coordination time', 'Increased support visibility'],
  },
  {
    id: 203,
    title: 'AI Email Classifier & Slack Ticket Router',
    slug: 'ai-email-classifier-slack-router',
    platform: 'n8n',
    category: 'AI Automation',
    featured: true,
    description: 'Reads inbound email, identifies intent and priority with AI, and routes each request to the correct Slack channel.',
    technologies: ['n8n', 'OpenAI', 'Gmail', 'Slack'],
    workflowImage: '/screenshots/n8n/featured/ai-email-classifier-slack-router/workflow.png',
    workflowJson: '/screenshots/n8n/featured/ai-email-classifier-slack-router/workflow.json',
    video: '/screenshots/n8n/featured/ai-email-classifier-slack-router/demo.mp4',
    nodeCount: 13,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Email Routing',
    challenge: 'Teams spent too much time manually reading, categorizing, and forwarding inbox requests to the right owners.',
    solution: 'Built an n8n workflow that analyzes incoming email with AI, extracts the relevant details, and posts a structured ticket to the correct Slack channel.',
    workflowSummary: [
      'Monitor the shared inbox for new messages',
      'Extract sender, subject, and message content',
      'Classify request intent and urgency with AI',
      'Format a structured ticket with key context',
      'Route the ticket to the matching Slack channel',
    ],
    businessOutcome: ['Reduced inbox triage time', 'Improved request routing accuracy', 'Enabled faster team response'],
  },
  {
    id: 204,
    title: 'AI Invoice & Receipt Processor',
    slug: 'ai-invoice-receipt-processor',
    platform: 'n8n',
    category: 'AI Automation',
    featured: true,
    description: 'Extracts invoice and receipt data with AI, validates key fields, and sends clean records to finance systems.',
    technologies: ['n8n', 'OpenAI', 'Google Drive', 'Google Sheets'],
    workflowImage: '/screenshots/n8n/featured/ai-invoice-receipt-processor/workflow.png',
    workflowJson: '/screenshots/n8n/featured/ai-invoice-receipt-processor/workflow.json',
    video: '/screenshots/n8n/featured/ai-invoice-receipt-processor/demo.mp4',
    nodeCount: 8,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Document Processing',
    challenge: 'Finance teams manually entered data from invoices and receipts, creating delays and a high risk of transcription errors.',
    solution: 'Built an n8n workflow that detects uploaded documents, extracts structured fields with AI, validates totals, and records the results automatically.',
    workflowSummary: [
      'Detect a newly uploaded invoice or receipt',
      'Extract vendor, amount, date, and line-item details',
      'Validate key financial fields and flag exceptions',
      'Store the original document in an organized archive',
      'Add the structured record to the finance tracker',
    ],
    businessOutcome: ['Reduced manual data entry', 'Improved record accuracy', 'Shortened document processing time'],
  },
  {
    id: 205,
    title: 'AI Daily News Briefing',
    slug: 'ai-daily-news-briefing',
    platform: 'n8n',
    category: 'AI Automation',
    featured: true,
    description: 'Collects relevant news each day, uses AI to produce a concise briefing, and delivers it to the team automatically.',
    technologies: ['n8n', 'OpenAI', 'RSS', 'Slack'],
    workflowImage: '/screenshots/n8n/featured/ai-daily-news-briefing/workflow.png',
    workflowJson: '/screenshots/n8n/featured/ai-daily-news-briefing/workflow.json',
    video: '/screenshots/n8n/featured/ai-daily-news-briefing/demo.mp4',
    nodeCount: 14,
    aiModel: 'Google Gemini',
    integrations: 4,
    automationType: 'Daily Briefing',
    challenge: 'Keeping up with industry news required manually reviewing numerous sources, while important updates were easy to miss.',
    solution: 'Built a scheduled n8n workflow that gathers articles from selected sources, uses AI to summarize the most relevant stories, and distributes a daily digest.',
    workflowSummary: [
      'Run on a scheduled daily trigger',
      'Collect new articles from selected news sources',
      'Filter and rank stories for relevance',
      'Generate concise AI summaries and key takeaways',
      'Deliver the daily briefing to Slack',
    ],
    businessOutcome: ['Saved daily research time', 'Delivered consistent industry updates', 'Improved access to relevant news'],
  },
] as const satisfies readonly N8nProject[];

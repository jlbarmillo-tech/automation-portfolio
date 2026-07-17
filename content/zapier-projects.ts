export type ZapierProject = {
  id: number;
  title: string;
  slug: string;
  platform: 'Zapier';
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

export const zapierProjects = [
  {
    id: 1,
    title: 'AI Support Ticket Triage',
    slug: 'zapier-ai-support-ticket-triage',
    platform: 'Zapier',
    category: 'AI Automation',
    featured: true,
    description:
      'Automatically classifies incoming support tickets using AI and routes them to the correct support queue.',
    technologies: [
      'Zapier',
      'OpenAI',
      'Gmail',
      'Slack',
    ],
    workflowImage:
      '/screenshots/zapier/ai-support-ticket-triage/workflow.png',
      workflowJson: '',
video: '',
githubUrl: '',

nodeCount: 5,
aiModel: 'OpenAI',
integrations: 4,
automationType: 'Business Automation',

challenge:
  'Businesses spend unnecessary time performing repetitive manual tasks across multiple cloud applications.',

solution:
  'Built a Zapier workflow that automates repetitive actions between connected applications, improving efficiency and reducing manual work.',

workflowSummary: [
  'Trigger starts the automation.',
  'Retrieve the required information.',
  'Process the incoming data.',
  'Execute the configured Zapier actions.',
  'Complete the workflow automatically.',
],

businessOutcome: [
  'Reduced repetitive manual work.',
  'Improved operational efficiency.',
  'Faster task completion.',
],
  },

  {
    id: 2,
    title: 'Booking Notification System',
    slug: 'zapier-booking-notification-system',
    platform: 'Zapier',
    category: 'Business Automation',
    featured: true,
    description:
      'Sends instant team notifications whenever a new booking is created.',
    technologies: [
      'Zapier',
      'Calendly',
      'Slack',
    ],
    workflowImage:
      '/screenshots/zapier/booking-notification-system/workflow.png',
      workflowJson: '',
video: '',
githubUrl: '',

nodeCount: 5,
aiModel: 'OpenAI',
integrations: 4,
automationType: 'Business Automation',

challenge:
  'Businesses spend unnecessary time performing repetitive manual tasks across multiple cloud applications.',

solution:
  'Built a Zapier workflow that automates repetitive actions between connected applications, improving efficiency and reducing manual work.',

workflowSummary: [
  'Trigger starts the automation.',
  'Retrieve the required information.',
  'Process the incoming data.',
  'Execute the configured Zapier actions.',
  'Complete the workflow automatically.',
],

businessOutcome: [
  'Reduced repetitive manual work.',
  'Improved operational efficiency.',
  'Faster task completion.',
],
  },

  {
    id: 3,
    title: 'Gmail Attachment Archiver',
    slug: 'zapier-gmail-attachment-archiver',
    platform: 'Zapier',
    category: 'Productivity',
    featured: true,
    description:
      'Automatically saves Gmail attachments into organized Google Drive folders.',
    technologies: [
      'Zapier',
      'Gmail',
      'Google Drive',
    ],
    workflowImage:
      '/screenshots/zapier/gmail-attachment-archiver/workflow.png',
      workflowJson: '',
video: '',
githubUrl: '',

nodeCount: 5,
aiModel: 'OpenAI',
integrations: 4,
automationType: 'Business Automation',

challenge:
  'Businesses spend unnecessary time performing repetitive manual tasks across multiple cloud applications.',

solution:
  'Built a Zapier workflow that automates repetitive actions between connected applications, improving efficiency and reducing manual work.',

workflowSummary: [
  'Trigger starts the automation.',
  'Retrieve the required information.',
  'Process the incoming data.',
  'Execute the configured Zapier actions.',
  'Complete the workflow automatically.',
],

businessOutcome: [
  'Reduced repetitive manual work.',
  'Improved operational efficiency.',
  'Faster task completion.',
],
  },

  {
    id: 4,
    title: 'Negative Feedback Escalator',
    slug: 'zapier-negative-feedback-escalator',
    platform: 'Zapier',
    category: 'Customer Support',
    featured: true,
    description:
      'Detects poor customer feedback and immediately alerts the support team.',
    technologies: [
      'Zapier',
      'Google Forms',
      'Slack',
    ],
    workflowImage:
      '/screenshots/zapier/negative-feedback-escalator/workflow.png',
      workflowJson: '',
video: '',
githubUrl: '',

nodeCount: 5,
aiModel: 'OpenAI',
integrations: 4,
automationType: 'Business Automation',

challenge:
  'Businesses spend unnecessary time performing repetitive manual tasks across multiple cloud applications.',

solution:
  'Built a Zapier workflow that automates repetitive actions between connected applications, improving efficiency and reducing manual work.',

workflowSummary: [
  'Trigger starts the automation.',
  'Retrieve the required information.',
  'Process the incoming data.',
  'Execute the configured Zapier actions.',
  'Complete the workflow automatically.',
],

businessOutcome: [
  'Reduced repetitive manual work.',
  'Improved operational efficiency.',
  'Faster task completion.',
],
  },
] as const satisfies readonly ZapierProject[];
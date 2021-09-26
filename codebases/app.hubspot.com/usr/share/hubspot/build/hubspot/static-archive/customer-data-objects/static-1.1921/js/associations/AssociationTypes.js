'use es6';

import { ADVISOR_TO_COMPANY, BOARD_MEMBER_TO_COMPANY, CONTRACTOR_TO_COMPANY, MANAGER_TO_COMPANY, OWNER_TO_COMPANY, PARTNER_TO_COMPANY, RESELLER_TO_COMPANY } from 'customer-data-objects/contact/ContactRoleTypes';
import { COMPANY_TO_ADVISOR, COMPANY_TO_BOARD_MEMBER, COMPANY_TO_CONTRACTOR, COMPANY_TO_MANAGER, COMPANY_TO_OWNER, COMPANY_TO_PARTNER, COMPANY_TO_RESELLER } from 'customer-data-objects/company/CompanyRoleTypes';
export var DEAL_TO_LINE_ITEM = 'DEAL_TO_LINE_ITEM';
export var TICKET_TO_CONTACT = 'TICKET_TO_CONTACT';
export var TICKET_TO_COMPANY = 'TICKET_TO_COMPANY';
export var TICKET_TO_FEEDBACK_SUBMISSION = 'TICKET_TO_FEEDBACK_SUBMISSION';
export var CONTACT_TO_TICKET = 'CONTACT_TO_TICKET';
export var COMPANY_TO_TICKET = 'COMPANY_TO_TICKET';
export var CONTACT_TO_DEAL = 'CONTACT_TO_DEAL';
export var COMPANY_TO_DEAL = 'COMPANY_TO_DEAL';
export var DEAL_TO_COMPANY = 'DEAL_TO_COMPANY';
export var DEAL_TO_CONTACT = 'DEAL_TO_CONTACT';
export var TICKET_TO_DEAL = 'TICKET_TO_DEAL';
export var DEAL_TO_QUOTE = 'DEAL_TO_QUOTE';
export var DEAL_TO_TICKET = 'DEAL_TO_TICKET';
export var COMPANY_TO_CONTACT = 'COMPANY_TO_CONTACT';
export var CONTACT_TO_COMPANY = 'CONTACT_TO_COMPANY';
export var CONTACT_TO_ENGAGEMENT = 'CONTACT_TO_ENGAGEMENT';
export var CONTACT_TO_FEEDBACK_SUBMISSION = 'CONTACT_TO_FEEDBACK_SUBMISSION';
export var ENGAGEMENT_TO_COMPANY = 'ENGAGEMENT_TO_COMPANY';
export var ENGAGEMENT_TO_CONTACT = 'ENGAGEMENT_TO_CONTACT';
export var ENGAGEMENT_TO_DEAL = 'ENGAGEMENT_TO_DEAL';
export var ENGAGEMENT_TO_TICKET = 'ENGAGEMENT_TO_TICKET';
export var FEEDBACK_SUBMISSION_TO_CONTACT = 'FEEDBACK_SUBMISSION_TO_CONTACT';
export var FEEDBACK_SUBMISSION_TO_TICKET = 'FEEDBACK_SUBMISSION_TO_TICKET';
export var CONVERSATION_TO_DEAL = 'CONVERSATION_TO_DEAL';
export var CONVERSATION_TO_TICKET = 'CONVERSATION_TO_TICKET';
export var CONTACT_TO_QUOTE = 'CONTACT_TO_QUOTE';
export var QUOTE_TO_CONTACT = 'QUOTE_TO_CONTACT';
export var QUOTE_TO_COMPANY = 'QUOTE_TO_COMPANY';
export var COMPANY_TO_QUOTE = 'COMPANY_TO_QUOTE';
export var TASK_TO_CONTACT = 'TASK_TO_CONTACT';
export var TASK_TO_COMPANY = 'TASK_TO_COMPANY';
export var TASK_TO_DEAL = 'TASK_TO_DEAL';
export var TASK_TO_TICKET = 'TASK_TO_TICKET';
export var TASK_TO_QUOTE = 'TASK_TO_QUOTE';
export var TASK_TO_MARKETING_EVENT = 'TASK_TO_MARKETING_EVENT';
export var DEAL_TO_PRIMARY_COMPANY = 'DEAL_TO_PRIMARY_COMPANY';
export var PRIMARY_COMPANY_TO_DEAL = 'PRIMARY_COMPANY_TO_DEAL';
export var TICKET_TO_PRIMARY_COMPANY = 'TICKET_TO_PRIMARY_COMPANY';
export var PRIMARY_COMPANY_TO_TICKET = 'PRIMARY_COMPANY_TO_TICKET';
export { ADVISOR_TO_COMPANY, BOARD_MEMBER_TO_COMPANY, CONTRACTOR_TO_COMPANY, MANAGER_TO_COMPANY, OWNER_TO_COMPANY, PARTNER_TO_COMPANY, RESELLER_TO_COMPANY };
export { COMPANY_TO_ADVISOR, COMPANY_TO_BOARD_MEMBER, COMPANY_TO_CONTRACTOR, COMPANY_TO_MANAGER, COMPANY_TO_OWNER, COMPANY_TO_PARTNER, COMPANY_TO_RESELLER };
/* eslint-env commonjs */
// This temporary hack ensures module system compatibility.
// Read more at go/treeshaking

if (!!module && !!module.exports) {
  module.exports.default = module.exports;
}
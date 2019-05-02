import {Department} from './department';
import {IncidentType} from './incident-type';
import {SubAgency} from './subagency';

export class Incident
{
  incident_id:string;
  ticket_status:string;
  sys_id:string;
  notify_isp:string;
  ticket_ready_for_execution:string;
  send_email_receipt_to_reporter:string;
  do_you_want_to_select_additionalactions:string;
  sector:string;
  ui_workflow_status:string;
  urgency_rank:string;
  completed_enrich_count:string;
  set_status_to_resolved:string;
  send_email_to_reporter_with_explanation:string;
  send_email_update_to_reporter:string;
  notify_production:string;
  notify_domain_registrar:string;
  ticket_coa:string;
  indicator_count:string;
  report_to_flare:string;
  assign_to_tier:string;
  sys_updated_by:string;
  sys_created_on:string;
  sys_updated_on:string;
  sys_created_by:string;

  r_first_name:string;
  r_last_name:string;
  r_company_name:string;
  r_category:string;
  r_organization:string;
  r_description:string;
  r_status:string;
  r_telephone_number:string;

  department: Department;
  incident_type:IncidentType;
  sub_agency:SubAgency;
}

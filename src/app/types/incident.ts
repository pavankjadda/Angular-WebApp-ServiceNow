import { SysUser } from "./sys-user";

export class Incident {
  number: string;
  priority: string;
  state: string;
  impact: string;
  category: string;
  subcategory: string;
  severity: string;
  urgency: string;
  incident_state: string;
  work_notes: string;
  comments: string;
  short_description: string;
  reassignment_count: string;
  opened_at: string;
  resolved_at: string;
  closed_at: string;
  caller_id: SysUser;
  opened_by: SysUser;
  closed_by: SysUser;
  resolved_by: SysUser;

  sys_updated_by: string;
  sys_created_on: string;
  sys_updated_on: string;
  sys_created_by: string;
}

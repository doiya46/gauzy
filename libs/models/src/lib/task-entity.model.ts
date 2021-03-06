import { BaseEntityModel as IBaseEntityModel } from './base-entity.model';
import { OrganizationProjects, Tag } from '..';

export interface Task extends IBaseEntityModel {
	title: string;
	description?: string;
	status?: string;
	dueDate?: Date;
	estimate?: number;
	project?: OrganizationProjects;
	projectId?: string;
	tags?: Tag[];
}

export interface GetTaskOptions {
	projectId?: string;
}

export interface ITaskCreateInput extends Task {}

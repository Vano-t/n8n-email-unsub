import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { EmailCustomV1 } from './EmailCustom/EmailCustom.node';

export class EmailCustom extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Send Email',
			name: 'emailCustom',
			icon: 'fa:envelope',
			group: ['output'],
			defaultVersion: 1,
			description: 'Sends an email using SMTP2 protocol',
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new EmailCustomV1(baseDescription)
		};

		super(nodeVersions, baseDescription);
	}
}
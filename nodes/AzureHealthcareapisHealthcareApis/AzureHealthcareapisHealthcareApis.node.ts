import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureHealthcareapisHealthcareApis implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Healthcareapis Healthcare Apis',
                name: 'N8nDevAzureHealthcareapisHealthcareApis',
                icon: { light: 'file:./azure-healthcareapis-healthcare-apis.png', dark: 'file:./azure-healthcareapis-healthcare-apis.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Manage Azure HealthcareApis services via API.',
                defaults: { name: 'Azure Healthcareapis Healthcare Apis' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureHealthcareapisHealthcareApisApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}

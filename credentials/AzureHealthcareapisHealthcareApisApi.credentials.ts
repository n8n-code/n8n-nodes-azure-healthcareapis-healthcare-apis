import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureHealthcareapisHealthcareApisApi implements ICredentialType {
        name = 'N8nDevAzureHealthcareapisHealthcareApisApi';

        displayName = 'Azure Healthcareapis Healthcare Apis API';

        icon: Icon = { light: 'file:../nodes/AzureHealthcareapisHealthcareApis/azure-healthcareapis-healthcare-apis.png', dark: 'file:../nodes/AzureHealthcareapisHealthcareApis/azure-healthcareapis-healthcare-apis.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Healthcareapis Healthcare Apis API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}

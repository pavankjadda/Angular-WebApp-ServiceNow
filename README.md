![Build Project](https://github.com/pavankjadda/Angular-WebApp-ServiceNow/workflows/Build%20Project/badge.svg?branch=master)

# Angular web app with ServiceNow backend

## What's this?
Angular 10+ web application developed to replace Service Portal on ServiceNow. It offers several benefits when compared native Service Portal
1. Angular is widely used framework and offers responsive single page applications (SPA)
2. No need to wait for ServiceNow to update their instance to Latest Angular version or Bootstrap version 
2. No need to hack ServicePortal widgets and spend hours on fixing collisions between ServiceNow libraries and your custom CSS and JS libraries.
3. Use industry standard OAuth2 protocol for securing the web app 
4. Use ServiceNow as REST API backend


### Technologies Used
1. Angular 10+
2. Bootstrap 4.x
3. ServiceNow Paris+
4. OAuth2.0

## Configure ServiceNow backend
1. Get ServiceNow [developer instance](https://developer.servicenow.com/app.do#!/dashboard) if you do not have one
2. If the OAuth plugin not activate, follow the instructions from [ServiceNow docs](https://docs.servicenow.com/bundle/paris-application-development/page/integrate/outbound-rest/task/t_OAuthDemoCreateProvider.html) to activate the OAuth2.0 plugin or use below steps
    * Search for `plugins` from application menus and select it. It will show all the applications
    * Search for `com.snc.platform.security.oauth` and you should see **OAuth 2.0** plugin and click on **Install**
3. Once activated, search for `oauth` in application menus and select `Application Registries` and Click on `New` button to create new OAuth client
4. Select **Create an OAuth API endpoint for external clients** from the list and fill the client details. Enter name of the registry as **Angular-Test** and Redirect URL as **http://localhost:4200** and click on **Create** button
5. Make sure the user has REST API access and assigned `snc_platform_rest_api_access` and `admin` role. If not refer to ServiceNow user guide and add role to the user.
6. Test the created OAuth client with Postman or curl. 
```
$ curl -d "grant_type=password&client_id=<Client Id>&client_secret=<Client secret>&username=<UserId>&password=<Password>"   -H "Content-Type: application/x-www-form-urlencoded" https://devxxxxx.service-now.com/oauth_token.do
```
7. If you are using Postman, select **No Auth** Authorization and body type as **x-www-form-urlencoded**. Enter following key value pairs in body
```
 grant_type=password
 client_id=<Client Id>
 client_secret=<Client secret>
 username=<Username>
 password=<Password>
```
8. Response from step 6 or 7 should be the following. Use **access_token** in subsequents steps to access data
```json
{
    "access_token": "z5Ewzj6KRSWXBnljlYRpn-R_5gw3JSQ8y1h71cuCIyVy546I7jwg5k9M2E0ctc2ssJC9S2ER6ZWGXs474Ext4Q",
    "refresh_token": "Hek_vW3Q3jA2qM5nurYFCEruWPI5EX6zriI8a92v4FafFOsD5el17fWkrz48ZLlw3kpjZSRJmiK9uTyjPL6rKg",
    "scope": "useraccount",
    "token_type": "Bearer",
    "expires_in": 1799
}
```
9. Go to ServiceNow instance and search for **Scripted Rest APIs** and select it. Click on **New** and enter **Name** and other details then submit it
10. Select created  **Scripted Rest API** and create new **Resource** under resources and enter following info
    
    **HTTP method**: GET 
    
    **Name**: GetUserDetails 
    
    **Script:**
    
    ```
    (function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) 
     {
    	var userSysId=gs.getUserID();
    	var gr=new GlideRecord('sys_user_has_role');
    	gr.addQuery('user',userSysId);
    	gr.query();
    	var roles=[];
    	while(gr.next())
    		{
    			roles.push({name:gr.role.name,sysID:gr.role,description:gr.role.description});
    		}
    
    	var body=[];
    	body.push({username:gs.getUserName(),displayName:gs.getUserDisplayName(),sysId:gs.getUserID(),roles:roles});
        response.setBody(body);
    
    })(request, response);
    ```
11. This scripted api will be used in Angular App to access user information and roles. Mkae note of **Base API** path that looks like `/api/19668/angulartest`, this will be used in next steps
    



## How to  Run Angular App?
1. Clone [this repository](https://github.com/pavankjadda/Angular-WebApp-ServiceNow) into your local machine and open in WebStorm or VS Code
2. Open the file **src/app/app.constants.ts** and change details based on your OAuth client and Scripted REST API detail
```typescript
export const SERVER_API_URL = 'https://dev81909.service-now.com/';
export const USER_INFO_URL = 'api/x_19668_halo/user_info';

export const OAUTH2_CLIENT_ID= '3c76622bc581b30082098914f97ee08e';
export const OAUTH2_CLIENT_SECRET= 'password12345';
export const OAUTH2_ACCESS_TOKEN_URI = SERVER_API_URL + 'oauth_token.do';

export const INCIDENT_API_URL = 'api/now/table/x_19668_halo_incident';

```
3. Download the [Allow-Control-Allow-Origin extension](https://chrome.google.com/webstore/detail/cross-domain-cors/mjhpgnbimicffchbodmgfnemoghjakai/related?hl=en)
 to prevent Allow-Control-Allow-Origin errors
4. Start the Angular web app with the following command
```
$ ng serve --watch
```
5. Go to [http://localhost:4200](http://localhost:4200) and login with your credentials
6. Click on **Incidents** menu to see list of options for incidents
7. Select **Incidents list** to see list of incidents and click on **Edit** or **View** to see incident data
8. Add new components and modules based on your requiremnts
9. By default Angular app runs on **http** protocol and data is not encrypted. Use [Edge Encryption](https://docs.servicenow.com/bundle/london-servicenow-platform/page/administer/edge-encryption/concept/c_EdgeEncryptionOverview.html) to encrypt data between ServiceNow instance and Angular WebApp

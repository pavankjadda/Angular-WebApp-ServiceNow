# Angular 7 web app with ServiceNow backend

## What's this?
Angular 7 web application developed to replace Service Portal on ServiceNow. It offers several benefits when compared native Service Portal
1. Angular is widely used framework and offers responsive single page applications (SPA)
2. No need to wait for ServiceNow to update their instance to Latest Angular version or Bootstrap version 
2. No need to hack ServicePortal widgets and spend hours on fixing collisions between ServiceNow libraries and your custom CSS and JS libraries.
3. Use industry standard OAuth2 protocol for securing the web app 
4. Use ServiceNow as REST API backend


## Technologies Used
1. Angular 7.x
2. Bootstrap 4.x
3. ServiceNow Madrid
4. OAuth2.0
5. Others 

### Configure ServiceNow backend
1. Get ServiceNow [developer instance](https://developer.servicenow.com/app.do#!/dashboard?v=madrid) of you do not have one
2. Follow the instructions from [ServiceNow docs](https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/security/task/t_SettingUpOAuth.html) to activate the OAuth2.0 plugin
3. Once activated, search for `oauth` and select `Application Registries` to create new OAuth client
4. Select **Create an OAuth API endpoint for external clients** and fill the client details. See [this](https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/security/task/t_CreateEndpointforExternalClients.html#t_CreateEndpointforExternalClients) for more information
5. Make sure the user has REST API access and assigned `snc_platform_rest_api_access` role
6. Test created OAuth client with Postman or curl. 
```
curl -d "grant_type=password&client_id=<Client Id>&client_secret=<Client secret>&username=<UserId>&password=<Password>"   -H "Content-Type: application/x-www-form-urlencoded" https://devxxxxx.service-now.com/oauth_token.do
```
7. If you are using Postman, select **No Auth** Authorization and body type as **x-www-form-urlencoded**. Enter following key value pairs in body
```
 grant_type=password
 client_id=<Client Id>
 client_secret=<Client secret>
 username=<Username>
 password=<Password>
```


#### How to  Run Angular App?
##### Development server

Run `ng serve --watch` to run this on local machine. Navigate to `http://localhost:4200/`

##### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

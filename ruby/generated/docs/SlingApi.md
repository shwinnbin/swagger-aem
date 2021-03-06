# SwaggerAemClient::SlingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_agent**](SlingApi.md#delete_agent) | **DELETE** /etc/replication/agents.{runmode}/{name} | 
[**delete_node**](SlingApi.md#delete_node) | **DELETE** /{path}/{name} | 
[**get_agent**](SlingApi.md#get_agent) | **GET** /etc/replication/agents.{runmode}/{name} | 
[**get_agents**](SlingApi.md#get_agents) | **GET** /etc/replication/agents.{runmode}.-1.json | 
[**get_authorizable_keystore**](SlingApi.md#get_authorizable_keystore) | **GET** /{intermediatePath}/{authorizableId}.ks.json | 
[**get_keystore**](SlingApi.md#get_keystore) | **GET** /{intermediatePath}/{authorizableId}/keystore/store.p12 | 
[**get_node**](SlingApi.md#get_node) | **GET** /{path}/{name} | 
[**get_package**](SlingApi.md#get_package) | **GET** /etc/packages/{group}/{name}-{version}.zip | 
[**get_package_filter**](SlingApi.md#get_package_filter) | **GET** /etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json | 
[**get_query**](SlingApi.md#get_query) | **GET** /bin/querybuilder.json | 
[**get_truststore**](SlingApi.md#get_truststore) | **GET** /etc/truststore/truststore.p12 | 
[**get_truststore_informations**](SlingApi.md#get_truststore_informations) | **GET** /libs/granite/security/truststore.json | 
[**post_agent**](SlingApi.md#post_agent) | **POST** /etc/replication/agents.{runmode}/{name} | 
[**post_authorizable_keystore**](SlingApi.md#post_authorizable_keystore) | **POST** /{intermediatePath}/{authorizableId}.ks.html | 
[**post_authorizables**](SlingApi.md#post_authorizables) | **POST** /libs/granite/security/post/authorizables | 
[**post_config_adobe_granite_saml_authentication_handler**](SlingApi.md#post_config_adobe_granite_saml_authentication_handler) | **POST** /apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config | 
[**post_config_apache_felix_jetty_based_http_service**](SlingApi.md#post_config_apache_felix_jetty_based_http_service) | **POST** /apps/system/config/org.apache.felix.http | 
[**post_config_apache_sling_dav_ex_servlet**](SlingApi.md#post_config_apache_sling_dav_ex_servlet) | **POST** /apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet | 
[**post_config_apache_sling_get_servlet**](SlingApi.md#post_config_apache_sling_get_servlet) | **POST** /apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet | 
[**post_config_apache_sling_referrer_filter**](SlingApi.md#post_config_apache_sling_referrer_filter) | **POST** /apps/system/config/org.apache.sling.security.impl.ReferrerFilter | 
[**post_node**](SlingApi.md#post_node) | **POST** /{path}/{name} | 
[**post_node_rw**](SlingApi.md#post_node_rw) | **POST** /{path}/{name}.rw.html | 
[**post_path**](SlingApi.md#post_path) | **POST** /{path}/ | 
[**post_query**](SlingApi.md#post_query) | **POST** /bin/querybuilder.json | 
[**post_tree_activation**](SlingApi.md#post_tree_activation) | **POST** /etc/replication/treeactivation.html | 
[**post_truststore**](SlingApi.md#post_truststore) | **POST** /libs/granite/security/post/truststore | 
[**post_truststore_pkcs12**](SlingApi.md#post_truststore_pkcs12) | **POST** /etc/truststore | 


# **delete_agent**
> delete_agent(runmode, name)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

runmode = "runmode_example" # String | 

name = "name_example" # String | 


begin
  api_instance.delete_agent(runmode, name)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->delete_agent: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runmode** | **String**|  | 
 **name** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **delete_node**
> delete_node(path, name)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

path = "path_example" # String | 

name = "name_example" # String | 


begin
  api_instance.delete_node(path, name)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->delete_node: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 
 **name** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **get_agent**
> get_agent(runmode, name)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

runmode = "runmode_example" # String | 

name = "name_example" # String | 


begin
  api_instance.get_agent(runmode, name)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_agent: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runmode** | **String**|  | 
 **name** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **get_agents**
> String get_agents(runmode)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

runmode = "runmode_example" # String | 


begin
  result = api_instance.get_agents(runmode)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_agents: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runmode** | **String**|  | 

### Return type

**String**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **get_authorizable_keystore**
> KeystoreInformations get_authorizable_keystore(intermediate_path, authorizable_id)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

intermediate_path = "intermediate_path_example" # String | 

authorizable_id = "authorizable_id_example" # String | 


begin
  result = api_instance.get_authorizable_keystore(intermediate_path, authorizable_id)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_authorizable_keystore: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intermediate_path** | **String**|  | 
 **authorizable_id** | **String**|  | 

### Return type

[**KeystoreInformations**](KeystoreInformations.md)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **get_keystore**
> File get_keystore(intermediate_path, authorizable_id)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

intermediate_path = "intermediate_path_example" # String | 

authorizable_id = "authorizable_id_example" # String | 


begin
  result = api_instance.get_keystore(intermediate_path, authorizable_id)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_keystore: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intermediate_path** | **String**|  | 
 **authorizable_id** | **String**|  | 

### Return type

**File**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream



# **get_node**
> get_node(path, name)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

path = "path_example" # String | 

name = "name_example" # String | 


begin
  api_instance.get_node(path, name)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_node: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 
 **name** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **get_package**
> File get_package(group, name, version)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

group = "group_example" # String | 

name = "name_example" # String | 

version = "version_example" # String | 


begin
  result = api_instance.get_package(group, name, version)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_package: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**|  | 
 **name** | **String**|  | 
 **version** | **String**|  | 

### Return type

**File**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream



# **get_package_filter**
> String get_package_filter(group, name, version)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

group = "group_example" # String | 

name = "name_example" # String | 

version = "version_example" # String | 


begin
  result = api_instance.get_package_filter(group, name, version)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_package_filter: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**|  | 
 **name** | **String**|  | 
 **version** | **String**|  | 

### Return type

**String**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **get_query**
> String get_query(path, p_limit, _1_property, _1_property_value)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

path = "path_example" # String | 

p_limit = 3.4 # Float | 

_1_property = "_1_property_example" # String | 

_1_property_value = "_1_property_value_example" # String | 


begin
  result = api_instance.get_query(path, p_limit, _1_property, _1_property_value)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_query: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 
 **p_limit** | **Float**|  | 
 **_1_property** | **String**|  | 
 **_1_property_value** | **String**|  | 

### Return type

**String**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **get_truststore**
> File get_truststore



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

begin
  result = api_instance.get_truststore
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_truststore: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

**File**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream



# **get_truststore_informations**
> TruststoreInformations get_truststore_informations



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

begin
  result = api_instance.get_truststore_informations
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->get_truststore_informations: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TruststoreInformations**](TruststoreInformations.md)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **post_agent**
> post_agent(runmode, name, opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

runmode = "runmode_example" # String | 

name = "name_example" # String | 

opts = { 
  jcrcontentcqdistribute: true, # BOOLEAN | 
  jcrcontentcqdistribute_type_hint: "jcrcontentcqdistribute_type_hint_example", # String | 
  jcrcontentcqname: "jcrcontentcqname_example", # String | 
  jcrcontentcqtemplate: "jcrcontentcqtemplate_example", # String | 
  jcrcontentenabled: true, # BOOLEAN | 
  jcrcontentjcrdescription: "jcrcontentjcrdescription_example", # String | 
  jcrcontentjcrlast_modified: "jcrcontentjcrlast_modified_example", # String | 
  jcrcontentjcrlast_modified_by: "jcrcontentjcrlast_modified_by_example", # String | 
  jcrcontentjcrmixin_types: "jcrcontentjcrmixin_types_example", # String | 
  jcrcontentjcrtitle: "jcrcontentjcrtitle_example", # String | 
  jcrcontentlog_level: "jcrcontentlog_level_example", # String | 
  jcrcontentno_status_update: true, # BOOLEAN | 
  jcrcontentno_versioning: true, # BOOLEAN | 
  jcrcontentprotocol_connect_timeout: 3.4, # Float | 
  jcrcontentprotocol_http_connection_closed: true, # BOOLEAN | 
  jcrcontentprotocol_http_expired: "jcrcontentprotocol_http_expired_example", # String | 
  jcrcontentprotocol_http_headers: ["jcrcontentprotocol_http_headers_example"], # Array<String> | 
  jcrcontentprotocol_http_headers_type_hint: "jcrcontentprotocol_http_headers_type_hint_example", # String | 
  jcrcontentprotocol_http_method: "jcrcontentprotocol_http_method_example", # String | 
  jcrcontentprotocol_https_relaxed: true, # BOOLEAN | 
  jcrcontentprotocol_interface: "jcrcontentprotocol_interface_example", # String | 
  jcrcontentprotocol_socket_timeout: 3.4, # Float | 
  jcrcontentprotocol_version: "jcrcontentprotocol_version_example", # String | 
  jcrcontentproxy_ntlm_domain: "jcrcontentproxy_ntlm_domain_example", # String | 
  jcrcontentproxy_ntlm_host: "jcrcontentproxy_ntlm_host_example", # String | 
  jcrcontentproxy_host: "jcrcontentproxy_host_example", # String | 
  jcrcontentproxy_password: "jcrcontentproxy_password_example", # String | 
  jcrcontentproxy_port: 3.4, # Float | 
  jcrcontentproxy_user: "jcrcontentproxy_user_example", # String | 
  jcrcontentqueue_batch_max_size: 3.4, # Float | 
  jcrcontentqueue_batch_mode: "jcrcontentqueue_batch_mode_example", # String | 
  jcrcontentqueue_batch_wait_time: 3.4, # Float | 
  jcrcontentretry_delay: "jcrcontentretry_delay_example", # String | 
  jcrcontentreverse_replication: true, # BOOLEAN | 
  jcrcontentserialization_type: "jcrcontentserialization_type_example", # String | 
  jcrcontentslingresource_type: "jcrcontentslingresource_type_example", # String | 
  jcrcontentssl: "jcrcontentssl_example", # String | 
  jcrcontenttransport_ntlm_domain: "jcrcontenttransport_ntlm_domain_example", # String | 
  jcrcontenttransport_ntlm_host: "jcrcontenttransport_ntlm_host_example", # String | 
  jcrcontenttransport_password: "jcrcontenttransport_password_example", # String | 
  jcrcontenttransport_uri: "jcrcontenttransport_uri_example", # String | 
  jcrcontenttransport_user: "jcrcontenttransport_user_example", # String | 
  jcrcontenttrigger_distribute: true, # BOOLEAN | 
  jcrcontenttrigger_modified: true, # BOOLEAN | 
  jcrcontenttrigger_on_off_time: true, # BOOLEAN | 
  jcrcontenttrigger_receive: true, # BOOLEAN | 
  jcrcontenttrigger_specific: true, # BOOLEAN | 
  jcrcontentuser_id: "jcrcontentuser_id_example", # String | 
  jcrprimary_type: "jcrprimary_type_example", # String | 
  operation: "operation_example" # String | 
}

begin
  api_instance.post_agent(runmode, name, opts)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_agent: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runmode** | **String**|  | 
 **name** | **String**|  | 
 **jcrcontentcqdistribute** | **BOOLEAN**|  | [optional] 
 **jcrcontentcqdistribute_type_hint** | **String**|  | [optional] 
 **jcrcontentcqname** | **String**|  | [optional] 
 **jcrcontentcqtemplate** | **String**|  | [optional] 
 **jcrcontentenabled** | **BOOLEAN**|  | [optional] 
 **jcrcontentjcrdescription** | **String**|  | [optional] 
 **jcrcontentjcrlast_modified** | **String**|  | [optional] 
 **jcrcontentjcrlast_modified_by** | **String**|  | [optional] 
 **jcrcontentjcrmixin_types** | **String**|  | [optional] 
 **jcrcontentjcrtitle** | **String**|  | [optional] 
 **jcrcontentlog_level** | **String**|  | [optional] 
 **jcrcontentno_status_update** | **BOOLEAN**|  | [optional] 
 **jcrcontentno_versioning** | **BOOLEAN**|  | [optional] 
 **jcrcontentprotocol_connect_timeout** | **Float**|  | [optional] 
 **jcrcontentprotocol_http_connection_closed** | **BOOLEAN**|  | [optional] 
 **jcrcontentprotocol_http_expired** | **String**|  | [optional] 
 **jcrcontentprotocol_http_headers** | [**Array&lt;String&gt;**](String.md)|  | [optional] 
 **jcrcontentprotocol_http_headers_type_hint** | **String**|  | [optional] 
 **jcrcontentprotocol_http_method** | **String**|  | [optional] 
 **jcrcontentprotocol_https_relaxed** | **BOOLEAN**|  | [optional] 
 **jcrcontentprotocol_interface** | **String**|  | [optional] 
 **jcrcontentprotocol_socket_timeout** | **Float**|  | [optional] 
 **jcrcontentprotocol_version** | **String**|  | [optional] 
 **jcrcontentproxy_ntlm_domain** | **String**|  | [optional] 
 **jcrcontentproxy_ntlm_host** | **String**|  | [optional] 
 **jcrcontentproxy_host** | **String**|  | [optional] 
 **jcrcontentproxy_password** | **String**|  | [optional] 
 **jcrcontentproxy_port** | **Float**|  | [optional] 
 **jcrcontentproxy_user** | **String**|  | [optional] 
 **jcrcontentqueue_batch_max_size** | **Float**|  | [optional] 
 **jcrcontentqueue_batch_mode** | **String**|  | [optional] 
 **jcrcontentqueue_batch_wait_time** | **Float**|  | [optional] 
 **jcrcontentretry_delay** | **String**|  | [optional] 
 **jcrcontentreverse_replication** | **BOOLEAN**|  | [optional] 
 **jcrcontentserialization_type** | **String**|  | [optional] 
 **jcrcontentslingresource_type** | **String**|  | [optional] 
 **jcrcontentssl** | **String**|  | [optional] 
 **jcrcontenttransport_ntlm_domain** | **String**|  | [optional] 
 **jcrcontenttransport_ntlm_host** | **String**|  | [optional] 
 **jcrcontenttransport_password** | **String**|  | [optional] 
 **jcrcontenttransport_uri** | **String**|  | [optional] 
 **jcrcontenttransport_user** | **String**|  | [optional] 
 **jcrcontenttrigger_distribute** | **BOOLEAN**|  | [optional] 
 **jcrcontenttrigger_modified** | **BOOLEAN**|  | [optional] 
 **jcrcontenttrigger_on_off_time** | **BOOLEAN**|  | [optional] 
 **jcrcontenttrigger_receive** | **BOOLEAN**|  | [optional] 
 **jcrcontenttrigger_specific** | **BOOLEAN**|  | [optional] 
 **jcrcontentuser_id** | **String**|  | [optional] 
 **jcrprimary_type** | **String**|  | [optional] 
 **operation** | **String**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **post_authorizable_keystore**
> KeystoreInformations post_authorizable_keystore(intermediate_path, authorizable_id, opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

intermediate_path = "intermediate_path_example" # String | 

authorizable_id = "authorizable_id_example" # String | 

opts = { 
  operation: "operation_example", # String | 
  current_password: "current_password_example", # String | 
  new_password: "new_password_example", # String | 
  re_password: "re_password_example", # String | 
  key_password: "key_password_example", # String | 
  key_store_pass: "key_store_pass_example", # String | 
  operation2: "operation_example", # String | 
  _alias: "_alias_example", # String | 
  new_alias: "new_alias_example", # String | 
  remove_alias: "remove_alias_example", # String | 
  cert_chain: File.new("/path/to/file.txt"), # File | 
  pk: File.new("/path/to/file.txt"), # File | 
  key_store: File.new("/path/to/file.txt") # File | 
}

begin
  result = api_instance.post_authorizable_keystore(intermediate_path, authorizable_id, opts)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_authorizable_keystore: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intermediate_path** | **String**|  | 
 **authorizable_id** | **String**|  | 
 **operation** | **String**|  | [optional] 
 **current_password** | **String**|  | [optional] 
 **new_password** | **String**|  | [optional] 
 **re_password** | **String**|  | [optional] 
 **key_password** | **String**|  | [optional] 
 **key_store_pass** | **String**|  | [optional] 
 **operation2** | **String**|  | [optional] 
 **_alias** | **String**|  | [optional] 
 **new_alias** | **String**|  | [optional] 
 **remove_alias** | **String**|  | [optional] 
 **cert_chain** | **File**|  | [optional] 
 **pk** | **File**|  | [optional] 
 **key_store** | **File**|  | [optional] 

### Return type

[**KeystoreInformations**](KeystoreInformations.md)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain



# **post_authorizables**
> String post_authorizables(authorizable_id, intermediate_path, opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

authorizable_id = "authorizable_id_example" # String | 

intermediate_path = "intermediate_path_example" # String | 

opts = { 
  create_user: "create_user_example", # String | 
  create_group: "create_group_example", # String | 
  reppassword: "reppassword_example", # String | 
  profilegiven_name: "profilegiven_name_example" # String | 
}

begin
  result = api_instance.post_authorizables(authorizable_id, intermediate_path, opts)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_authorizables: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorizable_id** | **String**|  | 
 **intermediate_path** | **String**|  | 
 **create_user** | **String**|  | [optional] 
 **create_group** | **String**|  | [optional] 
 **reppassword** | **String**|  | [optional] 
 **profilegiven_name** | **String**|  | [optional] 

### Return type

**String**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html



# **post_config_adobe_granite_saml_authentication_handler**
> post_config_adobe_granite_saml_authentication_handler(opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

opts = { 
  key_store_password: "key_store_password_example", # String | 
  key_store_password_type_hint: "key_store_password_type_hint_example", # String | 
  service_ranking: 56, # Integer | 
  service_ranking_type_hint: "service_ranking_type_hint_example", # String | 
  idp_http_redirect: true, # BOOLEAN | 
  idp_http_redirect_type_hint: "idp_http_redirect_type_hint_example", # String | 
  create_user: true, # BOOLEAN | 
  create_user_type_hint: "create_user_type_hint_example", # String | 
  default_redirect_url: "default_redirect_url_example", # String | 
  default_redirect_url_type_hint: "default_redirect_url_type_hint_example", # String | 
  user_id_attribute: "user_id_attribute_example", # String | 
  user_id_attribute_type_hint: "user_id_attribute_type_hint_example", # String | 
  default_groups: ["default_groups_example"], # Array<String> | 
  default_groups_type_hint: "default_groups_type_hint_example", # String | 
  idp_cert_alias: "idp_cert_alias_example", # String | 
  idp_cert_alias_type_hint: "idp_cert_alias_type_hint_example", # String | 
  add_group_memberships: true, # BOOLEAN | 
  add_group_memberships_type_hint: "add_group_memberships_type_hint_example", # String | 
  path: ["path_example"], # Array<String> | 
  path_type_hint: "path_type_hint_example", # String | 
  synchronize_attributes: ["synchronize_attributes_example"], # Array<String> | 
  synchronize_attributes_type_hint: "synchronize_attributes_type_hint_example", # String | 
  clock_tolerance: 56, # Integer | 
  clock_tolerance_type_hint: "clock_tolerance_type_hint_example", # String | 
  group_membership_attribute: "group_membership_attribute_example", # String | 
  group_membership_attribute_type_hint: "group_membership_attribute_type_hint_example", # String | 
  idp_url: "idp_url_example", # String | 
  idp_url_type_hint: "idp_url_type_hint_example", # String | 
  logout_url: "logout_url_example", # String | 
  logout_url_type_hint: "logout_url_type_hint_example", # String | 
  service_provider_entity_id: "service_provider_entity_id_example", # String | 
  service_provider_entity_id_type_hint: "service_provider_entity_id_type_hint_example", # String | 
  assertion_consumer_service_url: "assertion_consumer_service_url_example", # String | 
  assertion_consumer_service_url_type_hint: "assertion_consumer_service_url_type_hint_example", # String | 
  handle_logout: true, # BOOLEAN | 
  handle_logout_type_hint: "handle_logout_type_hint_example", # String | 
  sp_private_key_alias: "sp_private_key_alias_example", # String | 
  sp_private_key_alias_type_hint: "sp_private_key_alias_type_hint_example", # String | 
  use_encryption: true, # BOOLEAN | 
  use_encryption_type_hint: "use_encryption_type_hint_example", # String | 
  name_id_format: "name_id_format_example", # String | 
  name_id_format_type_hint: "name_id_format_type_hint_example", # String | 
  digest_method: "digest_method_example", # String | 
  digest_method_type_hint: "digest_method_type_hint_example", # String | 
  signature_method: "signature_method_example", # String | 
  signature_method_type_hint: "signature_method_type_hint_example", # String | 
  user_intermediate_path: "user_intermediate_path_example", # String | 
  user_intermediate_path_type_hint: "user_intermediate_path_type_hint_example" # String | 
}

begin
  api_instance.post_config_adobe_granite_saml_authentication_handler(opts)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_config_adobe_granite_saml_authentication_handler: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_store_password** | **String**|  | [optional] 
 **key_store_password_type_hint** | **String**|  | [optional] 
 **service_ranking** | **Integer**|  | [optional] 
 **service_ranking_type_hint** | **String**|  | [optional] 
 **idp_http_redirect** | **BOOLEAN**|  | [optional] 
 **idp_http_redirect_type_hint** | **String**|  | [optional] 
 **create_user** | **BOOLEAN**|  | [optional] 
 **create_user_type_hint** | **String**|  | [optional] 
 **default_redirect_url** | **String**|  | [optional] 
 **default_redirect_url_type_hint** | **String**|  | [optional] 
 **user_id_attribute** | **String**|  | [optional] 
 **user_id_attribute_type_hint** | **String**|  | [optional] 
 **default_groups** | [**Array&lt;String&gt;**](String.md)|  | [optional] 
 **default_groups_type_hint** | **String**|  | [optional] 
 **idp_cert_alias** | **String**|  | [optional] 
 **idp_cert_alias_type_hint** | **String**|  | [optional] 
 **add_group_memberships** | **BOOLEAN**|  | [optional] 
 **add_group_memberships_type_hint** | **String**|  | [optional] 
 **path** | [**Array&lt;String&gt;**](String.md)|  | [optional] 
 **path_type_hint** | **String**|  | [optional] 
 **synchronize_attributes** | [**Array&lt;String&gt;**](String.md)|  | [optional] 
 **synchronize_attributes_type_hint** | **String**|  | [optional] 
 **clock_tolerance** | **Integer**|  | [optional] 
 **clock_tolerance_type_hint** | **String**|  | [optional] 
 **group_membership_attribute** | **String**|  | [optional] 
 **group_membership_attribute_type_hint** | **String**|  | [optional] 
 **idp_url** | **String**|  | [optional] 
 **idp_url_type_hint** | **String**|  | [optional] 
 **logout_url** | **String**|  | [optional] 
 **logout_url_type_hint** | **String**|  | [optional] 
 **service_provider_entity_id** | **String**|  | [optional] 
 **service_provider_entity_id_type_hint** | **String**|  | [optional] 
 **assertion_consumer_service_url** | **String**|  | [optional] 
 **assertion_consumer_service_url_type_hint** | **String**|  | [optional] 
 **handle_logout** | **BOOLEAN**|  | [optional] 
 **handle_logout_type_hint** | **String**|  | [optional] 
 **sp_private_key_alias** | **String**|  | [optional] 
 **sp_private_key_alias_type_hint** | **String**|  | [optional] 
 **use_encryption** | **BOOLEAN**|  | [optional] 
 **use_encryption_type_hint** | **String**|  | [optional] 
 **name_id_format** | **String**|  | [optional] 
 **name_id_format_type_hint** | **String**|  | [optional] 
 **digest_method** | **String**|  | [optional] 
 **digest_method_type_hint** | **String**|  | [optional] 
 **signature_method** | **String**|  | [optional] 
 **signature_method_type_hint** | **String**|  | [optional] 
 **user_intermediate_path** | **String**|  | [optional] 
 **user_intermediate_path_type_hint** | **String**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **post_config_apache_felix_jetty_based_http_service**
> post_config_apache_felix_jetty_based_http_service(runmode, opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

runmode = "runmode_example" # String | 

opts = { 
  org_apache_felix_https_nio: true, # BOOLEAN | 
  org_apache_felix_https_nio_type_hint: "org_apache_felix_https_nio_type_hint_example", # String | 
  org_apache_felix_https_keystore: "org_apache_felix_https_keystore_example", # String | 
  org_apache_felix_https_keystore_type_hint: "org_apache_felix_https_keystore_type_hint_example", # String | 
  org_apache_felix_https_keystore_password: "org_apache_felix_https_keystore_password_example", # String | 
  org_apache_felix_https_keystore_password_type_hint: "org_apache_felix_https_keystore_password_type_hint_example", # String | 
  org_apache_felix_https_keystore_key: "org_apache_felix_https_keystore_key_example", # String | 
  org_apache_felix_https_keystore_key_type_hint: "org_apache_felix_https_keystore_key_type_hint_example", # String | 
  org_apache_felix_https_keystore_key_password: "org_apache_felix_https_keystore_key_password_example", # String | 
  org_apache_felix_https_keystore_key_password_type_hint: "org_apache_felix_https_keystore_key_password_type_hint_example", # String | 
  org_apache_felix_https_truststore: "org_apache_felix_https_truststore_example", # String | 
  org_apache_felix_https_truststore_type_hint: "org_apache_felix_https_truststore_type_hint_example", # String | 
  org_apache_felix_https_truststore_password: "org_apache_felix_https_truststore_password_example", # String | 
  org_apache_felix_https_truststore_password_type_hint: "org_apache_felix_https_truststore_password_type_hint_example", # String | 
  org_apache_felix_https_clientcertificate: "org_apache_felix_https_clientcertificate_example", # String | 
  org_apache_felix_https_clientcertificate_type_hint: "org_apache_felix_https_clientcertificate_type_hint_example", # String | 
  org_apache_felix_https_enable: true, # BOOLEAN | 
  org_apache_felix_https_enable_type_hint: "org_apache_felix_https_enable_type_hint_example", # String | 
  org_osgi_service_http_port_secure: "org_osgi_service_http_port_secure_example", # String | 
  org_osgi_service_http_port_secure_type_hint: "org_osgi_service_http_port_secure_type_hint_example" # String | 
}

begin
  api_instance.post_config_apache_felix_jetty_based_http_service(runmode, opts)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_config_apache_felix_jetty_based_http_service: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runmode** | **String**|  | 
 **org_apache_felix_https_nio** | **BOOLEAN**|  | [optional] 
 **org_apache_felix_https_nio_type_hint** | **String**|  | [optional] 
 **org_apache_felix_https_keystore** | **String**|  | [optional] 
 **org_apache_felix_https_keystore_type_hint** | **String**|  | [optional] 
 **org_apache_felix_https_keystore_password** | **String**|  | [optional] 
 **org_apache_felix_https_keystore_password_type_hint** | **String**|  | [optional] 
 **org_apache_felix_https_keystore_key** | **String**|  | [optional] 
 **org_apache_felix_https_keystore_key_type_hint** | **String**|  | [optional] 
 **org_apache_felix_https_keystore_key_password** | **String**|  | [optional] 
 **org_apache_felix_https_keystore_key_password_type_hint** | **String**|  | [optional] 
 **org_apache_felix_https_truststore** | **String**|  | [optional] 
 **org_apache_felix_https_truststore_type_hint** | **String**|  | [optional] 
 **org_apache_felix_https_truststore_password** | **String**|  | [optional] 
 **org_apache_felix_https_truststore_password_type_hint** | **String**|  | [optional] 
 **org_apache_felix_https_clientcertificate** | **String**|  | [optional] 
 **org_apache_felix_https_clientcertificate_type_hint** | **String**|  | [optional] 
 **org_apache_felix_https_enable** | **BOOLEAN**|  | [optional] 
 **org_apache_felix_https_enable_type_hint** | **String**|  | [optional] 
 **org_osgi_service_http_port_secure** | **String**|  | [optional] 
 **org_osgi_service_http_port_secure_type_hint** | **String**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **post_config_apache_sling_dav_ex_servlet**
> post_config_apache_sling_dav_ex_servlet(runmode, opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

runmode = "runmode_example" # String | 

opts = { 
  _alias: "_alias_example", # String | 
  alias_type_hint: "alias_type_hint_example", # String | 
  dav_create_absolute_uri: true, # BOOLEAN | 
  dav_create_absolute_uri_type_hint: "dav_create_absolute_uri_type_hint_example" # String | 
}

begin
  api_instance.post_config_apache_sling_dav_ex_servlet(runmode, opts)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_config_apache_sling_dav_ex_servlet: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runmode** | **String**|  | 
 **_alias** | **String**|  | [optional] 
 **alias_type_hint** | **String**|  | [optional] 
 **dav_create_absolute_uri** | **BOOLEAN**|  | [optional] 
 **dav_create_absolute_uri_type_hint** | **String**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **post_config_apache_sling_get_servlet**
> post_config_apache_sling_get_servlet(runmode, opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

runmode = "runmode_example" # String | 

opts = { 
  json_maximumresults: "json_maximumresults_example", # String | 
  json_maximumresults_type_hint: "json_maximumresults_type_hint_example", # String | 
  enable_html: true, # BOOLEAN | 
  enable_html_type_hint: "enable_html_type_hint_example", # String | 
  enable_txt: true, # BOOLEAN | 
  enable_txt_type_hint: "enable_txt_type_hint_example", # String | 
  enable_xml: true, # BOOLEAN | 
  enable_xml_type_hint: "enable_xml_type_hint_example" # String | 
}

begin
  api_instance.post_config_apache_sling_get_servlet(runmode, opts)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_config_apache_sling_get_servlet: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runmode** | **String**|  | 
 **json_maximumresults** | **String**|  | [optional] 
 **json_maximumresults_type_hint** | **String**|  | [optional] 
 **enable_html** | **BOOLEAN**|  | [optional] 
 **enable_html_type_hint** | **String**|  | [optional] 
 **enable_txt** | **BOOLEAN**|  | [optional] 
 **enable_txt_type_hint** | **String**|  | [optional] 
 **enable_xml** | **BOOLEAN**|  | [optional] 
 **enable_xml_type_hint** | **String**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **post_config_apache_sling_referrer_filter**
> post_config_apache_sling_referrer_filter(runmode, opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

runmode = "runmode_example" # String | 

opts = { 
  allow_empty: true, # BOOLEAN | 
  allow_empty_type_hint: "allow_empty_type_hint_example", # String | 
  allow_hosts: "allow_hosts_example", # String | 
  allow_hosts_type_hint: "allow_hosts_type_hint_example", # String | 
  allow_hosts_regexp: "allow_hosts_regexp_example", # String | 
  allow_hosts_regexp_type_hint: "allow_hosts_regexp_type_hint_example", # String | 
  filter_methods: "filter_methods_example", # String | 
  filter_methods_type_hint: "filter_methods_type_hint_example" # String | 
}

begin
  api_instance.post_config_apache_sling_referrer_filter(runmode, opts)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_config_apache_sling_referrer_filter: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runmode** | **String**|  | 
 **allow_empty** | **BOOLEAN**|  | [optional] 
 **allow_empty_type_hint** | **String**|  | [optional] 
 **allow_hosts** | **String**|  | [optional] 
 **allow_hosts_type_hint** | **String**|  | [optional] 
 **allow_hosts_regexp** | **String**|  | [optional] 
 **allow_hosts_regexp_type_hint** | **String**|  | [optional] 
 **filter_methods** | **String**|  | [optional] 
 **filter_methods_type_hint** | **String**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **post_node**
> post_node(path, name, opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

path = "path_example" # String | 

name = "name_example" # String | 

opts = { 
  operation: "operation_example", # String | 
  delete_authorizable: "delete_authorizable_example", # String | 
  file: File.new("/path/to/file.txt") # File | 
}

begin
  api_instance.post_node(path, name, opts)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_node: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 
 **name** | **String**|  | 
 **operation** | **String**|  | [optional] 
 **delete_authorizable** | **String**|  | [optional] 
 **file** | **File**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain



# **post_node_rw**
> post_node_rw(path, name, opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

path = "path_example" # String | 

name = "name_example" # String | 

opts = { 
  add_members: "add_members_example" # String | 
}

begin
  api_instance.post_node_rw(path, name, opts)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_node_rw: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 
 **name** | **String**|  | 
 **add_members** | **String**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **post_path**
> post_path(path, jcrprimary_type, name)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

path = "path_example" # String | 

jcrprimary_type = "jcrprimary_type_example" # String | 

name = "name_example" # String | 


begin
  api_instance.post_path(path, jcrprimary_type, name)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_path: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 
 **jcrprimary_type** | **String**|  | 
 **name** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **post_query**
> String post_query(path, p_limit, _1_property, _1_property_value)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

path = "path_example" # String | 

p_limit = 3.4 # Float | 

_1_property = "_1_property_example" # String | 

_1_property_value = "_1_property_value_example" # String | 


begin
  result = api_instance.post_query(path, p_limit, _1_property, _1_property_value)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_query: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 
 **p_limit** | **Float**|  | 
 **_1_property** | **String**|  | 
 **_1_property_value** | **String**|  | 

### Return type

**String**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **post_tree_activation**
> post_tree_activation(ignoredeactivated, onlymodified, path)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

ignoredeactivated = true # BOOLEAN | 

onlymodified = true # BOOLEAN | 

path = "path_example" # String | 


begin
  api_instance.post_tree_activation(ignoredeactivated, onlymodified, path)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_tree_activation: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ignoredeactivated** | **BOOLEAN**|  | 
 **onlymodified** | **BOOLEAN**|  | 
 **path** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain



# **post_truststore**
> String post_truststore(opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

opts = { 
  operation: "operation_example", # String | 
  new_password: "new_password_example", # String | 
  re_password: "re_password_example", # String | 
  key_store_type: "key_store_type_example", # String | 
  remove_alias: "remove_alias_example", # String | 
  certificate: File.new("/path/to/file.txt") # File | 
}

begin
  result = api_instance.post_truststore(opts)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_truststore: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation** | **String**|  | [optional] 
 **new_password** | **String**|  | [optional] 
 **re_password** | **String**|  | [optional] 
 **key_store_type** | **String**|  | [optional] 
 **remove_alias** | **String**|  | [optional] 
 **certificate** | **File**|  | [optional] 

### Return type

**String**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain



# **post_truststore_pkcs12**
> String post_truststore_pkcs12(opts)



### Example
```ruby
# load the gem
require 'swagger_aem'
# setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::SlingApi.new

opts = { 
  truststore_p12: File.new("/path/to/file.txt") # File | 
}

begin
  result = api_instance.post_truststore_pkcs12(opts)
  p result
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling SlingApi->post_truststore_pkcs12: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **truststore_p12** | **File**|  | [optional] 

### Return type

**String**

### Authorization

[aemAuth](../README.md#aemAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain




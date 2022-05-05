$credentials = [convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$('AzureDiamond'):$('hunter2')"))

iwr -Uri 'http://httpbin.org/basic-auth/AzureDiamond/hunter2' -Headers @{'Authorization' = 'Basic '+ $credentials}
$User = "GitHubUserName"
$Token = "sampleToken"

$base64AuthInfo = [convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("$($User):$($Token)"))

$Header = @{
  Authorization = "Basic $base64AuthInfo"

}


# Function Get-AvgScoreVal{
#   param($Name, $Runs, $Outs)
#   $avg  = [int] ($Runs/$Outs *100)/100
  
#   Write-Host "$Name's Average = $avg"

# }

# # Get-AvgScoreVal Dhoni 6990 80

# # $PSVersionTable | Select-Object PSVersion


# Function Get-FactorialValue{
#   param([BigInt] $num)

#   $res = 1

#   if($num -ne 0){
#     $res = $num * (Get-FactorialValue($num-1))
#   }
#   echo($res)
# }

# Get-FactorialValue(5)

# Function Get-StarPattern{
#   param ([int] $maxStars)

#   $count = 1

#   for ($x = 1; $x -le $maxStars; $x++){
#     for ($y = 1; $y -le $x; $y++){
#       Write-Host '*' -NoNewline
#     }
#     Write-Host ""
#   }  
# }

# Get-StarPattern(5)


# # API Call 
# Invoke-WebRequest http://httpbin.org/json

# iwr http://httpbin.org/json # Alias for Invoke-WebRequest


# # API POST Call

# $Body = @{
#   Cook = "Sid"
#   Meal = "Pizza"
# }

# $Parameters = @{
#   Method = "POST"
#   Uri = "https://4besday4.azurewebsites.net/api/AddMeal"
#   Body = ($Body | ConvertTo-Json)
#   ContentType= 'application/json'
# }

# iwr @Parameters

# String Operations in PowerShell
$msg = 'Hello World'

$msg -match 'o w' # case insensitive, returns True

'KA,UP,MP' -split ',' 

$number = "5420 3430 2400 4333"
$number = "5420 3430 2400 4333. My number is 238-2354"

switch -regex ($number){
  '\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d'{
    Write-Warning 'This is a Credit Card'
  } 

  '[\d]{3}-[\d]{4}'{
    Write-Warning 'This is a Phone Number'
  }
}

for($b-1){$a,$b-$b,($a+$b)}
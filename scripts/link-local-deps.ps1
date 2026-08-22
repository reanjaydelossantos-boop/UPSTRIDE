$modules = Join-Path $PSScriptRoot '..\node_modules'
$links = @{
  'next' = '.pnpm\next@15.5.23_react-dom@19.2.8_react@19.2.8__react@19.2.8\node_modules\next'
  'react' = '.pnpm\react@19.2.8\node_modules\react'
  'react-dom' = '.pnpm\react-dom@19.2.8_react@19.2.8\node_modules\react-dom'
  'lucide-react' = '.pnpm\lucide-react@0.468.0_react@19.2.8\node_modules\lucide-react'
  'typescript' = '.pnpm\typescript@5.9.3\node_modules\typescript'
}
foreach ($name in $links.Keys) {
  $target = Join-Path $modules $links[$name]
  $link = Join-Path $modules $name
  if (!(Test-Path $link)) { New-Item -ItemType Junction -Path $link -Target $target | Out-Null }
}
$types = Join-Path $modules '@types'
New-Item -ItemType Directory -Force -Path $types | Out-Null
$typeLinks = @{
  'node' = '..\.pnpm\@types+node@22.20.1\node_modules\@types\node'
  'react' = '..\.pnpm\@types+react@19.2.18\node_modules\@types\react'
  'react-dom' = '..\.pnpm\@types+react-dom@19.2.4_@types+react@19.2.18\node_modules\@types\react-dom'
}
foreach ($name in $typeLinks.Keys) {
  $target = [IO.Path]::GetFullPath((Join-Path $types $typeLinks[$name]))
  $link = Join-Path $types $name
  if (!(Test-Path $link)) { New-Item -ItemType Junction -Path $link -Target $target | Out-Null }
}

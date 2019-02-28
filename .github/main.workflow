workflow "Run CI and deploy to staging on push" {
  on = "push"
  resolves = ["Deploy to Zeit"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "Lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  runs = "npm run lint"
}

action "Deploy to Zeit" {
  uses = "actions/zeit-now@666edee2f3632660e9829cb6801ee5b7d47b303d"
  needs = ["Lint"]
  secrets = ["ZEIT_TOKEN"]
}

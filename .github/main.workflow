workflow "Run CI and deploy to staging on push" {
  on = "push"
  resolves = ["Build to Zeit", "Lint"]
}

action "Build to Zeit" {
  uses = "actions/zeit-now@666edee2f3632660e9829cb6801ee5b7d47b303d"
  needs = ["Lint"]
  secrets = ["ZEIT_TOKEN"]
}

action "Lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run lint"
}

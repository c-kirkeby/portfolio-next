workflow "Run CI and deploy to staging on push" {
  on = "push"
  resolves = ["Deploy to Zeit"]
}

action "Deploy to Zeit" {
  uses = "actions/zeit-now@666edee2f3632660e9829cb6801ee5b7d47b303d"
  secrets = ["ZEIT_TOKEN"]
}

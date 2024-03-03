curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/users/trmchale1/gists > myGists.json

curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/trmchale1/tim-s-gatsby-app > GatsbyRepo.json

curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/trmchale1/tim-s-gatsby-app/activity > GatsbyActivity.json



  # checkout the events link in GatsbyRepo.json https://api.github.com/repos/trmchale1/tim-s-gatsby-app/events
  # might some good stuff in there
  # the third curl has a history of the repo

python3 parse.py
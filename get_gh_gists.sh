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
  
  # meta tag twitter card feature
  
python3 parse.py
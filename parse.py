import json
from urllib.request import urlopen

repo_activity = []
count = 0


def read_gists_into_dict():
    global count
    with open('myGists.json') as file:
        gist_data = json.load(file)
        for gist in gist_data:
            get_avatar(gist)
            modify_gist_json(gist)


def read_repo_activity_to_dict():
    global count
    with open('GatsbyActivity.json') as file:
        repo_data = json.load(file)
        for repo in repo_data:
            modify_repo_json(repo)


def read_hacking_repo_activity_to_dict():
    global count
    with open('hackingActivity.json') as file:
        repo_data = json.load(file)
        for repo in repo_data:
            modify_hacking_repo_json(repo)


def print_dict_to_json(py_dict, filename):
    json_obj = json.dumps(py_dict, indent=4)
    with open(filename, "w") as outfile:
        outfile.write(json_obj)


def modify_gist_json(gist):
    global count
    raw_url = None

    # Find the first .md file
    for filename in gist.get("files", {}):
        if filename.endswith(".md"):
            raw_url = gist["files"][filename].get("raw_url")
            break

    if not raw_url:
        print(f"⚠️  Skipping gist without .md file: {gist.get('description', 'No description')}")
        return

    try:
        with urlopen(raw_url) as response:
            content = response.read()
        text = content.decode("utf-8", "ignore")

        gist_dict = {
            "key": count,
            "html_link": gist["html_url"],
            "timestamp": gist["created_at"],
            "description": gist.get("description", ""),
            "content": text
        }
        repo_activity.append(gist_dict)
        count += 1
    except Exception as e:
        print(f"❌ Failed to fetch gist {gist.get('html_url')}: {e}")


def modify_repo_json(repo_obj):
    global count
    if repo_obj.get("activity_type") == "push":
        return  # Skip pushes if you want

    html_link = f"https://github.com/trmchale1/tim-s-gatsby-app/commit/{repo_obj['after']}"
    ref_parts = repo_obj["ref"].split('/')
    branch = ref_parts[-1]

    repo_dict = {
        "key": count,
        "html_link": html_link,
        "branch": branch,
        "timestamp": repo_obj["timestamp"],
        "activity_type": repo_obj["activity_type"],
        "repo": "tim-s-gatsby-app"
    }
    repo_activity.append(repo_dict)
    count += 1


def modify_hacking_repo_json(repo_obj):
    global count
    html_link = f"https://github.com/trmchale1/hacking/commit/{repo_obj['after']}"
    ref_parts = repo_obj["ref"].split('/')
    branch = ref_parts[-1]

    repo_dict = {
        "key": count,
        "html_link": html_link,
        "branch": branch,
        "timestamp": repo_obj["timestamp"],
        "activity_type": repo_obj["activity_type"],
        "repo": "hacking"
    }
    repo_activity.append(repo_dict)
    count += 1


def get_avatar(gist):
    avatar_url = gist.get("owner", {}).get("avatar_url")
    if avatar_url:
        avatar_json = {"avatar": avatar_url}
        print_dict_to_json(avatar_json, 'src/json/avatar.json')


def sort_json(filename):
    with open(filename, 'r') as unsorted_file:
        unsorted_data = json.load(unsorted_file)

    sorted_data = sorted(unsorted_data, key=lambda x: x.get('timestamp', ''), reverse=True)

    with open(filename, 'w') as sorted_file:
        json.dump(sorted_data, sorted_file, indent=2)


# ====================== MAIN ======================
read_gists_into_dict()
read_repo_activity_to_dict()
read_hacking_repo_activity_to_dict()

print_dict_to_json(repo_activity, "src/json/repo_activity.json")
sort_json("src/json/repo_activity.json")

print(f"✅ Done! Processed {len(repo_activity)} items.")
import json 
import requests

list_of_gist_links = []
dict_gists_super = {}
appended_gists = []
repo_activity = []
global count
count = 0

# New Branch -- frontend-styling-2

# Delete commit pushes to make the number of links smaller check
# Add some styling to the commits themselves to make them smaller
# add images for each type of commit
# what happened to date check
# # meta tag twitter card feature
# comes out weird in safari mobile, fix the mobile experience
# reverse the sort of the json objects, newest first


def read_gists_into_dict():
    with open('myGists.json') as file:
        gist_data = json.load(file)
        for gist in gist_data:
            get_avatar(gist)
            modify_gist_json(gist)
            
            
def read_repo_activity_to_dict():
    with open('GatsbyActivity.json') as file:
        repo_data = json.load(file)
        for repo in repo_data:
            modify_repo_json(repo)
            
        
def print_dict_to_json(py_dict, filename):
    json_obj = json.dumps(py_dict, indent=4)
    with open(filename, "w") as outfile:
        outfile.write(json_obj)

# How do I get content here        
def modify_gist_json(gist):    
    global count
    raw_url = ""
    for filename in gist["files"]:
        if filename.endswith(".md"):
            raw_url = gist["files"][filename]["raw_url"]
    response = requests.get(raw_url)
    gist_dict = dict({"key": count, "html_link" : gist["html_url"], "timestamp" : gist["created_at"], "description" : gist["description"], "content" : response.text})
    count = count + 1
    repo_activity.append(gist_dict)
    

def modify_repo_json(repo_obj):
    global count
    html_link = "https://github.com/trmchale1/tim-s-gatsby-app/commit/" + repo_obj["after"]
    ref_parts = repo_obj["ref"].split('/')
    branch = ref_parts[-1]
    if repo_obj["activity_type"] == "push":
        pass
    else:
        repo_dict = dict({"key": count, "html_link": html_link, "branch": branch,"timestamp": repo_obj["timestamp"], "activity_type": repo_obj["activity_type"], "repo" : "tim-s-gatsby-app"})
        count = count + 1
        repo_activity.append(repo_dict)

def get_avatar(json):
    avatar_json = {}
    avatar_json["avatar"] = json["owner"]["avatar_url"]
    print_dict_to_json(avatar_json, 'src/json/avatar.json')
    
def sort_json(filename):
    with open(filename, 'r') as unsorted_file:
        unsorted_data = json.load(unsorted_file)

    sorted_data = sorted(unsorted_data, key=lambda x: x.get('timestamp', ''), reverse=True)

    with open(filename, 'w') as sorted_file:
        json.dump(sorted_data, sorted_file, indent=2)
        
def delete_pushes(filename):
    with open(filename, 'r') as file:
        data = json.load(file)
        
    
read_gists_into_dict()    
read_repo_activity_to_dict()
print_dict_to_json(repo_activity, "src/json/repo_activity.json")
print_dict_to_json(repo_activity, "src/json/repo_activity.json")
sort_json("src/json/repo_activity.json")

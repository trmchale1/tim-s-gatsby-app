import json 
import requests

list_of_gist_links = []
dict_gists_super = {}
appended_gists = []
repo_activity = []

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

        
def modify_gist_json(gist):    
    gist_dict = dict({"api_url" : gist["url"], "html_url" : gist["html_url"], "created_at" : gist["created_at"], "description" : gist["description"], "files" : gist["files"]})
    appended_gists.append(gist_dict)
    
    
def modify_repo_json(repo_obj):
    repo_dict = dict({"before": repo_obj["before"], "after": repo_obj["after"], "ref": repo_obj["ref"],"timestamp": repo_obj["timestamp"], "activity_type": repo_obj["activity_type"]})
    print(repo_dict)
    repo_activity.append(repo_dict)

def get_avatar(json):
    avatar_json = {}
    avatar_json["avatar"] = json["owner"]["avatar_url"]
    print_dict_to_json(avatar_json, 'src/json/avatar.json')    
    

read_gists_into_dict()    
read_repo_activity_to_dict()
print_dict_to_json(appended_gists, "src/json/gists.json")
print_dict_to_json(repo_activity, "src/json/repo_activity.json")

# Unfortunetly after you run this, you have to add key = 3, for each gist, also delete the filename and turn into a list of dicts
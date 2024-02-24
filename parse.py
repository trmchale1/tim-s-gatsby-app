import json 
import requests

list_of_gist_links = []
dict_gists_super = {}
appended_gists = []

def read_json_into_dict():
    with open('myGists.json') as file:
        json_data = json.load(file)
        for gist in json_data:
            get_avatar(gist)
            modify_gist_json(gist)
            
        
def print_dict_to_json(py_dict, filename):
    json_obj = json.dumps(py_dict, indent=4)
    with open(filename, "w") as outfile:
        outfile.write(json_obj)

        
def modify_gist_json(gist):
    gist_dict = {}
    gist_dict = dict({"api_url" : gist["url"], "html_url" : gist["html_url"], "created_at" : gist["created_at"], "description" : gist["description"], "files" : gist["files"]})
    appended_gists.append(gist_dict)


def get_avatar(json):
    avatar_json = {}
    avatar_json["avatar"] = json["owner"]["avatar_url"]
    print_dict_to_json(avatar_json, 'src/json/avatar.json')    
    
    
read_json_into_dict()    
print_dict_to_json(appended_gists, "src/json/gists.json")
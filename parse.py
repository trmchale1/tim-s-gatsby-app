import json 
import requests


list_of_gist_links = []
dict_gists_super = {}

def read_json_into_dict():
    with open('myGists.json') as file:
        filename = ""
        json_data = json.load(file)
        count = 0
        for object in json_data:
            if count == 0:
                filename = "Fallout.md"
            elif count == 1:
                filename = "fallback.md"
            convert_raw_gist_to_data_struct(object, filename)
            count = count + 1 
        
def print_dict_to_json():
    json_obj = json.dumps(dict_gists_super, indent=4)
    with open("read_json.json", "w") as outfile:
        outfile.write(json_obj)
        
def convert_raw_gist_to_data_struct(object, filename):
    content = []
    dict_gists_sub = {}
    dict_gists_super["avatar"] = object["owner"]["avatar_url"]
    gist_url = object["files"][filename]["raw_url"]      
    get_gist_contents = requests.get(gist_url)      
    content.append(get_gist_contents.text)
    dict_gists_sub[filename] = content
    dict_gists_super.update(dict_gists_sub)
    

read_json_into_dict()    
print_dict_to_json()
        
        
    
    
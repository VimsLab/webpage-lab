# f = open('PublicationsData.txt', 'r')

# for i in f.readlines():
#     print(i)

# f.close()

import re
from collections import defaultdict

def parse_data():
    f = open('PublicationsData.txt', 'r')
    lines = f.readlines()
    f.close()
    # lines = data.strip().split('\n')
    # parsed_data = defaultdict(lambda: defaultdict(list))
    # parsed_data = defaultdict(list)
    parsed_data = []
    
    current_year = None
    current_category = None
    id = 1
    
    for line in lines:
        if line.startswith('!'):
            if re.match(r'!\d{4}', line):
                current_year = line.strip('!').strip('\n')
            elif line.startswith('!!'):
                current_category = line.strip('!!').strip('\n').lstrip(' ')
        elif line.startswith('*'):
            if '[[' in line and ']]' in line:
                match = re.search(r'\[\[(.*?)\s*\|\s*(.*?)\]\]', line)
                if match:
                    link_text, link_url = match.groups()
                    entry = {
                        # 'id' : id,
                        'category': current_category,
                        'year': current_year,
                        'text': re.sub(r'\[\[.*?\]\]', '', line).strip('*').strip('\n'),
                        'link_text': link_text,
                        'link_url': link_url
                    }
                else:
                    entry = {'category': current_category, 'year': current_year, 'text': line.strip('*').strip('\n')}
            else:
                entry = {'category': current_category, 'year': current_year, 'text': line.strip('*').strip('\n')}
            # parsed_data[current_category][current_year].append(entry)
            # parsed_data[current_category].append(entry)
            parsed_data.append(entry)
            id += 1
    
    # return dict(parsed_data)
    return parsed_data

parsed_data = parse_data()

# import pprint
# pprint.pprint(parsed_data)

# print(parsed_data)
# print(parsed_data)


import json

js_content = "export default " + json.dumps(parsed_data, indent=2) + ";"

# Write the JSON string to a .js file
with open("experiment.js", "w") as file:
    file.write(js_content)

# with open("Journal-paper-data.js", "w") as outfile:
#     json.dump(parsed_data['Journal Papers'], outfile)
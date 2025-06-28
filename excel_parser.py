import pandas as pd
import json

# Load the Excel file
file_path = 'D:\Downloads\BackpackTech_v29_1.xlsx'  # Change this to your Excel file path
df = pd.read_excel(file_path, sheet_name='FilteredData')
print(df.columns)
# Define a function to create the JSON structure
def create_json_structure(df):
    json_list = []

    for index, row in df.iterrows():
        # Check the data type of row.iloc[7]
        if isinstance(row.iloc[7], float):
            print(f"Float encountered at index {index}, breaking the loop.")
            break  # Exit the loop if a float is encountered

        id_value = row.iloc[7]

        json_object = {
            "id": id_value.lower().replace(' ', '_') if isinstance(id_value, str) else str(id_value) if pd.notnull(id_value) else None,
            "name": id_value,
            "description": row.iloc[8],
            "total_value": row.iloc[9],
            "value": row.iloc[10],
            "level": row.iloc[11],
            "cost": row.iloc[12]
        }
        json_list.append(json_object)

    return json_list

# Create JSON data
json_data = create_json_structure(df)

# Define the output JSON file path
output_file_path = 'output.json'  # Change this to your desired output path

# Write JSON data to a file
with open(output_file_path, 'w') as json_file:
    json.dump(json_data, json_file, indent=4)

print(f'JSON output is written to {output_file_path}')

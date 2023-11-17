




student = {
    "name": "John Doe",
    "age": 21,
    "courses": []
}

#print(student.get("courses", "N/A"))


nodes = {
    "age":10,
    "children": [{
        "food": "eat"
    }]
}


student["courses"].append(nodes)

print(student)
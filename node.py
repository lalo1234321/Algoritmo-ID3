class Node:
    def __init__(self, path="", data="", nodes=[], parent=None, depth = 1):
        self.path = path
        self.data = data
        self.nodes = []
        self.parent = parent
        self.depth = depth

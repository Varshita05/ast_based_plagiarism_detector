import ast

def extract_subtrees(node):
    subtrees = []

    for child in ast.walk(node):
        subtrees.append(type(child).__name__)

    return subtrees
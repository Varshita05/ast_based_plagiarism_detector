import ast

def get_ast_tree(code: str):
    try:
        return ast.parse(code)
    except Exception:
        return None


def ast_to_tokens(node):
    tokens = []

    for child in ast.walk(node):
        tokens.append(type(child).__name__)

    return tokens
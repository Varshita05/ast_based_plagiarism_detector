import ast

def parse_code_to_ast(code: str):
    try:
        return ast.parse(code)
    except SyntaxError:
        return None
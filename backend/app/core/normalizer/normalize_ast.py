import ast
from .rename_identifiers import RenameIdentifiers

def normalize_ast(tree):
    transformer = RenameIdentifiers()
    tree = transformer.visit(tree)
    ast.fix_missing_locations(tree)
    return tree
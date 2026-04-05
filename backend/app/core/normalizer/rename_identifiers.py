import ast

class RenameIdentifiers(ast.NodeTransformer):

    def __init__(self):
        self.var_map = {}
        self.counter = 0

    def new_name(self):
        self.counter += 1
        return f"VAR_{self.counter}"
    
    def visit_FunctionDef(self, node):
        node.name = "FUNC"
        self.generic_visit(node)
        return node
    
    def visit_arg(self, node):
        if node.arg not in self.var_map:
            self.var_map[node.arg] = self.new_name()
        node.arg = self.var_map[node.arg]
        return node


    def visit_Name(self, node):
        if node.id not in self.var_map:
            self.var_map[node.id] = self.new_name()
        node.id = self.var_map[node.id]
        return node
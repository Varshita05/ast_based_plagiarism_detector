def extract_paths(node, path=None, paths=None):
    if paths is None:
        paths = []
    if path is None:
        path = []

    path.append(type(node).__name__)

    children = list(getattr(node, '_fields', []))
    for field in children:
        child = getattr(node, field, None)
        if isinstance(child, list):
            for item in child:
                if hasattr(item, "_fields"):
                    extract_paths(item, path.copy(), paths)
        elif hasattr(child, "_fields"):
            extract_paths(child, path.copy(), paths)

    paths.append(tuple(path))
    return paths
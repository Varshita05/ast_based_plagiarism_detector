const ASTViewer = ({ astData }) => {
    return (
        <div className="ast-viewer">
            <h3>AST Viewer</h3>
            <pre>{JSON.stringify(astData, null, 2)}</pre>
        </div>
    );
};

export default ASTViewer;
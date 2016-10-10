import * as ts from "byots";

let testString = "tokens: ";

export function syntaxKindToName(kind: ts.SyntaxKind) {
    return (<any>ts).SyntaxKind[kind];
}

document!.body!.onload = () => { 

    function printAllChildren(node: ts.Node, depth = 0) {
    testString += new Array(depth + 1).join('----') + syntaxKindToName(node.kind) 
                                                    + " @ " 
                                                    + node.pos 
                                                    + "-" 
                                                    + node.end
                                                    + " --> "
                                                    + node.getText()
                                                    + "<br>";
    depth++;
    node.getChildren().forEach(c=> printAllChildren(c, depth));
    }

    var sourceCode = `
    var foo = 123;
    foo = foo + 789;
    `.trim();

    var sourceFile = ts.createSourceFile('foo.ts', sourceCode, ts.ScriptTarget.ES5, true);
    printAllChildren(sourceFile);
    
    document.body.innerHTML = testString;

}
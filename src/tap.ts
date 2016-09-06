import * as ts from "byots";

let tsString = "var p: int = 1";

document!.body!.onload = () => { 
    
    document.body.innerHTML = tsString + ts.ScriptKind.Unknown;

}
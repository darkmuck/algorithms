var numArray;

function QuickFindUF(numToFind) {
    numArray = new Array(numToFind);
    
    for (var i = 0; i < numToFind; i++) {
        numArray[i] = i;
        document.write(numArray[i] + "<br/>");
    }
}

function connected(p,q) {
    return numArray[p] == numArray[q];   
}

function union(p,q) {
    var pid = numArray[p];
    var qid = numArray[q];
    for (var i=0; i < numArray.length();i++){
        if (numArray[i] == pid) numArray[i] = qid;
    }
}